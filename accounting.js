'use strict';
let retrievedData=JSON.parse(localStorage.getItem('Employee'));
console.log(retrievedData);
//////////////////////////////////////////////////////////////////////////////////////////
let totalAdministration=0;
let numberAdministration=0;

let totalMarketing =0;
let numberMarketing=0;

let totalDev=0;
let numberDevelopment=0;

let totalFinance=0;
let numberFinance=0;

let nummberAll=0;
let totalSalary =0;
let avgSalary =0;

let depName="";
 function EmployessTable(retrievedData) 
 {
   for(let i=0;i<retrievedData.length;i++)
   {
      if (retrievedData[i].Department == '1' || retrievedData[i].Department == 'Administration')
      { numberAdministration+=1;
        totalAdministration+=retrievedData[i].salary; 
        depName="Administration";
        
      }

      else if (retrievedData[i].Department == '2' || retrievedData[i].Department == 'Marketing')
      {
       numberMarketing=+1;
       totalMarketing+=retrievedData[i].salary;
       depName="Marketing";
      }
        
   
      else if (retrievedData[i].Department == '3' || retrievedData[i].Department == 'Development')
      {
       numberDevelopment+=1;
       totalDev+=retrievedData[i].salary;
       depName="Development";
      }
      
   
      else if (retrievedData[i].Department == '4' || retrievedData[i].Department == 'Finance')
      { 
        numberFinance+=1;
        totalFinance+=retrievedData[i].salary;
        depName="Finance";
      }    
     // renderTable(depName);

      
   }
  
   renderTable(depName);
}

///////////////////////////////////////////////////////////////////////////////////////////////

EmployessTable(retrievedData);

///////////////////////////////////////////////////////////////////////////////////////////////

function renderTable (depName)
{ 
    let tableEl = document.getElementById('Administration');
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let numberEl = document.createElement('td');
    numberEl.textContent =`Number of employess = ${numberAdministration}`;
    trEl.appendChild(numberEl);
  
    let salaryEl = document.createElement('td');
    salaryEl.textContent =`Total salary = ${totalAdministration}`;
    trEl.appendChild(salaryEl);
  
    let avgEl = document.createElement('td');
    avgEl.textContent =`Average salary = ${totalAdministration/numberAdministration}`;
    trEl.appendChild(avgEl);
//
    let tableEl1 = document.getElementById('Marketing');
    let trEl1 = document.createElement('tr');
    tableEl1.appendChild(trEl1);

    let numberEl1 = document.createElement('td');
    numberEl1.textContent =`Number of employess = ${numberMarketing}`;
    trEl1.appendChild(numberEl1);
  
    let salaryEl1 = document.createElement('td');
    salaryEl1.textContent =`Total salary = ${totalMarketing}`;
    trEl1.appendChild(salaryEl1);
  
    let avgEl1 = document.createElement('td');
    avgEl1.textContent =`Average salary = ${totalMarketing/numberMarketing}`;
    trEl1.appendChild(avgEl1);
 //
    let tableEl2 = document.getElementById('Development');
    let trEl2 = document.createElement('tr');
    tableEl2.appendChild(trEl2);

    let numberEl2 = document.createElement('td');
    numberEl2.textContent =`Number of employess = ${numberDevelopment}`;
    trEl2.appendChild(numberEl2);
  
    
    let salaryEl2 = document.createElement('td');
    salaryEl2.textContent =`Total salary = ${totalDev}`;
    trEl2.appendChild(salaryEl2);
  
    let avgEl2 = document.createElement('td');
    avgEl2.textContent =`Average salary = ${totalDev/numberDevelopment}`;
    trEl2.appendChild(avgEl2);
//
    let tableEl3 = document.getElementById('Finance');
    let trEl3 = document.createElement('tr');
    tableEl3.appendChild(trEl3);

    let numberEl3 = document.createElement('td');
    numberEl3.textContent =`Number of employess = ${numberFinance}`;
    trEl3.appendChild(numberEl3);
    
    let salaryEl3 = document.createElement('td');
    salaryEl3.textContent =`Total salary = ${totalFinance}`;
    trEl3.appendChild(salaryEl3);
  
    let avgEl3 = document.createElement('td');
    avgEl3.textContent =`Average salary = ${totalFinance/numberFinance}`;
    trEl3.appendChild(avgEl3);
//
    let tableEl4 = document.getElementById('Summation');
    let trEl4 = document.createElement('tr');
    tableEl4.appendChild(trEl4);

    let numberEl4 = document.createElement('td');
    numberEl4.textContent =`Number of employess in all departments = ${numberDevelopment+numberAdministration+numberMarketing+numberFinance}`;
    trEl4.appendChild(numberEl4);
  
    let salaryEl4 = document.createElement('td');
    salaryEl4.textContent =`Total salary = ${totalDev+totalAdministration+totalFinance+totalMarketing}`;
    trEl4.appendChild(salaryEl4);
  
    let avgEl4 = document.createElement('td');
    avgEl4.textContent =`Average salary = ${(totalDev+totalAdministration+totalFinance+totalMarketing)/(numberDevelopment+numberAdministration+numberMarketing+numberFinance)}`;
    trEl4.appendChild(avgEl4);
  
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
