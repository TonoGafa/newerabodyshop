
/*
try {
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    var fecha = document.getElementById("fecha");
    var fechaVuelta = document.getElementById("fechaVuelta");
    var fechaRegreso = document.getElementById("fechaRegreso");
    var tipo = document.getElementById("tipo");
    
    
    function validarFechaRegreso() {


        setTimeout(() => {
            var nueva = document.getElementById("fecha").value;
            document.getElementById("fechaVuelta").setAttribute("min", nueva);

        }, 200);
    }



    origen.onclick = function() {
        if (origen.value !== "--") {
            destino.disabled = false;
        } else {
            destino.disabled = true;
        }
    };

    destino.onclick = function() {
        if (destino.value !== "--") {
            fecha.disabled = false;
        } else {
            fecha.disabled = true;
        }
    };

    fecha.onchange = function() {
        if (fecha.value !== "") {
            fechaVuelta.disabled = false;
        } else {
            fechaVuelta.disabled = true;
        }
    };

    function tipoBoleto() {
        var radios = document.getElementsByName("tipo");
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].value === "Simple" && radios[i].checked) {
                fechaRegreso.style.visibility = "hidden";
                break;
            } else {
                fechaRegreso.style.visibility = "visible";
                break;
            }
        }
    }

    //Configuración de fecha
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("fecha").setAttribute("min", today);
    document.getElementById("fechaVuelta").setAttribute("min", today);
    fechaRegreso.style.visibility = "hidden";
} catch (error) {
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
}

//JQuery:: CARGA DE PETICIONES AJAX
window.addEventListener("load", function() {
    $(document).ready(function() {});

    try {
        $('select[name="origen"]').change(function() {
            ajaxDestinos();
        });
        //ajaxDestinos();
    } catch (error) {
        console.error("No se pudieron cargar destinos");
    }

    try {
        $('select[name="bCargo"]').change(function() {
            ajaxGetUsuarios();
        });
    } catch (error) {
        console.error("No se pudieron cargar usuarios");
    }

    try {
        $('input[name="bNombre"]').keyup(function() {
            ajaxGetUsuarios();
        });
    } catch (error) {
        console.error("No se pudieron cargar usuarios");
    }

    try {
        $('input[name="bRfc"]').keyup(function() {
            ajaxGetUsuarios();
        });
    } catch (error) {
        console.error("No se pudieron cargar usuarios");
    }
});

//SWEET ALERT

function mostrarCarga() {
    Swal.fire({
        title: "Cargando",
        html: "Por favor espere",
        timer: 777,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
                const content = Swal.getContent();
                if (content) {
                    const b = content.querySelector("b");
                }
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then(result => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
    });
}

// FUNCIONES AJAX
function ajaxDestinos() {
    mostrarCarga();
    $.ajax({
        url: "/getDestinos",
        method: "POST",
        data: {
            origen: $('select[name="origen"]').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        console.log(res);

        var opciones = "<option value='0'>-- Elige una ciudad --</option>";

        $.each(res, function(key, value) {
            opciones +=
                "<option value='" +
                value.destino +
                "'>" +
                value.destino +
                "</option>";
        });

        $('select[name="destino"]').html(opciones);
    });
}

function ajaxGetUsuarios() {
    //mostrarCarga();
    $.ajax({
        url: "/buscarUsuarios",
        method: "POST",
        data: {
            bNombre: $('input[name="bNombre"]').val(),
            bRfc: $('input[name="bRfc"]').val(),
            bCargo: $('select[name="bCargo"]').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        console.log(res);


            $("#tabla").html("");

            resultado = "";

            $.each(res, function(key, value) {
                resultado +=
                    '<tr><th scope="row">' +
                    value.id +
                    "</th><td>" +
                    value.name +
                    " " +
                    value.apellidos +
                    "</td><td>" +
                    value.cargo +
                    "</td><td>    " +
                    value.email +
                    '</td><td>    <a href="/eliminarPersonal/' +
                    value.id +
                    '" class="btn btn-danger rounded-pill"><span><i class="fas fa-trash"></i> Dar de baja</span></a>    <button class="btn btn-warning rounded-pill"><span><i class="fas fa-ban"></i> Suspender</span></button>    <a href="/dashboard/personal/editar/' +
                    value.id +
                    '" class="btn btn-primary rounded-pill"><span><i class="fas fa-edit"></i> Editar</span></a></tr>';
            });

            $("#tabla").html(resultado);

    });
}
*/

