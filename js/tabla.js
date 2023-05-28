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
    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");
    $tr.style.setProperty("background-color","violet");

    for (const key in data) 
    {
      if (key === "id") continue;
      const $th = document.createElement("th");
      $th.textContent = key;
      $tr.appendChild($th);
    }

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
        for (const key in elemento) 
        {
            if (key === "id") 
            {
                $tr.dataset.id = elemento[key];
            } 
            else 
            {
                const $td = document.createElement("td");
                $td.textContent = elemento[key];
                $tr.appendChild($td);
            }
         
        }
        
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