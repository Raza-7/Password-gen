

function showHide(){
    let forms= document.getElementById('form');
let btn= document.getElementById('btn');
    if(forms.style.display != 'none'){forms.style.display ='none';}
  else{forms.style.display='block';}

}

let s1= document.querySelector('.sector1');
let s2= document.querySelector('.sector2');
let s3= document.querySelector('.sector3');

s1.addEventListener('click',e =>{

  console.log("sector1")
},
{capture:true})

s2.addEventListener('click',e =>{
  console.log("sector2")
})
 
s3.addEventListener('click',e =>{
  console.log("sector3")
})

document.addEventListener('click',e =>{
  console.log('document1 ')
  document.write("document 1S")
})
