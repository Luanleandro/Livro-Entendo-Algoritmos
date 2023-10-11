def procurarPelaChave(caixa):
  for item in caixa:
    if item == 'caixa':
      procurarPelaChave(item)
    elif item == "chave":
      print("Achei a chave")

# caixa = ['caixa', 'caixa', 'caixa', 'chave']

# procurarPelaChave(caixa)


def listsum(numList):
    if len(numList) == 1:
        return numList[0]
    else:
        print(numList[1:])
        return numList[0] + listsum(numList[1:])

print(listsum([1,3,5,7,9]))