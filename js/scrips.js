import { Casa } from "../js/casa.js";
import { actualizarTabla} from "../js/tabla.js";
import { anuncios as casas } from "../data/lista.js";
import { validarForm } from "../js/validaciones.js";

localStorage.setItem("anuncios",JSON.stringify(casas));

const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];
const $seccionTabla = document.getElementById("tabla");
const $formulario = document.forms[0];


if(anuncios.length)
{
    actualizarTabla($seccionTabla,anuncios);
}

function actualizarStorage(clave,data)
{
    localStorage.setItem(clave,JSON.stringify(data));
}

window.addEventListener("click",(e) =>
{
    if(e.target.matches("td"))
    {
        const id = e.target.parentElement.dataset.id;
        console.log(id);
        activaBotones();
        const anuncioSelecionado = anuncios.find((anuncio)=>anuncio.id == id);
        cargarFormAnuncios($formulario,anuncioSelecionado);
    }
    else if(e.target.matches("input[value='Eliminar Anuncio']"))
    {
        console.log("Eliminar");
        const id = parseInt($formulario.txtId.value);
        handlerDelete(id);
        $formulario.txtId.value = "";
        resetBotones(); 
    }
    else if(e.target.matches("input[value='Cancelar"))
    {
        console.log("Cancelado");
        $formulario.reset();
        $formulario.txtId.value = "";
        resetBotones(); 
    }
    
});


$formulario.addEventListener("submit",(e)=>
{
    e.preventDefault();
    console.log("Enviando")//aca va el spiner
    anuncioController($formulario);
});



function handlerCreate(nuevoAnuncio)
{
    if(nuevoAnuncio != null)
    {
        anuncios.push(nuevoAnuncio);
        actualizarStorage("anuncios",anuncios);
        actualizarTabla($seccionTabla,anuncios);
        $formulario.reset();
    }
}

function handlerUpdate(editAnuncio)
{
    if(editAnuncio != null)
    {
        let index = anuncios.findIndex((anuncio) =>anuncio.id == editAnuncio.id);

        anuncios.splice(index,1,editAnuncio);
        actualizarStorage("anuncios",anuncios);
        actualizarTabla($seccionTabla,anuncios);
        $formulario.reset();
    }

}

function handlerDelete(id)
{
    let index = anuncios.findIndex((anuncio)=>anuncio.id == id);
    anuncios.splice(index,1);
    actualizarStorage("anuncios",anuncios);
    actualizarTabla($seccionTabla,anuncios);
    $formulario.reset();
}

function cargarFormAnuncios(formulario, casa) 
{
  formulario.txtId.value = casa.id;
  formulario.txtTitulo.value = casa.titulo;
  formulario.rdoTransaccion.value = casa.transaccion;
  formulario.txtDescripcion.value = casa.descripcion;
  formulario.txtPrecio.value = casa.precio;
  formulario.txtWc.value = casa.cantidadWc;
  formulario.txtAutos.value = casa.cantidadAutos;
  formulario.txtDormitorios.value = casa.cantidadDormitorios;
}

function anuncioController()
{
    if(validarForm($formulario))
    {
        const {txtId,txtTitulo,rdoTransaccion,txtDescripcion,txtPrecio,txtWc,txtAutos,txtDormitorios} = $formulario;
        
        if(txtId.value === "")
        {
            console.log("nueva..")//otro spinner
            const nuevaCasa = new Casa(0,txtTitulo.value,rdoTransaccion.value,txtDescripcion.value,parseFloat(txtPrecio.value),
            parseInt(txtWc.value),parseInt(txtAutos.value),parseInt(txtDormitorios.value));
            handlerCreate(nuevaCasa);
        }
        else
        {
            console.log("update");//otro spinner
            const casaModificada = new Casa(parseInt(txtId.value),txtTitulo.value,rdoTransaccion.value,txtDescripcion.value,parseFloat(txtPrecio.value),
            parseInt(txtWc.value),parseInt(txtAutos.value),parseInt(txtDormitorios.value));
            handlerUpdate(casaModificada);
            resetBotones();
        }
        $formulario.reset();
        $formulario.txtId.value = "";
    }
    else
    {
        alert("Error en el formulario");
    }
}
/*
function resetValoresForm()
{
    $formulario.reset();
    $formulario.txtId.value = "";
}*/
function activaBotones()
{
    const $botonModficar = document.querySelector("input[name='GuardarForm']");
    const $botonEliminar = document.querySelector("input[name='Eliminar']");
    $botonEliminar.type = "button"; 
    $botonModficar.value = "Modificar";
}

function resetBotones()
{
    const $botonModficar = document.querySelector("input[name='GuardarForm']");
    const $botonEliminar = document.querySelector("input[name='Eliminar']");
    $botonEliminar.type = "hidden"; 
    $botonModficar.value = "Guardar";
}