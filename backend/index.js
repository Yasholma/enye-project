const express = require("express");
const cors = require("cors");
const ratesRoutes = require("./routes/rates");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// home
app.get("/", (_req, res) => {
  res.send("Welcome to Currency Rates API");
});

// rates routes
app.use("/api/rates", ratesRoutes);

// not found
app.use((_req, _res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

const hostname = "127.0.0.1";
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on http://${hostname}:${port}`);
});
