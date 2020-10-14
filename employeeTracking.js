const inquirer = require("inquirer");
const mysql = require ("mysql");
const connection = require("./configdb.js");


connection.connect(function(err) {
    if (err) throw err;
    console.log(`connected via ${connection.threadId}`)
    startApp();
});

function startApp(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "Welcome to The Employee Tracking System. What are you needing to do?",
            choices: ["Add employee, role, or department", "View employees, roles, or departments", 
            "Update employee roles"],
            name: "optionChoice"
        }
    ]).then(answer => {
        if(answer.name === "Add employee, role, department"){
            inquirer
            .prompt([
                {
                    type: "list",
                    message: "Are you wanting to add an employee, a role, a department or exit?",
                    choices: ["Employee", "Role", "Department", "Exit"],
                    name: "addingChoice"
                }
            ]).then(answer => {
                if(answer.name === "Employee"){
                    addEmployee();
                }else if(answer.name === "Role"){
                    addRole();
                }else if(answer.name === "Department"){
                    addDept();
                };
                // }else(answer.name === "Exit"){
                //     startApp();
                // }
            });
        }else if(answer.name === "View employees, roles, or departments"){
            inquirer
            .prompt([
                {
                    type: "list",
                    message: "Would you like to view employees, roles, departments or exit?",
                    choices: ["Employees", "Roles", "Departments", "Exit"],
                    name: "viewingChoice"
                }
            ]).then(answer => {
                if(answer.name === "Employees"){
                    viewEmployees();
                }else if(answer.name === "Roles"){
                    viewRoles();
                }else if(answer.name === "Departments"){
                    viewDepts();
                }
            });
        }else if(answer.name === "Update employee roles"){
            inquirer
            .prompt([
                {
                    type: "rawlist",
                    message: "What would you like to update?",
                    choices : function() {
                        var rolesArray = [];
                        for (var i = 0; i < results.length; i++) {
                        rolesArray.push(results[i].role_id);
                        }
                        return rolesArray;
                    },
                    name: updateRole,
                }
            ])
        }
    })
};

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
};

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
    connection.query("SELECT * FROM department", function(err, results){
        if (err) throw err;
        console.log(results);
})};

