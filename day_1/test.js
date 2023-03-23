const path=require("http");
const expand=path.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
    
    if(req.url=="/"){
        res.end(/*html*/`
            <input type="text" placholder="..." id="number">
            <button onclick='xet()'>Send</button>
            <script>
                function xet(){
                    let number=document.querySelector("#number").value;
                    if(number > 5){
                        window.location.href="/vole";
                    }else{
                        alert(number);
                    };
                };
            </script>
        `);
    };
    if(res.url=="/vole"){
        res.end(`<h1>LE VAN VO</h1>`);
    }
});



expand.listen(8080);