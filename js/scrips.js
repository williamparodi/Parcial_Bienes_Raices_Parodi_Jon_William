import { Casa } from "../js/casa.js";
import { actualizarTabla} from "../js/tabla.js";
import { anuncios as casas } from "../data/lista.js";


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
        const $boton = document.querySelector("input[name='GuardarForm']");
        $boton.value = "Modificar";
        const anuncioSelecionado = anuncios.find((anuncio)=>anuncio.id == id);
        cargarFormAnuncios($formulario,anuncioSelecionado);
    }
    else if(e.target.matches("input[value='Eliminar Anuncio']"))
    {
        console.log("Eliminar");
        const id = parseInt($formulario.txtId.value);
        handlerDelete(id);
    }
});


$formulario.addEventListener("submit",(e)=>
{
    e.preventDefault();
    console.log("Enviando")//aca va el spiner
    //anuncioController($formulario); 
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
            console.log("update");
            const casaModificada = new Casa(parseInt(txtId.value),txtTitulo.value,rdoTransaccion.value,txtDescripcion.value,parseFloat(txtPrecio.value),
            parseInt(txtWc.value),parseInt(txtAutos.value),parseInt(txtDormitorios.value));
            handlerUpdate(casaModificada);
        }
        $formulario.reset();
    }
    else
    {
        alert("Error en el formulario");
    }
});


function handlerCreate(nuevoAnuncio)
{
    if(!nuevoAnuncio != null)
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

function validarNumeros(numero)
{
    let retorno = false;
    if(!isNaN(numero))
    {
        retorno = true
    }
    else
    {
        alert("Solo numeros validos");
    }
    return retorno;
}

function validarLetras(palabras)
{
    let retorno = false;
    if(palabras.length > 0 && palabras.length < 10000)
    {
        retorno = true
    }
    else
    {
        alert("Se paso con la cantidad de palabras");
    }
    return retorno;
}

function validarForm(formulario)
{
    let retorno = false;

    if(validarNumeros(formulario.txtWc.value) && validarNumeros(formulario.txtPrecio.value) 
        && validarNumeros(formulario.txtAutos.value) 
        && validarNumeros(formulario.txtDormitorios.value)
        && validarLetras(formulario.txtTitulo.value)
        && validarLetras(formulario.txtDescripcion.value)
        && validarLetras(formulario.rdoTransaccion.value))
    {
        retorno = true;
    }
    else
    {
        alert("Datos Incorrectos");
    }

    return retorno;
}
/*
function anuncioController()
{
    if(validarForm($formulario))
    {
        const {txtId,txtTitulo,rdoTransaccion,txtDescripcion,txtPrecio,txtWc,txtAutos,txtDormitorios,} = $formulario;
        
        if(txtId.value === "")
        {
            console.log("nueva..")//otro spinner
            const nuevoAnuncio = new Anuncio(0,txtTitulo.value,rdoTransaccion.value,txtDescripcion.value,parseFloat(txtPrecio.value),
            parseInt(txtWc.value),parseInt(txtAutos.value),parseInt(txtDormitorios.value));
            
            handlerCreate(nuevoAnuncio);
        }
        else
        {
            console.log("update");
            const anuncioModificado = new Anuncio(parseInt(txtId.value),txtTitulo.value,rdoTransaccion.value,txtDescripcion.value,parseFloat(txtPrecio.value),
            parseInt(txtWc.value),parseInt(txtAutos.value),parseInt(txtDormitorios.value));
            /*
            const anuncioModificado = new Anuncio(parseInt(txtId.value),txtTitulo.value,parseInt(txtWc.value),parseInt(txtAutos.value),
            parseInt(txtDormitorios.value),txtDescripcion.value,rdoTransaccion.value,parseFloat(txtPrecio.value));
            handlerUpdate(anuncioModificado);
        }
        $formulario.reset();
    }
    else
    {
        alert("Error en el formulario");
    }
}*/