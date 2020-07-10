const escreve = (texto) => console.log(texto)
function consultaCep() {
  const CEP = document.getElementById('cep').value
  const viaCEP = 'https://viacep.com.br/ws/' + CEP + '/json/'
  $.ajax(viaCEP, {
        method: 'get',
        success: (dado) => {
            // document.getElementById('estado').innerHTML     = dado.uf
            // document.getElementById('cidade').innerHTML     = dado.localidade
            // document.getElementById('bairro').innerHTML     = dado.bairro
            // document.getElementById('logradouro').innerHTML = dado.logradouro
            $('#estado').html       (dado.uf) 
            $('#cidade').html       (dado.localidade)
            $('#bairro').html       (dado.bairro)
            $('#logradouro').html   (dado.logradouro)

        }
    })
}

function aoCarregar() {
    document.getElementById('cep').onkeypress = tecla => { 
        if (tecla.which == 13 || tecla.key == 13 || tecla.keyCode == 13) consultaCep()
    }
}