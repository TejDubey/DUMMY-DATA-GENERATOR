import express from "express"
import mongoose from "mongoose"
import employee from "./models/dummy.js"
const app=express()
const port=3000
await mongoose.connect("mongodb://localhost:27017/dmydata")
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index',{foo: 'FOO'})
})

function selectRandom(arr) {
    let index=Math.floor(Math.random()*arr.length)
    return arr[index]
}

app.get('/ddg',async(req,res)=>{
    //Number of inputs provided by the user
    let n = Number(req.query.n);
    if(isNaN(n)) n=10;
    if(n <= 0){
        return res.status(400).json({
            success: false,
            message: "Number of records must be greater than 0"
        });
    }
    if(n > 5000){
        return res.status(400).json({
            success: false,
            message: "Maximum 5000 records allowed"
        });
    }
    //Clear the employee before new data insertion
    await employee.deleteMany({})
    //Dummy data generator
    let randNames=["Tej","Vivaan","Aditya","Arjun","Krishna","Rohan","Karan","Rahul","Siddharth","Varun","Ananya","Priya","Sneha","Aditi","Kavya","Neha","Pooja","Ishita","Riya","Meera"];
    let randCity=["Jamnagar","Mumbai","Delhi","Bengaluru","Hyderabad","Chennai","Kolkata","Ahmedabad","Pune","Jaipur","Lucknow","Surat","Indore","Bhopal","Patna","Nagpur","Chandigarh","Kochi","Mysuru","Vadodara"];
    let randLang=["C","C++","Java","Python","JavaScript","TypeScript","Go","Rust","Kotlin","Swift","PHP","Ruby","C#","Dart","Scala","R","MATLAB","Perl","SQL","Shell"];
    let employees=[] //creating an employee array and then pushing all at once to make mongoDB calls from 10 to 1 (all 10 records at once)
    for (let i=0; i<n; i++) {
        employees.push({
            name: selectRandom(randNames),
            salary: Math.floor(Math.random()*100000), //salary between [0 to 1lakh)
            language: selectRandom(randLang),
            city: selectRandom(randCity),
            isManager: (Math.random()>0.5)?true:false
        })
    }
    let insertedEmployees=await employee.insertMany(employees)
    res.json({
        success: true,
        message: `${n} employees generated`,
        count: insertedEmployees.length,
        data: insertedEmployees
    })
})

app.get('/employees', async (req, res) => {
    let data = await employee.find({})
    res.json(data)
})

app.listen(port,()=>{
    console.log(`Example app running on port ${port}`)
})