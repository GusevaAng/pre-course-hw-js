let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
}
console.log(passportWithAddress.address.city)

let copy = structuredClone(passportWithAddress)
copy.address.city = 'Bobryisk'
console.log(copy.address.city)
