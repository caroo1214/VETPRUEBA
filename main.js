"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paciente_1 = require("./paciente");
var proveedor_1 = require("./proveedor");
var redVeterinaria_1 = require("./redVeterinaria");
var sucursalVeterinaria_1 = require("./sucursalVeterinaria");
var rls = require("readline-sync");
//  BIENVENIDOS 
console.error("----------------------------");
console.log(" * BIENVENIDOS * ");
//  MENU DE BIENVENIDA 
var bienvenido = rls.question(" Presione la tecla X para ingresar ");
while (true) {
    if (bienvenido === "X") {
        console.error("------------------------------");
        console.log("1_ RED DE VETERINARIA");
        break;
        console.log("2_ CLIENTES ");
        break;
        console.log("3_ PACIENTES");
        break;
        console.error("------------------------------");
    }
}
//provee
var RedVete = new redVeterinaria_1.RedVeterinaria();
var proveedor1 = new proveedor_1.Proveedor("Roberto Sanchez Dogui", 3386, 95565);
var proveedor2 = new proveedor_1.Proveedor("Analia Pedero sabrositos ", 228465325, 45218);
var proveedor3 = new proveedor_1.Proveedor("Distribuidora sabatini", 2284556523, 29864);
RedVete.agregarProveedores(proveedor1);
RedVete.agregarProveedores(proveedor2);
RedVete.agregarProveedores(proveedor3);
RedVete.eliminarProveedores(29864);
//veterinaria
var veterinaria = new sucursalVeterinaria_1.Veterinaria("huellitas,", "perez 455", 6456465);
var paciente1 = new paciente_1.Paciente("rocko", "perro", 4564, 48562);
var paciente2 = new paciente_1.Paciente("Tomm", "gato", 4455, 7856);
var paciente3 = new paciente_1.Paciente("nina", "Gato", 4456, 5862);
veterinaria.agregarPaciente(paciente1);
veterinaria.agregarPaciente(paciente2);
veterinaria.agregarPaciente(paciente3);
veterinaria.bajaPaciente(4564);
// Listar 
console.log("Lista de pacientes en el registro:");
console.log(veterinaria.getListaPacientes()); // Llama al método para obtener la lista de vehículos.
var helper_1 = require("./helper");
//----------------------------CLIENTES----------------------
//Funcion para cargar un nuevo Cliente
console.log("CARGAR UN NUEVO CLIENTE");
var listaClientes = [];
(0, helper_1.crearCliente)(listaClientes);
console.table(listaClientes);
//Funciones eliminar, modificar
console.log("ELIMINAR UN CLIENTE");
(0, helper_1.borrarCliente)(listaClientes);
console.log("MODIFICAR DATOS DE CLIENTES");
(0, helper_1.modificarNombreCliente)(listaClientes);
(0, helper_1.modificarTelefonoCliente)(listaClientes);
console.table(listaClientes);
//-------------------PACIENTES---------------
var listaGeneralMascotas = [];
//Funcion para cargar un nuevo Paciente
console.info("CARGAR UN NUEVO PACIENTE");
(0, helper_1.crearPaciente)(listaClientes, listaGeneralMascotas);
console.log(listaGeneralMascotas);
//Funciones eliminar
console.info("ELIMINAR PACIENTE");
(0, helper_1.eliminarPaciente)(listaClientes, listaGeneralMascotas);
console.log("MODIFICAR PACIENTE");
(0, helper_1.modificarPaciente)(listaClientes, listaGeneralMascotas);
//------------------------VETERINARIAS------------------
//Funcion para cargar un nuevo Veterinaria
console.info("CARGAR UNA NUEVA VETERINARIA");
var arregloVeterinarias = [];
(0, helper_1.crearVeterinaria)(arregloVeterinarias, listaClientes, listaGeneralMascotas);
//Funciones eliminar, modificar
console.log("ELIMINAR UNA VETERIANARIA");
(0, helper_1.eliminarVeterinaria)(arregloVeterinarias, 3);
console.log("MODIFICAR UNA VETERIANARIA");
(0, helper_1.modificarVeterinaria)(arregloVeterinarias, 1, listaClientes, listaGeneralMascotas);
//----------------------PROVEDORES--------------------------
//Funcion para cargar un nuevo Proveedor 
console.info("CARGAR UN NUEVO PROVEEDOR");
var arregloProveedores = [];
(0, helper_1.crearProveedor)(arregloProveedores);
//Funciones eliminar, modificar Proveedor
console.info("ELIMINAR UN PROVEEDOR");
(0, helper_1.borrarProveedor)(arregloProveedores);
console.info("MODIFICAR UN PROVEEDOR");
(0, helper_1.modificarProveedor)(arregloProveedores, 2);
