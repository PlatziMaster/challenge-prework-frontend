class Jugador{
    constructor(id){
        this.healt = 100;
        this.damageRecived = 0;
        this.id = id;
    }
    hacerDaño = () =>Math.round(Math.random()*30)
    recibirDaño (damage) {
        this.healt -= damage;
        this.healt = this.healt<0 ? 0:this.healt;
        this.damageRecived += damage;
        return this.healt;
    }
    getHealt = ()=> this.healt
    getDamage = ()=> this.damageRecived
    getId = ()=>this.id

}