// // import TableGenerate from './dataGenerator'

// async function getData() {
//     const response = await fetch('acme_worksheet.csv')
//     const data = await response.text()

//     const table = data.split('\n').slice(1)
//     let tableData=[]
//     table.forEach(row => {
//         const column=row.split(',')
//         const name = column[0]
//         const date = column[1]
//         const hours = column[2]
//         let newArray = { name: column[0], date: column[1], hours: column[2] }
//         tableData.push(newArray)
//     })
//     const sortedTable = [...tableData].sort((a, b) => a.name.localeCompare(b.name))         
//     const nameColumn = sortedTable
//         .map(el => el.name)
//         .filter((course, index, array) => array.indexOf(course) === index)
//     console.log(sortedTable);
// }

// getData()

// class TableGenerate{
//     constructor(name, value1, value2, value3, value4, value5, value6, value7) {
//         this.name = name,
//         this.value1=value1,
//         this.value2=value2,
//         this.value3=value3,
//         this.value4=value4,
//         this.value5=value5,
//         this.value6=value6,
//         this.value7=value7
//     }
// }
//TASK1
// const add=(a, b)=> {
//     if (b !== undefined) {
//         return a+b
//     }
//     return (c)=>a+c
// }

// console.log(add(5, 2));
// console.log(add(5)(12));


//TASK2
// const getFileExtention = (filename) => {
//     if (typeof filename !== 'string') {
//         throw new Error('Invalid Error')
//     }
//     const fileNameParts = filename.split('.')
//     return fileNameParts.length===1?null: fileNameParts[fileNameParts.length-1]
// }

// console.log(getFileExtention("as.eht"));