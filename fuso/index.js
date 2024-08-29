const { google } = require('googleapis');
const sheets = google.sheets('v4');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.options('*', cors()); // Handle preflight requests

app.post('/submit', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const auth = new google.auth.GoogleAuth({
      keyFile: 'sheet-automation-433907-ba11dd0ecde9.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    // Log entire request body to verify received data
    console.log(`Received data: ${JSON.stringify(req.body)}`);

    const {
      name,
      title,
      mobile,
      labels,
    } = req.body;

    // Log individual fields to check if they are received correctly
    console.log(`Received name: ${name}`);
    console.log(`Received title: ${title}`);
    console.log(`Received mobile: ${mobile}`);
    console.log(`Received labels: ${labels}`);
    const response = await sheets.spreadsheets.values.append({
    spreadsheetId: '1jhZQsl_UsC4-rPyVdLKGSq42l8tbPc9lDc-eYAIYg7o',
    range: 'Sheet1!A1:D1',  // Update the range to include all columns
    valueInputOption: 'RAW',
    resource: {
        values: [[new Date().toISOString(), name, title, mobile, labels]],
      },
    });
    // Your code to send data to Google Sheets goes here
    res.status(200).json({ message: 'Data received and processed.' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});