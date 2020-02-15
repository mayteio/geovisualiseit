import React, { useEffect, useState, useContext } from 'react';
import Auth, { AuthClass } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { HubCapsule } from '@aws-amplify/core/lib-esm/Hub';
import { CognitoUser } from 'amazon-cognito-identity-js';

const AuthentiationContext = React.createContext<
  | {
      signIn: AuthClass['signIn'];
      signOut: AuthClass['signOut'];
      forgotPassword: AuthClass['forgotPassword'];
      changePassword: AuthClass['changePassword'];
      completeNewPassword: AuthClass['completeNewPassword'];
    }
  | undefined
>(undefined);
const UserContext = React.createContext<CognitoUser | undefined>(undefined);

/**
 * This is written specifically for Amplify/Hub, however, you can replace
 * this provider with another provider (say <AzureProvider />) that replicates
 * the API above and everything using useAuth and useUser should just work!
 */
export const AuthenticationProvider: React.FC = ({ children }) => {
  // methods used in this app.
  const signIn = Auth.signIn;
  const signOut = Auth.signOut;
  const forgotPassword = Auth.forgotPassword;
  const changePassword = Auth.changePassword;
  const completeNewPassword = Auth.completeNewPassword;

  // on mount, store the user and listen to hub changes (Amplify's internal)
  const [user, setUser] = useState<undefined | CognitoUser>(undefined);
  useEffect(() => {
    // get user on mount with a immediately invoked function
    (async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user === 'not authenticated' ? undefined : user);
      } catch (error) {
        // trackBug(error)
      }
    })();

    // bind hub listener for auth changes
    const listener = async ({ payload }: HubCapsule) => {
      if (payload.event === 'signIn') {
        try {
          const user = await Auth.currentAuthenticatedUser();
          setUser(user);
        } catch (error) {
          // trackBug(error)
        }
      } else if (payload.event === 'signOut') {
        setUser(undefined);
      }
    };
    Hub.listen('auth', listener);

    // clean up hub listener
    return () => {
      Hub.remove('auth', listener);
    };
  }, []);

  return (
    <AuthentiationContext.Provider
      value={{
        signIn,
        signOut,
        forgotPassword,
        changePassword,
        completeNewPassword,
      }}
    >
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </AuthentiationContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthentiationContext);
  if (!context)
    throw Error(
      'No AuthenticationContext. Did you forget to wrap your app in <AuthenticationProvider />?'
    );
  return context;
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
