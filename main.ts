
import { Paciente } from "./paciente";
import { Cliente } from "./cliente";
import { Proveedor } from "./proveedor";
import { RedVeterinaria } from "./redVeterinaria"
import { Veterinaria } from "./sucursalVeterinaria";
import { crearId } from "./sucursalVeterinaria";






import { crearPaciente,crearCliente,borrarCliente, modificarNombreCliente, modificarTelefonoCliente, eliminarPaciente, modificarPaciente } from './sucursalVeterinaria';
import { crearProveedor, modificarProveedor, borrarProveedor,crearVeterinaria, modificarVeterinaria, eliminarVeterinaria} from './redVeterinaria';




//----------------------------CLIENTES----------------------
/*let Paciente= new Paciente("matias",45455,565);

let ListaPaciente = new Paciente("Ford", "gato",2);
let  = new Moto("Gilera", "Smash Tunnig", 2022, "Azul");
let siena: Auto= new Auto("Fiat", "Siena", 2019, "Gris", 5);

let scania: Camion = new Camion

("Scania", "R 450",2011, "Blanco");


*/

//Funcion para cargar un nuevo Cliente

console.log("CARGAR UN NUEVO CLIENTE")
let listaClientes: Cliente[] = [];
crearCliente(listaClientes);
crearCliente(listaClientes);
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
