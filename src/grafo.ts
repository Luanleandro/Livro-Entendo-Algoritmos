let tableHash = new Map<string, string[]>();

tableHash.set('voce', ['alice', 'bob', 'claire']);
tableHash.set('alice', ['peggy']);
tableHash.set('bob', ['peggy', 'anuj']);
tableHash.set('claire', ['jonny', 'thom']);

tableHash.forEach((valor, chave) => {
  console.log(chave, valor);
});
