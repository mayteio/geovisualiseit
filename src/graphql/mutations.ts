// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      visualisations {
        items {
          id
          title
          description
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      visualisations {
        items {
          id
          title
          description
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      visualisations {
        items {
          id
          title
          description
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const createVisualisation = /* GraphQL */ `
  mutation CreateVisualisation(
    $input: CreateVisualisationInput!
    $condition: ModelVisualisationConditionInput
  ) {
    createVisualisation(input: $input, condition: $condition) {
      id
      title
      description
      user {
        id
        username
        visualisations {
          nextToken
        }
        owner
      }
      config {
        id
        file {
          bucket
          key
          region
          identityId
        }
        owner
      }
      datasets {
        items {
          id
          title
          owner
        }
        nextToken
      }
      image {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
export const updateVisualisation = /* GraphQL */ `
  mutation UpdateVisualisation(
    $input: UpdateVisualisationInput!
    $condition: ModelVisualisationConditionInput
  ) {
    updateVisualisation(input: $input, condition: $condition) {
      id
      title
      description
      user {
        id
        username
        visualisations {
          nextToken
        }
        owner
      }
      config {
        id
        file {
          bucket
          key
          region
          identityId
        }
        owner
      }
      datasets {
        items {
          id
          title
          owner
        }
        nextToken
      }
      image {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
export const deleteVisualisation = /* GraphQL */ `
  mutation DeleteVisualisation(
    $input: DeleteVisualisationInput!
    $condition: ModelVisualisationConditionInput
  ) {
    deleteVisualisation(input: $input, condition: $condition) {
      id
      title
      description
      user {
        id
        username
        visualisations {
          nextToken
        }
        owner
      }
      config {
        id
        file {
          bucket
          key
          region
          identityId
        }
        owner
      }
      datasets {
        items {
          id
          title
          owner
        }
        nextToken
      }
      image {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
export const createConfig = /* GraphQL */ `
  mutation CreateConfig(
    $input: CreateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    createConfig(input: $input, condition: $condition) {
      id
      file {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
export const updateConfig = /* GraphQL */ `
  mutation UpdateConfig(
    $input: UpdateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    updateConfig(input: $input, condition: $condition) {
      id
      file {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
export const deleteConfig = /* GraphQL */ `
  mutation DeleteConfig(
    $input: DeleteConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    deleteConfig(input: $input, condition: $condition) {
      id
      file {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
export const createDataset = /* GraphQL */ `
  mutation CreateDataset(
    $input: CreateDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    createDataset(input: $input, condition: $condition) {
      id
      visualisation {
        id
        title
        description
        user {
          id
          username
          owner
        }
        config {
          id
          owner
        }
        datasets {
          nextToken
        }
        image {
          bucket
          key
          region
          identityId
        }
        owner
      }
      title
      file {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
export const updateDataset = /* GraphQL */ `
  mutation UpdateDataset(
    $input: UpdateDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    updateDataset(input: $input, condition: $condition) {
      id
      visualisation {
        id
        title
        description
        user {
          id
          username
          owner
        }
        config {
          id
          owner
        }
        datasets {
          nextToken
        }
        image {
          bucket
          key
          region
          identityId
        }
        owner
      }
      title
      file {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
export const deleteDataset = /* GraphQL */ `
  mutation DeleteDataset(
    $input: DeleteDatasetInput!
    $condition: ModelDatasetConditionInput
  ) {
    deleteDataset(input: $input, condition: $condition) {
      id
      visualisation {
        id
        title
        description
        user {
          id
          username
          owner
        }
        config {
          id
          owner
        }
        datasets {
          nextToken
        }
        image {
          bucket
          key
          region
          identityId
        }
        owner
      }
      title
      file {
        bucket
        key
        region
        identityId
      }
      owner
    }
  }
`;
