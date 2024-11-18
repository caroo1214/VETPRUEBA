"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
exports.crearProveedor = crearProveedor;
exports.modificarProveedor = modificarProveedor;
exports.borrarProveedor = borrarProveedor;
exports.crearVeterinaria = crearVeterinaria;
exports.modificarVeterinaria = modificarVeterinaria;
exports.eliminarVeterinaria = eliminarVeterinaria;
var proveedor_1 = require("./proveedor");
var sucursalVeterinaria_1 = require("./sucursalVeterinaria");
var sucursalVeterinaria_2 = require("./sucursalVeterinaria");
var readlineSync = require("readline-sync");
/*Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
 ● Sucursales de Veterinarias ● Clientes ● Pacientes (mascotas) ● Proveedores  */
//Clase RedVeterinarias
var RedVeterinaria = /** @class */ (function () {
    //constructor
    function RedVeterinaria() {
        this.veterinarias = [];
        this.proveedores = [];
    }
    //getters
    RedVeterinaria.prototype.getVeterinarias = function () {
        return this.veterinarias;
    };
    RedVeterinaria.prototype.getProveedores = function () {
        return this.proveedores;
    };
    //setters
    RedVeterinaria.prototype.setVeterinarias = function (veterinarias) {
        this.veterinarias = veterinarias;
    };
    RedVeterinaria.prototype.setProveedores = function (proveedores) {
        this.proveedores = proveedores;
    };
    return RedVeterinaria;
}());
exports.RedVeterinaria = RedVeterinaria;
//------------------FUNCIONES PARA PROVEEDORES--
//Funcion para crear nuevo Proveedor
function crearProveedor(arrProveedor) {
    var nombre = readlineSync.question("Ingrese nombre y apellido del proveedor: ");
    var telefono = readlineSync.questionInt("Ingrese el telefono del proveedor: ");
    var id = (0, sucursalVeterinaria_2.crearNumRandom)(1000);
    while ((0, sucursalVeterinaria_2.existeId)(arrProveedor, id) == true) {
        id = (0, sucursalVeterinaria_2.crearNumRandom)(1000);
    }
    var nuevoProveedor = new proveedor_1.Proveedor(nombre, telefono, id);
    arrProveedor.push(nuevoProveedor);
    console.log(arrProveedor);
}
//Funcion para modificar proveedor
function modificarProveedor(arregloProveedores, posicion) {
    var nombre = readlineSync.question("Ingrese el nombre modificado: ");
    var telefono = readlineSync.questionInt("Ingrese el nuevo telefono: ");
    var id = arregloProveedores[posicion].getId();
    var proveedorModificado = new proveedor_1.Proveedor(nombre, telefono, id);
    delete arregloProveedores[posicion];
    arregloProveedores[posicion] = proveedorModificado;
    console.log(arregloProveedores);
}
//Funcion para borrar Proveedor 
function borrarProveedor(proveedor) {
    var deleteId = readlineSync.questionInt("Ingrese Id a Eliminar: ");
    for (var i = 0; i < proveedor.length; i++) {
        if (deleteId === proveedor[i].getId()) {
            proveedor.splice(i, 1);
            console.log("Se elimino Proveedor con id ingresado");
        }
    }
    console.log(proveedor);
}
// Funciones para Veterinarias------------
//Crear Veterinaria
function crearVeterinaria(arrVeterinaria, arrClientes, arrPacientes) {
    var nombre = readlineSync.question("Ingrese el nombre de la veterinaria: ");
    var direccion = readlineSync.question("ingrese dirección: ");
    var id = (0, sucursalVeterinaria_2.crearNumRandom)(1000);
    while ((0, sucursalVeterinaria_2.existeId)(arrVeterinaria, id) == true) {
        id = (0, sucursalVeterinaria_2.crearNumRandom)(1000);
    }
    var listaClientes = arrClientes;
    var listaGeneralMascotas = arrPacientes;
    var nuevaVeterinaria = new sucursalVeterinaria_1.Veterinaria(nombre, direccion, id, listaClientes, listaGeneralMascotas);
    arrVeterinaria.push(nuevaVeterinaria);
    console.log(arrVeterinaria);
}
//Modificar veterinaria
function modificarVeterinaria(arrVeterinarias, posicion, arrClientes, arrPacientes) {
    var nombre = readlineSync.question("Ingrese el nuevo nombre: ");
    var direccion = readlineSync.question("ingrese nueva dirección: ");
    var id = arrVeterinarias[posicion].getId();
    var veterinariaModificada = new sucursalVeterinaria_1.Veterinaria(nombre, direccion, id, arrClientes, arrPacientes);
    arrVeterinarias[posicion] = veterinariaModificada;
    console.log(arrVeterinarias);
}
//Funcion Borrar Veterinaria  
function eliminarVeterinaria(arrVeterinarias, id) {
    for (var i = 0; i < arrVeterinarias.length; i++) {
        if (id === arrVeterinarias[i].getId()) {
            arrVeterinarias.splice(i, 1);
        }
    }
    console.log(arrVeterinarias);
}
