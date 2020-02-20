// tslint:disable
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      title
      owner
    }
  }
`;
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
      nextToken
    }
  }
`;
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
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
export const listConfigs = /* GraphQL */ `
  query ListConfigs(
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDataset = /* GraphQL */ `
  query GetDataset($id: ID!) {
    getDataset(id: $id) {
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
export const listDatasets = /* GraphQL */ `
  query ListDatasets(
    $filter: ModelDatasetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDatasets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        visualisation {
          id
          title
          description
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
      nextToken
    }
  }
`;
