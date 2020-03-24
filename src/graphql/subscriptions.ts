// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateVisualisation = /* GraphQL */ `
  subscription OnCreateVisualisation($owner: String) {
    onCreateVisualisation(owner: $owner) {
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
export const onUpdateVisualisation = /* GraphQL */ `
  subscription OnUpdateVisualisation($owner: String) {
    onUpdateVisualisation(owner: $owner) {
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
export const onDeleteVisualisation = /* GraphQL */ `
  subscription OnDeleteVisualisation($owner: String) {
    onDeleteVisualisation(owner: $owner) {
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
export const onCreateConfig = /* GraphQL */ `
  subscription OnCreateConfig($owner: String) {
    onCreateConfig(owner: $owner) {
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
export const onUpdateConfig = /* GraphQL */ `
  subscription OnUpdateConfig($owner: String) {
    onUpdateConfig(owner: $owner) {
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
export const onDeleteConfig = /* GraphQL */ `
  subscription OnDeleteConfig($owner: String) {
    onDeleteConfig(owner: $owner) {
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
export const onCreateDataset = /* GraphQL */ `
  subscription OnCreateDataset($owner: String) {
    onCreateDataset(owner: $owner) {
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
export const onUpdateDataset = /* GraphQL */ `
  subscription OnUpdateDataset($owner: String) {
    onUpdateDataset(owner: $owner) {
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
export const onDeleteDataset = /* GraphQL */ `
  subscription OnDeleteDataset($owner: String) {
    onDeleteDataset(owner: $owner) {
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
