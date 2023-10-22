var carVariants = {
    Toyota: {
        toyotaCorolla: {
            Image: "https://media.istockphoto.com/id/1412133515/photo/toyota-corolla.jpg?s=612x612&w=0&k=20&c=lD7qArFDIFMgiTauLrE5yfi0Eof8D0WIwhXJanvzqTQ=",
            name: "Toyota Corolla",
            model: "2023",
            color: "white",
            cityName: "Karachi",
            Price: "PKR 2,80,0000"
        },
        ToyotaCamry: {
            name: "ToyotaCamry",
            model: "2023",
            color: "white",
            cityName: "Karachi",
            Price: "PKR 2,80,0000"

        }
    },
    suzuki: {
        Baleno: {

            name: "Suzuki Baleno",
            model: "2023",
            color: "white",
            cityName: "Karachi",
            Price: "PKR 2,80,0000"


        },
        alto: {

            name: "Suzuki Alto",
            model: "2023",
            color: "white",
            cityName: "Karachi",
            Price: "PKR 2,80,0000"


        }

    },
    Honda: {
        Civic: {
            name: "Honda",
            model: "Civic",
            year: 2022,
            color: "Blue",
            Price: 23000,
        },
        Accord: {
            name: "Honda",
            model: "Accord",
            year: 2021,
            color: "Silver",
            Price: 27000,
        },
        CRV: {
            name: "Honda",
            model: "CR-V",
            year: 2023,
            color: "White",
            Price: 30000,
        }
    },
    KIA: {
        Telluride: {
            name: "Kia",
            model: "Telluride",
            year: 2020,
            color: "Blue",
            Price: 33000,
        },
        Sportage: {
            name: "Kia",
            model: "Sportage",
            year: 2023,
            color: "White",
            Price: 29000,
        },
        Sorento: {
            ToyotaCamry: "Kia",
            model: "Sorento",
            year: 2021,
            color: "Red",
            Price: 28000,
        },
        Optima: {
            name: "Kia",
            model: "Optima",
            year: 2022,
            color: "Silver",
            Price: 25000,
        }


    }

}

var company = document.getElementById("company")
var brand = document.getElementById("brand")
var allCars = document.getElementById("allCars")

company.innerHTML = `<option value="">Select Company</option>`
brand.innerHTML = `<option>Select brand</option>`
for (var key in carVariants) {
    company.innerHTML += `
    <option value =${key}>${key.toUpperCase()}</option>`

    for (var key1 in carVariants[key]) {

        console.log(carVariants[key][key1]);
        allCars.innerHTML += `

    <div class="col">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title"> ${carVariants[key][key1].name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary"> ${carVariants[key][key1].model}</h6>
    <h2>PKR ${carVariants[key][key1].Price}</h2>
    </div>
    </div>
    </div>`
    }
}

function onCompanyChange() {
    brand.innerHTML = ``
    brand.innerHTML = `<option>Select Company</option>`
    for (var key in carVariants[company.value]) {
        console.log(key)
        brand.innerHTML += `
    <option value =${key}>${key.toUpperCase()}</option>`

    }
}

function filterCars() {
    console.log(company.value, brand.value, "on click");
    var carData = carVariants[company.value][brand.value]
    console.log({ carData });
    allCars.innerHTML = `

<div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title"> ${carData.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary"> ${carData.model}</h6>
                    <h2>PKR ${carData.Price}</h2>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${carData.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
                    <h2>PKR ${carData.Price}</h2>

                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${carData.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
                    <h2>PKR ${carData.Price}</h2>

                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${carData.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
                    <h2>PKR ${carData.Price}</h2>

                </div>
            </div>
        </div>`
}