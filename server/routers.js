const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  //   res.send('Hello, this is a simple GET API!');
  res.json({ user: "tj" });
});

app.post("/savedetails", (request, resp) => {
  console.log(request.body);
  resp.send(request.body.some);
});
