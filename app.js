const Express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => console.log(err));

const app = new Express();

const renderHomePage = function(req, res) {
  connection.query("select * from flowers;", (error, data, fields) => {
    res.send(JSON.stringify(data));
  });
};

const PORT = process.env.PORT || 8080;
app.use(Express.static('react-front-end/build'));
app.get("/flowers", renderHomePage);

app.listen(PORT, () => {
  console.log("listening at port: ", PORT);
});
