let file = "\js/data.json"
fetch (file)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (let i = 0; i < data.length; i++) {      
        body+=`<tr><td>${data[i].name}</td><td>${data[i].description}</td><td>${data[i].cost}</td>
        </tr>`
        
    }
    document.getElementById('tests-table').innerHTML = body

}