try {
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    var fecha = document.getElementById("fecha");
    var fechaVuelta = document.getElementById("fechaVuelta");
    var fechaRegreso = document.getElementById("fechaRegreso");
    var horaRegreso = document.getElementById("horaRegreso");
    var tipo = document.getElementById("tipo");

    function validarFechaRegreso() {
        setTimeout(() => {
            var nueva = document.getElementById("fecha").value;
            document.getElementById("fechaVuelta").setAttribute("min", nueva);
        }, 200);
    }
    
    function finalizaVigencia() {
        setTimeout(() => {
            var nueva = document.getElementById("iniciaVigencia").value;
            document
                .getElementById("finalizaVigencia")
                .setAttribute("min", nueva);
        }, 200);
    }

    /*origen.onchange = function() {
        if (origen.value !== "--" && origen.value !== "" && origen.value !== "0") {
            destino.disabled = false;
            $('#destino').removeClass('disabled');
        } else {
            destino.disabled = true;
            $('#destino').addClass('disabled');
        }
    };*/

    destino.onchange = function() {
        if (destino.value !== "--" && destino.value !== "" && destino.value !== "0") {
            fecha.disabled = false;
            $('#fecha').removeClass('disabled');
            $('#hora_salida').removeClass('disabled').removeAttr('disabled');

        } else {
            fecha.disabled = true;
            $('#fecha').addClass('disabled');
            $('#hora_salida').addClass('disabled').attr('disabled',true);
        }
    };

    /*fecha.onchange = function() {
        if (fecha.value !== "") {
            fechaVuelta.disabled = false;
        } else {
            fechaVuelta.disabled = true;
        }
    };*/
    
    $('#origen').on('change', function(event) {
        console.log($(this).val());
        if ($(this).val() !== "--" && $(this).val() !== "" && $(this).val() !== "0") {
            $('#destino').attr('disabled', false).removeClass('disabled');
        } else {
            $('#destino').attr('disabled', true).addClass('disabled');
        }
    });
    
    $('#destino').on('change', function(event) {
        //event.preventDefault();
        if ($(this).val()!='--' && $(this)!='0' && $(this)!='') { ajaxHorariosSalida(); }
    });

    $('#fecha').on('change', function(event) {
        ajaxHorariosSalida();
    });
    $('#fechaVuelta').on('change', function(event) {
        ajaxHorariosRegreso();
    });

    $('#hora_salida').on('change', function(event) { if ($(this).val()!='' && $(this).val()!='--' && $(this).val()!='0') {$('#fechaVuelta').removeClass('disabled').removeAttr('disabled');} /*ajaxCostoBoleto();*/ });
    $('#hora_vuelta').on('change', function(event) { /*ajaxCostoBoleto();*/ });

    $('#asientos_seleccionados').on('change',function (event) {
        if ($(this).val()<=$('#boletos').val()) {
            $('#check_asiento').removeAttr('disabled').removeClass('disabled');
        }else{
            $('#check_asiento').attr('disabled').addClass('disabled');
        }
    });

    function tipoBoleto() {
        var radios = document.getElementsByName("tipo");
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].value === "Simple" && radios[i].checked) {
                $('#fechaRegreso').hide('slow');//.style.display = "none";
                $('#horaRegreso').hide('slow');//.style.display = "none";
                $('#fechaVuelta').addClass('disabled').attr('disabled',true);
                //$('#hora_vuelta').addClass('disabled').attr('disabled',true);
                ajaxHorariosRegreso();
                break;
            } else {
                $('#fechaRegreso').show('slow');//.style.display = "block";
                $('#horaRegreso').show('slow');//.style.display = "block";
                ajaxHorariosRegreso();
                if ($('#destino').val()!='--' && $('#destino').val()!='' && $('#destino').val()!='0') {$('#fechaVuelta').removeClass('disabled').removeAttr('disabled');}
                //$('#hora_vuelta').removeClass('disabled').removeAttr('disabled');
                break;
            }
        }
        /*ajaxCostoBoleto();*/
    }

    //Configuración de fecha
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("fecha").setAttribute("min", today);
    //document.getElementById("fechaVuelta").setAttribute("min", today);
    //fechaRegreso.style.visibility = "hidden";
} catch (error) {
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
}

