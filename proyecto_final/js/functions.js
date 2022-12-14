// npm install -g myapp
// npm install grunt
// npm install sweetalert --save
// npm install sweetalert2


let newId = 2
let newTest = {'name':null, 'id':newId, 'description':null, 'cost':null}

$('#add-test').on('click', function(){
    $('.form-wrapper').removeClass('hidden')
})


$('#description').on('keyup', function(){
    newTest.description = $(this).val()
    // console.log(newTest)

})
$('#cost').on('keyup', function(){
    newTest.cost = $(this).val()
    // console.log(newTest)

})

$('#name').on('keyup', function(){
    newTest.name = $(this).val()
    // console.log(newTest)
})

$('#create-test').on('click', function(){
    if(newTest.name == null || newTest.description == null || newTest.cost == null){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Tienes que ingresar todos los campos',

        })
    }else{


        addRow(newTest)

        $('#name').val('')
        $('#description').val('')
        $('#cost').val('')
        $('.form-wrapper').addClass('hidden')

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La información ha sido ingresada',
            showConfirmButton: false,
            timer: 1500
        })

        let promise = new Promise(function(resolve, reject) {
            // la función se ejecuta automáticamente cuando se construye la promesa
          
            // después de 1 segundo, indica que la tarea está hecha con el resultado "hecho"
            setTimeout(() => resolve("hecho"), 1000);
            console.log('Promesa ejecutada')
        });
    }
})




let tests = [
    {'name':'Gasto 1', 'id':'1', 'description':"Ejemplo", 'cost':12},
]


for (let i in tests){
    addRow(tests[i])
}




function addRow(obj){
    /* FUNCIÓN QUE AGREGA INFORMACIÓN A LA TABLA tests-table
    EN ESTE CASO SE RECIBE LA INFORMACIÓN DE CADA INPUT INGRESADO (TODOS SON OBLIGATORIOS) 
    CADA INFORMACIÓN INGRESADA SE RECIBE EN UNA LÍNEA QUE SE CREA MEDIANTE ESTA FUNCIÓN 
    ESTA LÍNEA SE LE AGREGA EL BOTON DE ELIMINAR Y SE LLAMA ESTA FUNCIÓN

    */
    if (obj.id!=1){
        // guarda los datos en formato json
        guardarDatos();
        
        function guardarDatos() {
            let saveName = document.querySelector('#name').value,
                saveDescr = document.querySelector('#description').value,
                saveMoney = document.querySelector('#cost').value;
            
            agregarDatos(saveName, saveDescr, saveMoney);
            
        }
        

        function agregarDatos(saveName, saveDescr, saveMoney) {
            let datos = [];
            let New = {
                name: saveName.toLocaleLowerCase(),
                description: saveDescr.toLocaleLowerCase(),
                money: saveMoney.toLocaleLowerCase()
            };

            console.log(New); 
            datos.push(New);  
            console.log(datos)
            
        }
        
    }  



    let row = `<tr scope="row" class="test-row-${obj.id}">
                    <td>${obj.name}</td>
                    <td id="description-${obj.id}" data-testid="${obj.id}"">${obj.description}</td>
                    <td  data-testid="${obj.id}"">${obj.cost}</td>
                    <td>
                            <button class="btn btn-sm btn-dark " data-testid=${obj.id} id="delete-${obj.id}" style="background-color: #dd7973
                            ">Eliminar</button>

                            <button class="btn btn-sm btn-dark  hidden" data-testid="${obj.id}"  id="cancel-${obj.id}"  style="background-color: #dd7973">Cancelar</button>
                            <button class="btn btn-sm btn-dark hidden" data-testid="${obj.id}"  id="confirm-${obj.id}" style=" background-color:#5dbea3">Confirmar</button>
                            
                    </td>
                </tr>`
    $('#tests-table').append(row)

    $(`#delete-${obj.id}`).on('click', deleteTest)
    $(`#cancel-${obj.id}`).on('click', cancelDeletion)
    $(`#confirm-${obj.id}`).on('click', confirmDeletion)

}

function deleteTest(){
    let testid = $(this).data('testid')

    let deleteBtn = $(`#delete-${testid}`)
    let saveBtn = $(`#save-${testid}`)
    let cancelBtn = $(`#cancel-${testid}`)
    let confirmBtn = $(`#confirm-${testid}`)

    deleteBtn.addClass('hidden')
    saveBtn.addClass('hidden')

    cancelBtn.removeClass('hidden')
    confirmBtn.removeClass('hidden')
}

function cancelDeletion(){
    let testid = $(this).data('testid')

    let deleteBtn = $(`#delete-${testid}`)
    let saveBtn = $(`#save-${testid}`)
    let cancelBtn = $(`#cancel-${testid}`)
    let confirmBtn = $(`#confirm-${testid}`)

    deleteBtn.removeClass('hidden')
    saveBtn.removeClass('hidden')

    cancelBtn.addClass('hidden')
    confirmBtn.addClass('hidden')

}

function confirmDeletion(){
    let testid = $(this).data('testid')
    let row = $(`.test-row-${testid}`)
    row.remove()

}