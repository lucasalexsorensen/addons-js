export const UPDATE_MYGAMES_FILTER = 'UPDATE_MYGAMES_FILTER';
export function updateFilter(filterText) {
  return {
    type: UPDATE_MYGAMES_FILTER,
    filterText
  }
}
