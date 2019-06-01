def lcs(A,B):
    '''return the longest common substring (lcs) between two strings, A and B.
    '''
    L=[['']*len(B) for a in range(len(A))]
    for a in range(0, len(A)):
        for b in range(0, len(B)):

            left = ''
            if a > 0:
                left = L[a-1][b]

            up = ''
            if b > 0:
                up = L[a][b-1]
        
            diag = ''
            if a > 0 and b > 0:
                diag = L[a-1][b-1]

            # if they are the same, add the letter there to previous
            if A[a] == B[b]:
                L[a][b] = "%s%s" %(diag, A[a])
            else:
                L[a][b] = max([left, up], key=len)
            

    return L[a][b]
    
if __name__ == "__main__":
  cadena_1 = input('Cadena 1: ')
  cadena_2 = input('Cadena 2: ')
  print(lcs(cadena_1,cadena_2))