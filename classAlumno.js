class Alumno{
    constructor(nombreCompleto, dni, direccion, telefono, grado){
        this.nombreCompleto = nombreCompleto;
        this.dni = dni;
        this.direccion = direccion;
        this.telefono = telefono;
        this.grado = grado;
        this.nro = Alumno.nro++; // Considerando que nro es una variable estática
        this.listaCuota = [];
        this.listaInscripcion = [];
        this.bajaLogica = false;
    }
    static nro = 0; // Variable estática nro

    toString() {
        return `Nombre Completo: ${this.nombreCompleto}, Dni: ${this.dni}, Direccion: ${this.direccion}, Telefono: ${this.telefono}, Grado: ${this.grado}`;
      }
    

   setNombreCompleto(nombreCompleto){
    this.nombreCompleto = nombreCompleto;
   }
   getNombreCompleto(){
    return this.NombreCompleto;
   }
   setDni(dni){
    this.dni = dni;
   }

   getDni(){
   return this.dni;
   }

   setDireccion(direccion){
    this.direccion = direccion;
   }

   getDireccion(){
   return this.direccion;
   }

   setTelefono(telefono){
    this.telefono = telefono;
   }
   
   getTelefono(){
    return this.telefono;
   }

   setGrado(grado){
    this.grado = grado;
   }

   getGrado(){
    return this.grado;
   }
   
  setListaInscripcion(listaInscripcion) {
    this.listaInscripcion = listaInscripcion;
  }

  agregarInscripcion(inscripcion) {
    this.listaInscripcion.push(inscripcion);
  }

  getBajaLogica() {
    return this.bajaLogica;
  }

  setBajaLogica(bajaLogica) {
    this.bajaLogica = bajaLogica;
  }

}