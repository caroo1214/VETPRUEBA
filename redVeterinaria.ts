import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
import { Proveedor } from "./proveedor";
import { Veterinaria } from "./sucursalVeterinaria";
import { existeId, crearNumRandom} from "./sucursalVeterinaria";


import * as readlineSync from 'readline-sync';

/*Nuestro cliente es una red de veterinarias y desea poder acceder a la siguiente información:
 ● Sucursales de Veterinarias ● Clientes ● Pacientes (mascotas) ● Proveedores  */

  //Clase RedVeterinarias

  export  class RedVeterinaria{

    private veterinarias: Veterinaria [];
    private proveedores:  Proveedor [];


//constructor
    public constructor(){
        this.veterinarias =[];
        this.proveedores = [];
    }

    //getters
    public getVeterinarias() :Veterinaria []{
        return this.veterinarias;
    }
    
    public getProveedores() : Proveedor []{
        return this.proveedores;
    }

  
    //setters
    public setVeterinarias(veterinarias: Veterinaria[]) : void {
        this.veterinarias = veterinarias;

    }
    
    public setProveedores(proveedores: Proveedor []) {
        this.proveedores = proveedores;
    
  }

  }

//------------------FUNCIONES PARA PROVEEDORES--


//Funcion para crear nuevo Proveedor

export function crearProveedor(arrProveedor: Proveedor[]){
  let nombre: string = readlineSync.question("Ingrese nombre y apellido del proveedor: ");
  let telefono: number = readlineSync.questionInt("Ingrese el telefono del proveedor: ");
    
  let id: number = crearNumRandom(1000);
  while(existeId(arrProveedor,id)==true){
    id=crearNumRandom(1000);
  }

  let nuevoProveedor: Proveedor = new Proveedor(nombre, telefono, id);
  arrProveedor.push(nuevoProveedor);
  console.log(arrProveedor);
}


//Funcion para modificar proveedor
export function modificarProveedor(arregloProveedores: Proveedor[], posicion: number){
  let nombre: string = readlineSync.question("Ingrese el nombre modificado: ");
  let telefono: number = readlineSync.questionInt("Ingrese el nuevo telefono: ");
  let id: number = arregloProveedores[posicion].getId()
  
  let proveedorModificado: Proveedor = new Proveedor(nombre, telefono, id)
  delete arregloProveedores[posicion]
  arregloProveedores[posicion] = proveedorModificado;
  console.log(arregloProveedores)
}

//Funcion para borrar Proveedor 

export function borrarProveedor(proveedor: Proveedor[]){ 
  let deleteId:number=readlineSync.questionInt("Ingrese Id a Eliminar: ")
  for (let i= 0; i< proveedor.length; i++){
    if (deleteId === proveedor[i].getId()){
      proveedor.splice(i,1)
      console.log("Se elimino Proveedor con id ingresado")
    }
  }
  console.log(proveedor)
}

// Funciones para Veterinarias------------



//Crear Veterinaria

export function crearVeterinaria(arrVeterinaria: Veterinaria[], arrClientes: Cliente[], arrPacientes: Paciente[]){
	let nombre : string = readlineSync.question("Ingrese el nombre de la veterinaria: ");
	let direccion: string = readlineSync.question("ingrese dirección: ")
	let id: number = crearNumRandom(1000);
    
  while(existeId(arrVeterinaria,id)==true){
    id=crearNumRandom(1000);
  }
	
	let listaClientes: Array<Cliente> = arrClientes;
	let listaGeneralMascotas: Array<Paciente> = arrPacientes;

  let nuevaVeterinaria: Veterinaria = new Veterinaria(nombre, direccion, id, listaClientes, listaGeneralMascotas);
  arrVeterinaria.push(nuevaVeterinaria)
	console.log(arrVeterinaria)

}

//Modificar veterinaria

export function modificarVeterinaria(arrVeterinarias: Veterinaria[], posicion: number, arrClientes: Array<Cliente>, arrPacientes: Array<Paciente>){
	let nombre : string = readlineSync.question("Ingrese el nuevo nombre: ");
	let direccion: string = readlineSync.question("ingrese nueva dirección: ");

  let id: number = arrVeterinarias[posicion].getId()    

	let veterinariaModificada : Veterinaria = new Veterinaria (nombre, direccion, id, arrClientes, arrPacientes);
	arrVeterinarias[posicion] = veterinariaModificada;
	console.log(arrVeterinarias)

}


//Funcion Borrar Veterinaria  

export function eliminarVeterinaria(arrVeterinarias:Veterinaria[], id: number):void{

  for (let i= 0; i< arrVeterinarias.length; i++){
    if (id === arrVeterinarias[i].getId()){
      arrVeterinarias.splice(i,1)
    }
  }
  console.log(arrVeterinarias)
}

