import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants"

const start = async() => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: 'reddit',
    type: 'postgresql',
    debug: !__prod__,
  })
}

start()

console.log('hello world again')