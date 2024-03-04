 # INVERSIONES 
```
INICIO

	Definir p1, p2, p3, in1, in2, in3, total Como Real
	p1 =0.0
	p2 =0.0
	p3 =0.0
	in1 =0.0
	in2 = 0.0
	in3 =0.0
	total = 0.0
	Escribir "Cantidad persona 1:";
	leer p1;
	Escribir "Cantidad persona2:";
	leer p2;
	Escribir "Cantidad persona 3:";
	leer p3;
	total<- p1+p2+p3
	in1<- (p1/total)*100
	in2<- (p2/total)*100
	in3<- (p3/total)*100
	Escribir " la persona 1 invierte el ",in1,"% del total que es",total;
	Escribir " la persona 2 invierte el ",in2," % del total que es ",total;
	Escribir " la persona 3 invierte el ",in3," % del total que es ",total;
	
FIN
```



# NOTAS FINALES 
```
INICIO

	Definir m1, m2, m3, t1m, t2m, t3m, em, ef, t1f, t2f, eq, t1q, t2q, t3q, ttm, ttf, ttq, tff, nfq, pt, pex, ptf, pexf, ptq, pexq  Como Real
	m1 = 0.0
	m2 = 0.0
	m3 = 0.0
	t1m = 0.0
	t2m = 0.0
	t3m = 0.0
	em = 0.0 
	ef = 0.0
	t1f = 0.0
	t2f = 0.0
	eq = 0.0
	t1q = 0.0
	t2q = 0.0
	t3q = 0.0
	ttm = 0.0
	ttf = 0.0
	ttq = 0.0
	pt = 0.0
	pex = 0.0
	ptf = 0.0
	 pexf = 0.0
	 ptq = 0.0
	 pexq = 0.0 
	Escribir "Ingrese la nota de la tarea 1 de matemáticas:";
	leer t1m;
	Escribir "Ingrese la nota de la tarea 2 de matemáticas:";
	leer t2m;
	Escribir "Ingrese la nota de la tarea 3 de matemáticas:";
	leer t3m;
	Escribir " Ingrese la nota del examen de matemáticas:";
	leer em;
	ttm<- (t1m + t2m + t3m) / 3
	pt<-ttm * 0.1
	pex<- em *0.9
	m1<- pt+pex

	Escribir "Ingrese la nota de la tarea 1 de física:";
	leer t1f;
	Escribir "Ingrese la nota de la tarea 2 de física :";
	leer t2f;
	Escribir " Ingrese la nota del examen de física :";
	leer ef;
	ttf<- (t1f + t2f ) / 2
	ptf<-ttf * 0.2
	pexf<- ef *0.8
	m2<- ptf+pexf
	
	Escribir "Ingrese la nota de la tarea 1 de química :";
	leer t1q;
	Escribir "Ingrese la nota de la tarea 2 de química:";
	leer t2q;
	Escribir "Ingrese la nota de la tarea 3 de química:";
	leer t3q;
	Escribir " Ingrese la nota del examen de química :";
	leer eq;
	ttq<- (t1q + t2q + t3q) / 3
	ptq<-ttq * 0.15
	pexq<- eq *0.85
	m3<- ptq+pexq
	Escribir " la nota final de matemáticas   es:",m1;
	Escribir " la nota final de física es:",m2;
	Escribir " la nota final de química  es:",m3;
FIN
```
	




# NUMERO POSITIVO O NEGATIVO 
```
INICIO
	Definir n como real 
	Escribir "Ingrese un número: ";
	leer n;
si n >= 0 Entonces
        Escribir " El número es positivo:",n;
sino 
        Escribir "El número es negativo:",n;
FinSi
FIN
```

# NUMERO MAYOR A 200
```
INICIO
	Definir n como real 
	Escribir "ingrese un número:";
	leer n;
si n > 200 entonces 
        Escribir " El número es mayor que 200:"
sino 
        Escribir " El número es menor que 200:"
FinSi
FIN
```

# RANGO 50-100
```
INICIO
	Definir n como real 
	Escribir "ingrese un número:";
	leer n;
si n >= 50 y n <=100  entonces 
       Escribir " El número está en el rango de 50 100:"
sino 
       Escribir " El número no está en el rango de 50 100:"
FinSi
FIN
```
