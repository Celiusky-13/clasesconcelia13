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
  const X = window.CC13_B1X;
  const G = X.G;

  window.CC13_B1 = [
    /* ------------------------------------------------------------------ 1 */
    { n: 'T1', name: 'Números reales y complejos', desc: 'Reales, valor absoluto, intervalos, potencias, radicales, notación científica, logaritmos y complejos.',
      mv: MV + 'BC1_01_Complejos.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%201%20N%C3%BAmeros%20reales%20y%20complejos.pdf',
      tool: 'complejo',
      theory: [...X.TH.reales, ...X.TH.potencias, ...X.TH.radicales, ...X.TH.notacion, ...X.TH.logaritmos,
        H('Números complejos: por qué hacen falta', R`La ecuación $x^2+1=0$ no tiene solución real, porque ningún cuadrado es negativo. Para resolverla se inventa la <b>unidad imaginaria</b> $i$, con
          <div class="ej">$i^2=-1\qquad\left(i=\sqrt{-1}\right)$</div>
          Así, $\sqrt{-9}=\sqrt9\cdot\sqrt{-1}=3i$ y $x^2+9=0$ tiene las soluciones $\pm3i$. El nombre de "imaginario" no significa que no existan: se usan en electricidad, aerodinámica y ¡en el diseño de las alas de los aviones!`),
        H('Potencias de i', R`<div class="tbl"><table><tr><td>$i^0=1$</td><td>$i^1=i$</td><td>$i^2=-1$</td><td>$i^3=-i$</td><td>$i^4=1$</td></tr></table></div>
          Se repiten cada 4. Para calcular $i^n$, divide $n$ entre 4 y quédate con el resto: $i^{27}=i^{3}=-i$ porque $27=4\cdot6+3$; $\ i^{42}=i^2=-1$.`),
        H('Forma binómica', R`Un número complejo es $z=a+bi$, con $a$ la <b>parte real</b> y $b$ la <b>parte imaginaria</b>. Si $b=0$ es un número real; si $a=0$, un <b>imaginario puro</b>.
          <ul><li>Dos complejos son <b>iguales</b> si tienen igual la parte real y la imaginaria.</li>
          <li><b>Opuesto</b>: $-z=-a-bi$. <b>Conjugado</b>: $\bar z=a-bi$.</li>
          <li>Se representa en el plano por el punto $(a,b)$, su <b>afijo</b> (mira la herramienta de abajo).</li></ul>`),
        H('Operaciones en forma binómica', R`<b>Suma y resta</b>: parte real con parte real e imaginaria con imaginaria. <br><b>Producto</b>: como con binomios, recordando $i^2=-1$: $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$. <br>Un complejo por su conjugado da un número real: $z\cdot\bar z=a^2+b^2$. <br><b>División</b>: se multiplica arriba y abajo por el conjugado del denominador.
          <div class="ej"><b>Ejemplo resuelto.</b> $z_1=3-2i$, $z_2=-1+4i$. $z_1z_2=-3+12i+2i-8i^2=5+14i$. <br>$\dfrac{z_1}{z_2}=\dfrac{(3-2i)(-1-4i)}{(-1)^2+4^2}=\dfrac{-3-12i+2i+8i^2}{17}=\dfrac{-11-10i}{17}$.</div>`),
        H('Módulo y argumento', R`El <b>módulo</b> es la distancia del afijo al origen: $r=|z|=\sqrt{a^2+b^2}$. El <b>argumento</b> $\alpha$ es el ángulo con el eje real positivo: $\tan\alpha=\frac ba$. La calculadora da un ángulo entre $-90^\circ$ y $90^\circ$; hay que corregirlo según el <b>cuadrante</b>:
          <div class="tbl"><table><tr><th>Cuadrante del afijo</th><th>Argumento</th></tr>
          <tr><td>1.º ($a>0,b>0$)</td><td>$\arctan\frac ba$</td></tr>
          <tr><td>2.º y 3.º ($a<0$)</td><td>$180^\circ+\arctan\frac ba$</td></tr>
          <tr><td>4.º ($a>0,b<0$)</td><td>$360^\circ+\arctan\frac ba$</td></tr>
          <tr><td>Sobre los ejes</td><td>$0^\circ$, $90^\circ$, $180^\circ$ o $270^\circ$</td></tr></table></div>
          <div class="ej"><b>Ejemplo resuelto.</b> $z=-\sqrt3+i$: $r=\sqrt{3+1}=2$. $\arctan\frac{1}{-\sqrt3}=-30^\circ$, pero está en el 2.º cuadrante: $\alpha=150^\circ$.</div>`),
        H('Formas polar y trigonométrica', R`<div class="ej">$z=r_\alpha=r(\cos\alpha+i\sin\alpha)\qquad a=r\cos\alpha,\quad b=r\sin\alpha$</div>
          Para pasar de polar a binómica: $6_{30^\circ}=6\cos30^\circ+6i\sin30^\circ=3\sqrt3+3i$. Para pasar de binómica a polar: módulo y argumento.`),
        H('Operaciones en forma polar', R`En polar, multiplicar y dividir es mucho más fácil:
          <div class="tbl"><table>
          <tr><td>Producto</td><td>$r_\alpha\cdot s_\beta=(r\cdot s)_{\alpha+\beta}$</td></tr>
          <tr><td>Cociente</td><td>$\dfrac{r_\alpha}{s_\beta}=\left(\dfrac rs\right)_{\alpha-\beta}$</td></tr>
          <tr><td>Potencia (Moivre)</td><td>$(r_\alpha)^n=(r^n)_{n\alpha}$</td></tr>
          <tr><td>Inverso</td><td>$\dfrac1{r_\alpha}=\left(\dfrac1r\right)_{-\alpha}$</td></tr></table></div>
          <div class="ej"><b>Ejemplo resuelto.</b> $(1+i)^{10}$: $1+i=\sqrt2_{45^\circ}$, así que $(1+i)^{10}=(\sqrt2)^{10}_{450^\circ}=32_{90^\circ}=32i$. ¡Hacerlo en binómica serían diez multiplicaciones!</div>
          Multiplicar por $i=1_{90^\circ}$ es girar $90^\circ$ el afijo.`),
        H('Moivre y la trigonometría', R`Con $r=1$, la fórmula de Moivre dice $(\cos\alpha+i\sin\alpha)^n=\cos n\alpha+i\sin n\alpha$. Para $n=2$, desarrollando el cuadrado: $\cos^2\alpha-\sin^2\alpha+2i\sin\alpha\cos\alpha$. Igualando partes reales e imaginarias obtenemos las fórmulas del ángulo doble:
          <div class="ej">$\cos2\alpha=\cos^2\alpha-\sin^2\alpha\qquad\sin2\alpha=2\sin\alpha\cos\alpha$</div>`),
        H('Raíces n-ésimas', R`Un complejo no nulo tiene exactamente $n$ raíces $n$-ésimas:
          <div class="ej">$\sqrt[n]{r_\alpha}=\left(\sqrt[n]r\right)_{\frac{\alpha+360^\circ k}{n}},\qquad k=0,1,\dots,n-1$</div>
          Todas tienen el mismo módulo y están repartidas a igual distancia: son los vértices de un <b>polígono regular</b> de $n$ lados.
          <div class="ej"><b>Ejemplo resuelto.</b> Raíces cúbicas de $8i=8_{90^\circ}$: $2_{30^\circ}$, $2_{150^\circ}$ y $2_{270^\circ}$, es decir, $\sqrt3+i$, $-\sqrt3+i$ y $-2i$ (un triángulo equilátero).</div>`),
        H('Ecuaciones en los complejos', R`Con los complejos, toda ecuación de 2.º grado tiene solución: si $\Delta<0$, $\sqrt\Delta$ es imaginaria.
          <div class="ej">$x^2-4x+13=0\Rightarrow x=\dfrac{4\pm\sqrt{-36}}2=\dfrac{4\pm6i}2=2\pm3i$</div>
          Las soluciones complejas de una ecuación con coeficientes reales aparecen siempre por parejas de <b>conjugados</b>. En general, un polinomio de grado $n$ tiene $n$ raíces complejas (<b>teorema fundamental del álgebra</b>). Ejemplo: $z^3+8=0\Rightarrow z=\sqrt[3]{-8}$, con raíces $1+\sqrt3i$, $-2$ y $1-\sqrt3i$.`)
      ],
      practice: [...X.PR.reales, ...X.PR.potencias, ...X.PR.radicales, ...X.PR.notacion, ...X.PR.logaritmos,
        G('Números complejos'),
        P('Potencias de i', R`Calcula $i^{15}$, $i^{42}$, $i^{-1}$ y $i+i^2+i^3+i^4$.`, R`$-i$; $-1$; $\frac1i=\frac{-i}{1}=-i$; $\ i-1-i+1=0$.`),
        P('Ecuaciones', R`Resuelve en $\mathbb C$: a) $x^2+9=0$ b) $x^2-4x+13=0$ c) $x^4-1=0$`, R`a) $\pm3i$ b) $2\pm3i$ c) $(x^2-1)(x^2+1)=0$: $\pm1,\ \pm i$.`),
        P('Operaciones', R`Con $z_1=3-2i$ y $z_2=-1+4i$, calcula $z_1+z_2$, $z_1-z_2$, $z_1z_2$ y $\dfrac{z_1}{z_2}$.`, R`$2+2i$; $4-6i$; $5+14i$; $\dfrac{-11-10i}{17}$.`),
        P('Halla x e y', R`a) $(x+2i)+(3-yi)=5+i$ &nbsp; b) $(2+xi)(1-i)$ es un número real.`, R`a) $x+3=5$, $2-y=1$: $x=2$, $y=1$. <br>b) $(2+x)+(x-2)i$: real si $x=2$.`),
        P('Conjugado y módulo', R`Para $z=4-3i$, calcula $\bar z$, $|z|$ y $z\cdot\bar z$.`, R`$4+3i$; $5$; $25$.`),
        P('De binómica a polar', R`a) $2+2i$ b) $-\sqrt3+i$ c) $-5$ d) $-4i$ e) $1-\sqrt3i$`, R`a) $2\sqrt2_{45^\circ}$ b) $2_{150^\circ}$ c) $5_{180^\circ}$ d) $4_{270^\circ}$ e) $2_{300^\circ}$`),
        P('De polar a binómica', R`a) $6_{30^\circ}$ b) $2_{135^\circ}$ c) $3_{270^\circ}$ d) $4_{150^\circ}$`, R`a) $3\sqrt3+3i$ b) $-\sqrt2+\sqrt2i$ c) $-3i$ d) $-2\sqrt3+2i$`),
        P('Operaciones en polar', R`Con $z_1=4_{50^\circ}$ y $z_2=2_{20^\circ}$, calcula $z_1z_2$, $\dfrac{z_1}{z_2}$ y $z_2^5$.`, R`$8_{70^\circ}$; $2_{30^\circ}$; $32_{100^\circ}$.`),
        P('Moivre', R`Calcula $(1+i)^{10}$ y $(-1+\sqrt3i)^6$.`, R`$(\sqrt2_{45^\circ})^{10}=32_{90^\circ}=32i$. $\ (2_{120^\circ})^6=64_{720^\circ}=64$.`),
        P('Raíces', R`a) Raíces cuadradas de $-4$. b) Raíces cúbicas de $8i$. c) Raíces cuartas de $-16$.`, R`a) $\pm2i$. b) $\sqrt3+i$, $-\sqrt3+i$, $-2i$. c) $\pm\sqrt2\pm\sqrt2i$.`),
        P('Ecuación de grado 3', R`Resuelve $z^3+8=0$.`, R`$z^3=-8=8_{180^\circ}$: $2_{60^\circ}$, $2_{180^\circ}$, $2_{300^\circ}$, es decir, $1+\sqrt3i$, $-2$ y $1-\sqrt3i$.`),
        P('Fórmulas del ángulo doble', R`Usa la fórmula de Moivre con $n=2$ para obtener $\cos2\alpha$ y $\sin2\alpha$.`, R`$(\cos\alpha+i\sin\alpha)^2=\cos^2\alpha-\sin^2\alpha+2i\sin\alpha\cos\alpha=\cos2\alpha+i\sin2\alpha$.`)
      ],
      exams: [
        [
          Q(3.5, R`a) (1,5 p) Simplifica $\sqrt{12}+\sqrt{27}-\sqrt{48}$. <br>b) (2 p) Racionaliza $\dfrac{6}{\sqrt3}$ y $\dfrac{2}{\sqrt5-\sqrt3}$.`, R`a) $2\sqrt3+3\sqrt3-4\sqrt3=\sqrt3$. <br>b) $2\sqrt3$; $\ \sqrt5+\sqrt3$.`),
          Q(3.5, R`Pasa $z=1+\sqrt3\,i$ a forma polar y calcula $z^6$.`, R`$z=2_{60^\circ}$. $z^6=64_{360^\circ}=64$.`),
          Q(3, R`Resuelve: a) $2^{x+1}+2^x=24$ &nbsp; b) $\log x+\log(x-3)=1$`, R`a) $3\cdot2^x=24\Rightarrow x=3$. <br>b) $x(x-3)=10\Rightarrow x=5$ ($x=-2$ no vale).`)
        ],
        [
          Q(3.5, R`a) Expresa como intervalos $|x-3|<2$ y $|2x+1|\ge3$. b) Simplifica $\dfrac{9^2\cdot27^{-1}\cdot3^5}{81\cdot3^{-2}}$.`, R`a) $(1,5)$; $(-\infty,-2]\cup[1,\infty)$. <br>b) $3^4=81$.`),
          Q(3.5, R`Halla las raíces cúbicas de $-8$ en forma binómica.`, R`$2_{60^\circ},\,2_{180^\circ},\,2_{300^\circ}$: $1+\sqrt3i$, $-2$ y $1-\sqrt3i$.`),
          Q(3, R`Resuelve $9^x-4\cdot3^x+3=0$ y $\log_2(x+1)+\log_2(x-1)=3$.`, R`$x=0$ y $x=1$. $\ x^2-1=8\Rightarrow x=3$.`)
        ],
        [
          Q(3.5, R`Calcula: a) $(2+3i)(1-i)$ &nbsp; b) $\dfrac{3+4i}{1+2i}$ &nbsp; c) $i^{27}$`, R`a) $5+i$. b) $\dfrac{11-2i}{5}$. c) $-i$.`),
          Q(3.5, R`Con $\log2\approx0{,}301$ y $\log3\approx0{,}477$, calcula $\log12$, $\log1{,}5$ y $\log\sqrt8$. Agrupa en un solo logaritmo $2\log x-3\log y+\log z$.`, R`$1{,}079$; $0{,}176$; $0{,}4515$. $\ \log\dfrac{x^2z}{y^3}$.`),
          Q(3, R`Halla $m$ para que $\dfrac{m+2i}{1-i}$ sea imaginario puro.`, R`$\dfrac{(m-2)+(m+2)i}{2}$: $m=2$ (queda $2i$).`)
        ]
      ] },

    /* ------------------------------------------------------------------ 2 */
    { n: 'T2', name: 'Álgebra', desc: 'Polinomios, Ruffini, factorización, fracciones algebraicas, ecuaciones, inecuaciones, Gauss y sistemas no lineales.',
      mv: MV + 'BC1_02_ALGEBRA.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%202%20%C3%81lgebra.pdf',
      tool: 'ruffini',
      theory: X.TH.algebra,
      practice: X.PR.algebra,
      exams: [
        [
          Q(3.5, R`Resuelve: a) $x^4-5x^2+4=0$ &nbsp; b) $\sqrt{x+7}=x-5$`, R`a) $x=\pm1,\pm2$. <br>b) $x^2-11x+18=0\Rightarrow x=9,\ x=2$. Comprobando, solo vale $x=9$.`),
          Q(3.5, R`Resuelve: a) $x^2-x-6\le0$ &nbsp; b) $\dfrac{x-1}{x+2}>0$`, R`a) $[-2,3]$. <br>b) $(-\infty,-2)\cup(1,\infty)$.`),
          Q(3, R`Resuelve $\begin{cases}x+y=7\\xy=12\end{cases}$`, R`$(3,4)$ y $(4,3)$.`)
        ],
        [
          Q(3.5, R`Factoriza $P(x)=x^3-2x^2-5x+6$ y simplifica $\dfrac{P(x)}{x^2-1}$.`, R`$P(x)=(x-1)(x-3)(x+2)$. $\ \dfrac{(x-1)(x-3)(x+2)}{(x-1)(x+1)}=\dfrac{(x-3)(x+2)}{x+1}$.`),
          Q(3.5, R`Resuelve por Gauss: $\begin{cases}x+y+z=6\\2x-y+z=3\\x+2y-z=2\end{cases}$`, R`$-3y-z=-9$ y $y-2z=-4$: $y=2$, $z=3$, $x=1$.`),
          Q(3, R`3 cuadernos y 2 bolígrafos cuestan 9 €; 2 cuadernos y 5 bolígrafos, 8,75 €. ¿Cuánto cuesta cada cosa?`, R`$b=0{,}75$ €, $c=2{,}50$ €.`)
        ],
        [
          Q(3.5, R`a) Simplifica $\dfrac{x^2-4}{x^2+4x+4}$. b) Opera $\dfrac{2}{x}+\dfrac{3}{x+1}$. c) Halla $m$ para que $x^3-mx^2+5x-2$ dé resto 4 al dividir entre $x-2$.`, R`a) $\dfrac{x-2}{x+2}$. b) $\dfrac{5x+2}{x^2+x}$. c) $m=3$.`),
          Q(3.5, R`Resuelve $\begin{cases}2x-1>3\\x^2-9<0\end{cases}$ y $\dfrac{2x}{x+4}\ge1$.`, R`$(2,3)$. $\ (-\infty,-4)\cup[4,\infty)$.`),
          Q(3, R`Resuelve $\dfrac2x+\dfrac{3}{x+1}=2$ y $\sqrt{3x+1}-\sqrt{x-1}=2$.`, R`$x=2$, $x=-\frac12$. $\ x=1$, $x=5$.`)
        ]
      ] },

    /* ------------------------------------------------------------------ 3 */
    { n: 'T3', name: 'Sucesiones', desc: 'Formas de definir, progresiones aritméticas y geométricas, monotonía, límites, el número e y aplicaciones.',
      mv: MV + 'BC1_03_Sucesiones.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%203%20Sucesiones.pdf',
      tool: 'progresiones',
      theory: [
        H('Qué es una sucesión', R`Una <b>sucesión</b> es una lista ordenada e infinita de números reales $a_1,a_2,a_3,\dots,a_n,\dots$ Cada número es un <b>término</b> y $a_n$ es el <b>término general</b> (el que ocupa el lugar $n$). Formalmente es una función que a cada natural $n\ge1$ le asigna $a_n$.`),
        H('Formas de definir una sucesión', R`<ul><li>Con el <b>término general</b>: $a_n=\dfrac{(-1)^n}{n}$ da $-1,\frac12,-\frac13,\frac14,\dots$</li>
          <li>De forma <b>recurrente</b>, a partir de los anteriores: $a_1=2$, $a_{n+1}=3a_n-1$ da $2,5,14,41,\dots$ La de <b>Fibonacci</b> es $1,1,2,3,5,8,\dots$ con $a_n=a_{n-1}+a_{n-2}$.</li>
          <li>Con un <b>enunciado</b>: "la sucesión de los números primos" $2,3,5,7,11,\dots$ (no tiene fórmula sencilla).</li></ul>
          Para encontrar el término general, busca qué cambia de un término al siguiente: si se suma algo fijo, si se multiplica, si son cuadrados ($n^2$), si alterna el signo ($(-1)^n$)…`),
        H('Progresiones aritméticas', R`Cada término se obtiene <b>sumando</b> al anterior un número fijo $d$, la <b>diferencia</b>.
          <div class="ej">$a_n=a_1+(n-1)d\qquad a_n=a_k+(n-k)d\qquad S_n=\dfrac{(a_1+a_n)\,n}{2}$</div>
          La fórmula de la suma se basa en que los términos equidistantes de los extremos suman lo mismo: $a_1+a_n=a_2+a_{n-1}=\dots$ (el truco con el que Gauss, de niño, sumó del 1 al 100 en segundos: $\frac{101\cdot100}{2}=5050$).
          <div class="ej"><b>Ejemplo resuelto.</b> Si $a_3=10$ y $a_8=25$: $5d=15\Rightarrow d=3$, $a_1=4$, $a_{20}=4+19\cdot3=61$ y $S_{20}=\frac{(4+61)\cdot20}2=650$.</div>
          <b>Interpolar</b> $k$ medios aritméticos entre $a$ y $b$ es construir una progresión de $k+2$ términos de $a$ a $b$: $d=\dfrac{b-a}{k+1}$. Entre 3 y 23, con 4 medios, $d=4$: $3,7,11,15,19,23$.`),
        H('Progresiones geométricas', R`Cada término se obtiene <b>multiplicando</b> el anterior por un número fijo $r$, la <b>razón</b>.
          <div class="ej">$a_n=a_1\,r^{\,n-1}\qquad a_n=a_k\,r^{\,n-k}\qquad S_n=\dfrac{a_1(r^n-1)}{r-1}=\dfrac{a_n r-a_1}{r-1}\qquad P_n=\sqrt{(a_1a_n)^n}$</div>
          ($P_n$ es el producto de los $n$ primeros términos).
          <div class="ej"><b>Ejemplo resuelto.</b> Si $a_2=6$ y $a_5=162$: $r^3=27\Rightarrow r=3$, $a_1=2$. $S_6=\frac{2(3^6-1)}{2}=728$.</div>
          <b>Interpolar</b> $k$ medios geométricos entre $a$ y $b$: $r=\sqrt[k+1]{\frac ba}$. Entre 2 y 162 con 3 medios: $r^4=81$, $r=\pm3$: $2,6,18,54,162$ (o $2,-6,18,-54,162$).`),
        H('Suma de infinitos términos', R`Si $|r|<1$, los términos se hacen cada vez más pequeños y la suma de todos es un número finito:
          <div class="ej">$S_\infty=\dfrac{a_1}{1-r}$</div>
          <b>Paradoja de Aquiles y la tortuga</b>: Aquiles corre 10 veces más rápido y da 100 m de ventaja. Cuando llega donde estaba la tortuga, esta ha avanzado 10 m; cuando recorre esos 10, ella ha avanzado 1… Pero $100+10+1+\dots=\frac{100}{1-0{,}1}=111{,}\overline1$ m: la alcanza ahí.
          <p>Los decimales periódicos son sumas infinitas: $0{,}\overline{12}=\frac{12}{100}+\frac{12}{10\,000}+\dots=\frac{0{,}12}{1-0{,}01}=\frac{12}{99}=\frac4{33}$.</p>`),
        H('Aplicaciones de las progresiones geométricas', R`Muchas cosas crecen o decrecen un <b>porcentaje fijo</b> en cada periodo, y eso es una progresión geométrica:
          <ul><li><b>Interés compuesto</b>: $C_n=C_0(1+r)^n$.</li>
          <li><b>Poblaciones</b> que crecen un $p\,\%$ anual: $P_n=P_0\left(1+\frac p{100}\right)^n$.</li>
          <li><b>Desintegración radiactiva</b> o depreciación de un coche (pierden un % cada año): razón menor que 1.</li></ul>
          <div class="ej"><b>Ejemplo resuelto.</b> Una sustancia pierde el 10 % cada año. A los 5 años queda $0{,}9^5\approx0{,}59$, el 59 %. Se queda en la mitad cuando $0{,}9^n=0{,}5$: $n=\frac{\log0{,}5}{\log0{,}9}\approx6{,}6$ años.</div>`),
        H('Monotonía y acotación', R`Una sucesión es <b>creciente</b> si $a_{n+1}\ge a_n$ para todo $n$, y <b>decreciente</b> si $a_{n+1}\le a_n$. Para estudiarlo se mira el <b>signo de $a_{n+1}-a_n$</b>.
          <p>Está <b>acotada superiormente</b> si hay un número $K$ con $a_n\le K$ para todo $n$ (una <b>cota superior</b>; la menor es el <b>supremo</b>), e <b>inferiormente</b> si hay $k$ con $a_n\ge k$ (la mayor es el <b>ínfimo</b>).</p>
          <div class="ej"><b>Ejemplo resuelto.</b> $a_n=\dfrac{2n+1}{n+1}$: $a_{n+1}-a_n=\dfrac{1}{(n+1)(n+2)}>0$, creciente. Empieza en $a_1=\frac32$ y se acerca a 2 sin llegar: $\frac32\le a_n<2$.</div>
          <b>Propiedad importante</b>: toda sucesión monótona y acotada es convergente.`),
        H('Límite de una sucesión', R`La sucesión es <b>convergente</b> si sus términos se acercan tanto como queramos a un número $L$: $\lim a_n=L$. Es decir, para cualquier distancia $\varepsilon>0$, a partir de cierto término todos están a menos de $\varepsilon$ de $L$.
          <ul><li>Convergente: $\frac1n\to0$, $\ \frac{2n+1}{n+1}\to2$.</li>
          <li><b>Divergente</b>: sus términos crecen (o decrecen) sin límite: $n^2\to+\infty$, $\ -2^n\to-\infty$.</li>
          <li><b>Oscilante</b>: ni una cosa ni otra: $(-1)^n$ salta entre $-1$ y $1$.</li></ul>`),
        H('Cálculo de límites de sucesiones', R`<div class="tbl"><table>
          <tr><th>Situación</th><th>Qué hacer</th><th>Ejemplo</th></tr>
          <tr><td>Polinomio</td><td>manda el término de mayor grado</td><td>$\lim(n^3-5n^2)=+\infty$</td></tr>
          <tr><td>$\frac\infty\infty$ (cociente de polinomios)</td><td>comparar grados: mayor arriba $\to\pm\infty$; mayor abajo $\to0$; iguales $\to$ cociente de coeficientes principales</td><td>$\lim\dfrac{3n^2-n}{n^2+1}=3$</td></tr>
          <tr><td>$\infty-\infty$ con raíces</td><td>multiplicar y dividir por el conjugado</td><td>$\lim(\sqrt{n^2+3n}-n)=\frac32$</td></tr>
          <tr><td>$1^\infty$</td><td>$\lim a_n^{\,b_n}=e^{\lim b_n(a_n-1)}$</td><td>$\lim\left(\dfrac{n^2+1}{n^2-1}\right)^{n^2}=e^2$</td></tr></table></div>
          Reglas con infinito: $\infty+\infty=\infty$, $k\cdot\infty=\infty$ si $k\neq0$, $\frac k\infty=0$. Son indeterminaciones $\frac\infty\infty$, $\infty-\infty$, $0\cdot\infty$ y $1^\infty$.`),
        H('El número e', R`Observa qué pasa con $\left(1+\frac1n\right)^n$:
          <div class="tbl"><table><tr><th>$n$</th><td>1</td><td>10</td><td>100</td><td>1000</td><td>1 000 000</td></tr>
          <tr><th>$\left(1+\frac1n\right)^n$</th><td>2</td><td>2,5937</td><td>2,7048</td><td>2,7169</td><td>2,71828</td></tr></table></div>
          Es creciente y acotada, así que converge. Su límite es el <b>número e</b> $=2{,}718281828\ldots$, un irracional. En general:
          <div class="ej">$\lim\left(1+\dfrac kn\right)^n=e^k\qquad\lim\left(1+\dfrac1{a_n}\right)^{a_n}=e\ \text{ si } a_n\to\infty$</div>
          Si un banco capitalizara los intereses en cada instante (<b>capitalización continua</b>), el capital sería $C=C_0e^{rt}$.`),
        H('Funciones exponencial y logarítmica', R`$y=a^x$ ($a>0$, $a\neq1$): dominio $\mathbb R$, siempre positiva, pasa por $(0,1)$, asíntota horizontal $y=0$; crece si $a>1$ y decrece si $0<a<1$. Su inversa es $y=\log_ax$: dominio $(0,\infty)$, pasa por $(1,0)$, asíntota vertical $x=0$. Las dos gráficas son simétricas respecto de $y=x$. Las más usadas son $e^x$ y $\ln x$.`)
      ],
      practice: [
        G('Términos y formas de definir'),
        P('Término general', R`Halla el término general de: a) 3, 7, 11, 15… b) 2, 6, 18, 54… c) $1,\frac12,\frac13,\dots$ d) 1, 4, 9, 16… e) $-1,\frac12,-\frac13,\frac14,\dots$`, R`a) $4n-1$ b) $2\cdot3^{n-1}$ c) $\frac1n$ d) $n^2$ e) $\frac{(-1)^n}n$`),
        P('Recurrente', R`Escribe los 4 primeros términos de $a_1=2$, $a_{n+1}=3a_n-1$, y los 8 primeros de Fibonacci.`, R`$2,5,14,41$. Fibonacci: $1,1,2,3,5,8,13,21$.`),
        G('Progresiones aritméticas'),
        P('Término y suma', R`Con $a_1=5$ y $d=3$, calcula $a_{20}$ y $S_{20}$.`, R`$a_{20}=62$; $S_{20}=670$.`),
        P('Con dos términos', R`En una progresión aritmética $a_3=10$ y $a_8=25$. Halla $d$, $a_1$ y $S_{20}$.`, R`$d=3$, $a_1=4$, $a_{20}=61$, $S_{20}=650$.`),
        P('Interpolación aritmética', R`Interpola 4 medios aritméticos entre 3 y 23.`, R`$d=\frac{20}5=4$: $3,\ 7,\ 11,\ 15,\ 19,\ 23$.`),
        P('Impares', R`Suma los 50 primeros números impares. ¿Cuántos impares consecutivos, desde el 1, suman 400?`, R`$2500$. La suma de los $n$ primeros impares es $n^2$: $n=20$.`),
        G('Progresiones geométricas'),
        P('Término y suma', R`Con $a_1=3$ y $r=2$, calcula $a_6$ y $S_6$.`, R`$a_6=96$; $S_6=189$.`),
        P('Interpolación geométrica', R`Interpola 3 medios geométricos entre 2 y 162.`, R`$r^4=81\Rightarrow r=\pm3$: $2,6,18,54,162$ o $2,-6,18,-54,162$.`),
        P('Producto de términos', R`Calcula el producto de los 5 primeros términos de la progresión $1,2,4,\dots$`, R`$P_5=\sqrt{(1\cdot16)^5}=4^5=1024$ (y en efecto, $1\cdot2\cdot4\cdot8\cdot16=1024$).`),
        P('Sumas infinitas', R`a) $8+4+2+1+\dots$ b) Escribe $0{,}\overline{12}$ como fracción usando una suma infinita.`, R`a) $\frac8{1-1/2}=16$. b) $\frac{0{,}12}{1-0{,}01}=\frac{12}{99}=\frac4{33}$.`),
        P('Pelota que bota', R`Una pelota cae desde 10 m y en cada bote sube la mitad. ¿Qué distancia total recorre?`, R`$10+2\cdot\frac{5}{1-\frac12}=10+20=30$ m.`),
        G('Monotonía, límites y número e'),
        P('Monotonía', R`Estudia la monotonía y las cotas de a) $a_n=\frac{2n+1}{n+1}$ b) $b_n=n^2-6n$.`, R`a) Creciente; $\frac32\le a_n<2$. <br>b) $b_{n+1}-b_n=2n-5$: decrece hasta $n=3$ y luego crece; no es monótona. Mínimo $b_3=-9$; acotada inferiormente.`),
        P('Límites', R`a) $\lim\frac{3n^2-n}{n^2+1}$ b) $\lim\frac{n^3-2n}{5n^2+1}$ c) $\lim(\sqrt{n^2+3n}-n)$ d) $\lim\left(1+\frac2n\right)^n$ e) $\lim\left(1-\frac1n\right)^n$ f) $\lim\left(\frac{n^2+1}{n^2-1}\right)^{n^2}$`, R`a) 3 b) $+\infty$ c) $\frac32$ d) $e^2$ e) $e^{-1}$ f) $e^{\lim n^2\cdot\frac{2}{n^2-1}}=e^2$`),
        G('Aplicaciones'),
        P('Interés compuesto', R`1000 € al 4 % anual compuesto. ¿Cuánto hay a los 5 años?`, R`$1000\cdot1{,}04^5\approx1216{,}65$ €.`),
        P('Bacterias', R`Una colonia de 100 bacterias se duplica cada hora. ¿Cuántas hay a las 10 horas? ¿Cuándo superan el millón?`, R`$102\,400$. Como $2^{13}=8192<10\,000<2^{14}$, a las 14 horas.`),
        P('Desintegración', R`Una sustancia pierde el 10 % cada año. ¿Qué porcentaje queda a los 5 años? ¿Cuándo queda la mitad?`, R`$0{,}9^5\approx59\,\%$. $\ n=\frac{\log0{,}5}{\log0{,}9}\approx6{,}6$ años.`)
      ],
      exams: [
        [
          Q(3.5, R`Un anfiteatro tiene 20 filas. La primera tiene 15 asientos y cada fila tiene 3 más que la anterior. ¿Cuántos asientos hay en la última fila? ¿Y en total?`, R`$a_{20}=15+19\cdot3=72$. Total $S_{20}=\frac{(15+72)\cdot20}2=870$.`),
          Q(3.5, R`En una progresión geométrica $a_2=6$ y $a_5=162$. Halla la razón, $a_1$ y la suma de los 6 primeros términos.`, R`$r=3$, $a_1=2$, $S_6=728$.`),
          Q(3, R`Calcula: a) $\lim\dfrac{2n^3+1}{4n^3-n}$ b) $\lim\left(\sqrt{n^2+n}-n\right)$ c) $\lim\left(\dfrac{n+3}{n}\right)^n$`, R`a) $\frac12$ b) $\frac12$ c) $e^3$`)
        ],
        [
          Q(3.5, R`Estudia la monotonía, las cotas y el límite de $a_n=\dfrac{n+3}{2n}$.`, R`$a_{n+1}-a_n=\dfrac{-3}{2n(n+1)}<0$: decreciente. Cota superior $a_1=2$; tiende a $\frac12$ (cota inferior).`),
          Q(3.5, R`Una pelota cae desde 10 m y en cada bote sube la mitad de la altura anterior. ¿Qué distancia total recorre? Interpola además 3 medios geométricos entre 2 y 162.`, R`30 m. $\ r=\pm3$: $2,6,18,54,162$.`),
          Q(3, R`Ingresamos 5000 € al 3 % anual compuesto. ¿Cuántos años completos tardan en superar los 6000 €?`, R`$n>\frac{\ln1{,}2}{\ln1{,}03}\approx6{,}17$: 7 años.`)
        ],
        [
          Q(3.5, R`a) Suma los 50 primeros números impares. b) Interpola 4 medios aritméticos entre 3 y 23.`, R`a) 2500. b) $3,7,11,15,19,23$.`),
          Q(3.5, R`Tres números en progresión aritmética suman 15 y su producto es 105. Hállalos.`, R`$a=5$, $d=\pm2$: 3, 5 y 7.`),
          Q(3, R`Calcula: a) $\lim\left(1+\dfrac1{2n}\right)^{n}$ b) $\lim\left(\dfrac{2n+1}{2n-1}\right)^{n}$ c) $\lim\dfrac{n^2+1}{n^3}$`, R`a) $\sqrt e$ b) $e$ c) 0`)
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
    { n: 'T6', name: 'Funciones', desc: 'Tipos de funciones, a trozos, interpolación, composición, inversa, dominio, recorrido, simetrías y signo.',
      mv: MV + 'BC1_06_Funciones.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%206%20Funciones.pdf',
      tool: 'familias',
      theory: X.TH.funciones,
      practice: X.PR.funciones,
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
