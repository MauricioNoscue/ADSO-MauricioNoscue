msgError = "Error, nota no válida"
msgOk = "Nota enviada correctamente"
msgTarea = "Por favor, ingrese la nota de la tarea    "
msgExamen = " ingrese la nota del examen "
msgPromedio = "Para calcular la nota de "

examenM = float(input(msgPromedio + "Maremáticas" + msgExamen))
if examenM > 0 and  examenM <=10:
    print(msgOk)
    tarea1m = float(input(msgTarea + " 1: " ))
    if tarea1m > 0 and  tarea1m <=10:
        print(msgOk)
        tarea2m = float(input(msgTarea + " 2: "))
        if tarea2m > 0 and tarea2m <=10:
            print(msgOk)
            tarea3m = float(input(msgTarea+ "3:"))
            if tarea3m > 0 and tarea3m <=10:
                print(msgOk)

                Examenf = float(input(msgPromedio + "física" + msgExamen))
                if Examenf > 0 and Examenf <=10:
                    print(msgOk)
                    tarea1f = float(input(msgTarea + " 1: "))
                    if tarea1f > 0 and tarea1f <=10:
                        print(msgOk)
                        tarea2f = float(input(msgTarea + "2: "))
                        if tarea2f > 0 and  tarea2f <=10 :
                            print(msgOk)
                            
                            examenq = float(input(msgExamen + "Química" + msgExamen ))
                            if examenq> 0 and examenq <=10:
                                print(msgOk)
                                tarea1q = float(input(msgTarea+ " 1: "))
                                if tarea1q > 0 and tarea1q <=10:
                                    print(msgOk)
                                    tarea2q = float(input(msgTarea+ " 2: "))
                                    if tarea2q > 0 and tarea2q <=10:
                                        print(msgOk)
                                        tarea3q = float(input(msgTarea + "3:"))
                                        if tarea3q > 0 and tarea3q <=10:
                                            print(msgOk)
                                            
                                            promedioMatemáticas = (examenM * 0.9+((tarea1m + tarea2m +tarea3m)/3)*0.1)
                                            promedioFísica  = (Examenf * 0.8 +((tarea1f + tarea2f )/ 2)*0.2)
                                            promedioQuímica = (examenq * 0.85 + ((tarea1q +tarea2q + tarea3q)/ 3)*0.15)
                                            print("La nota final de matemáticas es", promedioMatemáticas)
                                            print("La nota final de física es", promedioFísica)
                                            print("La nota final de química es", promedioQuímica)
                                        else:
                                            print(msgError)
                                    else:
                                        print(msgError)
                                else:
                                    print(msgError)
                            else:
                                print(msgError)
                        else:
                            print(msgError)
                    else:
                        print(msgError)
                else:
                    print(msgError)
            else:
                print(msgError)
        else:
            print(msgError)
    else:
        print(msgError)
else:
    print(msgError)
