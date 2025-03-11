let hoogte = 13;

for (let laag = 1 ; laag <= hoogte ; laag += 2){
    let rij = '';
    // spaties toevoegen
    for (let spaties = 1 ; spaties <= (hoogte - laag)/2; spaties++){
        rij += ' ';
    }
    // sterren toevoegen
    for (let ster = 1; ster <= laag; ster++) {
        rij += '*';
    }
    
    console.log(rij);
}
for (let laag = hoogte-2; laag >= 1 ; laag -=2){
    let rij = '';
    // spaties toevoegen
    for (let spaties = 1 ; spaties <= (hoogte - laag)/2; spaties++){
        rij += ' ';
    }
    // sterren toevoegen
    for (let ster = 1; ster <= laag; ster++) {
        rij += '*';
    }
    
    console.log(rij);
}