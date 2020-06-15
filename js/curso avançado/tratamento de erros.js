const escreve = (texto) => console.log(texto)
class ErroPersonalizado extends Error{
    constructor({mensagem,dados}) {
        super(mensagem)
        this.dados = dados
    }
}
try 
{
    const meuErro = new Error('meu erro personalizado')
    meuErro.message = 'teste'
    meuErro.name = 'nome do meu erro'    

    const meuErro2 = new ErroPersonalizado({
        mensagem : 'mensagem personalizada de erro 2',
        dados : {
            tipo : 'erro de servidor'
        }
    })
    meuErro2.name = 'nome do erro 2'

    throw meuErro2
    escreve(nome)
    const nome = 'Daniel'
} catch(erro) {
    escreve(erro)
    if (erro.dados.tipo == 'erro de servidor') escreve('esse erro é bacana ...')
}
escreve('acabou o código.')