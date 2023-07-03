file1 = open('passwords.txt', 'r') 
Lines = file1.readlines() 
  
 
for line in Lines: 
    print(' "{}", '.format(line.strip()))