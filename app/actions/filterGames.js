export const UPDATE_FILTER = 'UPDATE_FILTER';
export function updateFilter(filterText){
  return {
    type: UPDATE_FILTER,
    filterText
  }
}
