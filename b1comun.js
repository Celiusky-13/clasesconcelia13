/* ClasesConCelia13 · 1º Bachillerato: bloques comunes a Ciencias (Matemáticas I) y Sociales (MACS I).
   Teoría y ejercicios redactados para esta web. */
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

  /* ====================== LÍMITES Y CONTINUIDAD ====================== */
  TH.limites = [
    H('Idea intuitiva de límite', R`¿Qué le pasa a $f(x)=\dfrac{x^2-1}{x-1}$ cerca de $x=1$? En $x=1$ no existe (sale $\frac00$), pero podemos dar valores cada vez más cerca:
      <div class="tbl"><table><tr><th>$x$</th><td>0,9</td><td>0,99</td><td>0,999</td><td>1,001</td><td>1,01</td><td>1,1</td></tr>
      <tr><th>$f(x)$</th><td>1,9</td><td>1,99</td><td>1,999</td><td>2,001</td><td>2,01</td><td>2,1</td></tr></table></div>
      Los valores se acercan a 2: decimos que $\displaystyle\lim_{x\to1}f(x)=2$.
      <p><b>Definición</b>: $\displaystyle\lim_{x\to a}f(x)=L$ si podemos conseguir que $f(x)$ esté tan cerca de $L$ como queramos tomando $x$ suficientemente cerca de $a$ (sin llegar a ser $a$). Lo que vale la función justo en $a$ no importa para el límite.</p>`),
    H('Límites laterales', R`$\displaystyle\lim_{x\to a^-}f(x)$ es el límite acercándose por la <b>izquierda</b> (valores menores que $a$) y $\displaystyle\lim_{x\to a^+}f(x)$ por la <b>derecha</b>.
      <div class="ej">El límite existe si y solo si los dos laterales existen y son iguales.</div>
      <div class="ej"><b>Ejemplo resuelto.</b> $f(x)=\dfrac{|x|}{x}$ vale $-1$ si $x<0$ y $1$ si $x>0$. $\lim_{x\to0^-}f(x)=-1$ y $\lim_{x\to0^+}f(x)=1$: no existe el límite en 0.</div>
      Los laterales son imprescindibles en las funciones <b>a trozos</b> (en los puntos donde cambia la fórmula) y cuando sale $\frac k0$.`),
    H('Tipos de límites', R`<div class="tbl"><table>
      <tr><th>Tipo</th><th>Ejemplo</th><th>Gráficamente</th></tr>
      <tr><td>Finito en un punto</td><td>$\lim_{x\to1}\frac{x^2-1}{x-1}=2$</td><td>la gráfica se acerca a un punto</td></tr>
      <tr><td>Infinito en un punto</td><td>$\lim_{x\to0}\frac1{x^2}=+\infty$</td><td>asíntota vertical</td></tr>
      <tr><td>Finito en el infinito</td><td>$\lim_{x\to\infty}\frac{2x+1}{x}=2$</td><td>asíntota horizontal</td></tr>
      <tr><td>Infinito en el infinito</td><td>$\lim_{x\to\infty}x^2=+\infty$</td><td>rama infinita</td></tr></table></div>`),
    H('Propiedades de los límites', R`Si $\lim f=A$ y $\lim g=B$ (finitos): $\ \lim(f\pm g)=A\pm B$; $\ \lim(f\cdot g)=A\cdot B$; $\ \lim\frac fg=\frac AB$ si $B\neq0$; $\ \lim f^n=A^n$; $\ \lim\sqrt[n]f=\sqrt[n]A$.
      <p>Consecuencia práctica: en las funciones elementales (polinomios, racionales, raíces, exponenciales, logaritmos, senos…) <b>basta sustituir</b> si el punto está en el dominio: $\lim_{x\to2}(x^3-2x+1)=5$, $\ \lim_{x\to3}\sqrt{x+6}=3$.</p>`),
    H('Operaciones con infinito e indeterminaciones', R`<div class="tbl"><table>
      <tr><th>Operación</th><th>Resultado</th></tr>
      <tr><td>$\infty+k$, $\ \infty+\infty$, $\ \infty\cdot\infty$</td><td>$\infty$</td></tr>
      <tr><td>$k\cdot\infty$ ($k\neq0$)</td><td>$\pm\infty$ (regla de los signos)</td></tr>
      <tr><td>$\dfrac k\infty$</td><td>$0$</td></tr>
      <tr><td>$\dfrac k0$ ($k\neq0$)</td><td>$\pm\infty$: el signo se mira con los laterales</td></tr>
      <tr><td>$k^{+\infty}$</td><td>$+\infty$ si $k>1$; $\ 0$ si $0\le k<1$</td></tr></table></div>
      <b>Indeterminaciones</b> (el resultado depende de cada caso y hay que trabajar): $\ \infty-\infty,\ \ 0\cdot\infty,\ \ \dfrac\infty\infty,\ \ \dfrac00,\ \ 1^\infty,\ \ \infty^0,\ \ 0^0$.`),
    H('Cómo calcular un límite', R`<ol><li><b>Sustituye.</b> Si sale un número, ese es el límite.</li>
      <li>Si sale $\frac k0$, calcula los <b>laterales</b> para ver el signo del infinito.</li>
      <li>Si sale una <b>indeterminación</b>, aplica la técnica que le corresponde:</li></ol>
      <div class="tbl"><table>
      <tr><th>Indeterminación</th><th>Técnica</th><th>Ejemplo</th></tr>
      <tr><td>$\frac\infty\infty$</td><td>comparar grados (manda la mayor potencia)</td><td>$\lim_{x\to\infty}\frac{3x^2-x}{2x^2+5}=\frac32$</td></tr>
      <tr><td>$\frac00$ con polinomios</td><td>factorizar (Ruffini) y simplificar</td><td>$\lim_{x\to2}\frac{x^2-5x+6}{x^2-4}=\lim_{x\to2}\frac{x-3}{x+2}=-\frac14$</td></tr>
      <tr><td>$\frac00$ o $\infty-\infty$ con raíces</td><td>multiplicar y dividir por el conjugado</td><td>$\lim_{x\to0}\frac{\sqrt{x+4}-2}x=\lim\frac{1}{\sqrt{x+4}+2}=\frac14$</td></tr>
      <tr><td>$\infty-\infty$ con fracciones</td><td>restar las fracciones</td><td>$\lim_{x\to1}\left(\frac1{x-1}-\frac2{x^2-1}\right)=\lim\frac1{x+1}=\frac12$</td></tr>
      <tr><td>$1^\infty$</td><td>$\lim f^g=e^{\lim g(f-1)}$</td><td>$\lim_{x\to\infty}\left(1+\frac3x\right)^{2x}=e^6$</td></tr></table></div>
      <b>Comparar grados</b> en $\frac\infty\infty$: si el de arriba es mayor, $\pm\infty$; si el de abajo es mayor, $0$; si son iguales, el cociente de los coeficientes principales. Las raíces cuentan con su grado partido por el índice: $\sqrt{x^2+3}$ "es de grado 1".`),
    H('Asíntotas', R`<b>Verticales</b> $x=a$: $\lim_{x\to a}f(x)=\pm\infty$. Se buscan donde se anula un denominador (sin anularse el numerador) o en el borde del dominio de un logaritmo. Los laterales dicen si la gráfica sube o baja a cada lado.
      <p><b>Horizontales</b> $y=L$: $\lim_{x\to\pm\infty}f(x)=L$. En las racionales hay cuando el grado de arriba es menor o igual que el de abajo.</p>
      <p><b>Oblicuas</b> $y=mx+n$ (solo si no hay horizontal por ese lado): $m=\lim\frac{f(x)}x$, $n=\lim\big(f(x)-mx\big)$. En las racionales aparecen cuando el grado de arriba supera en 1 al de abajo, y la asíntota es el cociente de la división.</p>
      <div class="ej"><b>Ejemplo resuelto.</b> $f(x)=\dfrac{x^2}{x-2}$. Vertical: $x=2$ ($\lim_{x\to2^-}=-\infty$, $\lim_{x\to2^+}=+\infty$). No hay horizontal. Dividiendo, $x^2=(x-2)(x+2)+4$: oblicua $y=x+2$.</div>
      <b>Posición</b> respecto de la asíntota horizontal: se mira el signo de $f(x)-L$. Con $f(x)=\frac{2x+1}{x-1}$: $f(x)-2=\frac3{x-1}$, positivo si $x\to+\infty$ (la gráfica va por encima) y negativo si $x\to-\infty$ (por debajo).`),
    H('Continuidad', R`$f$ es <b>continua en $a$</b> si se cumplen tres cosas: 1) existe $f(a)$; 2) existe $\lim_{x\to a}f(x)$; 3) son iguales. Intuitivamente, se dibuja sin levantar el lápiz.
      <p>Polinomios, $e^x$, $\sin x$ y $\cos x$ son continuas en todo $\mathbb R$; las racionales, raíces y logaritmos lo son en su dominio. Así que, en la práctica, solo hay que estudiar los puntos fuera del dominio y los puntos donde cambia la definición en las funciones a trozos.</p>
      <div class="ej"><b>Ejemplo resuelto.</b> ¿Qué $a$ hace continua $f(x)=\begin{cases}x^2+a & x\le2\\ax-1 & x>2\end{cases}$? En $x=2$: $f(2)=4+a$ y $\lim_{x\to2^+}=2a-1$. Igualando, $a=5$.</div>`),
    H('Tipos de discontinuidad', R`<div class="tbl"><table>
      <tr><th>Tipo</th><th>Qué pasa</th><th>Ejemplo</th></tr>
      <tr><td>Evitable</td><td>existe el límite, pero no coincide con $f(a)$ o $f(a)$ no existe</td><td>$\frac{x^2-1}{x-1}$ en $x=1$</td></tr>
      <tr><td>De salto finito</td><td>laterales finitos y distintos</td><td>$\frac{|x|}x$ en $x=0$</td></tr>
      <tr><td>De salto infinito</td><td>algún lateral es infinito (asíntota vertical)</td><td>$\frac1x$ en $x=0$</td></tr>
      <tr><td>Esencial</td><td>algún lateral no existe</td><td>$\sin\frac1x$ en $x=0$</td></tr></table></div>
      Se llama "evitable" porque basta redefinir $f(a)$ como el valor del límite para que sea continua.`),
    H('Propiedades de las funciones continuas', R`<b>Teorema de Bolzano</b>: si $f$ es continua en $[a,b]$ y $f(a)$ y $f(b)$ tienen signos distintos, existe al menos un $c\in(a,b)$ con $f(c)=0$.
      <div class="ej"><b>Ejemplo resuelto.</b> $x^3+x-3=0$ tiene una raíz en $(1,2)$: $f(1)=-1<0$ y $f(2)=7>0$. Partiendo el intervalo por la mitad varias veces (<b>bisección</b>): $f(1{,}5)>0\Rightarrow(1;1{,}5)$; $f(1{,}25)>0\Rightarrow(1;1{,}25)$; $f(1{,}125)<0\Rightarrow(1{,}125;\ 1{,}25)$… La raíz es $x\approx1{,}213$.</div>
      <b>Valores intermedios</b>: una función continua en $[a,b]$ toma todos los valores entre $f(a)$ y $f(b)$. <b>Weierstrass</b>: una función continua en un intervalo cerrado alcanza un máximo y un mínimo absolutos.
      <p>¡Ojo! Si no es continua, Bolzano no sirve: $\frac1x$ cambia de signo en $[-1,1]$ pero nunca vale 0.</p>`)
  ];
  PR.limites = [
    G('Concepto y laterales'),
    P('Con una tabla', R`Estima con una tabla de valores $\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}$.`, R`$x=1{,}9\to3{,}9$; $1{,}99\to3{,}99$; $2{,}01\to4{,}01$; $2{,}1\to4{,}1$. El límite es 4 (simplificando: $x+2\to4$).`),
    P('Laterales', R`a) $f(x)=\begin{cases}x+1 & x<1\\3-x & x\ge1\end{cases}$ en $x=1$. &nbsp; b) $g(x)=\dfrac{|x|}x$ en $x=0$.`, R`a) $2$ por los dos lados: el límite es 2. <br>b) $-1$ y $1$: no existe.`),
    P('Sustitución directa', R`a) $\lim_{x\to2}(x^3-2x+1)$ &nbsp; b) $\lim_{x\to0}(e^x+\cos x)$ &nbsp; c) $\lim_{x\to3}\sqrt{x+6}$`, R`a) 5 &nbsp; b) 2 &nbsp; c) 3`),
    P('Del tipo k/0', R`a) $\displaystyle\lim_{x\to2}\frac{x+1}{x-2}$ &nbsp; b) $\displaystyle\lim_{x\to-1}\frac1{(x+1)^2}$`, R`a) Por la izquierda $-\infty$, por la derecha $+\infty$: no existe (asíntota vertical). <br>b) $+\infty$ por los dos lados.`),
    G('Indeterminaciones'),
    P('∞/∞', R`a) $\lim\frac{3x^2-x}{2x^2+5}$ b) $\lim\frac{x+1}{x^2-3}$ c) $\lim\frac{x^3-1}{x^2+x}$ d) $\lim\frac{2x-1}{\sqrt{x^2+3}}$ (todos con $x\to+\infty$)`, R`a) $\frac32$ b) 0 c) $+\infty$ d) 2 (la raíz es "de grado 1").`),
    P('0/0 factorizando', R`a) $\lim_{x\to2}\frac{x^2-5x+6}{x^2-4}$ b) $\lim_{x\to1}\frac{x^3-1}{x-1}$ c) $\lim_{x\to1}\frac{x^2+x-2}{x^2-1}$`, R`a) $\frac{x-3}{x+2}\to-\frac14$ b) $x^2+x+1\to3$ c) $\frac{x+2}{x+1}\to\frac32$`),
    P('0/0 con raíces', R`a) $\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}$ &nbsp; b) $\lim_{x\to9}\frac{x-9}{\sqrt x-3}$`, R`a) $\frac1{\sqrt{x+4}+2}\to\frac14$ &nbsp; b) $\sqrt x+3\to6$`),
    P('∞ − ∞', R`a) $\lim_{x\to1}\left(\frac1{x-1}-\frac2{x^2-1}\right)$ b) $\lim_{x\to\infty}\left(\sqrt{x^2+4x}-x\right)$ c) $\lim_{x\to\infty}\left(\sqrt{x^2+x}-\sqrt{x^2-x}\right)$`, R`a) $\frac1{x+1}\to\frac12$ b) $\frac{4x}{\sqrt{x^2+4x}+x}\to2$ c) $\frac{2x}{\sqrt{x^2+x}+\sqrt{x^2-x}}\to1$`),
    P('1 elevado a infinito', R`a) $\lim\left(1+\frac3x\right)^{2x}$ b) $\lim\left(\frac{x+2}{x-1}\right)^x$ c) $\lim\left(\frac{2x+1}{2x-3}\right)^{x+1}$ (con $x\to\infty$)`, R`a) $e^6$ b) $e^{\lim x\cdot\frac{3}{x-1}}=e^3$ c) $e^{\lim(x+1)\frac{4}{2x-3}}=e^2$`),
    G('Asíntotas'),
    P('Halla las asíntotas', R`a) $\frac{2x^2+3}{x^2-1}$ b) $\frac{x^2}{x-2}$ c) $\frac{3x}{x^2+1}$ d) $e^x$`, R`a) Verticales $x=\pm1$; horizontal $y=2$. b) Vertical $x=2$; oblicua $y=x+2$. c) Horizontal $y=0$. d) Horizontal $y=0$ cuando $x\to-\infty$.`),
    P('Posición respecto de la asíntota', R`Estudia la posición de $f(x)=\frac{2x+1}{x-1}$ respecto de su asíntota horizontal.`, R`$y=2$. $f(x)-2=\frac3{x-1}$: por encima cuando $x\to+\infty$ y por debajo cuando $x\to-\infty$.`),
    G('Continuidad'),
    P('Un parámetro', R`Halla $a$ para que $f(x)=\begin{cases}x^2+a & x\le2\\ax-1 & x>2\end{cases}$ sea continua.`, R`$4+a=2a-1\Rightarrow a=5$.`),
    P('Dos parámetros', R`Halla $a$ y $b$ para que sea continua $f(x)=\begin{cases}2x+a & x<1\\x^2+bx & 1\le x\le3\\12 & x>3\end{cases}$`, R`En 3: $9+3b=12\Rightarrow b=1$. En 1: $2+a=1+b=2\Rightarrow a=0$.`),
    P('Clasifica las discontinuidades', R`a) $\frac{x^2-1}{x^2-x}$ &nbsp; b) $\begin{cases}x+1 & x<0\\x^2 & x\ge0\end{cases}$`, R`a) Evitable en $x=1$ (límite 2) y de salto infinito en $x=0$. b) Salto finito en $x=0$ (laterales 1 y 0).`),
    P('Bolzano y bisección', R`Demuestra que $x^3+x-3=0$ tiene una raíz en $(1,2)$ y acércate a ella con tres pasos de bisección.`, R`$f(1)=-1$, $f(2)=7$. $f(1{,}5)=1{,}875>0$, $f(1{,}25)\approx0{,}20>0$, $f(1{,}125)\approx-0{,}45<0$: la raíz está en $(1{,}125;\ 1{,}25)$ (es $\approx1{,}213$).`),
    P('¿Se puede aplicar Bolzano?', R`$f(x)=\frac1x$ en $[-1,1]$: $f(-1)<0$ y $f(1)>0$. ¿Tiene una raíz?`, R`No. No es continua en $x=0$, así que Bolzano no se puede aplicar, y de hecho $\frac1x$ nunca vale 0.`)
  ];

  /* ============================== DERIVADAS ============================== */
  TH.derivadas = [
    H('Tasa de variación media', R`La <b>TVM</b> de $f$ en $[a,b]$ mide cuánto cambia $f$ por cada unidad de $x$:
      <div class="ej">$TVM[a,b]=\dfrac{f(b)-f(a)}{b-a}$</div>
      Es la pendiente de la recta <b>secante</b> que une $(a,f(a))$ y $(b,f(b))$. Si $f$ es una posición y $x$ el tiempo, es la <b>velocidad media</b>.
      <div class="ej"><b>Ejemplo resuelto.</b> $f(x)=x^2-3x$: $TVM[1,4]=\frac{4-(-2)}{3}=2$; $\ TVM[1;1{,}1]=\frac{-2{,}09-(-2)}{0{,}1}=-0{,}9$.</div>`),
    H('Tasa instantánea y derivada en un punto', R`Si hacemos el intervalo cada vez más pequeño, la TVM se acerca a la <b>tasa de variación instantánea</b>, que es la <b>derivada</b>:
      <div class="ej">$f'(a)=\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$</div>
      <div class="ej"><b>Ejemplo resuelto.</b> $f(x)=3x^2-x$ en $a=1$: $\dfrac{3(1+h)^2-(1+h)-2}{h}=\dfrac{5h+3h^2}{h}=5+3h\to5$. Así que $f'(1)=5$.</div>
      En el ejemplo de la TVM, $TVM[1;1{,}1]=-0{,}9$ ya estaba muy cerca de $f'(1)=-1$. Mueve $h$ en la herramienta para verlo.`),
    H('Interpretación geométrica: tangente y normal', R`$f'(a)$ es la <b>pendiente de la recta tangente</b> a la gráfica en $(a,f(a))$:
      <div class="ej">Tangente: $y-f(a)=f'(a)(x-a)\qquad$ Normal (perpendicular): $y-f(a)=-\dfrac1{f'(a)}(x-a)$</div>
      <div class="ej"><b>Ejemplo resuelto.</b> $f(x)=x^2-4x+3$ en $x=1$: $f(1)=0$, $f'(x)=2x-4$, $f'(1)=-2$. Tangente $y=-2x+2$; normal $y=\frac12x-\frac12$.</div>
      Si $f'(a)>0$ la función crece en ese punto, si $f'(a)<0$ decrece, y si $f'(a)=0$ la tangente es horizontal.`),
    H('Derivadas laterales y derivabilidad', R`Las <b>derivadas laterales</b> se calculan con $h\to0^-$ y $h\to0^+$. La función es <b>derivable</b> en $a$ si existen y son iguales.
      <p>Toda función derivable es continua, pero no al revés: $|x|$ es continua en 0 y no es derivable (derivadas laterales $-1$ y $1$: la gráfica tiene un <b>pico</b>).</p>
      <div class="ej"><b>Ejemplo resuelto.</b> ¿Es derivable $f(x)=\begin{cases}x^2 & x\le1\\2x-1 & x>1\end{cases}$ en $x=1$? Continua: $1=1$ ✓. Derivadas: por la izquierda $2x\to2$, por la derecha $2$. Sí es derivable.</div>`),
    H('Función derivada y derivadas sucesivas', R`La <b>función derivada</b> $f'(x)$ da la derivada en cada punto. Derivándola otra vez se obtienen la segunda $f''$, la tercera $f'''$… $\ $Para $f(x)=x^4-2x^3$: $f'=4x^3-6x^2$, $f''=12x^2-12x$, $f'''=24x-12$.`),
    H('Tabla de derivadas', R`<div class="tbl"><table>
      <tr><th>Función</th><th>Derivada</th><th>Con la regla de la cadena</th></tr>
      <tr><td>$k$</td><td>$0$</td><td></td></tr>
      <tr><td>$x^n$</td><td>$nx^{n-1}$</td><td>$(f^n)'=n\,f^{n-1}f'$</td></tr>
      <tr><td>$\sqrt x$</td><td>$\frac1{2\sqrt x}$</td><td>$(\sqrt f)'=\frac{f'}{2\sqrt f}$</td></tr>
      <tr><td>$e^x$</td><td>$e^x$</td><td>$(e^f)'=f'e^f$</td></tr>
      <tr><td>$a^x$</td><td>$a^x\ln a$</td><td>$(a^f)'=f'a^f\ln a$</td></tr>
      <tr><td>$\ln x$</td><td>$\frac1x$</td><td>$(\ln f)'=\frac{f'}f$</td></tr>
      <tr><td>$\log_ax$</td><td>$\frac1{x\ln a}$</td><td>$(\log_af)'=\frac{f'}{f\ln a}$</td></tr>
      <tr><td>$\sin x$</td><td>$\cos x$</td><td>$(\sin f)'=f'\cos f$</td></tr>
      <tr><td>$\cos x$</td><td>$-\sin x$</td><td>$(\cos f)'=-f'\sin f$</td></tr>
      <tr><td>$\tan x$</td><td>$\frac1{\cos^2x}=1+\tan^2x$</td><td>$(\tan f)'=\frac{f'}{\cos^2f}$</td></tr></table></div>`),
    H('Reglas de derivación', R`<div class="tbl"><table>
      <tr><td>Suma</td><td>$(f\pm g)'=f'\pm g'$</td></tr>
      <tr><td>Por una constante</td><td>$(k\,f)'=k\,f'$</td></tr>
      <tr><td>Producto</td><td>$(f\cdot g)'=f'g+fg'$</td></tr>
      <tr><td>Cociente</td><td>$\left(\dfrac fg\right)'=\dfrac{f'g-fg'}{g^2}$</td></tr>
      <tr><td>Regla de la cadena</td><td>$\big(f(g(x))\big)'=f'(g(x))\cdot g'(x)$</td></tr></table></div>
      <div class="ej"><b>Ejemplo resuelto.</b> $\left(\dfrac{2x+1}{x-3}\right)'=\dfrac{2(x-3)-(2x+1)\cdot1}{(x-3)^2}=\dfrac{-7}{(x-3)^2}$. <br>$\big(\ln(x^2+4)\big)'=\dfrac{2x}{x^2+4}$ (la de fuera es $\ln$, la de dentro $x^2+4$).</div>
      Consejo: antes de derivar, simplifica. $\frac3{x^2}=3x^{-2}$ se deriva como potencia: $-6x^{-3}$.`),
    H('Interpretación física', R`Si $s(t)$ es la posición de un móvil, la <b>velocidad</b> es $v(t)=s'(t)$ y la <b>aceleración</b> $a(t)=v'(t)=s''(t)$.
      <div class="ej"><b>Ejemplo resuelto.</b> Lanzamos una pelota hacia arriba: $h(t)=20t-5t^2$ (m). $v(t)=20-10t$. Sube mientras $v>0$ y alcanza la altura máxima cuando $v=0$: $t=2$ s, $h=20$ m. Vuelve al suelo en $t=4$ s con $v=-20$ m/s.</div>`),
    H('Crecimiento y decrecimiento', R`Si $f'(x)>0$ en un intervalo, $f$ es <b>creciente</b> en él; si $f'(x)<0$, <b>decreciente</b>.
      <p><b>Método</b>: 1) dominio; 2) $f'(x)$; 3) puntos donde $f'=0$ o no existe; 4) tabla de signos de $f'$ en cada trozo.</p>
      <div class="ej"><b>Ejemplo resuelto.</b> $f(x)=x^3-6x^2+9x+1$: $f'(x)=3(x-1)(x-3)$. Positiva en $(-\infty,1)$, negativa en $(1,3)$, positiva en $(3,\infty)$. Crece, decrece y vuelve a crecer.</div>`),
    H('Máximos y mínimos', R`En un <b>máximo relativo</b> la función pasa de crecer a decrecer; en un <b>mínimo</b>, al revés. Allí $f'(a)=0$ (o $f'$ no existe). Dos criterios:
      <ul><li><b>Signo de $f'$</b>: si cambia de $+$ a $-$, máximo; de $-$ a $+$, mínimo.</li>
      <li><b>Segunda derivada</b>: si $f'(a)=0$ y $f''(a)<0$, máximo; si $f''(a)>0$, mínimo.</li></ul>
      En el ejemplo anterior: máximo $(1,5)$ y mínimo $(3,1)$. <br>Los <b>extremos absolutos</b> en un intervalo cerrado $[a,b]$ se buscan comparando $f$ en los extremos del intervalo y en los puntos con $f'=0$.`),
    H('Curvatura y puntos de inflexión', R`Si $f''>0$ la gráfica tiene forma de $\cup$ (<b>convexa</b>); si $f''<0$, forma de $\cap$ (<b>cóncava</b>). Donde cambia la curvatura hay un <b>punto de inflexión</b> ($f''=0$ y cambia de signo).
      <div class="ej">$f(x)=x^4-6x^2$: $f''(x)=12x^2-12$. Convexa en $(-\infty,-1)\cup(1,\infty)$, cóncava en $(-1,1)$. Inflexión en $(\pm1,-5)$.</div>
      (Algunos libros usan "cóncava" y "convexa" al revés: fíjate en el dibujo $\cup$ / $\cap$).`),
    H('Optimización', R`Para maximizar o minimizar algo: 1) dibuja y nombra las variables; 2) escribe la función a optimizar; 3) usa la condición del enunciado para dejarla con <b>una sola variable</b>; 4) deriva e iguala a 0; 5) comprueba que es máximo o mínimo y que la solución tiene sentido.
      <div class="ej"><b>Ejemplo resuelto.</b> De una cartulina de 12×12 cm cortamos un cuadrado de lado $x$ en cada esquina para hacer una caja sin tapa. $V(x)=x(12-2x)^2$. $V'(x)=(12-2x)(12-6x)=0\Rightarrow x=2$ ($x=6$ da volumen 0). Volumen máximo $V(2)=128$ cm³.</div>`),
    H('Representación de funciones', R`Pasos: dominio · simetrías · cortes con los ejes · asíntotas · crecimiento y extremos · curvatura e inflexión · tabla de valores si hace falta · dibujo.
      <div class="ej"><b>Ejemplo resuelto.</b> $f(x)=x^3-3x^2$. Dominio $\mathbb R$, sin simetría. Cortes: $x^2(x-3)=0\Rightarrow(0,0),(3,0)$. Sin asíntotas. $f'=3x(x-2)$: máximo $(0,0)$, mínimo $(2,-4)$. $f''=6x-6$: inflexión $(1,-2)$.</div>`),
    H('Aplicaciones en economía', R`Si $C(q)$ es el coste de producir $q$ unidades, $C'(q)$ es el <b>coste marginal</b>: lo que cuesta, aproximadamente, producir una unidad más. Con ingresos $I(q)$, el <b>beneficio</b> es $B(q)=I(q)-C(q)$ y es máximo donde $B'(q)=0$ y $B''(q)<0$.
      <div class="ej"><b>Ejemplo resuelto.</b> $I(q)=50q-q^2$ y $C(q)=10q+100$. $B(q)=-q^2+40q-100$, $B'(q)=-2q+40=0\Rightarrow q=20$ unidades, con beneficio máximo $B(20)=300$.</div>`)
  ];
  PR.derivadas = [
    G('Tasa de variación y definición'),
    P('TVM', R`Para $f(x)=x^2-3x$ calcula la TVM en $[1,4]$ y en $[1;\,1{,}1]$. ¿A qué valor se acerca?`, R`$2$ y $-0{,}9$. Se acerca a $f'(1)=-1$.`),
    P('Por la definición', R`a) $f(x)=3x^2-x$ en $x=1$ &nbsp; b) $f(x)=\frac1x$ en $x=2$ &nbsp; c) $f(x)=\sqrt x$ en $x=4$`, R`a) $\frac{5h+3h^2}h\to5$. <br>b) $\frac{-1}{2(2+h)}\to-\frac14$. <br>c) Conjugado: $\frac1{\sqrt{4+h}+2}\to\frac14$.`),
    G('Reglas de derivación'),
    P('Potencias', R`a) $4x^5-3x^2+7$ b) $\frac3{x^2}$ c) $\sqrt[3]{x^2}$ d) $5\sqrt x$`, R`a) $20x^4-6x$ b) $-\frac6{x^3}$ c) $\frac2{3\sqrt[3]x}$ d) $\frac5{2\sqrt x}$`),
    P('Producto y cociente', R`a) $x^2e^x$ b) $x\ln x$ c) $\frac{2x+1}{x-3}$ d) $\frac{\sin x}x$ e) $\frac{x^2-1}{x^2+1}$`, R`a) $(2x+x^2)e^x$ b) $\ln x+1$ c) $\frac{-7}{(x-3)^2}$ d) $\frac{x\cos x-\sin x}{x^2}$ e) $\frac{4x}{(x^2+1)^2}$`),
    P('Regla de la cadena', R`a) $(x^2-3x)^5$ b) $\sqrt{1-x^2}$ c) $e^{x^2+1}$ d) $\ln(x^2+4)$ e) $\sin(3x-1)$ f) $\cos^2x$ g) $\tan(x^2)$ h) $2^{3x}$ i) $\ln\frac{x+1}{x-1}$`, R`a) $5(x^2-3x)^4(2x-3)$ b) $\frac{-x}{\sqrt{1-x^2}}$ c) $2xe^{x^2+1}$ d) $\frac{2x}{x^2+4}$ e) $3\cos(3x-1)$ f) $-2\sin x\cos x=-\sin2x$ g) $\frac{2x}{\cos^2(x^2)}$ h) $3\cdot2^{3x}\ln2$ i) $\frac1{x+1}-\frac1{x-1}=\frac{-2}{x^2-1}$`),
    P('Derivadas sucesivas', R`Calcula hasta la tercera derivada de $x^4-2x^3$ y la derivada $n$-ésima de $e^{2x}$.`, R`$4x^3-6x^2$, $12x^2-12x$, $24x-12$. $\ (e^{2x})^{(n)}=2^ne^{2x}$.`),
    G('Tangente, derivabilidad y física'),
    P('Tangente y normal', R`Tangente y normal a $f(x)=x^2-4x+3$ en $x=1$.`, R`Tangente $y=-2x+2$; normal $y=\frac x2-\frac12$.`),
    P('Tangentes horizontales', R`¿En qué puntos de $y=x^3-3x$ la tangente es horizontal?`, R`$3x^2-3=0\Rightarrow x=\pm1$: $(1,-2)$ y $(-1,2)$.`),
    P('Derivabilidad', R`a) ¿Es derivable $\begin{cases}x^2 & x\le1\\2x-1 & x>1\end{cases}$ en $x=1$? b) ¿Y $|x-2|$ en $x=2$?`, R`a) Sí: continua y derivadas laterales iguales a 2. <br>b) No: derivadas laterales $-1$ y $1$.`),
    P('Parámetros', R`Halla $a$ y $b$ para que $f(x)=\begin{cases}ax^2+1 & x\le1\\bx+3 & x>1\end{cases}$ sea derivable.`, R`Continua: $a+1=b+3$. Derivable: $2a=b$. Entonces $a=-2$, $b=-4$.`),
    P('Lanzamiento vertical', R`$h(t)=20t-5t^2$. Velocidad al segundo, altura máxima y velocidad al llegar al suelo.`, R`$v(1)=10$ m/s. Altura máxima 20 m (en $t=2$). Llega al suelo en $t=4$ con $v=-20$ m/s.`),
    G('Monotonía, extremos y curvatura'),
    P('Polinómica', R`Monotonía y extremos de $f(x)=x^3-6x^2+9x+1$.`, R`Crece en $(-\infty,1)\cup(3,\infty)$, decrece en $(1,3)$. Máximo $(1,5)$, mínimo $(3,1)$.`),
    P('Racional', R`Monotonía y extremos de $f(x)=\frac{x^2}{x-1}$.`, R`$f'(x)=\frac{x(x-2)}{(x-1)^2}$. Crece en $(-\infty,0)\cup(2,\infty)$, decrece en $(0,1)\cup(1,2)$. Máximo $(0,0)$, mínimo $(2,4)$.`),
    P('Extremos absolutos', R`Máximo y mínimo absolutos de $f(x)=x^2-4x+1$ en $[0,3]$.`, R`$f(0)=1$, $f(2)=-3$, $f(3)=-2$. Máximo absoluto 1 (en $x=0$) y mínimo absoluto $-3$ (en $x=2$).`),
    P('Curvatura', R`Curvatura e inflexión de $f(x)=x^4-6x^2$.`, R`Convexa ($\cup$) en $(-\infty,-1)\cup(1,\infty)$, cóncava ($\cap$) en $(-1,1)$. Inflexión $(\pm1,-5)$.`),
    P('Representa', R`Representa $f(x)=x^3-3x^2$.`, R`Cortes $(0,0)$ y $(3,0)$; máximo $(0,0)$; mínimo $(2,-4)$; inflexión $(1,-2)$.`),
    G('Optimización y economía'),
    P('La caja', R`De una cartulina de 12×12 cm se cortan cuadrados de lado $x$ en las esquinas para hacer una caja sin tapa. ¿Qué $x$ da volumen máximo?`, R`$V=x(12-2x)^2$: $x=2$ cm, $V=128$ cm³.`),
    P('Suma mínima', R`Dos números positivos tienen producto 16. ¿Cuáles tienen suma mínima?`, R`$S(x)=x+\frac{16}x$, $S'=1-\frac{16}{x^2}=0\Rightarrow x=4$: 4 y 4.`),
    P('La ventana', R`Una ventana rectangular tiene 6 m de perímetro. ¿Qué medidas dan más luz (área máxima)?`, R`$A=x(3-x)$, $x=1{,}5$: un cuadrado de 1,5 m (2,25 m²).`),
    P('Valla junto al río', R`Con 40 m de valla cercamos un terreno rectangular junto a un río (ese lado no lleva valla). ¿Área máxima?`, R`$A(x)=x(40-2x)$: $x=10$, lados 10 y 20 m, 200 m².`),
    P('Beneficio máximo', R`$I(q)=50q-q^2$ y $C(q)=10q+100$. ¿Qué producción da beneficio máximo?`, R`$B=-q^2+40q-100$: $q=20$, $B=300$.`),
    P('Coste marginal', R`$C(q)=q^3-6q^2+15q$. Calcula el coste marginal para $q=4$. Y si el coste medio es $q^2-10q+50$, ¿qué producción lo hace mínimo?`, R`$C'(4)=48-48+15=15$. Coste medio mínimo en $q=5$ (vale 25).`)
  ];

  /* ============================= ESTADÍSTICA ============================= */
  TH.estadistica = [
    H('El método estadístico', R`La estadística recoge, organiza y analiza datos para sacar conclusiones. <b>Población</b>: todos los individuos que queremos estudiar. <b>Muestra</b>: la parte que realmente estudiamos; debe ser <b>representativa</b> (elegida al azar y de tamaño suficiente). Fases: plantear la pregunta, recoger datos, organizarlos en tablas y gráficos, calcular parámetros e interpretar.`),
    H('Tipos de variables', R`<div class="tbl"><table>
      <tr><th>Tipo</th><th>Ejemplo</th></tr>
      <tr><td>Cualitativa nominal</td><td>deporte favorito, color de ojos</td></tr>
      <tr><td>Cualitativa ordinal</td><td>talla S/M/L, nivel de satisfacción</td></tr>
      <tr><td>Cuantitativa discreta</td><td>nº de hermanos, nº de mensajes (valores aislados)</td></tr>
      <tr><td>Cuantitativa continua</td><td>altura, tiempo (cualquier valor de un intervalo)</td></tr></table></div>`),
    H('Tablas de frecuencias', R`<b>Ejemplo resuelto.</b> Número de hermanos de 20 alumnos:
      <div class="tbl"><table><tr><th>$x_i$</th><th>$f_i$</th><th>$F_i$</th><th>$h_i$</th><th>$H_i$</th><th>$f_ix_i$</th><th>$f_ix_i^2$</th></tr>
      <tr><td>0</td><td>3</td><td>3</td><td>0,15</td><td>0,15</td><td>0</td><td>0</td></tr>
      <tr><td>1</td><td>7</td><td>10</td><td>0,35</td><td>0,50</td><td>7</td><td>7</td></tr>
      <tr><td>2</td><td>6</td><td>16</td><td>0,30</td><td>0,80</td><td>12</td><td>24</td></tr>
      <tr><td>3</td><td>3</td><td>19</td><td>0,15</td><td>0,95</td><td>9</td><td>27</td></tr>
      <tr><td>4</td><td>1</td><td>20</td><td>0,05</td><td>1</td><td>4</td><td>16</td></tr>
      <tr><th>Total</th><td>20</td><td></td><td>1</td><td></td><td>32</td><td>74</td></tr></table></div>
      $f_i$ absoluta, $F_i$ absoluta acumulada, $h_i=\frac{f_i}N$ relativa (multiplicada por 100, el %), $H_i$ relativa acumulada. Las columnas $f_ix_i$ y $f_ix_i^2$ sirven para la media y la varianza.
      <p>Con muchos valores o variables continuas se <b>agrupan en intervalos</b> y se usa la <b>marca de clase</b> (el punto medio de cada intervalo) como $x_i$.</p>`),
    H('Gráficos', R`<ul><li><b>Diagrama de barras</b>: cualitativas y discretas.</li>
      <li><b>Histograma</b>: datos agrupados; rectángulos pegados cuya área es proporcional a la frecuencia. El <b>polígono de frecuencias</b> une los puntos medios de sus techos.</li>
      <li><b>Sectores</b>: cada sector mide $h_i\cdot360^\circ$.</li>
      <li><b>Diagrama de caja</b>: dibuja mínimo, $Q_1$, mediana, $Q_3$ y máximo.</li></ul>`),
    H('Parámetros de centralización y posición', R`<b>Media</b> $\bar x=\dfrac{\sum f_ix_i}{N}$. <b>Moda</b>: el valor más repetido. <b>Mediana</b>: el valor central de los datos ordenados (el primero cuya $F_i$ supera $\frac N2$; si alguna $F_i$ es justo $\frac N2$, la media de ese valor y el siguiente). <b>Cuartiles</b> $Q_1,Q_2,Q_3$: dejan por debajo el 25 %, 50 % y 75 % (se buscan igual, con $\frac N4$ y $\frac{3N}4$).
      <div class="ej"><b>En el ejemplo de los hermanos.</b> $\bar x=\frac{32}{20}=1{,}6$. Moda 1. $\frac N2=10$ y $F=10$ justo en $x=1$: mediana $\frac{1+2}2=1{,}5$. $\frac N4=5$: $Q_1=1$. $\frac{3N}4=15$: $Q_3=2$.</div>`),
    H('Parámetros de dispersión', R`Dicen si los datos están juntos o separados. <b>Rango</b> $=$ máx $-$ mín; <b>rango intercuartílico</b> $=Q_3-Q_1$.
      <div class="ej">$\sigma^2=\dfrac{\sum f_ix_i^2}{N}-\bar x^2\qquad\sigma=\sqrt{\sigma^2}\qquad CV=\dfrac{\sigma}{\bar x}$</div>
      <div class="ej"><b>En el ejemplo.</b> $\sigma^2=\frac{74}{20}-1{,}6^2=1{,}14$, $\sigma\approx1{,}07$, $CV\approx0{,}67$.</div>
      El <b>coeficiente de variación</b> no tiene unidades y permite comparar la dispersión de datos con medias distintas (pesos en kg y alturas en cm, por ejemplo). En muchas distribuciones, la mayoría de datos está en $\bar x\pm\sigma$.`),
    H('Estadística bidimensional: tablas de contingencia', R`Estudiamos dos variables a la vez. En una <b>tabla de doble entrada</b> aparecen las frecuencias <b>conjuntas</b> $f_{ij}$; los totales de filas y columnas son las frecuencias <b>marginales</b>; y las de una variable dentro de un valor de la otra, las <b>condicionadas</b>.
      <div class="tbl"><table><tr><th></th><th>Fuma</th><th>No fuma</th><th>Total</th></tr>
      <tr><th>Hombres</th><td>30</td><td>60</td><td>90</td></tr><tr><th>Mujeres</th><td>22</td><td>88</td><td>110</td></tr><tr><th>Total</th><td>52</td><td>148</td><td>200</td></tr></table></div>
      Fuman el $\frac{52}{200}=26\,\%$ del total, pero el $\frac{30}{90}\approx33\,\%$ de los hombres y el $\frac{22}{110}=20\,\%$ de las mujeres. Las condicionadas no coinciden con la marginal: las variables <b>no son independientes</b>. Serían independientes si $\frac{f_{ij}}N=\frac{f_{i\cdot}}N\cdot\frac{f_{\cdot j}}N$ en todas las casillas.`),
    H('Nube de puntos y covarianza', R`Con datos numéricos $(x_i,y_i)$ se dibuja la <b>nube de puntos</b> (diagrama de dispersión). Si los puntos suben, la relación es positiva; si bajan, negativa; si no se ve forma, no hay relación lineal.
      <div class="ej">Covarianza: $\sigma_{xy}=\dfrac{\sum x_iy_i}{N}-\bar x\,\bar y$</div>
      Su signo indica el sentido de la relación, pero su valor depende de las unidades. Para medir la fuerza se usa la correlación.`),
    H('Correlación y rectas de regresión', R`<div class="ej">$r=\dfrac{\sigma_{xy}}{\sigma_x\,\sigma_y}\qquad-1\le r\le1$</div>
      Cerca de $1$: relación lineal fuerte y positiva; cerca de $-1$, fuerte y negativa; cerca de 0, débil o nula.
      <p><b>Recta de regresión de $y$ sobre $x$</b> (para predecir $y$): $\ y-\bar y=\dfrac{\sigma_{xy}}{\sigma_x^2}(x-\bar x)$. <br><b>De $x$ sobre $y$</b> (para predecir $x$): $\ x-\bar x=\dfrac{\sigma_{xy}}{\sigma_y^2}(y-\bar y)$.</p>
      Las dos pasan por $(\bar x,\bar y)$ y el producto de sus pendientes $\frac{\sigma_{xy}}{\sigma_x^2}\cdot\frac{\sigma_{xy}}{\sigma_y^2}$ es $r^2$.
      <div class="ej"><b>Ejemplo resuelto.</b> $x$: 2, 4, 6, 8; $y$: 3, 7, 5, 9. $\bar x=5$, $\bar y=6$, $\sigma_{xy}=\frac{136}4-30=4$, $\sigma_x^2=\sigma_y^2=5$. $r=\frac45=0{,}8$. Recta de $y$ sobre $x$: $y=0{,}8x+2$; de $x$ sobre $y$: $x=0{,}8y+0{,}2$.</div>`),
    H('Predicción y causalidad', R`La recta sirve para <b>predecir</b> si $|r|$ es alto (por ejemplo, mayor que 0,8) y el valor está dentro del rango de los datos (<b>interpolar</b>). Fuera de él (<b>extrapolar</b>) la predicción es poco fiable.
      <p><b>Correlación no implica causalidad</b>: en verano suben las ventas de helados y los ahogamientos, pero los helados no causan ahogamientos; las dos cosas dependen del calor.</p>`),
    H('Regresión cuadrática y coeficiente de determinación', R`Si la nube tiene forma de curva, se ajusta una parábola $y=ax^2+bx+c$ (<b>regresión cuadrática</b>), normalmente con la calculadora o una hoja de cálculo.
      <p>El <b>coeficiente de determinación</b> $R^2$ (en la lineal, $R^2=r^2$) indica qué parte de la variación de $y$ explica el modelo: con $r=0{,}9$, $R^2=0{,}81$, el 81 %. Cuanto más cerca de 1, mejor.</p>`)
  ];
  PR.estadistica = [
    G('Estadística unidimensional'),
    P('Tipos de variables', R`Clasifica: deporte favorito, talla de camiseta (S, M, L), número de mensajes al día, tiempo en llegar al instituto.`, R`Cualitativa nominal; cualitativa ordinal; cuantitativa discreta; cuantitativa continua.`),
    P('Tabla completa', R`Número de hermanos de 20 alumnos: 0 (3 veces), 1 (7), 2 (6), 3 (3), 4 (1). Haz la tabla y calcula media, mediana, moda, cuartiles, desviación típica y CV.`, R`$\bar x=1{,}6$; mediana 1,5; moda 1; $Q_1=1$, $Q_3=2$; $\sigma^2=1{,}14$, $\sigma\approx1{,}07$; $CV\approx0{,}67$.`),
    P('Lista de notas', R`4, 5, 5, 6, 6, 6, 7, 7, 8, 9. Calcula media, mediana, moda, rango, desviación típica y CV.`, R`Media 6,3; mediana 6; moda 6; rango 5; $\sigma\approx1{,}42$; $CV\approx0{,}23$.`),
    P('Datos agrupados', R`$[0,10)$: 5; $[10,20)$: 8; $[20,30)$: 7. Calcula la media, la desviación típica y el intervalo modal.`, R`Marcas 5, 15, 25: $\bar x=16$, $\sigma^2=59$, $\sigma\approx7{,}68$. Intervalo modal $[10,20)$.`),
    P('Diagrama de sectores', R`De 40 alumnos, 10 prefieren fútbol, 14 baloncesto, 6 tenis y 10 natación. ¿Cuántos grados mide cada sector?`, R`$90^\circ$, $126^\circ$, $54^\circ$ y $90^\circ$.`),
    P('Media con un dato nuevo', R`La media de 4 números es 6. Añadimos el 11. ¿Cuál es la nueva media?`, R`$\frac{24+11}5=7$.`),
    P('Comparar dispersión', R`Grupo A: media 60, $\sigma=6$. Grupo B: media 20, $\sigma=4$. ¿Cuál es relativamente más disperso?`, R`$CV_A=0{,}1$ y $CV_B=0{,}2$: el B.`),
    G('Estadística bidimensional'),
    P('Tabla de contingencia', R`De 200 personas, 90 son hombres (30 fuman) y 110 mujeres (22 fuman). ¿Qué porcentaje fuma en total, entre los hombres y entre las mujeres? ¿Son independientes?`, R`26 %, 33,3 % y 20 %. No son independientes.`),
    P('Independencia', R`Hombres: 20 fuman y 30 no. Mujeres: 20 fuman y 30 no. ¿Son independientes sexo y fumar?`, R`Sí: en los dos grupos fuma el 40 %, igual que en el total.`),
    P('Regresión (I)', R`$x$: 2, 4, 6, 8; $y$: 3, 7, 5, 9. Calcula $r$ y las dos rectas de regresión.`, R`$r=0{,}8$. $y=0{,}8x+2$ y $x=0{,}8y+0{,}2$ (el producto de pendientes es $0{,}64=r^2$).`),
    P('Regresión (II)', R`$x$: 1, 2, 3, 4, 5; $y$: 10, 8, 7, 4, 1. Calcula $r$ y la recta de $y$ sobre $x$.`, R`$\sigma_{xy}=-4{,}4$, $r\approx-0{,}98$, $y=-2{,}2x+12{,}6$.`),
    P('Desde las rectas', R`Las rectas de regresión son $y=0{,}5x+3$ y $x=1{,}2y-1$. Halla $\bar x$, $\bar y$ y $r$.`, R`Se cortan en $(\bar x,\bar y)=(6{,}5;\ 6{,}25)$. $r^2=0{,}5\cdot1{,}2=0{,}6$, $r\approx0{,}77$ (positivo porque las pendientes lo son).`),
    P('Fiabilidad', R`Con $r=0{,}3$, ¿es fiable predecir con la recta de regresión? ¿Y con $r=-0{,}95$?`, R`Con 0,3 no (relación débil). Con $-0{,}95$ sí, dentro del rango de los datos.`),
    P('Coeficiente de determinación', R`Si $r=0{,}9$, ¿qué porcentaje de la variación de $y$ explica la recta?`, R`$R^2=0{,}81$: el 81 %.`),
    P('Causalidad', R`En verano se venden más helados y hay más ahogamientos. ¿Los helados causan ahogamientos?`, R`No: hay una tercera variable (el calor) que influye en las dos.`)
  ];

  /* ===================== EJERCICIOS DE EXAMEN (1 punto) ===================== */
  // EX.tema = [examen1, examen2, examen3]; cada examen añade ejercicios a los que ya tenía hasta llegar a 10.
  const E = (e, s) => ({ p: 1, e, s });
  const EX = {};

  EX.reales = [
    [
      E(R`Halla la fracción generatriz de $1{,}2\overline{45}$ y de $0{,}\overline{36}$.`, R`$\frac{1245-12}{990}=\frac{1233}{990}=\frac{137}{110}$ y $\frac{36}{99}=\frac4{11}$.`),
      E(R`Simplifica $(x^3y^{-2})^2\cdot(x^{-1}y)^3$.`, R`$x^6y^{-4}\cdot x^{-3}y^3=\dfrac{x^3}{y}$.`),
      E(R`Calcula $\sqrt{50}+\sqrt{18}-2\sqrt8$.`, R`$5\sqrt2+3\sqrt2-4\sqrt2=4\sqrt2$.`),
      E(R`Calcula $\log_2\frac18+\log_381-\log0{,}01$.`, R`$-3+4-(-2)=3$.`)
    ],
    [
      E(R`Resuelve $|2x-3|\le5$ y escribe el entorno $E(1,2)$ como intervalo.`, R`$-5\le2x-3\le5\Rightarrow[-1,4]$. $\ E(1,2)=(-1,3)$.`),
      E(R`Simplifica $\dfrac{4^3\cdot9^2}{6^4\cdot2}$.`, R`$\dfrac{2^6\cdot3^4}{2^4\cdot3^4\cdot2}=2$.`),
      E(R`Racionaliza $\dfrac3{2\sqrt3}$ y $\dfrac1{\sqrt7+\sqrt5}$.`, R`$\dfrac{\sqrt3}2$ y $\dfrac{\sqrt7-\sqrt5}{2}$.`),
      E(R`Resuelve $2^{2x}-5\cdot2^x+4=0$.`, R`$t=2^x$: $t^2-5t+4=0\Rightarrow t=1,4\Rightarrow x=0,\ x=2$.`)
    ],
    [
      E(R`Calcula y da el resultado en notación científica: $\dfrac{(6\cdot10^{-4})(5\cdot10^{9})}{2\cdot10^{3}}$.`, R`$\dfrac{30\cdot10^5}{2\cdot10^3}=15\cdot10^2=1{,}5\cdot10^3$.`),
      E(R`Desarrolla $\log\dfrac{x^2\sqrt y}{10z}$.`, R`$2\log x+\frac12\log y-1-\log z$.`),
      E(R`Resuelve $\log_2(x+3)-\log_2x=2$.`, R`$\frac{x+3}x=4\Rightarrow x=1$ (vale).`),
      E(R`Ordena de menor a mayor $\sqrt2$, $\sqrt[3]3$ y $\sqrt[6]{10}$.`, R`Índice 6: $\sqrt[6]8<\sqrt[6]9<\sqrt[6]{10}$, es decir, $\sqrt2<\sqrt[3]3<\sqrt[6]{10}$.`)
    ]
  ];

  EX.complejos = [
    [
      E(R`Calcula $(1-2i)^2+i^{13}$.`, R`$1-4i-4+i=-3-3i$.`),
      E(R`Pasa $z=-2+2i$ a forma polar.`, R`$r=2\sqrt2$; 2.º cuadrante, $\alpha=135^\circ$: $2\sqrt2_{135^\circ}$.`),
      E(R`Resuelve $x^2+2x+10=0$.`, R`$x=\frac{-2\pm\sqrt{-36}}2=-1\pm3i$.`)
    ],
    [
      E(R`Calcula $\dfrac{3+i}{1-i}$.`, R`$\dfrac{(3+i)(1+i)}{2}=\dfrac{2+4i}2=1+2i$.`),
      E(R`Pasa $3_{240^\circ}$ a forma binómica.`, R`$3\cos240^\circ+3i\sin240^\circ=-\frac32-\frac{3\sqrt3}2i$.`),
      E(R`Calcula $\left(2_{15^\circ}\right)^6$ en binómica.`, R`$64_{90^\circ}=64i$.`)
    ],
    [
      E(R`Halla $k$ para que $(k+i)(2-i)$ sea un número real.`, R`$(2k+1)+(2-k)i$: real si $k=2$.`),
      E(R`Halla las raíces cuadradas de $-9i$.`, R`$-9i=9_{270^\circ}$: $3_{135^\circ}$ y $3_{315^\circ}$, es decir, $\pm\left(-\frac{3\sqrt2}2+\frac{3\sqrt2}2i\right)$.`),
      E(R`Con $z_1=6_{100^\circ}$ y $z_2=3_{40^\circ}$, calcula $z_1z_2$ y $\frac{z_1}{z_2}$ (este en binómica).`, R`$18_{140^\circ}$; $\ 2_{60^\circ}=1+\sqrt3i$.`)
    ]
  ];

  EX.fin = [
    [
      E(R`Un precio sube un 10 % y después otro 10 %. ¿Qué porcentaje ha subido en total?`, R`$1{,}1^2=1{,}21$: un 21 %.`),
      E(R`Interés simple de 5000 € al 3 % anual durante 8 meses.`, R`$5000\cdot\frac{0{,}03}{12}\cdot8=100$ €.`),
      E(R`Montante de 2000 € al 5 % compuesto anual durante 4 años.`, R`$2000\cdot1{,}05^4\approx2431{,}01$ €.`)
    ],
    [
      E(R`Con un IVA del 21 % pagamos 60,50 €. ¿Cuánto costaba sin IVA?`, R`$\frac{60{,}50}{1{,}21}=50$ €.`),
      E(R`TAE de un 3 % anual con capitalización semestral.`, R`$1{,}015^2-1\approx3{,}02\,\%$.`),
      E(R`¿Cuántos años completos tardan 1000 € al 4 % compuesto en superar los 1500 €?`, R`$1{,}04^n>1{,}5\Rightarrow n>10{,}34$: 11 años.`)
    ],
    [
      E(R`Un producto costaba 120 € en 2019 y 150 € en 2024. Número índice con base 2019.`, R`$\frac{150}{120}\cdot100=125$.`),
      E(R`Ingresamos 500 € al principio de cada año durante 3 años al 2 %. ¿Capital final?`, R`$\dfrac{500\cdot1{,}02(1{,}02^3-1)}{0{,}02}\approx1560{,}80$ €.`),
      E(R`Préstamo de 10 000 € a 3 años al 5 % anual. Cuota anual.`, R`$\dfrac{10\,000\cdot0{,}05\cdot1{,}05^3}{1{,}05^3-1}\approx3672{,}09$ €.`)
    ]
  ];

  EX.algebra = [
    [
      E(R`Calcula $P(-2)$ para $P(x)=x^3-2x+4$. ¿Qué significa el resultado?`, R`$-8+4+4=0$: $x=-2$ es raíz y $(x+2)$ es factor.`),
      E(R`Desarrolla $(x-3)^3$.`, R`$x^3-9x^2+27x-27$.`),
      E(R`Divide por Ruffini $(2x^3-5x^2+3):(x-1)$.`, R`Coeficientes $2,-5,0,3$: cociente $2x^2-3x-3$, resto $0$.`),
      E(R`Factoriza $x^3-x^2-4x+4$.`, R`$x^2(x-1)-4(x-1)=(x-1)(x-2)(x+2)$.`),
      E(R`Simplifica $\dfrac{x^2-9}{x^2-6x+9}$.`, R`$\dfrac{(x-3)(x+3)}{(x-3)^2}=\dfrac{x+3}{x-3}$.`),
      E(R`Resuelve $x^4-10x^2+9=0$.`, R`$t=1,9$: $x=\pm1,\ \pm3$.`),
      E(R`Resuelve $2(x-1)-3<x+1$.`, R`$x<6$: $(-\infty,6)$.`)
    ],
    [
      E(R`Divide $(x^3+2x^2-x+3):(x^2+1)$.`, R`Cociente $x+2$, resto $-2x+1$.`),
      E(R`Halla $k$ para que $x^3-kx+6$ sea divisible por $x+2$.`, R`$P(-2)=-8+2k+6=0\Rightarrow k=1$.`),
      E(R`Opera $\dfrac x{x-1}-\dfrac1{x+1}$.`, R`$\dfrac{x(x+1)-(x-1)}{x^2-1}=\dfrac{x^2+1}{x^2-1}$.`),
      E(R`Resuelve $\dfrac3x+\dfrac2{x-1}=2$.`, R`$2x^2-7x+3=0\Rightarrow x=3,\ x=\frac12$.`),
      E(R`Resuelve $\sqrt{2x+1}=x-1$.`, R`$x^2-4x=0\Rightarrow x=0,4$. Solo vale $x=4$.`),
      E(R`Resuelve $x^2-2x-8\ge0$.`, R`$(-\infty,-2]\cup[4,\infty)$.`),
      E(R`Resuelve $\begin{cases}x-y=1\\xy=6\end{cases}$`, R`$(3,2)$ y $(-2,-3)$.`)
    ],
    [
      E(R`Halla las raíces de $2x^2-x-3$ y factorízalo.`, R`$x=-1$, $x=\frac32$: $(x+1)(2x-3)$.`),
      E(R`Halla $k$ para que una solución de $x^2-7x+k=0$ sea 2. ¿Cuál es la otra?`, R`$4-14+k=0\Rightarrow k=10$. La suma es 7: la otra es 5.`),
      E(R`Resuelve $x^3-7x+6=0$.`, R`$(x-1)(x-2)(x+3)=0$: $x=1,2,-3$.`),
      E(R`Resuelve $\dfrac{x-2}{x+3}\ge0$.`, R`$(-\infty,-3)\cup[2,\infty)$.`),
      E(R`Resuelve por Gauss: $\begin{cases}x+y-z=0\\x-y+z=2\\2x+y+z=7\end{cases}$`, R`Sumando las dos primeras, $x=1$; luego $y+z=5$ e $y-z=-1$: $(1,2,3)$.`),
      E(R`Dos números suman 20 y su producto es 96. ¿Cuáles son?`, R`$x^2-20x+96=0$: 8 y 12.`),
      E(R`Halla los vértices de la región $x+y\le5$, $x\ge1$, $y\ge0$.`, R`$(1,0)$, $(5,0)$ y $(1,4)$.`)
    ]
  ];

  EX.funciones = [
    [
      E(R`Dominio de $f(x)=\sqrt{9-x^2}$.`, R`$9-x^2\ge0$: $[-3,3]$.`),
      E(R`Dominio de $f(x)=\dfrac{x+2}{x^2-x-6}$.`, R`$x^2-x-6=(x-3)(x+2)$: $\mathbb R-\{-2,3\}$.`),
      E(R`Recorrido de $f(x)=-x^2+4x$.`, R`Vértice $(2,4)$, parábola hacia abajo: $(-\infty,4]$.`),
      E(R`¿Es par o impar $f(x)=\dfrac x{x^2+1}$?`, R`$f(-x)=\frac{-x}{x^2+1}=-f(x)$: impar.`),
      E(R`Con $f(x)=2x+1$ y $g(x)=\sqrt x$, calcula $(g\circ f)(4)$ y $(f\circ g)(x)$.`, R`$g(9)=3$; $\ 2\sqrt x+1$.`),
      E(R`Halla la inversa de $f(x)=\dfrac{x-5}2$.`, R`$f^{-1}(x)=2x+5$.`),
      E(R`Cortes con los ejes y signo de $f(x)=x^2-x-2$.`, R`$(-1,0)$, $(2,0)$, $(0,-2)$. Negativa en $(-1,2)$ y positiva fuera.`)
    ],
    [
      E(R`Dominio de $f(x)=\log(2x-6)$.`, R`$(3,\infty)$.`),
      E(R`Dominio de $f(x)=\sqrt{\dfrac{x-1}{x+2}}$.`, R`$(-\infty,-2)\cup[1,\infty)$.`),
      E(R`Halla la inversa de $f(x)=3^{x-1}$.`, R`$f^{-1}(x)=1+\log_3x$.`),
      E(R`Si $f(x)=\begin{cases}x^2 & x<1\\3-x & x\ge1\end{cases}$, calcula $f(-2)$, $f(1)$ y $f(4)$.`, R`$4$, $2$ y $-1$.`),
      E(R`Halla la recta que pasa por $(2,7)$ y $(5,16)$ y estima el valor en $x=3$.`, R`$y=3x+1$; en $x=3$, $10$.`),
      E(R`Resuelve $|x+1|=3$.`, R`$x=2$ y $x=-4$.`),
      E(R`Periodo de $\cos(3x)$ y recorrido de $2+\cos(3x)$.`, R`$\frac{2\pi}3$; $[1,3]$.`)
    ],
    [
      E(R`Dominio de $f(x)=\dfrac1{x^2+4}$.`, R`$\mathbb R$ (el denominador nunca se anula).`),
      E(R`Recorrido de $f(x)=\dfrac1{x-3}+2$.`, R`$\mathbb R-\{2\}$.`),
      E(R`Con $f(x)=x^2-1$ y $g(x)=\frac1x$, calcula $(f\circ g)(x)$ y $(g\circ f)(2)$.`, R`$\frac1{x^2}-1$; $\ \frac13$.`),
      E(R`Estudia la simetría de $x^4-x^2+1$ y de $x^3+x^2$.`, R`Par; ninguna.`),
      E(R`Halla la parábola que pasa por $(-1,6)$, $(0,3)$ y $(1,2)$.`, R`$c=3$, $a-b=3$, $a+b=-1$: $y=x^2-2x+3$.`),
      E(R`Demanda $D(p)=120-3p$ y oferta $O(p)=2p+20$. Equilibrio.`, R`$p=20$, cantidad 60.`),
      E(R`Calcula $E(3{,}9)$, $E(-0{,}5)$ y $E(-2)$.`, R`$3$, $-1$ y $-2$.`)
    ]
  ];

  EX.limites = [
    [
      E(R`$\displaystyle\lim_{x\to3}\frac{x^2-9}{x^2-2x-3}$`, R`$\frac{x+3}{x+1}\to\frac32$.`),
      E(R`$\displaystyle\lim_{x\to\infty}\frac{4x^3-x}{2x^3+7}$`, R`$2$.`),
      E(R`$\displaystyle\lim_{x\to\infty}\frac{x^2+1}{x+5}$`, R`$+\infty$.`),
      E(R`$\displaystyle\lim_{x\to0}\frac{\sqrt{1+x}-\sqrt{1-x}}{x}$`, R`Conjugado: $\frac{2}{\sqrt{1+x}+\sqrt{1-x}}\to1$.`),
      E(R`$\displaystyle\lim_{x\to\infty}\left(1+\frac2x\right)^{3x}$`, R`$e^6$.`),
      E(R`Asíntotas de $f(x)=\dfrac{x+3}{x-1}$.`, R`Vertical $x=1$; horizontal $y=1$.`),
      E(R`Halla $a$ para que $f(x)=\begin{cases}ax+3 & x<2\\x^2-1 & x\ge2\end{cases}$ sea continua.`, R`$2a+3=3\Rightarrow a=0$.`)
    ],
    [
      E(R`$\displaystyle\lim_{x\to1}\frac{x^3-1}{x^2-1}$`, R`$\frac{x^2+x+1}{x+1}\to\frac32$.`),
      E(R`Límites laterales de $\dfrac1{x-3}$ en $x=3$.`, R`$-\infty$ y $+\infty$.`),
      E(R`$\displaystyle\lim_{x\to\infty}\left(\sqrt{x^2+2x}-x\right)$`, R`$\frac{2x}{\sqrt{x^2+2x}+x}\to1$.`),
      E(R`$\displaystyle\lim_{x\to\infty}\left(\frac{x-1}{x+1}\right)^x$`, R`$e^{\lim x\cdot\frac{-2}{x+1}}=e^{-2}$.`),
      E(R`Asíntotas de $f(x)=\dfrac{x^2+1}x$.`, R`Vertical $x=0$; oblicua $y=x$.`),
      E(R`Clasifica la discontinuidad de $\dfrac{x^2-4}{x-2}$ en $x=2$.`, R`Evitable: el límite es 4.`),
      E(R`Demuestra que $x^3-2x-5=0$ tiene una raíz entre 2 y 3.`, R`$f(2)=-1<0$, $f(3)=16>0$, continua: Bolzano.`)
    ],
    [
      E(R`$\displaystyle\lim_{x\to2}\left(\frac1{x-2}-\frac4{x^2-4}\right)$`, R`$\frac{x+2-4}{x^2-4}=\frac1{x+2}\to\frac14$.`),
      E(R`$\displaystyle\lim_{x\to-\infty}\frac{2x+1}{x-3}$`, R`$2$.`),
      E(R`$\displaystyle\lim_{x\to4}\frac{\sqrt x-2}{x-4}$`, R`$\frac1{\sqrt x+2}\to\frac14$.`),
      E(R`Asíntotas de $f(x)=\dfrac{3x^2}{x^2-4}$.`, R`Verticales $x=\pm2$; horizontal $y=3$.`),
      E(R`Estudia la continuidad de $f(x)=\begin{cases}x+2 & x\le0\\2+x^2 & 0<x\le1\\4x-1 & x>1\end{cases}$`, R`En 0: $2=2$; en 1: $3=3$. Continua en $\mathbb R$.`),
      E(R`Discontinuidades de $f(x)=\dfrac{x}{x^2-x}$.`, R`$x=0$: evitable (límite $-1$). $x=1$: salto infinito.`),
      E(R`Halla $k$: $f(x)=\begin{cases}\dfrac{x^2+x-2}{x-1} & x\neq1\\k & x=1\end{cases}$ continua.`, R`$x+2\to3$: $k=3$.`)
    ]
  ];

  EX.derivadas = [
    [
      E(R`TVM de $f(x)=x^3$ en $[1,3]$.`, R`$\frac{27-1}2=13$.`),
      E(R`Derivada por la definición de $f(x)=x^2+2x$ en $x=1$.`, R`$\frac{4h+h^2}h\to4$.`),
      E(R`Deriva $(3x^2-2)^4$.`, R`$24x(3x^2-2)^3$.`),
      E(R`Deriva $x^3e^{2x}$.`, R`$x^2e^{2x}(3+2x)$.`),
      E(R`Tangente a $f(x)=x^3-2x$ en $x=1$.`, R`$f(1)=-1$, $f'(1)=1$: $y=x-2$.`),
      E(R`Monotonía de $f(x)=x^3-3x^2$.`, R`$f'=3x(x-2)$: crece en $(-\infty,0)\cup(2,\infty)$, decrece en $(0,2)$.`),
      E(R`Extremos de $f(x)=2x^3-3x^2-12x$.`, R`$f'=6(x-2)(x+1)$: máximo $(-1,7)$, mínimo $(2,-20)$.`)
    ],
    [
      E(R`Deriva $\ln(3x^2+1)$.`, R`$\frac{6x}{3x^2+1}$.`),
      E(R`Deriva $\dfrac{x-1}{x+1}$.`, R`$\frac2{(x+1)^2}$.`),
      E(R`Deriva $\sin^2(2x)$.`, R`$4\sin2x\cos2x=2\sin4x$.`),
      E(R`Deriva $\sqrt{x^3+1}$.`, R`$\frac{3x^2}{2\sqrt{x^3+1}}$.`),
      E(R`Recta normal a $f(x)=\sqrt x$ en $x=4$.`, R`$f'(4)=\frac14$: normal $y=-4x+18$.`),
      E(R`Punto de $f(x)=x^2+2$ donde la tangente es paralela a $y=4x$.`, R`$2x=4$: $(2,6)$.`),
      E(R`De todos los rectángulos de área 100, ¿cuál tiene perímetro mínimo?`, R`$P=2x+\frac{200}x$, $x=10$: un cuadrado de 10, perímetro 40.`)
    ],
    [
      E(R`¿Es derivable $f(x)=\begin{cases}3x-1 & x<2\\x^2+1 & x\ge2\end{cases}$ en $x=2$?`, R`Continua ($5=5$), pero derivadas 3 y 4: no es derivable.`),
      E(R`Curvatura e inflexión de $f(x)=x^4-4x^3$.`, R`$f''=12x(x-2)$: convexa en $(-\infty,0)\cup(2,\infty)$, cóncava en $(0,2)$. Inflexión en $(0,0)$ y $(2,-16)$.`),
      E(R`Extremos absolutos de $f(x)=x^3-3x$ en $[0,2]$.`, R`$f(0)=0$, $f(1)=-2$, $f(2)=2$: máximo 2, mínimo $-2$.`),
      E(R`Si $s(t)=t^3-6t^2+9t$, ¿cuándo se para el móvil? ¿Cuándo es nula la aceleración?`, R`$v=3(t-1)(t-3)=0$: en $t=1$ y $t=3$. $a=6t-12=0$: $t=2$.`),
      E(R`Halla $a$ y $b$ para que $x^2+ax+b$ tenga un mínimo en $(2,-1)$.`, R`$4+a=0\Rightarrow a=-4$; $4-8+b=-1\Rightarrow b=3$.`),
      E(R`$B(q)=-2q^2+120q-1000$. ¿Producción y beneficio máximos?`, R`$q=30$, $B=800$.`),
      E(R`Monotonía y extremos de $f(x)=\dfrac{e^x}x$.`, R`$f'=\frac{e^x(x-1)}{x^2}$: decrece en $(-\infty,0)\cup(0,1)$, crece en $(1,\infty)$. Mínimo $(1,e)$.`)
    ]
  ];

  EX.estadistica = [
    [
      E(R`Clasifica: nivel de estudios, número de suspensos, peso, marca de móvil.`, R`Cualitativa ordinal, cuantitativa discreta, cuantitativa continua, cualitativa nominal.`),
      E(R`Media, mediana y moda de: 2, 3, 3, 5, 7, 8, 8, 8, 10.`, R`Media $\frac{54}9=6$; mediana 7; moda 8.`),
      E(R`Desviación típica de 2, 4, 6, 8.`, R`$\bar x=5$; $\sigma^2=\frac{120}4-25=5$; $\sigma\approx2{,}24$.`),
      E(R`De 50 alumnos, 20 van en bus. ¿Cuántos grados mide ese sector?`, R`$\frac{20}{50}\cdot360^\circ=144^\circ$.`),
      E(R`Si $\sigma_{xy}=6$, $\sigma_x=2$ y $\sigma_y=4$, calcula $r$ e interprétalo.`, R`$r=\frac6{8}=0{,}75$: correlación positiva bastante fuerte.`),
      E(R`Con $\bar x=4$, $\bar y=10$, $\sigma_x^2=2$ y $\sigma_{xy}=3$, halla la recta de $y$ sobre $x$ y estima $y$ para $x=5$.`, R`Pendiente $1{,}5$: $y=1{,}5x+4$. Para $x=5$: $11{,}5$.`),
      E(R`¿Qué significa $R^2=0{,}64$?`, R`Que la recta explica el 64 % de la variación de $y$ ($|r|=0{,}8$).`)
    ],
    [
      E(R`Tabla: $x_i$ 1, 2, 3, 4 con $f_i$ 2, 5, 8, 5. Calcula la media y la moda.`, R`$\bar x=\frac{2+10+24+20}{20}=2{,}8$; moda 3.`),
      E(R`En esa tabla, halla la mediana y los cuartiles.`, R`$F_i$: 2, 7, 15, 20. Mediana 3 ($F$ supera 10 en $x=3$). $Q_1=2$ ($\frac N4=5$), $Q_3=3{,}5$ (15 es justo $\frac{3N}4$: media de 3 y 4).`),
      E(R`Media de los datos agrupados $[0,4)$: 3, $[4,8)$: 5, $[8,12)$: 2.`, R`Marcas 2, 6, 10: $\frac{6+30+20}{10}=5{,}6$.`),
      E(R`Media 12 y $\sigma=3$ frente a media 40 y $\sigma=6$. ¿Cuál es más disperso?`, R`$CV$: $0{,}25$ y $0{,}15$. El primero.`),
      E(R`De 80 personas, 50 son mujeres (20 leen a diario) y 30 hombres (12 leen). ¿Son independientes sexo y lectura?`, R`$\frac{20}{50}=0{,}4$ y $\frac{12}{30}=0{,}4$: sí.`),
      E(R`$x$: 1, 2, 3; $y$: 2, 4, 9. Calcula la covarianza.`, R`$\bar x=2$, $\bar y=5$; $\frac{2+8+27}3-10=\frac73\approx2{,}33$.`),
      E(R`Las rectas $y=2x-1$ y $x=0{,}3y+1$ son de regresión. Calcula $\bar x$, $\bar y$ y $r$.`, R`Corte: $x=0{,}3(2x-1)+1\Rightarrow0{,}4x=0{,}7$, $\bar x=1{,}75$, $\bar y=2{,}5$. $r^2=0{,}6$, $r\approx0{,}77$.`)
    ],
    [
      E(R`Rango, varianza y CV de 10, 12, 14, 16, 18.`, R`Rango 8; $\bar x=14$; $\sigma^2=8$; $\sigma\approx2{,}83$; $CV\approx0{,}20$.`),
      E(R`¿Qué gráfico usarías para la estatura de 100 alumnos agrupada en intervalos? ¿Y para el deporte favorito?`, R`Histograma; diagrama de barras o de sectores.`),
      E(R`La media de 5 notas es 6. ¿Qué nota hace falta en la sexta para que la media sea 6,5?`, R`$30+x=39\Rightarrow x=9$.`),
      E(R`Con $r=-0{,}2$, ¿tiene sentido predecir con la recta?`, R`No: la relación lineal es muy débil.`),
      E(R`$x$: 0, 1, 2, 3; $y$: 1, 3, 5, 7. Calcula $r$ y la recta.`, R`Los puntos están en la recta $y=2x+1$: $r=1$.`),
      E(R`Predecir el peso de un adulto con una recta hecha con niños de 6 a 10 años, ¿es fiable?`, R`No: es extrapolar fuera del rango de los datos.`),
      E(R`Pon un ejemplo de correlación sin causalidad.`, R`Por ejemplo, número de bomberos en un incendio y daños: los dos dependen del tamaño del incendio.`)
    ]
  ];

  EX.prob = [
    [
      E(R`Lanzamos un dado. ¿Probabilidad de sacar un número primo?`, R`$\{2,3,5\}$: $\frac12$.`),
      E(R`$P(A)=0{,}45$, $P(B)=0{,}3$, $P(A\cap B)=0{,}15$. Calcula $P(A\cup B)$ y $P(\bar A)$.`, R`$0{,}6$ y $0{,}55$.`),
      E(R`$A$ y $B$ son incompatibles, $P(A)=0{,}3$ y $P(B)=0{,}5$. Calcula $P(A\cup B)$.`, R`$0{,}8$.`),
      E(R`Lanzamos dos dados. ¿Probabilidad de que la suma sea 8?`, R`$(2,6),(3,5),(4,4),(5,3),(6,2)$: $\frac5{36}$.`),
      E(R`Baraja española (40 cartas): probabilidad de sacar un rey o una copa.`, R`$\frac{4+10-1}{40}=\frac{13}{40}$.`),
      E(R`Urna con 3 bolas blancas y 7 negras. Dos extracciones con reemplazamiento: $P(\text{2 blancas})$.`, R`$0{,}3^2=0{,}09$.`),
      E(R`$P(A\cap B)=0{,}12$ y $P(B)=0{,}4$. Calcula $P(A|B)$.`, R`$0{,}3$.`)
    ],
    [
      E(R`Lanzamos 4 monedas. ¿Probabilidad de al menos una cruz?`, R`$1-\frac1{16}=\frac{15}{16}$.`),
      E(R`$A$ y $B$ independientes, $P(A)=0{,}2$ y $P(B)=0{,}5$. Calcula $P(A\cup B)$.`, R`$0{,}2+0{,}5-0{,}1=0{,}6$.`),
      E(R`De 100 alumnos, 60 aprueban Mates, 50 Física y 40 las dos. $P(\text{Física}|\text{Mates})$ y $P(\text{ninguna})$.`, R`$\frac{40}{60}=\frac23$; $1-0{,}7=0{,}3$.`),
      E(R`Bolsa con 4 bolas rojas y 2 azules; sacamos 2 sin reemplazamiento. $P(\text{2 azules})$.`, R`$\frac26\cdot\frac15=\frac1{15}$.`),
      E(R`El 60 % son chicas y el 40 % chicos. Llevan gafas el 30 % de las chicas y el 20 % de los chicos. $P(\text{gafas})$.`, R`$0{,}18+0{,}08=0{,}26$.`),
      E(R`En el ejercicio anterior, si alguien lleva gafas, ¿probabilidad de que sea chica?`, R`$\frac{0{,}18}{0{,}26}=\frac9{13}\approx0{,}69$.`),
      E(R`Si $P(A\cup B)=0{,}7$, calcula $P(\bar A\cap\bar B)$.`, R`$0{,}3$ (De Morgan).`)
    ],
    [
      E(R`Lanzamos una moneda 3 veces. Escribe el espacio muestral y calcula $P(\text{exactamente una cara})$.`, R`8 resultados: CCC, CCX, …, XXX. $\frac38$.`),
      E(R`$P(A)=0{,}6$ y $P(B|A)=0{,}5$. Calcula $P(A\cap B)$.`, R`$0{,}3$.`),
      E(R`Si $P(A\cap B)=0{,}25$, calcula $P(\bar A\cup\bar B)$.`, R`$0{,}75$.`),
      E(R`Urna 1: 2 blancas y 3 negras. Urna 2: 4 blancas y 1 negra. Pasamos una bola de la 1 a la 2 y sacamos una de la 2. $P(\text{blanca})$.`, R`$\frac25\cdot\frac56+\frac35\cdot\frac46=\frac{11}{15}$.`),
      E(R`Una enfermedad afecta al 5 %. El test da positivo en el 90 % de enfermos y en el 5 % de sanos. Si das positivo, ¿probabilidad de estar enfermo?`, R`$\frac{0{,}045}{0{,}045+0{,}0475}\approx0{,}49$.`),
      E(R`Lanzamos un dado hasta sacar un 6. ¿Probabilidad de que salga por primera vez en la tercera tirada?`, R`$\left(\frac56\right)^2\frac16=\frac{25}{216}$.`),
      E(R`¿Son lo mismo sucesos incompatibles e independientes? Pon un ejemplo.`, R`No. Par e impar en un dado son incompatibles pero no independientes (si ocurre uno, el otro no puede).`)
    ]
  ];

  EX.comb = [
    [
      E(R`¿De cuántas formas se ordenan las letras de LIBRO?`, R`$5!=120$.`),
      E(R`¿Cuántos números de 3 cifras distintas se forman con los dígitos del 1 al 6?`, R`$V_{6,3}=120$.`),
      E(R`¿Cuántos equipos de 5 se pueden formar con 10 personas?`, R`$\binom{10}5=252$.`),
      E(R`¿Cuántas contraseñas de 4 letras (26 letras, con repetición) hay?`, R`$26^4=456\,976$.`)
    ],
    [
      E(R`¿Cuántos anagramas tiene BANANA?`, R`$\frac{6!}{3!\,2!}=60$.`),
      E(R`Comprueba que $\binom73+\binom74=\binom84$.`, R`$35+35=70$ ✓`),
      E(R`Coeficiente de $x^2$ en $(x+3)^5$.`, R`$\binom53\cdot3^3=270$.`),
      E(R`Con 5 chicos y 4 chicas, ¿cuántas comisiones de 2 chicos y 2 chicas hay?`, R`$\binom52\binom42=60$.`)
    ],
    [
      E(R`¿De cuántas formas se sientan 6 personas alrededor de una mesa redonda?`, R`Fijando una, $5!=120$.`),
      E(R`Elegimos 3 números de 10. ¿Probabilidad de acertar los 3?`, R`$\frac1{\binom{10}3}=\frac1{120}$.`),
      E(R`Sacamos 3 cartas de 40. ¿Probabilidad de que las 3 sean oros?`, R`$\frac{\binom{10}3}{\binom{40}3}=\frac{120}{9880}=\frac3{247}$.`),
      E(R`Lanzamos 3 monedas. ¿Probabilidad de exactamente 1 cara?`, R`$\frac{\binom31}{8}=\frac38$.`)
    ]
  ];

  EX.dist = [
    [
      E(R`$X$ = número de caras al lanzar 2 monedas. Tabla, media y desviación típica.`, R`$P(0)=\frac14$, $P(1)=\frac12$, $P(2)=\frac14$. $\mu=1$, $\sigma^2=1{,}5-1=0{,}5$, $\sigma\approx0{,}71$.`),
      E(R`$X\sim B(5;0{,}5)$. Calcula $P(X=3)$.`, R`$\binom53\frac1{32}=\frac{10}{32}=0{,}3125$.`),
      E(R`$X\sim B(4;0{,}1)$. Calcula $P(X\ge1)$.`, R`$1-0{,}9^4=0{,}3439$.`),
      E(R`Media y desviación típica de $B(100;0{,}2)$.`, R`$\mu=20$, $\sigma=\sqrt{16}=4$.`),
      E(R`Calcula $P(Z\le0{,}84)$ y $P(Z>2)$.`, R`$0{,}7995$ y $0{,}0228$.`),
      E(R`Calcula $P(Z\le-0{,}5)$.`, R`$1-0{,}6915=0{,}3085$.`),
      E(R`$X\sim N(50,10)$. Calcula $P(X<65)$.`, R`$P(Z<1{,}5)=0{,}9332$.`)
    ],
    [
      E(R`Un juego da 3 € con probabilidad 0,2 y quita 1 € con probabilidad 0,8. ¿Ganancia esperada?`, R`$0{,}6-0{,}8=-0{,}2$ €.`),
      E(R`$X\sim B\!\left(6,\frac13\right)$. Calcula $P(X=2)$.`, R`$15\cdot\frac19\cdot\frac{16}{81}=\frac{240}{729}\approx0{,}329$.`),
      E(R`Calcula $P(-1{,}5\le Z\le1{,}5)$.`, R`$2\cdot0{,}9332-1=0{,}8664$.`),
      E(R`Halla $k$ con $P(Z\le k)=0{,}975$.`, R`$k=1{,}96$.`),
      E(R`$X\sim N(170,8)$. ¿Qué porcentaje está entre 162 y 186?`, R`$P(-1\le Z\le2)=0{,}9772-0{,}1587=0{,}8185$: 81,85 %.`),
      E(R`$B(200;0{,}5)$. Aproxima $P(X\le90)$ con la normal.`, R`$N(100;\ 7{,}07)$: $P(X'\le90{,}5)=P(Z\le-1{,}34)\approx0{,}09$.`),
      E(R`Error máximo de un intervalo al 95 % con $\sigma=12$ y $n=36$.`, R`$1{,}96\cdot\frac{12}6=3{,}92$.`)
    ],
    [
      E(R`$P(X=x)=kx$ para $x=1,2,3,4$. Halla $k$ y la media.`, R`$10k=1\Rightarrow k=0{,}1$. $\mu=0{,}1(1+4+9+16)=3$.`),
      E(R`$X\sim B(n,p)$ con $\mu=6$ y $\sigma^2=4{,}2$. Halla $n$ y $p$.`, R`$q=\frac{4{,}2}6=0{,}7$, $p=0{,}3$, $n=20$.`),
      E(R`Calcula $P(Z\ge1{,}28)$.`, R`$\approx0{,}10$.`),
      E(R`Cociente intelectual $N(100,15)$. ¿Qué porcentaje supera 130?`, R`$P(Z>2)=0{,}0228$: 2,28 %.`),
      E(R`En $N(100,15)$, ¿qué valor deja por debajo el 90 %?`, R`$100+1{,}28\cdot15=119{,}2$.`),
      E(R`Intervalo al 99 % para la media con $n=64$, $\bar x=50$, $\sigma=8$.`, R`$50\pm2{,}575\cdot1$: $(47{,}425;\ 52{,}575)$.`),
      E(R`Tamaño de muestra para un error menor que 2 con $\sigma=10$ al 95 %.`, R`$\left(\frac{1{,}96\cdot10}2\right)^2=96{,}04$: 97.`)
    ]
  ];

  window.CC13_B1X = { TH, PR, H, P, G, EX };
})();
