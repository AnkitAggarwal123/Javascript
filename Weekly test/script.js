const postive = document.querySelector(".positive");

let numb = 0;
let totalnumb = 0;

const total_cal = document.querySelector(".total_cal");
total_cal.append(0);

const number = document.querySelector(".num");
number.append(0);

const cal = document.querySelector(".cal");
cal.append(0);

postive.addEventListener("click", () =>{

    if(numb < 100){
        numb++;
        totalnumb += 100;
        number.innerHTML= "";
        number.append(numb);
        cal.innerHTML = "";
        cal.append(numb);
        total_cal.innerHTML = "";
        total_cal.append(totalnumb);
        console.log(numb);
    }

 })
 const neg = document.querySelector(".neg");
 neg.addEventListener("click", () =>{

    if(numb > 0){
        numb--;
        totalnumb -= 100;
        number.innerHTML= "";
        number.append(numb);
        cal.innerHTML = "";
        cal.append(numb);
        total_cal.innerHTML = "";
        total_cal.append(totalnumb);
        console.log(numb);
    }

 })

 const postive1 = document.querySelector(".positive1");

let numb1 = 0;

const number1 = document.querySelector(".num1");
number1.append(0);

const cal1 = document.querySelector(".cal1");
cal1.append(0);

postive1.addEventListener("click", () =>{

    if(numb1 < 200){
        numb1++;
        totalnumb += 200;
        number1.innerHTML= "";
        number1.append(numb1);
        cal1.innerHTML = "";
        cal1.append(numb1);
        total_cal.innerHTML = "";
        total_cal.append(totalnumb);
        console.log(numb1);
    }

 })
 const neg1 = document.querySelector(".neg1");
 neg1.addEventListener("click", () =>{

    if(numb1 > 0){
        numb1--;
        totalnumb -= 200;
        number1.innerHTML= "";
        number1.append(numb1);
        cal1.innerHTML = "";
        cal1.append(numb1);
        total_cal.innerHTML = "";
        total_cal.append(totalnumb);
        console.log(numb1);
    }

 })


 const postive2 = document.querySelector(".positive2");

 let numb2 = 0;
 
 const number2 = document.querySelector(".num2");
 number2.append(0);

 const cal2 = document.querySelector(".cal2");
cal2.append(0);

 
 postive2.addEventListener("click", () =>{
 
     if(numb2 < 300){
         numb2++;
         totalnumb += 300;
         number2.innerHTML= "";
         number2.append(numb2);
         cal2.innerHTML = "";
         cal2.append(numb2);
         total_cal.innerHTML = "";
         total_cal.append(totalnumb);
         console.log(numb2);
     }
 
  })
  const neg2 = document.querySelector(".neg2");
  neg2.addEventListener("click", () =>{
 
     if(numb2 > 0){
         numb2--;
         totalnumb -= 300;
         number2.innerHTML= "";
         number2.append(numb2);
         cal2.innerHTML = "";
         cal2.append(numb2);
         total_cal.innerHTML = "";
         total_cal.append(totalnumb);
         console.log(numb2);
     }
 
  })


