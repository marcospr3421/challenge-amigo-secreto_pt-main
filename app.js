let amigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if (amigo == ''){
        alert('Por favor, insira um nome válido');
        return;
    } else if (amigos.includes(amigo)) {
        alert('Este nome já foi adicionado');
        return;
    } else {
        amigos.push(amigo);
        console.log(amigos);
        document.querySelector('input').value = '';
        return amigo;
    }
}

function mostrarAmigos(){
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
    for (let amigo of amigos){
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    let amigosQuantidade = amigos.length;
    if (amigosQuantidade == 0){
        alert('Por favor, adicione amigos antes de sortear');
        return;
    } else {
        let sorteado = amigos.splice(Math.floor(Math.random() * amigosQuantidade), 1)[0];
        console.log(amigos);
        alert(`O amigo sorteado foi: ${sorteado}`);
    }
    
}

