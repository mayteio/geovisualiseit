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
          private
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
          private
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
          private
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
export const onUpdateVisualisation = /* GraphQL */ `
  subscription OnUpdateVisualisation($owner: String) {
    onUpdateVisualisation(owner: $owner) {
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
export const onDeleteVisualisation = /* GraphQL */ `
  subscription OnDeleteVisualisation($owner: String) {
    onDeleteVisualisation(owner: $owner) {
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
      json {
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
      json {
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
      json {
        bucket
        key
        region
      }
      owner
    }
  }
`;
