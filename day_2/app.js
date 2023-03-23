import express from "express";
const projects=[
    {name:"PR-1",id:1},
    {name:"PR-2",id:2}
];

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    // const a=res.json(projects);
    // console.log(JSON.stringify(a));
    // console.log(req);
    res.send(`<h1>VO</h1>`);
});
app.listen(8080);