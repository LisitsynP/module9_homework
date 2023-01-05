const xlmString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
// Не уверен в правильности выполнения данного задания
// Вариант 1
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xlmString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");
const students = studentNode.forEach(function (value) {
  let nameNode = value.querySelector("name");
  let FirstNameNode = nameNode.querySelector("first");
  let SecondNameNode = nameNode.querySelector("second");
  let ageNode = value.querySelector("age");
  let profNode = value.querySelector("prof");
  let nameAttr = nameNode.getAttribute("lang");
  let student = {
    lang: nameAttr,
    name: {
      FirstName: FirstNameNode.textContent,
      SecondName: SecondNameNode.textContent,
    },
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
  };
  return console.log(student);
});

// Вариант 2
// const parser = new DOMParser();
// const xmlDOM = parser.parseFromString(xlmString, "text/xml");
// const listNode = xmlDOM.querySelector("list");
// const studentNode = listNode.querySelectorAll("student");
// const firstStudentNode = studentNode.item(0);
// const secondStudentNode = studentNode.item(1);
// let list = [];
// function students(value) {
//   let nameNode = value.querySelector("name");
//   let FirstNameNode = nameNode.querySelector("first");
//   let SecondNameNode = nameNode.querySelector("second");
//   let ageNode = value.querySelector("age");
//   let profNode = value.querySelector("prof");
//   let nameAttr = nameNode.getAttribute("lang");
//   let s = {
//     lang: nameAttr,
//     name: {
//       FirstName: FirstNameNode.textContent,
//       SecondName: SecondNameNode.textContent,
//     },
//     age: Number(ageNode.textContent),
//     prof: profNode.textContent,
//   };
//   return list.push(s);
// }
// students(firstStudentNode);
// students(secondStudentNode);
// console.log(list);
