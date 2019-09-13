print('---------------------------')

const msg = 'testando'

//funcao simples 1. Transforma texto para uppercase
const upper = (x) => x.toUpperCase()

//funcao simples 2. Adiciona exclamacoes ao final do texto
const excla = (x) => x+'!!!'

//funcao complexa 1.
//Desejo criar funcao que adicione exclamacoes e transforme tudo pra maiusculo
const mescla1 = (upper, excla) => upper(excla(msg)) //msg chumbada

//funcao complexa 2.
//Desejo a mesma coisa, entretando com mensagem passada por parametro pelo usuario
const mescla2 = (upper, excla) => (msg2) => upper(excla(msg2)) //msg dinamica

//criando a nova funcao final onde escolhemos as funcoes simples para mesclar
//e podemos exportar essa nova funcionalidade, deixando transparente
//para o usuario a maneira como foi criada ao mesmo tempo que aumentamos a 
//reusabilidade de codigo (DRY)
const mesclado = mescla2(upper, excla)

//usando a funcao com msg chumbada, temos que mesclar na hora
print(mescla1(upper, excla))

//usando a funcao com msg dinamica, transparente para usuario
print(mesclado('melhor ainda'))

print('---------------------------')
