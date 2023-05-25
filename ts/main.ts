interface Employee {
  name: string;
  surname: string;
  email: string;
  bdate: Date;
}
class SalesEmployee implements Employee {
  name: string ;
  surname: string;
  email: string;
  bdate: Date;
  edad: number;
  unit: string;
  area: string;

  constructor(name: string, surname: string, email: string, bdate: Date, unit: string,
    area: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.bdate = bdate;
    this.edad = this.calcularEdad();
    this.unit = unit;
    this.area = area;
  }

  private calcularEdad(): number {
    const hoy = new Date();
    const cumpleanos = new Date(this.bdate);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const mes = hoy.getMonth() - cumpleanos.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return edad;
  }

  getNombre(): string {
    return this.name;
  }

  setNombre(nombre: string): void {
    this.name = nombre;
  }

  getApellidos(): string {
    return this.surname;
  }

  setApellidos(apellidos: string): void {
    this.surname = apellidos;
  }

  getCorreoElectronico(): string {
    return this.email;
  }

  setCorreoElectronico(correoElectronico: string): void {
    this.email = correoElectronico;
  }

  getFechaNacimiento(): Date {
    return this.bdate;
  }

  setFechaNacimiento(fechaNacimiento: Date): void {
    this.bdate = fechaNacimiento;
  }

  getUnidadVenta(): string {
    return this.unit;
  }

  setUnidadVenta(unidadVenta: string): void {
    this.unit = unidadVenta;
  }

  getZonaGeografica(): string {
    return this.area;
  }

  setZonaGeografica(zonaGeografica: string): void {
    this.area = zonaGeografica;
  }
}

function addEmployee(): void {
  let employeeName = (<HTMLInputElement>document.getElementById('name')).value;
  let surname = (<HTMLInputElement>document.getElementById('surname')).value;
  let email = (<HTMLInputElement>document.getElementById('email')).value;
  let birthDate = (<HTMLInputElement>document.getElementById('birthDate')).value;
  let sdUnit = (<HTMLInputElement>document.getElementById('sdUnit')).value;
  let zone = (<HTMLInputElement>document.getElementById('zone')).value;

  const salesEmployee = new SalesEmployee();

  salesEmployee.setNombre(employeeName);
  salesEmployee.setApellidos(surname);
  salesEmployee.setCorreoElectronico(email);
  salesEmployee.setFechaNacimiento(new Date(birthDate));
  salesEmployee.setUnidadVenta(sdUnit);
  salesEmployee.setZonaGeografica(zone);

  const nombreElement = document.getElementById('nombre');
  const apellidosElement = document.getElementById('apellidos');
  const correoElement = document.getElementById('correo');
  const fechaNacimientoElement = document.getElementById('fechaNacimiento');
  const unidadVentaElement = document.getElementById('unidadVenta');
  const zonaGeograficaElement = document.getElementById('zonaGeografica');

  if (nombreElement instanceof HTMLSpanElement) {
    nombreElement.textContent = salesEmployee.getNombre();
  }
  if (apellidosElement instanceof HTMLSpanElement) {
    apellidosElement.textContent = salesEmployee.getApellidos();
  }
  if (correoElement instanceof HTMLSpanElement) {
    correoElement.textContent = salesEmployee.getCorreoElectronico();
  }
  if (fechaNacimientoElement instanceof HTMLSpanElement) {
    fechaNacimientoElement.textContent = salesEmployee.getFechaNacimiento()?.toLocaleDateString();
  }
  if (unidadVentaElement instanceof HTMLSpanElement) {
    unidadVentaElement.textContent = salesEmployee.getUnidadVenta();
  }
  if (zonaGeograficaElement instanceof HTMLSpanElement) {
    zonaGeograficaElement.textContent = salesEmployee.getZonaGeografica();
  }
  console.log("Nombre: " + salesEmployee.getNombre());
console.log("Apellidos: " + salesEmployee.getApellidos());
console.log("Correo electrónico: " + salesEmployee.getCorreoElectronico());
console.log("Fecha de nacimiento: " + salesEmployee.getFechaNacimiento()?.toLocaleDateString());
console.log("Unidad de venta: " + salesEmployee.getUnidadVenta());
console.log("Zona geográfica: " + salesEmployee.getZonaGeografica());

}





  

  
  
