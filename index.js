let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");

const button = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
button.addEventListener("click", function () {
  // let inpuValue = document.getElementById("input-el").value
  // myLeads.push(inpuValue)
  myLeads.push(inputEl.value)
  console.log("Button clicked!");
  myLeads.push("www.myleads.com");
  console.log(myLeads);
});

for (let i=0; i<myLeads.length; i++){
  ulEl.textContent += myLeads[i]
}