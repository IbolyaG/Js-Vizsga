
 function submitData() {

var namedata = document.getElementById("nameee").value;



var dataArray=[];
var k ={nameee:namedata};

dataArray.push(k);

console.log(dataArray);

document.getElementById("receiveDataField").innerHTML= k.nameee;

check();

 }

function check() {

    var name01= document.getElementById("nameee").value

 if( name01 == "Ibolya"){
    document.getElementById("AnswerField").innerHTML="You have been registered";
    
 }
 else {document.getElementById("AnswerField").innerHTML=" Please register ! if you need help contact our chatbot: Santa";

}
}



//3 resz
/*Callback hivasra
Json 
Api fetch

Tomb =[1,2,3], ['alma', "banán", "körte"],
 {segítő:"Janos", kor: 31}, “NEVED"]
*/


