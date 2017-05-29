//var notify = require('./notification');
//import {notify} from './notification';
//import notify from './notification';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
});

import notification from './notification';

console.log(notification);

// Example-1 (Arrow Function)
const names = ['wes', 'kait', 'lux'];
const fullNames = names.map(function(name) {
   return `${name} bose`;
});

const fullNames2 = names.map((name) => {
    return `${name} bose`;
});

const fullNames3 = names.map(name => {
    return `${name} bose`;
});

const fullNames4 = names.map(name => `${name} bose`);

const fullNames5 = names.map(() => `cool bose`);

//const sayMyName = (name) => { alert(`Hello ${name}!`) }

//sayMyName('Wes');

console.log(fullNames5);

const race = '1000m Dash';
const winners = ['Naruto', 'Luffy', 'Sasuke'];

const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));
console.log(win);

const ages = [45, 74, 14, 78, 95, 47, 65];

const old = ages.filter(age => age >= 60);
console.log(old);


// class Form {
//     constructor() {
//         alert('Hi how are you, Alright !');
//     }
// }

//new Form();
