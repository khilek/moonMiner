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
  },
  {
    name: 'miner',
    price: 800,
    quantity: 0,
    multiplier: 30
  }
];



let cheese = 0


function moonMine() {
  cheese++
  updateCheeseElm()
  collectClickUpgrades()
  collectAutoUpgrades()
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

function updateMinerElm() {
  const minerUpgrade = automaticUpgrades.find(miner => miner.name == 'miner')
  console.log('miner', minerUpgrade)
  let minerElm = document.getElementById('miner')
  minerElm.innerText = `${minerUpgrade.quantity}`
}



function buyPickaxe(pickaxeName) {
  // console.log('Buying ⛏️', pickaxeName)
  const pickaxeUpgrade = clickUpgrades.find(pickaxe => pickaxe.name == pickaxeName)
  // console.log('⛏️', pickaxeUpgrade)
  if (cheese >= 100) {
    cheese -= 100
    pickaxeUpgrade.quantity++
    updatePickaxeElm()
    // updateDrillElm()
    updateCheeseElm()
  }
  // console.log('buyPickaxe')
}

function buyDrill(drillName) {
  // console.log('Buying ⛏️', pickaxeName)
  const drillUpgrade = clickUpgrades.find(drill => drill.name == drillName)
  // console.log('⛏️', pickaxeUpgrade)
  if (cheese >= 200) {
    cheese -= 200
    drillUpgrade.quantity++
    // updatePickaxeElm()
    updateDrillElm()
    updateCheeseElm()
  }
}

function buyRover(roverName) {
  // console.log('Buying ⛏️', pickaxeName)
  const roverUpgrade = automaticUpgrades.find(rover => rover.name == roverName)
  // console.log('⛏️', pickaxeUpgrade)
  if (cheese >= 600) {
    cheese -= 600
    roverUpgrade.quantity++
    updateRoverElm()
    // updatePickaxeElm()
    // updateDrillElm()
    updateCheeseElm()
  }
}

function buyMiner(minerName) {
  // console.log('Buying ⛏️', pickaxeName)
  const minerUpgrade = automaticUpgrades.find(miner => miner.name == minerName)
  // console.log('⛏️', pickaxeUpgrade)
  if (cheese >= 800) {
    cheese -= 800
    minerUpgrade.quantity++
    // updateRoverElm()
    updateMinerElm()
    // updatePickaxeElm()
    // updateDrillElm()
    updateCheeseElm()
  }
}




function collectClickUpgrades() {
  clickUpgrades.forEach(clickUpgrade => {
    // console.log(clickUpgrade.multiplier)
    cheese += clickUpgrade.multiplier * clickUpgrade.quantity
    // console.log(cheese)
    updateCheeseElm()
  })

}


function collectAutoUpgrades() {
  automaticUpgrades.forEach(autoUpgrade => {
    // console.log(autoUpgrade.multiplier)
    cheese += autoUpgrade.multiplier * autoUpgrade.quantity
    // console.log(cheese)
    setInterval(collectAutoUpgrades, 3000);
    updateCheeseElm()
  })

}



