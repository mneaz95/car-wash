let express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    passport = require("passport");

    
    
app.set("view engine", "ejs");
//This line is something that you always use with body-parser
app.use(express.static(__dirname +"/public"));
app.use(express.static(__dirname +"/java"));
app.use(express.static(__dirname + "/pictures"));
app.use(express.static(__dirname + "/pictures" + "/gallaryImg"));
app.use(express.static(__dirname + "/pictures" + "/footer"));

console.log(__dirname);

app.use(bodyParser.urlencoded({extended: true}));
//PASPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rocky is so cute",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



    
    
app.get("/", function(req, res){
    res.render("home");
});
    
app.get("/", function(req, res){
    res.render("home");
});
        
app.get("/gallery", function(req, res){
    res.render("gallery");
});

app.get("/detail", function(req, res){
    res.render("detail");
});


app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/propane", function(req, res){
    res.render("propane");
});


var server = app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Started On Port: " + server.address().port); 
});