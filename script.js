/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  function marksgreterthan50map(index) {
    if(index.marks > 50)
    {
      return index.name;
    }
  }
  
console.log(arr.map(marksgreterthan50map));
}


function PrintStudentsbyForEach() {
  function marksgreterthan50foreach(i)
  {
    if(i.marks > 50)
    {
      console.log(i.name);
    }
  }
  arr.forEach(marksgreterthan50foreach);
}


function addData() {
  let data= {
    id:4,
    name:"susan",
    age:"20",
    marks:45
  }
  arr.push(data);
  console.log(arr);
}

function removeFailedStudent() {
  function failstudent(i) {
    if(i.marks < 50)
    {
      arr.splice(i,1);
    }
  }
  arr.forEach(failstudent);
  console.log(arr);
}

function concatenateArray() {
  let student1= { id: 'a', name: "Riya", age: "9", marks: 70 };
  let student2= { id: 'b', name: "Diya", age: "8", marks: 67 };
  let student3= { id: 'c', name: "Siya", age: "10", marks: 30 };

  let array=[student1,student2,student3];
  console.log(array);
}
