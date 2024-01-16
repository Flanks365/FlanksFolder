const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");


app.use("/Js", express.static("./public/Js"));
app.use("/Css", express.static("./public/Css"));
app.use("/Img", express.static("./public/Img"));
app.use("/Html", express.static("./public/Html"));

app.get("/", function (req, res) {
    //console.log(process.env);
    // retrieve and send an HTML document from the file system
    let doc = fs.readFileSync("./public/Html/frontpage.html", "utf-8");
    res.send(doc);
});

app.get("/experience", function (req, res) {
    
    let doc = fs.readFileSync("./public/Html/experience.html", "utf-8");
    res.send(doc);
});

app.get("./projects", function (req, res) {
    
    let doc = fs.readFileSync("./public/Html/projects.html", "utf-8");
    res.send(doc);
});


app.get("./hobbies", function (req, res) {
    
    let doc = fs.readFileSync("./Html/hobbies.html", "utf-8");
    res.send(doc);
});


app.use((request, response) => {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 error!\n");
  });

  let port = 8000;
  app.listen(port, function () {
      console.log("whats cooking at " + port + "!");
  });

