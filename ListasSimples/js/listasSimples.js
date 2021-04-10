/* ---------------------METODO QUE PERMITE CARGAR IMAGENES ------------------*/
function seleccionImagenes(eventoSeleccionar) {
    let files = eventoSeleccionar.target.files;
    for (let i = 0, f; f = files[i]; i++) {
        /* Verificar por cada archivo seleccionado que sea una imagene */
        if (!f.type.match('image.*'))
            continue;
        let apiCargueArchivos = new FileReader();
        /* Obtener el nombre del archivo seleccionado */
        apiCargueArchivos.onload = (function(archivoSeleccionado) {
            return function(e) {
                let span = document.createElement('span');
                /* Le damos un tamaño a la imagen y obtenemos el nombre de la imagen, extrayendo de la información */
                span.innerHTML = ['<img class="thumb" width="100px" heigth="100px" src="', e.target.result, '"title ="', escape(archivoSeleccionado.name), '"/>'].join('');
                document.getElementById("listaImagenes").insertBefore(span, null);

            }
        })(f);
        /*readAsDataURL se utiliza para leer el contenido de un blob o un file  */
        apiCargueArchivos.readAsDataURL(f);
    }
}
/* Este método os sirve para registrar un evento a un objeto en especifico*/
document.getElementById('files').addEventListener('change', seleccionImagenes, false);


/* ---------------------------------------CLASES NODO Y LISTAS SIMPLES-------------------------------- */
class NodeClass {

    constructor(valor) {
        this.valor = valor;
        this.next = null;
    }
}

class listasSimples {
    constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        /* Métodos de la lista: añadir, eliminar, buscar, actualizar valor */
    añadirNodoF(valor) {
        /* Instancia de la clase NodeClass */
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    añadirNodoI(valor) {
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    eliminarNodoF() {
        if (!this.head) return undefined;
        let nodoVisitado = this.head;
        let nuevaColaLista = nodoVisitado;
        while (nodoVisitado.next) {
            nuevaColaLista = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        this.tail = nuevaColaLista;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nodoVisitado;
    }
    eliminarNodoI() {
        if (!this.head) return undefined;
        let cabezaactual = this.head;
        this.head = cabezaactual.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return cabezaactual;
    }

    getPosicionPuntero(index) {
        if (index < 0 || index >= this.length) return null;
        let contadorPuntero = 0;
        let nodoVisitado = this.head;
        while (contadorPuntero !== index) {
            nodoVisitado = nodoVisitado.next;
            contadorPuntero++;
        }
        return nodoVisitado;
    }

    modificarValorNodo(index, valor) {
        let encontrarNodo = this.getPosicionPuntero(index);
        if (encontrarNodo) {
            encontrarNodo.valor = valor;
            return true;
        }
        return false;
    }

    removerNodoPorPosicion(index) {
        let nodoVisitad = this.head;
        let nodoAnteriorAlVisitado = null;
        if (index < 0 || index >= this.length) return null;
        if (index === 0) this.head = nodoVisitad.next;
        else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitad;
                nodoVisitad = nodoVisitad.next;
            };
            nodoAnteriorAlVisitado.next = nodoVisitad.next;
        };
        this.length--;
        return nodoVisitad.valor;
    }

    insertarNodoPorPosicion(valor, index) {
        let newNode = new NodeClass(valor);
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado;
        if (index < 0 || index >= this.length) return null;
        if (index === 0) this.añadirNodoI(valor);
        else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitado;
                nodoVisitado = nonodoVisitado.next;
            }
            newNode.next = nodoVisitado;
            nodoAnteriorAlVisitado.next = newNode;
        }
        this.length++;
    }
    removerNodoPorValor(valor) {
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        while (nodoVisitado !== null) {
            if (nodoVisitado.valor === valor) {
                if (!nodoAnteriorAlVisitado)
                    this.head = nodoVisitado.next;
                else
                    nodoAnteriorAlVisitado.next = nodoVisitado.next;
                this.length--;
                return nodoVisitado.valor;
            }
            nodoAnteriorAlVisitado = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        return null;
    }

    imprimirListaSimple() {
        /* Declaramos un array, es decir, convertimos la lista simple en otro tipo de estructura de datos */
        let arregloLista = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloLista.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }
        return arregloLista;
    }
}
let listaSimple = new listasSimples();
listaSimple.añadirNodoF(1);
listaSimple.añadirNodoF(2);
listaSimple.añadirNodoF(3);
listaSimple.añadirNodoF(4);
listaSimple.añadirNodoF(5);
listaSimple.añadirNodoF(6);
listaSimple.añadirNodoF(7);
listaSimple.añadirNodoF(8);
listaSimple.añadirNodoF(9);
listaSimple.añadirNodoF(10);
listaSimple.imprimirListaSimple();
document.getElementById("arrayLista").innerHTML = listaSimple.imprimirListaSimple();

const mostrarValInput = function() {
    let valoresIngresadorUser = document.getElementById("nodos").value;
    listaSimple.añadirNodoF(valoresIngresadorUser.split(","));
    document.getElementById("valoresNodosInput").innerHTML = listaSimple.imprimirListaSimple();
}

/* ---------------------METODO QUE PERMITE CARGAR CONTENIDO DE ARCHIVO TXT ------------------*/
let input = myInput;
let reader = new FileReader;
input.addEventListener('change', onChange);

function onChange(event) {
    let archivoTxt = event.target.files[0];
    /* readAsText se utiliza para leer el contenido de archivos, en este caso TXT */
    reader.readAsText(archivoTxt);
    reader.onload = onLoad;
}

/* Hacer la lectura del archivo */
function onLoad() {
    let contenido = reader.result;
    /*  Hola
        mundo */
    let linea = contenido.split('\n');
    let valoresLeidosTxt = "";
    valoresLeidosTxt += linea;
    document.getElementById("verContenidoTxt").innerHTML = valoresLeidosTxt;
    /* Añadir nodos nuevos con el contenido del archivo txt */
    listaSimple.añadirNodoF(contenido.split('\n'));
    document.getElementById("verContenidoTxt1").innerHTML = listaSimple.imprimirListaSimple();
}