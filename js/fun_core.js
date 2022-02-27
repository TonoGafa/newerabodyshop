
$('#btn_adultos_dec').on('click',function(event) {
    event.stopPropagation();
    var adultos = parseFloat($('#adultos').val());
    var sum = adultos-1;
    //$('#adultos_span').text(sum);
    $('#adultos').val(sum);
    if (sum<=1) { 
        $('#btn_adultos_dec').attr('disabled',true).addClass('disabled'); 
        //$('#ninos').val(0);
        //$('#btn_ninos_dec').attr('disabled',true).addClass('disabled');
        //$('#btn_ninos_inc').removeAttr('disabled',true).removeClass('disabled');
        $('#btn_adultos_inc').removeAttr('disabled',true).removeClass('disabled');
    }else{ 
        
        $('#btn_adultos_dec').removeAttr('disabled').removeClass('disabled');
        //$('#btn_ninos_inc').removeAttr('disabled').removeClass('disabled');
    }
    verifica_total_boletos();
});

$('#btn_adultos_inc').on('click',function(event) {
    event.stopPropagation();
    var adultos = parseFloat($('#adultos').val());
    var sum = adultos+1;
    //$('#adultos_span').text(sum);
    $('#adultos').val(sum);
    if (sum<=0) { 
        $('#btn_adultos_dec').attr('disabled',true).addClass('disabled');
    }else{ 
        $('#btn_adultos_dec').removeAttr('disabled').removeClass('disabled'); 
        //$('#btn_ninos_inc').removeAttr('disabled').removeClass('disabled');
    }
    verifica_total_boletos();
});


/*$('#btn_ninos_dec').on('click',function(event) {
    event.stopPropagation();
    var ninos = parseFloat($('#ninos').val());
    var sum = ninos-1;
    $('#ninos').val(sum);
    if (sum<=0) { 
        $('#btn_ninos_dec').attr('disabled',true).addClass('disabled'); 
    }else{ 
        $('#btn_ninos_dec').removeAttr('disabled').removeClass('disabled'); 
        $('#btn_ninos_inc').removeAttr('disabled').removeClass('disabled');
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
        $('#ninos').val(sum);
        if (sum<=0) { $('#btn_ninos_dec').attr('disabled',true).addClass('disabled'); }else{ $('#btn_ninos_dec').removeAttr('disabled').removeClass('disabled'); }
    }
    verifica_total_boletos();
});*/

function verifica_total_boletos(){
    var adultos = parseFloat($('#adultos').val());
    //var ninos = parseFloat($('#ninos').val());
    var sum = adultos;
    //var sum_boletos = adultos;
    if (sum==18) {
        $('.incremento').attr('disabled',true).addClass('disabled');
    }
    //$('#boletos').val(sum_boletos);
    //$('#ninos_span').text(ninos);
    //$('#infantes_span').text(infantes);
    /*ajaxCostoBoleto();*/
}

var destino_1=new Array("Toreo");
var destino_2=new Array("Reforma(Diana Corazada)");
var destino_3=new Array("Metro Sevilla");
var destino_4=new Array("Metro Chilpansingo");
var destino_5=new Array("MAC, San Juan del Rio");
var destino_6=new Array("Comer del Estadio");
var destino_7=new Array("Los Arcos");
var destino_8=new Array("Plaza Patio");

var todosDestinos = [
  [],
  destino_1,
  destino_2,
  destino_3,
  destino_4,
  destino_5,
  destino_6,
  destino_7,
  destino_8,
];

function cambia_Destino(){ 
    //tomo el valor del select del pais elegido 
    var origen 
    origen = document.f1.origen[document.f1.origen.selectedIndex].value 
    if (origen != 0) { 
       mis_destinos=todosDestinos[origen]
       num_destino = mis_destinos.length 
       document.f1.destino_Select.length = num_destino 
       for(i=0;i<num_destino;i++){ 
          document.f1.destino_Select.options[i].value=mis_destinos[i] 
          document.f1.destino_Select.options[i].text=mis_destinos[i] 
       }	
    }else{ 
       document.f1.destino_Select.length = 1 
       document.f1.destino_Select.options[0].value = "-" 
       document.f1.destino_Select.options[0].text = "-" 
    } 
    document.f1.destino_Select.options[0].selected = true 
}