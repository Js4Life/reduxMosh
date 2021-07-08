import { bugAdded, bugResolved } from "./actions";
import * as Actions from "./actionTypes";
import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

// only GET
console.log("store", store.getState());

// store.dispatch({
//   type : Actions.BUG_ADDED,
//   payload : {
//     description:'Bug1'
//   }
// })

store.dispatch(bugAdded("Bug 1"));

// store.dispatch({
//   type: Actions.BUG_RESOLVED,
//   payload : {
//       id : 1
//   }
// })

store.dispatch(bugResolved(1));

console.log("resolved store", store.getState());

// unsubscribe();

console.log("store1", store.getState());
store.dispatch({
  type: Actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log("store2", store.getState());

// // import { compose, pipe } from "lodash/fp";

// var compose = require("lodash/fp");
// var pipe = require("lodash/fp");
// console.log("Hello World!");

// // import {Map} from 'immutable'

// var Map = require('immutable')

// var produce = require('immer')

// function sayHello() {
//   return "Hello world!!";
// }

// let fn = sayHello;

// fn();
// sayHello();
// // pass function as arg
// function greet(fnMessage) {
//   console.log("greet", fnMessage());
// }

// greet(sayHello);

// function sayHello1() {
//   return function () {
//     return "hello world1";
//   };
// }

// let fn2 = sayHello1();
// let message = fn2();

// console.log("message", message);

// // func as args -- High order func
// let numbers = [1, 2, 3];

// numbers.map((num) => num * 2);

// setTimeout(() => {
//   console.log("hello after 3s");
// }, 1000);

// let input = " JavaScript   ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = (str) => str.trim();
// const wrapDiv = (str) => `<div>${str}</div>`;
// const wrapSpan = (str) => `<span>${str}</span>`;
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// // console.log('1st',wrapDiv(toLowerCase(trim(input))))

// // const transform1 = compose(wrapDiv,toLowerCase,trim)
// // console.log('2nd',transform1(input))
// // transform(input)

// const transform2 = pipe(trim, toLowerCase, wrap("div"));
// // console.log(transform2(input))
// // transform(input)

// // trim wrapInDiv

// // pure fnc no random val,no current date/time/no global state(dom,files,db)

// const person = {
//   name: "John",
//   address: {
//     country: "USA",
//     city: "San franciso",
//   },
// };

// // shallow copy
// const updatedObj = Object.assign({}, person, { name: "Bob", age: 30 });
// const updated = { ...person, name: "Kushal" };
// updated.address.city = "New york";
// //console.log(updatedObj)
// console.log(person); // New york on parent also !

// const person1 = {
//   name: "John",
//   address: {
//     country: "USA",
//     city: "San franciso",
//   },
// };
// // deep copy
// const updated1 = {
//   ...person1,
//   address: {
//     ...person1.address,
//     city: "new york",
//   },
//   name: "Bob",
// };

// console.log("updated1", person);
// console.log('deep copy',updated1)

// const nums = [1,2,3]

// // adding
// // const added = [...nums,4]
// // console.log(added)

// const index = nums.indexOf(2)
// const added = [...nums.slice(0,index),4,...nums.slice(index)]
// console.log('added',added)

// const removed = nums.filter(n=> n!== 2)
// console.log('remove',removed)

// const updatNum = nums.map(n=> n === 2 ? 20 : n)
// console.log(updatNum)

// // let book = Map.Map({title:'Ramayana'})
// let book ={title:'Ramayana'}
// function publish(book) {
//  // return book.set('isPublished',true)
//  return produce.produce(book,draftBook => {
//    draftBook.isPublished = true
//  });
// }

//  // publish(book)
// updatedbook = publish(book)

// console.log(book)
// console.log(updatedbook)
