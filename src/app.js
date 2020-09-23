const path = require("path");
const express = require("express");

const app = express();
const publicDirPath = path.join(__dirname, "../public");

// Serve html page
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
	res.send("Hello");
});

app.get("/contact", (req, res) => {
	res.send([
		{
			name: "Antonio",
		},
	]);
});

app.get("/weather", (req, res) => {
	res.send({
		forecast: "Its gonna rain today",
		location: "Shillong",
	});
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
