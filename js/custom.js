// google map
var map = '';
var center;

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("#logo").removeClass("active");
            $("#logo2").removeClass("active");
        } else {
            $("#logo").addClass("active");
            $("#logo2").addClass("active");
        }
    });

    /*$(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $("#menuPrincipalTecno").removeClass("active");
        } else {
            $("#menuPrincipalTecno").addClass("active");
        }
    });*/

  
        $('.clickEnlace').on('click', function (e){
            e.preventDefault();
            if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields){
                for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");
            }
        })

        /*$('#sl2').on('click', function (e){
            $("#carrusellinea").addClass("wow fadeInRight animated");
        })

        $('#sl3').on('click', function (e){
            $("#carruselscaneo").addClass("wow fadeInRight animated");
        })

        $('#sl4').on('click', function (e){
            $("#carruseldocumentos").addClass("wow fadeInRight animated");
        })*/



            // CONTACT FORM
    $("#contact-form").submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        //var subject = $("#cf-subject").val();
        var message = $("#message").val();
        var datos = new FormData();
         datos.append("nombre", name);
         datos.append("correo",email);
         //datos.append("titulo",subject);
         datos.append("mensaje",message);
      
       // var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
  
        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
           console.log("Si entro al submit");
            $.ajax({
                method: "POST",
                url: "php/correo.php",
                data: datos,
                cache: false,
                contentType: false,
                processData: false,
                success: function (respuesta) {
                    //console.log(respuesta);
                    $('.text-success').fadeIn(1000);
                    $('.text-danger').fadeOut(500);
                }
            });
        }
        else {
            //console.log("No entro");
            $('.text-danger').fadeIn(1000);
            $('.text-success').fadeOut(500);
        }
        return false;
      });


       

    function hacerClic(){
        if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)
        for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");
    }
    
//Este codigo me sirve para cuando se carga la pagina y optener las dimensiones
function pantallainicio(){
    $("#carruselmovil").addClass("wow fadeInRight animated");
    $("#carruseldocumentos").addClass("wow fadeInRight animated");
    $("#carruselscaneo").addClass("wow fadeInRight animated");
    $("#carrusellinea").addClass("wow fadeInRight animated");
    $("#sl1").addClass("claseFondoPrueba1");
    /*var alto=$(window).height();*/
    var ancho=$(window).width();
    //alert(alto+ancho)

    if(ancho<=1003){
        $("#divlogo2").css('display', 'none');
    }else if(ancho>=1004){
        $("#divlogo2").css('display', 'block');
    }

    /*if (screen.width<=544) 
    {
        $("#idParaDimensiones").addClass("claseDimensionPequena");
        $("#idParaDimensiones").removeClass("claseDimensionGrande");
    }
    else 
       if (screen.width<=1280) {

       }
       else 
        if(screen.width>=1281){
            $("#idParaDimensiones").removeClass("claseDimensionPequena");
            $("#idParaDimensiones").addClass("claseDimensionGrande");
        }*/
}
//Este codigo me sirve para las dimensiones de la pantalla
$(window).resize(function() {
    var alto=$(window).height();
    var ancho=$(window).width();
    var ancho2=screen.width;
    if(ancho<=1003){
        $("#divlogo2").css('display', 'none');
    }else if(ancho>=1004){
        $("#divlogo2").css('display', 'block');
    }
});

$("#slider-principal").change(function(){
    console.log("Hola");
});

var pruebaSlide=0;
var idx=1;
/*$("#slider-principal").on('slide.bs.carousel',function(e){
    //$('#slider-principal .active').removeClass('active');
    // idx = $('#slider-principal .item .active').index();
    idx=$(this).find('.item .active');
     console.log(e.relatedTarget);
    //console.log(e.number)
     //console.log(idx)
});*/

