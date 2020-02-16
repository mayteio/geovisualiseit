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
      visualisations {
        items {
          id
          title
          description
          password
          owner
        }
        nextToken
      }
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
      visualisations {
        items {
          id
          title
          description
          password
          owner
        }
        nextToken
      }
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
      visualisations {
        items {
          id
          title
          description
          password
          owner
        }
        nextToken
      }
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
      datasets {
        id
        title
        file {
          bucket
          key
          region
        }
        owner
      }
      image {
        bucket
        key
        region
      }
      password
      profile {
        id
        title
        owner
        visualisations {
          nextToken
        }
      }
      owner
      config {
        file {
          bucket
          key
          region
        }
        visualisation {
          id
          title
          description
          password
          owner
        }
        owner
      }
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
      datasets {
        id
        title
        file {
          bucket
          key
          region
        }
        owner
      }
      image {
        bucket
        key
        region
      }
      password
      profile {
        id
        title
        owner
        visualisations {
          nextToken
        }
      }
      owner
      config {
        file {
          bucket
          key
          region
        }
        visualisation {
          id
          title
          description
          password
          owner
        }
        owner
      }
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
      datasets {
        id
        title
        file {
          bucket
          key
          region
        }
        owner
      }
      image {
        bucket
        key
        region
      }
      password
      profile {
        id
        title
        owner
        visualisations {
          nextToken
        }
      }
      owner
      config {
        file {
          bucket
          key
          region
        }
        visualisation {
          id
          title
          description
          password
          owner
        }
        owner
      }
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      name
      country
      latlng {
        latitude
        longitude
      }
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      name
      country
      latlng {
        latitude
        longitude
      }
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      name
      country
      latlng {
        latitude
        longitude
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
export const createConfig = /* GraphQL */ `
  mutation CreateConfig(
    $input: CreateConfigInput!
    $condition: ModelConfigConditionInput
  ) {
    createConfig(input: $input, condition: $condition) {
      file {
        bucket
        key
        region
      }
      visualisation {
        id
        title
        description
        datasets {
          id
          title
          owner
        }
        image {
          bucket
          key
          region
        }
        password
        profile {
          id
          title
          owner
        }
        owner
        config {
          owner
        }
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
      file {
        bucket
        key
        region
      }
      visualisation {
        id
        title
        description
        datasets {
          id
          title
          owner
        }
        image {
          bucket
          key
          region
        }
        password
        profile {
          id
          title
          owner
        }
        owner
        config {
          owner
        }
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
      file {
        bucket
        key
        region
      }
      visualisation {
        id
        title
        description
        datasets {
          id
          title
          owner
        }
        image {
          bucket
          key
          region
        }
        password
        profile {
          id
          title
          owner
        }
        owner
        config {
          owner
        }
      }
      owner
    }
  }
`;
