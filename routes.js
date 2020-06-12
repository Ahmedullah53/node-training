const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/' ) {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    res.write(`<h1>Welcome</h1>`);
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="username">');
    res.write('<button type="submit">Send</button>');
    res.write('</form');
    res.write('</br><p>to see list of users <a href="/users"> click here</a></p>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users' && method === 'GET' ){
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body>');
    res.write('<a href="/"><- back</a>')
    res.write('</br>')
    res.write('<ul>');
    res.write('<li>Tasnim Ahmed</li>')
    res.write('<li>Hassan Abbas</li>')
    res.write('<li>Komail Haider</li>')
    res.write('<li>Manoj Kumar</li>')
    res.write('<li>Munawar Khan</li>')
    res.write('<li>M.Hunnain Khalid</li>')
    res.write('<li>Ahmad Ayub</li>')
    res.write('<li>Ahmedullah Siddiqui</li>')
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = requestHandler;