"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sucursalVeterinaria_1 = require("./sucursalVeterinaria");
var redVeterinaria_1 = require("./redVeterinaria");
//----------------------------CLIENTES----------------------
//Funcion para cargar un nuevo Cliente
console.log("CARGAR UN NUEVO CLIENTE");
var listaClientes = [];
(0, sucursalVeterinaria_1.crearCliente)(listaClientes);
console.table(listaClientes);
//Funciones eliminar, modificar
console.log("ELIMINAR UN CLIENTE");
(0, sucursalVeterinaria_1.borrarCliente)(listaClientes);
console.log("MODIFICAR DATOS DE CLIENTES");
(0, sucursalVeterinaria_1.modificarNombreCliente)(listaClientes);
(0, sucursalVeterinaria_1.modificarTelefonoCliente)(listaClientes);
console.table(listaClientes);
//-------------------PACIENTES---------------
var listaGeneralMascotas = [];
//Funcion para cargar un nuevo Paciente
console.info("CARGAR UN NUEVO PACIENTE");
(0, sucursalVeterinaria_1.crearPaciente)(listaClientes, listaGeneralMascotas);
console.log(listaGeneralMascotas);
//Funciones eliminar
console.info("ELIMINAR PACIENTE");
(0, sucursalVeterinaria_1.eliminarPaciente)(listaClientes, listaGeneralMascotas);
console.log("MODIFICAR PACIENTE");
(0, sucursalVeterinaria_1.modificarPaciente)(listaClientes, listaGeneralMascotas);
//------------------------VETERINARIAS------------------
//Funcion para cargar un nuevo Veterinaria
console.info("CARGAR UNA NUEVA VETERINARIA");
var arregloVeterinarias = [];
(0, redVeterinaria_1.crearVeterinaria)(arregloVeterinarias, listaClientes, listaGeneralMascotas);
//Funciones eliminar, modificar
console.log("ELIMINAR UNA VETERIANARIA");
(0, redVeterinaria_1.eliminarVeterinaria)(arregloVeterinarias, 3);
console.log("MODIFICAR UNA VETERIANARIA");
(0, redVeterinaria_1.modificarVeterinaria)(arregloVeterinarias, 1, listaClientes, listaGeneralMascotas);
//----------------------PROVEDORES--------------------------
//Funcion para cargar un nuevo Proveedor 
console.info("CARGAR UN NUEVO PROVEEDOR");
var arregloProveedores = [];
(0, redVeterinaria_1.crearProveedor)(arregloProveedores);
//Funciones eliminar, modificar Proveedor
console.info("ELIMINAR UN PROVEEDOR");
(0, redVeterinaria_1.borrarProveedor)(arregloProveedores);
console.info("MODIFICAR UN PROVEEDOR");
(0, redVeterinaria_1.modificarProveedor)(arregloProveedores, 2);
