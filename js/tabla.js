export const crearTabla=(data)=>
{
    if(!Array.isArray(data))return null;

    const $tabla = document.createElement("table");
    $tabla.appendChild(crearCabecera(data[0]));
    $tabla.appendChild(crearCuerpo(data));

    return $tabla;
}

const crearCabecera=(data)=>
{
    const $thead = createElement("thead");
    const $tr = document.createElement("tr");

    if(!Array.isArray(data))return null;
    const $datoCabecera = Object.keys(data[0]);
    $datoCabecera.forEach((elemento)=>
    {
        if(elemento != "id")
        {
            const $th = document.createElement("th");
            $th.textContent = elemento;
            $tr.appendChild($th);
        }
    });

    $thead.appendChild($tr);
    
    return $thead;
}

const crearCuerpo = (data)=>
{
    if(!Array.isArray(data))return null;
    
    const $tbody = document.createElement("tbody");

    data.forEach((elemento)=>
    {
        const $tr = document.createElement("tr");
        elemento.forEach((valor)=>
        {
            if(elemento != "id")
            {
                const $td = document.createElement("td");
                $td.textContent = elemento[valor];
                $tr.appendChild($td);
            }
            else
            {
                $tr.dataset.id = elemento[valor];
            }
        });
        $tbody.appendChild($tr);
    });

    return $tbody;
}

export const actualizarTabla =(contenedor,data)=>
{
    while(contenedor.hasChildNodes())
    {
        contenedor.removeChild(contenedor.firstElementChild);
    }
    contenedor.appendChild(crearTabla(data));
}