let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");

const button = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")

button.addEventListener("click", function () {
  // let inpuValue = document.getElementById("input-el").value
  // myLeads.push(inpuValue)
  myLeads.push(inputEl.value)
  inputEl.value =""
  renderLeads()
 
});

function renderLeads(){

let listItems = ""
for (let i=0; i<myLeads.length; i++){
  // listItems += "<li><a target ='_blank' href='" +myLeads[i] + "' >"+ myLeads[i] +"</a></li> "
  listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`;

}

ulEl.innerHTML = listItems
}


