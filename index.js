print('---------------------------')

const msg = 'testando'
const upper = (x) => x.toUpperCase()
const excla = (x) => x+'!!!'
const mescla1 = (upper, excla) => upper(excla(msg)) //msg chumbada
const mescla2 = (upper, excla) => (msg2) => upper(excla(msg2)) //msg dinamica
const mesclado = mescla2(upper, excla)
print(mescla1(upper, excla))
print(mesclado('melhor ainda')) //funcao criada transparente para usuario

print('---------------------------')
