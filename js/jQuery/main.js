
const escreve = (texto) => console.log(texto)

function consultaCep() {
  const CEP = document.getElementById('cep').value
  const viaCEP = 'https://viacep.com.br/ws/' + CEP + '/json/'
//realiza uma requisição GET para a url indicada (a API do ViaCEP)
//   $.ajax(viaCEP, {
//         method: 'get',//segunda a documentação, a chave aqui seria "type" e não "method"
//         success: (dado) => {
//             // document.getElementById('estado').innerHTML     = dado.uf
//             // document.getElementById('cidade').innerHTML     = dado.localidade
//             // document.getElementById('bairro').innerHTML     = dado.bairro
//             // document.getElementById('logradouro').innerHTML = dado.logradouro
//             //Alternativamente, usando jQuery
//             $('#estado').html       (dado.uf) 
//             $('#cidade').html       (dado.localidade)
//             $('#bairro').html       (dado.bairro)
//             $('#logradouro').html   (dado.logradouro)
//             $('#cep_titulo').html          ("CEP " + dado.cep)
//             // $(".teste").show();
//             $(".teste").fadeIn("slow");
//         }
//     })

//uma forma alternativa de consumir a API ViaCEP também com jQuery
    $.get(viaCEP, (dado) =>
    {
        $('#estado').html       (dado.uf) 
        $('#cidade').html       (dado.localidade)
        $('#bairro').html       (dado.bairro)
        $('#logradouro').html   (dado.logradouro)
        $('#cep_titulo').html          ("CEP " + dado.cep)
        $(".teste").fadeIn("slow");
    })
}


//método do jQuery alternativo ao body.onLoad()
$(() => {
document.getElementById('cep').onkeypress = tecla => { 
    if (tecla.which == 13 || tecla.key == 13 || tecla.keyCode == 13) consultaCep()
}
$(".teste").fadeOut()
})



function aoCarregar() {
    // document.getElementById('cep').onkeypress = tecla => { 
    //     if (tecla.which == 13 || tecla.key == 13 || tecla.keyCode == 13) consultaCep()
    // }
    // $(".teste").hide();
    // $(".teste").fadeOut("slow");
}