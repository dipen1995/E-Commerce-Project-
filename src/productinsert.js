var mongoose =  require("mongoose"); //load the module

var uri="mongodb://localhost:27017/angularauth"; //URI
mongoose.connect(uri,{useNewUrlParser:true}); //reference ready to connect
var db = mongoose.connection;  ///connected to database
mongoose.promise =  global.Promise;

db.on("error", (err)=>console.log("Error Generated..."))

db.once("open", function(){
    console.log("Connected...")

    var productSchema = mongoose.Schema({
        _id:Number,
        pname:String,
        price:Number
    });
    //Map this Schema to model
    var Product =  mongoose.model("Product",productSchema);

    //create product document instance or reference

    var p1 =  new Product({_id:103, pname:"Tv2",price:125000});

    //Ready to save the record in mongoDB

    p1.save((err,result)=>{
        if(error){
            console.log("Error generated ")
        }else{
            console.log("Record inserted successfully..")
        }
        mongoose.close();
    })
});