const display = document.getElementById("display")
const buttons = document.querySelector(".buttons")
const errorMessage = document.querySelector(".errorMessage")
const nextDestinationName = document.getElementById("nextDestination")
const nextQueueLength = document.getElementById("nextQueue")
var btn = document.getElementById("anotherBtn");
const addBtn = document.getElementById("addBtn")

const taxiApp = TaxiRank()


const templateSource = document.querySelector(".templateName").innerHTML;

const userTemplate = Handlebars.compile(templateSource);


display.innerHTML = userTemplate({ destination: taxiApp.dataSet() })

function add(e) {
  if (e.target.name == "minus") {
    taxiApp.decreaseQueue(e.target.dataset.destination)
  }
  else if (e.target.name == "plus") {
   
    taxiApp.increaseQueue(e.target.dataset.destination)
  }
display.innerHTML = userTemplate({ destination: taxiApp.dataSet() })

}
display.addEventListener('click', add)

function taxiDepart(e){
  if(e.target.name == "depart"){
    console.log(e.target.dataset.destination);
    taxiApp.taxiLeave(e.target.dataset.destination)
  }
  errorMessage.innerHTML = taxiApp.values().error
  display.innerHTML = userTemplate({ destination: taxiApp.dataSet() })
}
display.addEventListener('click', taxiDepart)

function nextDestination(){
  taxiApp.addDestination(nextDestinationName.value, nextQueueLength.value)

  errorMessage.innerHTML = taxiApp.values().error
  display.innerHTML = userTemplate({ destination: taxiApp.dataSet() })
}
addBtn.addEventListener('click', nextDestination)







