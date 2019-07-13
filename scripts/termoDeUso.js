const aceitouOsTermosAnteriormente = localStorage.getItem('aceitouOsTermos');

if (aceitouOsTermosAnteriormente === null) {
    const nome = prompt('Olá, qual o seu nome?');
    const aceitouOsTermos = confirm(`
        Olá ${nome}!  
        Antes de usar o Cake, precisamos que 
        voce aceite nossos termos de uso:

        * Voce aceita que este software foi 
        feito por pessoas que participaram 
        do curso de javaScript.
        * Voce aceita que o código dessas 
        pessoas pode acessar tudo o que 
        voce digitar aqui.
        * Voce aceita que tudo aqui está
        em desenvolvimento e por isso não
        recomendamos que voce troque de 
        navegador agora
    `)

    if (!aceitouOsTermos) {
        alert(
            nome + ', para continuar é necessario que voce aceite os termos de uso'
        )
        window.close()
    } else {
        localStorage.setItem('aceitouOsTermos', true);
    }
}


