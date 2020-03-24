/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateVisualisationInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  image?: S3ObjectInput | null,
  visualisationUserId?: string | null,
  visualisationConfigId?: string | null,
};

export type S3ObjectInput = {
  bucket?: string | null,
  key: string,
  region?: string | null,
  identityId: string,
};

export type ModelVisualisationConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelVisualisationConditionInput | null > | null,
  or?: Array< ModelVisualisationConditionInput | null > | null,
  not?: ModelVisualisationConditionInput | null,
};

export type UpdateVisualisationInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  image?: S3ObjectInput | null,
  visualisationUserId?: string | null,
  visualisationConfigId?: string | null,
};

export type DeleteVisualisationInput = {
  id?: string | null,
};

export type CreateConfigInput = {
  id?: string | null,
  file: S3ObjectInput,
};

export type ModelConfigConditionInput = {
  and?: Array< ModelConfigConditionInput | null > | null,
  or?: Array< ModelConfigConditionInput | null > | null,
  not?: ModelConfigConditionInput | null,
};

export type UpdateConfigInput = {
  id: string,
  file?: S3ObjectInput | null,
};

export type DeleteConfigInput = {
  id?: string | null,
};

export type CreateDatasetInput = {
  id?: string | null,
  title: string,
  file: S3ObjectInput,
  datasetVisualisationId?: string | null,
};

export type ModelDatasetConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelDatasetConditionInput | null > | null,
  or?: Array< ModelDatasetConditionInput | null > | null,
  not?: ModelDatasetConditionInput | null,
};

export type UpdateDatasetInput = {
  id: string,
  title?: string | null,
  file?: S3ObjectInput | null,
  datasetVisualisationId?: string | null,
};

export type DeleteDatasetInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelVisualisationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelVisualisationFilterInput | null > | null,
  or?: Array< ModelVisualisationFilterInput | null > | null,
  not?: ModelVisualisationFilterInput | null,
};

export type ModelConfigFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelConfigFilterInput | null > | null,
  or?: Array< ModelConfigFilterInput | null > | null,
  not?: ModelConfigFilterInput | null,
};

