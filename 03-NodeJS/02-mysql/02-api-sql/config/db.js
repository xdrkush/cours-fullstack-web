// Import modules
const mysql = require("mysql");

// Instance mysql
db = mysql.createConnection(require('./').config);

// Connect node -> mysql
db.connect((err) => {
    if (err) console.error("error connecting: " + err.stack);
    console.log("connected as id " + db.threadId);
});

exports.db = db