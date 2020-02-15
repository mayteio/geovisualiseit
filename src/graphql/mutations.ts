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
          private
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
          private
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
          private
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
      config {
        visualisationId
        json {
          bucket
          key
          region
        }
      }
      datasets {
        id
        title
        json {
          bucket
          key
          region
        }
        owner
      }
      mapState {
        latitude
        longitude
        zoom
        bearing
        pitch
      }
      private
      location {
        name
        country
        latlng {
          latitude
          longitude
        }
        owner
      }
      profile {
        id
        title
        owner
        visualisations {
          nextToken
        }
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
        visualisationId
        json {
          bucket
          key
          region
        }
      }
      datasets {
        id
        title
        json {
          bucket
          key
          region
        }
        owner
      }
      mapState {
        latitude
        longitude
        zoom
        bearing
        pitch
      }
      private
      location {
        name
        country
        latlng {
          latitude
          longitude
        }
        owner
      }
      profile {
        id
        title
        owner
        visualisations {
          nextToken
        }
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
        visualisationId
        json {
          bucket
          key
          region
        }
      }
      datasets {
        id
        title
        json {
          bucket
          key
          region
        }
        owner
      }
      mapState {
        latitude
        longitude
        zoom
        bearing
        pitch
      }
      private
      location {
        name
        country
        latlng {
          latitude
          longitude
        }
        owner
      }
      profile {
        id
        title
        owner
        visualisations {
          nextToken
        }
      }
      owner
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
      json {
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
      json {
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
      json {
        bucket
        key
        region
      }
      owner
    }
  }
`;
