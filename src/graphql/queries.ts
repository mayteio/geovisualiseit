// tslint:disable
// this is an auto generated file. This will be overwritten

export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        owner
        visualisations {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const getVisualisation = /* GraphQL */ `
  query GetVisualisation($id: ID!) {
    getVisualisation(id: $id) {
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
export const listVisualisations = /* GraphQL */ `
  query ListVisualisations(
    $filter: ModelVisualisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisualisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        config {
          visualisationId
        }
        datasets {
          id
          title
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
          owner
        }
        profile {
          id
          title
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        country
        latlng {
          latitude
          longitude
        }
        owner
      }
      nextToken
    }
  }
`;
export const getDataset = /* GraphQL */ `
  query GetDataset($id: ID!) {
    getDataset(id: $id) {
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
export const listDatasets = /* GraphQL */ `
  query ListDatasets(
    $filter: ModelDatasetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatasets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        json {
          bucket
          key
          region
        }
        owner
      }
      nextToken
    }
  }
`;
