class Cuota extends Pago{
    constructor(mes, monto){
        this.mes = mes;
        this.monto = monto;
    }

    toString() {
        return `mes: ${this.mes}, monto: ${this.monto}`;
      }

    setMes(mes){
        this.mes = mes;
    }

    getMes(){
        return this.mes;
    }

    setMonto(monto){
        this.monto = monto;
    }

    getMonto(){
        return this.monto;
    }
}