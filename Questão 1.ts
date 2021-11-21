function Desconto(valor: number, desconto: number): number {
  return (ValorFinal = valor - valor * (desconto / 100));
}
let valor = parseInt(prompt('Digite um valor:'));
let desconto = parseInt(prompt('Digite um valor de desconto:'));
let ValorFinal = valor - valor * (desconto / 100);
console.log('Preço Final:' + ValorFinal);
