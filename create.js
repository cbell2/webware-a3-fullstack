var sql = require('sqlite3');

// create database
var db = new sql.Database('tasks.sqlite');

db.serialize(function() {

  // making the table
  db.run("CREATE TABLE tasks (id varchar(100), title varchar(100), sub varchar(100), list varchar(5000))");

  // adding data
  db.run("INSERT INTO tasks VALUES ('asdf123', 'Geology', 'GE 2341', 'HW1,HW2,HW3')");
  db.run("INSERT INTO tasks VALUES ('jkl321', 'IQP', 'ID 2050', 'Assignment 1,Assignment 2,Assignment 3')");
  db.run("INSERT INTO tasks VALUES ('randomExample', 'Webware', 'CS 4241', '1,2,3')");

  // verify we can query data
  db.each("SELECT id, title, sub, list FROM tasks", function(err, row) {
      console.log( JSON.stringify(row) );
  });

});

db.close();
