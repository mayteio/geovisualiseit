// tslint:disable
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      title
      owner
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      title
      owner
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      title
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
      config {
        id
        visualisation {
          id
          title
          description
          owner
        }
        file {
          bucket
          key
          region
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
      config {
        id
        visualisation {
          id
          title
          description
          owner
        }
        file {
          bucket
          key
          region
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
      config {
        id
        visualisation {
          id
          title
          description
          owner
        }
        file {
          bucket
          key
          region
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
      visualisation {
        id
        title
        description
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
        }
        owner
      }
      file {
        bucket
        key
        region
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
      visualisation {
        id
        title
        description
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
        }
        owner
      }
      file {
        bucket
        key
        region
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
      visualisation {
        id
        title
        description
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
        }
        owner
      }
      file {
        bucket
        key
        region
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
        }
        owner
      }
      title
      file {
        bucket
        key
        region
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
        }
        owner
      }
      title
      file {
        bucket
        key
        region
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
        }
        owner
      }
      title
      file {
        bucket
        key
        region
      }
      owner
    }
  }
`;
