let grid = document.getElementById('main');
let x = 0

console.log(grid)

function squares(){
    let div = document.createElement('div');
    div.classList.add('quadrato');
    let num = div.innerText = x += 1

    return div;
}

btn.addEventListener('click', function(){

    for (let i = 0; i < 100; i++) {
    
        let quadrati = squares();
    
       quadrati.addEventListener('click', function(){
            console.log(this);
            this.classList.toggle('background');
        })
       
        
        grid.append(quadrati) 
    }

})

