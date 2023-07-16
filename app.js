const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Store the playlist in memory (can be replaced with a database in a production environment)
let playlist = [
  {
    title: "Song Title",
    artists: "Artist 1, Artist 2",
    url: "https://spotify.com/track/12345",
    img: "music.png",
    count: 1,
  },
  {
    title: "Song Title2",
    artists: "Artist 1 Artist 2",
    url: "https://spotify.com/track/12345",
    img: "music.png",
    count: 2,
  },
  {
    title: "Song Title3",
    artists: "Artist 1 Artist 2",
    url: "https://spotify.com/track/12345",
    img: "music.png",
    count: 3,
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs", { playlist });
});
app.get("/form", (req, res) => {
  res.render("form.ejs");
});
app.post("/create", (req, res) => {
  playlist.push({
    title: req.body.judul,
    artists: req.body.artist,
    url: req.body.url,
    img: "music.png",
    count: 0,
  });
  res.redirect("/");
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
