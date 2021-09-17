'use strict';

// global scope
let global_name = 'Global';

{
    // local scope
    let cat_name = 'Meo';
    
    console.log(cat_name);
    console.log(global_name);
}

console.log(cat_name);
console.log(global_name);
