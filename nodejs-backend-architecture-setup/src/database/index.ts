import mongoose from "mongoose"
import { db } from "../config.js"

//`mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`
const dbURL = `mongodb://${db.host}:${db.port}/${db.name}`;

mongoose
  .connect(dbURL)
  .then(() => "MongoDB Connected")
  .catch(err => console.log(err))
