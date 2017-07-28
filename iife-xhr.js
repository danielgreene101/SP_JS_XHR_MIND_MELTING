function showCarnivores (carnivores) {
    console.log(showCarnivores);
    let preditor = document.getElementById('carni');
    preditor.innerHTML += carnivores.carnivores;
}



function showHerbivores (herbivores) {
    console.log(herbivores);
    let preditor = document.getElementById('herbi');
    preditor.innerHTML += herbivores.herbivores;
}



Predator.loadCarnivores(showCarnivores);



Predator.loadHerbivores(showHerbivores);