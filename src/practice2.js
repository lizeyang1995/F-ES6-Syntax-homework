const inject = (items, sections) => {
  let itemsObject = new Object()
  for (const key in items) {
    itemsObject[key] = items[key]
  }
  sections.map(iterator => {
    const insertIndex = iterator.index
    const behindItem = itemsObject[insertIndex]
    const nowIndex = items.indexOf(behindItem)
    items.splice(nowIndex, 0, iterator.content)
  })
  return items
}
export { inject };
