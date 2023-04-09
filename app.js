function EmployeeInfo (EmployeeID,FullName,Department,Level,ImageURL)
{
    this.EmployeeID=EmployeeID;
    this.FullName=FullName;
    this.Department=Department;
    this.Level=Level;
    this.ImageURL=ImageURL;
}

EmployeeInfo.prototype.Salary=function(Level)
{let tax =0.075;

 if(Level=="Senior")
 {  let min=1500;
    let max=2000;
    let randomSalary=Math.floor(Math.random() * (max - min + 1) + min);
    let netSalary=randomSalary-randomSalary*tax;
    document.write(this.FullName + " : "+netSalary+ '</p>');
  
 }

 else if(Level=="Mid-Senior")
 {
    let min=1000;
    let max=1500;
    let randomSalary=Math.floor(Math.random() * (max - min + 1) + min);
    let netSalary=randomSalary-randomSalary*tax;
    document.write(this.FullName + "  :  "+netSalary+'</p>');
 }

 else if(Level=="Junior")
 {
    let min=500;
    let max=1000;
    let randomSalary=Math.floor(Math.random() * (max - min + 1) + min);
    let netSalary=randomSalary-randomSalary*tax;
    document.write(this.FullName + " : "+netSalary+'</p>');
 }

}



let employee1=new EmployeeInfo(1000,"Ghazi Samer","Administration","Senior");
employee1.Salary(employee1.Level);

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
employee7.Salary(employee7.Level);