//JQuery:: CARGA DE PETICIONES AJAX
window.addEventListener("load", function() {
    $(document).ready(function() {
        $("#formEmail").validate();
        $("#formFolio").validate();
        $("#formBusqueda").validate();
        $("#formDatosCompra").validate();
        $("#formAsientos").validate();
        $("#formContacto").validate();
        $("#formAuth").validate();
        $("#formFact").validate();
        $("#payment-form").validate();
        $("#formPerfilEditar").validate();
        $("#formCuponGenerico").validate();
        $("#formRutaParada").validate();


        
        
        myFunction();

        var tam_destinos = $('.destinos').length;
        if(tam_destinos<=0){
            $('#origen').change();
        }
        verifica_total_boletos();

    });

    $(document).on("change",".uploadFile", function()
    {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
 
        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file
 
            reader.onloadend = function(){ // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
            uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
            }
        }
      
    });

    $('.bmd-modalButton').on('click',function(event) {
        event.preventDefault();
        var $url = $(this).data("bmdsrc");
        //console.log($url);
        $('.modal_factura').on('shown.bs.modal',function(){      //correct here use 'shown.bs.modal' event which comes in bootstrap3
            $(this).find('iframe').attr('src',$url);
        });
    });

    $('.close_modal_factura').on('click',function(event) {
        event.preventDefault();
        $('.modal_factura').find('iframe').attr('src','');
    });

    $('.btn-descarga').on('click', function(event) {
        event.preventDefault();
        var url = $(this).data('url');
        window.location.href = url;
        setTimeout(myFunction, 3000);
        //myFunction();
    });

    $('.card-header').on('click', function (event) { 
        $(this).find('i').toggleClass('fas fa-plus fas fa-minus'); 
        $.each($('.card-header'), function(index, val) {
            if ($(this).attr('aria-expanded')=='true') { $(this).find('i').removeClass('fa-minus').addClass('fa-plus');  }
        });
        //$('.card-header').find('i.fa-minus').removeClass('fa-minus').addClass('fa-plus'); 
        //$('.card-header').find('i.fa-minus').removeClass('fa-minus').addClass('fa-plus');
        //if ($(this).find('i').hasClass('fa-minus')) {  $(this).find('i').removeClass('fa-minus').addClass('fa-plus'); 
        //}else{ $(this).find('i').removeClass('fa-plus').addClass('fa-minus');  }
    });

    $('.btn-editar-pasajero').on('click', function(event) {
        event.preventDefault();
        var id = $(this).data('id_pasajero');
        $('.ocultar_'+id).addClass('d-none');
        $('.mostrar_'+id).removeClass('d-none');
        $('#nombre_pasajero_'+id).val($('.nombre_pasajero_'+id).text());
    });

    $('.btn-cancelar-pasajero').on('click', function(event) {
        event.preventDefault();
        var id = $(this).data('id_pasajero');
        $('.mostrar_'+id).addClass('d-none');
        $('.ocultar_'+id).removeClass('d-none');
    });

    /****/
    $('.btn-editar-parada_lista').on('click', function(event) {
        event.preventDefault();
        var id = $(this).data('id_parada_lista');
        $('.ocultar_'+id).addClass('d-none');
        $('.mostrar_'+id).removeClass('d-none');
        $('#costo_boleto_'+id).val($('.costo_boleto_'+id).text());
        $('#costo_boleto_redondo_'+id).val($('.costo_boleto_redondo_'+id).text());
        $('#corte_compra_'+id).val($('.corte_compra_'+id).text());
    });

    $('.btn-cancelar-parada_lista').on('click', function(event) {
        event.preventDefault();
        var id = $(this).data('id_parada_lista');
        $('.mostrar_'+id).addClass('d-none');
        $('.ocultar_'+id).removeClass('d-none');
    });

    $('input[type=radio][name=tipo_descuento]').change(function() {
        if (this.value == 'Porcentaje') {
            $('.pesos').hide();
            $('.porcentaje').show('slow');
            $('#label_pesos').removeClass('active');
            $('#label_porcentaje').addClass('active');
            $('#descuento').attr('required', true);
            $('#descuento_pesos').removeAttr('required');
        }
        else if (this.value == 'Pesos') {
            $('.porcentaje').hide();
            $('.pesos').show('slow');
            $('#label_porcentaje').removeClass('active');
            $('#label_pesos').addClass('active');
            $('#descuento_pesos').attr('required', true);
            $('#descuento').removeAttr('required');
        }
    });

    $("input[type=radio][name=metodo]").change(function () {
        if (this.value=='Tarjeta') {
            $('.btn-tarjeta').addClass('active');
            $('.btn-paypal').removeClass('active');
        }else{
            $('.btn-paypal').addClass('active');
            $('.btn-tarjeta').removeClass('active');
        }
    });

    $('.btn-add-hobbie').on('click', function (event) {
        var hobbie  = $('#hobbie option:selected').text();
        var id  = $('#hobbie').val();
        var bandera = false;
        $('.hobbie_input').each(function(){ if ($(this).val()==id) { bandera = true; } });
        if (bandera==false) {
            var html = '<div class="alert btn-outline-secondary alert-dismissible fade show" role="alert">'+ hobbie +
                        '<input type="hidden" name="hobbies[]" class="hobbie_input" value="'+ id +'">'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                        '</button>'+
                        '</div>';
            $('.list-group').append(html);
        }
    });
    
    $('.check_asiento').on('click',function (event) {
            $('#option'+$(this).val()).removeClass('disponible');
            //$('#option'+$(this).val()).attr('checked', true);
            if ($(this).prop('checked')) { $(this).attr('checked',true); }else{ $(this).attr('checked',false); }
            var checked = $(".check_asiento:checked").length;
            if (checked<$('#boletos').val()) {
                $('.check_asiento').removeAttr('disabled').removeClass('disabled');
                $('#option'+$(this).val()).removeAttr('disabled').removeClass('disabled');
            }else{
                $('.check_asiento').attr('disabled',true).addClass('disabled');
                $('input:checkbox:checked').removeAttr('disabled').removeClass('disabled');
            }
            if ($('#tipo').val()=='Redondo') {
                var checked_regreso = $(".check_asiento_regreso:checked").length;
                if (checked==$('#boletos').val() && checked_regreso==$('#boletos').val()){ $('.btn-siguiente-van').removeAttr('disabled').removeClass('disabled'); }else{ $('.btn-siguiente-van').attr('disabled',true).addClass('disabled'); }
            }else{
                if (checked==$('#boletos').val()){ $('.btn-siguiente-van').removeAttr('disabled').removeClass('disabled'); }else{ $('.btn-siguiente-van').attr('disabled',true).addClass('disabled'); }
            }
        });

        $('.check_asiento_regreso').on('click',function (event) {
            $('#option_regreso'+$(this).val()).removeClass('disponible_regreso');
            //$('#option_regreso'+$(this).val()).attr('checked', true);
            if ($(this).prop('checked')) { $(this).attr('checked',true); }else{ $(this).attr('checked',false); }
            var checked = $(".check_asiento_regreso:checked").length;
            if (checked<$('#boletos').val()) {
                $('.check_asiento_regreso').removeAttr('disabled').removeClass('disabled');
                $('#option_regreso'+$(this).val()).removeAttr('disabled').removeClass('disabled');
            }else{
                $('.check_asiento_regreso').attr('disabled',true).addClass('disabled');
                $('input:checkbox:checked').removeAttr('disabled').removeClass('disabled');
            }
            if ($('#tipo').val()=='Redondo') {
                var checked_ida = $(".check_asiento:checked").length;
                if (checked==$('#boletos').val() && checked_ida==$('#boletos').val()){ $('.btn-siguiente-van').removeAttr('disabled').removeClass('disabled'); }else{ $('.btn-siguiente-van').attr('disabled',true).addClass('disabled'); }
            }else{
                if (checked==$('#boletos').val()){ $('.btn-siguiente-van').removeAttr('disabled').removeClass('disabled'); }else{ $('.btn-siguiente-van').attr('disabled',true).addClass('disabled'); }
            }
        });

        $('.check_cupon').on('change',function (event) {
            var id = $(this).data('id_cupon');
            var tipo = $(this).data('tipo');
            if ($(this).is(':checked')) {
                $('.boletos_'+tipo+'_'+id+'_cupon').show('slow');
            }else{
                $('.boletos_'+tipo+'_'+id+'_cupon').hide('slow');
            }
        });
        $('.esPasajero').on('change',function (event) {
            if ($(this).is(':checked')) {
                $('.nombre0').val($('#nombre').val());
                $('.apellidos0').val($('#apellido').val());
                $('.telefono0').val($('#telefono').val());
                $('.correo0').val($('#correo').val());
            }else{
                $('.nombre0').val('');
                $('.apellidos0').val('');
                $('.telefono0').val('');
                $('.correo0').val('');
            }
        });
        
        $('.factura').on('change',function (event) {
            if ($(this).is(':checked')) {
                $('.datos_facturacion').show('slow');
                $('.dato_factura').val('').attr('required');
                $('#uso_cfdi').selected('');
            }else{
                $('.datos_facturacion').hide('slow');
                $('.dato_factura').val('').removeAttr('required');
                $('#uso_cfdi').selected('');
            }
        });
        
        $('.copiar_datos').on('change',function (event) {
            if ($(this).is(':checked')) {
                $.each($('.telefono_boleto'), function(index, val) {
                     $(this).val($('#telefono').val());
                });
                $.each($('.correo_boleto'), function(index, val) {
                     $(this).val($('#correo').val());
                });
            }else{
                $.each($('.telefono_boleto'), function(index, val) {
                     $(this).val('');
                });
                $.each($('.correo_boleto'), function(index, val) {
                     $(this).val('');
                });
            }
        });
        
        $('#btn-factura-generar').on('click',function(e){
            Swal.fire({
                title: "¿Está seguro de generar la factura?",
                //text: "Se enviará un correo electrónico a ",
                icon: "warning",
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#00b9b9",
                confirmButtonText: "Sí, generar factura",
                cancelButtonText: "No, cancelar",
                //closeOnConfirm: true,
                //closeOnCancel: true,
                allowOutsideClick: false,
                reverseButtons: true,
                //dangerMode: true,
            }).then((result) => {
                console.log(result);
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                $('#'+$(this).data('form')).submit();
              }
            });
            /*, function (isConfirm) {
                console.log(isConfirm);
                if (isConfirm) {
                    console.log($(this).data('form'));
                    $('#'+$(this).data('form')).submit();
                }
            });*/
        });
        
        $('.btn-factura-cancelar').on('click',function(e){
            var url = $(this).data('url');
            Swal.fire({
                title: "¿Está seguro de cancelar la factura?",
                //text: "Se enviará un correo electrónico a ",
                icon: "warning",
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonColor: "#00b9b9",
                confirmButtonText: "Sí",
                cancelButtonText: "No",
                //closeOnConfirm: true,
                //closeOnCancel: true,
                allowOutsideClick: false,
                reverseButtons: true,
                //dangerMode: true,
            }).then((result) => {
                console.log(result);
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                mostrarCarga();
                $('#form-cancelar').attr('action',url).submit();
              }
            });
        });
        /***************************/
        $('form').on('focus', 'input[type=number]', function (e) {
            $(this).on('wheel.disableScroll', function (e) {
                e.preventDefault();
            });
        });
        $('form').on('blur', 'input[type=number]', function (e) {
            $(this).off('wheel.disableScroll');
        });
        $('#adultos').on('change', function(event) {
            //event.preventDefault();
            $('#adultos_span').text($(this).val());
        });
        $('#ninos').on('change', function(event) {
            //event.preventDefault();
            $('#ninos_span').text($(this).val());
        });
        $('#infantes').on('change', function(event) {
            //event.preventDefault();
            $('#infantes_span').text($(this).val());
        });

        $('.desplegable').on('click',function(event) {
            event.stopPropagation();
        });

        $('#btn_adultos_dec').on('click',function(event) {
            event.stopPropagation();
            var adultos = parseFloat($('#adultos').val());
            var sum = adultos-1;
            $('#adultos_span').text(sum);
            $('#adultos').val(sum);
            if (sum<=1) { 
                $('#btn_adultos_dec').attr('disabled',true).addClass('disabled'); 
                $('#infantes').val(0);
                $('#infantes_span').text(0);
                //$('#ninos').val(0);
                //$('#ninos_span').text(0);
                //$('#btn_ninos_dec').attr('disabled',true).addClass('disabled');
                $('#btn_infantes_dec').attr('disabled',true).addClass('disabled');
                $('#btn_ninos_inc').removeAttr('disabled',true).removeClass('disabled');
                $('#btn_infantes_inc').removeAttr('disabled',true).removeClass('disabled');
                $('#btn_adolescentes_inc').removeAttr('disabled',true).removeClass('disabled');
                $('#btn_adultos_inc').removeAttr('disabled',true).removeClass('disabled');
            }else{ 
                $('#infantes').val(0);
                $('#infantes_span').text(0);
                $('#btn_infantes_dec').attr('disabled',true).addClass('disabled');
                $('#btn_adultos_dec').removeAttr('disabled').removeClass('disabled');
                //$('#infantes').val(0);
                $('#btn_infantes_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_ninos_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_adolescentes_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_adultos_inc').removeAttr('disabled').removeClass('disabled');
            }
            verifica_total_boletos();
        });

        $('#btn_adultos_inc').on('click',function(event) {
            event.stopPropagation();
            var adultos = parseFloat($('#adultos').val());
            var sum = adultos+1;
            $('#adultos_span').text(sum);
            $('#adultos').val(sum);
            if (sum<=0) { 
                $('#btn_adultos_dec').attr('disabled',true).addClass('disabled');
            }else{ 
                $('#btn_adultos_dec').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_adolescentes_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_ninos_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_infantes_inc').removeAttr('disabled').removeClass('disabled');
            }
            verifica_total_boletos();
        });

        $('#btn_adolescentes_dec').on('click',function(event) {
            event.stopPropagation();
            var adolescentes = parseFloat($('#adolescentes').val());
            var sum = adolescentes-1;
            $('#adolescentes_span').text(sum);
            $('#adolescentes').val(sum);
            if (sum<=0) { 
                $('#btn_adolescentes_dec').attr('disabled',true).addClass('disabled'); 
            }else{ 
                $('#btn_adolescentes_dec').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_adolescentes_inc').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_infantes_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_ninos_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_adultos_inc').removeAttr('disabled').removeClass('disabled');
            }
            verifica_total_boletos();
        });

        $('#btn_adolescentes_inc').on('click',function(event) {
            event.stopPropagation();
            var adolescentes = parseFloat($('#adolescentes').val());
            var adultos = parseFloat($('#adultos').val());
            if (adultos>=1) {
                var sum = adolescentes+1;
                $('#adolescentes_span').text(sum);
                $('#adolescentes').val(sum);
                if (sum<=0) { $('#btn_adolescentes_dec').attr('disabled',true).addClass('disabled'); }else{ $('#btn_adolescentes_dec').removeAttr('disabled').removeClass('disabled'); }
            }
            verifica_total_boletos();
        });

        $('#btn_ninos_dec').on('click',function(event) {
            event.stopPropagation();
            var ninos = parseFloat($('#ninos').val());
            var sum = ninos-1;
            $('#ninos_span').text(sum);
            $('#ninos').val(sum);
            if (sum<=0) { 
                $('#btn_ninos_dec').attr('disabled',true).addClass('disabled'); 
            }else{ 
                $('#btn_ninos_dec').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_ninos_inc').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_adolescentes_inc').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_infantes_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_adultos_inc').removeAttr('disabled').removeClass('disabled');
            }
            verifica_total_boletos();
        });

        $('#btn_ninos_inc').on('click',function(event) {
            event.stopPropagation();
            var ninos = parseFloat($('#ninos').val());
            var adultos = parseFloat($('#adultos').val());
            if (adultos>=1) {
                var sum = ninos+1;
                $('#ninos_span').text(sum);
                $('#ninos').val(sum);
                if (sum<=0) { $('#btn_ninos_dec').attr('disabled',true).addClass('disabled'); }else{ $('#btn_ninos_dec').removeAttr('disabled').removeClass('disabled'); }
            }
            verifica_total_boletos();
        });

        $('#btn_infantes_dec').on('click',function(event) {
            event.stopPropagation();
            var infantes = parseFloat($('#infantes').val());
            var sum = infantes-1;
            $('#infantes_span').text(sum);
            $('#infantes').val(sum);
            if (sum<=0) { 
                $('#btn_infantes_dec').attr('disabled',true).addClass('disabled'); 
            }else{ 
                $('#btn_infantes_dec').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_infantes_inc').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_adolescentes_inc').removeAttr('disabled').removeClass('disabled'); 
                $('#btn_ninos_inc').removeAttr('disabled').removeClass('disabled');
                $('#btn_adultos_inc').removeAttr('disabled').removeClass('disabled');
            }
            verifica_total_boletos();
        });

        $('#btn_infantes_inc').on('click',function(event) {
            event.stopPropagation();
            var infantes = parseFloat($('#infantes').val());
            var adultos = parseFloat($('#adultos').val());
            if (adultos>=1) {
                var sum = infantes+1;
                if (sum<=adultos) {
                    $('#infantes_span').text(sum);
                    $('#infantes').val(sum);
                    if (sum<=0) { 
                        $('#btn_infantes_dec').attr('disabled',true).addClass('disabled'); 
                    }else{ 
                        $('#btn_infantes_dec').removeAttr('disabled').removeClass('disabled'); 
                    }
                }else{
                    $('#btn_infantes_inc').attr('disabled',true).addClass('disabled');
                }
            }
            verifica_total_boletos();
        });

        function verifica_total_boletos(){
            var adultos = parseFloat($('#adultos').val());
            var adolescentes = parseFloat($('#adolescentes').val());
            var ninos = parseFloat($('#ninos').val());
            var infantes = parseFloat($('#infantes').val());
            var sum = adultos+adolescentes+ninos+infantes;
            var sum_boletos = adultos+adolescentes+ninos;
            if (sum==15) {
                $('.incremento').attr('disabled',true).addClass('disabled');
            }
            $('#boletos').val(sum_boletos);
            $('#adultos_span').text(adultos);
            $('#adolescentes_span').text(adolescentes);
            $('#ninos_span').text(ninos);
            $('#infantes_span').text(infantes);
            /*ajaxCostoBoleto();*/
        }

    try {
        $('select[name="origen"]').change(function() {
            ajaxDestinos();
        });
        //ajaxDestinos();
    } catch (error) {
        console.error("No se pudieron cargar destinos");
    }
    
    try {
        $('select[name="destino"]').change(function() {
            if ($('.tipo2').is(':checked')) { ajaxHorariosRegreso(); }
        });
    } catch (error) {
        console.error("No se pudieron cargar destinos");
    }

    try {
        $('select[name="bConductor"]').change(function() {
            ajaxGetRutas();
        });
        //ajaxDestinos();
    } catch (error) {}

    try {
        $('select[name="bCargo"]').change(function() {
            ajaxGetUsuarios();
        });
    } catch (error) {
        console.error("No se pudieron cargar usuarios");
    }

    try {
        $('input[name="bNombre"]').keyup(function() {
            ajaxGetUsuarios();
        });
    } catch (error) {
        console.error("No se pudieron cargar usuarios");
    }

    try {
        $('input[name="bRfc"]').keyup(function() {
            ajaxGetUsuarios();
        });
    } catch (error) {
        console.error("No se pudieron cargar usuarios");
    }

    //RUTAS

    try {
        $('input[name="bNombreR"]').keyup(function() {
            ajaxGetRutas();
        });
    } catch (error) {
        console.error("No se pudieron cargar usuarios");
    }

    //VERIFICAR EMAIL

    try {
        $('input[name="email"]').keyup(function() {
            //ajaxValidarEmail();
        });
    } catch (error) {
        console.error("No se pudo completar la carga");
    }

    try {
        $('input[name="cpOrigen"]').keyup(function() {
            getCiudadOrigen();
        });
    } catch (error) {
        console.error("No se pudo completar la carga");
    }

    try {
        $('input[name="cpDestino"]').keyup(function() {
            getCiudadDestino();
        });
    } catch (error) {
        console.error("No se pudo completar la carga");
    }
});

