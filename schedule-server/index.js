const express = require('express')
const XLSX = require('xlsx')

const app = express()

const workbook = XLSX.readFile('datasheet.xlsx')

let worksheets = {}
const getExelData = () => {
    //titleSheet = workbook.SheetNames.find(sheet => 'TitleSheet')
    titleSheet = XLSX.utils.sheet_to_json(workbook.Sheets['TitleSheet'])
    for(const sheetName of workbook.SheetNames){
        if(sheetName !== 'TitleSheet'){
            worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
            foundSheet = titleSheet.find(a => a.Title === sheetName)
            console.log(foundSheet)
            foundSheet.Times = worksheet
        }
    }
    //worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
    return titleSheet
}

app.get('/api/timetable', (req, res) => {
    const data = getExelData()
    res.json(data)
})

const PORT = process.env.PORt || 5000

app.listen(PORT, () => {console.log('Server started on port: ', PORT)})