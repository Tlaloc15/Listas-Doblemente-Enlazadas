class Articulo{
    constructor(codigo, nombreA, precio, cantidad, descripcion)
    {
        this._codigo = codigo;
        this._nombreA = nombreA;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
    }
    get codigo() {
        return this._codigo;
    }
    toString() {
        return 'Código: ' + this._codigo + ' Nombre: ' + this._nombreA + ' Precio: $' + this._precio + ' Cantidad: ' + this._cantidad + ' Descripción: ' + this._descripcion;
    }
}

class Inventario {
    constructor(tabla, clave) {
            this._articulo = 0;
            this._tabla = tabla;
            this._clave = clave;
            this._sumador = 0;
            this._ultimo;
        }
        get articulo(){
            return this._articulo;
        }
        get clave(){
            return this._clave;
        }
        get toString(){
            return toString;
        }
        agregar(ubicacion, nombreA, precio, cantidad, descripcion, clave) 
    {   
        if(this._sumador <= 50) { 
                let aux = 0;
                if (ubicacion === '' || ubicacion === (this._sumador + 1).toString()) {
                    this._clave = clave;
                    aux = this._articulo;
                    if(this._sumador === 0)
                    {
                        this._articulo = new Articulo(this._clave, nombreA, precio, cantidad, descripcion);
                    } else {

                        while(aux._siguiente != null)
                        {
                            aux = aux._siguiente;
                        }
                        aux._siguiente = new Articulo(this._clave, nombreA, precio, cantidad, descripcion);
                        aux._siguiente._anterior = aux;
                        this._ultimo = aux._siguiente;
                    }
                    this._sumador++;
                    this._clave++;
                    alert('articulo agregado');
                } 
                else if (Number(ubicacion) > 0 && Number(ubicacion) < this._sumador) 
                {
                    aux = this._articulo;
                    let auxc = 1;
                    while(ubicacion > auxc + 1)
                    {
                        let aux = aux._siguiente;
                        auxc++;
                    }
                    let aux2 = new Inventario(this._clave, nombreA, precio, cantidad, descripcion);
                    aux2._siguiente = aux._siguiente;
                    aux2._siguiente._anterior = aux2;
                    aux2._anterior = aux;
                    aux._siguiente = aux2;
                    this._contador++;
                    this._clave++;
                    alert('articulo agregado correctamente');
                } 
                else {
                    alert('Posicion no válida');
                }
                //console.log(this._articulo);
                this.mostrarTa();
            }
        else
        {
            alert('inventario lleno');
        }
    }

       buscar(codigo) 
       {
           let revisor;
           codigo = Number(codigo);
           let aux = this._articulo;
               if (aux._codigo === codigo) 
                   {
                         revisor = this._articulo;
                       alert('Articulo encontrado. ');
                   }
               else
                   {
                       while(aux._codigo != codigo)
                       {
                           aux = aux._siguiente;
                           if(aux === null)
                           {
                               break;
                           }
                       }
                       if(aux._codigo === codigo)
                       {
                           revisor = aux;
                           alert('Articulo encontrado. ');
                       }
                       else
                       {
                           alert('Articulo no encontrado. ');
                       }
                   }
               return revisor;
       }
       eliminar(elimCodigo) {
           elimCodigo = Number(elimCodigo);
           if (this.revision(elimCodigo) === 1) {
               let aux = this._articulo;
               if(aux._codigo === elimCodigo) {
                   this._articulo = aux._siguiente;
               }
               else {
                   while(aux._siguiente != null && aux != undefined) {
                       if(aux._siguiente._codigo === elimCodigo) {
            
                           aux._siguiente = aux._siguiente._siguiente;
                   }
                   aux = aux._siguiente;
               }
            }
               alert('Se ha eliminado el articulo correctamente');
           } 
           else {
               alert('El código ingresado no existe, por favor verifique de nuevo');
           }
           this.mostrarTa();
       }
       revision(codigo) {
        codigo = Number(codigo);
        let revisor = -1;
        let aux = this._articulo;
            if (aux._codigo === codigo) 
                {
                    revisor = 1;
                }
            else {
                    while(aux._codigo != codigo && aux.codigo != null)
                    {
                        aux = aux._siguiente;
                    }
                    if(aux._codigo === codigo) {
                        revisor = 1;
                    }
                }
            return revisor;
    }
        mostrarTa() {
            console.log("cuantos" + this._sumador);
            this._tabla.innerHTML = '';
            let etiquetarA = [];
            let aux = this._articulo;
            let auxc = 0;
            for (let i = 0; i < this._sumador; i++) {
                etiquetarA[i] = document.createElement('p')
            }
            while(auxc === 0 || aux != null && auxc < this._sumador){
                    console.log(aux);
                    etiquetarA[auxc].innerHTML = aux.toString();
                    this._tabla.appendChild(etiquetarA[auxc]);
                    auxc++;
                    aux=aux._siguiente;
                    
            }
        }
        invertirTa(div) {
            let inversor = '';
            let aux = this._articulo;
            let etiquetarA = 0;
            while(aux != null)
            {
                inversor = (aux.toString() +"<br>" + "<p>" + inversor);
                aux = aux._siguiente;
            }
            this._tabla.innerHTML = '';
                etiquetarA = document.createElement('p');
                etiquetarA.innerHTML = inversor;
                div.appendChild(etiquetarA);
            
            /*this._tabla.innerHTML = '';
            let etiquetarA = [];
            let aux = this._ultimo;
            let auxc = 0;
            for (let i = 0; i < this._sumador; i++) {
                etiquetarA[i] = document.createElement('p')
            }
            while(auxc === 0 || aux != null && auxc < this._sumador){
                    console.log(aux);
                    etiquetarA[auxc].innerHTML = aux.toString();
                    this._tabla.appendChild(etiquetarA[auxc]);
                    auxc++;
                    aux=aux._anterior;
                    
            }*/
           }

    }

class Main{
    constructor(){

var inventario = new Inventario(document.querySelector('#tablaArticulos'), Number(document.querySelector('#codigo').value));
document.querySelector('#agregar').addEventListener('click', () => {
    let clave = Number(document.querySelector('#codigo').value);
    let ubicacion = document.querySelector('#ubicacion').value;
    let nombreA = document.querySelector('#nombreA').value;
    let precio = Number(document.querySelector('#precio').value);
    let cantidad = Number(document.querySelector('#cantidad').value);
    let descripcion = document.querySelector('#descripcion').value;

    inventario.agregar(ubicacion, nombreA, precio, cantidad, descripcion, clave);
    document.querySelector('#codigo').value = inventario.clave;
});
document.querySelector('#buscar').addEventListener('click', () => {
    let buscarArticulo = inventario.buscar (document.querySelector('#buscarCod').value);
    document.querySelector('#tablaBuscar').innerHTML = buscarArticulo;
});
document.querySelector('#eliminar').addEventListener('click', () => {
    inventario.eliminar(document.querySelector('#eliminarCodigo').value);
    document.querySelector('#codigo').value = inventario.clave;
});
document.querySelector('#invertir').addEventListener('click', () => {
    inventario.invertirTa(document.querySelector('#invertirTabla'));
});
    }
}

new Main();