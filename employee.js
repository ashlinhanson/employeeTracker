var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Anhpmd0424!",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function selectAll(){
    connection.query("SELECT * FROM songs", function(err, res){
        if (err) throw err;
        console.log(res);
    });
    createProduct();
};

function createProduct(){
    console.log("Inserting new product...\n");
    connection.query(
        "INSERT INTO songs SET ?",
        {
            title: "hjgfjgf",
            artist: "jhgjhg",
            genre: "kmhjbg"
        },
        function (err, res){
            if (err) throw err;
            console.log(res.affectedRows + " song inserted\n");
            updateProduct();
        }
    )
}

function updateProduct(){
    var query = connection.query(
        "UPDATE songs SET ? WHERE ?",
        [
            
        ]
    )
}