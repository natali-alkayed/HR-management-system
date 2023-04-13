'use strict';
getData();
let tableEl = document.getElementById('departmentTable');
//////////////////////////////////////////////////////////////////////////////////////////
let totalAdministration=0;
let salaryAdministration=0;
let avgAdmin=0;


let totalMarketing =0;
let salaryMarketing=0;
let avgMaket=0;


let totalDev=0;
let salaryDevelopment=0;
let avgDev=0;



let totalFinance=0;
let salarFinance=0;
let avgFin=0;

let nummberAll=0;
let totalSalary =0;
let avgSalary =0;


 function numberofEmployess(informations) 
 {
   for(let i=0;i<informations.length;i++)
   {
      if (informations[i].Department == '1' || informations[i].Department == 'Administration')
      { salaryAdministration+=1;
        totalAdministration+=informations[i].salary;
        
        
    }

      else if (informations[i].Department == '2' || informations[i].Department == 'Marketing')
      {
       salaryMarketing=+1;
       totalMarketing+=informations[i].salary;
       
       }
        
   
      else if (informations[i].Department == '3' || informations[i].Department == 'Development')
      {
       salaryMarketing+=1;
       totalDev+=informations[i].salary;
      
       }
      
   
      else if (informations[i].Department == '4' || informations[i].Department == 'Finance')
      { 
        salarFinance+=1;
        totalFinance+=informations[i].salary;
        
        }
         
   }
   avgAdmin=totalAdministration/salaryAdministration;
   avgMaket=totalMarketing/salaryMarketing;
   avgDev=totalDev/salaryDevelopment;
   avgFin=totalFinance/salarFinance;
}

   nummberAll =salaryAdministration+salaryMarketing+salaryDevelopment+salarFinance;
   totalSalary=totalMarketing+totalDev+totalAdministration+totalFinance;
   avgSalary=totalSalary/nummberAll
///////////////////////////////////////////////////////////////////////////////////////////////
function renderTable ()
{
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    console.log(tableEl);
 

    let numberEl = document.createElement('td');
    numberEl.textContent =numberofEmployes(this.Department);
    trEl.appendChild(numberEl);

}
///////////////////////////////////////////////////////////////////////////////////////////////
/*EmployeeInfo.prototype.renderTable = function () 
{

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
 

    let numberEl = document.createElement('td');
    numberEl.textContent =numberofEmployes(this.Department);
    trEl.appendChild(numberEl);
 
    /*let numberEl = document.createElement('td');
    numberEl.textContent = this.FullName;
    trEl.appendChild(numberEl);
 
    let drinkPriceEl = document.createElement('td');
    drinkPriceEl.textContent = this.price;
    trEl.appendChild(drinkPriceEl);*/
/////////////////////////////////////////////////////////////////////////////////////////

