var data = {
  //NameSpace pour le joueur
  players: {
    player1: {
      id: 'player1',
      name: 'arknoid',
      face: 'knight',
      life: 50,
      mana: 10,
      toHit: 3,
      toBlock: 3,
      gold: 0,
      damage: 6,
      shield : true,
      numberAttack: 1,
      potionLife: 1,
      potionMana: 1,
      voice :[
              'hit3',
              'hit4',
              'hit5',
             ],
      soundMiss : 'sword',


    },
    player2: {
      id: 'player2',
      name: 'darknoid',
      face: 'darkKnight',
      life: 50,
      mana: 10,
      toHit: 3,
      toBlock: 3,
      gold: 0,
      damage: 6,
      shield : false,
      numberAttack: 2,
      potionLife: 2,
      voice :[
              'hit1',
              'hit2',
              'hit3',
             ],
      soundMiss : 'sword1',
    },
  },

  //NameSpace pour les ennemies
  enemys: {

    orcWarrior: {
      name: 'orc-warrior',
      face: 'orcWarrior',
      life: 40,
      mana: 2,
      toHit: 4,
      toBlock: 2,
      gold: 10,
      valueXp: 10,
      damage: 6,
      numberAttack: 2,
      voice :[
              'orc1',
              'orc3'
             ],
      soundMiss : 'sword2',
    },

    goblinShaman: {
      name: 'goblin-shaman',
      face: 'goblinShaman',
      life: 10,
      mana: 10,
      toHit: 3,
      toBlock: 1,
      gold: 10,
      valueXp: 10,
      damage: 6,
      numberAttack: 1,
      voice :[
              'goblin',
              'goblin1'
             ],

      soundMiss : 'sword3'
    },

    orcShaman: {
      name: 'orc-shaman',
      face: 'orcShaman',
      life: 20,
      mana: 8,
      toHit: 3,
      toBlock: 2,
      gold: 10,
      valueXp: 10,
      damage: 6,
      numberAttack: 1,
      voice :[
              'orc4',
              'orc5'
             ],
      soundMiss : 'sword2'
    },
    trollGiant: {
      name: 'troll-giant',
      face: 'troll',
      life: 80,
      mana: 8,
      toHit: 2,
      toBlock: 1,
      gold: 10,
      valueXp: 10,
      damage: 10,
      numberAttack: 1,
      big : true,
      voice :[
              'giant1',
              'giant2',
              'giant3',
              'giant4',
              'giant5',
             ],
      soundMiss : 'sword2'
    },
  },

  items: {
    potions: {
      life: function() {
        this.name = 'Potion of life';
        this.powerMin = 10;
        this.powerMax = 50;
        //this.cooldown =
      },
    },
  },

}
