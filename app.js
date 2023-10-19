var carVariants = {
    Toyota: {
        toyotaCorolla: {
            name: "Toyota Corolla",
            model: "2023",
            color: "white",
            cityName: "Karachi",
            Price: "PKR 2,80,0000"
        },
        ToyotaCamry: {
            name: "Toyota Corolla",
            model: "2023",
            color: "white",
            cityName: "Karachi",
            Price: "PKR 2,80,0000"

        }
    },
    suzuki: {
        Baleno: {
            type: {
                name: "Suzuki Baleno",
                model: "2023",
                color: "white",
                cityName: "Karachi",
                Price: "PKR 2,80,0000"

            }
        },
        alto: {
            type: {
                name: "Suzuki Alto",
                model: "2023",
                color: "white",
                cityName: "Karachi",
                Price: "PKR 2,80,0000"

            }
        }

    },
    Honda: {
        Civic: {
            make: "Honda",
            model: "Civic",
            year: 2022,
            color: "Blue",
            price: 23000,
        },
        Accord: {
            make: "Honda",
            model: "Accord",
            year: 2021,
            color: "Silver",
            price: 27000,
        },
        CRV: {
            make: "Honda",
            model: "CR-V",
            year: 2023,
            color: "White",
            price: 30000,
        }
    },
    KIA: {
        Telluride: {
            make: "Kia",
            model: "Telluride",
            year: 2020,
            color: "Blue",
            price: 33000,
        },
        Sportage: {
            make: "Kia",
            model: "Sportage",
            year: 2023,
            color: "White",
            price: 29000,
        },
        Sorento: {
            make: "Kia",
            model: "Sorento",
            year: 2021,
            color: "Red",
            price: 28000,
        },
        Optima: {
            make: "Kia",
            model: "Optima",
            year: 2022,
            color: "Silver",
            price: 25000,
        }


    }

}

var company = document.getElementById("company")
var brand = document.getElementById("brand")

company.innerHTML = `<option value="">Select Company</option>`
brand.innerHTML = `<option>Select Company</option>`
for (var key in carVariants) {
    company.innerHTML += `
    <option value =${key}>${key.toUpperCase()}</option>`

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
