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
          password
          owner
        }
        nextToken
      }
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
      nextToken
    }
  }
`;
export const getVisualisation = /* GraphQL */ `
  query GetVisualisation($id: ID!) {
    getVisualisation(id: $id) {
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
      file {
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
        file {
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
export const listConfigs = /* GraphQL */ `
  query ListConfigs(
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
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
