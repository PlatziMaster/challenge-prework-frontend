// class Character
//     {
//         constructor(name, life, attack)
//         {
//             this.name = name;
//             this.life = life;
//             this.attack = attack;
//         }
//     }

function battle(name, life, attack) {
    this.name = name
    this.life = life
    this.attack = attack
}

var hiisi = new battle ("Hiisi", 100, 10);
var kuu = new battle ("Kuu", 100, 10);
var turn = 0

while (hiisi.life == 0 && kuu.life == 0) {
    if (turn = 0)
        kuu.life = kuu.life - hiisi.attack
        turn = 1
    if (turn = 1)
        hiisi.life = hiisi.life - kuu.attack
        turn = 0
}


console.log(hiisi, kuu);

