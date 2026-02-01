//8
// async function testAPI() {
//   const res = await fetch('http://localhost:5000/api/test');
//   const data = await res.json();

//   document.getElementById('result').innerText = data.message;
// }

//19.Frontend JS to Fetch DB Data frontend/js/script.js
// async function loadInternships() {
//   const list = document.getElementById('list');
//   list.innerHTML = 'Loading...';

//   const res = await fetch('http://localhost:5000/api/internships');
//   const data = await res.json();

//   list.innerHTML = '';

//   data.forEach(i => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <a href="${i.url}" target="_blank">
//         ${i.company} - ${i.title}
//       </a>
//     `;
//     list.appendChild(li);
//   });
// }


//updating frontend js

console.log('Frontend JS loaded');

async function searchInternships() {
  const status = document.getElementById('status');
  status.innerText = 'Searching OpenAI careers...';

  try {
    const scrapeRes = await fetch('http://localhost:5000/api/scrape-openai');
    const scrapeData = await scrapeRes.json();

    status.innerText =
      `Scraped: ${scrapeData.scraped}, Newly Added: ${scrapeData.inserted}`;

    loadInternships();
  } catch (err) {
    console.error(err);
    status.innerText = 'Error while scraping. Check backend.';
  }
}

async function loadInternships() {
  const list = document.getElementById('list');
  list.innerHTML = 'Loading...';

  try {
    const res = await fetch('http://localhost:5000/api/internships');
    const data = await res.json();

    list.innerHTML = '';

    data.forEach(job => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${job.url}" target="_blank">
          ${job.company} – ${job.title}
        </a>
      `;
      list.appendChild(li);
    });
  } catch (err) {
    console.error(err);
    list.innerHTML = 'Failed to load internships.';
  }
}

// auto-load existing data
loadInternships();
