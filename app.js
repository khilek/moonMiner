let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'drill',
    price: 200,
    quantity: 0,
    multiplier: 5
  }
];


let automaticUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    multiplier: 20
  }
];



let cheese = 0


function moonMine() {
  cheese++
  updateCheeseElm()
  collectClickUpgrades()
}

function updateCheeseElm() {
  let moonMineElm = document.getElementById('cheese')
  moonMineElm.innerText = cheese.toString()
}


function buyPickaxe(pickaxeName) {
  console.log('Buying ⛏️', pickaxeName)
  const pickaxeUpgrade = clickUpgrades.find(pickaxe => pickaxe.name == pickaxeName)
  console.log('⛏️', pickaxeUpgrade)
  if (cheese >= 5) {
    cheese -= 5
    pickaxeUpgrade.quantity++
    updatePickaxeElm()
    updateDrillElm()
    updateCheeseElm()
  }
  // console.log('buyPickaxe')
}

function updatePickaxeElm() {
  const pickaxeUpgrade = clickUpgrades.find(pickaxe => pickaxe.name == 'pickaxe')
  console.log('pickaxe', pickaxeUpgrade)
  let pickaxeElm = document.getElementById('pickaxe')
  pickaxeElm.innerText = `${pickaxeUpgrade.quantity}`
}


function updateDrillElm() {
  const drillUpgrade = clickUpgrades.find(drill => drill.name == 'drill')
  console.log('drill', drillUpgrade)
  let pickaxeElm = document.getElementById('drill')
  pickaxeElm.innerText = `${drillUpgrade.quantity}`
}


function collectClickUpgrades() {
  clickUpgrades.forEach(clickUpgrade => {
    console.log(clickUpgrade.multiplier)
    cheese += clickUpgrade.multiplier * clickUpgrade.quantity
    console.log(cheese)
    updateCheeseElm()
  })

}