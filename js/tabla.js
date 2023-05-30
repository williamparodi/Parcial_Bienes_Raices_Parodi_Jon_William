export const crearTabla=(data)=>
{
    if(!Array.isArray(data))return null;

    const $tabla = document.createElement("table");
    $tabla.style.setProperty("background-color","rgb(216, 227, 231)");
    $tabla.appendChild(crearCabecera(data[0]));
    $tabla.appendChild(crearCuerpo(data));
    return $tabla;
}

const crearCabecera=(data)=>
{
    const $thead = document.createElement("thead");
    const $tr = document.createElement("tr");
    $tr.style.setProperty("background-color","rgb(157, 178, 191)");
    $tr.style.setProperty("font-size","25");
    $tr.style.setProperty("font-family","cursive");
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
                $td.style.setProperty("font-family","cursive");
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