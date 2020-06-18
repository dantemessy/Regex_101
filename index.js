'use strict';

let sample = 'lets start learning regex, start with {{dante}} basics{{dante}}';
let reg ;

// ==> at the end of the regex <== //
// using g means find all, the default is find first one;
// using i means ignore letter case, default is false;

// reg = /start/ig ;

// using . means ANY end with or start with;
// reg = /.rt/g; // ['art', 'art'];

// using [] for multiple possibilities  
// reg = /[xs]/g 

// using [0-9] or [a-z] to set range of numbers or characters or both [a-f0-2];

// using ^ to to ignore or don't match ex [^0-9abc];
// also ^  as start with ex /^hi/ check the string if start with or not;

// using $ to match the end of string , ex /by$/ match if it end with it;

// using + if match once or more ex [s+] in 'mississippi s' return ['ss','ss','s'];

// using * for match zero or more times ex [go*] in 'gulf gool' return ['g','goo's];


// using ? to set lazy search, the default is greedy;
// sample = 'titanic';
// reg = /t[a-z]*?i/; //==> ['ti']
// sample = '<aad> <da>';
// reg = /<.*?>/ // ==> ['aad' , 'da'] 

// using \w to mach A-Z & a-z & 0-9 & _(underscore);
// using \W to mach anything else;

// using \d to match digits 0-9 ;
// using \D to match anything except numbers 0-9 ;

//using curly braces {number of time the previous match can match o_0 } or {min , max}

// using \s to match whitespace which include the \t, \n, \r, and space characters.
// using \S to match non-whitespace ;
sample = '  dan dan ';
reg = /  */g
let result = sample.match(reg);
console.log(result);