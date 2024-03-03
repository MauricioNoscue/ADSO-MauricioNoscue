exm= float(input("Ingrese la nota del examen de matemáticas:"))
t1m= float(input("Ingrese la nota de la tarea 1:"))
t2m = float(input("Ingrese la nota de la tarea 2: "))
t3m = float(input("Ingrese la nota de la tarea 3:"))
ttm = (t1m + t2m + t3m)/3
ptm = ttm *0.1
pexm = exm * 0.9
ntfm = ptm + pexm


exf= float(input("Ingrese la nota del examen de física :"))
t1f = float(input("Ingrese la nota de la tarea 1:"))
t2f  = float(input("Ingrese la nota de la tarea 2: "))

ttf = (t1f + t2f )/2
ptf = ttf *0.2
pexf = exf * 0.8
ntff = ptf + pexf


exq= float(input("Ingrese la nota del examen de química:"))
t1q= float(input("Ingrese la nota de la tarea 1:"))
t2q = float(input("Ingrese la nota de la tarea 2: "))
t3q = float(input("Ingrese la nota de la tarea 3:"))
ttq = (t1q + t2q + t3q)/3
ptq = ttq *0.15
pexq = exq * 0.85
ntfq = ptq + pexq

print ("la nota final en matemáticas es :", ntfm)
print ("la nota final en física es :", ntff)
print ("la nota final en química es :", ntfq)