// function return number of days in a month and year
// Language: javascript
// Path: javascript\clash\index.js
const m = parseInt(readline());
const y = parseInt(readline());
if(m < 1 || m > 12 || 1600 > y || y > 2500){
    console.log('invalid input');
}else{
    console.log( new Date(y, m, 0).getDate());
}