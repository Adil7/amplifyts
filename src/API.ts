/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePreferencesInput = {
  id?: string | null,
  buyer_type: string,
  budget: number,
};

export type ModelPreferencesConditionInput = {
  buyer_type?: ModelStringInput | null,
  budget?: ModelIntInput | null,
  and?: Array< ModelPreferencesConditionInput | null > | null,
  or?: Array< ModelPreferencesConditionInput | null > | null,
  not?: ModelPreferencesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Preferences = {
  __typename: "Preferences",
  id: string,
  buyer_type: string,
  budget: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePreferencesInput = {
  id: string,
  buyer_type?: string | null,
  budget?: number | null,
};

export type DeletePreferencesInput = {
  id: string,
};

export type ModelPreferencesFilterInput = {
  id?: ModelIDInput | null,
  buyer_type?: ModelStringInput | null,
  budget?: ModelIntInput | null,
  and?: Array< ModelPreferencesFilterInput | null > | null,
  or?: Array< ModelPreferencesFilterInput | null > | null,
  not?: ModelPreferencesFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPreferencesConnection = {
  __typename: "ModelPreferencesConnection",
  items?:  Array<Preferences | null > | null,
  nextToken?: string | null,
};

export type CreatePreferencesMutationVariables = {
  input: CreatePreferencesInput,
  condition?: ModelPreferencesConditionInput | null,
};

export type CreatePreferencesMutation = {
  createPreferences?:  {
    __typename: "Preferences",
    id: string,
    buyer_type: string,
    budget: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePreferencesMutationVariables = {
  input: UpdatePreferencesInput,
  condition?: ModelPreferencesConditionInput | null,
};

export type UpdatePreferencesMutation = {
  updatePreferences?:  {
    __typename: "Preferences",
    id: string,
    buyer_type: string,
    budget: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePreferencesMutationVariables = {
  input: DeletePreferencesInput,
  condition?: ModelPreferencesConditionInput | null,
};

export type DeletePreferencesMutation = {
  deletePreferences?:  {
    __typename: "Preferences",
    id: string,
    buyer_type: string,
    budget: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPreferencesQueryVariables = {
  id: string,
};

export type GetPreferencesQuery = {
  getPreferences?:  {
    __typename: "Preferences",
    id: string,
    buyer_type: string,
    budget: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPreferencesQueryVariables = {
  filter?: ModelPreferencesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPreferencesQuery = {
  listPreferences?:  {
    __typename: "ModelPreferencesConnection",
    items?:  Array< {
      __typename: "Preferences",
      id: string,
      buyer_type: string,
      budget: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePreferencesSubscription = {
  onCreatePreferences?:  {
    __typename: "Preferences",
    id: string,
    buyer_type: string,
    budget: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePreferencesSubscription = {
  onUpdatePreferences?:  {
    __typename: "Preferences",
    id: string,
    buyer_type: string,
    budget: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePreferencesSubscription = {
  onDeletePreferences?:  {
    __typename: "Preferences",
    id: string,
    buyer_type: string,
    budget: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
