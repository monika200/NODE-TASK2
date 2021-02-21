const express = require('express');
const app = express();
const cors =   require("cors");
app.use(cors());
const port =3001;

app.get('/',(req,res)=>{
    res.send("Welcome to our API")
})

app.get('/employees',(req,res)=>{
    res.json([
    {
        name:"Ram", 
        age:30,
        role: "Manager",
        address: "Hyderabad",
        Contact_Number : 1234567890
    },
    {
        name:"Ramesh", 
        age:36,
        role: "Director",
        address: "Mumbai",
        Contact_Number : 1234525890
    },
    {
        name:"Radha", 
        age:25,
        role: "Database developer",
        address: "vadodara",
        Contact_Number : 1784567890
    },
    {
        name:"Krishna", 
        age:28,
        role: "Data Analyst",
        address: "Chennai",
        Contact_Number : 1234567630
    }
])
})
app.listen(port,()=>{
    console.log(`App is running to port ${port}`);
})