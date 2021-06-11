const express = require('express')
const XLSX = require('xlsx')

const app = express()

const workbook = XLSX.readFile('datasheet.xlsx')

const getExelData = () => {

}

app.get('/api/timetable', (req, res) => {

})

const PORT = process.env.PORt || 5000

app.listen(PORT, () => {console.log('Server started on port: ', PORT)})