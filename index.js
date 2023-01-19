    var alumno1 = new Object;
    alumno1.matricula = 1322134042;
    alumno1.nombre = "Diego";
    alumno1.apellido = "Navarro";
    alumno1.anio_nacimiento = 2004;
    alumno1.presentacion = function(){
        let anios = 2023-this.anio_nacimiento;
        let texto = "hola mi nombre es " + this.nombre + "  "+ this.apellidos + ",  tengo "+ anios +" años";
        return texto;
    }