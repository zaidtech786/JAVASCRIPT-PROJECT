console.log("hello ");
let data=[
    {
        image:"img/img1.jpg",
        heading:"heading1",
        category:"head1",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
    },
    {
        image:"img/img2.jpg",
        heading:"heading2",
        category:"head2",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
    },
    {
        image:"img/img3.jpg",
        heading:"heading3",
        category:"head2",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius incidunt voluptatibus sequi distinctio doloremque quos nisi, soluta amet architecto eos perspiciatis nesciunt pariatur reprehenderit!",
    },
];


let btns=document.querySelectorAll('.btn');
let img =document.querySelector('.img');
let para=document.querySelector('.para');
let heading=document.querySelector('.heading');
let nextBtn=document.querySelector('.next')
let prevBtn=document.querySelector('.prev');
let container=document.querySelector('.container');

let displayData= (displayItems) => {
    let data=displayItems.map( (item) => {
      return `
      <div class="box">
      <img src="${item.image}" class="img" alt=""> 
      <div class="content">
          <h2 class="heading">${item.heading}</h2>
          <p class="para">${item.para}</p>
      </div> 
 </div>  
      `
    })
    container.innerHTML=data
}
displayData(data)

btns.forEach( (btn) => {
    btn.addEventListener('click',(e) => {
     let category=e.currentTarget.dataset.id;
      
     let filterBtn=data.filter( (filterItem) => {
        
     })
    })

})































// let displayItems = (itemsData) => {
//     let displayData=itemsData.map(function(item){
//         return `
//         <div class="box">
//             <img src="${item.image}" class="img" alt=""> 
//             <div class="content">
//                 <h2 class="heading"> ${item.heading}</h2>
//                 <p class="para">${item.para}</p>
//             </div> 
//        </div>          `
//     });
//     displayData=displayData.join(' ');
//     container.innerHTML=displayData;
// } 

// btns.forEach(function(btn){
//   btn.addEventListener('click',function(e){
//       let category=e.currentTarget.dataset.id;
//     //   console.log(category);
//       let filter=data.filter(function(filterBtn){
//           if (filterBtn.category===category) {
//               return filterBtn;
//           }
//           console.log(filterBtn);
//       });
//       if (category==="All") {
//         displayItems(data);
//       }
//       else{
//         displayItems(filter);
//       }
//   });
// })


// window.addEventListener("DOMContentLoaded",function(){
//     displayItems(data);
// })

