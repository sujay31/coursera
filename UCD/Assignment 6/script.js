unitsThisSem=0;
creditsThisSem=0;
arrUnits=[0,0,0,0,0,0,0,0,0];
arrCredits=[0,0,0,0,0,0,0,0,0];

// Checks if valid first name is entered
function checkLengthF() {
    firstName = document.getElementById("fname").value;
    firstName=firstName.toUpperCase();
    var l = firstName.length;
    if (l >= 3) {
        document.getElementById("firstname").innerHTML="Valid";
        document.getElementById("firstname").style.color="green";
        document.getElementById("firstname").style.marginLeft="10px"
        document.getElementById("firstname").style.opacity="0.7"
    }
    else {
        document.getElementById("firstname").innerHTML="Invalid entry";
        document.getElementById("firstname").style.color="red";
        document.getElementById("firstname").style.marginLeft="10px"
        document.getElementById("firstname").style.opacity="0.7"
    }
}

// Checks if valid last name is entered
function checkLengthL() {
    lastName = document.getElementById("lname").value;
    lastName=lastName.toUpperCase();
    var l = lastName.length;
    if (l >= 3) {
        document.getElementById("lastname").innerHTML="Valid";
        document.getElementById("lastname").style.color="green";
        document.getElementById("lastname").style.marginLeft="10px"
        document.getElementById("lastname").style.opacity="0.7"
    }
    else {
        document.getElementById("lastname").innerHTML="Invalid entry";
        document.getElementById("lastname").style.color="red";
        document.getElementById("lastname").style.marginLeft="10px"
        document.getElementById("lastname").style.opacity="0.7"
    }
}

// Checks validity of branch code and determines the branch
function branchVerification() {
    var code = document.getElementById("branch").value;
    if(code=='A1' || code=='A2' || code=='A3' || code=='A4' || code=='A7' || code=='A8' || code=='AB' || code=='B1' || code=='B2' || code=='B3' || code=='B4'
     || code=='B5') {
        switch(code){
            case 'A1': branch="CHEMICAL ENGINEERING";
                       break;
            case 'A2': branch="CIVIL ENGINEERING";
                       break;
            case 'A3': branch="ELECTRICAL & ELECTRONICS ENGINEERING";
                       break; 
            case 'A4': branch="MECHANICAL ENGINEERING";
                       break;
            case 'A7': branch="COMPUTER SCIENCE ENGINEERING";
                       break;
            case 'A8': branch="ELECTRONICS & INSTRUMENTATION ENGINEERING";
                       break;
            case 'B1': branch="MSc BIOLOGY"
                       break;
            case 'B2': branch="MSc CHEMISTRY"
                       break;
            case 'B3': branch="MSc ECONOMICS"
                       break;
            case 'B4': branch="MSc MATHS"
                       break;
            case 'B5': branch="PHYSICS"
                       break;           
        }
        document.getElementById("code").innerHTML="valid";
        document.getElementById("code").style.color="green";
        document.getElementById("code").style.marginLeft="10px"
        document.getElementById("code").style.opacity="0.7"
    }
    else {
        document.getElementById("code").innerHTML="Invalid entry";
        document.getElementById("code").style.color="red";
        document.getElementById("code").style.marginLeft="10px"
        document.getElementById("code").style.opacity="0.7"
    }
}

// The next 18 functions reads the marks and grades in particulat subjects to calculate credits
function unit1() {
    u=document.getElementById("u1").value;
    arrUnits[0]=u;
}
function grade1() {
    g=document.getElementById("g1").value;
    arrCredits[0]=(g*arrUnits[0]);
}
function unit2() {
    u=document.getElementById("u2").value;
    arrUnits[1]=u;
}
function grade2() {
    g=document.getElementById("g2").value;
    arrCredits[1]=(g*arrUnits[1]);
}
function unit3() {
    u=document.getElementById("u3").value;
    arrUnits[2]=u;
}
function grade3() {
    g=document.getElementById("g3").value;
    arrCredits[2]=(g*arrUnits[2]);
}
function unit4() {
    u=document.getElementById("u4").value;
    arrUnits[3]=u;
}
function grade4() {
    g=document.getElementById("g4").value;
    arrCredits[3]=(g*arrUnits[3]);
}
function unit5() {
    u=document.getElementById("u5").value;
    arrUnits[4]=u;
}
function grade5() {
    g=document.getElementById("g5").value;
    arrCredits[4]=(g*arrUnits[4]);
}
function unit6() {
    u=document.getElementById("u6").value;
    arrUnits[5]=u;
}
function grade6() {
    g=document.getElementById("g6").value;
    arrCredits[5]=(g*arrUnits[5]);
}
function unit7() {
    u=document.getElementById("u7").value;
    arrUnits[6]=u;
    if(u==2) {
        document.getElementById("bioLabName").style.display="table-row";
        document.getElementById("bioLabUnits").style.display="table-row";
        document.getElementById("bioLabGrade").style.display="table-row";
    }
}
function grade7() {
    g=document.getElementById("g7").value;
    arrCredits[6]=(g*arrUnits[6]);
}
function unit8() {
    u=document.getElementById("u8").value;
    arrUnits[7]=u;
}
function grade8() {
    g=document.getElementById("g8").value;
    arrCredits[7]=(g*arrUnits[7]);
}
function unit9() {
    u=document.getElementById("u9").value;
    arrUnits[8]=u;
}
function grade9() {
    g=document.getElementById("g9").value;
    arrCredits[8]=(g*arrUnits[8]);
}

// Calculates and shows the CGPA and provides button for next calculation
function buttonPressed() {
    for(var i=0;i<=8;i++){
        if(isNaN(arrCredits[i])) {
            creditsThisSem += 0;
        }
        else {
            creditsThisSem += arrCredits[i];
        }
        //}
        if(isNaN(arrUnits[i])) {
            unitsThisSem += 0;
        }
        else {
            unitsThisSem += parseInt(arrUnits[i]);
        }
    }
    message=`<div id="calculation"><span id="messageName">${firstName+" "+lastName}</span>, of <span id="messageBranch">${branch}</span>, has scored
    <span id="messageCredits">${creditsThisSem} TOTAL CREDITS</span> in <span id="messageUnits">${unitsThisSem} UNITS</span>.<br>
    <span id="messageCGPA">Cumulative Grade Point Average(CGPA) = ${creditsThisSem/unitsThisSem}<span></div>`;
    document.getElementById("result").innerHTML=message;
    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.visibility="visible";
}