import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
import express from "express";

const start = async() => {
  console.log("dirname:", __dirname);
  const orm = await MikroORM.init(microConfig)
  await orm.getMigrator().up()
  
  const app = express();
  const port = 5000
  app.get('/', (_, res) => {
    res.send('hello please second place plase hell yeah')
  });

  app.listen(port, () => {
    console.log(`server started on lacalhost:${port}`)
  });
};

start().catch(error => {
  console.log(error)
})

