const express = require('express');
const app = express();
const port = 5050;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Samuel Mijan Amos',
    role: 'Devops/Cloud Engineer',
    projectTitle: 'The Future of AI-Powered Daycare Management',
    pitch: 'SmartBridge AI uses intelligent automation to streamline daycare operations, enhancing safety, staffing, and compliance with smart analytics.',
    bio: {
      skills: 'AWS, Node.js, PostgreSQL, Docker, React, Apache',
      projects: 'Smartway Daycare Platform, Cloud Infra Automation',
      education: 'B.Eng. Structural Engineering, Cloud Certs in progress'
    }
  });
});

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});
