// import TableGenerate from './dataGenerator'

async function getData() {
    const response = await fetch('acme_worksheet.csv')
    const data = await response.text()

    const table = data.split('\n').slice(1)
    let tableData=[]
    table.forEach(row => {
        const column=row.split(',')
        const name = column[0]
        const date = column[1]
        const hours = column[2]
        let newArray = { name: column[0], date: column[1], hours: column[2] }
        tableData.push(newArray)
    })
    const sortedTable = [...tableData].sort((a, b) => a.name.localeCompare(b.name))         
    const nameColumn = [...sortedTable]
        .map(el => el.name)
        .filter((element, index, array) => array.indexOf(element) === index)
    console.log(nameColumn);
    const datesRow = [...sortedTable]
        .map(e=>e.date)
        .filter((element, index, array) => array.indexOf(element) === index)
        .map(e => new Date(e))
        .sort((a, b) => a-b)
        .map(e => e.toISOString().slice(0, 10))
    console.log(datesRow);
    const datesRowForCheck = [...datesRow]
}

getData()

