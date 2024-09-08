const city = require("../models/city");
const { City } = require("../models/index");

class cityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return City;
    } catch (err) {
      throw { err };
    }
  }
  async destroyCity(cityId) {
    try {
      const city = await City.delete({
        where: {
          id: cityId,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
module.exports = cityRepository;
