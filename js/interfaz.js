let datos = [];

function agregarDatos(saveName, saveDescr, saveMoney) {
    
    let New = {
        name: saveName.toLocaleLowerCase(),
        description: saveDescr.toLocaleLowerCase(),
        money: saveMoney.toLocaleLowerCase()
    };

    console.log(New); 
    datos.push(New);    
}

function obtenerLista() {
    return datos.sort();
}




