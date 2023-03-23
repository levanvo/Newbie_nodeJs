const http = require("http");
http.createServer(function (req, res) {
    const arr = [
        { name: "SO1", id: 1 },
        { name: "SO2", id: 2 }
    ];
    console.log(req.url)
    if (req.url == "/") {
        console.log('see 1')
        res.setHeader("Content-Type", "text/html");
        res.end(/*html*/`<form action="/products" method="POST">
            <input type="" placeholder="....">
            <button>Send</button>
        </form>`);
    }
    if (req.url == "/products") {
        console.log('see 2')
        // res.setHeader("Content-Type", "text/html");
        // res.end(`<h1>Le Van Vo</h1>`);
        res.setHeader("Content-Type", "application/json");
        arr.push({ name: "SO3", id: 3 });
        res.end(JSON.stringify(arr));
    }
}).listen(8080, function () {
    // console.log("");
});

// Set evironment Node==================================

// npm init -y
// npm i nodemon -D
// npm i express
// npm i concurrently -g
// "start":"nodemon app.js"
//Way_1 in package.json form nodemon --experimental-modules
//Way_2 in package.json form nodemon --experimental-specifier-resolution=node

// Other (this don't care with path:8080, vite auto created one localhost);
// npm i vite vite-plugin-node

