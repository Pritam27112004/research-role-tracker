internship-tracker/
│
├── backend/
│   ├── server.js              # Express app entry point
│   ├── db.js                  # MongoDB connection
│   ├── companies.js           # Predefined career pages
│   │
│   ├── scrapers/              # All scraping logic
│   │   ├── index.js           # Main scraper router
│   │   ├── genericScraper.js  # Generic Playwright scraper
│   │   ├── leverScraper.js    # Lever.co specific scraper (future)
│   │   └── greenhouseScraper.js # Greenhouse specific scraper (future)
│   │
│   ├── models/
│   │   └── Internship.js      # Mongoose schema
│   │
│   ├── routes/
│   │   ├── scrapeRoutes.js    # /api/scrape-all
│   │   └── internshipRoutes.js # /api/internships
│   │
│   └── utils/
│       └── logger.js          # (future) logging helper
│
├── frontend/
│   ├── index.html             # Main UI
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── .env                       # Mongo URI, secrets
├── package.json
├── package-lock.json
└── README.md


starting the project 
1. cd Intern_Search
2.npm init -y
3.npm install express cors
    (express → backend server

    cors → allow frontend to call backend)
4.in backend\server.js i have created server
5.nodemon server.js ->> Server running on http://localhost:5000
6.creating api route
  6.1 in file backend\server.js
  6.2 api testing http://localhost:5000/api/test
7.connecting frontend to backend frontend\index.html
8.Update frontend/js/script.js
9.npm install mongoose dotenv
    mongoose → MongoDB ODM

    dotenv → load env variables
10. create .env ->> MONGO_URI=mongodb://127.0.0.1:27017/intern_search
11.Update backend/db.js(mongodb connection file)
12.Update backend/server.js(wire db in server)
13.restart the server -->> ✅ MongoDB Connected
14.Now we will:

   Create Internship model
   Add API to INSERT dummy internship
   Add API to FETCH internships
   Show DB data in browser
15.Create Internship Model -> backend/models/Internship.js
16.Create API to Insert Dummy Internship -> backend/server.js
17.Create API to Fetch Internships
18.Frontend button → fetch internships from DB → display list -> frontend/index.html
19.Frontend JS to Fetch DB Data frontend/js/script.js
20.go to frontend/index.html  and click to open with live server
21.STEP 21 — Install & Understand Playwright 
   (Playwright is:

A Node.js library that can control a real browser (Chromium, Firefox, WebKit) using code.

So your backend can:

Open a browser

Visit a website

Read the DOM

Extract data

Close the browser)

21.1 install playwright
22.just for testing playwrightTest
   create file backend/scrapers/playwrightTest.js -> write code 
    what the code is doing?
    You should see:

    ✅ A Chromium browser window opens
    ✅ It goes to example.com
    ✅ Stays open for ~5 seconds
    ✅ Browser closes automatically
23. STEP 23 — Scrape Data From a Real Page (Read-Only)
👉 Read data from a real jobs page and print it in the terminal.

No DB yet. No Express yet. Just understand how scraping works.
so what we are doing -> from stripe careers page we are extracting job title and job link
23.1 updating scraper file with the code

24. now the data scraped from website will be send to db using backend api

25. api route that takes the scrapped data and insert in db -http://localhost:5000/api/scrape-openai

26.
Trigger /api/scrape-openai

Scrape OpenAI jobs

Save to MongoDB

Reload internships list on UI
27.updating frontend
index.html

28.updating frontend js
frontend/js/script.js

