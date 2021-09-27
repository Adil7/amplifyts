/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPreferences = /* GraphQL */ `
  query GetPreferences($id: ID!) {
    getPreferences(id: $id) {
      id
      buyer_type
      budget
      createdAt
      updatedAt
    }
  }
`;
export const listPreferences = /* GraphQL */ `
  query ListPreferences(
    $filter: ModelPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        buyer_type
        budget
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