$('#slider-principal').on('slide.bs.carousel', function () {
    //console.log(idx);

    $('#sl1').on('click', function (e){
        $("#sl1").addClass("claseFondoPrueba1");
        $("#sl2").removeClass("claseFondoPrueba2");
        $("#sl3").removeClass("claseFondoPrueba3");
        $("#sl4").removeClass("claseFondoPrueba4");

        /*$("#sl1").removeClass("claseSl1");
        $("#sl2").addClass("claseSl2");
        $("#sl3").addClass("claseSl3");
        $("#sl4").addClass("claseSl4");*/
        
        idx=0;
        console.log(idx)
    })

    $('#sl2').on('click', function (e){
        $("#sl1").removeClass("claseFondoPrueba1");
        $("#sl2").addClass("claseFondoPrueba2");
        $("#sl3").removeClass("claseFondoPrueba3");
        $("#sl4").removeClass("claseFondoPrueba4");

       /* $("#sl1").addClass("claseSl1");
        $("#sl2").removeClass("claseSl2");
        $("#sl3").addClass("claseSl3");
        $("#sl4").addClass("claseSl4");*/

        idx=1;
        //console.log(idx)
    })

    $('#sl3').on('click', function (e){
        $("#sl1").removeClass("claseFondoPrueba1");
        $("#sl2").removeClass("claseFondoPrueba2");
        $("#sl3").addClass("claseFondoPrueba3");
        $("#sl4").removeClass("claseFondoPrueba4");
        idx=2;
        //console.log(idx)
    })

    $('#sl4').on('click', function (e){
        $("#sl1").removeClass("claseFondoPrueba1");
        $("#sl2").removeClass("claseFondoPrueba2");
        $("#sl3").removeClass("claseFondoPrueba3");
        $("#sl4").addClass("claseFondoPrueba4");
        idx=3;
        //console.log(idx)
    })

switch(idx){
    case 0:
        $("#sl1").removeClass("claseSl1");
        $("#sl2").addClass("claseSl2");
        $("#sl3").addClass("claseSl3");
        $("#sl4").addClass("claseSl4");

        $("#sl1").addClass("claseFondoPrueba1");
        $("#sl2").removeClass("claseFondoPrueba2");
        $("#sl3").removeClass("claseFondoPrueba3");
        $("#sl4").removeClass("claseFondoPrueba4");
        //console.log(idx)
    break;
    case 1:
        $("#sl1").addClass("claseSl1");
        $("#sl2").removeClass("claseSl2");
        $("#sl3").addClass("claseSl3");
        $("#sl4").addClass("claseSl4");
    
        $("#sl1").removeClass("claseFondoPrueba1");
        $("#sl2").addClass("claseFondoPrueba2");
        $("#sl3").removeClass("claseFondoPrueba3");
        $("#sl4").removeClass("claseFondoPrueba4");
    break;
    case 2:
        $("#sl1").addClass("claseSl1");
        $("#sl2").addClass("claseSl2");
        $("#sl3").removeClass("claseSl3");
        $("#sl4").addClass("claseSl4");

        $("#sl1").removeClass("claseFondoPrueba1");
        $("#sl2").removeClass("claseFondoPrueba2");
        $("#sl3").addClass("claseFondoPrueba3");
        $("#sl4").removeClass("claseFondoPrueba4");
    break;
    case 3:
        $("#sl1").addClass("claseSl1");
        $("#sl2").addClass("claseSl2");
        $("#sl3").addClass("claseSl3");
        $("#sl4").removeClass("claseSl4");

        $("#sl1").removeClass("claseFondoPrueba1");
        $("#sl2").removeClass("claseFondoPrueba2");
        $("#sl3").removeClass("claseFondoPrueba3");
        $("#sl4").addClass("claseFondoPrueba4");
    break;
}

    idx=idx+1;
    
    if(idx==4){
        idx=0;
    }
    // do something…
  
  })


//$('#slider-principal').bind('slid', function() {

    // remueve clase active
  //  $('.carousel-linked-nav .active').removeClass('active');

    // obtiene el indice del elemento activo
    // idx = $('#myCarousel .item.active').index();
//console.log(idx)
    // selecciona el elemento activo y le agrega la clase active
   // $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

//});

/*$('#myCarousel').bind('slid', function() {
    var idx = $('#slider-principal .item .active').index();
    console.log(idx)
});*/

function initialize() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(40.7679619, -73.9800172),
        scrollwheel: false
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
    center = map.getCenter();
}

function loadGoogleMap() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}
// Flexslider
$(function() {

   /* var idslide=0;

    var barra = document.getElementById("slider-principal");
    barra.addEventListener("change",function(ev){
        console.log(idslide);
        idslide=idslide+1;
    
        if(idslide=4){
            idslide=0;
        }
        
    });*/

    

    /* FlexSlider */
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false
    });
    new WOW().init();
    // Magnific Pop up for Portfolio section
    $('.portfolio-container').magnificPopup({
        delegate: '.portfolio-popup', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: false
        }
    });
    loadGoogleMap();
});
// isotope
jQuery(document).ready(function($) {
    if ($('.iso-box-wrapper').length > 0) {
        var $container = $('.iso-box-wrapper'),
            $imgs = $('.iso-box img');
        $container.imagesLoaded(function() {
            $container.isotope({
                layoutMode: 'fitRows',
                itemSelector: '.iso-box'
            });
            $imgs.load(function() {
                $container.isotope('reLayout');
            })
        });
        //filter items on button click
        $('.filter-wrapper li a').click(function() {
            var $this = $(this),
                filterValue = $this.attr('data-filter');
            $container.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            // don't proceed if already selected 
            if ($this.hasClass('selected')) {
                return false;
            }
            var filter_wrapper = $this.closest('.filter-wrapper');
            filter_wrapper.find('.selected').removeClass('selected');
            $this.addClass('selected');
            return false;
        });
    }
});
// Hide mobile menu after clicking on a link
$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar-default a, a,').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 68
        }, 1000);
        event.preventDefault();
    });
});