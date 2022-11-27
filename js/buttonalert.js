$(document).ready(function() {
    $('#btnSubmit').click(function() {
        if (($('#name').val().length === 0)  || ($('#description').val().length === 0 ) || ($('#monto').val().length === 0 ) ) {
            $(document).on('click', '#btnSubmit', function(e) {
                swal(
                    'Falta que ingreses información',
                    'error'
                )
            });
            
        }

        else{
            $(document).on('click', '#btnSubmit', function(e) {
                swal(
                    'Datos ingresados',
                    'success'
                )
            });
            

        }
    })
});

