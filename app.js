// Require express framework
const express = require("express"); const PORT = 3000;
// Instantiate express
const app = express();
// Define a default route
app.get('/', (req, res) => {
res.send('Hello');
// or
// res.sendFile(__dirname + '/home.html');
});
// Start the app
app.listen(PORT, () => {
console.log('Server running on http://localhost:3000');
});