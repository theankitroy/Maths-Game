var visitor=prompt("Please Enter your name: ");
// if(visitor==NULL){
//     visitor=" ";
// }
var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;
var lifevalue;
//if we click on the start/reset
document.getElementById("startreset").onclick=function(){
    //if we are playing
    if(playing==true){
        location.reload(); //to reload page
    }
    else{
        //if we are not playing
        
        //change mode to playing
        playing=true;
        score=0; //set score to zero
        lifevalue=3;
        show("life");
        document.getElementById("lifeleft").innerHTML=lifevalue;
        document.getElementById("scorevalue").innerHTML=score;

        //show Left life
        // show("life");
       
        //show countdown box
       show("timeremaining"); //Changng display property to block to show item
            timeremaining=60;
           
            document.getElementById("timeremainingvalue").innerHTML=timeremaining;

            //hide game over box
            hide("gameover");
       
            //Change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";
        
        //reduce time by1 sec
         startCountdown();

         //generate a new Q&A

         generateQA();
    }
}
    
//if we click on answerr box
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        //if we're playing
        if(playing==true){ //yes
          if(this.innerHTML==correctAnswer){
              //correct Answer
  
              //Increase scoe by 1
              score+=1;
  
              document.getElementById("scorevalue").innerHTML=score;
  
              //hide wrong box and show correct
              hide("wrong");
              show("correct");
              setTimeout(function(){
                  hide("correct");
  
              },1000);
              //Generating Q&A
              generateQA();
          
          
          
          }
              else{//wrong answer
                   lifefunction();
                  hide("correct");
                  show("wrong");
                  setTimeout(function(){
                      hide("wrong");
      
                  },1000);
              
          }
        }
  
  }
  
}
function lifefunction(){
    lifevalue-=1;
    document.getElementById("lifeleft").innerHTML=lifevalue;
    if(lifevalue<1){
        stopCountdown();
        show("gameover");
           if(score>24){
            document.getElementById("gameover").innerHTML=
         "<p> game over "+visitor+"!</p> <p> Your Score is "+score+".</p><br/> <p>Well Done! You're under Top 10 Winners!</p>";
        }
        if(score>19 && score<25){
           document.getElementById("gameover").innerHTML=
        "<p> game over "+visitor+"!</p> <p> Your Score is "+score+".</p><br/> <p>You're under Top 25 Winners!</p>";
       }
       if(score<20){
           document.getElementById("gameover").innerHTML=
        "<p> game over "+visitor+"!</p> <p> Your Score is "+score+".</p>  <p>You just need more "+(25-score)+" points to get into top 10 List!</p>";
       }


         //hiding time remainig
           hide("timeremaining");
           hide("correct");
           hide("wrong");
           hide("life")
           playing=false;
           document.getElementById("startreset").innerHTML="Start Game";
       

    }
}

  
  //start counter
function startCountdown(){
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
       
        if(timeremaining==0){ //GameOver
          stopCountdown();
         show("gameover");
            if(score>24){
             document.getElementById("gameover").innerHTML=
          "<p> game over "+visitor+"!</p> <p> Your Score is "+score+".</p><br/> <p>Well Done! You're under Top 10 Winners!</p>";
         }
         if(score>19 && score<25){
            document.getElementById("gameover").innerHTML=
         "<p> game over "+visitor+"!</p> <p> Your Score is "+score+".</p><br/> <p>You're under Top 25 Winners!</p>";
        }
        if(score<20){
            document.getElementById("gameover").innerHTML=
         "<p> game over "+visitor+"!</p> <p> Your Score is "+score+".</p>  <p>You just need more "+(25-score)+" points to get into top 10 List!</p>";
        }


          //hiding time remainig
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
        
    },1000);
}

//stop counter
function stopCountdown(){
    clearInterval(action);
}

//hide certain element
function hide(Id){
    document.getElementById(Id).style.display="none";

}

//show a certain element
function show(Id){
    document.getElementById(Id).style.display="block";

}

//generate questions and multiple answers
function generateQA(){
    
    var op=Math.round(Math.random()*2)+1;
    switch(op){
    case 1: 
    var x=Math.round(Math.random()*19)+1;
    var y=Math.round(Math.random()*9)+1;
        correctAnswer=x*y;

    document.getElementById("question").innerHTML=x+"x"+y;
    var correctPosition=Math.round(Math.random()*3)+1;

    document.getElementById("box"+correctPosition).innerHTML=correctAnswer; //fill one box with the correct ans

    var answers=[correctAnswer];
    //fill other boxes with wrong ans
    for(i=1;i<5;i++){
        if(i!=correctPosition){
            var wrongAnswer;
            do
                {
                    wrongAnswer=(Math.round(Math.random()*19)+1)*(Math.round(Math.random()*9)+1);  //a wrong ans
        
                   }while(answers.indexOf(wrongAnswer)>-1);
                           
           document.getElementById("box"+i).innerHTML=wrongAnswer;
           answers.push(wrongAnswer);
        }
    }
    break;
    case 2:
        
    var x=Math.round(Math.random()*99)+1;
    var y=Math.round(Math.random()*35)+1;
    correctAnswer=x+y;

    document.getElementById("question").innerHTML=x+"+"+y;
    var correctPosition=Math.round(Math.random()*3)+1;

    document.getElementById("box"+correctPosition).innerHTML=correctAnswer; //fill one box with the correct ans

    var answers=[correctAnswer];
    //fill other boxes with wrong ans
    for(i=1;i<5;i++){
        if(i!=correctPosition){
            var wrongAnswer;
            do
                {
                    wrongAnswer=(Math.round(Math.random()*99)+1)+(Math.round(Math.random()*35)+1);  //a wrong ans
        
                   }while(answers.indexOf(wrongAnswer)>-1);
                           
           document.getElementById("box"+i).innerHTML=wrongAnswer;
           answers.push(wrongAnswer);
        }
    }
    break;
    case 3:
        
        var x=Math.round(Math.random()*100)+1;
        var y=Math.round(Math.random()*30)+1;
    correctAnswer=x-y;

    document.getElementById("question").innerHTML=x+"-"+y;
    var correctPosition=Math.round(Math.random()*3)+1;

    document.getElementById("box"+correctPosition).innerHTML=correctAnswer; //fill one box with the correct ans

    var answers=[correctAnswer];
    //fill other boxes with wrong ans
    for(i=1;i<5;i++){
        if(i!=correctPosition){
            var wrongAnswer;
            do
                {
                    wrongAnswer=(Math.round(Math.random()*19)+1)-(Math.round(Math.random()*9)+1);  //a wrong ans
        
                   }while(answers.indexOf(wrongAnswer)>-1);
                           
           document.getElementById("box"+i).innerHTML=wrongAnswer;
           answers.push(wrongAnswer);
        }
    }
    break;
    
    
}
}
