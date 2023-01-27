const express = require("express");
const bodyParser= require("body-parser");

const app = express();

app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=[];

app.get("/", function (req, res) {
    res.render("list", {newitem: items});
});

app.post("/",function(req,res){
    var item= req.body.input;
    items.push(item);
    res.redirect("/")

});
app.post("/checkbox", (req, res) => {
    var index = req.body.index;
    items.splice(index,1)
    res.redirect("/")
  });




app.listen(4000,function () {
    console.log("Server started");
    
})