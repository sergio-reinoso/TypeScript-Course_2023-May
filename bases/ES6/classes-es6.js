(() => {

    class Avenger {


        constructor( name = 'No name', power = 0 ) {
            this.name = name;
            this.power = power;

            this.otraPropiedad = true
        }

    }

    class FlyingAvneger extends Avenger {

        constructor(name, power) {
            super( name, power )
            this.flying = true
        }
    }

    const hulk = new Avenger('Hulk', 9001)
    const falcon = new FlyingAvneger('Flacon', 50)

    console.log(hulk);
    console.log(falcon);

})()