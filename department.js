const inquire = require("inquire");
const mysql = require("mysql");
const connection = require("connection")

function addDept(){
    //function for adding a dept
    inquire
    .prompt([
        {
            name: "deptName",
            type: "input",
            message: "What is the name of the department you are adding",
            validate: function(value){
                if (isNaN(value) === false){
                    return true;
                }
                return false;
            }
        },
    ]).then(function(answer){
        connection.query(
            "INSERT INTO department SET ?",
            {
                id: INT NOT NULL AUTO_INCREMENT,
                name: answer.deptName
            },
            function (err) {
                if (err) throw err;
                console.log("Your department has been added successfully");
                addDept();
            }
        );
    });
};

function viewDept(){
    //function for viewing the departments
};



//---eventually---

//Update departments function

//Delete departments function


module.exports = "department";