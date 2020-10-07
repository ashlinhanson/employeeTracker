var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeetracking_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function selectAll(){
    connection.query("SELECT * FROM employee", function(err, res){
        if (err) throw err;
        console.log(res);
    });
    createProduct();
};

function createProduct(){
    console.log("");
    connection.query(
        
        function (err, res){
            if (err) throw err;
            console.log(res.affectedRows + "\n");
            updateProduct();
        }
    )
}

function updateProduct(){
    var query = connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
            
        ]
    )
}