var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function onClick(){
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var name = document.getElementById("bookName").value;
    var cost = document.getElementById("bookCost").value;
    var quantity = document.getElementById("bookQuantity").value;

    if (name!="" && cost>0 && quantity>0){
        var history = document.getElementById("history");
        info.style.backgroundColor = "lightskyblue";
    
        const d = new Date();
        let y = d.getFullYear();
        let mn = addZero(d.getMonth() + 1);
        let dy = addZero(d.getDate());
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        let time = y + "-" + mn + "-" + dy + " " + h + ":" + m + ":" + s;
  }
  var myobj = { name: name, price: cost, amount: quantity, date: time };
  dbo.collection("books").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
}
