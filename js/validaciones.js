export function validarNumeros(numero)
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

export function validarLetras(palabras)
{
    let retorno = false;
    if(palabras.length > 0 && palabras.length < 100)
    {
        retorno = true
    }
    else
    {
        alert("Se paso con la cantidad de palabras");
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
        alert("Datos Incorrectos");
    }

    return retorno;
}