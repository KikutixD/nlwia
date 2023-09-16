import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express()

app.use(cors())

app.get("/sumary/:id", (request, response) => {
  // response.send("o ID do vídeo é " + request.params.id)
  download(request.params.id)

  response.json({ result: "Download suseful" })
})

app.listen(3333, () => {
  //console.log("Server is running")
})
