const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('run server')
    // console.log('req', req)
    const url = req.url

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<header><meta charset="utf-8"><title>My Page</title></header>')
        res.write('<body>')
        res.write('<form method="post" action="/create-user"><input type="text" name="username"><button type="submit">送出</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<header><title>My Page</title></header>')
    res.write('<body>')
    res.write('<h1>Hello World</h1>')
    res.write('</body>')
    res.write('</html>')
})

server.listen(3000)