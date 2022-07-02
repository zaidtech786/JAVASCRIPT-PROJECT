let input = document.querySelector(".input");
let btn = document.querySelector(".submitBtn");
let card = document.querySelector(".boxContainer");
let date= document.querySelector("#date");
let warning=document.querySelector(".warning");
let title=document.querySelector(".title")
let today, d, m, y;
today = new Date();
d = today.getDate();
m = today.getMonth() + 1;
y = today.getFullYear();
today = `${d}-${m}-${y}`;



let center = [];
const getApi = async (pincode) => {
  let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${today}`;
  const res = await fetch(url);
  console.log(res)
  const data = await res.json();
  console.log(" data is ",data);
  // console.log("length of the session is",data.sessions.length)
  console.log(data.sessions[0].block_name)
   

  let displayData = data.sessions.map((e, i) => {
    let centerInfo = [
      e.name,
      e.fee,
      e.address,
      e.slots[0].time,
      e.date,
      e.min_age_limit,
      e.vaccine,
      e.available_capacity_dose1,
      e.available_capacity_dose2,
    ];
    center.push(centerInfo);
    let code = `
     
 
    <div class="boxx">

     <div class="content">
       <h4 class="HosName">${center[i][0]} </h4>

       <div class="price">
         <p class="rs"> ₹ ${center[i][1]}</p><br>
       </div>
     </div>

     <p class="hosAdd ">${center[i][2]}</p>

     <div class="dateTime">
       <div class="time">
         <span class="timme">${center[i][3]} </span> 
       </div>

     
       <div>
         <span class="on">  ━ON━ </span>
        <span class="date">${center[i][4]}</span> 
       </div>

     </div>

     <div class="vaccineInfo">
       <div class="age">
         <strong>Age</strong>
         <p>${center[i][5]}</p>
       </div>

       <div class="vaccine">
         <strong>Vaccine</strong>
         <p>${center[i][6]}</p>
       </div>

       <div class="dose1">
         <strong>Dose1</strong>
         <p>${center[i][7]}</p>
       </div>

       <div class="dose2">
         <strong>Dose2</strong>
         <p>${center[i][8]}</p>
       </div>

     </div>

     </div>
`;
  card.innerHTML += code;
  title.innerHTML=`hey 👋 <br> Found ${data.sessions.length} places in ${data.sessions[0].block_name}`
  });
  


};

getApi()


btn.addEventListener("click", () => {
  let pincode = input.value;
  card.innerHTML = "";
  if (pincode === "" && date==="" ) {
    warning.style.color="red";
    warning.innerHTML="Please Enter a pincode and date";
  } else if (pincode !== "") {
    getApi(pincode);
  }

  
});
