const http = require('http');

// Membuat server HTTP
const server = http.createServer((req, res) => {
  // Mengatur header respons
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Mengirimkan pesan sebagai respons
  res.end('Halo, dunia!');
});

// Menjalankan server pada port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server berjalan pada http://localhost:3000/');
});
