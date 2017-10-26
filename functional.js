function gradeConvert() {    
    let grade1 = document.getElementById("grade1").value,
        grade2 = document.getElementById("grade2").value,
        grade3 = document.getElementById("grade3").value,
        grade4 = document.getElementById("grade4").value,
        grade5 = document.getElementById("grade5").value; 

    let ltrA ="A",
        ltrB ="B",
        ltrC ="C",
        ltrD ="D",
        ltrF ="F";
     
    let letter1 =  document.getElementById("letter1"),
        letter2 =  document.getElementById("letter2"),
        letter3 =  document.getElementById("letter3"),
        letter4 =  document.getElementById("letter4"),
        letter5 =  document.getElementById("letter5");
    
    
    
    let letters = [letter1, letter2, letter3, letter4, letter5];
    let grades = [grade1, grade2, grade3, grade4, grade5];
    
    

/*converts numbers to letters based on assigned values*/
    for (let i = 0; i <= grades.length; i++){
        
        if (grades[i] <=50){
            (letters[i]).innerHTML = ltrF;
        }
        if (grades[i] >= 51){
            (letters[i]).innerHTML = ltrD;
        }
        if (grades[i] >= 70){
            (letters[i]).innerHTML = ltrC;
        }
        if (grades[i] >= 80){
            (letters[i]).innerHTML = ltrB;
        }
        if (grades[i] >= 90){
            (letters[i]).innerHTML = ltrA;
        }
    }

/*UNARY PLUS(+)--from developer.mozilla.org:"the unary plus(+) operator precedes its operand and...convert[s] it into
...a number if it isn't already"*/

    let letterAverage = (+grade1 + +grade2 + +grade3 + +grade4 + +grade5) / 5;
/*the final average number grade to document*/            
        document.getElementById("TestAverage").innerHTML= letterAverage;
            
/*final average letter grade to document*/            
        if(letterAverage <=59){
            document.getElementById("letterAverage").innerHTML= ltrF;
        }
        if(letterAverage >=69){
            document.getElementById("letterAverage").innerHTML= ltrD;    
        }
        if(letterAverage >=70){
            document.getElementById("letterAverage").innerHTML= ltrC;
        }
        if(letterAverage >=80){
            document.getElementById("letterAverage").innerHTML= ltrB;
        }
        if(letterAverage >=90){
            document.getElementById("letterAverage").innerHTML= ltrA;
        }

}


