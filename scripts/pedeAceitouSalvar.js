import aceitouSalvar from './aceitouSalvar';

if (aceitouSalvar === null) {
    const aceitou = confirm('Voce aceita que a gente salve suas informações?')
    if (!aceitou) {
        alert('Voce pode mudar isso na página de configurações')
    }
    localStorage.setItem('aceitouSalvar', aceitouSalvar);
}
