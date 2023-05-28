
export class Anuncio
{
    constructor(id,titulo,transaccion,descripcion,precio)
    {
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    get Id()
    {
        return this.id;
    }

    get Titulo()
    {
        return this.titulo;
    }

    set Id(value)
    {
        this.id = value;  
    }

    set Titulo(value)
    {
        const max = 50;
        if(!Array.prototype.length(value)<max)
        {
            this.titulo = value;
        }
    }

    set Descripcion(descripcion)
    {
        const max = 500;
        if(descripcion.lenght < max)
        {
            this.descripcion = descripcion;
        }
        else
        {
            this.descripcion = "sin descripción"
        }
    }

    set Transaccion(transaccion)
    {
        if(transaccion == "VENTA" || transaccion == "VENTA")
        {
            this.transaccion = transaccion;
        }
        else
        {
            this.transaccion = "Sin transaccion";
        }
    }

    set Precio(precio)
    {
        if(precio > 0 )
        {
            this.precio = precio;
        }
        else
        {
            this.precio = 0;
        }
    }

    get Descripcion()
    {
        return this.descripcion;
    }

    get Transaccion()
    {
        return this.transaccion;
    }

    get Precio()
    {
        return this.precio;
    }

}
