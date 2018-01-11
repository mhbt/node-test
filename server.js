var mysql = require("mysql");
var dbConfig = require("./dbConfig.json");
var express = require("express");
var bodyParser = require("body-parser");
/*
    Database Section
*/
var questions = [];
var db = mysql.createConnection(dbConfig);
// Database Connection and Query
db.connect(function (err) {
    if (err) throw err;
    db.query("SELECT * FROM question", function (err, result, fields) {
        if(!err){
            questions = result;
            
        }
        else {
            throw err;
        }
    });
});

/*
** Server
**/
var app = express();


/* Middlewares */
app.use(express.static("./public"));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* Requests */
app.get("/questions", function(request, response){
    statements =[];
    questions.forEach(question=>{
        statements.push(question.statement);
    });
    response.send(statements);
});
app.post("/answers", function(request, response){
    answers = request.body;
    score = 0;
    for(var i = 0; i< 10; i++){
        str = "question_"+ i;
        answer = answers[str] == "yes" ? true : answers[str] =="no"? false : null;
        console.log(`input ${answer} : answer:${questions[i].answer}`);
        if(answer == questions[i].answer){
            score++;
        }
    }
    console.log(score);
    response.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>The Pakistan Quiz</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
        crossorigin="anonymous">
</head>
<body>
    <div class="main container">
        <br>
        <div id="container" class="jumbotron text-center">
            
            <h1 class="display-3 text-center">
                You Scored : ${score}
            </h1>
            <br>
            <button id="retake-quiz" class="btn btn-success text-center">
                Retake Quiz
            </button>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
        crossorigin="anonymous"></script>
    <script src="scripts/main.js"></script>
</body>
</html>
    `);
});


var server = app.listen(process.env.port, () => {
    console.log("Server is listening at " + server.address().port + " using " + server.address().family + "\n");
});
