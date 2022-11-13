document.querySelector('#btnSubmit').addEventListener('click', guardarDatos);
imprimirTabla();


function guardarDatos() {
    let saveName = document.querySelector('#name').value,
        saveDescr = document.querySelector('#description').value,
        saveMoney = document.querySelector('#monto').value;
    
    agregarDatos(saveName, saveDescr, saveMoney);
    imprimirTabla();
}

function imprimirTabla() {
    let lista = obtenerLista().sort(),
    tbody = document.querySelector('#tabla tbody');

    tbody.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        let row = tbody.insertRow(i),
            nameCelda = row.insertCell(0),
            descriptionCelda = row.insertCell(1);
            moneyCelda = row.insertCell(2);
        
        nameCelda.innerHTML = lista[i].name;
        descriptionCelda.innerHTML = lista[i].description;
        moneyCelda.innerHTML = lista[i].money;

        tbody.appendChild(row);
    }
}