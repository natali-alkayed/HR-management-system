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
}
///////////////////////////////////////////////////////////////////////////////////////
let EmployeeID=1000;
EmployeeInfo.prototype.randomID=function()
{
 this.EmployeeID = EmployeeID++;
}
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
   if (this.Department == '1') {
      departmentEl.textContent = `Department: Administration`;
      infoSection.appendChild(departmentEl);}

   else if (this.Department == '2') {
      departmentEl.textContent = `Department: Marketing`;
      infoSection.appendChild(departmentEl);}

   else if (this.Department == '3') {
      departmentEl.textContent = `Department: Development`;
      infoSection.appendChild(departmentEl);}

   else if (this.Department == '4') {
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

 if(Level==1)
 {  let min=1500;
    let max=2000;
    let randomSalary=Math.floor(Math.random() * (max - min + 1) + min);
    this.salary=randomSalary-randomSalary*tax;
 }

 else if(Level==2)
 {
    let min=1000;
    let max=1500;
    let randomSalary=Math.floor(Math.random() * (max - min + 1) + min);
    this.salary=randomSalary-randomSalary*tax;
 }

 else if(Level==3)
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

