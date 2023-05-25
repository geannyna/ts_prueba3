var SalesEmployee = /** @class */ (function () {
    function SalesEmployee(name, surname, email, bdate, unit, area) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.bdate = bdate;
        this.edad = this.calcularEdad();
        this.unit = unit;
        this.area = area;
    }
    SalesEmployee.prototype.calcularEdad = function () {
        var hoy = new Date();
        var cumpleanos = new Date(this.bdate);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var mes = hoy.getMonth() - cumpleanos.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    };
    SalesEmployee.prototype.getNombre = function () {
        return this.name;
    };
    SalesEmployee.prototype.setNombre = function (nombre) {
        this.name = nombre;
    };
    SalesEmployee.prototype.getApellidos = function () {
        return this.surname;
    };
    SalesEmployee.prototype.setApellidos = function (apellidos) {
        this.surname = apellidos;
    };
    SalesEmployee.prototype.getCorreoElectronico = function () {
        return this.email;
    };
    SalesEmployee.prototype.setCorreoElectronico = function (correoElectronico) {
        this.email = correoElectronico;
    };
    SalesEmployee.prototype.getFechaNacimiento = function () {
        return this.bdate;
    };
    SalesEmployee.prototype.setFechaNacimiento = function (fechaNacimiento) {
        this.bdate = fechaNacimiento;
    };
    SalesEmployee.prototype.getUnidadVenta = function () {
        return this.unit;
    };
    SalesEmployee.prototype.setUnidadVenta = function (unidadVenta) {
        this.unit = unidadVenta;
    };
    SalesEmployee.prototype.getZonaGeografica = function () {
        return this.area;
    };
    SalesEmployee.prototype.setZonaGeografica = function (zonaGeografica) {
        this.area = zonaGeografica;
    };
    return SalesEmployee;
}());
function addEmployee() {
    var _a, _b;
    var employeeName = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var birthDate = document.getElementById('birthDate').value;
    var sdUnit = document.getElementById('sdUnit').value;
    var zone = document.getElementById('zone').value;
    var salesEmployee = new SalesEmployee();
    salesEmployee.setNombre(employeeName);
    salesEmployee.setApellidos(surname);
    salesEmployee.setCorreoElectronico(email);
    salesEmployee.setFechaNacimiento(new Date(birthDate));
    salesEmployee.setUnidadVenta(sdUnit);
    salesEmployee.setZonaGeografica(zone);
    var nombreElement = document.getElementById('nombre');
    var apellidosElement = document.getElementById('apellidos');
    var correoElement = document.getElementById('correo');
    var fechaNacimientoElement = document.getElementById('fechaNacimiento');
    var unidadVentaElement = document.getElementById('unidadVenta');
    var zonaGeograficaElement = document.getElementById('zonaGeografica');
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
        fechaNacimientoElement.textContent = (_a = salesEmployee.getFechaNacimiento()) === null || _a === void 0 ? void 0 : _a.toLocaleDateString();
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
    console.log("Fecha de nacimiento: " + ((_b = salesEmployee.getFechaNacimiento()) === null || _b === void 0 ? void 0 : _b.toLocaleDateString()));
    console.log("Unidad de venta: " + salesEmployee.getUnidadVenta());
    console.log("Zona geográfica: " + salesEmployee.getZonaGeografica());
}
