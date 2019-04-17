const Express = require("express");
// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "user",
//   password: "user",
//   database: "practice"
// });

// connection.connect(err => console.log(err));

const app = new Express();

const renderHomePage = function(req, res) {
  // connection.query("select * from flowers;", (error, data, fields) => {
    // console.log(data);
    res.send(JSON.stringify([{ id: 1, flower_name: 'Rose', color: 'Red' }]));
  // });
};

const PORT = process.env.PORT || 8080;
app.use(Express.static('react-front-end/build'));
app.get("/flowers", renderHomePage);

app.listen(PORT, () => {
  console.log("listening at port: ", PORT);
});
