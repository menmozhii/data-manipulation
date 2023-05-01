var div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="130px";

var inputdate=document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.id="dob";
inputdate.style.width="30%";

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="displaydata";
button.style.margin="10px";

var outputdiv=document.createElement("div");
outputdiv.style.fontSize="20px";

button.addEventListener("click",displayans);
div.append(inputdate,button,outputdiv);
document.body.append(div);


    function displayans(){
      var input=document.getElementById("dob").value;
      console.log(typeof(input));   
      
      var birthdate=new Date(input);
      console.log(birthdate);

  var currentdate=new Date();
  console.log(currentdate);

  var milliseconddiff=parseInt(currentdate.getTime())-parseInt(birthdate.getTime());
 console.log(`Milliseconds: ${milliseconddiff}`);

  var secondsdiff=Math.floor(milliseconddiff/1000);
  console.log(`Seconds Diff:${secondsdiff}`);

  var minutediff=Math.floor(secondsdiff/60);
  console.log(`Minutes Diff:${minutediff}`);

  var hoursdiff=Math.floor(minutediff/60);
  console.log(`Hours Diff:${hoursdiff}`);

  var daydiff=Math.floor(hoursdiff/24);
  console.log(`Day Diff:${daydiff}`);

  var yeardiff=currentdate.getFullYear()-birthdate.getFullYear();
  console.log(`Year diff:${yeardiff}`);

  var monthdiff=yeardiff*12+((currentdate.getMonth()+1)-(birthdate.getMonth()+1));
  console.log(`Month Diff:${monthdiff}`);
  
  outputdiv.innerHTML=` 
  Given date is ${birthdate} <br>
  year is ${yeardiff}<br>
  Month is  ${monthdiff}<br>
  day is ${daydiff}<br>
  hour is ${hoursdiff}<br>
  minute is ${minutediff}<br>
  seconds is ${secondsdiff}<br>
  milliseconds is ${milliseconddiff}<br>
  `;


  

}
    