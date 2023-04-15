'use strict';
let myForm =document.getElementById("employeesForm");
/////////////////////////////////////////////////////////////////////////////////////
let informations = [];
function EmployeeInfo (FullName,Department,Level,ImageURL)
{
    this.EmployeeID=0;
    this.salary=0;
    this.FullName=FullName;
    this.Department=Department;
    this.Level=Level;
    this.ImageURL=ImageURL;
    informations.push(this);
}

///////////////////////////////////////////////////////////////////////////////////////
myForm.addEventListener('submit',handleSubmit);
function handleSubmit(event)
{
 event.preventDefault();
 let fullName= event.target.fullName.value;
 let department= event.target.department.value;
 let level= event.target.level.value;
 let image= event.target.image.value;

let newEmployee=new EmployeeInfo(fullName,department,level,image);
newEmployee.randomID();
newEmployee.Salary(level);
newEmployee.render();
saveData(informations);
}
///////////////////////////////////////////////////////////////////////////////////////
let EmployeeID=1000;
EmployeeInfo.prototype.randomID=function()
{
 this.EmployeeID = EmployeeID++;
}
////////////////////////////////////////////////////////////////////////////////////////
EmployeeInfo.prototype.Salary=function(Level)
{let tax =0.075;

 if(Level==1 || Level=="Junior")
 {  let min=1500;
    let max=2000;
    let randomSalary=Math.floor(Math.random() * (max - min + 1) + min);
    this.salary=randomSalary-randomSalary*tax;
 }

 else if(Level==2 || Level=="Mid-Senior")
 {
    let min=1000;
    let max=1500;
    let randomSalary=Math.floor(Math.random() * (max - min + 1) + min);
    this.salary=randomSalary-randomSalary*tax;
 }

 else if(Level==3  || Level=="Senior")
 {
    let min=500;
    let max=1000;
    let randomSalary=Math.floor(Math.random() * (max - min + 1) + min);
    this.salary=randomSalary-randomSalary*tax;
 }

}
getData();

///////////////////////////////////////////////////////////////////////////////////////
EmployeeInfo.prototype.render=function()
{   
   let cardEl = document.getElementById('Administration');
   let trEl = document.createElement('div');
   cardEl.appendChild(trEl);

   let imgEl = document.createElement('img');
   imgEl.src = this.ImageURL;
   trEl.appendChild(imgEl);

   let NameEl= document.createElement('p');
   NameEl.textContent =`Name: ${this.FullName}`
   trEl.appendChild(NameEl);

   let IDEl= document.createElement('p');
   IDEl.textContent =`ID: ${this.EmployeeID}`
   trEl.appendChild(IDEl);

   let DepEl= document.createElement('p');
   DepEl.textContent =`Department: ${this.Department}`
   trEl.appendChild(DepEl);

   let levEl= document.createElement('p');
   levEl.textContent =`Level: ${this.Level}`
   trEl.appendChild(levEl);

   let salEl= document.createElement('p');
   salEl.textContent =`Salary: ${this.salary}`
   trEl.appendChild(salEl);
}

///////////////////////////////////////////////////////////////////////////////////////////////
/*for (let i = 0; i < informations.length; i++) {
    informations[i].randomID();
    informations[i].Salary(level);
    informations[i].render();
}*/
///////////////////////////////////////////////////////////////////////////////////////////////
function saveData(data) {
   let stringifyData = JSON.stringify(data);
   localStorage.setItem("Employee", stringifyData);
}
///////////////////////////////////////////////////////////////////////////////////////////////
function getData() {
   let retrievedData = localStorage.getItem("Employee");
   let arrayData = JSON.parse(retrievedData);
 
   if (arrayData != null) {

       for (let i = 0; i < arrayData.length; i++) {
           new EmployeeInfo(arrayData[i].FullName, arrayData[i].Department, arrayData[i].Level, arrayData[i].ImageURL);
           informations[i].randomID();
           informations[i].Salary(informations[i].level);
    }
   } 
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
let employee1=new EmployeeInfo("Ghazi Samer","Administration","Senior","./assets/employee1.png");
employee1.Salary(employee1.Level);
employee1.randomID(employee1.Level);
employee1.render();


let employee2=new EmployeeInfo("Lana Ali","Finance","Senior","./assets/employee2.png");
employee2.Salary(employee2.Level);
employee2.randomID(employee2.Level);
employee2.render();

let employee3=new EmployeeInfo("Tamara Ayoub","Marketing","Senior","./assets/employee2.png");
employee3.Salary(employee3.Level);
employee3.randomID(employee3.Level);
employee3.render();

let employee4=new EmployeeInfo("Safi Walid","Administration","Mid-Senior","./assets/employee1.png");
employee4.Salary(employee4.Level);
employee4.randomID(employee4.Level);
employee4.render();

let employee5=new EmployeeInfo("Omar Zaid","Development","Senior","./assets/employee1.png");
employee5.Salary(employee5.Level);
employee5.randomID(employee5.Level);
employee5.render();

let employee6=new EmployeeInfo("Rana Saleh","Development","Junior","./assets/employee2.png");
employee6.Salary(employee6.Level);
employee6.randomID(employee6.Level);
employee6.render();

let employee7=new EmployeeInfo("Hadi Ahmad","Finance","Mid-Senior","./assets/employee1.png");
employee7.Salary(employee7.Level);
employee7.randomID(employee7.Level);
employee7.render();
/////////////////////////////////////////////////////////////////////////////////////////////////////

saveData(informations);
console.log(informations);

