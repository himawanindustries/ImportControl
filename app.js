require("dotenv").config();
const express=require("express"),
bodyParser=require("body-parser"),
app=express();

app.use(express.static("public"));
app.set("view engine","ejs");
var port="3000";
app.listen(port, function(){
  console.log("Port used "+ port);
});

app.get("/",function(req,res){
  res.render("home");
})

app.get("/record",function(req,res){
  res.render("record");
})
