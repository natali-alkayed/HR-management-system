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
 function EmployessTable(informations) 
 {
   for(let i=0;i<informations.length;i++)
   {
      if (informations[i].Department == '1' || informations[i].Department == 'Administration')
      { numberAdministration+=1;
        totalAdministration+=informations[i].salary; 
        depName="Administration";
        
      }

      else if (informations[i].Department == '2' || informations[i].Department == 'Marketing')
      {
       numberMarketing=+1;
       totalMarketing+=informations[i].salary;
       depName="Marketing";
      }
        
   
      else if (informations[i].Department == '3' || informations[i].Department == 'Development')
      {
       numberDevelopment+=1;
       totalDev+=informations[i].salary;
       depName="Development";
      }
      
   
      else if (informations[i].Department == '4' || informations[i].Department == 'Finance')
      { 
        numberFinance+=1;
        totalFinance+=informations[i].salary;
        depName="Finance";
      }    
      renderTable(depName);

      
   }
  
  

}

///////////////////////////////////////////////////////////////////////////////////////////////

EmployessTable(retrievedData);

///////////////////////////////////////////////////////////////////////////////////////////////

function renderTable (depName)
{ 
  
  if(depName=="Administration")
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
  }

  else if(depName=="Marketing")
  {
    let tableEl = document.getElementById('Marketing');
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let numberEl = document.createElement('td');
    numberEl.textContent =`Number of employess = ${numberMarketing}`;
    trEl.appendChild(numberEl);
  
    
    let salaryEl = document.createElement('td');
    salaryEl.textContent =`Total salary = ${totalMarketing}`;
    trEl.appendChild(salaryEl);
  
    let avgEl = document.createElement('td');
    avgEl.textContent =`Average salary = ${totalMarketing/numberMarketing}`;
    trEl.appendChild(avgEl);
  }

  else if(depName=="Development")
  {
    let tableEl = document.getElementById('Development');
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let numberEl = document.createElement('td');
    numberEl.textContent =`Number of employess = ${numberDevelopment}`;
    trEl.appendChild(numberEl);
  
    
    let salaryEl = document.createElement('td');
    salaryEl.textContent =`Total salary = ${totalDev}`;
    trEl.appendChild(salaryEl);
  
    let avgEl = document.createElement('td');
    avgEl.textContent =`Average salary = ${totalDev/numberDevelopment}`;
    trEl.appendChild(avgEl);
  }

  else if(depName=="Finance")
  {
    let tableEl = document.getElementById('Finance');
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let numberEl = document.createElement('td');
    numberEl.textContent =`Number of employess = ${numberFinance}`;
    trEl.appendChild(numberEl);
  
    
    let salaryEl = document.createElement('td');
    salaryEl.textContent =`Total salary = ${totalFinance}`;
    trEl.appendChild(salaryEl);
  
    let avgEl = document.createElement('td');
    avgEl.textContent =`Average salary = ${totalFinance/numberFinance}`;
    trEl.appendChild(avgEl);
  }
  
  
    let tableEl = document.getElementById('Summation');
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let numberEl = document.createElement('td');
    numberEl.textContent =`Number of employess in all departments = ${numberDevelopment+numberAdministration+numberMarketing+numberFinance}`;
    trEl.appendChild(numberEl);
  
    
    let salaryEl = document.createElement('td');
    salaryEl.textContent =`Total salary = ${totalDev+totalAdministration+totalFinance+totalMarketing}`;
    trEl.appendChild(salaryEl);
  
    let avgEl = document.createElement('td');
    avgEl.textContent =`Average salary = ${(totalDev+totalAdministration+totalFinance+totalMarketing)/(numberDevelopment+numberAdministration+numberMarketing+numberFinance)}`;
    trEl.appendChild(avgEl);
  

}
////////////////////////////////////////////////////////////////////////////////////////////////////////

