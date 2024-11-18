
import { Paciente } from "./paciente";
import { Cliente } from "./cliente";
import { Proveedor } from "./proveedor";
import { RedVeterinaria } from "./redVeterinaria"
import { Veterinaria } from "./sucursalVeterinaria";
import * as rls from 'readline-sync'


//  BIENVENIDOS 

console.error("----------------------------")
console.log (" * BIENVENIDOS * ");


//  MENU DE BIENVENIDA 

let bienvenido : string = rls.question( " Presione la tecla X para ingresar ");
while(true){
    if (bienvenido === "X"){
        console.error("------------------------------");
        console.log("1_ RED DE VETERINARIA");break
        console.log("2_ CLIENTES ");break
        console.log("3_ PACIENTES");break
        console.error ("------------------------------")
    }
}
//provee

const RedVete = new RedVeterinaria();

const proveedor1 = new Proveedor("Roberto Sanchez Dogui", 3386,95565 );
const proveedor2 = new Proveedor("Analia Pedero sabrositos ", 228465325, 45218);
const proveedor3 = new Proveedor("Distribuidora sabatini", 2284556523, 29864);



RedVete.agregarProveedores(proveedor1);
RedVete.agregarProveedores(proveedor2);
RedVete.agregarProveedores(proveedor3);

RedVete.eliminarProveedores(29864);


//veterinaria

const veterinaria = new Veterinaria("huellitas,","perez 455",6456465);

const paciente1 = new Paciente("rocko", "perro",4564,48562);
const paciente2 = new Paciente("Tomm","gato", 4455,7856)
const paciente3 = new Paciente("nina", "Gato",4456,5862);

veterinaria.agregarPaciente(paciente1);
veterinaria.agregarPaciente(paciente2);
veterinaria.agregarPaciente(paciente3);


veterinaria.bajaPaciente(4564);
// Listar 
console.log("Lista de pacientes en el registro:");
console.log(veterinaria.getListaPacientes()); // Llama al método para obtener la lista de vehículos.

/*

import * as rls from 'readline-sync';

import { Vehiculo } from "./Vehiculo";

import { RegistroAutomotor } from "./registroAutomotor";

let registro = new RegistroAutomotor();

let ford: Vehiculo = new Vehiculo("Ford", "Ka", "Hatchback", "Vehículo urbano y compacto");
let motomel: Vehiculo = new Vehiculo("Motomel", "110cc", "Transporte urbano y recreativo", "Motocicleta de calle");
let siena: Vehiculo = new Vehiculo("Fiat", "Siena", "Vehículo familiar y urbano", "Sedán");
let scania: Vehiculo = new Vehiculo("Scania", "R 450", "Transporte de carga pesada", "Camión de larga distancia");

// Agregar vehículos al registro
registro.agregarVehiculo(ford);
registro.agregarVehiculo(motomel);
registro.agregarVehiculo(siena);
registro.agregarVehiculo(scania);

// Listar vehículos
console.log("Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo()); // Llama al método para obtener la lista de vehículos.

// Eliminar vehiculo.

registro.eliminarVehiculo(ford);

console.log("El vehículo eliminado es: " , ford);

console.log(" Vehículo eliminado con exito ");
console.log(registro.getListaVehiculo());

// Vehiculo nuevo.
let fitito: Vehiculo = new Vehiculo("fitito", "m83", "Transporte para pequeños ", " corta distancia");
registro.agregarVehiculo( fitito);


console.log("El vehículo agregado es: " );

// Ingreso de un vehiculo por el usuario.
let marca: string = rls.question("Ingrese la marca del vehículo: ");
let modelo: string = rls.question("Ingrese el modelo del vehículo: ");
let tipo: string = rls.question("Ingrese el tipo del vehículo: ");
let uso: string = rls.question("Ingrese el uso del vehículo: ");

let nuevoVehiculo: Vehiculo = new Vehiculo(marca, modelo, tipo, uso);

// Agregar el nuevo vehículo al registro
registro.agregarVehiculo(nuevoVehiculo);

console.log("Vehículo agregado:");
console.log(registro.getListaVehiculo());
*/

import * as readlineSync from 'readline-sync';


import { cargarCliente, crearCliente, crearNumRandom, existeId, cargarProveedor, crearProveedor, modificarProveedor, borrarProveedor, cargarPaciente, crearPaciente, cargarVeterinarias, crearVeterinaria, modificarVeterinaria, eliminarVeterinaria, borrarCliente, modificarNombreCliente, modificarTelefonoCliente, eliminarPaciente, modificarPaciente } from './helper';


import Cliente from './class/cliente';
import Paciente from './class/paciente';
import Proveedor from './class/proveedores';
import Veterinaria from './class/veterinaria';
import Sucursales from './class/sucursales';




//----------------------------CLIENTES----------------------




//Funcion para cargar un nuevo Cliente

console.log("CARGAR UN NUEVO CLIENTE")
let listaClientes: Cliente[] = [];
crearCliente(listaClientes);
console.table(listaClientes);

//Funciones eliminar, modificar

console.log("ELIMINAR UN CLIENTE");
borrarCliente(listaClientes);
console.log("MODIFICAR DATOS DE CLIENTES")
modificarNombreCliente(listaClientes);
modificarTelefonoCliente(listaClientes);
console.table(listaClientes);

//-------------------PACIENTES---------------


let listaGeneralMascotas: Paciente []=[];

//Funcion para cargar un nuevo Paciente

console.info("CARGAR UN NUEVO PACIENTE");
crearPaciente(listaClientes, listaGeneralMascotas);
console.log(listaGeneralMascotas);

//Funciones eliminar

console.info("ELIMINAR PACIENTE");

eliminarPaciente(listaClientes,listaGeneralMascotas);

console.log("MODIFICAR PACIENTE");
modificarPaciente(listaClientes,listaGeneralMascotas);

//------------------------VETERINARIAS------------------




//Funcion para cargar un nuevo Veterinaria
console.info("CARGAR UNA NUEVA VETERINARIA");
let arregloVeterinarias: Veterinaria[] = []
crearVeterinaria(arregloVeterinarias, listaClientes, listaGeneralMascotas);

//Funciones eliminar, modificar
console.log("ELIMINAR UNA VETERIANARIA");
eliminarVeterinaria(arregloVeterinarias, 3);
console.log("MODIFICAR UNA VETERIANARIA");
modificarVeterinaria(arregloVeterinarias, 1, listaClientes, listaGeneralMascotas);


//----------------------PROVEDORES--------------------------



//Funcion para cargar un nuevo Proveedor 

console.info("CARGAR UN NUEVO PROVEEDOR");
let arregloProveedores: Proveedor[] = [];
crearProveedor(arregloProveedores);

//Funciones eliminar, modificar Proveedor

console.info("ELIMINAR UN PROVEEDOR")
borrarProveedor(arregloProveedores);
console.info("MODIFICAR UN PROVEEDOR")
modificarProveedor(arregloProveedores, 2);
