$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 4, // Muestra 4 elementos a la vez
        slidesToScroll: 1, // Avanza de 1 en 1
        autoplay: true, // Inicia el carrusel automáticamente
        autoplaySpeed: 2000, // Velocidad de cambio de diapositivas en milisegundos
        responsive: [
            {
                breakpoint: 768, // Cambia la configuración en dispositivos con un ancho máximo de 768px
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, // Cambia la configuración en dispositivos con un ancho máximo de 480px
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

function comprarComic(comic) {
    // Ocultar los cómics y mostrar el formulario de compra
    document.querySelectorAll('.comic').forEach(function(element) {
        element.style.display = 'none';
    });
    document.getElementById('formularioCompra').style.display = 'block';
    
    // Establecer el nombre del cómic seleccionado en el formulario
    document.getElementById('nombreComic').value = comic;
}

function volverPaginaPrincipal() {
     window.location.href = "http://127.0.0.1:5500/Assets/Comics_Sharingann.html";
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Aquí podrías enviar los datos del formulario a un servidor para procesar la compra
    // En este ejemplo, simplemente mostramos el mensaje de agradecimiento y reiniciamos el formulario
    document.getElementById('formularioCompra').style.display = 'none';
    document.getElementById('agradecimiento').style.display = 'block';
    document.getElementById('formulario').reset();
});
