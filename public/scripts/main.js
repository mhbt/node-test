$(()=>{
    $("#start-quiz").click(function(){
        let count = 0;
        $.get("http://localhost:3000/questions", (statements)=>{
            $("#container").html(`<h4 class="display-4">Answer These Questions</h1><br><form id ="question-form" action="/answers" method="post" ><ol id="questions" class="text-left"><ol></form>`);
            statements.forEach(statement =>{
                $("#questions").append(`<li>${makeHTMLQuestion(statement,count++)}</li>`);
            });
            $("#question-form").append("<br><button id=\"submit-quiz\" class=\"btn btn-primary\" type=\"submit\">Submit Quiz</button>");

        });
       
    });

    $("#retake-quiz").click(function () {
       window.location="http://localhost:3000";

    });

});

function makeHTMLQuestion(statement, id){
    return `
    <h6  id="q-${id}" class="display-6">${statement}</h6>
    <label class="custom-control custom-radio">
        <input id="question_${id}-a" name="question_${id}" type="radio" value="yes" class="answer">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">True</span>
    </label>
    <label class="custom-control custom-radio">
        <input id="question_${id}-b" name="question_${id}" type="radio" value="no" class="answer">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">False</span>
    </label>
    `;
}