document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('#formularioInstante');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault(); 

            if (!formulario.checkValidity()) {
                Swal.fire({
                    title: 'Faltan datos',
                    text: 'Por favor, llena los campos obligatorios (*) y acepta los términos.',
                    icon: 'warning',
                    confirmButtonColor: '#C97C5D',
                    confirmButtonText: 'Entendido'
                });
                return; 
            }

            const lugar = document.querySelector('#lugar').value;
            const sentimiento = document.querySelector('#sentimiento').value;
            const cita = document.querySelector('#cita').value;

            Swal.fire({
                title: '¡Instante guardado! ✨',
                html: `
                    <p>Gracias por compartir lo que sentiste en <b>${lugar}</b>.</p>
                    <p class="fst-italic text-muted">"${sentimiento}"</p>
                    ${cita ? `<p class="mt-3"><small>Frase: ${cita}</small></p>` : ''}
                `,
                icon: 'success',
                confirmButtonColor: '#C97C5D',
                confirmButtonText: 'Qué bonito'
            });

            formulario.reset();
        });
    }
});