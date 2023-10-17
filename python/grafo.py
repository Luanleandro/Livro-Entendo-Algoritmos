
#Pesquisa em Largura
grafo = {}
grafo['voce'] = ['Alice', 'Bob', 'Claire']
grafo['Alice'] = ['Peggy']
grafo['Bob'] = ['Peggy', 'Anuj']
grafo['Claire'] = ['Jonny', 'Thom']
grafo['Peggy'] = []
grafo['Anuj'] = []
grafo['Jonny'] = []
grafo['Thom'] = []

# print(grafo['voce'])

from collections import deque

def pessoa_e_vendedor(pessoa):
  return pessoa[-1] == 'm'

def pesquisa(nome):
  fila_de_pesquisa = deque()
  fila_de_pesquisa += grafo[nome]
  verificadas = []
  while fila_de_pesquisa:
    pessoa = fila_de_pesquisa.popleft()
    if not pessoa in verificadas:
      if pessoa_e_vendedor(pessoa, grafo[pessoa]):
        print(f"{pessoa} é um vendedor de manga")
        break
      else:
        fila_de_pesquisa += grafo[pessoa]
        verificadas.append(pessoa)
  print(verificadas)

pesquisa("voce")