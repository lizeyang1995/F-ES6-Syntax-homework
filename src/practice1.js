const parseData = (inputData) => {
  const [data, column, columnNames, resultData] = [inputData.data, inputData.column, [], []]
  column.map(iterator => columnNames.push(iterator.name))
  data.map(iterator => {
    let formatData = new Object()
    for (const column in columnNames) {
      formatData[columnNames[column]] = iterator[column]
    }
    resultData.push(formatData)
  })
  return resultData
}
export { parseData };
