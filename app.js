const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!, This is my First deployment in AWS, My CICD Pipeline was successful \n We are dedicated to delivering the highest quality products and services, underpinned by a deep understanding of your needs and aspirations. Our team works tirelessly to ensure that every interaction is marked by professionalism, respect, and a genuine desire to exceed your expectations'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
