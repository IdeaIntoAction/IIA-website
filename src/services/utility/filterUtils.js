export function filterItems (items, filterConditions) {
  return items.filter(item => {
    const actFilter = !filterConditions.act || item.act
    const stopFilter = !filterConditions.stop || item.stop
    const workFilter = !filterConditions.work || item.work
    return actFilter && stopFilter && workFilter
  })
}
export function filterText (items, filterContent) {
  return items.filter(item => {
    const filters = {
      site: filterContent.site.toLowerCase(),
      error: filterContent.error.toLowerCase(),
      start: filterContent.start.toLowerCase(),
      load: filterContent.load.toLowerCase(),
      comm: filterContent.comm.toLowerCase()
    }

    return Object.entries(filters).every(([key, value]) =>
      !value || (item[key] && typeof item[key] === 'string' && item[key].toLowerCase().includes(value))
    )
  })
}
