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
///////////////////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < informations.length; i++) {
    informations[i].randomID();
    informations[i].Salary(level);
    informations[i].render();
}
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
/*let employee1=new EmployeeInfo("Ghazi Samer","Administration","Senior","./assets/employee1.png");
employee1.Salary(employee1.Level);
employee1.randomID(employee1.Level);
employee1.render(employee1.Level);


let employee2=new EmployeeInfo("Lana Ali","Finance","Senior","./assets/employee2.png");
employee2.Salary(employee2.Level);
employee2.randomID(employee2.Level);
employee2.render(employee2.Level);

let employee3=new EmployeeInfo("Tamara Ayoub","Marketing","Senior","./assets/employee2.png");
employee3.Salary(employee3.Level);
employee3.randomID(employee3.Level);
employee3.render(employee3.Level);

let employee4=new EmployeeInfo("Safi Walid","Administration","Mid-Senior","./assets/employee1.png");
employee4.Salary(employee4.Level);
employee4.randomID(employee4.Level);
employee4.render(employee4.Level);

let employee5=new EmployeeInfo("Omar Zaid","Development","Senior","./assets/employee1.png");
employee5.Salary(employee5.Level);
employee5.randomID(employee5.Level);
employee5.render(employee5.Level);

let employee6=new EmployeeInfo("Rana Saleh","Development","Junior","./assets/employee2.png");
employee6.Salary(employee6.Level);
employee6.randomID(employee6.Level);
employee6.render(employee6.Level);

let employee7=new EmployeeInfo("Hadi Ahmad","Finance","Mid-Senior","./assets/employee1.png");
employee7.Salary(employee7.Level);
employee7.randomID(employee7.Level);
employee7.render(employee7.Level);*/
/////////////////////////////////////////////////////////////////////////////////////////////////////


