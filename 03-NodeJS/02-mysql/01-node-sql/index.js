// Import modules
const mysql = require("mysql");

// Instance mysql
db = mysql.createConnection(require('./config').config);

// Fake data
const { title, price } = { title: "Mon titre", price: "15" }

// Connect node -> mysql
db.connect((err) => {
    if (err) console.error("error connecting: " + err.stack);
    console.log("connected as id " + db.threadId);
});

// Insert into
db.query(`INSERT INTO articles (title, price) values ('${title}', '${price}' );`, (err, data) => {
    if (err) console.log(err)
    console.log('script INSERT INTO', data)
})
db.query(`INSERT INTO articles (title, price) values ('${title}', '${price}' );`, (err, data) => {
    if (err) console.log(err)
    console.log('script INSERT INTO', data)
})

// Select
db.query('SELECT * FROM articles', (err, data) => {
    if (err) console.log(err)
    console.log('script SELECT', data)
})

// Update
db.query(`UPDATE articles SET title = '${title}-edit', price = '${price}-edit' WHERE id = 1;`, (err, data) => {
    if (err) console.log(err)
    console.log('script UPDATE', data)
})

// Delete
db.query('DELETE FROM articles WHERE id = 1;', (err, data) => {
    if (err) console.log(err)
    console.log('script INSERT INTO', data)
})
