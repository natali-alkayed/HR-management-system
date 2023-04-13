'use strict';
let myForm =document.getElementById("employeesForm");
let infoSection = document.getElementById('cardSection');
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
//informations[i].renderTable();
saveData(informations);
}
///////////////////////////////////////////////////////////////////////////////////////
let EmployeeID=1000;
EmployeeInfo.prototype.randomID=function()
{
 this.EmployeeID = EmployeeID++;
}
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
   const imgEl = document.createElement('img');
   imgEl.src = this.ImageURL;
   infoSection.appendChild(imgEl);

   const NameEl = document.createElement('p');
   NameEl.textContent = `Name: ${this.FullName} `
   infoSection.appendChild(NameEl);

   const IDEl = document.createElement('p');
   IDEl.textContent = `ID: ${this.EmployeeID} `;
   infoSection.appendChild(IDEl);

   const departmentEl = document.createElement('p');
   if (this.Department == '1' || this.Department == 'Administration') {
      departmentEl.textContent = `Department: Administration`;
      infoSection.appendChild(departmentEl);}

   else if (this.Department == '2' || this.Department == 'Marketing') {
      departmentEl.textContent = `Department: Marketing`;
      infoSection.appendChild(departmentEl);}

   else if (this.Department == '3' || this.Department == 'Development') {
      departmentEl.textContent = `Department: Development`;
      infoSection.appendChild(departmentEl);}

   else if (this.Department == '4' || this.Department == 'Finance') {
      departmentEl.textContent = `Department: Finance`;
      infoSection.appendChild(departmentEl);}
   

   const levelEl = document.createElement('p');
   if(this.Level == '1')
   {levelEl.textContent = `Level: Junior`;
   infoSection.appendChild(levelEl);}

   else if(this.Level == '2')
   {levelEl.textContent = `Level: Mid-Senior`;
   infoSection.appendChild(levelEl);}

   else if(this.Level == '3')
   {levelEl.textContent = `Level: Senior`;
   infoSection.appendChild(levelEl);}

   const salaryEl = document.createElement('p');
   salaryEl.textContent = `Salary: ${this.salary} `
   infoSection.appendChild(salaryEl);
}

//////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < informations.length; i++) {
    informations[i].randomID();
    informations[i].Salary(level);
    informations[i].render();
}
console.log(informations);
///////////////////////////////////////////////////////////////////////////////////////////////
function saveData(data) {
   let stringifyData = JSON.stringify(data);
   localStorage.setItem("Employee", stringifyData);
}
///////////////////////////////////////////////////////////////////////////////////////////////
function getData() {
   let retrievedData = localStorage.getItem("Employee");
   let arrayData = JSON.parse(retrievedData);
   console.log(arrayData);
   if (arrayData != null) {

       for (let i = 0; i < arrayData.length; i++) {
           new EmployeeInfo(arrayData[i].FullName, arrayData[i].Department, arrayData[i].Level, arrayData[i].ImageURL);
           informations[i].randomID();
           informations[i].Salary(informations[i].level);
           //informations[i].render();
          //informations[i].renderTable();
          
       }
   }
   console.log(informations);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
/*let employee1=new EmployeeInfo(1000,"Ghazi Samer","Administration","Senior");
let employee2=new EmployeeInfo(1001,"Lana Ali","Finance","Senior");
employee2.Salary(employee2.Level);

let employee3=new EmployeeInfo(1002,"Tamara Ayoub","Marketing","Senior");
employee3.Salary(employee3.Level);

let employee4=new EmployeeInfo(1003,"Safi Walid","Administration","Mid-Senior");
employee4.Salary(employee4.Level);

let employee5=new EmployeeInfo(1004,"Omar Zaid","Development","Senior");
employee5.Salary(employee5.Level);

let employee6=new EmployeeInfo(1005,"Rana Saleh","Development","Junior");
employee6.Salary(employee6.Level);

let employee7=new EmployeeInfo(1006,"Hadi Ahmad","Finance","Mide-Senior");
employee7.Salary(employee7.Level);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////


