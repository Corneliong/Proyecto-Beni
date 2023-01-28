pclass Persona{
    
    Nombre;
    Apellidos;
    F_nacimiento;
    #correo
    /**
     * @param{string}correo
     */
    actualizar_correo = function(correo){
    this.#correo = correo;
}
/**
 * @returns{int}
 */
    calcular_edad = function (){
        let fecha_actual = new Date();
        let F_nacimiento = new Date(this.F_nacimiento);
        let edad = fecha_actual.getFullYear() - F_nacimiento.getFullYear();
        let mes = fecha_actual.getMonth() - F_nacimiento.getMonth();
        if(mes<0|| (mes===0&&fecha_actual.getDate()<F_nacimiento.getDate())){edad--;}

        return parseInt(edad);   
    }
}
