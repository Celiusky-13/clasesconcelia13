/* ClasesConCelia13 · 1º Bachillerato, Matemáticas I.
   Organizado según los 10 capítulos de los libros libres de Marea Verde (apuntesmareaverde.org.es, CC BY-NC-SA).
   Teoría, ejercicios y exámenes redactados para esta web. */
(() => {
  'use strict';
  const R = String.raw;
  const Q = (p, e, s) => ({ p, e, s });
  const P = (t, e, s) => ({ t, e, s });
  const H = (h, b) => ({ h, b });
  const MV = 'https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/';

  window.CC13_B1 = [
    /* ------------------------------------------------------------------ 1 */
    { n: 'T1', name: 'Números reales y complejos', desc: 'Racionales e irracionales, intervalos, errores, radicales, complejos y logaritmos.',
      mv: MV + 'BC1_01_Complejos.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%201%20N%C3%BAmeros%20reales%20y%20complejos.pdf',
      tool: 'complejo',
      theory: [
        H('Números racionales e irracionales', R`Un número es <b>racional</b> ($\mathbb Q$) si se puede escribir como fracción. Su expresión decimal es exacta o periódica. Es <b>irracional</b> si tiene infinitas cifras decimales sin periodo, como $\sqrt2$, $\pi$ o $e$. Los dos juntos forman los <b>números reales</b> $\mathbb R$.
          <div class="ej"><b>Fracción generatriz.</b> $0{,}\overline{36}=\dfrac{36}{99}=\dfrac4{11}$ &nbsp;·&nbsp; $1{,}2\overline{3}=\dfrac{123-12}{90}=\dfrac{111}{90}=\dfrac{37}{30}$</div>`),
        H('Recta real, valor absoluto y distancia', R`Cada número real es un punto de la recta. El <b>valor absoluto</b> es la distancia al cero: $|x|=x$ si $x\ge0$ y $|x|=-x$ si $x<0$. La <b>distancia</b> entre $a$ y $b$ es $d(a,b)=|b-a|$.
          <p>En las desigualdades, si multiplicas o divides por un número negativo, <b>el sentido cambia</b>: $-2x<6 \Rightarrow x>-3$.</p>`),
        H('Intervalos y entornos', R`<div class="tbl"><table><tr><th>Intervalo</th><th>Desigualdad</th><th>Nombre</th></tr>
          <tr><td>$(a,b)$</td><td>$a<x<b$</td><td>abierto</td></tr>
          <tr><td>$[a,b]$</td><td>$a\le x\le b$</td><td>cerrado</td></tr>
          <tr><td>$[a,b)$</td><td>$a\le x<b$</td><td>semiabierto</td></tr>
          <tr><td>$(a,+\infty)$</td><td>$x>a$</td><td>semirrecta</td></tr></table></div>
          El <b>entorno</b> de centro $a$ y radio $r$ es $E(a,r)=(a-r,a+r)=\{x: |x-a|<r\}$.`),
        H('Aproximaciones, errores y notación científica', R`Si aproximamos un valor real $x$ por $x'$: <b>error absoluto</b> $E_a=|x-x'|$ y <b>error relativo</b> $E_r=\dfrac{E_a}{|x|}$ (se suele dar en %). <br>Notación científica: $a\cdot10^n$ con $1\le|a|<10$. Ejemplo: $0{,}000\,52=5{,}2\cdot10^{-4}$.`),
        H('Radicales', R`$\sqrt[n]{a^m}=a^{m/n}$, $\sqrt[n]{a}\cdot\sqrt[n]{b}=\sqrt[n]{ab}$. Para sumar, los radicales deben ser semejantes: $\sqrt{12}+\sqrt{27}=2\sqrt3+3\sqrt3=5\sqrt3$. <br><b>Racionalizar</b>: $\dfrac{1}{\sqrt a}=\dfrac{\sqrt a}{a}$ y $\dfrac{1}{\sqrt a-\sqrt b}=\dfrac{\sqrt a+\sqrt b}{a-b}$ (multiplicando por el conjugado).`),
        H('Números complejos en forma binómica', R`Como $x^2=-1$ no tiene solución real, se define $i=\sqrt{-1}$, es decir, $i^2=-1$. Un complejo es $z=a+bi$ ($a$ parte real, $b$ parte imaginaria). Su <b>conjugado</b> es $\bar z=a-bi$.
          <p>Se suma y multiplica como con polinomios, recordando $i^2=-1$. Para <b>dividir</b> se multiplica arriba y abajo por el conjugado del denominador. Las potencias de $i$ se repiten cada 4: $i,\,-1,\,-i,\,1$.</p>
          <div class="ej">$\dfrac{3+4i}{1+2i}=\dfrac{(3+4i)(1-2i)}{1+4}=\dfrac{11-2i}{5}$</div>`),
        H('Forma polar y fórmula de Moivre', R`El <b>módulo</b> es $r=|z|=\sqrt{a^2+b^2}$ y el <b>argumento</b> $\alpha$ cumple $\tan\alpha=\frac ba$ (¡mira el cuadrante!). Se escribe $z=r_\alpha=r(\cos\alpha+i\sin\alpha)$.
          <p>Producto y cociente: $r_\alpha\cdot s_\beta=(rs)_{\alpha+\beta}$, $\ \dfrac{r_\alpha}{s_\beta}=\left(\frac rs\right)_{\alpha-\beta}$. <b>Moivre</b>: $(r_\alpha)^n=(r^n)_{n\alpha}$.</p>
          <p><b>Raíces n-ésimas</b>: $\sqrt[n]{r_\alpha}=\left(\sqrt[n]r\right)_{\frac{\alpha+360^\circ k}{n}}$, con $k=0,1,\dots,n-1$. Forman un polígono regular.</p>`),
        H('Logaritmos', R`$\log_a x=y \iff a^y=x$ (con $a>0$, $a\neq1$, $x>0$).
          <div class="tbl"><table><tr><th>Propiedad</th><th>Fórmula</th></tr>
          <tr><td>Producto</td><td>$\log_a(xy)=\log_a x+\log_a y$</td></tr>
          <tr><td>Cociente</td><td>$\log_a\frac xy=\log_a x-\log_a y$</td></tr>
          <tr><td>Potencia</td><td>$\log_a x^n=n\log_a x$</td></tr>
          <tr><td>Cambio de base</td><td>$\log_a x=\dfrac{\ln x}{\ln a}$</td></tr></table></div>
          En las ecuaciones logarítmicas hay que <b>comprobar</b> las soluciones: no existe el logaritmo de un número negativo ni de 0.`)
      ],
      practice: [
        P('1. Fracción generatriz', R`Halla la fracción generatriz de $2{,}\overline5$ y de $0{,}1\overline6$.`, R`$2{,}\overline5=\dfrac{25-2}{9}=\dfrac{23}9$. $\quad0{,}1\overline6=\dfrac{16-1}{90}=\dfrac{15}{90}=\dfrac16$.`),
        P('2. Clasifica', R`Di si son racionales o irracionales: $\sqrt{16}$, $-\frac34$, $\sqrt7$, $0{,}\overline3$, $\frac\pi2$.`, R`$\sqrt{16}=4$ racional (natural); $-\frac34$ racional; $\sqrt7$ irracional; $0{,}\overline3=\frac13$ racional; $\frac\pi2$ irracional.`),
        P('3. Intervalos y entornos', R`Escribe como intervalo $|x+1|\le3$ y el entorno $E(2;\,0{,}5)$.`, R`$-3\le x+1\le3\Rightarrow[-4,2]$. $\quad E(2;0{,}5)=(1{,}5;\ 2{,}5)$.`),
        P('4. Errores', R`Aproximamos $\sqrt2=1{,}414213\ldots$ por $1{,}41$. Calcula el error absoluto y el relativo.`, R`$E_a\approx0{,}004214$. $\ E_r=\dfrac{0{,}004214}{1{,}414214}\approx0{,}0030$, es decir, un $0{,}30\,\%$.`),
        P('5. Notación científica', R`Calcula: a) $(2{,}5\cdot10^{-3})(4\cdot10^{7})$ &nbsp; b) $\dfrac{6\cdot10^8}{3\cdot10^{-2}}$`, R`a) $10\cdot10^4=1\cdot10^5$. $\quad$ b) $2\cdot10^{10}$.`),
        P('6. Radicales', R`a) $\sqrt{50}-2\sqrt{18}+\sqrt8$ &nbsp; b) Racionaliza $\dfrac{3}{2+\sqrt2}$`, R`a) $5\sqrt2-6\sqrt2+2\sqrt2=\sqrt2$. <br>b) $\dfrac{3(2-\sqrt2)}{4-2}=\dfrac{6-3\sqrt2}{2}$.`),
        P('7. Complejos en binómica', R`Calcula $(1+i)^2$, $(1+i)^8$ y $\dfrac{2-i}{3+i}$.`, R`$(1+i)^2=1+2i-1=2i$. $(1+i)^8=(2i)^4=16$. <br>$\dfrac{(2-i)(3-i)}{10}=\dfrac{6-2i-3i-1}{10}=\dfrac{1-i}{2}$.`),
        P('8. Forma polar', R`Pasa $z=-1-i$ a polar y calcula $z^4$.`, R`$r=\sqrt2$; está en el 3.<sup>er</sup> cuadrante, $\alpha=225^\circ$: $z=\sqrt2_{225^\circ}$. <br>$z^4=4_{900^\circ}=4_{180^\circ}=-4$.`),
        P('9. Raíces', R`Halla las raíces cuartas de $-16$.`, R`$-16=16_{180^\circ}$. Raíces: $2_{45^\circ},\,2_{135^\circ},\,2_{225^\circ},\,2_{315^\circ}$, es decir $\pm\sqrt2\pm\sqrt2\,i$.`),
        P('10. Logaritmos', R`Calcula $\log_5125$, $\log_2\frac18$, $\log_93$. Desarrolla $\log\dfrac{x^2y}{\sqrt z}$ y calcula $\log_320$ con la calculadora.`, R`$3$, $-3$ y $\frac12$. <br>$2\log x+\log y-\frac12\log z$. <br>$\log_320=\dfrac{\ln20}{\ln3}\approx2{,}727$.`),
        P('11. Ecuaciones', R`Resuelve: a) $\log_2x+\log_2(x+2)=3$ &nbsp; b) $3^{2x}-10\cdot3^x+9=0$`, R`a) $x(x+2)=8\Rightarrow x=2$ ($x=-4$ no vale). <br>b) $t=3^x$: $t^2-10t+9=0\Rightarrow t=1,9\Rightarrow x=0,\ x=2$.`)
      ],
      exams: [
        [
          Q(3.5, R`a) (1,5 p) Simplifica $\sqrt{12}+\sqrt{27}-\sqrt{48}$. <br>b) (2 p) Racionaliza $\dfrac{6}{\sqrt3}$ y $\dfrac{2}{\sqrt5-\sqrt3}$.`, R`a) $2\sqrt3+3\sqrt3-4\sqrt3=\sqrt3$. <br>b) $\dfrac{6\sqrt3}{3}=2\sqrt3$; $\ \dfrac{2(\sqrt5+\sqrt3)}{5-3}=\sqrt5+\sqrt3$.`),
          Q(3.5, R`Pasa $z=1+\sqrt3\,i$ a forma polar y calcula $z^6$.`, R`$|z|=2$, $\arg z=60^\circ$: $z=2_{60^\circ}$. Moivre: $z^6=64_{360^\circ}=64$.`),
          Q(3, R`Resuelve: a) $2^{x+1}+2^x=24$ &nbsp; b) $\log x+\log(x-3)=1$`, R`a) $3\cdot2^x=24\Rightarrow x=3$. <br>b) $x(x-3)=10\Rightarrow x=5$ ($x=-2$ no vale).`)
        ],
        [
          Q(3.5, R`Expresa como intervalos: a) $|x-3|<2$ &nbsp; b) $|2x+1|\ge3$`, R`a) $(1,5)$. <br>b) $2x+1\ge3$ o $2x+1\le-3$: $(-\infty,-2]\cup[1,\infty)$.`),
          Q(3.5, R`Halla las raíces cúbicas de $-8$ en forma binómica.`, R`$-8=8_{180^\circ}$: $2_{60^\circ},\,2_{180^\circ},\,2_{300^\circ}$, es decir $1+\sqrt3i$, $-2$ y $1-\sqrt3i$.`),
          Q(3, R`Resuelve $9^x-4\cdot3^x+3=0$.`, R`Con $t=3^x$: $t^2-4t+3=0\Rightarrow t=1,3$. Soluciones $x=0$ y $x=1$.`)
        ],
        [
          Q(3.5, R`Calcula: a) $(2+3i)(1-i)$ &nbsp; b) $\dfrac{3+4i}{1+2i}$ &nbsp; c) $i^{27}$`, R`a) $5+i$. <br>b) $\dfrac{11-2i}{5}$. <br>c) $27=4\cdot6+3$: $i^{27}=i^3=-i$.`),
          Q(3.5, R`Sabiendo que $\log2\approx0{,}301$ y $\log3\approx0{,}477$, calcula $\log12$, $\log1{,}5$ y $\log\sqrt8$.`, R`$\log12=2\log2+\log3=1{,}079$. $\log1{,}5=\log3-\log2=0{,}176$. $\log\sqrt8=\frac32\log2=0{,}4515$.`),
          Q(3, R`Halla $m$ para que $\dfrac{m+2i}{1-i}$ sea imaginario puro.`, R`$\dfrac{(m+2i)(1+i)}{2}=\dfrac{(m-2)+(m+2)i}{2}$. Parte real nula: $m=2$ (queda $2i$).`)
        ]
      ] },

    /* ------------------------------------------------------------------ 2 */
    { n: 'T2', name: 'Álgebra', desc: 'Polinomios, Ruffini, fracciones algebraicas, ecuaciones, inecuaciones y Gauss.',
      mv: MV + 'BC1_02_ALGEBRA.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%202%20%C3%81lgebra.pdf',
      tool: 'ruffini',
      theory: [
        H('Polinomios', R`Un polinomio es una suma de monomios: $P(x)=a_nx^n+\dots+a_1x+a_0$. El <b>grado</b> es el mayor exponente y el <b>valor numérico</b> $P(a)$ se obtiene sustituyendo $x$ por $a$.
          <p>Identidades notables: $(a+b)^2=a^2+2ab+b^2$, $\ (a-b)^2=a^2-2ab+b^2$, $\ (a+b)(a-b)=a^2-b^2$.</p>`),
        H('Regla de Ruffini y teorema del resto', R`Ruffini divide un polinomio entre $(x-a)$ de forma rápida (pruébalo en la herramienta de abajo). <br><b>Teorema del resto</b>: el resto de dividir $P(x)$ entre $(x-a)$ es $P(a)$. Si $P(a)=0$, $a$ es una <b>raíz</b> y $(x-a)$ es un factor.
          <div class="ej">¿$x^3+kx^2-4$ divisible por $x-2$? $\ P(2)=8+4k-4=0\Rightarrow k=-1$.</div>`),
        H('Raíces y factorización', R`Las raíces enteras de un polinomio con coeficientes enteros son <b>divisores del término independiente</b>. Pasos para factorizar: 1) sacar factor común; 2) identidades notables; 3) Ruffini con los divisores; 4) ecuación de 2.º grado para lo que quede.
          <div class="ej">$x^3-2x^2-5x+6=(x-1)(x-3)(x+2)$</div>`),
        H('Fracciones algebraicas', R`Se <b>simplifican</b> factorizando y tachando factores comunes (¡nunca sumandos!). Para sumar se busca el m.c.m. de los denominadores factorizados; para multiplicar, en línea; para dividir, en cruz.
          <div class="ej">$\dfrac{x^2-5x+6}{x^2-2x}=\dfrac{(x-2)(x-3)}{x(x-2)}=\dfrac{x-3}{x}$</div>`),
        H('Ecuaciones', R`2.º grado: $ax^2+bx+c=0\Rightarrow x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$. El <b>discriminante</b> $\Delta=b^2-4ac$ dice cuántas soluciones hay. <br><b>Bicuadradas</b> ($ax^4+bx^2+c=0$): cambio $t=x^2$. <b>Irracionales</b>: aislar la raíz, elevar al cuadrado y <b>comprobar</b>. <b>Racionales</b>: multiplicar por el m.c.m. y descartar las que anulen un denominador.`),
        H('Inecuaciones', R`1.<sup>er</sup> grado: como una ecuación, pero si multiplicas o divides por un negativo, cambia el sentido. <br>2.º grado y racionales: halla las raíces (de numerador y denominador), divide la recta en trozos y estudia el <b>signo</b> en cada uno.
          <div class="ej">$x^2-x-6\le0$: raíces $-2$ y $3$; negativo entre ellas: $[-2,3]$.</div>`),
        H('Sistemas: método de Gauss', R`Se transforma el sistema en uno <b>escalonado</b> (triangular) sumando a una ecuación múltiplos de otra, y se resuelve de abajo arriba. Clasificación: <b>compatible determinado</b> (una solución), <b>compatible indeterminado</b> (infinitas: aparece $0=0$), <b>incompatible</b> (aparece $0=k$ con $k\neq0$).
          <p><b>Sistemas de inecuaciones lineales</b> con dos incógnitas: cada inecuación es un semiplano; la solución es la región común.</p>`)
      ],
      practice: [
        P('4. Identidades notables', R`d) $(4x+5y)^2$ &nbsp;&nbsp; e) $\left(4x-\dfrac74\right)^2$ &nbsp;&nbsp; f) $(x^2-6y)(x^2+6y)$`,
          R`d) $16x^2+40xy+25y^2$. <br>e) $16x^2-2\cdot4x\cdot\dfrac74+\dfrac{49}{16}=16x^2-14x+\dfrac{49}{16}$. <br>f) Suma por diferencia: $x^4-36y^2$.`),
        P('5. Operaciones con polinomios', R`Sean $M(x)=3x^2-5x-3$, $N(x)=x^2+3x+1$ y $K(x)=x^2-x+2$. Calcula: <br>a) $M(-1)$ &nbsp;&nbsp; b) $2M(x)-4K(x)$ &nbsp;&nbsp; c) $M(x)+3N(x)\cdot K(x)$`,
          R`a) $M(-1)=3+5-3=5$. <br>b) $(6x^2-10x-6)-(4x^2-4x+8)=2x^2-6x-14$. <br>c) $N\cdot K=x^4+2x^3+5x+2$ (los términos en $x^2$ se anulan). Por 3: $3x^4+6x^3+15x+6$. Más $M$: $3x^4+6x^3+3x^2+10x+3$.`),
        P('6. Producto de polinomios', R`Calcula $P(x)\cdot Q(x)$ con $P(x)=2x^6+3x^4+x^2-6$ y $Q(x)=x^3+x$.`,
          R`$2x^9+3x^7+x^5-6x^3\ +\ 2x^7+3x^5+x^3-6x=2x^9+5x^7+4x^5-5x^3-6x$.`),
        P('7. Divisiones de polinomios', R`a) $(x^5+7x^3-5x+1)\div(x^3+2x)$ &nbsp;&nbsp; b) $(x^3-5x^2+x)\div(-x^2-1)$`,
          R`a) Cociente $x^2+5$, resto $-15x+1$. <br>b) Cociente $-x+5$, resto $5$. Comprobación: $(-x+5)(-x^2-1)+5=x^3-5x^2+x$ ✓`),
        P('8. Simplifica', R`a) $\dfrac{x^2-5x+6}{x^2-2x}$ &nbsp;&nbsp; b) $\dfrac{3x^3-6x^2}{3x^4+24x^3-60x^2}$`,
          R`a) $\dfrac{x-3}{x}$. <br>b) $\dfrac{3x^2(x-2)}{3x^2(x+10)(x-2)}=\dfrac{1}{x+10}$.`),
        P('9. Opera y simplifica', R`a) $\dfrac{x-1}{x^2-4}-\dfrac{x-2}{x^2+2x}$ &nbsp;&nbsp; b) $\dfrac{x-3}{x}\div\dfrac{x^2-9}{x^2+3x}$ &nbsp;&nbsp; c) $\dfrac{2x-1}{x^2+2x}\cdot\dfrac{x^3+2x^2}{4x}$`,
          R`a) m.c.m. $x(x-2)(x+2)$: $\dfrac{x(x-1)-(x-2)^2}{x(x^2-4)}=\dfrac{3x-4}{x^3-4x}$. <br>b) $\dfrac{x-3}{x}\cdot\dfrac{x(x+3)}{(x-3)(x+3)}=1$. <br>c) $\dfrac{(2x-1)x^2(x+2)}{4x^2(x+2)}=\dfrac{2x-1}{4}$.`),
        P('10. Teorema del resto', R`a) Halla el resto de $(x^{100}-3x+2)\div(x-1)$. <br>b) Halla $k$ para que $x^3+kx^2-4$ sea divisible por $x-2$.`, R`a) $P(1)=1-3+2=0$: es divisible. <br>b) $P(2)=4+4k=0\Rightarrow k=-1$.`),
        P('11. Gauss', R`Clasifica: $\begin{cases}x+y+z=3\\2x+2y+2z=6\\x-y=0\end{cases}$`, R`La 2.ª es el doble de la 1.ª: queda $x+y+z=3,\ x=y$. Compatible indeterminado: $(\lambda,\lambda,3-2\lambda)$.`),
        P('12. Sistema de inecuaciones', R`Representa la región $x\ge0,\ y\ge0,\ x+y\le4$.`, R`Es el triángulo de vértices $(0,0)$, $(4,0)$ y $(0,4)$ (incluye los lados).`)
      ],
      exams: [
        [
          Q(3.5, R`Resuelve: a) $x^4-5x^2+4=0$ &nbsp; b) $\sqrt{x+7}=x-5$`, R`a) $t=x^2$: $t=1,4\Rightarrow x=\pm1,\pm2$. <br>b) $x^2-11x+18=0\Rightarrow x=9,\ x=2$. Comprobando, solo vale $x=9$.`),
          Q(3.5, R`Resuelve: a) $x^2-x-6\le0$ &nbsp; b) $\dfrac{x-1}{x+2}>0$`, R`a) $[-2,3]$. <br>b) $(-\infty,-2)\cup(1,\infty)$.`),
          Q(3, R`Resuelve $\begin{cases}x+y=7\\xy=12\end{cases}$`, R`$x^2-7x+12=0$: soluciones $(3,4)$ y $(4,3)$.`)
        ],
        [
          Q(3.5, R`Factoriza $P(x)=x^3-2x^2-5x+6$.`, R`$P(1)=0$. Ruffini: $(x-1)(x^2-x-6)=(x-1)(x-3)(x+2)$.`),
          Q(3.5, R`Resuelve por Gauss: $\begin{cases}x+y+z=6\\2x-y+z=3\\x+2y-z=2\end{cases}$`, R`$E_2-2E_1$: $-3y-z=-9$; $E_3-E_1$: $y-2z=-4$. Entonces $y=2$, $z=3$, $x=1$.`),
          Q(3, R`3 cuadernos y 2 bolígrafos cuestan 9 €; 2 cuadernos y 5 bolígrafos, 8,75 €. ¿Cuánto cuesta cada cosa?`, R`$3c+2b=9$, $2c+5b=8{,}75$. Reducción: $11b=8{,}25\Rightarrow b=0{,}75$ €, $c=2{,}50$ €.`)
        ],
        [
          Q(3.5, R`Simplifica $\dfrac{x^2-4}{x^2+4x+4}$ y opera $\dfrac{2}{x}+\dfrac{3}{x+1}$.`, R`$\dfrac{(x-2)(x+2)}{(x+2)^2}=\dfrac{x-2}{x+2}$. $\quad\dfrac{2(x+1)+3x}{x(x+1)}=\dfrac{5x+2}{x^2+x}$.`),
          Q(3.5, R`Resuelve $\begin{cases}2x-1>3\\x^2-9<0\end{cases}$`, R`$x>2$ y $-3<x<3$: $(2,3)$.`),
          Q(3, R`Resuelve $\dfrac2x+\dfrac{3}{x+1}=2$.`, R`$2x^2-3x-2=0\Rightarrow x=2,\ x=-\dfrac12$ (las dos valen).`)
        ]
      ] },

    /* ------------------------------------------------------------------ 3 */
    { n: 'T3', name: 'Sucesiones', desc: 'Progresiones aritméticas y geométricas, límites de sucesiones y el número e.',
      mv: MV + 'BC1_03_Sucesiones.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%203%20Sucesiones.pdf',
      tool: 'progresiones',
      theory: [
        H('Qué es una sucesión', R`Una lista ordenada de números $a_1,a_2,a_3,\dots$ Se define con un <b>término general</b> ($a_n=n^2$) o de forma <b>recurrente</b>, a partir de los anteriores (Fibonacci: $a_{n}=a_{n-1}+a_{n-2}$).`),
        H('Progresiones aritméticas', R`Cada término es el anterior más una cantidad fija $d$ (diferencia). <div class="ej">$a_n=a_1+(n-1)d\qquad S_n=\dfrac{(a_1+a_n)\,n}{2}$</div>`),
        H('Progresiones geométricas', R`Cada término es el anterior por una cantidad fija $r$ (razón). <div class="ej">$a_n=a_1\cdot r^{\,n-1}\qquad S_n=\dfrac{a_1(r^n-1)}{r-1}$</div>
          Si $|r|<1$, la suma de <b>infinitos</b> términos es finita: $S_\infty=\dfrac{a_1}{1-r}$. Así se explica la paradoja de Aquiles y la tortuga.`),
        H('Monotonía y acotación', R`Es <b>creciente</b> si $a_{n+1}\ge a_n$ para todo $n$ y <b>decreciente</b> si $a_{n+1}\le a_n$. Para estudiarlo, mira el signo de $a_{n+1}-a_n$. Está <b>acotada</b> si todos sus términos están entre dos números.`),
        H('Límite de una sucesión', R`<b>Convergente</b>: sus términos se acercan a un número $L$. <b>Divergente</b>: tienden a $\pm\infty$. <b>Oscilante</b>: ni una cosa ni otra, como $(-1)^n$. <br>Cocientes de polinomios: compara los grados (mayor arriba $\to\infty$; mayor abajo $\to0$; iguales $\to$ cociente de coeficientes principales).`),
        H('El número e', R`$e=\displaystyle\lim_{n\to\infty}\left(1+\frac1n\right)^n=2{,}71828\ldots$ En general $\displaystyle\lim\left(1+\frac kn\right)^n=e^k$. <br>Aparece en el <b>interés compuesto</b>: $C=C_0\left(1+\frac rm\right)^{mt}$ y, si se capitaliza continuamente, $C=C_0\,e^{rt}$.`),
        H('Funciones exponencial y logarítmica', R`$y=a^x$ ($a>0$) pasa por $(0,1)$, es siempre positiva y tiene asíntota $y=0$; crece si $a>1$ y decrece si $0<a<1$. Su inversa es $y=\log_ax$, que pasa por $(1,0)$ y solo existe para $x>0$. Las dos gráficas son simétricas respecto de $y=x$.`)
      ],
      practice: [
        P('1. Término general', R`Halla el término general de: a) 3, 7, 11, 15… &nbsp; b) 2, 6, 18, 54… &nbsp; c) $1,\frac12,\frac13,\dots$ &nbsp; d) 1, 4, 9, 16…`, R`a) $4n-1$ &nbsp; b) $2\cdot3^{n-1}$ &nbsp; c) $\frac1n$ &nbsp; d) $n^2$`),
        P('2. Aritmética', R`Con $a_1=5$ y $d=3$, calcula $a_{20}$ y $S_{20}$.`, R`$a_{20}=5+19\cdot3=62$. $\ S_{20}=\dfrac{(5+62)\cdot20}{2}=670$.`),
        P('3. Dos términos', R`En una progresión aritmética $a_3=10$ y $a_8=25$. Halla $d$ y $a_1$.`, R`$5d=15\Rightarrow d=3$; $a_1=10-2\cdot3=4$.`),
        P('4. Geométrica', R`Con $a_1=3$ y $r=2$, calcula $a_6$ y $S_6$.`, R`$a_6=3\cdot2^5=96$. $\ S_6=\dfrac{3(2^6-1)}{2-1}=189$.`),
        P('5. Suma infinita', R`Calcula $8+4+2+1+\dots$ y escribe $0{,}\overline7$ como suma de una progresión geométrica.`, R`$S=\dfrac{8}{1-\frac12}=16$. $\ 0{,}\overline7=\dfrac7{10}+\dfrac7{100}+\dots=\dfrac{7/10}{1-1/10}=\dfrac79$.`),
        P('6. Monotonía', R`Estudia la monotonía, cotas y límite de $a_n=\dfrac{2n+1}{n+1}$.`, R`$a_{n+1}-a_n=\dfrac{1}{(n+1)(n+2)}>0$: creciente. Acotada: $\frac32\le a_n<2$. Límite: 2.`),
        P('7. Límites', R`a) $\lim\dfrac{3n^2-n}{n^2+1}$ &nbsp; b) $\lim\dfrac{n+1}{n^2}$ &nbsp; c) $\lim\left(1+\dfrac1n\right)^{3n}$ &nbsp; d) $\lim\left(1+\dfrac2n\right)^{n}$`, R`a) 3 &nbsp; b) 0 &nbsp; c) $e^3$ &nbsp; d) $e^2$`),
        P('8. Interés compuesto', R`Ingresamos 1000 € al 4 % anual compuesto. ¿Cuánto hay a los 5 años?`, R`$1000\cdot1{,}04^5\approx1216{,}65$ €.`),
        P('9. Bacterias', R`Una colonia de 100 bacterias se duplica cada hora. ¿Cuántas hay a las 10 horas? ¿Cuándo superan el millón?`, R`$100\cdot2^{10}=102\,400$. Necesitamos $2^n>10\,000$: como $2^{13}=8192$ y $2^{14}=16\,384$, a las 14 horas.`)
      ],
      exams: [
        [
          Q(3.5, R`Un anfiteatro tiene 20 filas. La primera tiene 15 asientos y cada fila tiene 3 más que la anterior. ¿Cuántos asientos hay en la última fila? ¿Y en total?`, R`Aritmética con $a_1=15$, $d=3$: $a_{20}=15+19\cdot3=72$. Total $S_{20}=\dfrac{(15+72)\cdot20}{2}=870$.`),
          Q(3.5, R`En una progresión geométrica $a_2=6$ y $a_5=162$. Halla la razón, $a_1$ y la suma de los 6 primeros términos.`, R`$r^3=\dfrac{162}{6}=27\Rightarrow r=3$, $a_1=2$. $\ S_6=\dfrac{2(3^6-1)}{2}=728$.`),
          Q(3, R`Calcula: a) $\lim\dfrac{2n^3+1}{4n^3-n}$ &nbsp; b) $\lim\left(\sqrt{n^2+n}-n\right)$ &nbsp; c) $\lim\left(\dfrac{n+3}{n}\right)^n$`, R`a) $\frac12$. <br>b) Conjugado: $\dfrac{n}{\sqrt{n^2+n}+n}\to\frac12$. <br>c) $\left(1+\frac3n\right)^n\to e^3$.`)
        ],
        [
          Q(3.5, R`Estudia la monotonía, las cotas y el límite de $a_n=\dfrac{n+3}{2n}$.`, R`$a_{n+1}-a_n=\dfrac{-3}{2n(n+1)}<0$: decreciente. Cota superior $a_1=2$; tiende a $\frac12$, que es cota inferior.`),
          Q(3.5, R`Una pelota cae desde 10 m y en cada bote sube la mitad de la altura anterior. ¿Qué distancia total recorre?`, R`Bajada inicial 10 m. Después sube y baja $5+2{,}5+\dots$: $2\cdot\dfrac{5}{1-\frac12}=20$ m. Total: 30 m.`),
          Q(3, R`Ingresamos 5000 € al 3 % anual compuesto. ¿Cuántos años completos tardan en superar los 6000 €?`, R`$1{,}03^n>1{,}2\Rightarrow n>\dfrac{\ln1{,}2}{\ln1{,}03}\approx6{,}17$. Hacen falta 7 años.`)
        ],
        [
          Q(3.5, R`a) Suma los 50 primeros números impares. b) ¿Cuántos impares consecutivos, empezando en 1, suman 400?`, R`a) $1+3+\dots+99=\dfrac{(1+99)\cdot50}{2}=2500$. <br>b) La suma de los $n$ primeros impares es $n^2$: $n^2=400\Rightarrow n=20$.`),
          Q(3.5, R`Tres números en progresión aritmética suman 15 y su producto es 105. Hállalos.`, R`$a-d,\ a,\ a+d$: $3a=15\Rightarrow a=5$. $5(25-d^2)=105\Rightarrow d=\pm2$. Los números son 3, 5 y 7.`),
          Q(3, R`Calcula: a) $\lim\left(1+\dfrac1{2n}\right)^{n}$ &nbsp; b) $\lim\left(\dfrac{2n+1}{2n-1}\right)^{n}$ &nbsp; c) $\lim\dfrac{n^2+1}{n^3}$`, R`a) $e^{1/2}=\sqrt e$. <br>b) $1^\infty$: $e^{\lim n\cdot\frac{2}{2n-1}}=e^1=e$. <br>c) 0.`)
        ]
      ] },

    /* ------------------------------------------------------------------ 4 */
    { n: 'T4', name: 'Trigonometría', desc: 'Razones, fórmulas de suma y ángulo doble, ecuaciones y resolución de triángulos.',
      mv: MV + 'BC1_04_Trigonometria.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%204%20Trigonometr%C3%ADa.pdf',
      tool: 'goniometrica',
      theory: [
        H('Ángulos: grados y radianes', R`$\pi\text{ rad}=180^\circ$. Para pasar de grados a radianes multiplica por $\frac{\pi}{180}$. Ejemplos: $90^\circ=\frac\pi2$, $60^\circ=\frac\pi3$, $45^\circ=\frac\pi4$.`),
        H('Razones de un ángulo agudo', R`En un triángulo rectángulo: $\sin\alpha=\frac{\text{opuesto}}{\text{hipotenusa}}$, $\cos\alpha=\frac{\text{contiguo}}{\text{hipotenusa}}$, $\tan\alpha=\frac{\sin\alpha}{\cos\alpha}$. <div class="ej">Relación fundamental: $\sin^2\alpha+\cos^2\alpha=1$, y también $1+\tan^2\alpha=\dfrac1{\cos^2\alpha}$.</div>`),
        H('Ángulos cualesquiera', R`En la circunferencia de radio 1, el coseno es la coordenada $x$ y el seno la $y$ (muévelo en la herramienta). Signos: 1.<sup>er</sup> cuadrante todo +; 2.º solo el seno +; 3.º solo la tangente +; 4.º solo el coseno +. <br>Reducción: $\sin(180^\circ-\alpha)=\sin\alpha$, $\cos(180^\circ-\alpha)=-\cos\alpha$, $\sin(-\alpha)=-\sin\alpha$, $\cos(-\alpha)=\cos\alpha$.`),
        H('Suma, resta, ángulo doble y mitad', R`<div class="tbl"><table>
          <tr><td>$\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$</td></tr>
          <tr><td>$\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$</td></tr>
          <tr><td>$\tan(a\pm b)=\dfrac{\tan a\pm\tan b}{1\mp\tan a\tan b}$</td></tr>
          <tr><td>$\sin2a=2\sin a\cos a\qquad\cos2a=\cos^2a-\sin^2a$</td></tr>
          <tr><td>$\sin\dfrac a2=\pm\sqrt{\dfrac{1-\cos a}{2}}\qquad\cos\dfrac a2=\pm\sqrt{\dfrac{1+\cos a}{2}}$</td></tr></table></div>`),
        H('Transformar sumas en productos', R`$\sin A+\sin B=2\sin\frac{A+B}2\cos\frac{A-B}2$, $\ \sin A-\sin B=2\cos\frac{A+B}2\sin\frac{A-B}2$ <br>$\cos A+\cos B=2\cos\frac{A+B}2\cos\frac{A-B}2$, $\ \cos A-\cos B=-2\sin\frac{A+B}2\sin\frac{A-B}2$`),
        H('Ecuaciones trigonométricas', R`Se pasa todo a una sola razón (con las fórmulas) y se resuelve como una ecuación normal. Cada valor da <b>dos</b> ángulos en $[0^\circ,360^\circ)$, y las soluciones generales se repiten cada $360^\circ$ (o $180^\circ$ para la tangente).
          <div class="ej">$\sin2x=\cos x\Rightarrow\cos x(2\sin x-1)=0\Rightarrow x=90^\circ,270^\circ,30^\circ,150^\circ$</div>`),
        H('Teoremas del seno y del coseno', R`<b>Seno</b>: $\dfrac a{\sin A}=\dfrac b{\sin B}=\dfrac c{\sin C}$. Se usa con dos ángulos y un lado, o con dos lados y el ángulo opuesto a uno (¡puede haber dos triángulos!). <br><b>Coseno</b>: $a^2=b^2+c^2-2bc\cos A$. Se usa con tres lados o con dos lados y el ángulo que forman. <br>Área: $S=\frac12\,bc\sin A$.`)
      ],
      practice: [
        P('1. Suma de ángulos', R`Calcula sin calculadora $\sin75^\circ$ y $\tan105^\circ$.`, R`$\sin(45^\circ+30^\circ)=\dfrac{\sqrt2}2\dfrac{\sqrt3}2+\dfrac{\sqrt2}2\dfrac12=\dfrac{\sqrt6+\sqrt2}{4}$. <br>$\tan(60^\circ+45^\circ)=\dfrac{\sqrt3+1}{1-\sqrt3}=-2-\sqrt3$.`),
        P('2. Ángulo doble', R`Si $\cos\alpha=-\frac13$ y $\alpha$ está en el 3.<sup>er</sup> cuadrante, calcula $\sin\alpha$, $\tan\alpha$, $\sin2\alpha$ y $\cos2\alpha$.`, R`$\sin\alpha=-\dfrac{2\sqrt2}3$, $\tan\alpha=2\sqrt2$, $\sin2\alpha=\dfrac{4\sqrt2}9$, $\cos2\alpha=\dfrac19-\dfrac89=-\dfrac79$.`),
        P('3. Reducción', R`Calcula $\sin150^\circ$, $\cos210^\circ$, $\tan300^\circ$ y $\sin(-30^\circ)$.`, R`$\frac12$, $-\frac{\sqrt3}2$, $-\sqrt3$ y $-\frac12$.`),
        P('4. Ángulo mitad', R`Si $\cos\alpha=\frac18$ y $\alpha$ es agudo, calcula $\cos\frac\alpha2$.`, R`$\sqrt{\dfrac{1+1/8}{2}}=\sqrt{\dfrac9{16}}=\dfrac34$.`),
        P('5. Suma a producto', R`Calcula $\sin75^\circ+\sin15^\circ$.`, R`$2\sin45^\circ\cos30^\circ=2\cdot\dfrac{\sqrt2}2\cdot\dfrac{\sqrt3}2=\dfrac{\sqrt6}{2}$.`),
        P('6. Ecuaciones', R`a) $\tan x=\sqrt3$ (todas las soluciones) &nbsp; b) $\sin2x=\cos x$ en $[0^\circ,360^\circ)$`, R`a) $x=60^\circ+180^\circ k$. <br>b) $x=30^\circ,90^\circ,150^\circ,270^\circ$.`),
        P('7. Identidad', R`Demuestra que $(\sin x+\cos x)^2=1+\sin2x$.`, R`$\sin^2x+2\sin x\cos x+\cos^2x=1+\sin2x$.`),
        P('8. Tres lados', R`Resuelve el triángulo de lados $a=5$, $b=7$, $c=8$ y calcula su área.`, R`$\cos A=\dfrac{49+64-25}{112}=\dfrac{11}{14}\Rightarrow A\approx38{,}21^\circ$. $\cos B=\dfrac{25+64-49}{80}=\dfrac12\Rightarrow B=60^\circ$. $C\approx81{,}79^\circ$. <br>Área $=\frac12\cdot5\cdot8\cdot\sin60^\circ=10\sqrt3\approx17{,}32$.`),
        P('9. Caso ambiguo', R`Resuelve el triángulo con $a=6$, $b=8$, $A=40^\circ$.`, R`$\sin B=\dfrac{8\sin40^\circ}{6}\approx0{,}857$: $B\approx58{,}99^\circ$ o $B\approx121{,}01^\circ$. Hay <b>dos triángulos</b>: con $C\approx81{,}01^\circ$ o con $C\approx18{,}99^\circ$.`)
      ],
      exams: [
        [
          Q(3.5, R`Si $\sin\alpha=\dfrac35$ y $\alpha$ está en el 2.º cuadrante, calcula $\cos\alpha$, $\tan\alpha$, $\sin2\alpha$ y $\cos2\alpha$.`, R`$\cos\alpha=-\frac45$, $\tan\alpha=-\frac34$, $\sin2\alpha=-\frac{24}{25}$, $\cos2\alpha=\frac7{25}$.`),
          Q(3.5, R`Resuelve el triángulo con $a=10$, $B=45^\circ$, $C=60^\circ$.`, R`$A=75^\circ$. $b=\dfrac{10\sin45^\circ}{\sin75^\circ}\approx7{,}32$, $c=\dfrac{10\sin60^\circ}{\sin75^\circ}\approx8{,}97$.`),
          Q(3, R`Resuelve $2\sin^2x-\sin x-1=0$ en $[0,2\pi)$.`, R`$\sin x=1$ o $\sin x=-\frac12$: $x=\frac\pi2,\ \frac{7\pi}6,\ \frac{11\pi}6$.`)
        ],
        [
          Q(3.5, R`Demuestra que $\dfrac{1-\cos^2x}{\sin x\cos x}=\tan x$.`, R`$\dfrac{\sin^2x}{\sin x\cos x}=\dfrac{\sin x}{\cos x}=\tan x$.`),
          Q(3.5, R`En un triángulo, $a=7$, $b=8$ y $C=60^\circ$. Calcula $c$.`, R`$c^2=49+64-56=57\Rightarrow c=\sqrt{57}\approx7{,}55$.`),
          Q(3, R`Vemos lo alto de una torre con un ángulo de 30°. Si nos acercamos 20 m, lo vemos con 45°. ¿Cuánto mide la torre?`, R`$h=x$ y $h=\dfrac{x+20}{\sqrt3}\Rightarrow x=\dfrac{20}{\sqrt3-1}=10(\sqrt3+1)\approx27{,}32$ m.`)
        ],
        [
          Q(3.5, R`a) Pasa $150^\circ$ a radianes y $\frac{3\pi}4$ rad a grados. <br>b) Calcula $\sin240^\circ$, $\cos330^\circ$ y $\tan135^\circ$.`, R`a) $\frac{5\pi}6$ rad y $135^\circ$. <br>b) $-\frac{\sqrt3}2$, $\frac{\sqrt3}2$ y $-1$.`),
          Q(3.5, R`Resuelve $\cos2x=\cos x$ en $[0,2\pi)$.`, R`$2\cos^2x-\cos x-1=0\Rightarrow\cos x=1$ o $-\frac12$: $x=0,\ \frac{2\pi}3,\ \frac{4\pi}3$.`),
          Q(3, R`Un triángulo tiene $b=6$, $c=8$ y $A=30^\circ$. Calcula su área y el lado $a$.`, R`Área $=\frac12\cdot6\cdot8\cdot\frac12=12$. $a^2=100-96\cos30^\circ\approx16{,}86\Rightarrow a\approx4{,}11$.`)
        ]
      ] },

    /* ------------------------------------------------------------------ 5 */
    { n: 'T5', name: 'Geometría analítica', desc: 'Vectores, producto escalar, rectas, distancias, lugares geométricos y cónicas.',
      mv: MV + 'BC1_05_Geometria.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%205%20Geometr%C3%ADa.pdf',
      theory: [
        H('Vectores', R`Un vector $\vec{AB}=B-A$ tiene módulo, dirección y sentido. Con $\vec u=(u_1,u_2)$: $|\vec u|=\sqrt{u_1^2+u_2^2}$. Punto medio de $AB$: $\left(\frac{a_1+b_1}2,\frac{a_2+b_2}2\right)$. Tres puntos están alineados si $\vec{AB}$ y $\vec{AC}$ son proporcionales.`),
        H('Producto escalar', R`$\vec u\cdot\vec v=u_1v_1+u_2v_2=|\vec u||\vec v|\cos\alpha$. Sirve para hallar ángulos: $\cos\alpha=\dfrac{\vec u\cdot\vec v}{|\vec u||\vec v|}$. Dos vectores son <b>perpendiculares</b> si $\vec u\cdot\vec v=0$. Una base es <b>ortonormal</b> si sus vectores son perpendiculares y de módulo 1.`),
        H('Ecuaciones de la recta', R`Con un punto $P(p_1,p_2)$ y un vector director $\vec v=(v_1,v_2)$:
          <div class="tbl"><table>
          <tr><td>Vectorial</td><td>$(x,y)=(p_1,p_2)+t(v_1,v_2)$</td></tr>
          <tr><td>Paramétricas</td><td>$x=p_1+tv_1,\ y=p_2+tv_2$</td></tr>
          <tr><td>Continua</td><td>$\dfrac{x-p_1}{v_1}=\dfrac{y-p_2}{v_2}$</td></tr>
          <tr><td>General</td><td>$Ax+By+C=0$, con vector $(-B,A)$ y normal $(A,B)$</td></tr>
          <tr><td>Punto-pendiente</td><td>$y-p_2=m(x-p_1)$, con $m=\frac{v_2}{v_1}$</td></tr></table></div>`),
        H('Posiciones, ángulos y distancias', R`Dos rectas son paralelas si sus vectores son proporcionales (coincidentes si además comparten un punto) y si no, se cortan. Ángulo: $\cos\alpha=\dfrac{|\vec u\cdot\vec v|}{|\vec u||\vec v|}$. <div class="ej">Distancia de un punto a una recta: $d(P,r)=\dfrac{|Ap_1+Bp_2+C|}{\sqrt{A^2+B^2}}$</div>`),
        H('Lugares geométricos', R`<b>Mediatriz</b> de $AB$: puntos a igual distancia de $A$ y $B$ (recta perpendicular por el punto medio). <b>Bisectriz</b> de dos rectas: puntos a igual distancia de ambas, $\dfrac{|A_1x+B_1y+C_1|}{\sqrt{A_1^2+B_1^2}}=\dfrac{|A_2x+B_2y+C_2|}{\sqrt{A_2^2+B_2^2}}$.`),
        H('Cónicas', R`<div class="tbl"><table>
          <tr><th>Cónica</th><th>Ecuación reducida</th><th>Datos</th></tr>
          <tr><td>Circunferencia</td><td>$(x-a)^2+(y-b)^2=r^2$</td><td>centro $(a,b)$, radio $r$</td></tr>
          <tr><td>Elipse</td><td>$\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$</td><td>$a^2=b^2+c^2$, focos $(\pm c,0)$, $e=\frac ca<1$</td></tr>
          <tr><td>Hipérbola</td><td>$\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$</td><td>$c^2=a^2+b^2$, asíntotas $y=\pm\frac bax$</td></tr>
          <tr><td>Parábola</td><td>$y^2=2px$</td><td>foco $(\frac p2,0)$, directriz $x=-\frac p2$</td></tr></table></div>
          La <b>hipérbola equilátera</b> tiene $a=b$; girada, su ecuación es $xy=k$.`)
      ],
      practice: [
        P('1. Vectores', R`Con $\vec u=(2,-1)$ y $\vec v=(1,3)$, calcula $2\vec u-\vec v$, $\vec u\cdot\vec v$ y el ángulo que forman.`, R`$(3,-5)$; $\ \vec u\cdot\vec v=-1$; $\ \cos\alpha=\dfrac{-1}{\sqrt5\sqrt{10}}\Rightarrow\alpha\approx98{,}13^\circ$.`),
        P('2. Perpendiculares', R`Halla $m$ para que $(m,2)$ y $(3,-6)$ sean perpendiculares.`, R`$3m-12=0\Rightarrow m=4$.`),
        P('3. Ecuaciones de la recta', R`Escribe todas las ecuaciones de la recta que pasa por $A(2,-1)$ con vector director $(3,4)$.`, R`Paramétricas: $x=2+3t,\ y=-1+4t$. Continua: $\frac{x-2}3=\frac{y+1}4$. General: $4x-3y-11=0$. Explícita: $y=\frac{4x-11}{3}$.`),
        P('4. Posición relativa', R`Estudia $r:\ x+2y-3=0$ y $s:\ 2x-y+4=0$.`, R`Las normales $(1,2)$ y $(2,-1)$ cumplen $(1,2)\cdot(2,-1)=0$: son <b>perpendiculares</b>. Se cortan en $(-1,2)$.`),
        P('5. Mediatriz', R`Halla la mediatriz del segmento de extremos $A(1,1)$ y $B(5,3)$.`, R`Punto medio $(3,2)$, normal $\vec{AB}=(4,2)$: $4x+2y-16=0$, es decir, $2x+y-8=0$.`),
        P('6. Distancia', R`Distancia de $P(1,-2)$ a $5x+12y-7=0$.`, R`$\dfrac{|5-24-7|}{13}=\dfrac{26}{13}=2$.`),
        P('7. Bisectrices', R`Halla las bisectrices de $3x-4y=0$ y $4x-3y=0$.`, R`$3x-4y=\pm(4x-3y)$: $x+y=0$ y $x-y=0$.`),
        P('8. Circunferencia', R`Ecuación de la circunferencia de centro $(-1,2)$ que pasa por $(2,6)$.`, R`$r=\sqrt{9+16}=5$: $(x+1)^2+(y-2)^2=25$.`),
        P('9. Elipse', R`Elipse con focos $(\pm3,0)$ y eje mayor 10.`, R`$a=5$, $c=3$, $b=4$: $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$, $e=\frac35$.`),
        P('10. Hipérbola y parábola', R`a) Focos, asíntotas y excentricidad de $\dfrac{x^2}{16}-\dfrac{y^2}9=1$. b) Foco y directriz de $y^2=8x$.`, R`a) $c=5$: focos $(\pm5,0)$, asíntotas $y=\pm\frac34x$, $e=\frac54$. <br>b) $p=4$: foco $(2,0)$, directriz $x=-2$.`)
      ],
      exams: [
        [
          Q(3.5, R`Con $\vec u=(3,4)$ y $\vec v=(-2,1)$, calcula $\vec u\cdot\vec v$, $|\vec u|$ y el ángulo que forman.`, R`$\vec u\cdot\vec v=-2$, $|\vec u|=5$. $\cos\alpha=\dfrac{-2}{5\sqrt5}\Rightarrow\alpha\approx100{,}3^\circ$.`),
          Q(3.5, R`Halla la ecuación general de la recta que pasa por $A(1,2)$ y $B(4,-1)$.`, R`Pendiente $-1$: $x+y-3=0$.`),
          Q(3, R`Distancia del punto $P(2,3)$ a la recta $3x-4y+1=0$.`, R`$\dfrac{|6-12+1|}{5}=1$.`)
        ],
        [
          Q(3.5, R`Posición relativa de $r:\ 2x-y+1=0$ y $s:\ 4x-2y+5=0$, y distancia entre ellas.`, R`Paralelas. $d=\dfrac{|5/2-1|}{\sqrt5}=\dfrac{3\sqrt5}{10}\approx0{,}67$.`),
          Q(3.5, R`Halla la recta perpendicular a $2x+y-3=0$ que pasa por $P(1,1)$.`, R`$x-2y+1=0$.`),
          Q(3, R`Centro y radio de $x^2+y^2-4x+6y-3=0$.`, R`$(x-2)^2+(y+3)^2=16$: centro $(2,-3)$, radio 4.`)
        ],
        [
          Q(3.5, R`Halla el simétrico de $A(1,2)$ respecto de $M(3,-1)$ y la mediatriz del segmento $AA'$.`, R`$A'=2M-A=(5,-4)$. La mediatriz pasa por $M$ con normal $\vec{AA'}=(4,-6)$: $4x-6y-18=0$, es decir, $2x-3y-9=0$.`),
          Q(3.5, R`Ángulo entre las rectas $y=2x+1$ e $y=-3x+2$.`, R`$\tan\alpha=\left|\dfrac{-3-2}{1-6}\right|=1\Rightarrow\alpha=45^\circ$.`),
          Q(3, R`Para la elipse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$, halla semiejes, focos y excentricidad.`, R`$a=5$, $b=3$, $c=4$: focos $(\pm4,0)$, $e=\frac45$.`)
        ]
      ] },

    /* ------------------------------------------------------------------ 6 */
    { n: 'T6', name: 'Funciones', desc: 'Tipos de funciones, composición, inversa, dominio, recorrido, simetrías y signo.',
      mv: MV + 'BC1_06_Funciones.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%206%20Funciones.pdf',
      tool: 'familias',
      theory: [
        H('Tipos de funciones', R`<div class="tbl"><table>
          <tr><th>Tipo</th><th>Ejemplo</th><th>Dominio</th></tr>
          <tr><td>Polinómica</td><td>$x^3-2x$</td><td>$\mathbb R$</td></tr>
          <tr><td>Racional</td><td>$\frac{1}{x-2}$</td><td>quita los ceros del denominador</td></tr>
          <tr><td>Raíz (índice par)</td><td>$\sqrt{x-1}$</td><td>radicando $\ge0$</td></tr>
          <tr><td>Exponencial</td><td>$2^x$</td><td>$\mathbb R$</td></tr>
          <tr><td>Logarítmica</td><td>$\ln(x+3)$</td><td>argumento $>0$</td></tr>
          <tr><td>Trigonométrica</td><td>$\sin x$, $\tan x$</td><td>$\tan$: quita $\frac\pi2+k\pi$</td></tr></table></div>
          Las funciones <b>a trozos</b> usan una fórmula distinta en cada intervalo. El <b>valor absoluto</b> $|f(x)|$ refleja hacia arriba la parte negativa de la gráfica. En economía, las funciones de <b>oferta y demanda</b> se cortan en el precio de equilibrio.`),
        H('Operaciones y composición', R`$(f+g)(x)=f(x)+g(x)$, $(f\cdot g)(x)=f(x)g(x)$… La <b>composición</b> aplica una función detrás de otra: $(g\circ f)(x)=g\big(f(x)\big)$. ¡El orden importa!
          <div class="ej">$f(x)=x^2,\ g(x)=x+1$: $(f\circ g)(x)=(x+1)^2$ y $(g\circ f)(x)=x^2+1$.</div>`),
        H('Función inversa', R`$f^{-1}$ deshace lo que hace $f$: $(f\circ f^{-1})(x)=x$. Para hallarla: escribe $y=f(x)$, despeja $x$ y cambia los nombres. Su gráfica es la simétrica de la de $f$ respecto de la recta $y=x$. Ejemplo: la inversa de $e^x$ es $\ln x$.`),
        H('Dominio y recorrido', R`El <b>dominio</b> son los $x$ donde la función existe. El <b>recorrido</b> o imagen son los valores $y$ que alcanza. <div class="ej">$f(x)=x^2-4x+5=(x-2)^2+1$ tiene recorrido $[1,\infty)$.</div>`),
        H('Simetrías y periodicidad', R`<b>Par</b>: $f(-x)=f(x)$, simétrica respecto del eje $Y$ (como $x^2$, $\cos x$). <b>Impar</b>: $f(-x)=-f(x)$, simétrica respecto del origen (como $x^3$, $\sin x$). <b>Periódica</b> de periodo $T$: $f(x+T)=f(x)$. $\sin(kx)$ tiene periodo $\frac{2\pi}{k}$.`),
        H('Cortes con los ejes y signo', R`Corte con el eje $Y$: $(0,f(0))$. Con el eje $X$: resolver $f(x)=0$. Para el <b>signo</b>, marca en la recta los ceros y los puntos fuera del dominio, y prueba un valor en cada trozo.`)
      ],
      practice: [
        P('1. Dominios', R`a) $\dfrac{x+1}{x^2-9}$ &nbsp; b) $\sqrt{6-2x}$ &nbsp; c) $\log(x^2-4)$ &nbsp; d) $\dfrac{\sqrt x}{x-4}$ &nbsp; e) $\dfrac{1}{\sqrt{x+2}}$`, R`a) $\mathbb R-\{\pm3\}$ &nbsp; b) $(-\infty,3]$ &nbsp; c) $(-\infty,-2)\cup(2,\infty)$ &nbsp; d) $[0,4)\cup(4,\infty)$ &nbsp; e) $(-2,\infty)$`),
        P('2. Recorridos', R`a) $f(x)=x^2-4x+5$ &nbsp; b) $g(x)=2^x+3$`, R`a) $(x-2)^2+1$: $[1,\infty)$. &nbsp; b) $2^x>0$: $(3,\infty)$.`),
        P('3. Simetrías', R`¿Son pares, impares o ninguna? $x^4-3x^2$, $\ x^3-x$, $\ x^2+x$, $\ \dfrac{\sin x}{x}$`, R`Par, impar, ninguna y par.`),
        P('4. Composición', R`Con $f(x)=\sqrt x$ y $g(x)=x^2+1$, calcula $f\circ g$ y $g\circ f$.`, R`$(f\circ g)(x)=\sqrt{x^2+1}$ y $(g\circ f)(x)=x+1$ (para $x\ge0$).`),
        P('5. Inversas', R`a) $f(x)=\dfrac{3x+2}{x-1}$ &nbsp; b) $g(x)=e^{2x-1}$`, R`a) $x(y-3)=y+2\Rightarrow f^{-1}(x)=\dfrac{x+2}{x-3}$. <br>b) $g^{-1}(x)=\dfrac{\ln x+1}{2}$.`),
        P('6. Cortes y signo', R`Estudia los cortes y el signo de $f(x)=\dfrac{x^2-1}{x+2}$.`, R`Cortes: $(\pm1,0)$ y $\left(0,-\frac12\right)$. Negativa en $(-\infty,-2)\cup(-1,1)$ y positiva en $(-2,-1)\cup(1,\infty)$.`),
        P('7. Valor absoluto', R`Escribe a trozos $|x-2|$ y $|x^2-4|$.`, R`$|x-2|=2-x$ si $x<2$; $x-2$ si $x\ge2$. <br>$|x^2-4|=4-x^2$ si $-2<x<2$; $x^2-4$ en el resto.`),
        P('8. Periodos', R`¿Qué periodo tienen $\sin(2x)$ y $\tan\left(\frac x2\right)$?`, R`$\pi$ y $2\pi$.`),
        P('9. Oferta y demanda', R`La demanda es $D(p)=100-2p$ y la oferta $O(p)=3p-25$. Halla el precio y la cantidad de equilibrio.`, R`$100-2p=3p-25\Rightarrow p=25$, cantidad 50.`)
      ],
      exams: [
        [
          Q(3.5, R`Halla el dominio de: a) $\sqrt{x^2-5x+6}$ &nbsp; b) $\ln\dfrac{x-1}{x+3}$`, R`a) $x^2-5x+6\ge0$: $(-\infty,2]\cup[3,\infty)$. <br>b) $\dfrac{x-1}{x+3}>0$: $(-\infty,-3)\cup(1,\infty)$.`),
          Q(3.5, R`Con $f(x)=2x-3$ y $g(x)=x^2$: calcula $f\circ g$, $g\circ f$, $(f\circ g)(2)$ y $f^{-1}$.`, R`$(f\circ g)(x)=2x^2-3$; $(g\circ f)(x)=4x^2-12x+9$; $(f\circ g)(2)=5$; $f^{-1}(x)=\dfrac{x+3}{2}$.`),
          Q(3, R`Estudia la simetría, los cortes y el signo de $f(x)=x^3-4x$.`, R`Impar. Cortes en $x=0,\pm2$. Negativa en $(-\infty,-2)\cup(0,2)$, positiva en $(-2,0)\cup(2,\infty)$.`)
        ],
        [
          Q(3.5, R`Sea $f(x)=\begin{cases}x+2 & x<0\\2 & 0\le x\le2\\x^2-2 & x>2\end{cases}$. Calcula $f(-1)$, $f(1)$, $f(3)$ y su recorrido.`, R`$f(-1)=1$, $f(1)=2$, $f(3)=7$. Recorrido: $(-\infty,2)\cup\{2\}\cup(2,\infty)=\mathbb R$.`),
          Q(3.5, R`Halla la inversa de $f(x)=\log_2(x-1)+3$ y el dominio de $f$.`, R`$x-1=2^{y-3}\Rightarrow f^{-1}(x)=2^{x-3}+1$. Dominio de $f$: $(1,\infty)$.`),
          Q(3, R`Escribe $|2x-6|$ a trozos y resuelve $|2x-6|=4$.`, R`$6-2x$ si $x<3$; $2x-6$ si $x\ge3$. Soluciones: $x=1$ y $x=5$.`)
        ],
        [
          Q(3.5, R`Dominio, recorrido y simetría de $f(x)=\sqrt{4-x^2}$.`, R`Dominio $[-2,2]$, recorrido $[0,2]$. Es par (es la semicircunferencia superior de radio 2).`),
          Q(3.5, R`La demanda de un producto es $D(p)=200-4p$ y la oferta $O(p)=6p-50$. Halla el precio y la cantidad de equilibrio.`, R`$200-4p=6p-50\Rightarrow p=25$, cantidad 100.`),
          Q(3, R`Para $f(x)=3\sin(2x)$, halla el periodo, el recorrido y $f\left(\frac\pi4\right)$.`, R`Periodo $\pi$, recorrido $[-3,3]$, $f\left(\frac\pi4\right)=3\sin\frac\pi2=3$.`)
        ]
      ] },

    /* ------------------------------------------------------------------ 7 */
    { n: 'T7', name: 'Límites y continuidad', desc: 'Límites laterales, asíntotas, indeterminaciones, continuidad y Bolzano.',
      mv: MV + 'BC1_07_Limites.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%207%20L%C3%ADmites.pdf',
      theory: [
        H('Concepto de límite', R`$\displaystyle\lim_{x\to a}f(x)=L$ significa que, cuando $x$ se acerca a $a$, $f(x)$ se acerca a $L$. Los <b>límites laterales</b> se calculan acercándose por la izquierda ($a^-$) o por la derecha ($a^+$). El límite existe si los dos coinciden.`),
        H('Asíntotas', R`<b>Vertical</b> $x=a$: $\lim_{x\to a}f(x)=\pm\infty$ (suele estar donde se anula el denominador). <b>Horizontal</b> $y=L$: $\lim_{x\to\pm\infty}f(x)=L$. <b>Oblicua</b> $y=mx+n$: $m=\lim\frac{f(x)}x$, $n=\lim\big(f(x)-mx\big)$. En las racionales hay oblicua cuando el numerador tiene un grado más que el denominador.`),
        H('Operaciones con infinito', R`$\infty+\infty=\infty$, $\ k\cdot\infty=\infty$ ($k\neq0$), $\ \frac k\infty=0$, $\ \frac k0=\infty$ (mira el signo con los laterales). <br><b>Indeterminaciones</b>: $\frac\infty\infty,\ \frac00,\ \infty-\infty,\ 0\cdot\infty,\ 1^\infty$.`),
        H('Cómo resolver las indeterminaciones', R`<div class="tbl"><table>
          <tr><td>$\frac\infty\infty$</td><td>Comparar grados (o dividir por la mayor potencia).</td></tr>
          <tr><td>$\frac00$ (polinomios)</td><td>Factorizar y simplificar.</td></tr>
          <tr><td>$\frac00$ o $\infty-\infty$ con raíces</td><td>Multiplicar por el conjugado.</td></tr>
          <tr><td>$1^\infty$</td><td>$\lim f^g=e^{\lim g\,(f-1)}$</td></tr></table></div>`),
        H('Continuidad', R`$f$ es continua en $a$ si: 1) existe $f(a)$; 2) existe $\lim_{x\to a}f(x)$; 3) son iguales. Polinomios, exponenciales, senos y cosenos son continuos en todo $\mathbb R$; racionales, raíces y logaritmos, en su dominio.`),
        H('Tipos de discontinuidad', R`<b>Evitable</b>: el límite existe pero no coincide con $f(a)$ (o $f(a)$ no existe). <b>De salto finito</b>: los laterales son finitos y distintos. <b>De salto infinito</b>: algún lateral es infinito (asíntota vertical). <b>Esencial</b>: algún lateral no existe.`),
        H('Teorema de Bolzano', R`Si $f$ es continua en $[a,b]$ y $f(a)$, $f(b)$ tienen signos distintos, existe $c\in(a,b)$ con $f(c)=0$. Se usa para demostrar que una ecuación tiene solución.`)
      ],
      practice: [
        P('1. Factorizando', R`$\displaystyle\lim_{x\to2}\frac{x^3-8}{x-2}$`, R`$\dfrac{(x-2)(x^2+2x+4)}{x-2}\to4+4+4=12$.`),
        P('2. En el infinito', R`a) $\lim\dfrac{x^2+1}{3x^2-x}$ &nbsp; b) $\lim\dfrac{x+1}{x^2}$ &nbsp; c) $\lim\dfrac{x^3}{x^2+1}$ (con $x\to\infty$)`, R`a) $\frac13$ &nbsp; b) 0 &nbsp; c) $\infty$`),
        P('3. Conjugado', R`a) $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+4x}-x\right)$ &nbsp; b) $\displaystyle\lim_{x\to0}\frac{\sqrt{1+x}-1}{x}$`, R`a) $\dfrac{4x}{\sqrt{x^2+4x}+x}\to2$. <br>b) $\dfrac{x}{x(\sqrt{1+x}+1)}\to\frac12$.`),
        P('4. Número e', R`$\displaystyle\lim_{x\to\infty}\left(1+\frac3x\right)^{2x}$`, R`$e^{\lim2x\cdot\frac3x}=e^6$.`),
        P('5. Asíntotas', R`a) $f(x)=\dfrac{2x^2+3}{x^2-1}$ &nbsp; b) $g(x)=\dfrac{x^3}{x^2+1}$`, R`a) Verticales $x=\pm1$; horizontal $y=2$. <br>b) Oblicua: $m=1$, $n=\lim\dfrac{-x}{x^2+1}=0$: $y=x$.`),
        P('6. Continuidad con parámetro', R`Halla $k$ para que sea continua $f(x)=\begin{cases}\dfrac{x^2-4}{x-2} & x\neq2\\k & x=2\end{cases}$`, R`$\lim_{x\to2}(x+2)=4\Rightarrow k=4$.`),
        P('7. Clasifica', R`$f(x)=\begin{cases}x+1 & x<1\\3 & x=1\\x^2 & x>1\end{cases}$`, R`Laterales $2$ y $1$: discontinuidad de <b>salto finito</b> en $x=1$.`),
        P('8. Bolzano', R`Demuestra que $x^3-3x+1=0$ tiene una raíz en $(0,1)$.`, R`$f(0)=1>0$, $f(1)=-1<0$ y $f$ es continua: por Bolzano hay una raíz.`)
      ],
      exams: [
        [
          Q(3.5, R`Calcula: a) $\displaystyle\lim_{x\to3}\frac{x^2-9}{x-3}$ &nbsp; b) $\displaystyle\lim_{x\to\infty}\frac{2x^3-x}{5x^3+2}$ &nbsp; c) $\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+x}-x\right)$`, R`a) 6 &nbsp; b) $\frac25$ &nbsp; c) $\frac12$`),
          Q(3.5, R`Halla las asíntotas de $f(x)=\dfrac{2x+1}{x-3}$ y estudia la posición de la gráfica cerca de la vertical.`, R`Vertical $x=3$: por la izquierda $\to-\infty$, por la derecha $\to+\infty$. Horizontal $y=2$.`),
          Q(3, R`Halla $a$ para que $f(x)=\begin{cases}x+1 & x<2\\ax^2 & x\ge2\end{cases}$ sea continua.`, R`$3=4a\Rightarrow a=\frac34$.`)
        ],
        [
          Q(3.5, R`Calcula $\displaystyle\lim_{x\to2}\frac{x-2}{\sqrt{x+2}-2}$.`, R`Conjugado: $\sqrt{x+2}+2\to4$.`),
          Q(3.5, R`Halla las asíntotas de $f(x)=\dfrac{x^2+2x}{x-1}$.`, R`Vertical $x=1$. Oblicua: $x^2+2x=(x-1)(x+3)+3\Rightarrow y=x+3$.`),
          Q(3, R`Estudia la continuidad de $f(x)=\begin{cases}x^2 & x\le0\\x & 0<x\le2\\4-x & x>2\end{cases}$`, R`En $x=0$: $0=0$. En $x=2$: $2=2$. Continua en $\mathbb R$.`)
        ],
        [
          Q(3.5, R`Calcula: a) $\displaystyle\lim_{x\to\infty}\left(1+\frac1{3x}\right)^x$ &nbsp; b) $\displaystyle\lim_{x\to1^-}\frac1{x-1}$ y $\displaystyle\lim_{x\to1^+}\frac1{x-1}$`, R`a) $e^{1/3}$. <br>b) $-\infty$ y $+\infty$.`),
          Q(3.5, R`Clasifica las discontinuidades de $f(x)=\dfrac{x^2-3x}{x^2-9}$.`, R`$f(x)=\dfrac{x(x-3)}{(x-3)(x+3)}=\dfrac{x}{x+3}$ si $x\neq3$. En $x=3$: evitable (límite $\frac12$). En $x=-3$: salto infinito. Además, asíntota horizontal $y=1$.`),
          Q(3, R`Demuestra que $x^3-3x+1=0$ tiene una solución entre 1 y 2.`, R`$f(1)=-1<0$, $f(2)=3>0$, $f$ continua: Bolzano.`)
        ]
      ] },

    /* ------------------------------------------------------------------ 8 */
    { n: 'T8', name: 'Derivadas', desc: 'Tasa de variación, definición, reglas, recta tangente, crecimiento y extremos.',
      mv: MV + 'BC1_08_Derivadas.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%208%20Derivadas.pdf',
      tool: 'tangente',
      theory: [
        H('Tasa de variación media e instantánea', R`La <b>TVM</b> en $[a,b]$ es $\dfrac{f(b)-f(a)}{b-a}$: la pendiente de la recta secante. Si hacemos el intervalo cada vez más pequeño obtenemos la <b>tasa instantánea</b>, que es la derivada. (Mueve $h$ en la herramienta y verás la secante convertirse en tangente).`),
        H('Derivada en un punto', R`$f'(a)=\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$. Si las derivadas laterales (con $h\to0^-$ y $h\to0^+$) son distintas, la función no es derivable ahí: le pasa a $|x|$ en $x=0$, que tiene un "pico". Toda función derivable es continua.`),
        H('Reglas de derivación', R`<div class="tbl"><table>
          <tr><th>Función</th><th>Derivada</th><th>Función</th><th>Derivada</th></tr>
          <tr><td>$k$</td><td>$0$</td><td>$x^n$</td><td>$nx^{n-1}$</td></tr>
          <tr><td>$\sqrt x$</td><td>$\frac1{2\sqrt x}$</td><td>$e^x$</td><td>$e^x$</td></tr>
          <tr><td>$a^x$</td><td>$a^x\ln a$</td><td>$\ln x$</td><td>$\frac1x$</td></tr>
          <tr><td>$\sin x$</td><td>$\cos x$</td><td>$\cos x$</td><td>$-\sin x$</td></tr>
          <tr><td>$\tan x$</td><td>$\frac1{\cos^2x}$</td><td>$\log_ax$</td><td>$\frac1{x\ln a}$</td></tr></table></div>
          Producto: $(fg)'=f'g+fg'$. Cociente: $\left(\frac fg\right)'=\dfrac{f'g-fg'}{g^2}$. <b>Regla de la cadena</b>: $\big(f(g(x))\big)'=f'(g(x))\cdot g'(x)$.`),
        H('Recta tangente', R`La derivada es la pendiente de la tangente: $y-f(a)=f'(a)(x-a)$.`),
        H('Interpretación física', R`Si $s(t)$ es la posición, la velocidad es $v(t)=s'(t)$ y la aceleración $a(t)=v'(t)$.`),
        H('Crecimiento, máximos y mínimos', R`Si $f'>0$ la función crece; si $f'<0$ decrece. Los extremos relativos están donde $f'(x)=0$ y la derivada cambia de signo (o donde $f''<0$: máximo; $f''>0$: mínimo). <b>Optimizar</b>: escribe la función a maximizar con una sola variable, derívala, iguala a cero y comprueba.`)
      ],
      practice: [
        P('1. TVM', R`TVM de $f(x)=x^2-3x$ en $[1,4]$.`, R`$\dfrac{f(4)-f(1)}{3}=\dfrac{4-(-2)}{3}=2$.`),
        P('2. Por definición', R`Calcula con la definición la derivada de $f(x)=\frac1x$ en $x=2$.`, R`$\displaystyle\lim_{h\to0}\frac{\frac1{2+h}-\frac12}{h}=\lim_{h\to0}\frac{-1}{2(2+h)}=-\frac14$.`),
        P('3. Reglas', R`Deriva: a) $(x^2+1)(x^3-2)$ b) $\dfrac{x^2-1}{x^2+1}$ c) $\sin(x^2)$ d) $\ln(\sin x)$ e) $e^{3x}\cos x$ f) $\tan2x$`, R`a) $5x^4+3x^2-4x$ &nbsp; b) $\dfrac{4x}{(x^2+1)^2}$ &nbsp; c) $2x\cos(x^2)$ &nbsp; d) $\dfrac{\cos x}{\sin x}$ &nbsp; e) $e^{3x}(3\cos x-\sin x)$ &nbsp; f) $\dfrac{2}{\cos^22x}$`),
        P('4. Tangente', R`Recta tangente a $f(x)=\sqrt x$ en $x=4$.`, R`$f(4)=2$, $f'(4)=\frac14$: $y=\frac x4+1$.`),
        P('5. Derivadas laterales', R`¿Es derivable $|x-1|$ en $x=1$?`, R`Derivada por la izquierda $-1$, por la derecha $1$: no es derivable.`),
        P('6. Física', R`La posición de un móvil es $s(t)=5t^2+2t$ (m). Halla la velocidad a los 3 s y la aceleración.`, R`$v(t)=10t+2$: $v(3)=32$ m/s. $a=10$ m/s².`),
        P('7. Monotonía', R`Estudia el crecimiento de $f(x)=xe^{-x}$.`, R`$f'(x)=(1-x)e^{-x}$: crece en $(-\infty,1)$, decrece en $(1,\infty)$. Máximo $\left(1,\frac1e\right)$.`),
        P('8. Extremos', R`Extremos relativos de $f(x)=x^4-2x^2$.`, R`$f'(x)=4x(x^2-1)$: máximo $(0,0)$; mínimos $(\pm1,-1)$.`),
        P('9. Optimización', R`Con 40 m de valla queremos cercar un terreno rectangular junto a un río (ese lado no lleva valla). ¿Qué medidas dan área máxima?`, R`$2x+y=40$, $A(x)=x(40-2x)$, $A'(x)=40-4x=0\Rightarrow x=10$. Lados 10 m y 20 m, área 200 m².`),
        P('10. Parámetro', R`Halla $a$ para que la tangente a $f(x)=ax^2+1$ en $x=1$ sea paralela a $y=4x$.`, R`$f'(1)=2a=4\Rightarrow a=2$.`)
      ],
      exams: [
        [
          Q(3.5, R`Calcula, usando la definición, la derivada de $f(x)=x^2$ en $x=3$.`, R`$\displaystyle\lim_{h\to0}\frac{(3+h)^2-9}{h}=\lim_{h\to0}(6+h)=6$.`),
          Q(3.5, R`Deriva: a) $(3x^2-1)^4$ &nbsp; b) $\dfrac{x}{x+1}$ &nbsp; c) $e^{x^2}$`, R`a) $24x(3x^2-1)^3$ &nbsp; b) $\dfrac1{(x+1)^2}$ &nbsp; c) $2xe^{x^2}$`),
          Q(3, R`Recta tangente a $y=x^2-3x$ en $x=1$.`, R`$f(1)=-2$, $f'(1)=-1$: $y=-x-1$.`)
        ],
        [
          Q(3.5, R`Estudia monotonía y extremos de $f(x)=x^3-12x$.`, R`$f'(x)=3x^2-12$: crece en $(-\infty,-2)\cup(2,\infty)$, decrece en $(-2,2)$. Máximo $(-2,16)$, mínimo $(2,-16)$.`),
          Q(3.5, R`Deriva: a) $\ln(3x-2)$ &nbsp; b) $\sin x\cos x$ &nbsp; c) $\sqrt{x^2+1}$`, R`a) $\dfrac3{3x-2}$ &nbsp; b) $\cos2x$ &nbsp; c) $\dfrac{x}{\sqrt{x^2+1}}$`),
          Q(3, R`Dos números positivos suman 12. Halla los que hacen máximo el producto de uno por el cuadrado del otro.`, R`$P(y)=(12-y)y^2$, $P'(y)=24y-3y^2=0\Rightarrow y=8$. Son 4 y 8.`)
        ],
        [
          Q(3.5, R`Estudia la curvatura y los puntos de inflexión de $f(x)=x^3-6x^2+4$.`, R`$f''(x)=6x-12$: cóncava ($\cap$) en $(-\infty,2)$, convexa ($\cup$) en $(2,\infty)$. Inflexión $(2,-12)$.`),
          Q(3.5, R`Halla el punto de $y=x^2-4x+1$ donde la tangente es paralela a $y=2x$ y escribe esa tangente.`, R`$2x-4=2\Rightarrow x=3$, punto $(3,-2)$. Tangente $y=2x-8$.`),
          Q(3, R`Representa $f(x)=x^3-3x$: cortes, extremos y simetría.`, R`Impar. Cortes $x=0,\pm\sqrt3$. Máximo $(-1,2)$, mínimo $(1,-2)$, inflexión $(0,0)$.`)
        ]
      ] },

    /* ------------------------------------------------------------------ 9 */
    { n: 'T9', name: 'Probabilidad', desc: 'Sucesos, Laplace, Kolmogorov, árboles, tablas de contingencia y Bayes.',
      mv: MV + 'BC1_09_Probabilidad.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%209%20Probabilidad.pdf',
      theory: [
        H('Experimentos y sucesos', R`Un experimento es <b>aleatorio</b> si no se puede predecir el resultado. El <b>espacio muestral</b> $E$ reúne todos los resultados posibles. Con los sucesos se opera: unión $A\cup B$ (ocurre $A$ o $B$), intersección $A\cap B$ (ocurren los dos), contrario $\bar A$. Son <b>incompatibles</b> si $A\cap B=\varnothing$. <br>Leyes de De Morgan: $\overline{A\cup B}=\bar A\cap\bar B$, $\ \overline{A\cap B}=\bar A\cup\bar B$.`),
        H('Asignar probabilidades', R`<b>Regla de Laplace</b> (si todos los resultados son igual de probables): $P(A)=\dfrac{\text{casos favorables}}{\text{casos posibles}}$. Si no, se estima con la <b>frecuencia relativa</b> repitiendo el experimento muchas veces.`),
        H('Axiomas de Kolmogorov y propiedades', R`1) $P(A)\ge0$; 2) $P(E)=1$; 3) si $A$ y $B$ son incompatibles, $P(A\cup B)=P(A)+P(B)$. De ahí salen: $P(\bar A)=1-P(A)$ y <div class="ej">$P(A\cup B)=P(A)+P(B)-P(A\cap B)$</div>`),
        H('Probabilidad condicionada e independencia', R`$P(A|B)=\dfrac{P(A\cap B)}{P(B)}$ es la probabilidad de $A$ sabiendo que ha ocurrido $B$. $A$ y $B$ son <b>independientes</b> si $P(A\cap B)=P(A)\,P(B)$, o sea, si saber $B$ no cambia la probabilidad de $A$.`),
        H('Árboles y tablas de contingencia', R`En un <b>diagrama de árbol</b>, las probabilidades se multiplican a lo largo de cada rama y se suman las ramas que llevan al mismo suceso. Una <b>tabla de contingencia</b> cruza dos características y permite leer directamente probabilidades conjuntas, marginales y condicionadas.`),
        H('Probabilidad total y Bayes', R`Si $A_1,\dots,A_n$ cubren todos los casos sin solaparse: <div class="ej">$P(B)=\sum P(A_i)P(B|A_i)\qquad P(A_k|B)=\dfrac{P(A_k)P(B|A_k)}{P(B)}$</div> Bayes "da la vuelta" a la condición: de "si llueve, llego tarde" a "si llego tarde, ¿había llovido?". <p>Curiosidad, la <b>paradoja del cumpleaños</b>: con solo 23 personas, la probabilidad de que dos cumplan años el mismo día ya supera el 50 %.</p>`)
      ],
      practice: [
        P('1. Sucesos', R`Lanzamos un dado. $A$ = "par", $B$ = "mayor que 3". Halla $A\cap B$, $A\cup B$, $\bar A$ y $P(A\cup B)$.`, R`$A\cap B=\{4,6\}$, $A\cup B=\{2,4,5,6\}$, $\bar A=\{1,3,5\}$, $P(A\cup B)=\frac46=\frac23$.`),
        P('2. De Morgan', R`$P(A)=0{,}4$, $P(B)=0{,}3$, $P(A\cap B)=0{,}1$. Calcula $P(\bar A\cap\bar B)$.`, R`$P(A\cup B)=0{,}6$, así que $P(\bar A\cap\bar B)=1-0{,}6=0{,}4$.`),
        P('3. Dos dados', R`Lanzamos dos dados. Probabilidad de que la suma sea 7, y de que sea 10 o más.`, R`7: seis casos de 36, $\frac16$. ≥10: $3+2+1=6$ casos, $\frac16$.`),
        P('4. Tabla de contingencia', R`De 200 alumnos, 120 son chicas y 80 chicos. Hacen deporte 90 chicas y 40 chicos. Calcula $P(\text{deporte})$, $P(\text{chica}|\text{deporte})$ y $P(\text{deporte}|\text{chico})$. ¿Son independientes "chica" y "deporte"?`, R`$\frac{130}{200}=0{,}65$; $\frac{90}{130}=\frac9{13}$; $\frac{40}{80}=0{,}5$. No: $P(\text{deporte}|\text{chica})=0{,}75\neq0{,}65$.`),
        P('5. Con y sin reemplazamiento', R`Bolsa con 5 bolas rojas y 3 verdes. Sacamos dos. Probabilidad de dos rojas con y sin reemplazamiento, y de una de cada color sin reemplazamiento.`, R`Con: $\left(\frac58\right)^2=\frac{25}{64}$. Sin: $\frac58\cdot\frac47=\frac5{14}$. Una de cada: $2\cdot\frac58\cdot\frac37=\frac{15}{28}$.`),
        P('6. Bayes', R`Llueve el 30 % de los días. Si llueve, llego tarde con probabilidad 0,4; si no, 0,1. a) ¿Probabilidad de llegar tarde? b) Si llegué tarde, ¿probabilidad de que lloviera?`, R`a) $0{,}3\cdot0{,}4+0{,}7\cdot0{,}1=0{,}19$. <br>b) $\dfrac{0{,}12}{0{,}19}=\dfrac{12}{19}\approx0{,}63$.`),
        P('7. Independientes', R`$A$ y $B$ independientes con $P(A)=0{,}5$ y $P(B)=0{,}6$. Calcula $P(A\cap B)$, $P(A\cup B)$ y $P(\bar A\cap\bar B)$.`, R`$0{,}3$; $0{,}8$; $0{,}2$.`),
        P('8. Al menos uno', R`¿Probabilidad de sacar al menos un 6 en 4 tiradas de un dado?`, R`Por el contrario: $1-\left(\frac56\right)^4\approx0{,}518$.`)
      ],
      exams: [
        [
          Q(3.5, R`$P(A)=0{,}6$, $P(B)=0{,}3$ y $P(A\cup B)=0{,}72$. Calcula $P(A\cap B)$, $P(A|B)$ y $P(\bar A\cup\bar B)$. ¿Son independientes?`, R`$P(A\cap B)=0{,}18$; $P(A|B)=0{,}6$; $P(\bar A\cup\bar B)=1-0{,}18=0{,}82$. Sí: $0{,}6\cdot0{,}3=0{,}18$.`),
          Q(3.5, R`La urna A tiene 3 bolas blancas y 2 negras; la B, 1 blanca y 4 negras. Elegimos urna con una moneda y sacamos una bola. a) ¿Probabilidad de blanca? b) Si es blanca, ¿probabilidad de que sea de A?`, R`a) $\frac12\cdot\frac35+\frac12\cdot\frac15=\frac25$. <br>b) $\dfrac{3/10}{2/5}=\frac34$.`),
          Q(3, R`Lanzamos dos dados. Calcula $P(\text{suma}=7)$ y $P(\text{al menos un }6)$.`, R`$\frac6{36}=\frac16$. $\ 1-\left(\frac56\right)^2=\frac{11}{36}$.`)
        ],
        [
          Q(3.5, R`De 300 personas, 180 tienen Android y 120 iPhone. Tienen tablet 60 de Android y 60 de iPhone. Calcula $P(\text{tablet})$ y $P(\text{iPhone}|\text{tablet})$. ¿Son independientes?`, R`$\frac{120}{300}=0{,}4$; $\frac{60}{120}=0{,}5$. No: $P(\text{iPhone})=0{,}4\neq0{,}5$.`),
          Q(3.5, R`Sacamos dos cartas de una baraja española de 40 sin devolverlas. Probabilidad de que: a) las dos sean oros; b) al menos una sea oros.`, R`a) $\frac{10}{40}\cdot\frac9{39}=\frac3{52}$. <br>b) $1-\frac{30}{40}\cdot\frac{29}{39}=\frac{23}{52}$.`),
          Q(3, R`Lanzamos 3 monedas. Probabilidad de: a) al menos una cara; b) exactamente dos caras.`, R`a) $\frac78$ &nbsp; b) $\frac38$`)
        ],
        [
          Q(3.5, R`Tres máquinas A, B y C fabrican el 50 %, 30 % y 20 % de las piezas, con un 2 %, 3 % y 5 % de defectuosas. a) ¿Probabilidad de que una pieza sea defectuosa? b) Si es defectuosa, ¿probabilidad de que venga de C?`, R`a) $0{,}01+0{,}009+0{,}01=0{,}029$. <br>b) $\dfrac{0{,}01}{0{,}029}=\dfrac{10}{29}\approx0{,}345$.`),
          Q(3.5, R`El caballero de Méré: ¿qué es más probable, sacar al menos un 6 en 4 tiradas de un dado o al menos un doble 6 en 24 tiradas de dos dados?`, R`$1-\left(\frac56\right)^4\approx0{,}518$ frente a $1-\left(\frac{35}{36}\right)^{24}\approx0{,}491$. Es más probable lo primero.`),
          Q(3, R`Bolsa con 5 bolas rojas y 3 verdes; sacamos dos sin reemplazamiento. Probabilidad de que sean del mismo color.`, R`$\frac58\cdot\frac47+\frac38\cdot\frac27=\frac{20+6}{56}=\frac{13}{28}$.`)
        ]
      ] },

    /* ----------------------------------------------------------------- 10 */
    { n: 'T10', name: 'Estadística', desc: 'Tablas, parámetros, estadística bidimensional, correlación y regresión.',
      mv: MV + 'BC1_10_Estadistica.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%2010%20Estad%C3%ADstica.pdf',
      tool: 'regresion',
      theory: [
        H('Conceptos básicos', R`<b>Población</b>: todos los individuos; <b>muestra</b>: la parte que se estudia. Variables <b>cualitativas</b> (color) o <b>cuantitativas</b>, que pueden ser discretas (nº de hermanos) o continuas (altura).`),
        H('Tablas de frecuencias', R`$f_i$ frecuencia absoluta, $F_i$ absoluta acumulada, $h_i=\frac{f_i}{N}$ relativa, $H_i$ relativa acumulada. Con datos <b>agrupados</b> en intervalos se usa la <b>marca de clase</b> (el punto medio).`),
        H('Parámetros de posición', R`<b>Media</b> $\bar x=\dfrac{\sum f_ix_i}{N}$, <b>mediana</b> (el valor central de los datos ordenados), <b>moda</b> (el más repetido) y <b>cuartiles</b> (dejan por debajo el 25 %, 50 % y 75 %).`),
        H('Parámetros de dispersión', R`Rango $=$ máximo $-$ mínimo. <div class="ej">Varianza $\sigma^2=\dfrac{\sum f_ix_i^2}{N}-\bar x^2\qquad$ desviación típica $\sigma=\sqrt{\sigma^2}$</div> El <b>coeficiente de variación</b> $CV=\dfrac{\sigma}{\bar x}$ permite comparar la dispersión de datos con medias distintas.`),
        H('Estadística bidimensional', R`Se estudian dos variables a la vez en una <b>tabla de doble entrada</b>. Las frecuencias <b>marginales</b> son los totales de cada fila o columna; las <b>condicionadas</b>, las de una variable dentro de un valor de la otra. Las variables son <b>independientes</b> si las condicionadas son iguales a las marginales. La <b>nube de puntos</b> da una primera idea de la relación.`),
        H('Covarianza, correlación y regresión', R`$\sigma_{xy}=\dfrac{\sum x_iy_i}{N}-\bar x\bar y$. <div class="ej">$r=\dfrac{\sigma_{xy}}{\sigma_x\sigma_y}\qquad y-\bar y=\dfrac{\sigma_{xy}}{\sigma_x^2}(x-\bar x)$</div>
          $-1\le r\le1$: cerca de $\pm1$, relación lineal fuerte; cerca de 0, débil. La recta de regresión sirve para <b>predecir</b> si $|r|$ es alto y no nos alejamos mucho de los datos. Y ojo: <b>correlación no implica causalidad</b>.`)
      ],
      practice: [
        P('1. Tipos de variables', R`Clasifica: color de ojos, número de hermanos, altura.`, R`Cualitativa; cuantitativa discreta; cuantitativa continua.`),
        P('2. Parámetros', R`Notas: 4, 5, 5, 6, 6, 6, 7, 7, 8, 9. Calcula media, mediana, moda, rango, desviación típica y CV.`, R`Media 6,3; mediana 6; moda 6; rango 5; $\sigma^2=41{,}7-39{,}69=2{,}01$, $\sigma\approx1{,}42$; $CV\approx0{,}23$.`),
        P('3. Datos agrupados', R`$[0,10)$: 5; $[10,20)$: 8; $[20,30)$: 7. Calcula la media y la desviación típica.`, R`Marcas 5, 15, 25. $\bar x=\frac{320}{20}=16$. $\sigma^2=\frac{6300}{20}-256=59$, $\sigma\approx7{,}68$.`),
        P('4. Comparar dispersión', R`El grupo A tiene media 60 y $\sigma=6$; el B, media 20 y $\sigma=4$. ¿Cuál es relativamente más disperso?`, R`$CV_A=0{,}1$ y $CV_B=0{,}2$: el B.`),
        P('5. Regresión', R`$x$: 2, 4, 6, 8; $y$: 3, 7, 5, 9. Calcula $\sigma_{xy}$, $r$ y la recta de regresión de $y$ sobre $x$.`, R`$\bar x=5$, $\bar y=6$, $\sigma_{xy}=34-30=4$, $\sigma_x^2=\sigma_y^2=5$. $r=0{,}8$. Recta: $y=0{,}8x+2$.`),
        P('6. Independencia', R`Hombres: 20 fuman y 30 no. Mujeres: 20 fuman y 30 no. ¿Son independientes sexo y fumar?`, R`Sí: en los dos grupos fuma el 40 %, igual que en el total.`),
        P('7. Causalidad', R`En verano se venden más helados y hay más ahogamientos. ¿Los helados provocan ahogamientos?`, R`No. Hay correlación porque las dos dependen de una tercera variable: el calor. Correlación no implica causalidad.`)
      ],
      exams: [
        [
          Q(3.5, R`$x$: 1, 2, 3, 4, 5; $y$: 2, 4, 5, 4, 5. Calcula la covarianza, $r$ y la recta de regresión de $y$ sobre $x$. Estima $y$ para $x=6$.`, R`$\sigma_{xy}=1{,}2$, $\sigma_x^2=2$, $\sigma_y^2=1{,}2$, $r\approx0{,}77$. Recta $y=0{,}6x+2{,}2$; para $x=6$, $5{,}8$.`),
          Q(3.5, R`Calcula media y desviación típica de: 2, 4, 4, 4, 5, 5, 7, 9.`, R`Media 5; varianza $\frac{32}8=4$; $\sigma=2$.`),
          Q(3, R`Interpreta $r=-0{,}92$.`, R`Relación lineal fuerte y negativa: cuando una variable crece, la otra decrece.`)
        ],
        [
          Q(3.5, R`Alturas (cm): $[150,160)$: 4; $[160,170)$: 10; $[170,180)$: 6. Calcula media, desviación típica y CV.`, R`$\bar x=\frac{3320}{20}=166$. $\sigma^2=27\,605-27\,556=49$, $\sigma=7$. $CV=\frac7{166}\approx0{,}042$.`),
          Q(3.5, R`$\bar x=10$, $\bar y=20$, $\sigma_x=2$, $\sigma_y=5$, $r=0{,}8$. Halla la recta de regresión de $y$ sobre $x$ y estima $y$ para $x=12$.`, R`Pendiente $0{,}8\cdot\frac52=2$: $y=2x$. Para $x=12$: 24.`),
          Q(3, R`¿Qué es más disperso: pesos con media 70 kg y $\sigma=7$, o alturas con media 170 cm y $\sigma=10$?`, R`$CV=0{,}1$ frente a $CV\approx0{,}059$: los pesos.`)
        ],
        [
          Q(3.5, R`$x$: 1, 2, 3, 4, 5; $y$: 10, 8, 7, 4, 1. Calcula $r$ y la recta de regresión. ¿Tiene sentido estimar $y$ para $x=6$?`, R`$\sigma_{xy}=13{,}6-18=-4{,}4$, $\sigma_x^2=2$, $\sigma_y^2=10$, $r\approx-0{,}98$. Recta $y=-2{,}2x+12{,}6$. Para $x=6$ da $-0{,}6$: es extrapolar fuera de los datos y poco fiable.`),
          Q(3.5, R`En una tabla, 40 de 100 chicos y 60 de 150 chicas prefieren ciencias. ¿Son independientes sexo y preferencia?`, R`$\frac{40}{100}=0{,}4$ y $\frac{60}{150}=0{,}4$: las condicionadas coinciden, sí son independientes.`),
          Q(3, R`Nº de hermanos (0 a 4) con frecuencias 3, 7, 6, 3, 1. Calcula media, moda y mediana.`, R`Media $\frac{32}{20}=1{,}6$. Moda 1. Los datos 10.º y 11.º son 1 y 2: mediana 1,5.`)
        ]
      ] }
  ];
})();
