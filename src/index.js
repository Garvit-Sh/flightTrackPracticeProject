const express = require("express");
const { PORT } = require("./config/serverConfig");

const setupandstartServer = async () => {
  const app = express();
  //   const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
    // console.log(process.env);
  });
};

setupandstartServer();
