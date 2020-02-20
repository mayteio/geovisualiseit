// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
      id
      title
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
      id
      title
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
      id
      title
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
export const onUpdateVisualisation = /* GraphQL */ `
  subscription OnUpdateVisualisation($owner: String) {
    onUpdateVisualisation(owner: $owner) {
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
export const onDeleteVisualisation = /* GraphQL */ `
  subscription OnDeleteVisualisation($owner: String) {
    onDeleteVisualisation(owner: $owner) {
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
export const onCreateConfig = /* GraphQL */ `
  subscription OnCreateConfig($owner: String) {
    onCreateConfig(owner: $owner) {
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
export const onUpdateConfig = /* GraphQL */ `
  subscription OnUpdateConfig($owner: String) {
    onUpdateConfig(owner: $owner) {
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
export const onDeleteConfig = /* GraphQL */ `
  subscription OnDeleteConfig($owner: String) {
    onDeleteConfig(owner: $owner) {
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
export const onCreateDataset = /* GraphQL */ `
  subscription OnCreateDataset($owner: String) {
    onCreateDataset(owner: $owner) {
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
export const onUpdateDataset = /* GraphQL */ `
  subscription OnUpdateDataset($owner: String) {
    onUpdateDataset(owner: $owner) {
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
export const onDeleteDataset = /* GraphQL */ `
  subscription OnDeleteDataset($owner: String) {
    onDeleteDataset(owner: $owner) {
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