export type ModelDatasetFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelDatasetFilterInput | null > | null,
  or?: Array< ModelDatasetFilterInput | null > | null,
  not?: ModelDatasetFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    visualisations:  {
      __typename: "ModelVisualisationConnection",
      items:  Array< {
        __typename: "Visualisation",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    visualisations:  {
      __typename: "ModelVisualisationConnection",
      items:  Array< {
        __typename: "Visualisation",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    visualisations:  {
      __typename: "ModelVisualisationConnection",
      items:  Array< {
        __typename: "Visualisation",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateVisualisationMutationVariables = {
  input: CreateVisualisationInput,
  condition?: ModelVisualisationConditionInput | null,
};

export type CreateVisualisationMutation = {
  createVisualisation:  {
    __typename: "Visualisation",
    id: string,
    title: string,
    description: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      visualisations:  {
        __typename: "ModelVisualisationConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    config:  {
      __typename: "Config",
      id: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null,
    datasets:  {
      __typename: "ModelDatasetConnection",
      items:  Array< {
        __typename: "Dataset",
        id: string,
        title: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateVisualisationMutationVariables = {
  input: UpdateVisualisationInput,
  condition?: ModelVisualisationConditionInput | null,
};

export type UpdateVisualisationMutation = {
  updateVisualisation:  {
    __typename: "Visualisation",
    id: string,
    title: string,
    description: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      visualisations:  {
        __typename: "ModelVisualisationConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    config:  {
      __typename: "Config",
      id: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null,
    datasets:  {
      __typename: "ModelDatasetConnection",
      items:  Array< {
        __typename: "Dataset",
        id: string,
        title: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteVisualisationMutationVariables = {
  input: DeleteVisualisationInput,
  condition?: ModelVisualisationConditionInput | null,
};

export type DeleteVisualisationMutation = {
  deleteVisualisation:  {
    __typename: "Visualisation",
    id: string,
    title: string,
    description: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      visualisations:  {
        __typename: "ModelVisualisationConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    config:  {
      __typename: "Config",
      id: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null,
    datasets:  {
      __typename: "ModelDatasetConnection",
      items:  Array< {
        __typename: "Dataset",
        id: string,
        title: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateConfigMutationVariables = {
  input: CreateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type CreateConfigMutation = {
  createConfig:  {
    __typename: "Config",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type UpdateConfigMutationVariables = {
  input: UpdateConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type UpdateConfigMutation = {
  updateConfig:  {
    __typename: "Config",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type DeleteConfigMutationVariables = {
  input: DeleteConfigInput,
  condition?: ModelConfigConditionInput | null,
};

export type DeleteConfigMutation = {
  deleteConfig:  {
    __typename: "Config",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type CreateDatasetMutationVariables = {
  input: CreateDatasetInput,
  condition?: ModelDatasetConditionInput | null,
};

export type CreateDatasetMutation = {
  createDataset:  {
    __typename: "Dataset",
    id: string,
    visualisation:  {
      __typename: "Visualisation",
      id: string,
      title: string,
      description: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        owner: string | null,
      } | null,
      config:  {
        __typename: "Config",
        id: string,
        owner: string | null,
      } | null,
      datasets:  {
        __typename: "ModelDatasetConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      } | null,
      owner: string | null,
    } | null,
    title: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type UpdateDatasetMutationVariables = {
  input: UpdateDatasetInput,
  condition?: ModelDatasetConditionInput | null,
};

export type UpdateDatasetMutation = {
  updateDataset:  {
    __typename: "Dataset",
    id: string,
    visualisation:  {
      __typename: "Visualisation",
      id: string,
      title: string,
      description: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        owner: string | null,
      } | null,
      config:  {
        __typename: "Config",
        id: string,
        owner: string | null,
      } | null,
      datasets:  {
        __typename: "ModelDatasetConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      } | null,
      owner: string | null,
    } | null,
    title: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type DeleteDatasetMutationVariables = {
  input: DeleteDatasetInput,
  condition?: ModelDatasetConditionInput | null,
};

export type DeleteDatasetMutation = {
  deleteDataset:  {
    __typename: "Dataset",
    id: string,
    visualisation:  {
      __typename: "Visualisation",
      id: string,
      title: string,
      description: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        owner: string | null,
      } | null,
      config:  {
        __typename: "Config",
        id: string,
        owner: string | null,
      } | null,
      datasets:  {
        __typename: "ModelDatasetConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      } | null,
      owner: string | null,
    } | null,
    title: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    visualisations:  {
      __typename: "ModelVisualisationConnection",
      items:  Array< {
        __typename: "Visualisation",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      visualisations:  {
        __typename: "ModelVisualisationConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetVisualisationQueryVariables = {
  id: string,
};

export type GetVisualisationQuery = {
  getVisualisation:  {
    __typename: "Visualisation",
    id: string,
    title: string,
    description: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      visualisations:  {
        __typename: "ModelVisualisationConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    config:  {
      __typename: "Config",
      id: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null,
    datasets:  {
      __typename: "ModelDatasetConnection",
      items:  Array< {
        __typename: "Dataset",
        id: string,
        title: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    } | null,
    owner: string | null,
  } | null,
};

export type ListVisualisationsQueryVariables = {
  filter?: ModelVisualisationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVisualisationsQuery = {
  listVisualisations:  {
    __typename: "ModelVisualisationConnection",
    items:  Array< {
      __typename: "Visualisation",
      id: string,
      title: string,
      description: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        owner: string | null,
      } | null,
      config:  {
        __typename: "Config",
        id: string,
        owner: string | null,
      } | null,
      datasets:  {
        __typename: "ModelDatasetConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetConfigQueryVariables = {
  id: string,
};

export type GetConfigQuery = {
  getConfig:  {
    __typename: "Config",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type ListConfigsQueryVariables = {
  filter?: ModelConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConfigsQuery = {
  listConfigs:  {
    __typename: "ModelConfigConnection",
    items:  Array< {
      __typename: "Config",
      id: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetDatasetQueryVariables = {
  id: string,
};

export type GetDatasetQuery = {
  getDataset:  {
    __typename: "Dataset",
    id: string,
    visualisation:  {
      __typename: "Visualisation",
      id: string,
      title: string,
      description: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        owner: string | null,
      } | null,
      config:  {
        __typename: "Config",
        id: string,
        owner: string | null,
      } | null,
      datasets:  {
        __typename: "ModelDatasetConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      } | null,
      owner: string | null,
    } | null,
    title: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type ListDatasetsQueryVariables = {
  filter?: ModelDatasetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDatasetsQuery = {
  listDatasets:  {
    __typename: "ModelDatasetConnection",
    items:  Array< {
      __typename: "Dataset",
      id: string,
      visualisation:  {
        __typename: "Visualisation",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null,
      title: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    visualisations:  {
      __typename: "ModelVisualisationConnection",
      items:  Array< {
        __typename: "Visualisation",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    visualisations:  {
      __typename: "ModelVisualisationConnection",
      items:  Array< {
        __typename: "Visualisation",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    visualisations:  {
      __typename: "ModelVisualisationConnection",
      items:  Array< {
        __typename: "Visualisation",
        id: string,
        title: string,
        description: string | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateVisualisationSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateVisualisationSubscription = {
  onCreateVisualisation:  {
    __typename: "Visualisation",
    id: string,
    title: string,
    description: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      visualisations:  {
        __typename: "ModelVisualisationConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    config:  {
      __typename: "Config",
      id: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null,
    datasets:  {
      __typename: "ModelDatasetConnection",
      items:  Array< {
        __typename: "Dataset",
        id: string,
        title: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateVisualisationSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateVisualisationSubscription = {
  onUpdateVisualisation:  {
    __typename: "Visualisation",
    id: string,
    title: string,
    description: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      visualisations:  {
        __typename: "ModelVisualisationConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    config:  {
      __typename: "Config",
      id: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null,
    datasets:  {
      __typename: "ModelDatasetConnection",
      items:  Array< {
        __typename: "Dataset",
        id: string,
        title: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteVisualisationSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteVisualisationSubscription = {
  onDeleteVisualisation:  {
    __typename: "Visualisation",
    id: string,
    title: string,
    description: string | null,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      visualisations:  {
        __typename: "ModelVisualisationConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    config:  {
      __typename: "Config",
      id: string,
      file:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      },
      owner: string | null,
    } | null,
    datasets:  {
      __typename: "ModelDatasetConnection",
      items:  Array< {
        __typename: "Dataset",
        id: string,
        title: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateConfigSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateConfigSubscription = {
  onCreateConfig:  {
    __typename: "Config",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type OnUpdateConfigSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateConfigSubscription = {
  onUpdateConfig:  {
    __typename: "Config",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type OnDeleteConfigSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteConfigSubscription = {
  onDeleteConfig:  {
    __typename: "Config",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type OnCreateDatasetSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateDatasetSubscription = {
  onCreateDataset:  {
    __typename: "Dataset",
    id: string,
    visualisation:  {
      __typename: "Visualisation",
      id: string,
      title: string,
      description: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        owner: string | null,
      } | null,
      config:  {
        __typename: "Config",
        id: string,
        owner: string | null,
      } | null,
      datasets:  {
        __typename: "ModelDatasetConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      } | null,
      owner: string | null,
    } | null,
    title: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type OnUpdateDatasetSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateDatasetSubscription = {
  onUpdateDataset:  {
    __typename: "Dataset",
    id: string,
    visualisation:  {
      __typename: "Visualisation",
      id: string,
      title: string,
      description: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        owner: string | null,
      } | null,
      config:  {
        __typename: "Config",
        id: string,
        owner: string | null,
      } | null,
      datasets:  {
        __typename: "ModelDatasetConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      } | null,
      owner: string | null,
    } | null,
    title: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};

export type OnDeleteDatasetSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteDatasetSubscription = {
  onDeleteDataset:  {
    __typename: "Dataset",
    id: string,
    visualisation:  {
      __typename: "Visualisation",
      id: string,
      title: string,
      description: string | null,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        owner: string | null,
      } | null,
      config:  {
        __typename: "Config",
        id: string,
        owner: string | null,
      } | null,
      datasets:  {
        __typename: "ModelDatasetConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string | null,
        key: string,
        region: string | null,
        identityId: string,
      } | null,
      owner: string | null,
    } | null,
    title: string,
    file:  {
      __typename: "S3Object",
      bucket: string | null,
      key: string,
      region: string | null,
      identityId: string,
    },
    owner: string | null,
  } | null,
};
