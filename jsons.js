"use strict";
let job = {
    title : "Web Designer",
    startDate : "October 2022",
    company : "AT&T",
    minSalary : 52000,
    maxSalary : 86000 
    };

// let str = JSON.parse(job);
// console.log(str.title);

// let filter = ["company", "maxSalary"];
// let str = JSON.stringify(job);
// console.log(str);


let job2 = `{"title":"Web Designer","startDate":"October 2022","company":"AT&T","minSalary":52000,"maxSalary":86000}`;
let str = JSON.parse(job2);
console.log(str);
//using jsonplaceholder:
fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => console.log(json))