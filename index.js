const express= require('express');//backend ko run krega


const app=express();

app.set('views', __dirname+ "/web");
app.engine('html', require('ejs').renderFile);//html file hi execute krna



app.get('/',(req,res)=>{
    res.render('index.html');
});


app.listen(80,()=>{
    console.log('Server is running on port 80');
});

app.use(express.urlencoded({extended:true}));

const mongoose=require('mongoose');

const uri = "mongodb://localhost:27017/Registration";


mongoose.connect(uri,{});

const mySchema=new mongoose.Schema({
    user:String,
    pass:String
});

const MyModel=mongoose.model('student',mySchema);

app.post('/',(req,res)=>{
    const myData = req.body;
     
    MyModel.insertMany(myData).then(()=> console.log('data saved'));


    console.log(req.body);

    res.status(200).render('index.html');

})