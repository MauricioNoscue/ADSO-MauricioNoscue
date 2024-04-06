msgError = "Error, inversión no válida."
msgOk = "Inversión correcta, ok."
msgInput = "Favor, indique la inversión de la persona "
msgOutput = "Porcentaje de inversión de la persona  "
# Cuando se ingresa un dato de tipo String, para un datos que recibe un flaot, se debe usar el try-except

p1 = float(input(msgInput + "1: "))
if p1 > 0:
    print(msgOk)
    p2 = float(input(msgInput + "2: "))
    if p2 > 0:        
        print(msgOk)
        p3 = float(input(msgInput + "3: "))
        if p3 > 0:
            print(msgOk)
            # Cuando el programa llega a este punto, es porque todas las inversiones son válidas.
            it = p1 + p2 + p3

            pp1 = (p1/it)*100
            pp2 = (p2/it)*100
            pp3 = (p3/it)*100

            #Salida 
            print(msgOutput + "1: " + str(pp1)+"%")
            print(msgOutput + "2: " + str(pp2)+"%")
            print(msgOutput + "3: " + str(pp3)+"%")
        else: 
            print(msgError)
    else: 
        print(msgError)

else: 
    print(msgError)