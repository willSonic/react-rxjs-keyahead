export const VIEW_ITEM_BY_ID = 'VIEW_ITEM_BY_ID';
export function viewItemById(itemId) {
  return {
    type: VIEW_ITEM_BY_ID,
    payload: itemId,
  };
}

export const ADD_ITEM_TO_COLLECTION_BY_ID = 'ADD_ITEM_TO_COLLECTION_BY_ID';
export function addItemToCollectionById(itemId) {
  return {
    type: ADD_ITEM_TO_COLLECTION_BY_ID,
    payload: itemId,
  };
}
export const REMOVE_ITEM_FROM_COLLECTION_BY_ID =
  'REMOVE_ITEM_FROM_COLLECTION_BY_ID';
export function removeItemFromCollectionById(itemId) {
  return {
    type: REMOVE_ITEM_FROM_COLLECTION_BY_ID,
    payload: itemId,
  };
}
export const RETRIEVE_COLLECTION_BY_SET = 'RETRIEVE_COLLECTION_BY_SET';
export function retrieveCollectionBySet(definedSet) {
  return {
    type: RETRIEVE_COLLECTION_BY_SET,
    payload: definedSet,
  };
}

export const RETRIEVE_ENTIRE_COLLECTION = 'RETRIEVE_ENTIRE_COLLECTION';
export function retrieveEntireCollection() {
  return {
    type: RETRIEVE_ENTIRE_COLLECTION,
  };
}
