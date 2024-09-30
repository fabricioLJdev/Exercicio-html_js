const form = document.getElementById('formulario');

function validaForm(){
    if (campoB.value > campoA.value) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagemSucesso = 'Certo';
    const mensagemErro = 'Erro';
    
    if (validaForm()) {
        const containerMessagemSucesso = document.querySelector('.sucess-message');
        containerMessagemSucesso.innerHTML = mensagemSucesso;
        containerMessagemSucesso.style.display = 'block';
    }else{
        const containerMessagemErro = document.querySelector('.sucess-message')
        containerMessagemErro.innerHTML = mensagemErro;
        containerMessagemErro.style.display = 'block';
    }    
})