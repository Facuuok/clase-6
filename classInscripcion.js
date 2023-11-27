class Inscripcion extends Pago{
    constructor(año, montoInscrip){
     this.año = año;
     this.montoInscrip = montoInscrip;
    }

    toString() {
        return `año: ${this.año}, montoInscrip: ${this.montoInscrip}`;
      }

    setAño(año){
        this.año = año;
    }
     getAño(){
        return this.año;
     }

     setMontoInscrip(montoInscrip){
        this.montoInscrip = montoInscrip;
     }
     getMontoInscrip(){
        return this.montoInscrip;
     }
}