const https = require("https");
const fs = require("fs");

let data = "";

// Fetch data from using https module
https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    // Write data using fsmodule
    fs.writeFile("./result/posts.json", data, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("data has been written to file");
    });
  });
})