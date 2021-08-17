class Carta {
    constructor(nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    }
}

class Unidad extends Carta{
    constructor(nombre, costo, poder, res){
        super(nombre, costo);
        this.poder=poder;
        this.res=res;
    }
    atacar(oponente){
        if(!oponente instanceof Unidad) 
        throw new Error ("Tiene que ser una nueva Unidad");

        oponente.res= oponente.res - this.poder;

    }
}

class Efecto extends Carta{
    constructor (nombre, costo, texto, stat, magnitud){
        super(nombre, costo);
        this.magnitud=magnitud;
        this.stat = stat;
        this.texto= texto;
    }

aplicar (recipiente){
    if(recipiente instanceof Unidad){
        if(this.stat ==="res") recipiente.res += this.magnitud;
        if(this.stat === "poder") recipiente.poder += this.magnitud;
        recipiente.res+=this.magnitud;
    } else throw new Error ("Error");
}

}

const ninjaRojo = new Unidad (`Ninja Rojo`, 3,3,4);
const ninjaNegro = new Unidad (`Ninja Negro`, 4, 5,4);
console.table({ninjaRojo, ninjaNegro});

ninjaRojo.atacar(ninjaNegro);
console.table({ninjaRojo, ninjaNegro});

const Dif = new Efecto(
    "Algoritmo Dificil",
    2,
    "Aumentar...",
    "res",
    3
);

const rechazo = new Efecto(
    "Rechazo de promesa...",
    1,
    "reducir la resistencia...",
    "res",
    -2
);

const pareja = new Efecto(
    "Programacion ...",
    3,
    "aumentar poder a 2",
    "poder"
);

Dif.aplicar(ninjaRojo)
console.table(ninjaRojo, ninjaNegro);