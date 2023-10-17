caderno = dict()
caderno['Maçã'] = 0.67
caderno['Leite'] = 1.37
caderno['Abacate'] = 0.97
print(caderno['Abacate'])

lista_telefonica = {}
lista_telefonica['jenny'] = 768859 
lista_telefonica['emergency'] = 335353 

voted = {}
def vote(name):
  if voted.get(name):
    print("Mande embora!")
  else: 
    voted[name] = True
    print("Deixe Votar!")

vote("Tom")
vote("Enrik")
vote("Tom")

cache = {}
def pega_pagina(url):
  if cache.get(url):
    return cache[url]
  else: 
    dados = pega_dados_servidor(url)
    cache[url] = dados
    return dados