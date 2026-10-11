/* ClasesConCelia13 · Exámenes de prueba de Bachillerato (estilo PAU/EvAU Madrid).
   Cada tema tiene 3 exámenes de 3 ejercicios (3,5 + 3,5 + 3 = 10 puntos). */
(() => {
  'use strict';
  const R = String.raw;
  // Dentro de las fórmulas, < y > se escriben como \lt y \gt para que el HTML no los lea como etiquetas.
  const safe = h => h.replace(/\$[^$]*\$/g, m => m.replace(/</g, '\\lt ').replace(/>/g, '\\gt '));
  const Q = (p, e, s) => ({ p, e: safe(e), s: safe(s) });
  // Filas separadas por una sola barra invertida en el argumento: M('1&2\\0&1')
  const M = s => R`\begin{pmatrix}` + s.replace(/\\/g, '\\\\') + R`\end{pmatrix}`;

  /* =========================== 2º BACHILLERATO =========================== */
  const B2 = [
    { n: 'T1', name: 'Matrices y determinantes', desc: 'Operaciones, potencias, rango, inversa y ecuaciones matriciales.', exams: [
      [
        Q(3.5, R`Dadas $A=${M('1&2\\0&1')}$ y $B=${M('2&-1\\1&0')}$: <br>a) (1,5 p) Calcula $AB-BA$. <br>b) (2 p) Calcula $A^2$, $A^3$ y deduce $A^n$.`,
          R`a) $AB=${M('4&-1\\1&0')}$, $BA=${M('2&3\\1&2')}$, así que $AB-BA=${M('2&-4\\0&-2')}$. <br>b) $A^2=${M('1&4\\0&1')}$, $A^3=${M('1&6\\0&1')}$. Cada vez se suman 2 en la esquina: $A^n=${M('1&2n\\0&1')}$.`),
        Q(3.5, R`Estudia el rango de $M=${M('1&1&k\\1&k&1\\k&1&1')}$ según los valores de $k$.`,
          R`$|M|=-k^3+3k-2=-(k-1)^2(k+2)$, que se anula en $k=1$ y $k=-2$. <br>• Si $k\neq1$ y $k\neq-2$: $\text{rg}(M)=3$. <br>• Si $k=1$: todas las filas son $(1,1,1)$, $\text{rg}(M)=1$. <br>• Si $k=-2$: el menor $\begin{vmatrix}1&1\\1&-2\end{vmatrix}=-3\neq0$, así que $\text{rg}(M)=2$.`),
        Q(3, R`Halla la matriz $X$ que cumple $AX+B=I$, siendo $A=${M('2&1\\1&1')}$ y $B=${M('1&0\\2&1')}$.`,
          R`Despejamos: $AX=I-B \Rightarrow X=A^{-1}(I-B)$. Como $|A|=1$, $A^{-1}=${M('1&-1\\-1&2')}$. <br>$I-B=${M('0&0\\-2&0')}$, luego $X=${M('1&-1\\-1&2')}${M('0&0\\-2&0')}=${M('2&0\\-4&0')}$.`)
      ],
      [
        Q(3.5, R`Sea $A=${M('1&0&-1\\0&m&3\\4&1&-m')}$. <br>a) (1,5 p) ¿Para qué valores de $m$ tiene inversa? <br>b) (2 p) Calcula $A^{-1}$ para $m=2$.`,
          R`a) $|A|=-m^2+4m-3=-(m-1)(m-3)$. Tiene inversa si $m\neq1$ y $m\neq3$. <br>b) Con $m=2$, $|A|=1$. La matriz adjunta traspuesta da $A^{-1}=${M('-7&-1&2\\12&2&-3\\-8&-1&2')}$. (Comprueba que $AA^{-1}=I$.)`),
        Q(3.5, R`Sabiendo que $\begin{vmatrix}a&b&c\\d&e&f\\g&h&i\end{vmatrix}=3$, calcula: <br>a) $\begin{vmatrix}d&e&f\\a&b&c\\g&h&i\end{vmatrix}$ &nbsp; b) $\begin{vmatrix}2a&2b&2c\\d&e&f\\g+3a&h+3b&i+3c\end{vmatrix}$ &nbsp; c) $|2A^{-1}|$, donde $A$ es la matriz del enunciado.`,
          R`a) Intercambiar dos filas cambia el signo: $-3$. <br>b) Sumar a una fila un múltiplo de otra no cambia el determinante, y sacar el 2 de la primera fila lo multiplica por 2: $2\cdot3=6$. <br>c) $|2A^{-1}|=2^3\cdot\dfrac{1}{|A|}=\dfrac{8}{3}$.`),
        Q(3, R`Resuelve la ecuación matricial $XA=B-2X$ con $A=${M('1&1\\0&1')}$ y $B=${M('3&4\\0&9')}$.`,
          R`$XA+2X=B \Rightarrow X(A+2I)=B \Rightarrow X=B(A+2I)^{-1}$. <br>$A+2I=${M('3&1\\0&3')}$, con inversa $\dfrac19${M('3&-1\\0&3')}$. <br>$X=\dfrac19${M('3&4\\0&9')}${M('3&-1\\0&3')}=\dfrac19${M('9&9\\0&27')}=${M('1&1\\0&3')}$.`)
      ],
      [
        Q(3.5, R`Sea $A=${M('2&-1\\1&0')}$. <br>a) (1,5 p) Comprueba que $A^2-2A+I=0$. <br>b) (2 p) Usa esa igualdad para calcular $A^{-1}$ y $A^3$.`,
          R`a) $A^2=${M('3&-2\\2&-1')}$ y $A^2-2A+I=${M('3-4+1&-2+2\\2-2&-1+0+1')}=0$. <br>b) $A(2I-A)=I \Rightarrow A^{-1}=2I-A=${M('0&1\\-1&2')}$. <br>$A^2=2A-I \Rightarrow A^3=2A^2-A=3A-2I=${M('4&-3\\3&-2')}$.`),
        Q(3.5, R`Estudia el rango de $${M('1&2&3&a\\2&4&6&8\\3&6&9&12')}$ según $a$.`,
          R`Las columnas 2 y 3 son múltiplos de la 1. Solo importan las columnas 1 y 4: el menor $\begin{vmatrix}1&a\\2&8\end{vmatrix}=8-2a$. <br>• Si $a\neq4$: rango 2. <br>• Si $a=4$: todas las filas son proporcionales a $(1,2,3,4)$, rango 1.`),
        Q(3, R`Calcula el determinante $\begin{vmatrix}1&0&2&1\\2&1&0&3\\0&1&1&0\\1&2&3&1\end{vmatrix}$.`,
          R`Hacemos ceros en la primera columna: $F_2-2F_1$ y $F_4-F_1$: <br>$\begin{vmatrix}1&0&2&1\\0&1&-4&1\\0&1&1&0\\0&2&1&0\end{vmatrix}=\begin{vmatrix}1&-4&1\\1&1&0\\2&1&0\end{vmatrix}$. <br>Desarrollando por la tercera columna: $1\cdot\begin{vmatrix}1&1\\2&1\end{vmatrix}=1-2=-1$.`)
      ]
    ] },
    { n: 'T2', name: 'Sistemas de ecuaciones', desc: 'Teorema de Rouché-Frobenius, discusión con parámetro, Cramer y problemas.', exams: [
      [
        Q(3.5, R`Discute y resuelve según $a$: $\begin{cases}ax+y+z=1\\x+ay+z=1\\x+y+az=1\end{cases}$`,
          R`$|A|=(a-1)^2(a+2)$. <br>• $a\neq1,-2$: SCD. Por simetría $x=y=z$ y $(a+2)x=1$: $x=y=z=\dfrac{1}{a+2}$. <br>• $a=1$: las tres ecuaciones son $x+y+z=1$; SCI con dos parámetros: $(1-\lambda-\mu,\lambda,\mu)$. <br>• $a=-2$: sumando las tres ecuaciones queda $0=3$: SI.`),
        Q(3.5, R`Resuelve por Cramer: $\begin{cases}2x-y+z=3\\x+y-z=0\\3x+2y+z=7\end{cases}$`,
          R`$|A|=9$. $x=\dfrac{1}{9}\begin{vmatrix}3&-1&1\\0&1&-1\\7&2&1\end{vmatrix}=\dfrac99=1$, $y=\dfrac{1}{9}\begin{vmatrix}2&3&1\\1&0&-1\\3&7&1\end{vmatrix}=\dfrac99=1$, $z=\dfrac19\begin{vmatrix}2&-1&3\\1&1&0\\3&2&7\end{vmatrix}=\dfrac{18}{9}=2$. <br>Solución: $(1,1,2)$.`),
        Q(3, R`Una tienda mezcla tres cafés de 8, 10 y 12 €/kg. Prepara 10 kg que cuestan 104 € en total, y usa el doble de kilos del café de 12 € que del de 8 €. ¿Cuántos kilos de cada uno usa?`,
          R`$x+y+z=10,\quad 8x+10y+12z=104,\quad z=2x$. <br>Sustituyendo: $y=10-3x$ y $8x+100-30x+24x=104\Rightarrow x=2$. <br>Solución: 2 kg de 8 €, 4 kg de 10 € y 4 kg de 12 €.`)
      ],
      [
        Q(3.5, R`Dado $\begin{cases}x+2y-z=1\\2x+y+z=m\\x-y+mz=0\end{cases}$ <br>a) (2 p) Discútelo según $m$. <br>b) (1,5 p) Resuélvelo para $m=1$.`,
          R`a) $|A|=-3(m-2)$. Si $m\neq2$: SCD. Si $m=2$: $E_2-E_1$ da $x-y+2z=1$, que contradice $E_3$ ($x-y+2z=0$): SI. <br>b) Con $m=1$: de $E_3$, $x=y-z$; sustituyendo, $3y-2z=1$ y $3y-z=1$, luego $z=0$, $y=\dfrac13$, $x=\dfrac13$.`),
        Q(3.5, R`Halla $k$ para que el sistema homogéneo $\begin{cases}x+y+z=0\\2x-y+kz=0\\x-2y+z=0\end{cases}$ tenga soluciones distintas de la trivial y resuélvelo.`,
          R`Necesitamos $|A|=3k-6=0$, es decir, $k=2$. <br>Restando la 1ª y la 3ª: $3y=0\Rightarrow y=0$, y entonces $x=-z$. <br>Soluciones: $(-\lambda,0,\lambda)$, $\lambda\in\mathbb{R}$.`),
        Q(3, R`Las edades de un padre, una madre y su hija suman 97 años. El padre tiene 2 años más que la madre, y dentro de 10 años la madre tendrá el doble de edad que la hija. Halla las tres edades.`,
          R`$p+m+h=97,\ p=m+2,\ m+10=2(h+10)$. <br>Entonces $m=2h+10$, $p=2h+12$ y $5h+22=97\Rightarrow h=15$. <br>Hija 15, madre 40, padre 42.`)
      ],
      [
        Q(3.5, R`Discute según $a$ y resuelve cuando sea compatible indeterminado: $\begin{cases}x+y=1\\ay+z=0\\x+(a+1)y+az=a+1\end{cases}$`,
          R`$|A|=a(a-1)$. <br>• $a\neq0,1$: SCD. <br>• $a=1$: $E_3-E_1$ da $y+z=1$, que contradice $E_2$ ($y+z=0$): SI. <br>• $a=0$: queda $x+y=1,\ z=0$: SCI. Solución $(1-\lambda,\lambda,0)$.`),
        Q(3.5, R`Añade una ecuación al sistema $\begin{cases}x+y-z=1\\2x-y+z=2\end{cases}$ para que resulte: a) incompatible; b) compatible indeterminado. Justifica.`,
          R`a) Una ecuación con los mismos coeficientes que la primera y distinto término independiente, por ejemplo $x+y-z=5$: contradice a la primera. <br>b) Una combinación lineal de las dos, por ejemplo su suma $3x=3$: no aporta información nueva y el rango sigue siendo 2 con 3 incógnitas.`),
        Q(3, R`Tres números suman 12. El primero menos el segundo vale 1, y el triple del tercero es la suma de los otros dos. Halla los números.`,
          R`$x+y+z=12,\ x-y=1,\ 3z=x+y$. Sustituyendo $x+y=3z$: $4z=12\Rightarrow z=3$. Luego $x+y=9$, $x-y=1$: $x=5$, $y=4$.`)
      ]
    ] },
    { n: 'T3', name: 'Rectas y planos en el espacio', desc: 'Ecuaciones, posiciones relativas e intersecciones.', exams: [
      [
        Q(3.5, R`Halla la ecuación general del plano que pasa por $A(1,0,2)$, $B(2,1,0)$ y $C(0,1,1)$.`,
          R`$\vec{AB}=(1,1,-2)$, $\vec{AC}=(-1,1,-1)$, normal $\vec n=\vec{AB}\times\vec{AC}=(1,3,2)$. <br>$(x-1)+3y+2(z-2)=0 \Rightarrow x+3y+2z-5=0$. (Comprueba con $B$ y $C$.)`),
        Q(3.5, R`Estudia la posición relativa de $r:\ \dfrac{x-1}{2}=\dfrac{y}{1}=\dfrac{z+1}{-1}$ y $s:\ (x,y,z)=(0,1,2)+\lambda(1,-1,1)$.`,
          R`$P=(1,0,-1)$, $\vec u=(2,1,-1)$; $Q=(0,1,2)$, $\vec v=(1,-1,1)$. Los vectores no son proporcionales. <br>$\det[\vec{PQ},\vec u,\vec v]=\begin{vmatrix}-1&1&3\\2&1&-1\\1&-1&1\end{vmatrix}=-12\neq0$: las rectas <b>se cruzan</b>.`),
        Q(3, R`Halla la recta que pasa por $P(1,2,3)$ y es perpendicular al plano $\pi:\ 2x-y+z=4$, y el punto donde corta a $\pi$.`,
          R`$r:\ (1+2t,\ 2-t,\ 3+t)$. Sustituyendo en $\pi$: $6t+3=4\Rightarrow t=\dfrac16$. <br>Punto de corte: $\left(\dfrac43,\dfrac{11}{6},\dfrac{19}{6}\right)$.`)
      ],
      [
        Q(3.5, R`Estudia la posición relativa de los planos $\pi_1:\ x+y-z=1$, $\pi_2:\ 2x+2y-2z=3$ y $\pi_3:\ x-y+z=1$.`,
          R`$\pi_1$ y $\pi_2$ tienen normales proporcionales pero $\dfrac11\neq\dfrac32$ en el término independiente: son <b>paralelos</b>. $\pi_3$ no es paralelo a ellos, así que los corta en dos rectas paralelas.`),
        Q(3.5, R`Escribe en paramétricas la recta $r:\ \begin{cases}x+y-z=1\\x-y+z=1\end{cases}$.`,
          R`Sumando: $2x=2\Rightarrow x=1$; entonces $y=z$. Con $z=t$: $r:\ (1,t,t)$, vector director $(0,1,1)$. <br>(Comprobación: $(1,1,-1)\times(1,-1,1)=(0,-2,-2)\parallel(0,1,1)$.)`),
        Q(3, R`Halla $a$ para que las rectas $r:\ (1+t,\ 2t,\ 3-t)$ y $s:\ (a+2\lambda,\ 1+\lambda,\ 2+\lambda)$ se corten, y halla el punto de corte.`,
          R`$\det[\vec{PQ},\vec u,\vec v]=\begin{vmatrix}a-1&1&-1\\1&2&-1\\2&1&1\end{vmatrix}=3(a-1)=0\Rightarrow a=1$. <br>Igualando: $t=2\lambda$, $2t=1+\lambda\Rightarrow\lambda=\dfrac13,\ t=\dfrac23$. Punto: $\left(\dfrac53,\dfrac43,\dfrac73\right)$.`)
      ],
      [
        Q(3.5, R`Halla el plano que contiene a la recta $r:\ (1+t,\ 2-t,\ 3t)$ y es paralelo al vector $\vec w=(1,0,1)$.`,
          R`Normal: $(1,-1,3)\times(1,0,1)=(-1,2,1)$. Pasa por $(1,2,0)$: $-(x-1)+2(y-2)+z=0\Rightarrow x-2y-z+3=0$.`),
        Q(3.5, R`a) (1,5 p) ¿Están alineados $A(1,1,1)$, $B(2,3,0)$ y $C(0,-1,2)$? <br>b) (2 p) Halla el plano que pasa por $A$, $B$ y $D(1,0,0)$.`,
          R`a) $\vec{AB}=(1,2,-1)$ y $\vec{AC}=(-1,-2,1)=-\vec{AB}$: sí, están alineados. <br>b) $\vec{AD}=(0,-1,-1)$, normal $\vec{AB}\times\vec{AD}=(-3,1,-1)$. Plano: $3x-y+z-3=0$.`),
        Q(3, R`Estudia según $a$ la posición de la recta $r:\ (1+t,\ t,\ 2-t)$ y el plano $\pi:\ x+ay+z=3$.`,
          R`$\vec u\cdot\vec n=(1,1,-1)\cdot(1,a,1)=a$. <br>• $a\neq0$: se cortan en un punto. <br>• $a=0$: $r$ es paralela a $\pi$; como el punto $(1,0,2)$ cumple $x+z=3$, la recta <b>está contenida</b> en el plano.`)
      ]
    ] },
    { n: 'T4', name: 'Geometría métrica', desc: 'Distancias, ángulos, áreas, volúmenes y simétricos.', exams: [
      [
        Q(3.5, R`a) (1,5 p) Distancia del punto $P(1,2,3)$ al plano $2x-y+2z+1=0$. <br>b) (2 p) Ángulo entre la recta de vector director $(1,1,0)$ y el plano $x+z=0$.`,
          R`a) $d=\dfrac{|2-2+6+1|}{\sqrt{4+1+4}}=\dfrac73$. <br>b) $\sin\alpha=\dfrac{|\vec u\cdot\vec n|}{|\vec u||\vec n|}=\dfrac{1}{\sqrt2\sqrt2}=\dfrac12\Rightarrow\alpha=30^\circ$.`),
        Q(3.5, R`Halla el área del triángulo de vértices $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$.`,
          R`$\vec{AB}\times\vec{AC}=(-1,2,0)\times(-1,0,3)=(6,3,2)$, de módulo 7. Área $=\dfrac72$ u².`),
        Q(3, R`Calcula el volumen del tetraedro de vértices $O(0,0,0)$, $A(1,0,0)$, $B(0,2,0)$, $C(0,0,3)$.`,
          R`$V=\dfrac16|\det[\vec{OA},\vec{OB},\vec{OC}]|=\dfrac16\cdot6=1$ u³.`)
      ],
      [
        Q(3.5, R`Calcula la distancia entre las rectas que se cruzan $r:\ (1,0,-1)+t(2,1,-1)$ y $s:\ (0,1,2)+\lambda(1,-1,1)$.`,
          R`$\vec u\times\vec v=(0,-3,-3)$, $|\vec u\times\vec v|=3\sqrt2$, y $|\det[\vec{PQ},\vec u,\vec v]|=12$. <br>$d=\dfrac{12}{3\sqrt2}=2\sqrt2$.`),
        Q(3.5, R`Halla el punto simétrico de $P(3,1,2)$ respecto del plano $x+y+z=0$.`,
          R`Recta perpendicular: $(3+t,1+t,2+t)$. Corte: $6+3t=0\Rightarrow t=-2$, punto medio $M(1,-1,0)$. <br>Simétrico $P'=2M-P=(-1,-3,-2)$.`),
        Q(3, R`Halla el plano perpendicular a $r:\ \dfrac{x-1}{2}=\dfrac{y+1}{-1}=\dfrac{z}{2}$ que pasa por el origen, y la distancia del punto $A(1,-1,0)$ a ese plano.`,
          R`Normal $=(2,-1,2)$: $\pi:\ 2x-y+2z=0$. $d(A,\pi)=\dfrac{|2+1+0|}{3}=1$.`)
      ],
      [
        Q(3.5, R`Volumen del tetraedro de vértices $O(0,0,0)$, $B(1,1,0)$, $C(0,1,1)$, $D(1,0,1)$.`,
          R`$\begin{vmatrix}1&1&0\\0&1&1\\1&0&1\end{vmatrix}=2$, así que $V=\dfrac26=\dfrac13$ u³.`),
        Q(3.5, R`Ángulo que forman los planos $x+y=1$ e $y+z=2$.`,
          R`$\cos\alpha=\dfrac{|(1,1,0)\cdot(0,1,1)|}{\sqrt2\sqrt2}=\dfrac12\Rightarrow\alpha=60^\circ$.`),
        Q(3, R`Halla la proyección ortogonal de $P(2,0,3)$ sobre la recta $r:\ (1+t,\ t,\ -t)$ y la distancia de $P$ a $r$.`,
          R`Con $A(1,0,0)\in r$ y $\vec u=(1,1,-1)$, el punto de $r$ más cercano a $P$ tiene $t=\dfrac{\vec{AP}\cdot\vec u}{|\vec u|^2}=\dfrac{(1,0,3)\cdot(1,1,-1)}{3}=-\dfrac23$. <br>Proyección: $\left(\dfrac13,-\dfrac23,\dfrac23\right)$. Distancia $=\left|\left(\dfrac53,\dfrac23,\dfrac73\right)\right|=\dfrac{\sqrt{78}}{3}$.`)
      ]
    ] },
    { n: 'T5', name: 'Límites y continuidad', desc: 'Indeterminaciones, asíntotas, continuidad y teorema de Bolzano.', exams: [
      [
        Q(3.5, R`Calcula: a) $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+3x}-x\right)$ &nbsp; b) $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$ &nbsp; c) $\displaystyle\lim_{x\to\infty}\left(1+\frac2x\right)^x$`,
          R`a) Multiplicando por el conjugado: $\dfrac{3x}{\sqrt{x^2+3x}+x}\to\dfrac32$. <br>b) L'Hôpital dos veces: $\dfrac{\sin x}{2x}\to\dfrac{\cos x}{2}\to\dfrac12$. <br>c) Tipo $1^\infty$: $e^{\lim x\cdot\frac2x}=e^2$.`),
        Q(3.5, R`Halla $a$ y $b$ para que sea continua $f(x)=\begin{cases}x^2+a & x<1\\2x+b & 1\le x<3\\10 & x\ge3\end{cases}$`,
          R`En $x=3$: $6+b=10\Rightarrow b=4$. En $x=1$: $1+a=2+b=6\Rightarrow a=5$.`),
        Q(3, R`Demuestra que $x^3+x-1=0$ tiene exactamente una solución en $(0,1)$.`,
          R`$f(x)=x^3+x-1$ es continua, $f(0)=-1<0$ y $f(1)=1>0$: por Bolzano hay al menos una raíz. Como $f'(x)=3x^2+1>0$, $f$ es estrictamente creciente y la raíz es única.`)
      ],
      [
        Q(3.5, R`Calcula: a) $\displaystyle\lim_{x\to2}\frac{x^2-4}{x^2-3x+2}$ &nbsp; b) $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$ &nbsp; c) $\displaystyle\lim_{x\to\infty}\frac{3x^2-x}{2x^2+5}$`,
          R`a) $\dfrac{(x-2)(x+2)}{(x-2)(x-1)}=\dfrac{x+2}{x-1}\to4$. <br>b) L'Hôpital: $\dfrac{e^x-1}{2x}\to\dfrac{e^x}{2}\to\dfrac12$. <br>c) Mismo grado: $\dfrac32$.`),
        Q(3.5, R`Halla las asíntotas de $f(x)=\dfrac{x^2+1}{x-1}$.`,
          R`Vertical: $x=1$ (el numerador vale 2). No hay horizontal (grado mayor arriba). Oblicua: $x^2+1=(x-1)(x+1)+2$, así que $y=x+1$.`),
        Q(3, R`Halla $k$ para que $f(x)=\begin{cases}\dfrac{\sin 3x}{x} & x\neq0\\ k & x=0\end{cases}$ sea continua en $x=0$.`,
          R`$\displaystyle\lim_{x\to0}\frac{\sin3x}{x}=3$ (L'Hôpital o infinitésimos). Por tanto $k=3$.`)
      ],
      [
        Q(3.5, R`Calcula: a) $\displaystyle\lim_{x\to0^+}x\ln x$ &nbsp; b) $\displaystyle\lim_{x\to\infty}\left(\frac{x+1}{x-1}\right)^{x}$ &nbsp; c) $\displaystyle\lim_{x\to1}\frac{\ln x}{x-1}$`,
          R`a) $\dfrac{\ln x}{1/x}$ y L'Hôpital: $\dfrac{1/x}{-1/x^2}=-x\to0$. <br>b) $1^\infty$: $e^{\lim x\left(\frac{x+1}{x-1}-1\right)}=e^{\lim\frac{2x}{x-1}}=e^2$. <br>c) L'Hôpital: $\dfrac{1/x}{1}\to1$.`),
        Q(3.5, R`Estudia la continuidad de $f(x)=\dfrac{x^2-1}{x^2-x}$ y clasifica sus discontinuidades.`,
          R`No está definida en $x=0$ ni en $x=1$. $f(x)=\dfrac{(x-1)(x+1)}{x(x-1)}=\dfrac{x+1}{x}$ si $x\neq1$. <br>• $x=1$: límite 2, discontinuidad <b>evitable</b>. <br>• $x=0$: límites laterales infinitos, discontinuidad <b>de salto infinito</b> (asíntota vertical).`),
        Q(3, R`Demuestra que la ecuación $\cos x=x$ tiene alguna solución en $\left(0,\dfrac\pi2\right)$.`,
          R`$g(x)=\cos x-x$ es continua, $g(0)=1>0$ y $g\!\left(\dfrac\pi2\right)=-\dfrac\pi2<0$. Por Bolzano existe $c$ en el intervalo con $g(c)=0$.`)
      ]
    ] },
    { n: 'T6', name: 'Derivadas y aplicaciones', desc: 'Reglas de derivación, monotonía, extremos, Rolle, L\'Hôpital y optimización.', exams: [
      [
        Q(3.5, R`Deriva: a) $f(x)=x^2e^{-x}$ &nbsp; b) $g(x)=\ln(x^2+1)$ &nbsp; c) $h(x)=\sin^2(3x)$`,
          R`a) $f'(x)=(2x-x^2)e^{-x}$. <br>b) $g'(x)=\dfrac{2x}{x^2+1}$. <br>c) $h'(x)=2\sin3x\cdot3\cos3x=3\sin6x$.`),
        Q(3.5, R`Estudia monotonía, extremos y punto de inflexión de $f(x)=x^3-3x^2-9x+2$.`,
          R`$f'(x)=3(x-3)(x+1)$. Crece en $(-\infty,-1)\cup(3,\infty)$ y decrece en $(-1,3)$. <br>Máximo $(-1,7)$, mínimo $(3,-25)$. $f''(x)=6x-6=0$: inflexión en $(1,-9)$.`),
        Q(3, R`Se quiere fabricar una caja sin tapa, de base cuadrada y volumen 32 dm³, gastando el mínimo material. Halla sus dimensiones.`,
          R`Base $x$, altura $h=\dfrac{32}{x^2}$. Superficie $S(x)=x^2+\dfrac{128}{x}$. $S'(x)=2x-\dfrac{128}{x^2}=0\Rightarrow x=4$. <br>Base 4×4 dm, altura 2 dm (48 dm² de material). $S''(4)>0$: es mínimo.`)
      ],
      [
        Q(3.5, R`Halla la recta tangente a $f(x)=\ln x$ en $x=e$.`,
          R`$f(e)=1$, $f'(x)=\dfrac1x\Rightarrow f'(e)=\dfrac1e$. Tangente: $y-1=\dfrac1e(x-e)\Rightarrow y=\dfrac xe$.`),
        Q(3.5, R`Halla $a$ y $b$ para que $f(x)=x^3+ax^2+bx$ tenga un extremo relativo en $x=1$ y un punto de inflexión en $x=2$.`,
          R`$f''(2)=12+2a=0\Rightarrow a=-6$. $f'(1)=3+2a+b=0\Rightarrow b=9$. <br>Comprobación: $f'(x)=3(x-1)(x-3)$, y en $x=1$ hay un máximo.`),
        Q(3, R`Comprueba que $f(x)=x^2-4x+3$ cumple el teorema de Rolle en $[1,3]$ y halla el punto que garantiza.`,
          R`Es polinómica (continua y derivable) y $f(1)=f(3)=0$. $f'(c)=2c-4=0\Rightarrow c=2\in(1,3)$.`)
      ],
      [
        Q(3.5, R`Calcula $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$.`,
          R`Tres veces L'Hôpital: $\dfrac{1-\cos x}{3x^2}\to\dfrac{\sin x}{6x}\to\dfrac{\cos x}{6}\to\dfrac16$.`),
        Q(3.5, R`Estudia y representa $f(x)=\dfrac{x}{x^2+1}$: dominio, simetría, asíntotas, monotonía y extremos.`,
          R`Dominio $\mathbb R$, función impar, asíntota horizontal $y=0$. $f'(x)=\dfrac{1-x^2}{(x^2+1)^2}$: crece en $(-1,1)$ y decrece fuera. <br>Máximo $\left(1,\dfrac12\right)$, mínimo $\left(-1,-\dfrac12\right)$.`),
        Q(3, R`Halla los puntos de la parábola $y=x^2$ más cercanos al punto $A\left(0,\dfrac32\right)$.`,
          R`$d^2(x)=x^2+\left(x^2-\dfrac32\right)^2=x^4-2x^2+\dfrac94$. Derivada $4x^3-4x=0\Rightarrow x=0,\pm1$. <br>$d^2(0)=\dfrac94$, $d^2(\pm1)=\dfrac54$. Los más cercanos son $(\pm1,1)$, a distancia $\dfrac{\sqrt5}{2}$.`)
      ]
    ] },
    { n: 'T7', name: 'Integrales', desc: 'Primitivas, partes, racionales, Barrow y cálculo de áreas.', exams: [
      [
        Q(3.5, R`Calcula: a) $\displaystyle\int\left(3x^2-\frac2x+e^{2x}\right)dx$ &nbsp; b) $\displaystyle\int xe^x\,dx$ &nbsp; c) $\displaystyle\int\frac{2x}{x^2+1}dx$`,
          R`a) $x^3-2\ln|x|+\dfrac{e^{2x}}{2}+C$. <br>b) Por partes ($u=x$, $dv=e^x dx$): $(x-1)e^x+C$. <br>c) Inmediata (la de arriba es la derivada de la de abajo): $\ln(x^2+1)+C$.`),
        Q(3.5, R`Calcula el área encerrada entre $y=x^2$ e $y=2x$.`,
          R`Se cortan en $x=0$ y $x=2$. $A=\displaystyle\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}{3}\right]_0^2=4-\frac83=\frac43$ u².`),
        Q(3, R`Halla la primitiva $F$ de $f(x)=6x^2-2x$ que cumple $F(1)=4$.`,
          R`$F(x)=2x^3-x^2+C$. $F(1)=1+C=4\Rightarrow C=3$: $F(x)=2x^3-x^2+3$.`)
      ],
      [
        Q(3.5, R`Calcula: a) $\displaystyle\int x\ln x\,dx$ &nbsp; b) $\displaystyle\int\frac{x+3}{x^2-1}dx$`,
          R`a) Partes ($u=\ln x$, $dv=x\,dx$): $\dfrac{x^2}{2}\ln x-\dfrac{x^2}{4}+C$. <br>b) $\dfrac{x+3}{(x-1)(x+1)}=\dfrac{2}{x-1}-\dfrac{1}{x+1}$, así que $2\ln|x-1|-\ln|x+1|+C$.`),
        Q(3.5, R`Halla el área encerrada entre la gráfica de $f(x)=x^3-x$ y el eje $X$.`,
          R`Raíces: $-1,0,1$. $\displaystyle\int_{-1}^0(x^3-x)\,dx=\frac14$ y, por simetría, el otro trozo también mide $\frac14$. Área total $=\dfrac12$ u².`),
        Q(3, R`Calcula $\displaystyle\int_1^e\ln x\,dx$.`,
          R`Por partes, $\int\ln x\,dx=x\ln x-x$. Barrow: $(e-e)-(0-1)=1$.`)
      ],
      [
        Q(3.5, R`Calcula $\displaystyle\int e^x\sin x\,dx$.`,
          R`Por partes dos veces aparece la misma integral $I$: $I=e^x\sin x-e^x\cos x-I$. <br>Despejando: $I=\dfrac{e^x(\sin x-\cos x)}{2}+C$.`),
        Q(3.5, R`Calcula el área entre la parábola $y=4-x^2$ y la recta $y=x+2$.`,
          R`Corte: $x^2+x-2=0\Rightarrow x=-2,\ 1$. $A=\displaystyle\int_{-2}^{1}(2-x-x^2)\,dx=\left[2x-\frac{x^2}2-\frac{x^3}3\right]_{-2}^1=\frac76+\frac{10}{3}=\frac92$ u².`),
        Q(3, R`Calcula $\displaystyle\int_0^1\frac{x}{\sqrt{1+x^2}}\,dx$.`,
          R`Una primitiva es $\sqrt{1+x^2}$. Barrow: $\sqrt2-1$.`)
      ]
    ] },
    { n: 'T8', name: 'Probabilidad', desc: 'Sucesos, probabilidad condicionada, Bayes, binomial y normal.', exams: [
      [
        Q(3.5, R`$P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\cap B)=0{,}2$. Calcula $P(A\cup B)$, $P(A|B)$ y $P(\bar A\cap\bar B)$. ¿Son independientes?`,
          R`$P(A\cup B)=0{,}5+0{,}4-0{,}2=0{,}7$. $P(A|B)=\dfrac{0{,}2}{0{,}4}=0{,}5$. $P(\bar A\cap\bar B)=1-0{,}7=0{,}3$. <br>Sí son independientes: $P(A)P(B)=0{,}2=P(A\cap B)$.`),
        Q(3.5, R`La máquina M1 fabrica el 60 % de las piezas y M2 el 40 %. Son defectuosas el 3 % de las de M1 y el 5 % de las de M2. a) ¿Probabilidad de que una pieza sea defectuosa? b) Si es defectuosa, ¿probabilidad de que venga de M2?`,
          R`a) $P(D)=0{,}6\cdot0{,}03+0{,}4\cdot0{,}05=0{,}038$. <br>b) Bayes: $P(M_2|D)=\dfrac{0{,}02}{0{,}038}=\dfrac{10}{19}\approx0{,}526$.`),
        Q(3, R`Lanzamos un dado 5 veces. ¿Probabilidad de sacar exactamente dos seises?`,
          R`$X\sim B\!\left(5,\frac16\right)$: $P(X=2)=\binom52\left(\frac16\right)^2\left(\frac56\right)^3=\dfrac{1250}{7776}\approx0{,}161$.`)
      ],
      [
        Q(3.5, R`Una urna tiene 4 bolas rojas y 6 azules. Sacamos dos sin reemplazamiento. Probabilidad de que: a) las dos sean rojas; b) sean de distinto color.`,
          R`a) $\dfrac4{10}\cdot\dfrac39=\dfrac2{15}$. <br>b) $2\cdot\dfrac4{10}\cdot\dfrac69=\dfrac8{15}$.`),
        Q(3.5, R`La altura de un grupo sigue $N(170,10)$ cm. Calcula $P(X>185)$ y $P(160<X<180)$.`,
          R`$P(X>185)=P(Z>1{,}5)=1-0{,}9332=0{,}0668$. <br>$P(160<X<180)=P(-1<Z<1)=2\cdot0{,}8413-1=0{,}6826$.`),
        Q(3, R`Una enfermedad afecta al 2 % de la población. Un test da positivo en el 95 % de los enfermos y en el 10 % de los sanos. Si alguien da positivo, ¿qué probabilidad hay de que esté enfermo?`,
          R`$P(+)=0{,}02\cdot0{,}95+0{,}98\cdot0{,}10=0{,}117$. $P(E|+)=\dfrac{0{,}019}{0{,}117}\approx0{,}162$. ¡Solo un 16 %!`)
      ],
      [
        Q(3.5, R`$A$ y $B$ son independientes con $P(A)=0{,}3$ y $P(B)=0{,}6$. Calcula $P(A\cup B)$, $P(A|\bar B)$ y la probabilidad de que ocurra solo uno de los dos.`,
          R`$P(A\cap B)=0{,}18$, $P(A\cup B)=0{,}72$. Por independencia $P(A|\bar B)=P(A)=0{,}3$. Solo uno: $0{,}72-0{,}18=0{,}54$.`),
        Q(3.5, R`El 10 % de las piezas de una fábrica son defectuosas. En un lote de 8, calcula la probabilidad de que: a) ninguna sea defectuosa; b) al menos dos lo sean.`,
          R`$X\sim B(8;0{,}1)$. a) $0{,}9^8\approx0{,}4305$. <br>b) $1-0{,}9^8-8\cdot0{,}1\cdot0{,}9^7\approx1-0{,}4305-0{,}3826=0{,}1869$.`),
        Q(3, R`Las notas de un examen siguen $N(6;\ 1{,}5)$. a) ¿Qué porcentaje aprueba ($X\ge5$)? b) ¿Qué nota mínima tiene el 10 % de mejores notas?`,
          R`a) $P\!\left(Z\ge\frac{5-6}{1{,}5}\right)=P(Z\ge-0{,}67)=0{,}7486$: un 74,9 %. <br>b) $P(Z\ge z)=0{,}1\Rightarrow z=1{,}28$; nota $=6+1{,}28\cdot1{,}5=7{,}92$.`)
      ]
    ] }
  ];

  /* =========================== 1º BACHILLERATO =========================== */
  const B1 = [
    { n: 'T1', name: 'Números reales, logaritmos y polinomios', desc: 'Radicales, logaritmos, identidades notables, polinomios y fracciones algebraicas.',
      practice: [
        { t: '4. Identidades notables', e: R`d) $(4x+5y)^2$ &nbsp;&nbsp; e) $\left(4x-\dfrac74\right)^2$ &nbsp;&nbsp; f) $(x^2-6y)(x^2+6y)$`,
          s: R`d) Cuadrado de una suma, $(a+b)^2=a^2+2ab+b^2$: $16x^2+40xy+25y^2$. <br>e) Cuadrado de una diferencia: $16x^2-2\cdot4x\cdot\dfrac74+\dfrac{49}{16}=16x^2-14x+\dfrac{49}{16}$. <br>f) Suma por diferencia, $(a-b)(a+b)=a^2-b^2$: $x^4-36y^2$.` },
        { t: '5. Operaciones con polinomios', e: R`Sean $M(x)=3x^2-5x-3$, $N(x)=x^2+3x+1$ y $K(x)=x^2-x+2$. Calcula: <br>a) $M(-1)$ &nbsp;&nbsp; b) $2M(x)-4K(x)$ &nbsp;&nbsp; c) $M(x)+3N(x)\cdot K(x)$`,
          s: R`a) $M(-1)=3\cdot1+5-3=5$. <br>b) $(6x^2-10x-6)-(4x^2-4x+8)=2x^2-6x-14$. <br>c) Primero el producto: $N\cdot K=x^4+2x^3+5x+2$ (los términos en $x^2$ se anulan: $2x^2-3x^2+x^2=0$). Por 3: $3x^4+6x^3+15x+6$. Sumando $M$: $3x^4+6x^3+3x^2+10x+3$.` },
        { t: '6. Producto de polinomios', e: R`Calcula $P(x)\cdot Q(x)$ con $P(x)=2x^6+3x^4+x^2-6$ y $Q(x)=x^3+x$.`,
          s: R`Multiplicamos cada término por $x^3$ y por $x$: <br>$2x^9+3x^7+x^5-6x^3$ <br>$\phantom{2x^9}+2x^7+3x^5+x^3-6x$ <br>Agrupando: $2x^9+5x^7+4x^5-5x^3-6x$.` },
        { t: '7. Divisiones de polinomios', e: R`a) $(x^5+7x^3-5x+1)\div(x^3+2x)$ &nbsp;&nbsp; b) $(x^3-5x^2+x)\div(-x^2-1)$`,
          s: R`a) $x^5\div x^3=x^2$; restamos $x^5+2x^3$ y queda $5x^3-5x+1$. Luego $+5$; restamos $5x^3+10x$ y queda $-15x+1$. <br>Cociente $C(x)=x^2+5$, resto $R(x)=-15x+1$. <br>b) $x^3\div(-x^2)=-x$; restamos $x^3+x$ y queda $-5x^2$. Luego $+5$; restamos $-5x^2-5$ y queda $5$. <br>Cociente $C(x)=-x+5$, resto $R(x)=5$. <br>Comprobación: $(-x+5)(-x^2-1)+5=x^3-5x^2+x$ ✓` },
        { t: '8. Simplifica', e: R`a) $\dfrac{x^2-5x+6}{x^2-2x}$ &nbsp;&nbsp; b) $\dfrac{3x^3-6x^2}{3x^4+24x^3-60x^2}$`,
          s: R`a) Factorizamos: $\dfrac{(x-2)(x-3)}{x(x-2)}=\dfrac{x-3}{x}$. <br>b) Sacamos factor común $3x^2$: $\dfrac{3x^2(x-2)}{3x^2(x^2+8x-20)}$. Como $x^2+8x-20=(x+10)(x-2)$, queda $\dfrac{x-2}{(x+10)(x-2)}=\dfrac{1}{x+10}$.` },
        { t: '9. Opera y simplifica', e: R`a) $\dfrac{x-1}{x^2-4}-\dfrac{x-2}{x^2+2x}$ &nbsp;&nbsp; b) $\dfrac{x-3}{x}\div\dfrac{x^2-9}{x^2+3x}$ &nbsp;&nbsp; c) $\dfrac{2x-1}{x^2+2x}\cdot\dfrac{x^3+2x^2}{4x}$`,
          s: R`a) $x^2-4=(x-2)(x+2)$ y $x^2+2x=x(x+2)$; el m.c.m. es $x(x-2)(x+2)$: <br>$\dfrac{x(x-1)-(x-2)^2}{x(x-2)(x+2)}=\dfrac{x^2-x-x^2+4x-4}{x(x^2-4)}=\dfrac{3x-4}{x^3-4x}$. <br>b) Dividir es multiplicar por la inversa: $\dfrac{x-3}{x}\cdot\dfrac{x(x+3)}{(x-3)(x+3)}=1$. <br>c) $\dfrac{2x-1}{x(x+2)}\cdot\dfrac{x^2(x+2)}{4x}=\dfrac{(2x-1)x^2(x+2)}{4x^2(x+2)}=\dfrac{2x-1}{4}$.` }
      ],
      exams: [
      [
        Q(3.5, R`a) (1,5 p) Simplifica $\sqrt{12}+\sqrt{27}-\sqrt{48}$. <br>b) (2 p) Racionaliza $\dfrac{6}{\sqrt3}$ y $\dfrac{2}{\sqrt5-\sqrt3}$.`,
          R`a) $2\sqrt3+3\sqrt3-4\sqrt3=\sqrt3$. <br>b) $\dfrac{6\sqrt3}{3}=2\sqrt3$; $\dfrac{2(\sqrt5+\sqrt3)}{5-3}=\sqrt5+\sqrt3$.`),
        Q(3.5, R`Calcula: $\log_2 32$, $\log_3\dfrac19$, $\log 0{,}001$ y $\ln e^4$.`,
          R`$5$, $-2$, $-3$ y $4$.`),
        Q(3, R`Resuelve: a) $2^{x+1}+2^x=24$ &nbsp; b) $\log x+\log(x-3)=1$`,
          R`a) $3\cdot2^x=24\Rightarrow2^x=8\Rightarrow x=3$. <br>b) $x(x-3)=10\Rightarrow x^2-3x-10=0\Rightarrow x=5$ (la solución $x=-2$ no vale: no existe $\log(-2)$).`)
      ],
      [
        Q(3.5, R`Expresa como intervalos: a) $|x-3|<2$ &nbsp; b) $|2x+1|\ge3$`,
          R`a) $-2<x-3<2\Rightarrow(1,5)$. <br>b) $2x+1\ge3$ o $2x+1\le-3$: $(-\infty,-2]\cup[1,\infty)$.`),
        Q(3.5, R`Sabiendo que $\log2\approx0{,}301$ y $\log3\approx0{,}477$, calcula $\log12$, $\log1{,}5$ y $\log\sqrt8$.`,
          R`$\log12=2\log2+\log3=1{,}079$. $\log1{,}5=\log3-\log2=0{,}176$. $\log\sqrt8=\frac32\log2=0{,}4515$.`),
        Q(3, R`Resuelve $9^x-4\cdot3^x+3=0$.`,
          R`Con $t=3^x$: $t^2-4t+3=0\Rightarrow t=1,\ t=3$. Entonces $x=0$ y $x=1$.`)
      ],
      [
        Q(3.5, R`Calcula y da el resultado en notación científica: $\dfrac{3\cdot10^5\cdot4\cdot10^{-2}}{6\cdot10^4}$`,
          R`$\dfrac{12\cdot10^3}{6\cdot10^4}=2\cdot10^{-1}$.`),
        Q(3.5, R`Simplifica $\dfrac{\sqrt[3]{a^2}\cdot\sqrt a}{\sqrt[6]{a}}$ (con $a>0$).`,
          R`$a^{\frac23+\frac12-\frac16}=a^{\frac{4+3-1}{6}}=a$.`),
        Q(3, R`Resuelve: a) $2\log x-\log(x+6)=0$ &nbsp; b) $\log_2(x+1)+\log_2(x-1)=3$`,
          R`a) $x^2=x+6\Rightarrow x=3$ ($x=-2$ no vale). <br>b) $x^2-1=8\Rightarrow x=3$ ($x=-3$ no vale).`)
      ]
    ] },
    { n: 'T2', name: 'Ecuaciones, inecuaciones y sistemas', desc: 'Polinomios, bicuadradas, irracionales, Gauss e inecuaciones.', exams: [
      [
        Q(3.5, R`Resuelve: a) $x^4-5x^2+4=0$ &nbsp; b) $\sqrt{x+7}=x-5$`,
          R`a) Con $t=x^2$: $t=1,4\Rightarrow x=\pm1,\pm2$. <br>b) Elevando: $x^2-11x+18=0\Rightarrow x=9,\ x=2$. Comprobando, solo vale $x=9$.`),
        Q(3.5, R`Resuelve: a) $x^2-x-6\le0$ &nbsp; b) $\dfrac{x-1}{x+2}>0$`,
          R`a) Raíces $-2$ y $3$: $[-2,3]$. <br>b) Signo positivo fuera de las raíces: $(-\infty,-2)\cup(1,\infty)$.`),
        Q(3, R`Resuelve $\begin{cases}x+y=7\\xy=12\end{cases}$`,
          R`$x(7-x)=12\Rightarrow x^2-7x+12=0$: soluciones $(3,4)$ y $(4,3)$.`)
      ],
      [
        Q(3.5, R`Factoriza $P(x)=x^3-2x^2-5x+6$.`,
          R`$P(1)=0$. Por Ruffini: $(x-1)(x^2-x-6)=(x-1)(x-3)(x+2)$.`),
        Q(3.5, R`Resuelve por Gauss: $\begin{cases}x+y+z=6\\2x-y+z=3\\x+2y-z=2\end{cases}$`,
          R`Haciendo ceros: $E_2-2E_1$: $-3y-z=-9$; $E_3-E_1$: $y-2z=-4$. De ahí $y=2$, $z=3$ y $x=1$.`),
        Q(3, R`3 cuadernos y 2 bolígrafos cuestan 9 €; 2 cuadernos y 5 bolígrafos cuestan 8,75 €. ¿Cuánto cuesta cada cosa?`,
          R`$3c+2b=9$, $2c+5b=8{,}75$. Multiplicando y restando: $11b=8{,}25\Rightarrow b=0{,}75$ €, $c=2{,}50$ €.`)
      ],
      [
        Q(3.5, R`Simplifica $\dfrac{x^2-4}{x^2+4x+4}$.`,
          R`$\dfrac{(x-2)(x+2)}{(x+2)^2}=\dfrac{x-2}{x+2}$.`),
        Q(3.5, R`Resuelve el sistema de inecuaciones $\begin{cases}2x-1>3\\x^2-9<0\end{cases}$`,
          R`$x>2$ y $-3<x<3$: solución $(2,3)$.`),
        Q(3, R`Resuelve $\dfrac2x+\dfrac{3}{x+1}=2$.`,
          R`$2(x+1)+3x=2x(x+1)\Rightarrow2x^2-3x-2=0\Rightarrow x=2,\ x=-\dfrac12$ (las dos valen).`)
      ]
    ] },
    { n: 'T3', name: 'Trigonometría', desc: 'Razones, fórmulas, ecuaciones y resolución de triángulos.', exams: [
      [
        Q(3.5, R`Si $\sin\alpha=\dfrac35$ y $\alpha$ está en el 2º cuadrante, calcula $\cos\alpha$, $\tan\alpha$, $\sin2\alpha$ y $\cos2\alpha$.`,
          R`$\cos\alpha=-\dfrac45$, $\tan\alpha=-\dfrac34$, $\sin2\alpha=2\cdot\dfrac35\cdot\left(-\dfrac45\right)=-\dfrac{24}{25}$, $\cos2\alpha=\dfrac{16}{25}-\dfrac9{25}=\dfrac7{25}$.`),
        Q(3.5, R`Resuelve el triángulo con $a=10$, $B=45^\circ$, $C=60^\circ$.`,
          R`$A=75^\circ$. Teorema del seno: $b=\dfrac{10\sin45^\circ}{\sin75^\circ}\approx7{,}32$, $c=\dfrac{10\sin60^\circ}{\sin75^\circ}\approx8{,}97$.`),
        Q(3, R`Resuelve $2\sin^2x-\sin x-1=0$ en $[0,2\pi)$.`,
          R`$\sin x=1$ o $\sin x=-\dfrac12$: $x=\dfrac\pi2,\ \dfrac{7\pi}6,\ \dfrac{11\pi}6$.`)
      ],
      [
        Q(3.5, R`Demuestra que $\dfrac{1-\cos^2x}{\sin x\cos x}=\tan x$.`,
          R`$1-\cos^2x=\sin^2x$, así que queda $\dfrac{\sin^2x}{\sin x\cos x}=\dfrac{\sin x}{\cos x}=\tan x$.`),
        Q(3.5, R`En un triángulo, $a=7$, $b=8$ y $C=60^\circ$. Calcula $c$.`,
          R`Teorema del coseno: $c^2=49+64-2\cdot7\cdot8\cdot\dfrac12=57\Rightarrow c=\sqrt{57}\approx7{,}55$.`),
        Q(3, R`Desde un punto vemos lo alto de una torre con un ángulo de 30°. Si nos acercamos 20 m, el ángulo es de 45°. ¿Cuánto mide la torre?`,
          R`Con $x$ = distancia final: $h=x$ y $h=\dfrac{x+20}{\sqrt3}$. Entonces $x\sqrt3=x+20\Rightarrow x=\dfrac{20}{\sqrt3-1}=10(\sqrt3+1)\approx27{,}32$ m.`)
      ],
      [
        Q(3.5, R`a) Pasa $150^\circ$ a radianes y $\dfrac{3\pi}4$ rad a grados. <br>b) Calcula sin calculadora $\sin240^\circ$, $\cos330^\circ$ y $\tan135^\circ$.`,
          R`a) $\dfrac{5\pi}{6}$ rad y $135^\circ$. <br>b) $-\dfrac{\sqrt3}2$, $\dfrac{\sqrt3}{2}$ y $-1$.`),
        Q(3.5, R`Resuelve $\cos2x=\cos x$ en $[0,2\pi)$.`,
          R`$2\cos^2x-\cos x-1=0\Rightarrow\cos x=1$ o $\cos x=-\dfrac12$: $x=0,\ \dfrac{2\pi}3,\ \dfrac{4\pi}3$.`),
        Q(3, R`Un triángulo tiene $b=6$, $c=8$ y $A=30^\circ$. Calcula su área y el lado $a$.`,
          R`Área $=\dfrac12\cdot6\cdot8\cdot\sin30^\circ=12$. $a^2=36+64-96\cos30^\circ\approx16{,}86\Rightarrow a\approx4{,}11$.`)
      ]
    ] },
    { n: 'T4', name: 'Números complejos', desc: 'Forma binómica y polar, operaciones, potencias y raíces.', exams: [
      [
        Q(3.5, R`Calcula: a) $(2+3i)(1-i)$ &nbsp; b) $\dfrac{3+4i}{1+2i}$`,
          R`a) $2-2i+3i+3=5+i$. <br>b) Multiplicando por el conjugado: $\dfrac{(3+4i)(1-2i)}{5}=\dfrac{11-2i}{5}$.`),
        Q(3.5, R`Pasa $z=1+\sqrt3\,i$ a forma polar y calcula $z^6$.`,
          R`$|z|=2$, $\arg z=60^\circ$: $z=2_{60^\circ}$. $z^6=64_{360^\circ}=64$.`),
        Q(3, R`Resuelve $x^2+2x+5=0$.`,
          R`$x=\dfrac{-2\pm\sqrt{-16}}{2}=-1\pm2i$.`)
      ],
      [
        Q(3.5, R`Calcula $i^{27}$ e $i^{100}$.`,
          R`$27=4\cdot6+3\Rightarrow i^{27}=i^3=-i$. $100$ es múltiplo de 4: $i^{100}=1$.`),
        Q(3.5, R`Halla las raíces cúbicas de $-8$.`,
          R`$-8=8_{180^\circ}$. Raíces: $2_{60^\circ}$, $2_{180^\circ}$, $2_{300^\circ}$, es decir $1+\sqrt3i$, $-2$ y $1-\sqrt3i$.`),
        Q(3, R`Halla $m$ para que $\dfrac{m+2i}{1-i}$ sea imaginario puro.`,
          R`$\dfrac{(m+2i)(1+i)}{2}=\dfrac{(m-2)+(m+2)i}{2}$. Parte real nula: $m=2$ (y queda $2i$).`)
      ],
      [
        Q(3.5, R`Pasa a forma binómica $4_{150^\circ}$.`,
          R`$4(\cos150^\circ+i\sin150^\circ)=4\left(-\dfrac{\sqrt3}2+\dfrac12i\right)=-2\sqrt3+2i$.`),
        Q(3.5, R`Con $z_1=6_{70^\circ}$ y $z_2=2_{25^\circ}$, calcula $z_1z_2$ y $\dfrac{z_1}{z_2}$.`,
          R`Producto: se multiplican módulos y se suman argumentos, $12_{95^\circ}$. Cociente: $3_{45^\circ}$.`),
        Q(3, R`Resuelve: a) $z^2=-9$ &nbsp; b) $z^4=16$`,
          R`a) $\pm3i$. <br>b) $16=16_{0^\circ}$: $2_{0^\circ},2_{90^\circ},2_{180^\circ},2_{270^\circ}$, es decir $2,\ 2i,\ -2,\ -2i$.`)
      ]
    ] },
    { n: 'T5', name: 'Vectores y geometría analítica', desc: 'Producto escalar, rectas, distancias, ángulos y cónicas.', exams: [
      [
        Q(3.5, R`Con $\vec u=(3,4)$ y $\vec v=(-2,1)$, calcula $\vec u\cdot\vec v$, $|\vec u|$ y el ángulo que forman.`,
          R`$\vec u\cdot\vec v=-2$, $|\vec u|=5$, $|\vec v|=\sqrt5$. $\cos\alpha=\dfrac{-2}{5\sqrt5}\Rightarrow\alpha\approx100{,}3^\circ$.`),
        Q(3.5, R`Halla la ecuación general de la recta que pasa por $A(1,2)$ y $B(4,-1)$.`,
          R`Vector $(3,-3)\parallel(1,-1)$, pendiente $-1$: $y-2=-(x-1)\Rightarrow x+y-3=0$.`),
        Q(3, R`Distancia del punto $P(2,3)$ a la recta $3x-4y+1=0$.`,
          R`$d=\dfrac{|6-12+1|}{5}=1$.`)
      ],
      [
        Q(3.5, R`Posición relativa de $r:\ 2x-y+1=0$ y $s:\ 4x-2y+5=0$, y distancia entre ellas.`,
          R`Coeficientes proporcionales pero no el término independiente: paralelas. Con $s:\ 2x-y+\frac52=0$: $d=\dfrac{|5/2-1|}{\sqrt5}=\dfrac{3\sqrt5}{10}\approx0{,}67$.`),
        Q(3.5, R`Halla la recta perpendicular a $2x+y-3=0$ que pasa por $P(1,1)$.`,
          R`La perpendicular tiene vector normal $(1,-2)$: $x-2y+C=0$ y pasa por $P$: $x-2y+1=0$.`),
        Q(3, R`Halla el centro y el radio de la circunferencia $x^2+y^2-4x+6y-3=0$.`,
          R`Completando cuadrados: $(x-2)^2+(y+3)^2=16$. Centro $(2,-3)$, radio 4.`)
      ],
      [
        Q(3.5, R`Halla el simétrico de $A(1,2)$ respecto del punto $M(3,-1)$.`,
          R`$A'=2M-A=(5,-4)$.`),
        Q(3.5, R`Ángulo entre las rectas $y=2x+1$ e $y=-3x+2$.`,
          R`$\tan\alpha=\left|\dfrac{-3-2}{1+2\cdot(-3)}\right|=1\Rightarrow\alpha=45^\circ$.`),
        Q(3, R`Para la elipse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$, halla semiejes, focos y excentricidad.`,
          R`$a=5$, $b=3$, $c=\sqrt{25-9}=4$. Focos $(\pm4,0)$, excentricidad $\dfrac45$.`)
      ]
    ] },
    { n: 'T6', name: 'Funciones, límites y continuidad', desc: 'Dominios, composición, inversa, límites y asíntotas.', exams: [
      [
        Q(3.5, R`Dominio de: a) $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ &nbsp; b) $g(x)=\ln(4-x^2)$`,
          R`a) $x\ge2$ y $x\neq5$: $[2,5)\cup(5,\infty)$. <br>b) $4-x^2>0$: $(-2,2)$.`),
        Q(3.5, R`Calcula: a) $\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$ &nbsp; b) $\displaystyle\lim_{x\to\infty}\frac{2x^3-x}{5x^3+2}$ &nbsp; c) $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+x}-x\right)$`,
          R`a) $x+3\to6$. <br>b) $\dfrac25$. <br>c) Conjugado: $\dfrac{x}{\sqrt{x^2+x}+x}\to\dfrac12$.`),
        Q(3, R`Halla $a$ para que $f(x)=\begin{cases}x+1 & x<2\\ax^2 & x\ge2\end{cases}$ sea continua.`,
          R`$3=4a\Rightarrow a=\dfrac34$.`)
      ],
      [
        Q(3.5, R`Asíntotas de $f(x)=\dfrac{2x+1}{x-3}$.`,
          R`Vertical $x=3$ y horizontal $y=2$.`),
        Q(3.5, R`Con $f(x)=x^2$ y $g(x)=x+1$, calcula $f\circ g$ y $g\circ f$. Halla la inversa de $h(x)=\dfrac{2x-1}{3}$.`,
          R`$(f\circ g)(x)=(x+1)^2$, $(g\circ f)(x)=x^2+1$. Despejando $x$ en $y=\frac{2x-1}3$: $h^{-1}(x)=\dfrac{3x+1}{2}$.`),
        Q(3, R`Calcula $\displaystyle\lim_{x\to2}\frac{x-2}{\sqrt{x+2}-2}$.`,
          R`Multiplicando por el conjugado: $\dfrac{(x-2)(\sqrt{x+2}+2)}{x-2}=\sqrt{x+2}+2\to4$.`)
      ],
      [
        Q(3.5, R`Calcula: a) $\displaystyle\lim_{x\to\infty}\left(1+\frac1{3x}\right)^x$ &nbsp; b) $\displaystyle\lim_{x\to1^-}\frac1{x-1}$ y $\displaystyle\lim_{x\to1^+}\frac1{x-1}$`,
          R`a) $e^{1/3}$. <br>b) $-\infty$ y $+\infty$.`),
        Q(3.5, R`Estudia la continuidad de $f(x)=\begin{cases}x^2 & x\le0\\x & 0<x\le2\\4-x & x>2\end{cases}$`,
          R`Cada trozo es continuo. En $x=0$: $0=0$. En $x=2$: $2=2$. Es continua en $\mathbb R$.`),
        Q(3, R`Halla las asíntotas de $f(x)=\dfrac{x^2+2x}{x-1}$.`,
          R`Vertical $x=1$. Oblicua: $x^2+2x=(x-1)(x+3)+3$, así que $y=x+3$.`)
      ]
    ] },
    { n: 'T7', name: 'Derivadas', desc: 'Definición, reglas, recta tangente, monotonía y optimización.', exams: [
      [
        Q(3.5, R`Calcula, usando la definición, la derivada de $f(x)=x^2$ en $x=3$.`,
          R`$\displaystyle\lim_{h\to0}\frac{(3+h)^2-9}{h}=\lim_{h\to0}(6+h)=6$.`),
        Q(3.5, R`Deriva: a) $(3x^2-1)^4$ &nbsp; b) $\dfrac{x}{x+1}$ &nbsp; c) $e^{x^2}$`,
          R`a) $24x(3x^2-1)^3$. b) $\dfrac{1}{(x+1)^2}$. c) $2xe^{x^2}$.`),
        Q(3, R`Recta tangente a $y=x^2-3x$ en $x=1$.`,
          R`$f(1)=-2$, $f'(1)=-1$: $y=-x-1$.`)
      ],
      [
        Q(3.5, R`Estudia monotonía y extremos de $f(x)=x^3-12x$.`,
          R`$f'(x)=3x^2-12=0\Rightarrow x=\pm2$. Crece en $(-\infty,-2)\cup(2,\infty)$, decrece en $(-2,2)$. Máximo $(-2,16)$, mínimo $(2,-16)$.`),
        Q(3.5, R`Deriva: a) $\ln(3x-2)$ &nbsp; b) $\sin x\cos x$ &nbsp; c) $\sqrt{x^2+1}$`,
          R`a) $\dfrac{3}{3x-2}$. b) $\cos^2x-\sin^2x=\cos2x$. c) $\dfrac{x}{\sqrt{x^2+1}}$.`),
        Q(3, R`Dos números positivos suman 12. Halla los que hacen máximo el producto de uno por el cuadrado del otro.`,
          R`$P(y)=(12-y)y^2$, $P'(y)=24y-3y^2=0\Rightarrow y=8$. Los números son 4 y 8 (producto $4\cdot8^2=256$).`)
      ],
      [
        Q(3.5, R`Estudia la curvatura y los puntos de inflexión de $f(x)=x^3-6x^2+4$.`,
          R`$f''(x)=6x-12$. Cóncava ($\cap$) en $(-\infty,2)$, convexa ($\cup$) en $(2,\infty)$. Inflexión en $(2,-12)$.`),
        Q(3.5, R`Halla el punto de $y=x^2-4x+1$ donde la tangente es paralela a $y=2x$, y escribe esa tangente.`,
          R`$2x-4=2\Rightarrow x=3$, punto $(3,-2)$. Tangente: $y=2x-8$.`),
        Q(3, R`Representa $f(x)=x^3-3x$: cortes, extremos y simetría.`,
          R`Impar. Cortes: $x=0,\pm\sqrt3$. $f'(x)=3x^2-3$: máximo $(-1,2)$, mínimo $(1,-2)$. Inflexión en $(0,0)$.`)
      ]
    ] },
    { n: 'T8', name: 'Estadística y probabilidad', desc: 'Estadística bidimensional, regresión y probabilidad.', exams: [
      [
        Q(3.5, R`Para los datos $x$: 1, 2, 3, 4, 5 e $y$: 2, 4, 5, 4, 5, calcula la covarianza, el coeficiente de correlación y la recta de regresión de $y$ sobre $x$. Estima $y$ para $x=6$.`,
          R`$\bar x=3$, $\bar y=4$, $\sigma_{xy}=\frac{66}5-12=1{,}2$, $\sigma_x^2=2$, $\sigma_y^2=1{,}2$. $r=\dfrac{1{,}2}{\sqrt2\sqrt{1{,}2}}\approx0{,}77$. <br>Recta: $y=0{,}6x+2{,}2$; para $x=6$, $y=5{,}8$.`),
        Q(3.5, R`Lanzamos un dado y una moneda. ¿Probabilidad de sacar número par y cara?`,
          R`Son independientes: $\dfrac12\cdot\dfrac12=\dfrac14$.`),
        Q(3, R`Sacamos dos cartas de una baraja española de 40 sin devolverlas. ¿Probabilidad de que las dos sean oros?`,
          R`$\dfrac{10}{40}\cdot\dfrac9{39}=\dfrac3{52}$.`)
      ],
      [
        Q(3.5, R`Calcula media y desviación típica de: 2, 4, 4, 4, 5, 5, 7, 9.`,
          R`Media $=\dfrac{40}8=5$. Varianza $=\dfrac{9+1+1+1+0+0+4+16}{8}=4$, desviación típica $=2$.`),
        Q(3.5, R`La urna A tiene 3 bolas blancas y 2 negras; la B, 1 blanca y 4 negras. Lanzamos una moneda para elegir urna y sacamos una bola. a) ¿Probabilidad de blanca? b) Si salió blanca, ¿probabilidad de que fuera de A?`,
          R`a) $\dfrac12\cdot\dfrac35+\dfrac12\cdot\dfrac15=\dfrac25$. <br>b) $\dfrac{3/10}{2/5}=\dfrac34$.`),
        Q(3, R`$P(A)=0{,}6$, $P(B)=0{,}5$, $P(A\cup B)=0{,}8$. ¿Son independientes?`,
          R`$P(A\cap B)=0{,}6+0{,}5-0{,}8=0{,}3=P(A)P(B)$: sí lo son.`)
      ],
      [
        Q(3.5, R`Interpreta un coeficiente de correlación $r=-0{,}92$.`,
          R`Correlación lineal fuerte y negativa: cuando una variable crece, la otra decrece, y los puntos están muy cerca de una recta.`),
        Q(3.5, R`Sabemos que $\bar x=10$, $\bar y=20$, $\sigma_x=2$, $\sigma_y=5$ y $r=0{,}8$. Halla la recta de regresión de $y$ sobre $x$ y estima $y$ para $x=12$.`,
          R`Pendiente $=r\dfrac{\sigma_y}{\sigma_x}=2$: $y=20+2(x-10)=2x$. Para $x=12$: $y=24$.`),
        Q(3, R`Lanzamos 3 monedas. Probabilidad de: a) al menos una cara; b) exactamente dos caras.`,
          R`a) $1-\dfrac18=\dfrac78$. b) $\dfrac38$.`)
      ]
    ] }
  ];

  /* =========================== Interfaz =========================== */
  const $ = (s, r = document) => r.querySelector(s);
  const store = {
    get(k, d) { try { const v = localStorage.getItem('cc13:' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('cc13:' + k, JSON.stringify(v)); } catch { /* sin almacenamiento */ } }
  };
  const typeset = el => { if (window.MathJax && MathJax.typesetPromise) { MathJax.typesetClear && MathJax.typesetClear([el]); MathJax.typesetPromise([el]).catch(() => {}); } };
  const fmtNum = x => (Math.round(x * 10) / 10).toString().replace('.', ',');
  const MINUTES = 45;

  function mountCourse(key, topics) {
    const root = document.querySelector(`[data-bach="${key}"]`);
    if (!root) return;
    const grid = $('.bach-topics', root), area = $('.bach-exam', root);
    let sel = null, ex = 0, timer = null, left = MINUTES * 60;

    function drawTopics() {
      grid.innerHTML = '';
      topics.forEach((t, i) => {
        const bests = [0, 1, 2].map(k => store.get(`bach-${key}-${i}-${k}`, null)).filter(v => v !== null);
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'bach-topic' + (sel === i ? ' on' : '');
        b.setAttribute('aria-pressed', sel === i);
        b.innerHTML = `<span class="t"><span class="n">${t.n}</span><span class="nm"></span></span><span class="d"></span>
          <span class="meta">${t.practice ? '<span class="pill">Hoja de ejercicios</span>' : ''}<span class="pill">3 exámenes</span>${bests.length ? `<span class="pill ok">Mejor nota: ${fmtNum(Math.max(...bests))}</span>` : ''}</span>`;
        $('.nm', b).textContent = t.name; $('.d', b).textContent = t.desc;
        b.addEventListener('click', () => { sel = i; ex = 0; drawTopics(); drawExam(true); });
        grid.appendChild(b);
      });
    }

    function stopTimer() { clearInterval(timer); timer = null; }
    function paintClock() {
      const c = $('.clock', area); if (!c) return;
      c.textContent = String(Math.floor(left / 60)).padStart(2, '0') + ':' + String(left % 60).padStart(2, '0');
      c.classList.toggle('low', left <= 300);
      const btn = $('[data-timer]', area); if (btn) btn.textContent = timer ? 'Pausar' : (left < MINUTES * 60 ? 'Seguir' : 'Empezar cronómetro');
    }

    function drawExam(scroll) {
      stopTimer(); left = MINUTES * 60;
      if (sel === null) { area.hidden = true; return; }
      const t = topics[sel], qs = t.exams[ex];
      area.hidden = false;
      const practice = t.practice ? `
        <div class="practice">
          <div><span class="eyebrow">${t.n} · Para el cuaderno</span><h3>Hoja de ejercicios</h3>
          <p class="small">Hazlos en papel y luego compara con la solución.</p></div>
          <ol class="bach-qs">
            ${t.practice.map(p => `<li>
              <div class="q-top"><b>${p.t}</b></div>
              <div class="q-body">${safe(p.e)}</div>
              <details><summary>Ver solución</summary><div class="q-sol">${safe(p.s)}</div></details>
            </li>`).join('')}
          </ol>
        </div>` : '';
      area.innerHTML = practice + `
        <div class="exam-head">
          <div><span class="eyebrow">${t.n} · ${t.name}</span><h3>Examen de prueba ${ex + 1}</h3></div>
          <div class="row"><span class="clock">45:00</span><button class="btn" type="button" data-timer>Empezar cronómetro</button></div>
        </div>
        <div class="seg" role="group" aria-label="Elegir examen">
          ${[0, 1, 2].map(k => `<button type="button" data-ex="${k}" aria-pressed="${k === ex}">Examen ${k + 1}</button>`).join('')}
        </div>
        <p class="small">Tiempo orientativo: ${MINUTES} minutos. Hazlo en papel, luego abre las soluciones y ponte nota en cada ejercicio (de 0,1 en 0,1, como en la PAU).</p>
        <ol class="bach-qs">
          ${qs.map((q, k) => `<li>
            <div class="q-top"><b>Ejercicio ${k + 1}</b><span class="pill">${fmtNum(q.p)} puntos</span></div>
            <div class="q-body">${q.e}</div>
            <details><summary>Ver solución</summary><div class="q-sol">${q.s}</div></details>
            <label class="self">Mi nota: <input class="input" type="text" inputmode="decimal" placeholder="0" maxlength="4" id="bq-${key}-${sel}-${ex}-${k}"> / ${fmtNum(q.p)}</label>
          </li>`).join('')}
        </ol>
        <div class="grade-bar">
          <span>Nota del examen: <b class="grade">–</b> / 10</span>
          <button class="btn primary" type="button" data-save>Guardar nota</button>
          <span class="small saved" aria-live="polite"></span>
        </div>`;
      area.querySelectorAll('[data-ex]').forEach(b => b.addEventListener('click', () => { ex = +b.dataset.ex; drawExam(false); }));
      $('[data-timer]', area).addEventListener('click', () => {
        if (timer) { stopTimer(); paintClock(); return; }
        timer = setInterval(() => { left--; if (left <= 0) { left = 0; stopTimer(); } paintClock(); }, 1000);
        paintClock();
      });
      const inputs = [...area.querySelectorAll('.self input')];
      const total = () => inputs.reduce((s, inp, k) => { const v = parseFloat(String(inp.value).replace(',', '.')); return s + (Number.isFinite(v) ? Math.min(Math.max(v, 0), qs[k].p) : 0); }, 0);
      const paintGrade = () => { $('.grade', area).textContent = inputs.some(i => i.value !== '') ? fmtNum(total()) : '–'; };
      inputs.forEach(i => i.addEventListener('input', paintGrade));
      $('[data-save]', area).addEventListener('click', () => {
        if (!inputs.some(i => i.value !== '')) { $('.saved', area).textContent = 'Pon tu nota en al menos un ejercicio.'; return; }
        const k = `bach-${key}-${sel}-${ex}`, g = Math.round(total() * 10) / 10, prev = store.get(k, null);
        if (prev === null || g > prev) store.set(k, g);
        $('.saved', area).textContent = prev !== null && g <= prev ? `Guardada. Tu mejor nota sigue siendo ${fmtNum(prev)}.` : '¡Nota guardada en este dispositivo!';
        drawTopics();
      });
      typeset(area);
      if (scroll) area.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }

    drawTopics();
    addEventListener('hashchange', () => { stopTimer(); });
  }

  mountCourse('b1', B1);
  mountCourse('b2', B2);
})();
