var Bicicleta =require('../../models/bicicleta');

beforeEach(()=>{
    Bicicleta.allBicis=[];
});

describe('Bicicleta.allBicis', ()=>{
    it('Comienza vacio', ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', ()=>{
    it('Agregamos una', ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var a= new Bicicleta(1,"rojo","urbana",[19.353536, -99.318017]);
        Bicicleta.add(a);
        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);

    });
});

describe('Bicicleta.findByID', ()=>{
    it('Debe devolver la bici con id 1', ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
        var b= new Bicicleta(1,"blanco","urbana",[19.333036, -99.328017]);
        var c= new Bicicleta(3,"verde","Nissan",[19.333036, -99.328017]);
        Bicicleta.add(b);
        Bicicleta.add(c);
        var targetBici=Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(b.color);
        expect(targetBici.modelo).toBe(b.modelo);
    });
});