// BANCO LGGV

let cuentas = [
    {nombre: `Mali`, nip: 1111, saldo: 200},
    {nombre: `Gera`, nip: 2222, saldo: 290},
    {nombre: `Mauri`, nip: 3333, saldo: 67},
];

let indexCuenta;

function consultarSaldo() {
    alert(`Saldo: $${cuentas[indexCuenta].saldo}`);
}

function ingresarMonto() {
    let montoIngresar = parseInt(prompt(`Monto a ingresar: $`));

    if (!isNaN(montoIngresar) && montoIngresar > 0) {
        let nuevoSaldo = cuentas[indexCuenta].saldo + montoIngresar;

        if (nuevoSaldo <= 990) {
            cuentas[indexCuenta].saldo = nuevoSaldo;
            alert(`Nuevo saldo: $${cuentas[indexCuenta].saldo}`);
        } else {
            alert('El monto ingresado excede el límite de saldo permitido ($990).');
        }
    } else {
        alert('Por favor, ingrese un monto válido mayor a cero.');
    }
}

function retirarMonto() {
    let montoRetirar = parseInt(prompt(`Monto a retirar: $`));

    if (!isNaN(montoRetirar) && montoRetirar > 0) {
        if (montoRetirar <= cuentas[indexCuenta].saldo && cuentas[indexCuenta].saldo - montoRetirar >= 10) {
            cuentas[indexCuenta].saldo -= montoRetirar;
            alert(`Nuevo saldo: $${cuentas[indexCuenta].saldo}`);
        } else {
            alert('El monto a retirar excede el saldo actual o viola la regla de negocio.');
        }
    } else {
        alert('Por favor, ingrese un monto válido mayor a cero.');
    }
}

function mostrarOpciones(indexCuenta) {  // Reemplazar los inputs por botones
    let formulario = document.querySelector('.hijo-cont');
    formulario.innerHTML = 
        `<h2>Bienvenid@ ${cuentas[indexCuenta].nombre}</h2>
        <button onclick="consultarSaldo()">Consultar Saldo</button>
        <button onclick="ingresarMonto()">Ingresar Monto</button>
        <button onclick="retirarMonto()">Retirar Monto</button>`;
}

function bank() {
    let cliente = document.querySelector('.cl1');
    let nip = document.querySelector('.nip1');
    let sal = document.querySelector('.sal1');

    let cliente1 = cliente.value.trim();
    let nip1 = parseInt(nip.value.trim());

    indexCuenta = cuentas.indexOf(cuentas.find(function(cuenta) {
        return cuenta.nombre === cliente1 && cuenta.nip === nip1;
    }));

    if(indexCuenta != -1) { 
        mostrarOpciones(indexCuenta);
    } else {
        alert('Ups! El numero de cliente o NIP son incorrectos, intente nuevamente.');
    }
}