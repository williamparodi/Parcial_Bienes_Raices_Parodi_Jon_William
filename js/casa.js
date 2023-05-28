import { Anuncio } from "../js/anuncio.js";

export class Casa extends Anuncio
{
    static idAutoIncremental = parseInt(localStorage.getItem("idAutoIncremental"))||0;

    constructor(id,titulo,transaccion,descripcion,precio,cantidadWc,cantidadAutos,cantidadDormitorios)
    {
        super(id,titulo,transaccion,descripcion,precio);
        this.id = Casa.generaNuevoId();
        this.cantidadWc = cantidadWc;
        this.cantidadAutos = cantidadAutos;
        this.cantidadDormitorios = cantidadDormitorios;
    }

    get Id()
    {
        return this.Id;
    }

    get CantidadWc()
    {
        return this.cantidadWc;
    }

    get CantidadAutos()
    {
        return this.cantidadAuto;
    }

    get CantidadDormitorios()
    {
        return this.cantidadDormitorios;
    }

    set CantidadWc(value)
    {
        if(!isNaN(value))
        {
            this.cantidadWc = value;
        }
    }

    set CantidadAutos(value)
    {
        if(!isNaN(value))
        {
            this.cantidadAuto = value;
        }
    }

    set CantidadDormitorios(value)
    {
        if(!isNaN(value))
        {
            this.cantidadDormitorios = value;
        }
    }

    static generaNuevoId()
    {
        const nuevoId = ++Casa.idAutoIncremental;
        localStorage.setItem("idAutoIncremental",nuevoId.toString());
        return nuevoId;    
    }

}