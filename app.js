const a =["one", "two", "three"]
let d=''
const add = () =>{
     a.map((data) =>d+= `<li>${data}</li>`)
     document.getElementById("countvalue").innerHTML = d
}

