// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile($owner: String) {
    onCreateProfile(owner: $owner) {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile($owner: String) {
    onUpdateProfile(owner: $owner) {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile($owner: String) {
    onDeleteProfile(owner: $owner) {
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
export const onCreateVisualisation = /* GraphQL */ `
  subscription OnCreateVisualisation($owner: String) {
    onCreateVisualisation(owner: $owner) {
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
export const onUpdateVisualisation = /* GraphQL */ `
  subscription OnUpdateVisualisation($owner: String) {
    onUpdateVisualisation(owner: $owner) {
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
export const onDeleteVisualisation = /* GraphQL */ `
  subscription OnDeleteVisualisation($owner: String) {
    onDeleteVisualisation(owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($owner: String) {
    onCreateLocation(owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateDataset = /* GraphQL */ `
  subscription OnCreateDataset($owner: String) {
    onCreateDataset(owner: $owner) {
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
export const onUpdateDataset = /* GraphQL */ `
  subscription OnUpdateDataset($owner: String) {
    onUpdateDataset(owner: $owner) {
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
export const onDeleteDataset = /* GraphQL */ `
  subscription OnDeleteDataset($owner: String) {
    onDeleteDataset(owner: $owner) {
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
export const onCreateConfig = /* GraphQL */ `
  subscription OnCreateConfig($owner: String) {
    onCreateConfig(owner: $owner) {
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
export const onUpdateConfig = /* GraphQL */ `
  subscription OnUpdateConfig($owner: String) {
    onUpdateConfig(owner: $owner) {
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
export const onDeleteConfig = /* GraphQL */ `
  subscription OnDeleteConfig($owner: String) {
    onDeleteConfig(owner: $owner) {
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
