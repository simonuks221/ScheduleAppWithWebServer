const express = require('express')
const XLSX = require('xlsx')

const app = express()

const workbook = XLSX.readFile('datasheet.xlsx')

let worksheet = {}
const getExelData = () => {
    worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
    return worksheet
}

app.get('/api/timetable', (req, res) => {
    const data = getExelData()
    res.json(data)
})

const PORT = process.env.PORt || 5000

app.listen(PORT, () => {console.log('Server started on port: ', PORT)})