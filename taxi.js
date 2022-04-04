

function TaxiRank() {
    let taxiData = [{ destination: "Makhaza", queue: 12 , taxiCount: 0}, { destination: "Belhar", queue: 34, taxiCount: 0 }, {
        destination: "Bellville", queue: 23, taxiCount: 0
    }]

    let error = ""
    const taxiPassengers = 13;
   

    if (localStorage['taxiData']) {
        taxiData = JSON.parse(localStorage.getItem('taxiData'))
    }


    function dataSet() {
        return taxiData
    }

    function increaseQueue(destination) {
        for (let i = 0; i < taxiData.length; i++) {
            if (taxiData[i].destination == destination) {
                let qPlus = taxiData[i].queue++
                return qPlus
            }

        }
        localStorage.setItem('taxiData', JSON.stringify(taxiData))
    }

    function decreaseQueue(destination) {
        for (let i = 0; i < taxiData.length; i++) {
            if (taxiData[i].destination == destination) {
                let qMinus = taxiData[i].queue--
                return qMinus
            }

        }
        localStorage.setItem('taxiData', JSON.stringify(taxiData))
    }

    function taxiLeave(destination) {
        taxiData.forEach(element => {
            if (element.destination == destination) {
                if (element.queue >= 13) {
                    element.queue = element.queue - taxiPassengers
                    element.taxiCount++
                    

                }
                else {
                    error = "There are too little people in the queue for the taxi to depart"
                }
            }
        });
        localStorage.setItem('taxiData', JSON.stringify(taxiData))

    }

    function addDestination(destinationName, destinationQueue){
        if(destinationName != ""){
            if(destinationQueue == ""){
                taxiData.push({destination: destinationName, queue: 0, taxiCount: 0})
                console.log(taxiData);
            }else{
                taxiData.push({destination: destinationName, queue: destinationQueue, taxiCount: 0})
                console.log(taxiData);
            }
        }
        else{
            error = "Please enter a destination"
        }

    }


    function values() {
        return {
            error: error,
        }
    }


    return {
        dataSet,
        increaseQueue,
        decreaseQueue,
        taxiLeave,
        addDestination,
        values
    }
}