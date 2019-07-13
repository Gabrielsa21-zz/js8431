import aceitouSalvar from './pedeAceitouSalvar';

if (aceitouSalvar === true) {

    let paginaInicial = localStorage.getItem('paginaInicial');

    if (!paginaInicial) {
        paginaInicial = prompt('Escolha a página inicial');
    }

    if (paginaInicial) {
        if (
            paginaInicial.substring(0, 7) !== 'http://' &&
            paginaInicial.substring(0, 8) !== 'http://'
        ) {
            paginaInicial = 'http://' + paginaInicial;
        }
        $janelaPrincipal.src = paginaInicial
        $inputEndereco.value = paginaInicial
        localStorage.setItem('paginaInicial', paginaInicial);
    }
}