export function filterItems (items, filterConditions) {
  return items.filter(item => {
    const actFilter = !filterConditions.act || item.act
    const stopFilter = !filterConditions.stop || item.stop
    const workFilter = !filterConditions.work || item.work
    return actFilter && stopFilter && workFilter
  })
}
