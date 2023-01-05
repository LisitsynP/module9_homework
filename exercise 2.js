const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

const parse = JSON.parse(jsonString);
const list = parse.list;
let listArray = [];
let addPeople = list.forEach((value) => {
  let name = value.name;
  let age = Number(value.age);
  let prof = value.prof;
  let people = {
    name: name,
    age: age,
    prof: prof,
  };
  listArray.push(people);
});
const res = { list: listArray };
console.log(res);
