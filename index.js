    var materia1 = new Object;
    materia1.creditos = "3";
    materia1.nombre = "Procesos de desarrollo";
    materia1.profesor = "Ana Angelica Sanchez Villegas";
    materia1.periodo = "Enero - Abril";
    materia1.cuatrimestre = "segundo cuatrimestre"
    materia1.presentacion = function(){
        let texto = "Nombre de la materia" + "  " + this.nombre + "  "+ "Nombre del profesor" + "  " + this.profesor + "  " + "creditos recibidos" + "  " + this.creditos  ;
        return texto;
    }
    materia1.curso = function(){
        let texto1 = "Periodo" + "  " + this.periodo + "  " + "cuatrimestre" + "  " + this.cuatrimestre ;
        return texto1;


    }