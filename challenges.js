// user name start at least with two characters ;
// it should finish with a number ;
// lower or upper case ;

// let regex = /^[A-Za-z]{2,}\d*$/;




// remove the whitespace from beginning and the ending 

let string = `  hello World!!  `;
let reg =/^\s*|\s*$/g; 
let result = string.replace(reg , 'gg');
console.log(result);