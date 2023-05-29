export function validarNumeros(numero)
{
    let retorno = false;
    if(!isNaN(numero))
    {
        retorno = true
    }
    else
    {
        mostarVentanaError("Solo numeros validos");
    }
    return retorno;
}

export function validarLetras(palabras)
{
    let retorno = false;
    if(palabras.length > 0 && palabras.length < 50)
    {
        retorno = true
    }
    else
    {
        mostarVentanaError("Se paso con la cantidad de palabras");
    }
    return retorno;
}

export function validarForm(formulario)
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
        mostarVentanaError("Error en el formulario");   
    }

    return retorno;
}

function mostarVentanaError(mensaje)
{
    const $modal = document.getElementById("modal");
    const $mensajeError = document.getElementById("mensaje-error");
    const $cerrarBtn = document.getElementById("cerrar");
    if($modal.open)
    {
        $modal.close();
    }

    $mensajeError.textContent = mensaje;

    $modal.showModal();

    $cerrarBtn.addEventListener("click",()=>
    {    
        $modal.close();
    });
}