//SWEET ALERT

function mostrarCarga() {
    Swal.fire({
        title: "Cargando",
        html: "Por favor espere",
        allowOutsideClick: false,
        /*timer: 777,*/
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            /*timerInterval = setInterval(() => {
                const content = Swal.getContent();
                if (content) {
                    const b = content.querySelector("b");
                }
            }, 100);*/
        },
        /*willClose: () => {
            clearInterval(timerInterval);
        }*/
    }).then(result => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
    });
}

function mostrarCargaRedireccionamiento() {
    Swal.fire({
        title: "Redireccionando",
        html: "Por favor espere",
        allowOutsideClick: false,
        /*timer: 777,*/
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            /*timerInterval = setInterval(() => {
                const content = Swal.getContent();
                if (content) {
                    const b = content.querySelector("b");
                }
            }, 100);*/
        },
        /*willClose: () => {
            clearInterval(timerInterval);
        }*/
    }).then(result => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
    });
}

function ocultar_cargar() {
    Swal.close();
}

function eliminar_comprometidos(){
    mostrarCargaRedireccionamiento();
    $.ajax({
        url: "/comprometidos/0",
        method: "DELETE",
        data: {
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        window.location.href = 'https://tinkui.mx/';
    });
}


// FUNCIONES AJAX
function ajaxDestinos() {
    mostrarCarga();
    $('.destinos').remove();
    $.ajax({
        url: "/getDestinos",
        method: "POST",
        data: {
            origen: $('select[name="origen"]').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        //console.log(res);

        var opciones = "";
        var html_arrays = '';
        if (res.length>0) {
            $.each(res, function(key, value) {
                opciones += "<option value='" +value.ciudadDestino +", "+value.lugarDestino +"'>" +value.ciudadDestino +", "+value.lugarDestino +"</option>";
                html_arrays+= '<input type="hidden" name="destinos[]" class="destinos" id="'+value.ciudadDestino +', '+value.lugarDestino +'" value="'+value.ciudadDestino +', '+value.lugarDestino +'">';
            });
        }else{
            var opciones = "<option value=''>No hay destinos disponibles</option>";
            //var opciones_horario = "<option value=''>No hay horarios disponibles</option>";
        }
        $('.formulario').append(html_arrays);
        $('select[name="destino"]').html(opciones);
        $('#destino').change();
        //$('select[name="hora_salida"]').html(opciones_horario);
    }).always(function () {
        ocultar_cargar();
    });
    
}

function ajaxHorariosSalida(){
    mostrarCarga();
    $('.horarios_salida').remove();
    $.ajax({
        url: "/getOrigenHorarios",
        method: "POST",
        data: {
            origen: $('select[name="origen"]').val(),
            destino: $('select[name="destino"]').val(),
            fecha_salida: $('#fecha').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        //console.log(res);
        var opciones = "";
        var html_arrays = '';

        if (res.length>0) {
            $.each(res, function(key, value) {
                var hora = value.horaSalida;
                var hora_res = hora.substr(0, 5);
                opciones += "<option value='" + value.id + "'>" + hora_res + "hrs</option>";
                html_arrays+= '<input type="hidden" name="horarios_salida[]" class="horarios_salida" id="'+value.id+'" value="'+value.id+','+hora_res+'">';
            });
        }else{
            var opciones = "<option value=''>No hay horarios disponibles</option>";
        }
        $('.formulario').append(html_arrays);
        $('select[name="hora_salida"]').html(opciones);
    }).always(function () {
        ocultar_cargar();
    });
}

function ajaxHorariosRegreso() {
    mostrarCarga();
    $('#hora_vuelta').addClass('disabled').attr('disabled',true);
    //$('#fechaVuelta').addClass('disabled').attr('disabled',true);
    $('.horarios_vuelta').remove();
    $.ajax({
        url: "/getDestinoHorarios",
        method: "POST",
        data: {
            origen: $('select[name="origen"]').val(),
            destino: $('select[name="destino"]').val(),
            fecha_regreso: $('#fechaVuelta').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        /*console.log(res);*/

        var opciones = "";
        var html_arrays = '';

        if (res.length>0) {
            $.each(res, function(key, value) {
                var hora = value.horaSalida;
                var hora_res = hora.substr(0, 5);
                opciones += "<option value='" + value.id + "'>" + hora_res + "hrs "+ value.lugarOrigen +"-"+ value.lugarDestino +"</option>";
                html_arrays+= '<input type="hidden" name="horarios_vuelta[]" class="horarios_vuelta" id="'+value.id+'" value="'+value.id+','+hora_res+'hrs '+ value.lugarOrigen +'-'+ value.lugarDestino +'">';
            });
            $('#hora_vuelta').removeClass('disabled').removeAttr('disabled',true);
            $('#fechaVuelta').removeClass('disabled').removeAttr('disabled',true);
        }else{
            var opciones = "<option value=''>No hay horarios disponibles</option>";
        }
        $('.formulario').append(html_arrays);
        $('select[name="hora_vuelta"]').html(opciones);
    }).always(function () {
        ocultar_cargar();
    });
}

function buscar_cp(cp) {
    mostrarCarga();
    $('#cp_error_').text('').hide(1000);
    $('.opcion_nueva').remove();
    $('.colonias').remove();
    $('#municipio_tarhab').val('');
    $('#ciudad_tarhab').val(''); 
    $('#estado_tarhab').val('');
    if (cp.length==5) {
            var route = "https://api-sepomex.hckdrk.mx/query/info_cp/"+cp+"?type=simplified&token=621f87a6-e0f7-4c0f-bf92-00f9724d4a67";
            $.ajax({
                url: route,
                type: 'GET',
                dataType: 'json',
            })
            .done(function(result) {
                if (result.error==false) {
                    var html = '';
                    var html_arrays = '';
                    $.each(result.response.asentamiento, function(index, val) {
                         html+= '<option class="opcion opcion_nueva" value="'+result.response.asentamiento[index]+'">'+result.response.asentamiento[index]+'</option>';
                         html_arrays+= '<input type="hidden" name="colonias[]" class="colonias" id="'+result.response.asentamiento[index]+'" value="'+result.response.asentamiento[index]+'">';
                    });
                    $('#colonia_tarhab').append(html);
                    $('form').append(html_arrays);
                    $('#municipio_tarhab').val(result.response.municipio);
                    if (result.response.ciudad!='') { 
                        $('#ciudad_tarhab').val(result.response.ciudad); /*$('.mostrar_ciudad').show(1000); $('.mostrar_ciudad').removeClass('d-none'); */
                    }                    
                    $('#estado_tarhab').val(result.response.estado);
                    $('#colonia_tarhab').val('').select('');
                    //$('.mostrar_direccion').show(1000);
                    //$('.mostrar_direccion').removeClass('d-none');
                    //$('#colonia_tarhab').multiselect('destroy');
                    //$('#colonia_tarhab').multiselect({maxHeight:200});
                }else{
                    $('#cp_tarhab').val('');
                    $('#cp_error_').text('No se encontro información del C.P. ingresado.').show(1000);
                }
                console.log("success");
            })
            .fail(function(errors) {
                $('#cp_tarhab').val('');
                $('#cp_error_').text('No se encontró el C.P.').show(1000);
                //console.log(error);
                console.log("error");
            })
            .always(function() {
                console.log("complete");
                ocultar_cargar();
            });
        }else{
            $('#cp_error_').text('Ingresa 5 dígitos.').show(1000);
            ocultar_cargar();
        }
}

function ajaxCostoBoleto() {
    if ($('select[name="hora_salida"]').val()!='--' && $('select[name="hora_salida"]').val()!='0' && $('select[name="hora_salida"]').val()!='') {
        /*mostrarCarga();*/
        var radios = document.getElementsByName("tipo");
        var tipo_boleto = 'Simple';
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].value === "Redondo" && radios[i].checked) {
                tipo_boleto = 'Redondo';
            }
        }
        var adultos = parseFloat($('#adultos').val());
        var adolescentes = parseFloat($('#adolescentes').val());
        var ninos = parseFloat($('#ninos').val());
        //var infantes = parseFloat($('#infantes').val());
        var sum_boletos = adultos+adolescentes+ninos;
        $.ajax({
            url: "/getCostoBoleto",
            method: "POST",
            data: {
                boletos: sum_boletos,
                tipo: tipo_boleto,
                origen: $('select[name="hora_salida"]').val(),
                destino: $('select[name="hora_vuelta"]').val(),
                _token: $('input[name="_token"]').val()
            }
        }).done(function(res) {
            console.log(res);
            $('.total_compra').text("$"+res);
        }).always(function () {
            ocultar_cargar();
        });
    }
}

function ajaxGetUsuarios() {
    //mostrarCarga();
    $.ajax({
        url: "/buscarUsuarios",
        method: "POST",
        data: {
            bNombre: $('input[name="bNombre"]').val(),
            bRfc: $('input[name="bRfc"]').val(),
            bCargo: $('select[name="bCargo"]').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        console.log(res);

        $("#tabla").html("");

        resultado = "";

        $.each(res, function(key, value) {
            resultado +=
                '<tr><th scope="row">' +
                value.id +
                "</th><td>" +
                value.name +
                " " +
                value.apellidos +
                "</td><td>" +
                value.cargo +
                "</td><td>    " +
                value.email +
                '</td><td>    <a href="/eliminarPersonal/' +
                value.id +
                '" class="btn btn-danger rounded-pill"><span><i class="fas fa-trash"></i> Dar de baja</span></a>    <button class="btn btn-warning rounded-pill"><span><i class="fas fa-ban"></i> Suspender</span></button>    <a href="/dashboard/personal/editar/' +
                value.id +
                '" class="btn btn-primary rounded-pill"><span><i class="fas fa-edit"></i> Editar</span></a></tr>';
        });

        $("#tabla").html(resultado);
    });
}

function ajaxGetVehiculos() {
    //mostrarCarga();
    $.ajax({
        url: "/buscarVehiculos",
        method: "POST",
        data: {
            bNombre: $('input[name="bNombre"]').val(),
            bRfc: $('input[name="bRfc"]').val(),
            bCargo: $('select[name="bCargo"]').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        console.log(res);

        $("#tabla").html("");

        resultado = "";

        $.each(res, function(key, value) {
            resultado +=
                '<tr><th scope="row">' +
                value.id +
                "</th><td>" +
                value.name +
                " " +
                value.apellidos +
                "</td><td>" +
                value.cargo +
                "</td><td>    " +
                value.email +
                '</td><td>    <a href="/eliminarPersonal/' +
                value.id +
                '" class="btn btn-danger rounded-pill"><span><i class="fas fa-trash"></i> Dar de baja</span></a>    <button class="btn btn-warning rounded-pill"><span><i class="fas fa-ban"></i> Suspender</span></button>    <a href="/dashboard/personal/editar/' +
                value.id +
                '" class="btn btn-primary rounded-pill"><span><i class="fas fa-edit"></i> Editar</span></a></tr>';
        });

        $("#tabla").html(resultado);
    });
}

function ajaxGetRutas() {
    //mostrarCarga();
    $.ajax({
        url: "/buscarRutas",
        method: "POST",
        data: {
            bNombreR: $('input[name="bNombreR"]').val(),
            bConductor: $('select[name="bConductor"]').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        console.log(res);

        $("#tabla").html("");

        resultado = "";

        $.each(res, function(key, ruta) {
            resultado +=
                '<tr><th scope="row">' +
                ruta.nombre +
                "</th><td>" +
                ruta.id_unidad +
                "</td><td>" +
                ruta.name +
                " " +
                ruta.apellidos +
                "</td><td>" +
                '<a href="/eliminarRuta/' +
                ruta.id +
                '" class="btn btn-danger rounded-pill"><span><i class="fas fa-trash"></i> Eliminar</span></a>' +
                '<button class="btn btn-warning rounded-pill"><span><i class="fas fa-ban"></i> Suspender</span></button>' +
                '<button class="btn btn-primary rounded-pill"><span><i class="fas fa-edit"></i> Editar</span></button>' +
                '<a href="/dashboard/rutas/' +
                ruta.id +
                '" class="btn btn-success rounded-pill"><span><i class="fas fa-route"></i> Paradas</span></a>' +
                "</td></tr>";
        });
        $("#tabla").html(resultado);
    });
}

function ajaxValidarEmail() {
    $.ajax({
        url: "/validarEmail",
        method: "POST",
        data: {
            email: $('input[name="email"]').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        if (res === "1") {
            $("#emailError").html(
                "* El correo que proporcionaste ya se encuentra registrado"
            );
            $('input[name="email"]').val("");
        } else {
            $("#emailError").html("");
        }
    });
}

function getCiudadOrigen() {
    if ($('input[name="cpOrigen"]').val().length > 4) {
        $.ajax({
            url:
                "https://api-sepomex.hckdrk.mx/query/info_cp/" +
                $('input[name="cpOrigen"]').val() +
                "?limit=1&type=simplified&token=621f87a6-e0f7-4c0f-bf92-00f9724d4a67",
            method: "POST"
        }).done(function(res) {
            console.log(res.response.ciudad);
            console.log(res.response);
            ciudad = res.response.ciudad;
            $('input[name="ciudadOrigen"]').val(ciudad);

        });
    }
}

function getCiudadDestino() {
    if ($('input[name="cpDestino"]').val().length > 4) {
        $.ajax({
            url:
                "https://api-sepomex.hckdrk.mx/query/info_cp/" +
                $('input[name="cpDestino"]').val() +
                "?limit=1&type=simplified&token=621f87a6-e0f7-4c0f-bf92-00f9724d4a67",
            method: "POST"
        }).done(function(res) {
            console.log(res.response.ciudad);
            console.log(res.response);
            ciudad = res.response.ciudad;
            $('input[name="ciudadDestino"]').val(ciudad);
        });
    }
}

function getUsuariosCupon() {/*
    
    $.ajax({
        url: "/getUsuariosCupon",
        method: "POST",
        data: {
            id: $('input[name="cuponSeleccionado"]').val(),
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        $("#asignados").html("");
        cadena = "";
        $.each(res, function(key, value) {
            cadena +=
                '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                (key + 1) +
                ". <b>" +
                value.name +
                " " +
                value.apellidos +
                "</b> | " +
                value.email;
            cadena +=
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"  onclick = desasignarCupon(' + value.id + ',' + $('input[name="cuponSeleccionado"]').val() + ')>';
            cadena += '<span aria-hidden="true">&times;</span>';
            cadena += "</button>";
            cadena += "</div>";
        });

        $("#asignados").html(cadena);
    });*/
}

function desasignarCupon(idUsuario, idCupon) {
    $.ajax({
        url: "/desasignarCupon",
        method: "POST",
        data: {
            id_usuario: idUsuario,
            id_cupon: idCupon,
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        console.log(res);
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Has desasignado un cupón',
          })

    });
}

function asignarCupon(usuario, idCupon) {
    $.ajax({
        url: "/asignarCupon",
        method: "POST",
        data: {
            usuario: usuario,
            cuponSeleccionado: cuponSeleccionado,
            _token: $('input[name="_token"]').val()
        }
    }).done(function(res) {
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Cupón asignado',
          })

    });
}

function verificarCupon(class_input) {
    if ($('.'+class_input).val()!='' && $('#correo').val()!='') {
        var costo = $('#costo_ida').val();
        var viaje = $('.viaje-'+class_input).val();
        var ruta = $('#ruta').val();
        if (viaje==2) { costo = $('#costo_vuelta').val(); ruta = $('#ruta_vuelta').val(); }
        //console.log(ruta);
        var tipo_de_cupon = 1;
        if (class_input=='cupon_2x1') { tipo_de_cupon = '2x1'; }
        mostrarCarga();
        $.ajax({
            url: "/verificarCupon",
            method: "POST",
            data: {
                folio_cupon: $('.'+class_input).val(),
                email: $('#correo').val(),
                tipo_viaje: $('#tipo').val(),
                tipo_de_cupon: tipo_de_cupon,
                viaje: viaje,
                ruta: ruta,
                cantidad_boletos: $('#cantidadDeBoletosTotal').val(),
                _token: $('input[name="_token"]').val()
            }
        }).done(function(res) {
            ocultar_cargar();
            console.log(res);
            if (res.success==true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Cupón válido',
                    text: ''+res.message+'',
                    confirmButtonColor: "#00dddd",
                    confirmButtonText: "Aceptar",
                });
                $('.'+class_input).attr('readonly','');
                $('.btn-'+class_input).attr('disabled','').addClass('disabled');
                $('.viaje-'+class_input).attr('readonly','').addClass('disabled');
                $('.check-'+class_input).attr('readonly','').addClass('disabled');
                $('.form-'+class_input).hide();
                if (class_input=='cupon_2x1') { $('.cupones_descuento').hide(); }
                obtener_descuento(res.descuento, res.tipo, class_input, $('.viaje-'+class_input).val());
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Cupón inválido',
                    text: ''+res.message+'',
                    confirmButtonColor: "#00dddd",
                    confirmButtonText: "Aceptar",
                    //footer: '<a href="/misCupones">Ir a Cupones</a>'
                });
            }
        }).fail(function(errors) {
            console.log("error");
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Lo sentimos ocurrió un error intenta más tarde.',
                confirmButtonColor: "#00dddd",
                confirmButtonText: "Aceptar",
                //footer: '<a href="/misCupones">Ir a Cupones</a>'
            });
        });
    }else{
        if ($('.'+class_input).val()=='') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingresa el cupón.',
                confirmButtonColor: "#00dddd",
                confirmButtonText: "Aceptar",
                //footer: '<a href="/misCupones">Ir a Cupones</a>'
            });
        }else if ($('#correo').val()=='') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ingresa el correo.',
                confirmButtonColor: "#00dddd",
                confirmButtonText: "Aceptar",
                //footer: '<a href="/misCupones">Ir a Cupones</a>'
            });
        }
    }
}

