/* ClasesConCelia13 · Bachillerato: datos de 2º (estilo PAU/EvAU Madrid), interfaz y herramientas interactivas.
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

  /* =========================== Interfaz =========================== */
  const B1 = window.CC13_B1 || [];
  const $ = (s, r = document) => r.querySelector(s);
  const store = {
    get(k, d) { try { const v = localStorage.getItem('cc13:' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('cc13:' + k, JSON.stringify(v)); } catch { /* sin almacenamiento */ } }
  };
  // MathJax pide no lanzar dos composiciones a la vez: las encadenamos.
  let mjChain = Promise.resolve();
  const typeset = el => { if (!(window.MathJax && MathJax.typesetPromise)) return; mjChain = mjChain.then(() => { MathJax.typesetClear && MathJax.typesetClear([el]); return MathJax.typesetPromise([el]); }).catch(() => {}); };
  const fmtNum = x => (Math.round(x * 10) / 10).toString().replace('.', ',');
  const fmt = (x, d = 3) => { if (!Number.isFinite(x)) return '—'; const v = Number(x.toFixed(d)); return (Object.is(v, -0) ? 0 : v).toString().replace('.', ','); };
  const safeAll = h => safe(h).replace(/\\\[[\s\S]*?\\\]/g, m => m.replace(/</g, '\\lt ').replace(/>/g, '\\gt '));
  const MINUTES = 45;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- utilidades de dibujo ---------- */
  function frame(xmin, xmax, ymin, ymax, w = 400, h = 260) {
    const X = x => (x - xmin) / (xmax - xmin) * w, Y = y => h - (y - ymin) / (ymax - ymin) * h;
    let s = '';
    for (let x = Math.ceil(xmin); x <= xmax; x++) s += `<line class="g" x1="${X(x)}" y1="0" x2="${X(x)}" y2="${h}"/>`;
    for (let y = Math.ceil(ymin); y <= ymax; y++) s += `<line class="g" x1="0" y1="${Y(y)}" x2="${w}" y2="${Y(y)}"/>`;
    if (xmin < 0 && xmax > 0) s += `<line class="ax" x1="${X(0)}" y1="0" x2="${X(0)}" y2="${h}"/>`;
    if (ymin < 0 && ymax > 0) s += `<line class="ax" x1="0" y1="${Y(0)}" x2="${w}" y2="${Y(0)}"/>`;
    const path = (f, cls = 'fn', a = xmin, b = xmax) => {
      let d = '', pen = false;
      for (let i = 0; i <= 400; i++) {
        const x = a + (b - a) * i / 400, y = f(x);
        if (!Number.isFinite(y) || y < ymin - 50 || y > ymax + 50) { pen = false; continue; }
        const py = Math.max(-1000, Math.min(1000, Y(y)));
        d += (pen ? 'L' : 'M') + X(x).toFixed(1) + ' ' + py.toFixed(1); pen = true;
      }
      return `<path class="${cls}" d="${d}"/>`;
    };
    const dot = (x, y, cls = 'pt', r = 5) => `<circle class="${cls}" cx="${X(x)}" cy="${Y(y)}" r="${r}"/>`;
    const seg = (x1, y1, x2, y2, cls = 'fn2') => `<line class="${cls}" x1="${X(x1)}" y1="${Y(y1)}" x2="${X(x2)}" y2="${Y(y2)}"/>`;
    const svg = inner => `<svg class="plot" viewBox="0 0 ${w} ${h}" role="img" aria-label="Gráfica">${s}${inner}</svg>`;
    return { X, Y, path, dot, seg, svg };
  }
  const polyTex = c => {
    const n = c.length - 1; let out = '';
    c.forEach((a, i) => {
      const p = n - i; if (a === 0) return;
      const sign = a < 0 ? ' - ' : (out ? ' + ' : ''); const abs = Math.abs(a);
      const coef = (abs === 1 && p > 0) ? '' : fmt(abs);
      out += (a < 0 && !out ? '-' : sign) + coef + (p > 1 ? `x^{${p}}` : p === 1 ? 'x' : '');
    });
    return out || '0';
  };

  /* ---------- herramientas interactivas ---------- */
  const TOOLS = {
    complejo(el) {
      el.innerHTML = `<h4>Pruébalo: el plano complejo</h4>
        <div class="ctrl"><label>Parte real $a$ <input class="input" id="cx-a" type="number" step="any" value="1"></label>
        <label>Parte imaginaria $b$ <input class="input" id="cx-b" type="number" step="any" value="1.732"></label></div>
        <div class="tool-out"><div class="cx-plot"></div><div class="cx-info"></div></div>`;
      const draw = () => {
        const a = parseFloat($('#cx-a', el).value) || 0, b = parseFloat($('#cx-b', el).value) || 0;
        const r = Math.hypot(a, b); let ang = Math.atan2(b, a) * 180 / Math.PI; if (ang < 0) ang += 360;
        const L = Math.max(3, Math.ceil(Math.max(Math.abs(a), Math.abs(b)) + 1));
        const F = frame(-L, L, -L, L, 300, 300);
        $('.cx-plot', el).innerHTML = F.svg(F.seg(0, 0, a, b, 'fn') + F.seg(0, 0, a, -b, 'fn3') + F.dot(a, b) + F.dot(a, -b, 'pt2', 4));
        $('.cx-info', el).innerHTML = `<p>$z=${fmt(a)}${b < 0 ? '-' : '+'}${fmt(Math.abs(b))}i$</p>
          <p>Módulo: $r=\\sqrt{a^2+b^2}\\approx${fmt(r)}$</p>
          <p>Argumento: $\\alpha\\approx${fmt(ang, 2)}^\\circ$ (${r === 0 ? 'no definido' : ['1.<sup>er</sup>', '2.º', '3.<sup>er</sup>', '4.º'][Math.min(3, Math.floor(ang / 90))] + ' cuadrante'})</p>
          <p>Forma polar: $${fmt(r)}_{${fmt(ang, 2)}^\\circ}$</p>
          <p class="small">En gris discontinuo, el conjugado $\\bar z=${fmt(a)}${b < 0 ? '+' : '-'}${fmt(Math.abs(b))}i$.</p>`;
        typeset($('.cx-info', el));
      };
      el.addEventListener('input', draw); draw();
    },

    ruffini(el) {
      el.innerHTML = `<h4>Pruébalo: regla de Ruffini</h4>
        <div class="ctrl"><label>Coeficientes (de mayor a menor grado) <input class="input" id="rf-c" value="1, -2, -5, 6"></label>
        <label>Dividir entre $x-a$, con $a=$ <input class="input" id="rf-a" type="number" step="any" value="1" style="max-width:90px"></label>
        <button class="btn" type="button" id="rf-f">Factorizar (raíces enteras)</button></div>
        <div class="rf-out"></div>`;
      const read = () => $('#rf-c', el).value.split(/[,;\s]+/).filter(Boolean).map(Number).filter(Number.isFinite);
      const div = (c, a) => { const q = [c[0]]; for (let i = 1; i < c.length; i++) q.push(c[i] + q[i - 1] * a); return { q: q.slice(0, -1), r: q[q.length - 1], row: q }; };
      const draw = () => {
        const c = read(), a = parseFloat($('#rf-a', el).value) || 0;
        if (c.length < 2) { $('.rf-out', el).innerHTML = '<p class="small">Escribe al menos dos coeficientes, separados por comas.</p>'; return; }
        const { q, r, row } = div(c, a);
        const mid = row.map((_, i) => i === 0 ? '' : fmt(row[i - 1] * a));
        $('.rf-out', el).innerHTML = `<div class="tbl"><table class="ruffini">
          <tr><td></td>${c.map(v => `<td>${fmt(v)}</td>`).join('')}</tr>
          <tr><td class="ra">${fmt(a)}</td>${mid.map(v => `<td>${v}</td>`).join('')}</tr>
          <tr class="res"><td></td>${row.map((v, i) => `<td class="${i === row.length - 1 ? 'rest' : ''}">${fmt(v)}</td>`).join('')}</tr></table></div>
          <p>Cociente: $${polyTex(q)}$ &nbsp;·&nbsp; Resto: $${fmt(r)}$</p>
          <p class="small">Teorema del resto: $P(${fmt(a)})=${fmt(r)}$. ${r === 0 ? `Como es 0, $x=${fmt(a)}$ es raíz y $(x${a < 0 ? '+' : '-'}${fmt(Math.abs(a))})$ es un factor.` : 'Como no es 0, no es raíz.'}</p>`;
        typeset($('.rf-out', el));
      };
      $('#rf-f', el).addEventListener('click', () => {
        let c = read(); const facs = [];
        if (c.length < 2 || !c.every(Number.isInteger)) { $('.rf-out', el).innerHTML = '<p class="small">La factorización automática solo funciona con coeficientes enteros.</p>'; return; }
        while (c.length > 1 && c[c.length - 1] === 0) { facs.push('x'); c = c.slice(0, -1); }
        let found = true;
        while (c.length > 1 && found) {
          found = false; const k = Math.abs(c[c.length - 1]);
          for (let d = 1; d <= k && !found; d++) {
            if (k % d) continue;
            for (const s of [d, -d]) { const { q, r } = div(c, s); if (r === 0) { facs.push(s < 0 ? `(x+${-s})` : `(x-${s})`); c = q; found = true; break; } }
          }
        }
        const factored = c.length === 1 ? (c[0] === 1 ? '' : c[0] === -1 ? '-' : fmt(c[0])) + facs.join('') : facs.join('') + `(${polyTex(c)})`;
        $('.rf-out', el).innerHTML = `<p>Factorización: $${factored}$</p>
          <p class="small">${c.length > 1 ? 'El último factor no tiene raíces enteras: prueba con la fórmula de 2.º grado si es de grado 2.' : 'Hemos encontrado todas las raíces enteras probando los divisores del término independiente.'}</p>`;
        typeset($('.rf-out', el));
      });
      el.addEventListener('input', draw); draw();
    },

    progresiones(el) {
      el.innerHTML = `<h4>Pruébalo: progresiones</h4>
        <div class="ctrl"><label>Tipo <select class="input" id="pg-t"><option value="a">Aritmética</option><option value="g">Geométrica</option></select></label>
        <label>$a_1$ <input class="input" id="pg-a" type="number" step="any" value="2"></label>
        <label><span id="pg-dl">$d$</span> <input class="input" id="pg-d" type="number" step="any" value="3"></label>
        <label>$n$ <input class="input" id="pg-n" type="number" min="1" max="40" value="8"></label></div>
        <div class="pg-out"></div>`;
      const draw = () => {
        const t = $('#pg-t', el).value, a1 = parseFloat($('#pg-a', el).value) || 0, d = parseFloat($('#pg-d', el).value) || 0;
        const n = Math.max(1, Math.min(40, parseInt($('#pg-n', el).value, 10) || 1));
        $('#pg-dl', el).textContent = t === 'a' ? 'd (diferencia)' : 'r (razón)';
        const terms = Array.from({ length: n }, (_, i) => t === 'a' ? a1 + i * d : a1 * d ** i);
        const an = terms[n - 1], Sn = terms.reduce((s, v) => s + v, 0);
        const shown = terms.slice(0, 15), mx = Math.max(1, ...shown.map(Math.abs));
        const bars = shown.map((v, i) => { const h = Math.abs(v) / mx * 100; return `<rect class="${v < 0 ? 'neg' : 'pos'}" x="${i * 26 + 4}" y="${v < 0 ? 110 : 110 - h}" width="20" height="${Math.max(h, 1)}"/>`; }).join('');
        const inf = t === 'g' && Math.abs(d) < 1 ? `<p>Como $|r|\\lt 1$, la suma infinita es $S_\\infty=\\dfrac{a_1}{1-r}\\approx${fmt(a1 / (1 - d))}$</p>` : '';
        $('.pg-out', el).innerHTML = `<p class="terms">${shown.map(v => fmt(v)).join(', ')}${n > 15 ? ', …' : ''}</p>
          <svg class="plot bars" viewBox="0 0 ${shown.length * 26 + 8} 220" role="img" aria-label="Términos"><line class="ax" x1="0" y1="110" x2="${shown.length * 26 + 8}" y2="110"/>${bars}</svg>
          <p>$a_{${n}}=${t === 'a' ? `a_1+(n-1)d` : `a_1\\cdot r^{n-1}`}\\approx${fmt(an)}$ &nbsp;·&nbsp; $S_{${n}}\\approx${fmt(Sn)}$</p>${inf}`;
        typeset(el);
      };
      el.addEventListener('input', draw); draw();
    },

    goniometrica(el) {
      el.innerHTML = `<h4>Pruébalo: la circunferencia goniométrica</h4>
        <div class="ctrl"><label style="flex:1">Ángulo: <b id="gn-v">60</b>° <input id="gn-a" type="range" min="0" max="360" value="60" style="width:100%"></label></div>
        <div class="tool-out"><div class="gn-plot"></div><div class="gn-info"></div></div>`;
      const draw = () => {
        const deg = +$('#gn-a', el).value, t = deg * Math.PI / 180, c = Math.cos(t), s = Math.sin(t);
        $('#gn-v', el).textContent = deg;
        const F = frame(-1.6, 1.6, -1.6, 1.6, 300, 300);
        const circ = `<circle class="fn" cx="${F.X(0)}" cy="${F.Y(0)}" r="${F.X(1) - F.X(0)}" fill="none"/>`;
        const tan = Math.abs(c) > 0.05 && Math.abs(s / c) < 1.6 ? F.seg(1, 0, 1, s / c, 'tn') + F.seg(0, 0, 1, s / c, 'fn3') : '';
        $('.gn-plot', el).innerHTML = F.svg(circ + tan + F.seg(0, 0, c, s, 'fn') + F.seg(0, 0, c, 0, 'cs') + F.seg(c, 0, c, s, 'sn') + F.dot(c, s));
        const q = deg % 90 === 0 ? 'sobre un eje' : ['1.<sup>er</sup>', '2.º', '3.<sup>er</sup>', '4.º'][Math.floor(deg / 90) % 4] + ' cuadrante';
        $('.gn-info', el).innerHTML = `<p>${deg}° $=${fmt(t, 4)}$ rad · ${q}</p>
          <p><span class="k sn"></span>$\\sin=${fmt(s)}$</p><p><span class="k cs"></span>$\\cos=${fmt(c)}$</p>
          <p><span class="k tn"></span>$\\tan=${Math.abs(c) < 1e-9 ? '\\text{no existe}' : fmt(s / c)}$</p>
          <p class="small">El seno es la altura del punto y el coseno su abscisa. Comprueba que $\\sin^2+\\cos^2=1$.</p>`;
        typeset($('.gn-info', el));
      };
      el.addEventListener('input', draw); draw();
    },

    familias(el) {
      const fams = {
        exp: { l: 'a^x', f: (x, a) => a ** x, d: 'Dominio $\\mathbb R$, recorrido $(0,\\infty)$. Crece si $a\\gt 1$, decrece si $0\\lt a\\lt 1$.', min: 0.2, max: 4, v: 2 },
        log: { l: '\\log_a x', f: (x, a) => Math.log(x) / Math.log(a), d: 'Dominio $(0,\\infty)$. Pasa por $(1,0)$ y es la inversa de $a^x$.', min: 0.2, max: 4, v: 2 },
        hip: { l: '\\dfrac{a}{x}', f: (x, a) => a / x, d: 'Dominio $\\mathbb R-\\{0\\}$. Asíntotas $x=0$ e $y=0$.', min: -4, max: 4, v: 1 },
        raiz: { l: '\\sqrt{x-a}', f: (x, a) => x >= a ? Math.sqrt(x - a) : NaN, d: 'Dominio $[a,\\infty)$: el radicando no puede ser negativo.', min: -4, max: 4, v: 1 },
        abs: { l: '|x-a|', f: (x, a) => Math.abs(x - a), d: 'La parte negativa de $x-a$ se refleja hacia arriba. Vértice en $x=a$.', min: -4, max: 4, v: 1 },
        sen: { l: 'a\\sin x', f: (x, a) => a * Math.sin(x), d: 'Periodo $2\\pi$. El parámetro cambia la amplitud: recorrido $[-|a|,|a|]$.', min: -3, max: 3, v: 2 }
      };
      el.innerHTML = `<h4>Pruébalo: familias de funciones</h4>
        <div class="ctrl"><label>Función <select class="input" id="fm-t">${Object.entries(fams).map(([k, o]) => `<option value="${k}">${o.l.replace(/\\dfrac\{a\}\{x\}/, 'a/x').replace(/\\log_a x/, 'logₐ x').replace(/\\sqrt\{x-a\}/, '√(x − a)').replace(/a\\sin x/, 'a·sen x')}</option>`).join('')}</select></label>
        <label style="flex:1">$a=$ <b id="fm-v"></b> <input id="fm-a" type="range" step="0.1" style="width:100%"></label></div>
        <div class="fm-plot"></div><p class="fm-info"></p>`;
      const sel = $('#fm-t', el), sl = $('#fm-a', el);
      const setRange = () => { const o = fams[sel.value]; sl.min = o.min; sl.max = o.max; sl.value = o.v; };
      const draw = () => {
        const o = fams[sel.value], a = +sl.value; $('#fm-v', el).textContent = fmt(a, 1);
        const F = frame(-6, 6, -4, 4);
        $('.fm-plot', el).innerHTML = F.svg(F.path(x => o.f(x, a)));
        $('.fm-info', el).innerHTML = `$y=${o.l}$ con $a=${fmt(a, 1)}$. ${o.d}${sel.value === 'exp' || sel.value === 'log' ? (Math.abs(a - 1) < 0.05 ? ' <b>Con $a=1$ no es una función de este tipo.</b>' : '') : ''}`;
        typeset($('.fm-info', el));
      };
      sel.addEventListener('change', () => { setRange(); draw(); }); sl.addEventListener('input', draw);
      setRange(); draw();
    },

    tangente(el) {
      const fs = {
        x2: { l: 'x^2', f: x => x * x, d: x => 2 * x },
        x3: { l: 'x^3-3x', f: x => x ** 3 - 3 * x, d: x => 3 * x * x - 3 },
        sin: { l: '\\sin x', f: Math.sin, d: Math.cos },
        exp: { l: 'e^x', f: Math.exp, d: Math.exp }
      };
      el.innerHTML = `<h4>Pruébalo: de la secante a la tangente</h4>
        <div class="ctrl"><label>Función <select class="input" id="tg-f"><option value="x2">x²</option><option value="x3">x³ − 3x</option><option value="sin">sen x</option><option value="exp">eˣ</option></select></label>
        <label style="flex:1">Punto $a=$ <b id="tg-av"></b><input id="tg-a" type="range" min="-2" max="2" step="0.1" value="1" style="width:100%"></label>
        <label style="flex:1">Salto $h=$ <b id="tg-hv"></b><input id="tg-h" type="range" min="0.05" max="2" step="0.05" value="1.5" style="width:100%"></label></div>
        <div class="tg-plot"></div><p class="tg-info"></p>`;
      const draw = () => {
        const o = fs[$('#tg-f', el).value], a = +$('#tg-a', el).value, h = +$('#tg-h', el).value;
        $('#tg-av', el).textContent = fmt(a, 2); $('#tg-hv', el).textContent = fmt(h, 2);
        const fa = o.f(a), fb = o.f(a + h), m = (fb - fa) / h, d = o.d(a);
        const F = frame(-4, 4, -4, 6);
        $('.tg-plot', el).innerHTML = F.svg(F.path(o.f) + F.path(x => fa + m * (x - a), 'fn3') + F.path(x => fa + d * (x - a), 'tn') + F.dot(a, fa) + F.dot(a + h, fb, 'pt2', 4));
        $('.tg-info', el).innerHTML = `<span class="k fn3"></span>Secante: TVM en $[${fmt(a, 2)},\\,${fmt(a + h, 2)}]$ $=\\dfrac{f(a+h)-f(a)}{h}\\approx${fmt(m)}$ &nbsp; <span class="k tn"></span>Tangente: $f'(${fmt(a, 2)})\\approx${fmt(d)}$. <span class="small">Haz $h$ pequeño y verás que las dos pendientes se acercan.</span>`;
        typeset($('.tg-info', el));
      };
      el.addEventListener('input', draw); draw();
    },

    regresion(el) {
      el.innerHTML = `<h4>Pruébalo: nube de puntos y recta de regresión</h4>
        <div class="tool-out"><label class="stack" style="gap:4px">Pares $x\\ y$ (uno por línea)
          <textarea class="input" id="rg-d" rows="7" style="font-family:var(--mono)">1 10\n2 8\n3 7\n4 4\n5 1</textarea></label>
          <div class="rg-plot"></div></div><div class="rg-info"></div>`;
      const draw = () => {
        const pts = $('#rg-d', el).value.split('\n').map(l => l.trim().replace(/,/g, '.').split(/[\s;]+/).map(Number)).filter(p => p.length >= 2 && p.every(Number.isFinite));
        if (pts.length < 2) { $('.rg-info', el).innerHTML = '<p class="small">Escribe al menos dos pares de números.</p>'; $('.rg-plot', el).innerHTML = ''; return; }
        const n = pts.length, mx = pts.reduce((s, p) => s + p[0], 0) / n, my = pts.reduce((s, p) => s + p[1], 0) / n;
        const sxy = pts.reduce((s, p) => s + p[0] * p[1], 0) / n - mx * my, sx2 = pts.reduce((s, p) => s + p[0] ** 2, 0) / n - mx * mx, sy2 = pts.reduce((s, p) => s + p[1] ** 2, 0) / n - my * my;
        const r = sxy / Math.sqrt(sx2 * sy2), m = sxy / sx2, b = my - m * mx;
        const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
        const pad = (lo, hi) => { const d = (hi - lo) || 1; return [lo - d * 0.15, hi + d * 0.15]; };
        const [x0, x1] = pad(Math.min(...xs), Math.max(...xs)), [y0, y1] = pad(Math.min(...ys), Math.max(...ys));
        const F = frame(x0, x1, y0, y1, 300, 220);
        $('.rg-plot', el).innerHTML = F.svg((sx2 > 0 ? F.path(x => m * x + b, 'tn') : '') + pts.map(p => F.dot(p[0], p[1])).join(''));
        const tipo = !Number.isFinite(r) ? '' : Math.abs(r) > 0.8 ? 'fuerte' : Math.abs(r) > 0.5 ? 'moderada' : 'débil';
        $('.rg-info', el).innerHTML = `<p>$\\bar x=${fmt(mx)}$, $\\bar y=${fmt(my)}$, $\\sigma_{xy}=${fmt(sxy)}$, $\\sigma_x=${fmt(Math.sqrt(sx2))}$, $\\sigma_y=${fmt(Math.sqrt(sy2))}$</p>
          <p>$r=${fmt(r)}$ → correlación ${tipo} ${r > 0 ? 'positiva' : 'negativa'}. &nbsp; Recta: $y=${fmt(m)}x${b < 0 ? '-' : '+'}${fmt(Math.abs(b))}$</p>`;
        typeset($('.rg-info', el));
      };
      el.addEventListener('input', draw); draw();
    }
  };

  /* ---------- cursos ---------- */
  function mountCourse(key, topics) {
    const root = document.querySelector(`[data-bach="${key}"]`);
    if (!root) return;
    const grid = $('.bach-topics', root), area = $('.bach-exam', root);
    let sel = null, tab = 'teoria', ex = 0, timer = null, left = MINUTES * 60;

    function drawTopics() {
      grid.innerHTML = '';
      topics.forEach((t, i) => {
        const bests = [0, 1, 2].map(k => store.get(`bach-${key}-${i}-${k}`, null)).filter(v => v !== null);
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'bach-topic' + (sel === i ? ' on' : '');
        b.setAttribute('aria-pressed', sel === i);
        b.innerHTML = `<span class="t"><span class="n">${t.n}</span><span class="nm"></span></span><span class="d"></span>
          <span class="meta">${t.theory ? '<span class="pill">Teoría</span>' : ''}${t.practice ? `<span class="pill">${t.practice.length} ejercicios</span>` : ''}<span class="pill">3 exámenes</span>${bests.length ? `<span class="pill ok">Mejor nota: ${fmtNum(Math.max(...bests))}</span>` : ''}</span>`;
        $('.nm', b).textContent = t.name; $('.d', b).textContent = t.desc;
        b.addEventListener('click', () => { sel = i; ex = 0; tab = 'teoria'; drawTopics(); drawTopic(true); });
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

    function theoryHTML(t) {
      return `<div class="theory">${t.theory.map(s => `<section><h4>${s.h}</h4><div class="th-b">${safeAll(s.b)}</div></section>`).join('')}</div>
        ${t.tool && TOOLS[t.tool] ? '<div class="tool" data-tool></div>' : ''}`;
    }
    function practiceHTML(t) {
      return `<p class="small">Hazlos en papel y después compara con la solución.</p><ol class="bach-qs">
        ${t.practice.map(p => `<li><div class="q-top"><b>${p.t}</b></div><div class="q-body">${safeAll(p.e)}</div>
          <details><summary>Ver solución</summary><div class="q-sol">${safeAll(p.s)}</div></details></li>`).join('')}</ol>`;
    }
    function examHTML(t) {
      const qs = t.exams[ex];
      return `<div class="exam-head"><h3>Examen de prueba ${ex + 1}</h3>
          <div class="row"><span class="clock">45:00</span><button class="btn" type="button" data-timer>Empezar cronómetro</button></div></div>
        <div class="seg" role="group" aria-label="Elegir examen">
          ${[0, 1, 2].map(k => `<button type="button" data-ex="${k}" aria-pressed="${k === ex}">Examen ${k + 1}</button>`).join('')}
        </div>
        <p class="small">Tiempo orientativo: ${MINUTES} minutos. Hazlo en papel, luego abre las soluciones y ponte nota en cada ejercicio (de 0,1 en 0,1, como en la PAU).</p>
        <ol class="bach-qs">
          ${qs.map((q, k) => `<li>
            <div class="q-top"><b>Ejercicio ${k + 1}</b><span class="pill">${fmtNum(q.p)} puntos</span></div>
            <div class="q-body">${safeAll(q.e)}</div>
            <details><summary>Ver solución</summary><div class="q-sol">${safeAll(q.s)}</div></details>
            <label class="self">Mi nota: <input class="input" type="text" inputmode="decimal" placeholder="0" maxlength="4" id="bq-${key}-${sel}-${ex}-${k}"> / ${fmtNum(q.p)}</label>
          </li>`).join('')}
        </ol>
        <div class="grade-bar"><span>Nota del examen: <b class="grade">–</b> / 10</span>
          <button class="btn primary" type="button" data-save>Guardar nota</button><span class="small saved" aria-live="polite"></span></div>`;
    }
    function wireExam(t) {
      const qs = t.exams[ex];
      area.querySelectorAll('[data-ex]').forEach(b => b.addEventListener('click', () => { ex = +b.dataset.ex; drawTopic(false); }));
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
    }

    function drawTopic(scroll) {
      stopTimer(); left = MINUTES * 60;
      if (sel === null) { area.hidden = true; return; }
      const t = topics[sel];
      const tabs = [t.theory && ['teoria', 'Teoría'], t.practice && ['ejercicios', 'Ejercicios'], ['examenes', 'Exámenes']].filter(Boolean);
      if (!tabs.some(x => x[0] === tab)) tab = tabs[0][0];
      area.hidden = false;
      area.innerHTML = `
        <div class="topic-head">
          <div><span class="eyebrow">${t.n}</span><h3 class="topic-title"></h3></div>
          ${t.mv ? `<div class="mv"><a href="${t.mv}" target="_blank" rel="noopener">Libro de Marea Verde (PDF)</a>${t.mvr ? ` · <a href="${t.mvr}" target="_blank" rel="noopener">Soluciones (PDF)</a>` : ''}</div>` : ''}
        </div>
        ${tabs.length > 1 ? `<div class="tabs" role="tablist">${tabs.map(([k, l]) => `<button type="button" role="tab" data-tab="${k}" aria-selected="${k === tab}">${l}</button>`).join('')}</div>` : ''}
        <div class="tab-body">${tab === 'teoria' ? theoryHTML(t) : tab === 'ejercicios' ? practiceHTML(t) : examHTML(t)}</div>`;
      $('.topic-title', area).textContent = t.name;
      area.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { tab = b.dataset.tab; drawTopic(false); }));
      if (tab === 'examenes') wireExam(t);
      const toolEl = $('[data-tool]', area); if (toolEl) TOOLS[t.tool](toolEl);
      typeset(area);
      if (scroll) area.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    }

    drawTopics();
    addEventListener('hashchange', () => { stopTimer(); });
  }

  mountCourse('b1', B1);
  mountCourse('b2', B2);
})();
