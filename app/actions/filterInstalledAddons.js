export const UPDATE_INSTALLED_ADDONS_FILTER = 'UPDATE_INSTALLED_ADDONS_FILTER';
export function updateFilter(filterText) {
  return {
    type: UPDATE_INSTALLED_ADDONS_FILTER,
    filterText
  }
}
