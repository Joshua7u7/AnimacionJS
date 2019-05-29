def MAX(n1,n2):
    if(n1==n2 or n1<n2):
        return n2
    else:
        return n1
      

def esDiferente(n1,n2,n3,n4):
    if(n1!=n4 and n2!=n4 and n3!=n4):
        return 1
    elif(n1==n4 and n2==n4 and n3==n4):
        return 2
    elif(n3==n4 and n2!=n4):
        return 3
    elif(n1==n4 and n3!=n4 and n2!=n4):
        return 4
    else:
        return 4
      
def inicializar(cadena_1,cadena_2):
  matriz = [ [ 0 for j in range(len(cadena_1)+1) ] for i in range(len(cadena_2)+1)]
  cadena_1 = [token for token in cadena_1]
  cadena_2 = [token for token in cadena_2]
  fila_1 = 0; fila_2 = 1;
  for index_2 in range(len(cadena_2)):
      if(fila_2<=len(cadena_2)):
          col_1 = 1; col_2 = 0;
          pos = 1
          for index_1 in range(len(cadena_1)):
              if(col_1<=len(cadena_1)):

                  if(cadena_1[index_1]==cadena_2[index_2]):
                      aux = MAX(matriz[fila_1][col_1],matriz[fila_2][col_2])
                      if( index_1>aux and index_2<aux):
                          if(pos<=len(cadena_1)):
                              if(fila_2<=len(cadena_2)):
                                  matriz[fila_2][pos] = aux
                                  pos+=1
                      elif (index_2>index_1 and index_1<aux):
                          if(pos<=len(cadena_1)):
                              if(fila_2<=len(cadena_2)):
                                  matriz[fila_2][pos] = aux
                                  pos+=1
                      else:
                          if(pos<=len(cadena_1)):
                              if(fila_2<=len(cadena_2)):
                                  matriz[fila_2][pos] = aux+1
                                  pos+=1
                  else:

                      aux = MAX(matriz[fila_1][col_1],matriz[fila_2][col_2])
                      matriz[fila_2][pos] = aux
                      pos+=1

              col_1+=1; col_2+=1

      fila_1+=1; fila_2+=1;
  subsecuencia(matriz,cadena_1,cadena_2)
  
def subsecuencia(matriz,cadena_1,cadena_2):
  fila_2 = len(matriz)-1; fila_1 = len(matriz)-2
  izquierdo = len(matriz[1])-2; derecho = len(matriz[1])-1
  pos = len(cadena_2)-1; subsecuencia = []

  while( (fila_1-1)>=-1 ):
          n1 = matriz[fila_1][izquierdo]; n2 = matriz[fila_1][derecho]
          n3 = matriz[fila_2][izquierdo]; n4 = matriz[fila_2][derecho]
          opcion = esDiferente(n1,n2,n3,n4)
          if(opcion==1):
              subsecuencia.append(cadena_2[pos])
              fila_2-=1; fila_1-=1;
              izquierdo-=1; derecho-=1;
              if(pos>=0):
                pos-=1
              else:
                fila_1=-2;
          elif(opcion==2 or opcion==3):
              izquierdo-=1; derecho-=1;
          elif(opcion==4):
              fila_1-=1; fila_2-=1
              if(pos>=0):
                pos-=1;
              else:
                fila_1=-2;

  print(''.join(subsecuencia[::-1]))
  
  
if __name__ == "__main__":
  cadena_1 = input('Cadena 1: ')
  cadena_2 = input('Cadena 2: ')
  inicializar(cadena_1,cadena_2)