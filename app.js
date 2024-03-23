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
    multiplier: 10
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


function updateRoverElm() {
  const roverUpgrade = automaticUpgrades.find(rover => rover.name == 'rover')
  console.log('rover', roverUpgrade)
  let roverElm = document.getElementById('rover')
  roverElm.innerText = `${roverUpgrade.quantity}`
}




function buyPickaxe(pickaxeName) {
  // console.log('Buying ⛏️', pickaxeName)
  const pickaxeUpgrade = clickUpgrades.find(pickaxe => pickaxe.name == pickaxeName)
  // console.log('⛏️', pickaxeUpgrade)
  if (cheese >= 5) {
    cheese -= 5
    pickaxeUpgrade.quantity++
    updatePickaxeElm()
    updateDrillElm()
    updateCheeseElm()
  }
  // console.log('buyPickaxe')
}


function buyRover(roverName) {
  // console.log('Buying ⛏️', pickaxeName)
  const roverUpgrade = automaticUpgrades.find(rover => rover.name == roverName)
  // console.log('⛏️', pickaxeUpgrade)
  if (cheese >= 10) {
    cheese -= 10
    roverUpgrade.quantity++
    updateRoverElm()
    updatePickaxeElm()
    updateDrillElm()
    updateCheeseElm()
  }
  // console.log('buyPickaxe')
}





function collectClickUpgrades() {
  clickUpgrades.forEach(clickUpgrade => {
    console.log(clickUpgrade.multiplier)
    cheese += clickUpgrade.multiplier * clickUpgrade.quantity
    console.log(cheese)
    updateCheeseElm()
  })

}


function collectAutoUpgrades() {
  automaticUpgrades.forEach(autoUpgrade => {
    console.log(autoUpgrade.multiplier)
    cheese += autoUpgrade.multiplier * autoUpgrade.quantity
    console.log(cheese)
    updateCheeseElm()
  })

}
