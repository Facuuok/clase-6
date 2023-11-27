class Pago{
    constructor(numPago, fechaPago, Alumno ){
        this.numPago = numPago;
        this.fechaPago = fechaPago;
        this.Alumno =Alumno;
    }
    toString() {
        return `numPago: ${this.numPago}, fechaPago: ${this.fechaPago}, alumno: ${this.Alumno}`;
      }
    
setNumPago(numPago){
    this.numPago = numPago;
}
getNumPago(){
    return this.numPago;
}

setFechaPago(fechaPago){
    this.fechaPago = fechaPago;
}
getFechaPago(){
    return this.fechaPago;
}
setAlumno(alunmo){
    this.alumno = alumno;
}

getAlumno(){
    return this.Alumno;
}

}