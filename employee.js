const connection = require("configdb.js");
const inquirer = require("inquirer");

function addEmployee(){
    //function to add an employee
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the new employees first name?",
            name: firstName
        },
        {
            type: "input",
            message: "What is the new employees last name?",
            name: "lastName"
        },
    ]).then(answer => {
        
        connection.query(
            {
                first_name: answer.firstName,
                last_name: answer.lastName
            }, function (err, result){
                if (err) throw err;
                console.log("The employee has been added successfully")
            }
        )
    })
};

function viewEmployees(){
    //function to view employees
    connection.query("SELECT * FROM department", function(err, results){
        if (err) throw err;
        console.log(results);
    });

};

//---eventually---

// add a function to view employees by manager

// update employees function

// delete employees function


module.exports = {addEmployee, viewEmployees};