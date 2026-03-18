class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    atacar(alvo, habilodade) {

    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }

}
// criar os objetos
let hero = new Personagem("David", "O Heroi", 100, 100, 0);
let boss = new Personagem("Smaug", "Elden Beast", 100, 0, 50);

// Prencher Status
document.getElementById("nome-heroi").textContent = `🗡️${hero.nome}`;
document.getElementById("titulo-heroi").textContent = `🗡️${hero.titulo}`;
document.getElementById("nome-boss").textContent = `🔥${boss.nome}`;
document.getElementById("titulo-boss").textContent = `🔥${boss.titulo}`;


//criar habilidade
let container = document.getElementById("controle");
let listaHabilidades = [
    new Habilidade(1, "attack", 4, 0,),
    new Habilidade(2, "skill", 8, 10, 0),
    new Habilidade(3, "ultimante", 15, 0, 100),
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn","btn-warning");
    container.appendChild(btn);
});

