const http = require('http');


const server = http.createServer((req , res)=>{
    const urlPath = req.url;
    if(urlPath === "/overview"){
        res.end('Welcome to the "overview page" of the nginx project');
    }else if(urlPath === '/api'){
        res.writeHead(200, {"Content-Type": 'application/json'});
        res.end(
            JSON.stringify({
                product_id: 'xyz12u3',
                product_name: 'nginx injector'
            })
        );
    }
    else{
        res.end('Successfully started a server');
    }

});

server.listen(3000, "localhost", ()=>{
    console.log("listening for request!")
})