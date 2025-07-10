const formE1 = document.querySelector("form")

const array = JSON.parse(localStorage.getItem("apiData")) || []

formE1.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.getElementById("title").value
    const image = document.getElementById("image").value
    const description = document.getElementById("description").value
    const price = document.getElementById("price").value
    const rating = document.getElementById("rating").value
    const count = document.getElementById("count").value

    const obj = {
        title,
        image,
        description,
        price,
        rating: {
            rate: rating,
            count: count
        }
    }
    
console.log(obj,array)
    array.push(obj)
    localStorage.setItem("apiData",JSON.stringify(array))
    formE1.reset()
})
