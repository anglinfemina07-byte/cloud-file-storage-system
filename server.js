require("dotenv").config()
const express = require("express")
const multer = require("multer")
const AWS = require("aws-sdk")
const cors = require("cors")
const fs = require("fs")

const app = express()
app.use(cors())

const upload = multer({ dest: "uploads/" })

AWS.config.update({
 accessKeyId: "MY-ACESS-KEY",
 secretAccessKey: "MY-SECRET-ID",
 region: "eu-north-1"
})

const s3 = new AWS.S3()
const bucket = "angelin-storage"

app.post("/upload", upload.single("file"), (req,res)=>{

 const fileContent = fs.readFileSync(req.file.path)

 const params = {
  Bucket: bucket,
  Key: req.file.originalname,
  Body: fileContent
 }

 s3.upload(params,(err,data)=>{
  if(err){
   console.log(err)
   return res.send("Error")
  }

  res.send("Uploaded")
 })

})

app.listen(3000,()=>console.log("Server running"))
app.delete("/delete/:key",(req,res)=>{

const params = {
 Bucket: bucket,
 Key: req.params.key
}

s3.deleteObject(params,(err,data)=>{
 if(err) return res.send(err)

 res.send("Deleted")
})

})