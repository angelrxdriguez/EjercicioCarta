$(document).ready(() => {
    const personas = [
        {
            nombre: "Juan",
            apellidos: "García Pérez",
            descripcion: "juan juanito juan, juanito el golondrina amigo de los gallos y de las gallinas",
            imagen: "juan.jpg"
        },
        {
            nombre: "Maria",
            apellidos: "López Sánchez",
            descripcion: "Mari Carmen, Mari Carmen, tuuuuu hijo esta en el afterhour",
            imagen: "maria.jpg"
        },
        {
            nombre: "Carlos",
            apellidos: "Martínez Rodríguez",
            descripcion: "Carlos el de los ,,,, que no tio estas loco o que",
            imagen: "persona.png"
        },
        {
            nombre: "Jarfaiter",
            apellidos: "Muy Loco",
            descripcion: "Dios este tio esta muy loco, no le vendais nada por favor",
            imagen: "jarfa.jpg"
        },
        {
            nombre: "Midas",
            apellidos: "Alonso Sánchez",
            descripcion: "Mari Carmen, Mari Carmen, tuuuuu hijo esta en el afterhour",
            imagen: "midas.jpg"
        },
        {
            nombre: "Mariano",
            apellidos: "Rajoy Killer",
            descripcion: "Si quieres leña Aitor, te dejaré mi tractor",
            imagen: "mariano.jpg"
        }
    ];

    const listaPersonas = $('#lista-personas');
    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
        const elementoPersona = $('<div class="persona">');
        elementoPersona.append('<img src="' + persona.imagen +'"class=imgC'+'>');
        elementoPersona.append('<h2>' + persona.nombre + ' ' + persona.apellidos + '</h2>');
        elementoPersona.append('<p>' + persona.descripcion + '</p>');
        listaPersonas.append(elementoPersona);
    }
});
$(document).ready(() => {
    const personas = [
        {
            nombre: "Juan",
            apellidos: "García Pérez",
            descripcion: "juan juanito juan, juanito el golondrina amigo de los gallos y de las gallinas",
            imagen: "juan.jpg"
        },
        {
            nombre: "Maria",
            apellidos: "López Sánchez",
            descripcion: "Mari Carmen, Mari Carmen, tuuuuu hijo esta en el afterhour",
            imagen: "maria.jpg"
        },
        {
            nombre: "Carlos",
            apellidos: "Martínez Rodríguez",
            descripcion: "Carlos el de los ,,,, que no tio estas loco o que",
            imagen: "persona.png"
        }
    ];

    const listaPersonas = $('#lista-personas');

    function filtrarPersonas(termino) {
        listaPersonas.find('.persona').each(function() {
            const nombrePersona = $(this).find('h2').text();
            if (nombrePersona.toLowerCase().includes(termino.toLowerCase())) {
                $(this).show(); 
            } else {
                $(this).hide(); 
            }
        });
    }

    $('#textoInput').on('input', function() {
        const terminoBusqueda = $(this).val();
        filtrarPersonas(terminoBusqueda);
    });

    filtrarPersonas('');
});