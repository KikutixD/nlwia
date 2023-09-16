import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  ytdl(videoURL, {
    quality: "lowestaudio",
    filter: "audioonly",
  })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000
      console.log(seconds)

      if (seconds > 60) {
        throw new Error(
          "The video is not a short, playable video minun 60 seconds"
        )
      }
    })
    .on("end", () => {
      console.log("Download complete")
    })
    .on("error", (error) => {
      console.log("Error, please try again later, code error: ", error)
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