function obtener_descuento(descuento,tipo,class_input,viaje){
    //console.log(class_input);
    var descuento_compra = $('#descuento').val();
    if (tipo=='%') {
        var costo = $('#costo_ida').val();
        if (viaje==2) { costo = $('#costo_vuelta').val(); }
        //var descuento = parseFloat(costo*descuento);
        descuento_compra = parseFloat(descuento_compra)+parseFloat(descuento);
        $('.descuento-'+class_input).val(descuento);
        $('#descuento_text').text(currencyFormat(descuento_compra));
        $('#descuento').val(descuento_compra.toFixed(2));
        var subtotal = $('#subtotal_sub').val();
        var desc_iva = parseFloat((subtotal-descuento_compra)*.16);
        $('#iva_text').text(currencyFormat(desc_iva));
        $('#iva').val(desc_iva.toFixed(2));
        var sub = subtotal-descuento_compra;
        var total = subtotal-descuento_compra+desc_iva;
        $('#total_text').text(currencyFormat(total));
        $('#total').val(total.toFixed(2));
        //$('#subtotal_sub').val(sub.toFixed(2));
    }else{
        var descuento_inicial = parseFloat(descuento);
        var costo = $('#costo_ida').val();
        if (viaje==2) { costo = $('#costo_vuelta').val(); }
        var subtotal = parseFloat($('#subtotal_sub').val());
        var saldo_favor = parseFloat($('#saldo_favor').val());
        var resta = 0;
        if (descuento_inicial>subtotal) { resta = parseFloat(descuento-subtotal); descuento_inicial=parseFloat(descuento_inicial-resta);  }
        //console.log(descuento_inicial);
        descuento_compra = parseFloat(descuento_compra)+parseFloat(descuento_inicial);
        $('.descuento-'+class_input).val(descuento_inicial);
        $('#descuento_text').text(currencyFormat(descuento_compra));
        $('#descuento').val(descuento_compra.toFixed(2));
        var saldo = parseFloat(saldo_favor+resta);
        $('#saldo_favor').val(saldo.toFixed(2));
        
        var desc_iva = parseFloat((subtotal-descuento_compra)*.16);
        $('#iva_text').text(currencyFormat(desc_iva));
        $('#iva').val(desc_iva.toFixed(2));
        var total = subtotal-descuento_compra+desc_iva;
        $('#total_text').text(currencyFormat(total));
        $('#total').val(total.toFixed(2));
    }
}

    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        //return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

