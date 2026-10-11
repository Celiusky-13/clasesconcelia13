/* ClasesConCelia13 · 1º Bachillerato: bloques comunes a Ciencias (Matemáticas I) y Sociales (MACS I).
   Teoría y ejercicios redactados para esta web siguiendo el índice de los libros de Marea Verde. */
(() => {
  'use strict';
  const R = String.raw;
  const H = (h, b) => ({ h, b });
  const P = (t, e, s) => ({ t, e, s });
  const G = grp => ({ grp });

  /* =============================== TEORÍA =============================== */
  const TH = {};

  TH.reales = [
    H('Los conjuntos numéricos', R`<div class="tbl"><table>
      <tr><th>Conjunto</th><th>Qué contiene</th><th>Ejemplos</th></tr>
      <tr><td>Naturales $\mathbb N$</td><td>$0,1,2,3,\dots$</td><td>$7$, $\sqrt{25}=5$</td></tr>
      <tr><td>Enteros $\mathbb Z$</td><td>naturales y sus opuestos</td><td>$-3$, $-\sqrt9$</td></tr>
      <tr><td>Racionales $\mathbb Q$</td><td>los que se pueden escribir como fracción $\frac ab$ ($b\neq0$)</td><td>$\frac34$, $0{,}25$, $1{,}\overline3$</td></tr>
      <tr><td>Irracionales $\mathbb I$</td><td>decimales infinitos no periódicos</td><td>$\sqrt2$, $\pi$, $e$, $1{,}010010001\ldots$</td></tr>
      <tr><td>Reales $\mathbb R$</td><td>racionales e irracionales juntos</td><td>todos los anteriores</td></tr></table></div>
      Se cumple $\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R$ y $\mathbb I=\mathbb R-\mathbb Q$.
      <p><b>¿Exacto o periódico?</b> Simplifica la fracción y mira el denominador: si sus únicos factores primos son 2 y 5, el decimal es <b>exacto</b> ($\frac7{40}=0{,}175$); si tiene algún otro factor, es <b>periódico</b> ($\frac5{12}=0{,}41\overline6$).</p>
      <p>La raíz de un natural que no es cuadrado perfecto ($\sqrt2,\sqrt3,\sqrt5\ldots$) es siempre irracional.</p>`),
    H('Fracción generatriz', R`Todo decimal exacto o periódico es una fracción:
      <div class="tbl"><table>
      <tr><th>Tipo</th><th>Regla</th><th>Ejemplo</th></tr>
      <tr><td>Exacto</td><td>el número sin coma partido por la unidad seguida de tantos ceros como decimales</td><td>$0{,}125=\dfrac{125}{1000}=\dfrac18$</td></tr>
      <tr><td>Periódico puro</td><td>(número sin coma $-$ parte entera) entre tantos 9 como cifras tiene el periodo</td><td>$2{,}\overline3=\dfrac{23-2}{9}=\dfrac73$</td></tr>
      <tr><td>Periódico mixto</td><td>(número sin coma $-$ lo que hay antes del periodo) entre tantos 9 como cifras del periodo y tantos 0 como cifras del anteperiodo</td><td>$1{,}2\overline{45}=\dfrac{1245-12}{990}=\dfrac{137}{110}$</td></tr></table></div>
      Curiosidad: $0{,}\overline9=\dfrac99=1$. ¡Son el mismo número!`),
    H('La recta real y las desigualdades', R`Cada número real es un punto de la recta y cada punto es un número real: la recta "no tiene huecos". Los números se ordenan: $a<b$ si $a$ está a la izquierda de $b$.
      <p><b>Propiedades de las desigualdades</b> (con $a<b$):</p>
      <ul><li>Sumar o restar el mismo número la mantiene: $a+c<b+c$.</li>
      <li>Multiplicar o dividir por un <b>positivo</b> la mantiene: $3a<3b$.</li>
      <li>Multiplicar o dividir por un <b>negativo</b> le da la vuelta: $-2a>-2b$.</li>
      <li>Si $0<a<b$, al hacer el inverso también se da la vuelta: $\frac1a>\frac1b$.</li></ul>`),
    H('Valor absoluto y distancia', R`$|x|=\begin{cases}x & \text{si } x\ge0\\-x & \text{si } x<0\end{cases}$ &nbsp; Es la distancia de $x$ al cero, por eso nunca es negativo.
      <p><b>Propiedades:</b> $|x|\ge0$ y $|x|=0\iff x=0$; $\ |-x|=|x|$; $\ |xy|=|x||y|$; $\ \left|\frac xy\right|=\frac{|x|}{|y|}$; $\ |x+y|\le|x|+|y|$ (desigualdad triangular); $\ \sqrt{x^2}=|x|$.</p>
      <p>La <b>distancia</b> entre dos números es $d(a,b)=|b-a|$. Por ejemplo, $d(-3,5)=|5-(-3)|=8$.</p>
      <div class="tbl"><table>
      <tr><th>Ecuación o inecuación</th><th>Equivale a</th></tr>
      <tr><td>$|x|=k$ (con $k\ge0$)</td><td>$x=k$ o $x=-k$</td></tr>
      <tr><td>$|x-a|<r$</td><td>$a-r<x<a+r$ (los puntos a menos de $r$ de $a$)</td></tr>
      <tr><td>$|x-a|>r$</td><td>$x<a-r$ o $x>a+r$</td></tr></table></div>`),
    H('Intervalos y entornos', R`<div class="tbl"><table>
      <tr><th>Notación</th><th>Desigualdad</th><th>Nombre</th></tr>
      <tr><td>$(a,b)$</td><td>$a<x<b$</td><td>intervalo abierto</td></tr>
      <tr><td>$[a,b]$</td><td>$a\le x\le b$</td><td>intervalo cerrado</td></tr>
      <tr><td>$[a,b)$ y $(a,b]$</td><td>$a\le x<b$ y $a<x\le b$</td><td>semiabiertos</td></tr>
      <tr><td>$(a,+\infty)$ y $[a,+\infty)$</td><td>$x>a$ y $x\ge a$</td><td>semirrectas</td></tr>
      <tr><td>$(-\infty,b)$ y $(-\infty,b]$</td><td>$x<b$ y $x\le b$</td><td>semirrectas</td></tr></table></div>
      El infinito nunca se incluye: siempre lleva paréntesis. <br>
      <b>Entorno</b> de centro $a$ y radio $r$: $E(a,r)=(a-r,\,a+r)=\{x:|x-a|<r\}$. El <b>entorno reducido</b> $E^*(a,r)$ es lo mismo quitando el centro.
      <p>Con intervalos se hacen <b>uniones</b> ($\cup$, lo que está en uno u otro) e <b>intersecciones</b> ($\cap$, lo que está en los dos): $[-2,5)\cap(1,8]=(1,5)$.</p>`),
    H('Aproximaciones y errores', R`Para aproximar a $n$ decimales se puede <b>truncar</b> (cortar) o <b>redondear</b> (si la cifra siguiente es 5 o más, se suma 1). $\pi=3{,}14159\ldots$ truncado a centésimas es $3{,}14$ y redondeado a milésimas, $3{,}142$.
      <p>Si $x$ es el valor exacto y $x'$ la aproximación: <b>error absoluto</b> $E_a=|x-x'|$; <b>error relativo</b> $E_r=\dfrac{E_a}{|x|}$, que se suele dar en %. El relativo es el que dice si una aproximación es buena: equivocarse 1 cm al medir una mesa no es lo mismo que al medir una hormiga.</p>
      <p>Al redondear a $n$ decimales, el error absoluto es como mucho $0{,}5\cdot10^{-n}$ (la <b>cota de error</b>).</p>`)
  ];

  TH.potencias = [
    H('Potencias de exponente natural y entero', R`$a^n=a\cdot a\cdots a$ ($n$ veces). Se amplía a exponentes enteros:
      <div class="ej">$a^1=a\qquad a^0=1\ (a\neq0)\qquad a^{-n}=\dfrac1{a^n}\qquad\left(\dfrac ab\right)^{-n}=\left(\dfrac ba\right)^{n}$</div>
      <b>Signo</b>: una base negativa con exponente par da positivo y con exponente impar, negativo: $(-2)^4=16$, $(-2)^3=-8$. ¡Cuidado con los paréntesis! $-2^4=-16$ porque el exponente solo afecta al 2.`),
    H('Propiedades de las potencias', R`<div class="tbl"><table>
      <tr><th>Propiedad</th><th>Fórmula</th><th>Ejemplo</th></tr>
      <tr><td>Producto de igual base</td><td>$a^m\cdot a^n=a^{m+n}$</td><td>$2^3\cdot2^{-5}=2^{-2}$</td></tr>
      <tr><td>Cociente de igual base</td><td>$a^m:a^n=a^{m-n}$</td><td>$5^4:5^6=5^{-2}$</td></tr>
      <tr><td>Potencia de una potencia</td><td>$(a^m)^n=a^{m\cdot n}$</td><td>$(3^2)^4=3^8$</td></tr>
      <tr><td>Potencia de un producto</td><td>$(a\cdot b)^n=a^n\cdot b^n$</td><td>$(2x)^3=8x^3$</td></tr>
      <tr><td>Potencia de un cociente</td><td>$\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$</td><td>$\left(\dfrac23\right)^2=\dfrac49$</td></tr>
      <tr><td>Exponente fraccionario</td><td>$a^{m/n}=\sqrt[n]{a^m}$</td><td>$8^{2/3}=\sqrt[3]{64}=4$</td></tr></table></div>
      <b>Truco</b> para simplificar: descompón todas las bases en factores primos ($4=2^2$, $8=2^3$, $9=3^2$, $6=2\cdot3$…) y aplica las propiedades base por base.
      <div class="ej">$\dfrac{2^3\cdot4^2}{8^2\cdot2^{-1}}=\dfrac{2^3\cdot2^4}{2^6\cdot2^{-1}}=\dfrac{2^7}{2^5}=2^2=4$</div>`),
    H('Errores típicos con potencias', R`<ul><li>$(a+b)^2\neq a^2+b^2$. Lo correcto es $a^2+2ab+b^2$.</li>
      <li>$a^m+a^n$ <b>no</b> se junta en una sola potencia. Pero $2^3+2^3=2\cdot2^3=2^4$.</li>
      <li>$a^m\cdot b^m=(ab)^m$, pero $a^m\cdot a^n\neq a^{mn}$.</li>
      <li>Un exponente negativo <b>no</b> hace negativo el número: $2^{-3}=\frac18>0$.</li></ul>`)
  ];

  TH.radicales = [
    H('Radicales: definición', R`$\sqrt[n]a=b\iff b^n=a$. Se llama $n$ al <b>índice</b> y $a$ al <b>radicando</b>.
      <ul><li>Si el índice es <b>par</b>, el radicando no puede ser negativo (en $\mathbb R$) y hay dos raíces: $\sqrt{9}=\pm3$ (por convenio, $\sqrt9$ indica la positiva).</li>
      <li>Si el índice es <b>impar</b>, hay una única raíz con el mismo signo: $\sqrt[3]{-8}=-2$.</li></ul>
      Un radical es una potencia de exponente fraccionario: $\sqrt[n]{a^m}=a^{m/n}$. Por eso las propiedades de los radicales salen de las de las potencias.`),
    H('Propiedades de los radicales', R`<div class="tbl"><table>
      <tr><th>Propiedad</th><th>Fórmula</th><th>Ejemplo</th></tr>
      <tr><td>Raíz de un producto</td><td>$\sqrt[n]{a\cdot b}=\sqrt[n]a\cdot\sqrt[n]b$</td><td>$\sqrt{12}=\sqrt4\sqrt3=2\sqrt3$</td></tr>
      <tr><td>Raíz de un cociente</td><td>$\sqrt[n]{\dfrac ab}=\dfrac{\sqrt[n]a}{\sqrt[n]b}$</td><td>$\sqrt{\dfrac9{16}}=\dfrac34$</td></tr>
      <tr><td>Potencia de una raíz</td><td>$\left(\sqrt[n]a\right)^m=\sqrt[n]{a^m}$</td><td>$\left(\sqrt[3]2\right)^2=\sqrt[3]4$</td></tr>
      <tr><td>Raíz de una raíz</td><td>$\sqrt[m]{\sqrt[n]a}=\sqrt[m\cdot n]a$</td><td>$\sqrt{\sqrt[3]{64}}=\sqrt[6]{64}=2$</td></tr>
      <tr><td>Simplificar el índice</td><td>$\sqrt[n\cdot p]{a^{m\cdot p}}=\sqrt[n]{a^m}$</td><td>$\sqrt[6]{2^4}=\sqrt[3]{2^2}$</td></tr></table></div>
      ¡Ojo! <b>No existe</b> una propiedad para la suma: $\sqrt{9+16}=5$ pero $\sqrt9+\sqrt{16}=7$. Y $\sqrt{x^2}=|x|$, no $x$.`),
    H('Extraer e introducir factores', R`<b>Extraer</b>: se descompone el radicando y cada grupo de tantos factores iguales como indica el índice sale fuera: $\sqrt{72}=\sqrt{2^2\cdot2\cdot3^2}=2\cdot3\sqrt2=6\sqrt2$, $\ \sqrt[3]{54}=\sqrt[3]{3^3\cdot2}=3\sqrt[3]2$.
      <p><b>Introducir</b>: el factor entra elevado al índice: $3\sqrt2=\sqrt{9\cdot2}=\sqrt{18}$, $\ 2\sqrt[3]5=\sqrt[3]{40}$.</p>`),
    H('Operaciones con radicales', R`<b>Sumar y restar</b>: solo radicales <b>semejantes</b> (mismo índice y radicando). Primero se extraen factores:
      <div class="ej">$3\sqrt{12}-2\sqrt{27}+\sqrt{75}=6\sqrt3-6\sqrt3+5\sqrt3=5\sqrt3$</div>
      <b>Multiplicar y dividir</b>: con el mismo índice se multiplican los radicandos. Si los índices son distintos, se reducen a <b>índice común</b> (el m.c.m. de los índices):
      <div class="ej">$\sqrt2\cdot\sqrt[3]4=\sqrt[6]{2^3}\cdot\sqrt[6]{4^2}=\sqrt[6]{2^3\cdot2^4}=\sqrt[6]{2^7}=2\sqrt[6]2$</div>
      El índice común también sirve para <b>comparar</b> radicales: $\sqrt3=\sqrt[12]{729}$ y $\sqrt[3]5=\sqrt[12]{625}$, así que $\sqrt[3]5<\sqrt3$.`),
    H('Racionalización', R`Racionalizar es quitar las raíces del denominador multiplicando arriba y abajo por lo adecuado:
      <div class="tbl"><table>
      <tr><th>Denominador</th><th>Multiplicamos por</th><th>Ejemplo</th></tr>
      <tr><td>$\sqrt b$</td><td>$\sqrt b$</td><td>$\dfrac5{\sqrt{10}}=\dfrac{5\sqrt{10}}{10}=\dfrac{\sqrt{10}}2$</td></tr>
      <tr><td>$\sqrt[n]{b^m}$</td><td>$\sqrt[n]{b^{n-m}}$</td><td>$\dfrac6{\sqrt[3]3}=\dfrac{6\sqrt[3]{3^2}}{3}=2\sqrt[3]9$</td></tr>
      <tr><td>$\sqrt a\pm\sqrt b$ o $c\pm\sqrt b$</td><td>el <b>conjugado</b> (mismo con el signo cambiado)</td><td>$\dfrac4{\sqrt5-1}=\dfrac{4(\sqrt5+1)}{5-1}=\sqrt5+1$</td></tr></table></div>
      El conjugado funciona porque $(\sqrt a-\sqrt b)(\sqrt a+\sqrt b)=a-b$: desaparecen las raíces.`)
  ];

  TH.notacion = [
    H('Notación científica', R`Un número está en notación científica si se escribe $a\cdot10^n$ con $1\le|a|<10$ y $n$ entero. Sirve para números muy grandes o muy pequeños: $125\,000\,000=1{,}25\cdot10^8$, $\ 0{,}000\,34=3{,}4\cdot10^{-4}$.
      <ul><li><b>Multiplicar</b>: se multiplican los $a$ y se suman los exponentes. $(3{,}2\cdot10^5)(5\cdot10^{-8})=16\cdot10^{-3}=1{,}6\cdot10^{-2}$.</li>
      <li><b>Dividir</b>: se dividen los $a$ y se restan los exponentes.</li>
      <li><b>Sumar o restar</b>: primero se ponen con la misma potencia de 10. $2{,}5\cdot10^7+3\cdot10^6=2{,}5\cdot10^7+0{,}3\cdot10^7=2{,}8\cdot10^7$.</li></ul>
      Al final, se reajusta para que $a$ quede entre 1 y 10. El exponente indica el <b>orden de magnitud</b>.`)
  ];

  TH.logaritmos = [
    H('Definición de logaritmo', R`<div class="ej">$\log_a x=y\iff a^y=x\qquad(a>0,\ a\neq1,\ x>0)$</div>
      El logaritmo responde a la pregunta: <i>¿a qué número hay que elevar la base para obtener $x$?</i> Por ejemplo, $\log_2 8=3$ porque $2^3=8$.
      <p>Solo existen logaritmos de números <b>positivos</b>: $\log_2(-4)$ y $\log 0$ no existen.</p>
      <p><b>Logaritmos especiales</b>: el <b>decimal</b> tiene base 10 y se escribe $\log x$; el <b>neperiano</b> tiene base $e\approx2{,}718$ y se escribe $\ln x$. Son los que trae la calculadora.</p>`),
    H('Consecuencias de la definición', R`<div class="tbl"><table>
      <tr><td>$\log_a1=0$</td><td>porque $a^0=1$</td></tr>
      <tr><td>$\log_aa=1$</td><td>porque $a^1=a$</td></tr>
      <tr><td>$\log_a a^n=n$</td><td>$\log_3 81=\log_3 3^4=4$</td></tr>
      <tr><td>$a^{\log_a x}=x$</td><td>$10^{\log 7}=7$</td></tr></table></div>
      Para calcular un logaritmo "a mano", escribe el número como potencia de la base: $\log_8 4$: como $8=2^3$ y $4=2^2$, $8^{2/3}=4$, así que $\log_84=\frac23$.`),
    H('Propiedades de los logaritmos', R`<div class="tbl"><table>
      <tr><th>Propiedad</th><th>Fórmula</th><th>Ejemplo</th></tr>
      <tr><td>Producto</td><td>$\log_a(x\cdot y)=\log_ax+\log_ay$</td><td>$\log6=\log2+\log3$</td></tr>
      <tr><td>Cociente</td><td>$\log_a\dfrac xy=\log_ax-\log_ay$</td><td>$\log5=\log10-\log2=1-\log2$</td></tr>
      <tr><td>Potencia</td><td>$\log_a x^n=n\log_ax$</td><td>$\log8=3\log2$</td></tr>
      <tr><td>Raíz</td><td>$\log_a\sqrt[n]x=\dfrac1n\log_ax$</td><td>$\log\sqrt[3]{12}=\frac13\log12$</td></tr>
      <tr><td>Cambio de base</td><td>$\log_ax=\dfrac{\log_bx}{\log_ba}=\dfrac{\ln x}{\ln a}$</td><td>$\log_27=\dfrac{\ln7}{\ln2}\approx2{,}807$</td></tr>
      <tr><td>Inversa</td><td>$\log_ab=\dfrac1{\log_ba}$</td><td>$\log_2 10=\dfrac1{\log2}$</td></tr></table></div>
      <b>¿Por qué funciona la del producto?</b> Si $\log_ax=p$ y $\log_ay=q$, entonces $x=a^p$, $y=a^q$ y $xy=a^{p+q}$, es decir, $\log_a(xy)=p+q$. Los logaritmos convierten productos en sumas: así calculaban antes de existir las calculadoras.`),
    H('Desarrollar y agrupar logaritmos', R`<b>Desarrollar</b> es aplicar las propiedades para separar:
      <div class="ej">$\log\dfrac{a^3\,b}{\sqrt c}=3\log a+\log b-\dfrac12\log c$</div>
      <b>Agrupar</b> es lo contrario, escribir todo como un solo logaritmo:
      <div class="ej">$2\log x-3\log y+\log z=\log\dfrac{x^2z}{y^3}$</div>
      Los números sueltos se convierten en logaritmos: $1=\log10$, $2=\log100$, $1=\ln e$.`),
    H('Errores típicos con logaritmos', R`<ul><li>$\log(x+y)\neq\log x+\log y$. El logaritmo de una suma <b>no</b> se separa.</li>
      <li>$\log x\cdot\log y\neq\log(xy)$.</li>
      <li>$(\log x)^2\neq\log x^2=2\log x$.</li>
      <li>$\dfrac{\log x}{\log y}\neq\log\dfrac xy$.</li></ul>`),
    H('Ecuaciones exponenciales', R`La incógnita está en el exponente. Tres métodos:
      <ol><li><b>Igualar bases</b>: $4^x=8\Rightarrow2^{2x}=2^3\Rightarrow x=\frac32$.</li>
      <li><b>Cambio de variable</b> cuando aparecen $a^x$ y $a^{2x}$: $4^x-6\cdot2^x+8=0$; con $t=2^x$, $t^2-6t+8=0\Rightarrow t=2,4\Rightarrow x=1,2$. También sirve para $2^{x+1}+2^{x-1}=20$: sacando $2^x$ factor común, $2^x\left(2+\frac12\right)=20\Rightarrow2^x=8\Rightarrow x=3$.</li>
      <li><b>Tomar logaritmos</b> si no se pueden igualar bases: $3^x=20\Rightarrow x\log3=\log20\Rightarrow x=\dfrac{\log20}{\log3}\approx2{,}727$.</li></ol>`),
    H('Ecuaciones y sistemas logarítmicos', R`Se agrupan los logaritmos de cada lado hasta llegar a $\log A=\log B$, y entonces $A=B$. Al final hay que <b>comprobar</b> que las soluciones no dan logaritmos de negativos ni de cero.
      <div class="ej">$\log(x+3)+\log(x-3)=\log16\Rightarrow(x+3)(x-3)=16\Rightarrow x^2=25\Rightarrow x=\pm5$. Solo vale $x=5$.</div>
      Si queda $\log_aA=k$, se usa la definición: $\log_3(2x+1)=2\Rightarrow2x+1=3^2\Rightarrow x=4$.
      <p><b>Sistemas</b>: se transforman con las propiedades en un sistema algebraico. $\log x+\log y=3,\ x-y=90$ da $xy=1000,\ x=y+90$, y de ahí $(x,y)=(100,10)$.</p>`)
  ];

  TH.algebra = [
    H('Polinomios: conceptos', R`Un polinomio es una suma de monomios: $P(x)=a_nx^n+a_{n-1}x^{n-1}+\dots+a_1x+a_0$. El <b>grado</b> es el mayor exponente; $a_n$ es el <b>coeficiente principal</b> y $a_0$ el <b>término independiente</b>. El <b>valor numérico</b> $P(a)$ es el resultado de sustituir $x$ por $a$.
      <div class="ej">$P(x)=2x^3-x+5$: grado 3, coeficiente principal 2, $P(-2)=-16+2+5=-9$.</div>`),
    H('Operaciones e identidades notables', R`Sumar: se suman los términos semejantes. Multiplicar: cada término de uno por cada término del otro.
      <div class="tbl"><table>
      <tr><td>Cuadrado de una suma</td><td>$(a+b)^2=a^2+2ab+b^2$</td></tr>
      <tr><td>Cuadrado de una diferencia</td><td>$(a-b)^2=a^2-2ab+b^2$</td></tr>
      <tr><td>Suma por diferencia</td><td>$(a+b)(a-b)=a^2-b^2$</td></tr>
      <tr><td>Cubo de una suma</td><td>$(a+b)^3=a^3+3a^2b+3ab^2+b^3$</td></tr>
      <tr><td>Cubo de una diferencia</td><td>$(a-b)^3=a^3-3a^2b+3ab^2-b^3$</td></tr></table></div>
      Leídas al revés, sirven para <b>factorizar</b>: $9x^2-25=(3x-5)(3x+5)$, $\ x^2+10x+25=(x+5)^2$.`),
    H('División de polinomios', R`Se divide como con números: dividendo $=$ divisor $\cdot$ cociente $+$ resto, y el grado del resto es menor que el del divisor.
      <div class="ej">$(2x^3-3x^2+4x-1):(x^2-x+1)$ da cociente $2x-1$ y resto $x$. <br>Comprobación: $(2x-1)(x^2-x+1)+x=2x^3-3x^2+4x-1$ ✓</div>
      Si el divisor es de la forma $x-a$, es mucho más rápido usar <b>Ruffini</b> (pruébalo en la herramienta de este tema). Si falta algún grado en el dividendo, se pone un 0 en su lugar.`),
    H('Teorema del resto y del factor', R`<b>Teorema del resto</b>: el resto de dividir $P(x)$ entre $x-a$ es $P(a)$. <br><b>Teorema del factor</b>: $P(a)=0\iff(x-a)$ es un factor de $P(x)$. En ese caso, $a$ es una <b>raíz</b>.
      <div class="ej">¿Qué $m$ hace que $x^3-mx^2+5x-2$ dé resto 4 al dividir entre $x-2$? $\ P(2)=8-4m+10-2=4\Rightarrow m=3$.</div>`),
    H('Raíces y factorización', R`Un polinomio de grado $n$ tiene como mucho $n$ raíces reales. Si los coeficientes son enteros, las raíces enteras son <b>divisores del término independiente</b>, y las racionales $\frac pq$ cumplen que $p$ divide al término independiente y $q$ al coeficiente principal.
      <p><b>Cómo factorizar</b>, por este orden:</p>
      <ol><li>Sacar factor común: $x^3-4x=x(x^2-4)$.</li>
      <li>Identidades notables: $x^2-4=(x-2)(x+2)$.</li>
      <li>Ruffini con los divisores del término independiente.</li>
      <li>Fórmula de 2.º grado para lo que quede: $ax^2+bx+c=a(x-x_1)(x-x_2)$.</li></ol>
      <div class="ej">$2x^3-3x^2-3x+2=(x-2)(2x^2+x-1)=(x-2)(2x-1)(x+1)$</div>
      Si al final queda algo sin raíces reales, como $x^2+1$, es <b>irreducible</b> y se deja así.`),
    H('Fracciones algebraicas', R`Son cocientes de polinomios. Se trabaja igual que con fracciones numéricas, pero factorizando primero:
      <ul><li><b>Simplificar</b>: factorizar arriba y abajo y tachar <b>factores</b> comunes (nunca sumandos). $\dfrac{x^2-1}{x^2+2x+1}=\dfrac{(x-1)(x+1)}{(x+1)^2}=\dfrac{x-1}{x+1}$.</li>
      <li><b>Sumar y restar</b>: m.c.m. de los denominadores factorizados. $\dfrac1{x-1}-\dfrac2{x^2-1}=\dfrac{x+1-2}{(x-1)(x+1)}=\dfrac1{x+1}$.</li>
      <li><b>Multiplicar</b> en línea y <b>dividir</b> en cruz, simplificando antes de multiplicar.</li></ul>
      La fracción no existe para los valores que anulan el denominador.`),
    H('Ecuaciones de primer y segundo grado', R`<b>Primer grado</b>: se quitan paréntesis y denominadores (multiplicando por el m.c.m.), se agrupan las $x$ y se despeja.
      <p><b>Segundo grado</b> $ax^2+bx+c=0$:</p>
      <div class="ej">$x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, con discriminante $\Delta=b^2-4ac$: si $\Delta>0$ hay dos soluciones, si $\Delta=0$ una doble y si $\Delta<0$ ninguna real.</div>
      <b>Incompletas</b> (más rápido sin fórmula): $ax^2+bx=0\Rightarrow x(ax+b)=0\Rightarrow x=0,\ x=-\frac ba$; $\ ax^2+c=0\Rightarrow x=\pm\sqrt{-\frac ca}$.
      <p><b>Suma y producto de las raíces</b>: $x_1+x_2=-\frac ba$ y $x_1x_2=\frac ca$. Una ecuación con raíces $x_1,x_2$ es $x^2-Sx+P=0$.</p>`),
    H('Otros tipos de ecuaciones', R`<div class="tbl"><table>
      <tr><th>Tipo</th><th>Cómo se resuelve</th></tr>
      <tr><td>Bicuadrada $ax^4+bx^2+c=0$</td><td>cambio $t=x^2$; cada $t\ge0$ da $x=\pm\sqrt t$</td></tr>
      <tr><td>Polinómica de grado $\ge3$</td><td>factorizar (Ruffini) e igualar cada factor a 0</td></tr>
      <tr><td>Racional (con $x$ en el denominador)</td><td>multiplicar por el m.c.m.; descartar soluciones que anulen un denominador</td></tr>
      <tr><td>Irracional o radical</td><td>aislar la raíz, elevar al cuadrado (repetir si hace falta) y <b>comprobar</b>, porque elevar puede añadir soluciones falsas</td></tr>
      <tr><td>Exponencial y logarítmica</td><td>ver el tema de números reales</td></tr></table></div>
      <div class="ej">$x-\sqrt{x+1}=5\Rightarrow\sqrt{x+1}=x-5\Rightarrow x^2-11x+24=0\Rightarrow x=8,\ x=3$. Comprobando, $x=3$ no vale ($3-2\neq5$): la solución es $x=8$.</div>`),
    H('Inecuaciones', R`<b>Primer grado</b>: como una ecuación, pero si multiplicas o divides por un negativo cambia el sentido. La solución es una semirrecta: $3(x-2)-2\ge5x+4\Rightarrow-12\ge2x\Rightarrow x\le-6$.
      <p><b>Segundo grado</b>: se hallan las raíces y se estudia el signo. Con $a>0$ la parábola es positiva fuera de las raíces y negativa entre ellas: $x^2-5x+4>0\iff x\in(-\infty,1)\cup(4,\infty)$.</p>
      <p><b>Racionales</b>: se pasa todo a un lado, se hace una sola fracción y se estudia el signo con una tabla. Las raíces del denominador <b>nunca</b> se incluyen.</p>
      <div class="ej">$\dfrac{2x}{x+4}\ge1\Rightarrow\dfrac{x-4}{x+4}\ge0\Rightarrow(-\infty,-4)\cup[4,\infty)$</div>
      <b>Sistemas de inecuaciones</b> con una incógnita: se resuelve cada una y se toma la intersección. Con dos incógnitas, cada inecuación lineal es un <b>semiplano</b> (se dibuja la recta y se prueba un punto) y la solución es la zona común, la <b>región factible</b>.`),
    H('Sistemas de ecuaciones lineales: Gauss', R`Con dos ecuaciones bastan sustitución, igualación o reducción. Con tres o más se usa el <b>método de Gauss</b>: se hacen ceros para dejar el sistema <b>escalonado</b> y se resuelve de abajo arriba.
      <div class="ej">$\begin{cases}x+y+z=2\\2x+3y+z=1\\x-y+2z=6\end{cases}\xrightarrow{E_2-2E_1,\ E_3-E_1}\begin{cases}x+y+z=2\\y-z=-3\\-2y+z=4\end{cases}\xrightarrow{E_3+2E_2}\begin{cases}x+y+z=2\\y-z=-3\\-z=-2\end{cases}$ <br>$z=2$, $y=-1$, $x=1$.</div>
      <b>Clasificación</b>: compatible determinado (SCD, una solución: los planos se cortan en un punto), compatible indeterminado (SCI, infinitas: aparece $0=0$) e incompatible (SI, ninguna: aparece $0=k$, $k\neq0$).`),
    H('Sistemas no lineales y problemas', R`En los sistemas no lineales se despeja una incógnita de la ecuación más sencilla y se sustituye en la otra: $\begin{cases}x+y=7\\x^2+y^2=25\end{cases}\Rightarrow x^2+(7-x)^2=25\Rightarrow x=3,4$. Soluciones $(3,4)$ y $(4,3)$.
      <p><b>Plantear problemas</b>: 1) elige y escribe qué es cada incógnita; 2) traduce cada frase a una ecuación; 3) resuelve; 4) comprueba que la solución tiene sentido (sin negativos ni decimales si son personas…).</p>`)
  ];

  TH.funciones = [
    H('Qué es una función y cómo se da', R`Una función asigna a cada $x$ de un conjunto un único valor $y=f(x)$. Se puede dar con una <b>tabla</b>, una <b>gráfica</b>, un <b>enunciado</b> o una <b>expresión algebraica</b>. La expresión es la más completa: con ella se puede construir todo lo demás.`),
    H('Tipos de funciones', R`<div class="tbl"><table>
      <tr><th>Tipo</th><th>Ejemplo</th><th>Gráfica</th><th>Dominio</th></tr>
      <tr><td>Lineal / afín</td><td>$2x+1$</td><td>recta</td><td>$\mathbb R$</td></tr>
      <tr><td>Cuadrática</td><td>$x^2-4x+3$</td><td>parábola, vértice en $x=-\frac b{2a}$</td><td>$\mathbb R$</td></tr>
      <tr><td>Racional</td><td>$\frac3{x-2}+1$</td><td>hipérbola con asíntotas $x=2$, $y=1$</td><td>quita los ceros del denominador</td></tr>
      <tr><td>Raíz</td><td>$\sqrt{x-1}$</td><td>media parábola tumbada</td><td>radicando $\ge0$ (índice par)</td></tr>
      <tr><td>Exponencial</td><td>$2^x$</td><td>pasa por $(0,1)$, asíntota $y=0$</td><td>$\mathbb R$</td></tr>
      <tr><td>Logarítmica</td><td>$\ln x$</td><td>pasa por $(1,0)$, asíntota $x=0$</td><td>argumento $>0$</td></tr>
      <tr><td>Trigonométricas</td><td>$\sin x$, $\cos x$, $\tan x$</td><td>ondas periódicas</td><td>$\tan$: quita $\frac\pi2+k\pi$</td></tr></table></div>`),
    H('A trozos, valor absoluto y parte entera', R`Una función <b>a trozos</b> usa una fórmula distinta en cada intervalo. Para representarla, se dibuja cada trozo solo en su intervalo, marcando con punto relleno o hueco los extremos.
      <p>El <b>valor absoluto</b> $|f(x)|$ deja igual la parte positiva y refleja hacia arriba la negativa. Para trabajar con ella se escribe a trozos: $|x-2|=2-x$ si $x<2$, y $x-2$ si $x\ge2$.</p>
      <p>La <b>parte entera</b> $E(x)$ es el mayor entero menor o igual que $x$: $E(2{,}7)=2$, $E(-1{,}3)=-2$, $E(5)=5$. Su gráfica es una escalera; aparece en tarifas "por hora o fracción".</p>`),
    H('Interpolación y extrapolación', R`Si conocemos algunos valores de una función, podemos estimar otros. <b>Interpolar</b> es estimar dentro del intervalo de datos y <b>extrapolar</b> es hacerlo fuera (menos fiable).
      <p><b>Lineal</b>: por dos puntos pasa una recta, $y=y_0+\dfrac{y_1-y_0}{x_1-x_0}(x-x_0)$.</p>
      <div class="ej">Una ciudad tenía 50 mil habitantes en 2010 y 62 mil en 2020. En 2016: $50+\frac{12}{10}\cdot6=57{,}2$ mil (interpolación). En 2025: $68$ mil (extrapolación).</div>
      <b>Cuadrática</b>: por tres puntos pasa una parábola $y=ax^2+bx+c$; se plantea un sistema. Por $(0,1)$, $(1,2)$ y $(2,5)$ pasa $y=x^2+1$.`),
    H('Oferta y demanda', R`En economía, la <b>demanda</b> $D(p)$ (lo que se quiere comprar) baja al subir el precio, y la <b>oferta</b> $O(p)$ (lo que se quiere vender) sube. El <b>precio de equilibrio</b> es el que cumple $D(p)=O(p)$.
      <div class="ej">$D(p)=100-2p$, $O(p)=3p-25$: $100-2p=3p-25\Rightarrow p=25$ €, y se venden 50 unidades.</div>`),
    H('Operaciones y composición', R`$(f\pm g)(x)=f(x)\pm g(x)$, $\ (f\cdot g)(x)=f(x)g(x)$, $\ \left(\frac fg\right)(x)=\frac{f(x)}{g(x)}$ (donde $g(x)\neq0$).
      <p>La <b>composición</b> aplica una función detrás de otra: $(g\circ f)(x)=g\big(f(x)\big)$. Primero actúa $f$ y después $g$. El orden importa:</p>
      <div class="ej">$f(x)=x^2,\ g(x)=x+1$: $\ (f\circ g)(x)=(x+1)^2$ y $(g\circ f)(x)=x^2+1$.</div>`),
    H('Función inversa', R`La inversa $f^{-1}$ deshace lo que hace $f$: si $f(a)=b$, entonces $f^{-1}(b)=a$, y $(f\circ f^{-1})(x)=x$. Solo existe si $f$ no repite valores (es <b>inyectiva</b>).
      <p><b>Cómo calcularla</b>: escribe $y=f(x)$, despeja $x$ y cambia los nombres de las letras.</p>
      <div class="ej">$f(x)=\dfrac{3x+2}{x-1}$: $\ y(x-1)=3x+2\Rightarrow x(y-3)=y+2\Rightarrow f^{-1}(x)=\dfrac{x+2}{x-3}$</div>
      La gráfica de $f^{-1}$ es la simétrica de la de $f$ respecto de la recta $y=x$. Ejemplos de parejas inversas: $2^x$ y $\log_2x$; $x^2$ (con $x\ge0$) y $\sqrt x$.`),
    H('Dominio y recorrido', R`El <b>dominio</b> son los $x$ para los que existe $f(x)$. Hay que vigilar tres cosas: denominadores ($\neq0$), raíces de índice par ($\ge0$) y logaritmos ($>0$).
      <div class="ej">$\ln\dfrac{x-1}{x+3}$ existe si $\dfrac{x-1}{x+3}>0$: dominio $(-\infty,-3)\cup(1,\infty)$.</div>
      El <b>recorrido</b> o imagen son los valores $y$ que se alcanzan. Suele verse mejor en la gráfica: $x^2-4x+5=(x-2)^2+1$ tiene recorrido $[1,\infty)$.`),
    H('Simetrías y periodicidad', R`<b>Par</b>: $f(-x)=f(x)$; simétrica respecto del eje $Y$ ($x^2$, $x^4-3x^2$, $\cos x$). <b>Impar</b>: $f(-x)=-f(x)$; simétrica respecto del origen ($x^3$, $\frac1x$, $\sin x$). Muchas no son ni una cosa ni otra ($x^2+x$).
      <p><b>Periódica</b> de periodo $T$: $f(x+T)=f(x)$, la gráfica se repite cada $T$. $\sin x$ y $\cos x$ tienen periodo $2\pi$, $\tan x$ tiene $\pi$, y $\sin(kx)$ tiene $\frac{2\pi}k$.</p>`),
    H('Cortes con los ejes y signo', R`Corte con el eje $Y$: el punto $(0,f(0))$, si $0$ está en el dominio. Cortes con el eje $X$: las soluciones de $f(x)=0$.
      <p><b>Signo</b>: se marcan en la recta los ceros de $f$ y los puntos que no están en el dominio, y se prueba un valor en cada trozo.</p>
      <div class="ej">$f(x)=\dfrac{x^2-1}{x+2}$: negativa en $(-\infty,-2)\cup(-1,1)$ y positiva en $(-2,-1)\cup(1,\infty)$.</div>`)
  ];

  /* ============================= EJERCICIOS ============================= */
  const PR = {};

  PR.reales = [
    G('Números reales'),
    P('Clasifica los números', R`Di a qué conjuntos pertenecen: $-7$, $\frac34$, $\sqrt{25}$, $\sqrt{12}$, $0{,}\overline6$, $\pi$, $-\sqrt9$, $1{,}010010001\ldots$`, R`$-7\in\mathbb Z$; $\frac34\in\mathbb Q$; $\sqrt{25}=5\in\mathbb N$; $\sqrt{12}=2\sqrt3\in\mathbb I$; $0{,}\overline6=\frac23\in\mathbb Q$; $\pi\in\mathbb I$; $-\sqrt9=-3\in\mathbb Z$; $1{,}0100100\ldots\in\mathbb I$ (no tiene periodo). Todos son reales.`),
    P('¿Exacto o periódico?', R`Sin hacer la división: $\frac7{40}$, $\frac5{12}$, $\frac9{75}$, $\frac17$.`, R`$40=2^3\cdot5$: exacto ($0{,}175$). $12=2^2\cdot3$: periódico ($0{,}41\overline6$). $\frac9{75}=\frac3{25}$ y $25=5^2$: exacto ($0{,}12$). $7$: periódico.`),
    P('Fracción generatriz', R`a) $0{,}\overline{45}$ &nbsp; b) $3{,}1\overline2$ &nbsp; c) $2{,}0\overline{36}$ &nbsp; d) $0{,}125$`, R`a) $\frac{45}{99}=\frac5{11}$ &nbsp; b) $\frac{312-31}{90}=\frac{281}{90}$ &nbsp; c) $\frac{2036-20}{990}=\frac{2016}{990}=\frac{112}{55}$ &nbsp; d) $\frac{125}{1000}=\frac18$`),
    P('Un número curioso', R`Demuestra que $0{,}\overline9=1$.`, R`Su fracción generatriz es $\frac99=1$. (También: $\frac13=0{,}\overline3$, y multiplicando por 3, $1=0{,}\overline9$).`),
    P('Ecuaciones con valor absoluto', R`a) $|x-2|=5$ &nbsp; b) $|2x+1|=|x-4|$`, R`a) $x-2=\pm5\Rightarrow x=7,\ x=-3$. <br>b) $2x+1=x-4\Rightarrow x=-5$, o $2x+1=-(x-4)\Rightarrow x=1$.`),
    P('Inecuaciones con valor absoluto', R`a) $|x-4|\le3$ &nbsp; b) $|3-x|>2$ &nbsp; c) $|2x-1|<5$`, R`a) $1\le x\le7$: $[1,7]$. <br>b) $x<1$ o $x>5$: $(-\infty,1)\cup(5,\infty)$. <br>c) $-5<2x-1<5\Rightarrow(-2,3)$.`),
    P('Intervalos y entornos', R`Con $A=[-2,5)$ y $B=(1,8]$ calcula $A\cup B$ y $A\cap B$. Escribe $E(-1,3)$ y $E^*(2;\,0{,}1)$.`, R`$A\cup B=[-2,8]$, $A\cap B=(1,5)$. $E(-1,3)=(-4,2)$. $E^*(2;0{,}1)=(1{,}9;\ 2)\cup(2;\ 2{,}1)$.`),
    P('Distancias', R`Calcula $d(-3{,}5;\ 2{,}1)$ y los números que están a distancia 4 de $-1$.`, R`$|2{,}1-(-3{,}5)|=5{,}6$. $|x+1|=4\Rightarrow x=3$ o $x=-5$.`),
    P('Aproximaciones y errores', R`Trunca y redondea $\pi=3{,}14159265\ldots$ a milésimas. Calcula el error absoluto y relativo del redondeo.`, R`Truncado $3{,}141$, redondeado $3{,}142$. $E_a\approx0{,}00041$; $E_r\approx\frac{0{,}00041}{3{,}1416}\approx0{,}013\,\%$. Cota de error: $0{,}0005$.`)
  ];

  PR.potencias = [
    G('Potencias'),
    P('Calcula', R`a) $(-3)^4$ &nbsp; b) $-3^4$ &nbsp; c) $(-2)^5$ &nbsp; d) $5^{-2}$ &nbsp; e) $\left(\frac23\right)^{-3}$ &nbsp; f) $\left(-\frac12\right)^{-4}$`, R`a) $81$ &nbsp; b) $-81$ &nbsp; c) $-32$ &nbsp; d) $\frac1{25}$ &nbsp; e) $\frac{27}8$ &nbsp; f) $16$`),
    P('Una sola potencia', R`a) $2^5\cdot2^{-3}\cdot2^4$ &nbsp; b) $(3^4)^2:3^5$ &nbsp; c) $(5^2\cdot5^{-1})^3$ &nbsp; d) $\dfrac{a^7\cdot a^{-2}}{a^3}$`, R`a) $2^6$ &nbsp; b) $3^8:3^5=3^3$ &nbsp; c) $(5^1)^3=5^3$ &nbsp; d) $a^2$`),
    P('Factoriza las bases', R`a) $\dfrac{2^3\cdot4^2}{8^2\cdot2^{-1}}$ &nbsp; b) $\dfrac{9^2\cdot27^{-1}\cdot3^5}{81\cdot3^{-2}}$ &nbsp; c) $\dfrac{6^3\cdot10^2}{15^2\cdot4^2}$`, R`a) $\dfrac{2^7}{2^5}=4$. <br>b) $\dfrac{3^4\cdot3^{-3}\cdot3^5}{3^4\cdot3^{-2}}=\dfrac{3^6}{3^2}=81$. <br>c) $\dfrac{2^3 3^3\cdot2^2 5^2}{3^2 5^2\cdot2^4}=2\cdot3=6$.`),
    P('Con letras', R`Simplifica $(x^3y^{-2})^2\cdot(x^{-1}y)^3$.`, R`$x^6y^{-4}\cdot x^{-3}y^3=x^3y^{-1}=\dfrac{x^3}{y}$.`),
    P('Exponente fraccionario', R`a) $8^{2/3}$ &nbsp; b) $16^{-3/4}$ &nbsp; c) $27^{1/3}$ &nbsp; d) $\left(\frac1{25}\right)^{-1/2}$`, R`a) $4$ &nbsp; b) $\frac1{(\sqrt[4]{16})^3}=\frac18$ &nbsp; c) $3$ &nbsp; d) $25^{1/2}=5$`),
    P('¿Verdadero o falso?', R`a) $(a+b)^2=a^2+b^2$ &nbsp; b) $2^3+2^3=2^4$ &nbsp; c) $3^2\cdot3^3=9^5$ &nbsp; d) $(-a)^2=a^2$`, R`a) Falso. b) Verdadero ($8+8=16$). c) Falso, es $3^5$. d) Verdadero.`)
  ];

  PR.radicales = [
    G('Radicales'),
    P('Potencias y radicales', R`Escribe como potencia: $\sqrt5$, $\sqrt[3]{x^2}$, $\dfrac1{\sqrt[4]{a^3}}$. Y como radical: $7^{3/5}$, $x^{-1/2}$.`, R`$5^{1/2}$, $x^{2/3}$, $a^{-3/4}$. $\ \sqrt[5]{7^3}$, $\dfrac1{\sqrt x}$.`),
    P('Simplifica el índice', R`a) $\sqrt[6]{2^4}$ &nbsp; b) $\sqrt[8]{a^6}$ &nbsp; c) $\sqrt[9]{27}$`, R`a) $\sqrt[3]{2^2}=\sqrt[3]4$ &nbsp; b) $\sqrt[4]{a^3}$ &nbsp; c) $\sqrt[9]{3^3}=\sqrt[3]3$`),
    P('Extrae factores', R`a) $\sqrt{50}$ &nbsp; b) $\sqrt{72}$ &nbsp; c) $\sqrt[3]{54}$ &nbsp; d) $\sqrt{a^5b^3}$ &nbsp; e) $\sqrt[3]{16x^7}$`, R`a) $5\sqrt2$ &nbsp; b) $6\sqrt2$ &nbsp; c) $3\sqrt[3]2$ &nbsp; d) $a^2b\sqrt{ab}$ &nbsp; e) $2x^2\sqrt[3]{2x}$`),
    P('Introduce factores', R`a) $3\sqrt2$ &nbsp; b) $2\sqrt[3]5$ &nbsp; c) $a\sqrt a$`, R`a) $\sqrt{18}$ &nbsp; b) $\sqrt[3]{40}$ &nbsp; c) $\sqrt{a^3}$`),
    P('Suma de radicales', R`a) $3\sqrt{12}-2\sqrt{27}+\sqrt{75}$ &nbsp; b) $\sqrt8+\sqrt{18}-\sqrt{32}$ &nbsp; c) $\sqrt[3]{16}+\sqrt[3]{54}-\sqrt[3]2$`, R`a) $6\sqrt3-6\sqrt3+5\sqrt3=5\sqrt3$. <br>b) $2\sqrt2+3\sqrt2-4\sqrt2=\sqrt2$. <br>c) $2\sqrt[3]2+3\sqrt[3]2-\sqrt[3]2=4\sqrt[3]2$.`),
    P('Producto y cociente', R`a) $\sqrt6\cdot\sqrt{15}$ &nbsp; b) $\dfrac{\sqrt{48}}{\sqrt3}$ &nbsp; c) $\sqrt2\cdot\sqrt[3]4$ &nbsp; d) $\dfrac{\sqrt[3]3}{\sqrt3}$`, R`a) $\sqrt{90}=3\sqrt{10}$. b) $\sqrt{16}=4$. c) $\sqrt[6]{2^3\cdot2^4}=2\sqrt[6]2$. d) $\dfrac{\sqrt[6]{3^2}}{\sqrt[6]{3^3}}=\sqrt[6]{\frac13}=\dfrac1{\sqrt[6]3}$.`),
    P('Ordena', R`Ordena de menor a mayor $\sqrt3$, $\sqrt[3]5$ y $\sqrt[4]{10}$ sin calculadora.`, R`Índice común 12: $\sqrt[12]{3^6}=\sqrt[12]{729}$, $\sqrt[12]{5^4}=\sqrt[12]{625}$, $\sqrt[12]{10^3}=\sqrt[12]{1000}$. Por tanto $\sqrt[3]5<\sqrt3<\sqrt[4]{10}$.`),
    P('Raíz de una raíz', R`a) $\sqrt{\sqrt[3]{64}}$ &nbsp; b) $\sqrt{2\sqrt2}$`, R`a) $\sqrt[6]{64}=2$. &nbsp; b) $\sqrt{\sqrt{8}}=\sqrt[4]8$.`),
    P('Racionaliza (I)', R`a) $\dfrac5{\sqrt{10}}$ &nbsp; b) $\dfrac6{\sqrt[3]3}$ &nbsp; c) $\dfrac1{\sqrt[5]{a^2}}$`, R`a) $\dfrac{\sqrt{10}}2$ &nbsp; b) $2\sqrt[3]9$ &nbsp; c) $\dfrac{\sqrt[5]{a^3}}{a}$`),
    P('Racionaliza (II): conjugado', R`a) $\dfrac4{\sqrt5-1}$ &nbsp; b) $\dfrac{\sqrt3+\sqrt2}{\sqrt3-\sqrt2}$ &nbsp; c) $\dfrac2{3+\sqrt7}$`, R`a) $\sqrt5+1$. <br>b) $\dfrac{(\sqrt3+\sqrt2)^2}{3-2}=5+2\sqrt6$. <br>c) $\dfrac{2(3-\sqrt7)}{9-7}=3-\sqrt7$.`),
    P('Identidades con radicales', R`a) $(2\sqrt3-1)^2$ &nbsp; b) $(\sqrt5+\sqrt2)(\sqrt5-\sqrt2)$`, R`a) $12-4\sqrt3+1=13-4\sqrt3$. &nbsp; b) $5-2=3$.`)
  ];

  PR.notacion = [
    G('Notación científica'),
    P('Escribe en notación científica', R`$0{,}000\,34$ y $125\,000\,000$.`, R`$3{,}4\cdot10^{-4}$ y $1{,}25\cdot10^8$.`),
    P('Opera', R`a) $(3{,}2\cdot10^5)(5\cdot10^{-8})$ &nbsp; b) $\dfrac{4{,}5\cdot10^{12}}{9\cdot10^{-3}}$ &nbsp; c) $2{,}5\cdot10^7+3\cdot10^6$`, R`a) $1{,}6\cdot10^{-2}$ &nbsp; b) $0{,}5\cdot10^{15}=5\cdot10^{14}$ &nbsp; c) $2{,}8\cdot10^7$`),
    P('El año luz', R`La luz recorre $3\cdot10^5$ km cada segundo. ¿Cuántos km recorre en un año de 365 días?`, R`Un año tiene $365\cdot24\cdot3600=3{,}1536\cdot10^7$ s. Distancia: $3\cdot10^5\cdot3{,}1536\cdot10^7\approx9{,}46\cdot10^{12}$ km.`)
  ];

  PR.logaritmos = [
    G('Logaritmos'),
    P('Por la definición', R`a) $\log_264$ b) $\log_3\frac1{27}$ c) $\log_{1/2}8$ d) $\log_42$ e) $\log0{,}0001$ f) $\ln e^{-2}$ g) $\log_51$ h) $\log_84$`, R`a) 6 b) $-3$ c) $-3$ d) $\frac12$ e) $-4$ f) $-2$ g) 0 h) $\frac23$`),
    P('Halla x', R`a) $\log_x81=4$ &nbsp; b) $\log_2x=-3$ &nbsp; c) $\log_x\frac1{16}=-2$`, R`a) $x^4=81\Rightarrow x=3$ &nbsp; b) $x=2^{-3}=\frac18$ &nbsp; c) $x^{-2}=\frac1{16}\Rightarrow x=4$`),
    P('Con log 2 y log 3', R`Sabiendo que $\log2\approx0{,}301$ y $\log3\approx0{,}477$, calcula $\log6$, $\log18$, $\log5$, $\log0{,}24$ y $\log\sqrt[3]{12}$.`, R`$\log6=0{,}778$; $\log18=\log2+2\log3=1{,}255$; $\log5=1-\log2=0{,}699$; $\log0{,}24=3\log2+\log3-2=-0{,}620$; $\log\sqrt[3]{12}=\frac{2\log2+\log3}3\approx0{,}360$.`),
    P('Desarrolla', R`a) $\log\dfrac{a^3b}{\sqrt c}$ &nbsp; b) $\ln\dfrac{x^2\sqrt y}{z^3}$`, R`a) $3\log a+\log b-\frac12\log c$ &nbsp; b) $2\ln x+\frac12\ln y-3\ln z$`),
    P('Agrupa', R`a) $2\log x-3\log y+\log z$ &nbsp; b) $\frac12\ln a+\ln b-2$`, R`a) $\log\dfrac{x^2z}{y^3}$ &nbsp; b) $\ln\dfrac{b\sqrt a}{e^2}$`),
    P('Cambio de base', R`Calcula con la calculadora $\log_210$ y $\log_57$.`, R`$\log_210=\frac1{\log2}\approx3{,}322$; $\ \log_57=\frac{\ln7}{\ln5}\approx1{,}209$.`),
    P('¿Verdadero o falso?', R`a) $\log(a+b)=\log a+\log b$ b) $\log\frac ab=\log a-\log b$ c) $\log a^2=(\log a)^2$ d) $\log_ab\cdot\log_ba=1$`, R`a) Falso. b) Verdadero. c) Falso: $\log a^2=2\log a$. d) Verdadero.`),
    P('Exponenciales: igualar bases', R`a) $2^{x-1}=32$ b) $3^{x^2-1}=27$ c) $4^x=8$ d) $5^x=\frac1{125}$`, R`a) $x-1=5\Rightarrow x=6$ b) $x^2=4\Rightarrow x=\pm2$ c) $2^{2x}=2^3\Rightarrow x=\frac32$ d) $x=-3$`),
    P('Exponenciales: cambio de variable', R`a) $4^x-6\cdot2^x+8=0$ &nbsp; b) $2^{x+1}+2^{x-1}=20$`, R`a) $t=2^x$: $t^2-6t+8=0\Rightarrow t=2,4\Rightarrow x=1,\ x=2$. <br>b) $2^x\left(2+\frac12\right)=20\Rightarrow2^x=8\Rightarrow x=3$.`),
    P('Exponenciales: tomando logaritmos', R`a) $3^x=20$ &nbsp; b) $5^{2x-1}=7$`, R`a) $x=\frac{\log20}{\log3}\approx2{,}727$. <br>b) $2x-1=\frac{\log7}{\log5}\approx1{,}209\Rightarrow x\approx1{,}105$.`),
    P('Ecuaciones logarítmicas', R`a) $\log(x+3)+\log(x-3)=\log16$ b) $2\log x=\log(5x-6)$ c) $\log_3(2x+1)=2$ d) $\log x-\log(x-1)=\log3$`, R`a) $x^2-9=16\Rightarrow x=5$ ($-5$ no vale). <br>b) $x^2-5x+6=0\Rightarrow x=2,\ x=3$ (las dos valen). <br>c) $2x+1=9\Rightarrow x=4$. <br>d) $\frac x{x-1}=3\Rightarrow x=\frac32$.`),
    P('Sistemas', R`a) $\begin{cases}\log x+\log y=3\\x-y=90\end{cases}$ &nbsp; b) $\begin{cases}2^x\cdot2^y=32\\2^x:2^y=2\end{cases}$`, R`a) $xy=1000$ y $x=y+90$: $y^2+90y-1000=0\Rightarrow y=10$ ($-100$ no vale), $x=100$. <br>b) $x+y=5$, $x-y=1$: $x=3$, $y=2$.`),
    P('Crecimiento de una población', R`Una población de 5000 habitantes crece un 3 % cada año. ¿Cuántos años tarda en llegar a 8000?`, R`$5000\cdot1{,}03^n=8000\Rightarrow1{,}03^n=1{,}6\Rightarrow n=\frac{\log1{,}6}{\log1{,}03}\approx15{,}9$. Hacen falta 16 años.`)
  ];

  PR.algebra = [
    G('Polinomios'),
    P('Conceptos', R`Para $P(x)=2x^3-x+5$ indica el grado, el coeficiente principal, el término independiente y calcula $P(-2)$.`, R`Grado 3, coeficiente principal 2, término independiente 5. $P(-2)=-16+2+5=-9$.`),
    P('Identidades notables', R`a) $(2x-3)^2$ b) $(x+2)^3$ c) $(a-1)^3$ d) Factoriza $9x^2-25$ y $x^2+10x+25$.`, R`a) $4x^2-12x+9$ b) $x^3+6x^2+12x+8$ c) $a^3-3a^2+3a-1$ d) $(3x-5)(3x+5)$ y $(x+5)^2$.`),
    P('División larga', R`Divide $(2x^3-3x^2+4x-1):(x^2-x+1)$.`, R`Cociente $2x-1$, resto $x$. Comprobación: $(2x-1)(x^2-x+1)+x=2x^3-3x^2+4x-1$ ✓`),
    P('Ruffini', R`Divide $(x^4-3x^2+2x-5):(x+2)$.`, R`Coeficientes $1,\,0,\,-3,\,2,\,-5$ con $a=-2$: cociente $x^3-2x^2+x$, resto $-5$. (Y $P(-2)=16-12-4-5=-5$ ✓).`),
    P('Teorema del resto', R`Halla $m$ para que $x^3-mx^2+5x-2$ dé resto 4 al dividirlo entre $x-2$.`, R`$P(2)=16-4m=4\Rightarrow m=3$.`),
    P('Factoriza', R`a) $x^3-4x$ b) $x^3-6x^2+11x-6$ c) $x^4-5x^2+4$ d) $2x^3-3x^2-3x+2$ e) $x^3+x^2+x+1$`, R`a) $x(x-2)(x+2)$ b) $(x-1)(x-2)(x-3)$ c) $(x-1)(x+1)(x-2)(x+2)$ d) $(x-2)(2x-1)(x+1)$ e) $(x+1)(x^2+1)$`),
    P('Fracciones algebraicas', R`a) Simplifica $\dfrac{x^2-1}{x^2+2x+1}$ &nbsp; b) Opera $\dfrac1{x-1}-\dfrac2{x^2-1}$`, R`a) $\dfrac{x-1}{x+1}$ &nbsp; b) $\dfrac{x+1-2}{x^2-1}=\dfrac{1}{x+1}$`),
    G('Hoja de clase (ejercicios 4 a 9)'),
    P('Identidades notables', R`d) $(4x+5y)^2$ &nbsp; e) $\left(4x-\dfrac74\right)^2$ &nbsp; f) $(x^2-6y)(x^2+6y)$`, R`d) $16x^2+40xy+25y^2$. <br>e) $16x^2-14x+\dfrac{49}{16}$. <br>f) $x^4-36y^2$.`),
    P('Operaciones con polinomios', R`Sean $M(x)=3x^2-5x-3$, $N(x)=x^2+3x+1$ y $K(x)=x^2-x+2$. Calcula a) $M(-1)$ b) $2M(x)-4K(x)$ c) $M(x)+3N(x)\cdot K(x)$`, R`a) $5$. b) $2x^2-6x-14$. c) $N\cdot K=x^4+2x^3+5x+2$; por 3 y más $M$: $3x^4+6x^3+3x^2+10x+3$.`),
    P('Producto de polinomios', R`$P(x)\cdot Q(x)$ con $P(x)=2x^6+3x^4+x^2-6$ y $Q(x)=x^3+x$.`, R`$2x^9+5x^7+4x^5-5x^3-6x$.`),
    P('Divisiones', R`a) $(x^5+7x^3-5x+1)\div(x^3+2x)$ &nbsp; b) $(x^3-5x^2+x)\div(-x^2-1)$`, R`a) Cociente $x^2+5$, resto $-15x+1$. <br>b) Cociente $-x+5$, resto $5$.`),
    P('Simplifica', R`a) $\dfrac{x^2-5x+6}{x^2-2x}$ &nbsp; b) $\dfrac{3x^3-6x^2}{3x^4+24x^3-60x^2}$`, R`a) $\dfrac{x-3}{x}$. b) $\dfrac{3x^2(x-2)}{3x^2(x+10)(x-2)}=\dfrac1{x+10}$.`),
    P('Opera y simplifica', R`a) $\dfrac{x-1}{x^2-4}-\dfrac{x-2}{x^2+2x}$ b) $\dfrac{x-3}{x}\div\dfrac{x^2-9}{x^2+3x}$ c) $\dfrac{2x-1}{x^2+2x}\cdot\dfrac{x^3+2x^2}{4x}$`, R`a) $\dfrac{3x-4}{x^3-4x}$ b) $1$ c) $\dfrac{2x-1}4$`),
    G('Ecuaciones'),
    P('Primer grado', R`$\dfrac{x-1}3-\dfrac{x+2}4=1$`, R`Por 12: $4(x-1)-3(x+2)=12\Rightarrow x-10=12\Rightarrow x=22$.`),
    P('Segundo grado', R`a) $3x^2-12=0$ b) $2x^2+5x=0$ c) $x^2-6x+9=0$ d) $x^2+x+1=0$`, R`a) $\pm2$ b) $0$ y $-\frac52$ c) $3$ (doble) d) $\Delta=-3<0$: sin solución real.`),
    P('Discriminante', R`¿Para qué valores de $k$ tiene $x^2-4x+k=0$ una solución doble? ¿Y dos soluciones?`, R`$\Delta=16-4k$. Doble si $k=4$; dos soluciones si $k<4$.`),
    P('Suma y producto', R`a) Escribe una ecuación con raíces 3 y $-5$. b) Sin resolver $2x^2-7x+3=0$, halla la suma y el producto de sus raíces.`, R`a) $S=-2$, $P=-15$: $x^2+2x-15=0$. b) $S=\frac72$, $P=\frac32$.`),
    P('Bicuadradas', R`a) $x^4-13x^2+36=0$ &nbsp; b) $x^4+3x^2-4=0$`, R`a) $t=4,9\Rightarrow x=\pm2,\pm3$. &nbsp; b) $t=1$ ($t=-4$ no vale) $\Rightarrow x=\pm1$.`),
    P('Racional', R`$\dfrac x{x-2}-\dfrac3{x+2}=1$`, R`$x(x+2)-3(x-2)=x^2-4\Rightarrow-x+6=-4\Rightarrow x=10$.`),
    P('Irracionales', R`a) $x-\sqrt{x+1}=5$ &nbsp; b) $\sqrt{3x+1}-\sqrt{x-1}=2$`, R`a) $x=8$ ($x=3$ no cumple). <br>b) Aislando y elevando dos veces: $(x-1)^2=4(x-1)\Rightarrow x=1,\ x=5$. Las dos cumplen.`),
    P('Grado 3', R`$x^3-2x^2-5x+6=0$`, R`$(x-1)(x-3)(x+2)=0$: $x=1,\ 3,\ -2$.`),
    G('Inecuaciones'),
    P('Primer grado', R`$3(x-2)-2\ge5x+4$`, R`$-12\ge2x\Rightarrow x\le-6$: $(-\infty,-6]$.`),
    P('Segundo grado', R`a) $x^2-5x+4>0$ b) $-x^2+9\ge0$ c) $x^2+1<0$`, R`a) $(-\infty,1)\cup(4,\infty)$ b) $[-3,3]$ c) Sin solución.`),
    P('Racionales', R`a) $\dfrac{x+3}{x-1}\le0$ &nbsp; b) $\dfrac{2x}{x+4}\ge1$`, R`a) $[-3,1)$ &nbsp; b) $\dfrac{x-4}{x+4}\ge0$: $(-\infty,-4)\cup[4,\infty)$`),
    P('Sistema de inecuaciones', R`$\begin{cases}2x-3<5\\3-x\le2x\end{cases}$`, R`$x<4$ y $x\ge1$: $[1,4)$.`),
    P('Con dos incógnitas', R`Representa $2x+y\le6$, $x\ge0$, $y\ge0$. ¿Es $(1,2)$ solución?`, R`Triángulo de vértices $(0,0)$, $(3,0)$ y $(0,6)$. Sí: $2+2=4\le6$.`),
    G('Sistemas y problemas'),
    P('Gauss', R`$\begin{cases}x+y+z=2\\2x+3y+z=1\\x-y+2z=6\end{cases}$`, R`Escalonando: $y-z=-3$, $-z=-2$. Solución $(1,-1,2)$.`),
    P('Clasifica', R`a) $\begin{cases}x+y-z=1\\2x-y+z=2\\3x=3\end{cases}$ &nbsp; b) $\begin{cases}x+2y+z=3\\2x+4y+2z=5\end{cases}$`, R`a) La 3.ª es la suma de las otras: SCI, $(1,\lambda,\lambda)$. <br>b) La 2.ª tendría que ser $6$ para ser el doble: SI.`),
    P('Gallinas y conejos', R`En una granja hay 30 cabezas y 80 patas. ¿Cuántas gallinas y cuántos conejos hay?`, R`$g+c=30$, $2g+4c=80$: 20 gallinas y 10 conejos.`),
    P('Entradas de cine', R`Un cine cobra 8 € (adulto), 5 € (niño) y 4 € (jubilado). Vendió 200 entradas por 1140 € y hubo tantos niños como adultos y jubilados juntos. ¿Cuántas de cada tipo?`, R`$a+n+j=200$, $8a+5n+4j=1140$, $n=a+j$. Entonces $n=100$, $a+j=100$, $8a+4j=640\Rightarrow a=60$, $j=40$.`),
    P('No lineales', R`a) $\begin{cases}x^2+y^2=25\\x+y=7\end{cases}$ b) $\begin{cases}xy=6\\x^2+y^2=13\end{cases}$ c) $\begin{cases}y=x^2\\y=2x+3\end{cases}$`, R`a) $(3,4),(4,3)$ b) $(2,3),(3,2),(-2,-3),(-3,-2)$ c) $(3,9),(-1,1)$`)
  ];

  PR.funciones = [
    G('Funciones'),
    P('Dominios', R`a) $\dfrac{x+1}{x^2-9}$ b) $\sqrt{6-2x}$ c) $\log(x^2-4)$ d) $\dfrac{\sqrt x}{x-4}$ e) $\dfrac1{\sqrt{x+2}}$`, R`a) $\mathbb R-\{\pm3\}$ b) $(-\infty,3]$ c) $(-\infty,-2)\cup(2,\infty)$ d) $[0,4)\cup(4,\infty)$ e) $(-2,\infty)$`),
    P('Recorridos', R`a) $x^2-4x+5$ &nbsp; b) $2^x+3$ &nbsp; c) $\dfrac3{x-2}+1$`, R`a) $[1,\infty)$ b) $(3,\infty)$ c) $\mathbb R-\{1\}$ (asíntota horizontal $y=1$)`),
    P('Simetrías', R`¿Pares, impares o ninguna? $x^4-3x^2$, $\ x^3-x$, $\ x^2+x$, $\ \dfrac{\sin x}{x}$`, R`Par, impar, ninguna y par.`),
    P('Composición', R`Con $f(x)=\sqrt x$ y $g(x)=x^2+1$, calcula $f\circ g$ y $g\circ f$.`, R`$(f\circ g)(x)=\sqrt{x^2+1}$; $(g\circ f)(x)=x+1$ (para $x\ge0$).`),
    P('Inversas', R`a) $f(x)=\dfrac{3x+2}{x-1}$ &nbsp; b) $g(x)=e^{2x-1}$ &nbsp; c) $h(x)=\log_2(x-1)+3$`, R`a) $\dfrac{x+2}{x-3}$ b) $\dfrac{\ln x+1}2$ c) $2^{x-3}+1$`),
    P('Cortes y signo', R`Estudia $f(x)=\dfrac{x^2-1}{x+2}$.`, R`Cortes $(\pm1,0)$ y $\left(0,-\frac12\right)$. Negativa en $(-\infty,-2)\cup(-1,1)$, positiva en $(-2,-1)\cup(1,\infty)$.`),
    P('Valor absoluto y parte entera', R`a) Escribe a trozos $|x^2-4|$. b) Calcula $E(2{,}7)$, $E(-1{,}3)$ y $E(5)$.`, R`a) $4-x^2$ si $-2<x<2$; $x^2-4$ en el resto. b) $2$, $-2$ y $5$.`),
    P('Interpolación lineal', R`Una ciudad tenía 50 mil habitantes en 2010 y 62 mil en 2020. Estima la población de 2016 y de 2025.`, R`Recta $y=50+1{,}2(t-2010)$: 2016 $\to57{,}2$ mil (interpolación); 2025 $\to68$ mil (extrapolación, menos fiable).`),
    P('Interpolación cuadrática', R`Halla la parábola que pasa por $(0,1)$, $(1,2)$ y $(2,5)$ y estima su valor en $x=3$.`, R`$c=1$, $a+b=1$, $2a+b=2$: $y=x^2+1$. En $x=3$ vale $10$.`),
    P('Periodos', R`Periodo de $\sin(2x)$ y de $\tan\left(\frac x2\right)$.`, R`$\pi$ y $2\pi$.`),
    P('Oferta y demanda', R`$D(p)=100-2p$ y $O(p)=3p-25$. Halla el equilibrio.`, R`$p=25$ €, cantidad 50.`)
  ];

  window.CC13_B1X = { TH, PR, H, P, G };
})();
