import app from "./app"
import { Server } from 'http'
import mongoose from "mongoose";
import config from "./config";



async function main() {

  try {
    await mongoose.connect(config.database_url as string)

    app.listen(config.port, () => {
      console.log(`Server running on ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }


}


main()