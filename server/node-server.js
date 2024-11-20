const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Server</title></head>')
        res.write('<body>')
        res.write('<h1>Home</h1>')
        res.write('<a href="/info"><button>info</button></a>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    if(url === '/info') {
        res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Server</title></head>')
    res.write('<body>')
    res.write('<h1>Hello World</h1>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
    }
    
})

server.listen(3000)