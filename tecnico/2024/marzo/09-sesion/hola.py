msgError = "Error, nota no válida"
msgOk = "Nota enviada correctamente"
msgTaream = "Por favor, ingrese la tarea de matemáticas"
msgExamenm = "Por favor, ingrese el examen de matemáticas"
msgTareaf = "Por favor, ingrese la tarea de física"
msgExamenf = "Por favor, ingrese el examen de física"
msgTareaq = "Por favor, ingrese la tarea de química"
msgExamenq = "Por favor, ingrese el examen de química"

tarea1m = float(input(msgTaream + " 1: "))
if tarea1m > 0:
    print(msgOk)
    tarea2m = float(input(msgTaream + " 2: "))
    if tarea2m > 0:
        print(msgOk)
        tarea3m = float(input(msgTaream + " 3: "))
        if tarea3m > 0:
            print(msgOk)
            examenM = float(input(msgExamenm + ":"))
            if examenM > 0:
                print(msgOk)

                porcentajeTareasm = ((tarea1m + tarea2m + tarea3m) / 3) * 0.1
                porcentajeExamenm = (examenM * 0.9)
                notaFinal1 = porcentajeTareasm + porcentajeExamenm

                tarea1f = float(input(msgTareaf + " 1: "))
                if tarea1f > 0:
                    print(msgOk)
                    tarea2f = float(input(msgTareaf + " 2: "))
                    if tarea2f > 0:
                        print(msgOk)
                        Examenf = float(input(msgExamenf + ": "))
                        if Examenf > 0:
                            print(msgOk)
                            porcentajeTareasf = ((tarea1f + tarea2f) / 2) * 0.2
                            porcentajeExamenf = (Examenf * 0.8)
                            notaFinal2 = porcentajeExamenf + porcentajeTareasf
                            
                            tarea1q = float(input(msgTareaq + " 1: "))
                            if tarea1q > 0:
                                print(msgOk)
                                tarea2q = float(input(msgTareaq + " 2: "))
                                if tarea2q > 0:
                                    print(msgOk)
                                    tarea3q = float(input(msgTareaq + " 3: "))
                                    if tarea3q > 0:
                                        print(msgOk)
                                        examenq = float(input(msgExamenq + ":"))
                                        if examenq > 0:
                                            print(msgOk)
                                            porcentajeTareasq = ((tarea1q + tarea2q + tarea3q) / 3) * 0.15
                                            porcentajeExamenq = (examenq * 0.85)
                                            notaFinal3 = porcentajeExamenq + porcentajeTareasq
                                            print("La nota final de matemáticas es", notaFinal1)
                                            print("La nota final de física es", notaFinal2)
                                            print("La nota final de química es", notaFinal3)
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
