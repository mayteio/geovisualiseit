# geovisualise.it

An open-source, data visualisation sharing platform

## housekeeping

- [ ] write tests!
  - [ ] auth
  - [ ] create form
        etc

## Todo

- [ ] Move this into https://github.com/mayteio/geovisualiseit/projects/1
- [ ] Authentication
  - [ ] Add validation to all forms
  - [ ] add verification code flow to login (could go away from the site to get gmail and try to log in)
  - [ ] change password flow
- [ ] User profile
  - [x] create profile on signup (tap into postConfirmationLambdaTrigger, create profile with ID of cognito:sub)
  - [ ] create UI for visualisations created by a given user & pull in vis's
- [ ] View visualisation screen
  - [x] grab data from server
  - [ ] hydrate from route state when creating a new vis
- [ ] Edit visualisation
  - [ ] way to check if dataset has changed? just upload a new dataset every time?
  - [ ] should config be put into
- [ ] Create visualisation

  - [ ] password protect visualisation - [ ] Add field level auth. Might need a custom resolver (see schema.graphql notes)
  - [ ] location - [ ] geocode centre of dataset to city/country. Add this as a key country- [ ]city
  - [ ] tags - [ ] might be a job for @searchable
  - [ ] comments
    - [ ] see graphql docs for how- [ ]to
  - [ ] likes
    - [ ] likes table
    - [ ] access pattern: own likes with visualisationId
    - [ ] dynamodb trigger that increments or decrements a visualisation's like count when like is CREATED/DELETED

- [ ] Browse
  - [ ] list visualisations
  - [ ] push into elasticsearch?
  - [ ] ## access patterns (also see create visualisation):
