//Feet and inch
var feet=document.getElementById('feet')
var inch=document.getElementById('inch')

feet.addEventListener('input',function(){
    let f=this.value;
    let i=f*12;
inch.value= i;
})
inch.addEventListener('input',function(){
    let i=this.value;
    let f=i/12;
feet.value= f;
})

//Miles and foot
var mile=document.getElementById('mile')
var foot=document.getElementById('foot')

mile.addEventListener('input',function(){
    let m=this.value;
    let o=m*5280;
foot.value= o;
})
foot.addEventListener('input',function(){
    let o=this.value;
    let m=o/5280;
mile.value= m;
})
//Yard and feet
var yard=document.getElementById('yard')
var feets=document.getElementById('feets')

yard.addEventListener('input',function(){
    let y=this.value;
    let s=y*3;
feets.value= s;
})
feets.addEventListener('input',function(){
    let s=this.value;
    let y=s/3;
yard.value= y;
})
//Yard and Inches
var yard1=document.getElementById('yard1')
var inch1=document.getElementById('inch1')

yard1.addEventListener('input',function(){
    let y1=this.value;
    let i1=y1*36;
inch1.value= i1;
})
inch1.addEventListener('input',function(){
    let i1=this.value;
    let y1=i1/36;
yard1.value= y1;
})