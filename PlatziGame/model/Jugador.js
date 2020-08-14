export default class Jugador{
    constructor(id){
        this.healt = 100
        this.id = id
    }
    hacerDaño = () =>Math.round(Math.random()*30)
    recibirDaño = (damage) => this.healt -= damage

}