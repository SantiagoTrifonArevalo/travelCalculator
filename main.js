// Función para calcular el coste total del viaje
function calcularCoste() {
    const nochesHotel = parseInt(document.getElementById('noches').value);
    const ciudadSeleccionada = document.getElementById('ciudad').value;
    const diasAlquilerCoche = parseInt(document.getElementById('diasAlquiler').value);

    const costeHotelTotal = costeHotel(nochesHotel);
    const costeAvionTotal = costeAvion(ciudadSeleccionada, nochesHotel);
    const costeCocheTotal = costeCoche(diasAlquilerCoche);

    const costeTotal = costeHotelTotal + costeAvionTotal + costeCocheTotal;
    pintarResultado(costeTotal);
}

// Función para calcular el coste total del hotel
function costeHotel(noches) {
    return noches * 140;
}

// Función para calcular el coste total del avión
function costeAvion(ciudad, noches) {
    const costesCiudad = {
        barcelona: 90,
        madrid: 90,
        sevilla: 50,
        valencia: 40,
    };

    let costeTotalAvion = costesCiudad[ciudad.toLowerCase()] * noches;

    if (noches > 3) {
        costeTotalAvion *= 0.9; // 10% de descuento
    }

    return costeTotalAvion;
}

// Función para calcular el coste total del alquiler de coche
function costeCoche(dias) {
    let costeTotalCoche = dias * 40;

    if (dias >= 7) {
        costeTotalCoche -= 50; // Descuento de 50€
    } else if (dias >= 3) {
        costeTotalCoche -= 20; // Descuento de 20€
    }

    return costeTotalCoche;
}

// Función para pintar el resultado en el DOM
function pintarResultado(costeTotal) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Coste: ${costeTotal}€`;
}

// Agregar un evento para manejar el envío del formulario
const form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'center';
document.body.appendChild(form);

const labelCiudad = document.createElement('label');
labelCiudad.textContent = 'Ciudad:';
form.appendChild(labelCiudad);

const select = document.createElement('select');
select.id = 'ciudad';
form.appendChild(select);

const ciudades = ['Barcelona', 'Madrid', 'Sevilla', 'Valencia'];
ciudades.forEach((ciudad) => {
    const option = document.createElement('option');
    option.value = ciudad.toLowerCase();
    option.textContent = ciudad;
    select.appendChild(option);
});

const labelNoches = document.createElement('label');
labelNoches.textContent = 'Número de noches de hotel:';
form.appendChild(labelNoches);

const inputNoches = document.createElement('input');
inputNoches.type = 'number';
inputNoches.id = 'noches';
inputNoches.placeholder = 'Número de noches';
form.appendChild(inputNoches);

const labelDiasAlquiler = document.createElement('label');
labelDiasAlquiler.textContent = 'Número de días de alquiler de coche:';
form.appendChild(labelDiasAlquiler);

const inputDiasAlquiler = document.createElement('input');
inputDiasAlquiler.type = 'number';
inputDiasAlquiler.id = 'diasAlquiler';
inputDiasAlquiler.placeholder = 'Número de días de alquiler de coche';
form.appendChild(inputDiasAlquiler);

const button = document.createElement('button');
button.type = 'button';
button.textContent = 'Calcular coste';
form.appendChild(button);

const resultado = document.createElement('div');
resultado.textContent = 'Coste: 0€';
resultado.id = 'resultado';
form.appendChild(resultado);

button.addEventListener('click', calcularCoste);