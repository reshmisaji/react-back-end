const Express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "user",
  database: "practice"
});

connection.connect(err => console.log(err));

const app = new Express();

const renderHomePage = function(req, res) {
  connection.query("select * from flowers;", (error, data, fields) => {
    res.send(JSON.stringify(data));
  });
};
const PORT = process.env.PORT || 8080;
app.get("/flowers", renderHomePage);
app.listen(PORT, () => {
  console.log("listening at port: ", PORT);
});
