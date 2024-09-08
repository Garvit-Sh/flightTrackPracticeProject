const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const cityRepository = require("./repository/city-repository");
const setupandstartServer = async () => {
  const app = express();
  //   const PORT = 3000;
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
    // console.log(process.env);
    const repo = new cityRepository();
    repo.createCity({ name: "Jaipur" });
  });
};

setupandstartServer();
