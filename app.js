const http = require('http')

const server = http.createServer((rep,res) =>{
    res.end('Hello node')
})
server.listen(5500, ()=>{
    console.log('Node server is working!')
})