import React from "react";



function Result({secretNum, term}){
    let result;
    if(term > secretNum){
        result="Higher"
    }
    else if(term < secretNum){
        result="lower";

    }
    else if(term == secretNum){
        result='yipee number is correct'
    }else {
        result="Ivalid input"
    }
    return(
   <>
   <h3> Guess the number is : {result}</h3>
   </>
    )
}

export default Result;