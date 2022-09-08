function myFunction() {
  var income = document.getElementById("income").value;
  var dependents= document.getElementById("dependents").value;
  var isGovernment=false;
if(document.getElementById("worker1").checked){
  isGovernment=true;
  worker=document.getElementById("worker1").value;
}
else{
  isGovernment=false;
  worker=document.getElementById("worker2").value;
}

document.write("Month income: "+income);
document.write("<br>");
document.write("Government Worker?: "+worker);
document.write("<br>");
if (isGovernment){
  insurance=Number(income)*0.09;
  document.write("SSS: "+0);
  document.write("<br>");
  document.write("GSIS:"+insurance);
  document.write("<br>");
}

else{
  insurance=Number(income)*0.11;
  document.write("SSS: "+insurance);
  document.write("<br>");
  document.write("GSIS:"+0);
  document.write("<br>");
}
let philhealth=Number(income)*0.035;
philhealth=philhealth.toFixed(2);
document.write("Philhealth: "+ philhealth);
document.write("<br>");
let pagibig=Number(income)*0.01375;
pagibig=pagibig.toFixed(2);
document.write("Pagibig: "+ pagibig);
document.write("<br>");
let pe=250000;
document.write("Personal Exemption:"+pe);
document.write("<br>");
document.write("Dependents: "+dependents);
document.write("<br>");
let ape=50000*Number(dependents);
if (dependents>4){
  ape=200000;
}
document.write("APE: "+ape);
document.write("<br>");
let gross=Number(income*13);
document.write("Gross income: "+gross);
document.write("<br>");
let deductions=Number(pe)+Number(ape)+(Number(insurance)*12)+(Number(philhealth)*12)+(Number(pagibig)*12);
document.write("Deductions: "+deductions);
document.write("<br>");
let taxable=Number(gross)-Number(deductions);
document.write("Taxable Income: "+taxable);
document.write("<br>");

let payable;
if (taxable>=1 && taxable<=250000){
  payable=0;
}
else if(taxable>250000 && taxable<=400000){
  payable=Number((taxable-250000))*Number(0.20);
}
else if(taxable>400000 && taxable<=800000){
  payable=Number((taxable-400000))*Number(0.25)+30000;
}
else if(taxable>800000 && taxable<=2000000)
{
  payable=Number((taxable-800000))*Number(0.30)+130000;
}
else if(taxable>2000000 && taxable<=8000000)
{
  payable=Number((taxable-2000000))*Number(0.32)+490000;
}
else if(taxable>8000000){
  payable=Number((taxable-8000000))*Number(0.35)+2410000;
}
document.write("Payable tax: "+payable);
}