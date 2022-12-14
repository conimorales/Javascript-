 
const tabla = document.querySelector('#tests-table tbody');
let json = {"name":"Gasto 1", "id":"1", "description":"Ejemplo 1", "cost":0}    




        fetch("data.json")
            .then( response => response.json() )
            .then( data => mostrarData(data) )
            .catch( error => console.log(error) )

        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
                body+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td></tr>`
            }
            document.getElementById('tests-table').innerHTML = body

        }

