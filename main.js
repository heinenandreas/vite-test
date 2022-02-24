import "./style.css";

import Chance from "chance";

const avatar = chance.avatar();
const name = chance.first();
const secondName = chance.first();
const lastName = chance.last();
const mail = chance.email();
const phone = chance.phone();
const job = chance.profession();
const birthyear = chance.year({ min: 1980, max: 1990 });
const city = chance.city();
const animal = chance.animal();
const number = chance.integer();

document.querySelector("#app").innerHTML = `
<img class="logo" src= ${avatar}></a>
  <h2>${name} ${secondName} ${lastName}</h2>
 <p class="mail">${mail}</p>
 <p class="mail">${phone}</p>

 <div class="text"> 
 <p>Hey, my name is ${name} and I am a ${job}. 
 I was born in the year of ${birthyear}
 in the city of ${city}. My favorite animal ist the ${animal}.
 But I also love numbers! My favorite one is ${number}. </p>
 </div>
`;
