// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        visualisations {
          nextToken
        }
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
      nextToken
    }
  }
`;
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
    getConfig(id: $id) {
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
export const listConfigs = /* GraphQL */ `
  query ListConfigs(
    $filter: ModelConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        file {
          bucket
          key
          region
          identityId
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
          identityId
        }
        owner
      }
      nextToken
    }
  }
`;
