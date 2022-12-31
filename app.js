const express=require("express")

const app =express()

const port =3000



app.listen(port,()=>{
    console.log("server is running....")
})
//convert json to javascript object
app.use(express.json())// it will convert json in to javascript

app.get('/', function(req,res){
    res.send('Hello world!!!')
})
app.get('/about/', function(req,res){
    res.send('About')
})  //get api will identify "/" it means home page 

app.get("/a1",(req,res)=>{
    let a= 10
    let b=20
    res.send(`sum of two num is ${a+b}`)}) 


app.post("/mul",(req,res)=>{    
    // let a= 10
    // let b=20
    // console.log(req.query.n1,req.query.n2)

    let n1=req.query.n1
    let n2 =req.query.n2
            //or
    //  let {n1,n2}=req.query   it has call D structuring   
    let mul=n1*n2
    console.log(mul)
    res.send(`sum of two num is :${mul}`)
}) 
 
app.post("/div",(req,res)=>{    
    let {name,n1,n2}=req.body.name
    console.log(req.body.name)
    let div=n1/n2
    res.send(`sum of two num is:${div}`)
}) //we are geting here undifind  that and this is middlewer part 

 //req & res its pre define req is an obj res is an obj 
 //req will collect all incoming data from app 
 //res will collect all out going data from app