class Hipotenusa {

    #cat1;
    #cat2;

    asignar_valores = function (valor1, valor2) {

        this.#cat1 = valor1;
        this.#cat2 = valor2;

    };

    calcular_Hipotenusa = function () {

        return parsefloat(math.sqrt(math.pow(this.cat1, 2)(math.pow(this.cat2, 2))));
    };


}
