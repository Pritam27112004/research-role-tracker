//4.creating server
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Intern Search Backend is Running 🚀');
});
//12 connecting to db


const connectDB = require('./db');


// CONNECT DB
connectDB();
//6.1 creating first api route
app.get('/api/test', (req, res) => {
  res.json({
    message: 'API connection successful ✅'
  });
});
//16.Create API to Insert Dummy Internship
const Internship = require('./models/Internship');

app.post('/api/add-dummy', async (req, res) => {
  try {
    const internship = await Internship.create({
      company: 'Test Company',
      title: 'Software Engineering Intern',
      url: 'https://example.com/intern'
    });

    res.json({
      success: true,
      data: internship
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

//getting the scraped data
const scrapeOpenAICareers = require('./scrapers/playwrightTest');
app.get('/api/scrape-openai', async (req, res) => {
  try {
    const jobs = await scrapeOpenAICareers();

    let inserted = 0;

    for (const job of jobs) {
      const exists = await Internship.findOne({ url: job.url });

      if (!exists) {
        await Internship.create(job);
        inserted++;
      }
    }

    res.json({
      success: true,
      scraped: jobs.length,
      inserted
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

//17.Create API to Fetch Internships

app.get('/api/internships', async (req, res) => {
  const data = await Internship.find().sort({ firstSeen: -1 });
  res.json(data);
});




app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

