const connection = require("configdb.js");
const inquirer = require("inquirer");

function addRole(){
    //function to add a role
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of the role being added?",
            name: "roleName"
        },
    ]).then(answer => {

        connection.query(
            "INSERT INTO role SET ?",
            {
                name: answer.roleName,
            }, function(err, results){
                if (err) throw err;
                console.log("The role was added successfully!");
            }
        )
    });
};

function viewRoles(){
    //function to view roles
    connection.query(
        "SELECT * FROM role",
        function(err, results){
            if (err) throw err;
            console.log(results);
        }
    )

};

function updateEmpRole(){
    // update employee role function
}


module.exports = "role";