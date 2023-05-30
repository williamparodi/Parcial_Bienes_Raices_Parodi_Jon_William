export function validarNumeros(numero)
{
    let retorno = false;
    if(!isNaN(numero))
    {
        retorno = true
    }
    else
    {
        mostrarVentanaModal("Solo numeros validos","mensaje-error");
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
        mostrarVentanaModal("Se paso con la cantidad de palabras","mensaje-error");
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

    return retorno;
}

export function mostrarVentanaModal(mensaje,nombreElemento)
{
    const $modal = document.getElementById("modal");
    const $mensaje = document.getElementById(nombreElemento);
    const $cerrarBtn = document.getElementById("cerrar");

    if($modal.open)
    {
        $modal.close();
    }

    $mensaje.textContent = mensaje;

    $modal.showModal();

    $cerrarBtn.addEventListener("click",()=>
    {    
        $modal.close();
    });
}

export function mostrarVentanaCancelar(mensaje,nombreElemento)
{
    const $modal = document.getElementById("modal-eliminar");
    const $mensaje = document.getElementById(nombreElemento);
    const $btnCancelar = document.getElementById("cancelar-eliminar");

    if($modal.open)
    {
        $modal.close();
    }

    $mensaje.textContent = mensaje;

    $modal.showModal();

    $btnCancelar.addEventListener("click",()=>
    {    
        $modal.close();
        return null;
    });
}


