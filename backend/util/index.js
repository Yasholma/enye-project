const axios = require("axios");
const _ = require("lodash");

async function getRates(base = "CZK", queryParams) {
  try {
    const { data } = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
    const { rates, date } = _.pick(data, ["rates", "date"]);

    return {
      base,
      date,
      rates: _.pick(
        rates,
        queryParams.map((s) => s.toString())
      ),
    };
  } catch (error) {
    return error;
  }
}

module.exports = {
  getRates,
};
