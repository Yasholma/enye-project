const { Router } = require("express");
const { getRates } = require("../util");

const router = Router();

router.get("/", async (req, res) => {
  const { base = "", currency = "" } = req.query;

  if (!base || !currency)
    return res.status(404).send({ error: "Data not found" });

  try {
    const results = await getRates(base, currency.split(","));
    res.json({ results });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong." });
  }
});

module.exports = router;
