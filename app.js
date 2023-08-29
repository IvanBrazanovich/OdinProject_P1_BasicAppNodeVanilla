const http = require("http");
const fs = require("fs");
const path = require("path");

// Get files
let aboutPage;
let ContactMePage;
let NotFoundPage;
let indexPage;
const AboutPath = path.join(__dirname, "about.html");
const IndexPath = path.join(__dirname, "index.html");
const ContactMePath = path.join(__dirname, "contact-me.html");
const NotFoundPath = path.join(__dirname, "404.html");

fs.readFile(AboutPath, (err, HtmlPage) => {
  if (err) {
    console.log("Hubo un error");
  }
  aboutPage = HtmlPage;
});
fs.readFile(ContactMePath, (err, HtmlPage) => {
  if (err) {
    console.log("Hubo un error");
  }
  ContactMePage = HtmlPage;
});
fs.readFile(IndexPath, (err, HtmlPage) => {
  if (err) {
    console.log("Hubo un error");
  }
  indexPage = HtmlPage;
});
fs.readFile(NotFoundPath, (err, HtmlPage) => {
  if (err) {
    console.log("Hubo un error");
  }
  NotFoundPage = HtmlPage;
});

// With the HTTP module, create a server.
const server = http
  .createServer(function (req, res) {
    console.log(req);
    if (req.url === "/") {
      res.end(indexPage);
    } else if (req.url === "/about") {
      res.end(aboutPage);
    } else if (req.url === "/contact-me") {
      res.end(ContactMePage);
    } else {
      res.end(NotFoundPage);
    }

    res.writeHead(200, { "Content-Type": "text/plain" });

    res.end();
  })
  .listen(3000);
