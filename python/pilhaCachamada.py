def sauda(nome): 
  print ("Olá, " + nome + '?')
  sauda2(nome)
  print("Preparando para dar tchau...")
  tchau()

def sauda2(nome): 
    print ("Como vai " + nome + '?')

def tchau():
   print("ok, tchau!")

sauda("Luan")