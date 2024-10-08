const { google } = require('googleapis');
const sheets = google.sheets('v4');
const express = require('express');
const app = express();
app.use(express.json());

exports.sendToSheet = async (req, res) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'path-to-your-service-account-key.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const {
      name,
      title,
      mobile,
      email,
    } = req.body;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '1lqL0uY3GIBQRXYVaFi1P8dRmgCjCBpfmJUcE4y6NFsI',
      range: 'Form Responses!A1:L1',  // Update the range to include all columns
      valueInputOption: 'RAW',
      resource: {
        values: [[name, title, nationality, carModel, mobile, location, email, purchaseDate, paymentType, bank, salary]],
      },
    });

    res.status(200).send('Success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
};

app.post('/', exports.sendToSheet);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
