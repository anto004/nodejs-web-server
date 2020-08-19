const express = require("express");

const app = express();

app.get("", (req, res) => {
	res.send("Hello from express!");
});

app.get("/help", (req, res) => {
	res.send("Help page here to help");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
