import express from 'express';
import XLSX from 'xlsx';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.json());

// READ Excel file
app.get('/data', (req, res) => {
  const workbook = XLSX.readFile('data.xlsx');
  const sheetName = workbook.SheetNames[0];
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  res.json(data);
});

// WRITE to Excel file (append a row)
app.post('/data', (req, res) => {
  const workbook = XLSX.readFile('data.xlsx');
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);

  data.push(req.body); // Add new row

  const newSheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets[sheetName] = newSheet;
  XLSX.writeFile(workbook, 'data.xlsx');

  res.json({ message: 'Data added successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
