
/**posição do elemento */
const nome = "cle3er"
const sobrenome = 'g4rz4ro'

console.log(nome.charAt(3), " é o terceiro char do seu nome")
console.log(nome.charAt(6), " se nao existir essa posição retorna nulo")
console.log(nome.charCodeAt(2), " valor unicode da posição escolhida")
console.log(nome.indexOf("e"), " indice, a posição do char escolhido")

/** mostrando os caracteres */
console.log(nome.substring(1), " segue a partir do indice escolhido, inclusive o escolhido")
console.log(nome.substring(0, 3), " inicia no indice 0 até o 3, exclusive indice 3")

/*Concatenar {literais} */
console.log('Aluno '.concat(nome).concat("!"))

/*Replace char */
console.log(nome.replace(3, 'b'))
console.log(nome.toUpperCase().replace(3, 'B'))

/*regex */
console.log(sobrenome.toUpperCase().replace(/\d/, 'a'), " substitui um digito")
console.log(sobrenome.toUpperCase().replace(/\d/g, 'a'), " flag global, todos os digitos")
console.log(sobrenome.toUpperCase().replace(/\w/, 'V')," substitui uma letra")
console.log(sobrenome.toUpperCase().replace(/\w/g, 'V')," todas as letras e digitos")

/**Usando split para array */
console.log('Cleber,Nadia,Barbara'.split(','), " para gerar um array")
console.log('Cleber,Nadia,Barbara'.split(/,/), " para gerar um array")
console.log('Cleber, Nadia, Barbara'.split(';'), " para gerar um array")
console.log('Cleber, Nadia, Barbara'.split(':'), " para gerar um array")


