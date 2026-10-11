/* ClasesConCelia13 · 1º Bachillerato Sociales: Matemáticas Aplicadas a las Ciencias Sociales I.
   Sigue los 8 capítulos del libro de Marea Verde (CC BY-NC-SA); teoría, ejemplos y ejercicios redactados para esta web. */
(() => {
  'use strict';
  const R = String.raw;
  const { TH, PR, H, P, G } = window.CC13_B1X;
  const C = window.CC13_B1 || [];
  const Q = (p, e, s) => ({ p, e, s });
  const MV = 'https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/';
  const byName = n => C.find(t => t.name === n) || { theory: [], practice: [], exams: [[], [], []] };

  /* ------------------------------------------------ Matemática financiera */
  const TH_FIN = [
    H('Porcentajes e índices de variación', R`Una <b>tasa</b> compara una cantidad con otra de referencia: tasa de paro del 12 % (12 de cada 100), tasa de natalidad de 8 ‰ (8 de cada 1000).
      <p>Aumentar un $r\,\%$ es multiplicar por el <b>índice de variación</b> $1+\frac r{100}$; disminuir un $r\,\%$, por $1-\frac r{100}$. Los porcentajes encadenados se <b>multiplican</b>, no se suman:</p>
      <div class="ej"><b>Ejemplo resuelto.</b> Un abrigo de 80 € sube un 20 % y luego baja un 20 %. Precio final: $80\cdot1{,}2\cdot0{,}8=76{,}80$ €. El índice total es $0{,}96$: ha bajado un 4 %, no ha vuelto a 80 €.</div>
      <div class="ej"><b>Ejemplo resuelto (porcentaje inverso).</b> Pagamos 121 € con un IVA del 21 %. Sin IVA costaba $\frac{121}{1{,}21}=100$ €.</div>`),
    H('Números índice', R`Un <b>número índice</b> mide cómo cambia una magnitud respecto a un momento de referencia (la base, que vale 100):
      <div class="ej">$NI=\dfrac{\text{valor actual}}{\text{valor en la base}}\cdot100$</div>
      Si una barra de pan costaba 0,80 € en 2020 y 1 € en 2024, su índice (base 2020) es $\frac1{0{,}8}\cdot100=125$: ha subido un 25 %. El <b>IPC</b> (índice de precios al consumo) hace esto con una "cesta de la compra" ponderada y sirve para medir la inflación; el <b>IBEX 35</b> es un índice de la bolsa.`),
    H('Interés simple', R`Si dejamos un capital $C$ en el banco a un tanto por uno $r$ (si el rédito es $R\,\%$, $r=\frac R{100}$) y cobramos los intereses cada año sin acumularlos, en $t$ años el interés es:
      <div class="ej">$I=C\cdot r\cdot t$</div>
      Si el tiempo está en meses se usa $\frac r{12}$, en trimestres $\frac r4$, en semestres $\frac r2$.
      <div class="ej"><b>Ejemplo resuelto.</b> Ponemos 8000 € al 3 % y cobramos los intereses cada semestre. Si hemos cobrado 480 €, ¿cuánto tiempo ha estado el dinero? $480=8000\cdot\frac{0{,}03}2\cdot T\Rightarrow T=4$ semestres, es decir, 2 años.</div>`),
    H('Interés compuesto', R`Si los intereses se suman al capital y generan a su vez intereses (<b>capitalización</b>), el capital final o <b>montante</b> es:
      <div class="ej">$M=C(1+r)^t\qquad$ y, si se capitaliza $n$ veces al año durante $T$ periodos, $\ M=C\left(1+\dfrac rn\right)^T$</div>
      Sale de multiplicar por $(1+r)$ cada año: $C\to C(1+r)\to C(1+r)^2\to\cdots$ (es una progresión geométrica).
      <div class="ej"><b>Ejemplo resuelto.</b> 3000 € al 4 % anual durante 3 años: $3000\cdot1{,}04^3=3374{,}59$ €. Con capitalización mensual: $3000\left(1+\frac{0{,}04}{12}\right)^{36}=3381{,}82$ €.</div>
      <div class="ej"><b>Ejemplo resuelto (tiempo).</b> ¿Cuántos trimestres tarda en convertirse 5000 € en 5300 € al 2 % anual con capitalización trimestral? $1{,}005^T=1{,}06\Rightarrow T=\frac{\log1{,}06}{\log1{,}005}\approx11{,}7$: hacen falta 12 trimestres.</div>`),
    H('Tasa anual equivalente (TAE)', R`Si se capitaliza varias veces al año, el capital crece algo más que el interés nominal. La <b>TAE</b> es el porcentaje real de crecimiento en un año:
      <div class="ej">$TAE=\left(1+\dfrac rn\right)^n-1$</div>
      Un 4 % nominal con capitalización mensual tiene una TAE de $\left(1+\frac{0{,}04}{12}\right)^{12}-1\approx4{,}07\,\%$. En los préstamos, la TAE también incluye comisiones y gastos, por eso sirve para comparar ofertas.`),
    H('Anualidades de capitalización (ahorro)', R`Para reunir un capital hacemos <b>pagos iguales $a$ al principio de cada periodo</b>. Cada pago crece un número distinto de periodos y sumando (progresión geométrica) queda:
      <div class="ej">$C=\dfrac{a(1+r)\left[(1+r)^t-1\right]}{r}\qquad$ (anual) $\qquad C=\dfrac{a\left(1+\frac rn\right)\left[\left(1+\frac rn\right)^T-1\right]}{\frac rn}\qquad$ ($n$ pagos al año)</div>
      <div class="ej"><b>Ejemplo resuelto.</b> Ingresamos 1000 € al principio de cada año, durante 5 años, al 4 %: $C=\dfrac{1000\cdot1{,}04\,(1{,}04^5-1)}{0{,}04}\approx5632{,}98$ €. Hemos aportado 5000 €; el resto son intereses.</div>`),
    H('Anualidades de amortización (préstamos)', R`Para devolver una deuda $D$ hacemos <b>pagos iguales $a$ al final de cada periodo</b> (cuotas):
      <div class="ej">$a=\dfrac{D\,r\,(1+r)^t}{(1+r)^t-1}\qquad$ (anual) $\qquad a=\dfrac{D\,\frac rn\left(1+\frac rn\right)^T}{\left(1+\frac rn\right)^T-1}\qquad$ ($n$ pagos al año)</div>
      <div class="ej"><b>Ejemplo resuelto.</b> Préstamo de 20 000 € a 5 años al 6 %. Cuota anual: $a=\dfrac{20\,000\cdot0{,}06\cdot1{,}06^5}{1{,}06^5-1}\approx4747{,}93$ €. Con cuotas mensuales ($\frac r{12}=0{,}005$, $T=60$): $386{,}66$ € al mes; en total se pagan $23\,199{,}36$ €, es decir, $3199{,}36$ € de intereses.</div>
      Prueba a cambiar los datos en la calculadora financiera de abajo.`)
  ];
  const PR_FIN = [
    G('Matemática financiera'),
    P('Porcentajes encadenados', R`a) Un precio de 80 € sube un 20 % y después baja un 20 %. ¿Cuál es el precio final? b) Un artículo sube un 10 % y luego un 5 %. ¿Qué porcentaje ha subido en total?`, R`a) $80\cdot1{,}2\cdot0{,}8=76{,}80$ € (baja un 4 %). <br>b) $1{,}1\cdot1{,}05=1{,}155$: sube un 15,5 % (no un 15 %).`),
    P('Números índice', R`Un producto costaba 40 € en 2020 y 46 € en 2023. Calcula su número índice con base 2020.`, R`$\frac{46}{40}\cdot100=115$: ha subido un 15 %.`),
    P('Interés simple', R`Calcula el interés de 3000 € al 4 % anual durante 3 años y durante 5 meses.`, R`3 años: $3000\cdot0{,}04\cdot3=360$ €. 5 meses: $3000\cdot\frac{0{,}04}{12}\cdot5=50$ €.`),
    P('Interés compuesto', R`3000 € al 4 % durante 3 años: calcula el montante con capitalización anual y con capitalización mensual.`, R`Anual: $3000\cdot1{,}04^3\approx3374{,}59$ €. Mensual: $3000\left(1+\frac{0{,}04}{12}\right)^{36}\approx3381{,}82$ €.`),
    P('Precio que sube cada año', R`Un producto vale 18 € y sube un 5 % cada año. a) ¿Cuánto costará dentro de 4 años? b) ¿Cuánto costaba hace 4 años? c) ¿Cuándo se duplicará?`, R`a) $18\cdot1{,}05^4\approx21{,}88$ €. b) $\frac{18}{1{,}05^4}\approx14{,}81$ €. c) $1{,}05^n=2\Rightarrow n\approx14{,}2$: dentro de 15 años.`),
    P('Capital inicial', R`¿Cuánto hay que depositar hoy al 3 % compuesto anual para tener 10 000 € dentro de 5 años?`, R`$C=\frac{10\,000}{1{,}03^5}\approx8626{,}09$ €.`),
    P('TAE', R`Calcula la TAE de un 4 % con capitalización mensual y de un 6 % con capitalización trimestral.`, R`$\left(1+\frac{0{,}04}{12}\right)^{12}-1\approx4{,}07\,\%$; $\ 1{,}015^4-1\approx6{,}14\,\%$.`),
    P('El regalo del abuelo', R`Al nacer Luis, su abuelo ingresa 3600 € al 3 % compuesto. ¿Cuánto habrá cuando cumpla 25 años? ¿Y si la capitalización fuera semestral?`, R`Anual: $3600\cdot1{,}03^{25}\approx7537{,}60$ €. Semestral: $3600\cdot1{,}015^{50}\approx7578{,}87$ €.`),
    P('Plan de ahorro anual', R`Ingresamos 1000 € al principio de cada año durante 5 años al 4 %. ¿Qué capital tendremos?`, R`$\dfrac{1000\cdot1{,}04(1{,}04^5-1)}{0{,}04}\approx5632{,}98$ €.`),
    P('Plan de ahorro mensual', R`Ingresamos 60 € al principio de cada mes durante 4 años, al 3 % anual con capitalización mensual. ¿Qué capital tendremos?`, R`$\frac r{12}=0{,}0025$, $T=48$: $C=\dfrac{60\cdot1{,}0025(1{,}0025^{48}-1)}{0{,}0025}\approx3063{,}51$ €.`),
    P('Préstamo', R`Pedimos 20 000 € a 5 años al 6 %. Calcula la cuota anual y la cuota mensual. ¿Cuántos intereses pagamos con cuotas mensuales?`, R`Anual: $4747{,}93$ €. Mensual: $386{,}66$ €; total $60\cdot386{,}66\approx23\,199{,}36$ €, intereses $\approx3199{,}36$ €.`),
    P('Hipoteca', R`Un piso cuesta 90 000 €. Damos 18 000 € de entrada y el resto lo pagamos en 20 años al 3 % anual con cuotas mensuales. ¿Cuál es la cuota?`, R`$D=72\,000$, $\frac r{12}=0{,}0025$, $T=240$: $a=\dfrac{72\,000\cdot0{,}0025\cdot1{,}0025^{240}}{1{,}0025^{240}-1}\approx399{,}31$ € al mes.`)
  ];

  /* --------------------------------------------------------- Combinatoria */
  const TH_COMB = [
    H('Principio de multiplicación', R`Si una elección se hace en varias etapas, con $m$ opciones en la primera, $n$ en la segunda…, el total es $m\cdot n\cdots$ Un diagrama de árbol lo muestra muy bien.
      <div class="ej"><b>Ejemplo resuelto.</b> Con 3 camisetas, 2 pantalones y 2 pares de zapatillas hay $3\cdot2\cdot2=12$ conjuntos distintos.</div>`),
    H('Permutaciones', R`Formas de <b>ordenar</b> $n$ elementos distintos: $P_n=n!=n\cdot(n-1)\cdots2\cdot1$ (y $0!=1$).
      <p>Si hay elementos repetidos ($a$ iguales, $b$ iguales…): $P_n^{a,b,\ldots}=\dfrac{n!}{a!\,b!\cdots}$</p>
      <div class="ej"><b>Ejemplo resuelto.</b> 5 personas en 5 sillas: $5!=120$. Anagramas de CASA (la A se repite 2 veces): $\frac{4!}{2!}=12$.</div>`),
    H('Variaciones', R`Formas de elegir $n$ elementos de $m$ <b>cuando importa el orden</b>.
      <div class="tbl"><table><tr><th>Sin repetición</th><td>$V_{m,n}=m(m-1)\cdots(m-n+1)=\dfrac{m!}{(m-n)!}$</td></tr>
      <tr><th>Con repetición</th><td>$VR_{m,n}=m^n$</td></tr></table></div>
      <div class="ej"><b>Ejemplo resuelto.</b> Podio (oro, plata, bronce) entre 10 corredores: $V_{10,3}=10\cdot9\cdot8=720$. Contraseñas de 4 cifras: $VR_{10,4}=10^4=10\,000$.</div>`),
    H('Combinaciones y números combinatorios', R`Formas de elegir $n$ elementos de $m$ <b>cuando no importa el orden</b>:
      <div class="ej">$C_{m,n}=\dbinom mn=\dfrac{m!}{n!\,(m-n)!}$</div>
      <b>¿Cuál uso?</b> ¿Entran todos? → permutaciones. ¿Importa el orden? → variaciones. ¿No importa? → combinaciones. ¿Se pueden repetir? → con repetición.
      <p><b>Propiedades</b>: $\binom m0=\binom mm=1$; $\ \binom mn=\binom m{m-n}$; $\ \binom mn+\binom m{n+1}=\binom{m+1}{n+1}$ (así se construye el <b>triángulo de Tartaglia</b>).</p>
      <div class="ej"><b>Ejemplo resuelto.</b> Comités de 3 personas elegidas entre 8: $\binom83=56$. Combinaciones de la Primitiva (6 de 49): $\binom{49}6=13\,983\,816$.</div>`),
    H('Binomio de Newton', R`<div class="ej">$(a+b)^n=\dbinom n0a^n+\dbinom n1a^{n-1}b+\dbinom n2a^{n-2}b^2+\dots+\dbinom nnb^n$</div>
      Los coeficientes son una fila del triángulo de Tartaglia. <b>Ejemplo</b>: $(x+2)^4=x^4+8x^3+24x^2+32x+16$. Si el binomio es una resta, los signos se alternan.`),
    H('Combinatoria y probabilidad', R`Con Laplace, los casos favorables y posibles se cuentan con combinatoria.
      <div class="ej"><b>Ejemplo resuelto.</b> Bolsa con 5 bolas rojas y 4 azules; sacamos 3. $P(\text{2 rojas y 1 azul})=\dfrac{\binom52\binom41}{\binom93}=\dfrac{10\cdot4}{84}=\dfrac{10}{21}$.</div>
      <div class="ej"><b>Ejemplo resuelto.</b> Lanzamos 8 monedas. $P(\text{exactamente 5 caras})=\dfrac{\binom85}{2^8}=\dfrac{56}{256}=\dfrac7{32}$.</div>`)
  ];
  const PR_COMB = [
    G('Combinatoria'),
    P('Sillas', R`¿De cuántas formas se pueden sentar 5 personas en 5 sillas en fila?`, R`$P_5=5!=120$.`),
    P('Anagramas', R`¿Cuántas palabras (con o sin sentido) se forman con las letras de PAPEL? ¿Y de CASA? ¿Y de MATEMATICAS?`, R`PAPEL tiene la P repetida: $\frac{5!}{2!}=60$. CASA: $\frac{4!}{2!}=12$. MATEMATICAS (M×2, A×3, T×2): $\frac{11!}{2!\,3!\,2!}=1\,663\,200$.`),
    P('Podio', R`¿De cuántas formas pueden repartirse oro, plata y bronce entre 10 corredores?`, R`$V_{10,3}=720$.`),
    P('Matrículas', R`Una matrícula tiene 4 cifras y 3 letras elegidas entre 20 consonantes. ¿Cuántas hay?`, R`$10^4\cdot20^3=80\,000\,000$.`),
    P('Comité', R`¿Cuántos grupos de 3 se pueden formar con 8 personas? ¿Y si son presidente, secretario y tesorero?`, R`Sin orden: $\binom83=56$. Con cargos (importa el orden): $V_{8,3}=336$.`),
    P('Primitiva', R`¿Cuántas combinaciones de 6 números del 1 al 49 hay? ¿Qué probabilidad hay de acertar con una apuesta?`, R`$\binom{49}6=13\,983\,816$; probabilidad $\approx7\cdot10^{-8}$.`),
    P('Números combinatorios', R`Calcula $\binom72$, $\binom{10}7$ y comprueba que $\binom62+\binom63=\binom73$.`, R`$21$; $\binom{10}{3}=120$; $15+20=35=\binom73$ ✓`),
    P('Binomio de Newton', R`Desarrolla $(x+2)^4$ y $(2x-1)^3$. Halla el término independiente de $\left(x+\frac1x\right)^6$.`, R`$x^4+8x^3+24x^2+32x+16$; $\ 8x^3-12x^2+6x-1$. Término independiente: $\binom63=20$.`),
    P('Probabilidad con combinatoria', R`Bolsa con 5 bolas rojas y 4 azules; sacamos 3 a la vez. ¿Probabilidad de 2 rojas y 1 azul?`, R`$\dfrac{\binom52\binom41}{\binom93}=\dfrac{40}{84}=\dfrac{10}{21}$.`),
    P('Monedas', R`Lanzamos 8 monedas. ¿Probabilidad de obtener exactamente 5 caras?`, R`$\dfrac{\binom85}{2^8}=\dfrac{7}{32}\approx0{,}219$.`)
  ];

  /* -------------------------------------------------------- Distribuciones */
  const TH_DIST = [
    H('Variable aleatoria discreta', R`Una <b>variable aleatoria</b> asigna un número a cada resultado de un experimento. Es <b>discreta</b> si toma valores aislados (nº de caras, nº de hijos). Su <b>función de probabilidad</b> da $P(X=x_i)=p_i$, con $\sum p_i=1$.
      <div class="ej">Media o esperanza $\mu=\sum x_ip_i\qquad$ Varianza $\sigma^2=\sum x_i^2p_i-\mu^2$</div>
      <div class="ej"><b>Ejemplo resuelto.</b> Pagamos 2 € por tirar un dado; si sale 6 nos dan 10 €. Ganancia: $+8$ con prob. $\frac16$, $-2$ con prob. $\frac56$. $\mu=\frac86-\frac{10}6=-\frac13$ €: a la larga perdemos unos 33 céntimos por partida. El juego es <b>desfavorable</b>.</div>`),
    H('Distribución binomial', R`Se repite $n$ veces un experimento <b>independiente</b> con dos resultados (éxito con probabilidad $p$, fracaso con $q=1-p$). $X$ = número de éxitos sigue una binomial $B(n,p)$:
      <div class="ej">$P(X=k)=\dbinom nk p^k q^{\,n-k}\qquad\mu=np\qquad\sigma=\sqrt{npq}$</div>
      <div class="ej"><b>Ejemplo resuelto.</b> El 20 % de los móviles de un lote tiene un fallo. Cogemos 10. $X\sim B(10;0{,}2)$: $P(X=2)=\binom{10}2\,0{,}2^2\,0{,}8^8\approx0{,}302$. $P(X\le1)=0{,}8^{10}+10\cdot0{,}2\cdot0{,}8^9\approx0{,}376$. Media 2 móviles, $\sigma\approx1{,}26$.</div>
      Para "al menos uno" usa el contrario: $P(X\ge1)=1-P(X=0)$.`),
    H('Variables continuas', R`Una variable es <b>continua</b> si puede tomar cualquier valor de un intervalo (altura, tiempo). Se describe con una <b>función de densidad</b> $f(x)\ge0$ cuya área total es 1. Las probabilidades son <b>áreas</b> bajo la curva: $P(a\le X\le b)$ es el área entre $a$ y $b$. Por eso $P(X=a)=0$ y da igual poner $<$ o $\le$.`),
    H('Distribución normal', R`La normal $N(\mu,\sigma)$ tiene forma de <b>campana</b> simétrica alrededor de la media $\mu$; $\sigma$ indica lo ancha que es. Muchas medidas (alturas, notas, errores) se parecen a ella.
      <p>Regla práctica: entre $\mu\pm\sigma$ está el 68 % de los datos, entre $\mu\pm2\sigma$ el 95 % y entre $\mu\pm3\sigma$ el 99,7 %.</p>
      <p><b>Tipificar</b>: si $X\sim N(\mu,\sigma)$, entonces $Z=\dfrac{X-\mu}{\sigma}\sim N(0,1)$, cuyas probabilidades $P(Z\le k)$ vienen en la tabla.</p>
      <div class="tbl"><table><tr><th>Caso</th><th>Cómo se calcula</th></tr>
      <tr><td>$P(Z\le k)$, $k>0$</td><td>directamente en la tabla</td></tr>
      <tr><td>$P(Z\ge k)$</td><td>$1-P(Z\le k)$</td></tr>
      <tr><td>$P(Z\le-k)$</td><td>$P(Z\ge k)=1-P(Z\le k)$ (simetría)</td></tr>
      <tr><td>$P(a\le Z\le b)$</td><td>$P(Z\le b)-P(Z\le a)$</td></tr></table></div>
      <div class="ej"><b>Ejemplo resuelto.</b> Pesos $N(65,8)$ kg. $P(X>75)=P\left(Z>\frac{75-65}8\right)=P(Z>1{,}25)=1-0{,}8944=0{,}1056$: un 10,6 % pesa más de 75 kg.</div>
      Usa la calculadora de la normal de abajo para comprobar tus resultados.`),
    H('Aproximación de la binomial por la normal', R`Si $n$ es grande ($np\ge5$ y $nq\ge5$), $B(n,p)\approx N\left(np,\sqrt{npq}\right)$. Como pasamos de discreta a continua, se aplica la <b>corrección de continuidad</b>: $P(X=k)\approx P(k-0{,}5\le X'\le k+0{,}5)$, $\ P(X\ge k)\approx P(X'\ge k-0{,}5)$.
      <div class="ej"><b>Ejemplo resuelto.</b> 100 lanzamientos de moneda: $B(100;0{,}5)\approx N(50,5)$. $P(X\ge60)\approx P(X'\ge59{,}5)=P(Z\ge1{,}9)=0{,}0287$ (el valor exacto es 0,0284).</div>`),
    H('Intervalos de confianza', R`Con una muestra estimamos un parámetro de la población con un margen de error y un nivel de confianza.
      <div class="tbl"><table>
      <tr><th>Para la media (con $\sigma$ conocida)</th><td>$\left(\bar x-z_{\alpha/2}\dfrac\sigma{\sqrt n},\ \bar x+z_{\alpha/2}\dfrac\sigma{\sqrt n}\right)$</td></tr>
      <tr><th>Para una proporción</th><td>$\hat p\pm z_{\alpha/2}\sqrt{\dfrac{\hat p(1-\hat p)}n}$</td></tr>
      <tr><th>Valores críticos</th><td>90 %: $1{,}645$ · 95 %: $1{,}96$ · 99 %: $2{,}575$</td></tr></table></div>
      El <b>error máximo</b> es $E=z_{\alpha/2}\frac\sigma{\sqrt n}$; para conseguir un error dado hace falta $n\ge\left(\frac{z_{\alpha/2}\,\sigma}{E}\right)^2$.
      <div class="ej"><b>Ejemplo resuelto.</b> 100 alumnos con altura media 170 cm, $\sigma=10$. Al 95 %: $170\pm1{,}96\cdot\frac{10}{10}=(168{,}04;\ 171{,}96)$.</div>`)
  ];
  const PR_DIST = [
    G('Distribuciones de probabilidad'),
    P('Tabla de probabilidad', R`$X$ toma los valores 0, 1, 2, 3 con probabilidades 0,1; 0,3; $k$; 0,2. Halla $k$, la media y la desviación típica.`, R`$k=0{,}4$. $\mu=0{,}3+0{,}8+0{,}6=1{,}7$. $\sum x^2p=3{,}7$, $\sigma^2=3{,}7-2{,}89=0{,}81$, $\sigma=0{,}9$.`),
    P('¿Juego justo?', R`Pagamos 2 € por lanzar un dado y nos dan 10 € si sale 6. ¿Es un juego favorable?`, R`Esperanza $8\cdot\frac16-2\cdot\frac56=-\frac13$ €: desfavorable.`),
    P('Binomial', R`El 20 % de los móviles de un lote tiene un fallo. Cogemos 10. Calcula $P(X=2)$, $P(X\le1)$, la media y la desviación típica.`, R`$P(X=2)\approx0{,}302$; $P(X\le1)\approx0{,}376$; $\mu=2$; $\sigma=\sqrt{1{,}6}\approx1{,}26$.`),
    P('Tabla N(0,1)', R`Calcula $P(Z\le1{,}25)$, $P(Z\ge0{,}5)$, $P(Z\le-1{,}2)$ y $P(-1\le Z\le2)$.`, R`$0{,}8944$; $1-0{,}6915=0{,}3085$; $1-0{,}8849=0{,}1151$; $0{,}9772-0{,}1587=0{,}8185$.`),
    P('Al revés', R`Halla $k$ tal que $P(Z\le k)=0{,}9$ y tal que $P(Z\ge k)=0{,}05$.`, R`$k\approx1{,}28$ y $k\approx1{,}645$.`),
    P('Tipificar', R`Los pesos siguen $N(65,8)$. Calcula $P(X>75)$ y $P(57<X<73)$.`, R`$P(Z>1{,}25)=0{,}1056$. $P(-1<Z<1)=0{,}6826$.`),
    P('Aproximación a la normal', R`Lanzamos una moneda 100 veces. ¿Probabilidad aproximada de sacar 60 caras o más?`, R`$N(50,5)$ con corrección: $P(Z\ge1{,}9)=0{,}0287$.`),
    P('Intervalo para la media', R`Muestra de 100 personas, media 170 cm, $\sigma=10$. Intervalo al 95 %. ¿Qué tamaño de muestra hace falta para un error menor que 0,5 cm?`, R`$(168{,}04;\ 171{,}96)$. $n\ge\left(\frac{1{,}96\cdot10}{0{,}5}\right)^2=1536{,}6$: 1537 personas.`),
    P('Intervalo para una proporción', R`De 400 encuestados, 160 votarán al partido A. Intervalo al 95 % para la proporción de votantes.`, R`$\hat p=0{,}4$: $0{,}4\pm1{,}96\sqrt{\frac{0{,}24}{400}}=0{,}4\pm0{,}048$, es decir, $(0{,}352;\ 0{,}448)$.`)
  ];

  /* -------------------------------------------------- Extras de otros temas */
  const TH_ECO = [H('Aplicaciones en economía', R`Si $C(q)$ es el <b>coste</b> de producir $q$ unidades, $C'(q)$ es el <b>coste marginal</b>: lo que cuesta, aproximadamente, producir una unidad más. Con ingresos $I(q)$, el <b>beneficio</b> es $B(q)=I(q)-C(q)$ y es máximo donde $B'(q)=0$ y $B''(q)<0$.
    <div class="ej"><b>Ejemplo resuelto.</b> $B(q)=-q^2+40q-300$: $B'(q)=-2q+40=0\Rightarrow q=20$ unidades, con beneficio $B(20)=100$. Como $B''=-2<0$, es un máximo.</div>`)];
  const PR_ECO = [G('Economía'),
    P('Coste mínimo', R`El coste medio de producir $q$ unidades es $C(q)=q^2-10q+50$. ¿Qué producción lo hace mínimo?`, R`$C'(q)=2q-10=0\Rightarrow q=5$, con coste $25$.`),
    P('Beneficio máximo', R`$B(q)=-q^2+40q-300$. ¿Cuántas unidades dan beneficio máximo y cuánto es?`, R`$q=20$, $B(20)=100$.`)];
  const TH_REG2 = [H('Regresión cuadrática y coeficiente de determinación', R`Si la nube de puntos tiene forma de curva, se puede ajustar una parábola $y=ax^2+bx+c$ (<b>regresión cuadrática</b>), normalmente con la calculadora o la hoja de cálculo.
    <p>El <b>coeficiente de determinación</b> $R^2=r^2$ (en la lineal) dice qué parte de la variación de $y$ explica el modelo: con $r=0{,}9$, $R^2=0{,}81$, el 81 %. Cuanto más cerca de 1, mejores predicciones.</p>`)];

  const T = name => byName(name);

  window.CC13_B1S = [
    { n: 'T1', name: 'Números reales y matemática financiera', desc: 'Reales, potencias, radicales, notación científica, logaritmos, interés y préstamos.',
      mv: MV + 'BS1%2001%20Reales.pdf', mvr: MV + 'Respuestas%20BS1%20Cap%C3%ADtulo%201%20Reales.pdf', tool: 'financiera',
      theory: [...TH.reales, ...TH.potencias, ...TH.radicales, ...TH.notacion, ...TH.logaritmos, ...TH_FIN],
      practice: [...PR.reales, ...PR.potencias, ...PR.radicales, ...PR.notacion, ...PR.logaritmos, ...PR_FIN],
      exams: [
        [
          Q(3.5, R`a) Simplifica $\dfrac{2^3\cdot4^2}{8^2\cdot2^{-1}}$. b) Calcula $3\sqrt{12}-2\sqrt{27}+\sqrt{75}$.`, R`a) $\dfrac{2^7}{2^5}=4$. <br>b) $6\sqrt3-6\sqrt3+5\sqrt3=5\sqrt3$.`),
          Q(3.5, R`Racionaliza: a) $\dfrac4{\sqrt5-1}$ &nbsp; b) $\dfrac6{\sqrt[3]3}$`, R`a) $\dfrac{4(\sqrt5+1)}{4}=\sqrt5+1$. <br>b) $\dfrac{6\sqrt[3]9}{3}=2\sqrt[3]9$.`),
          Q(3, R`Depositamos 3000 € al 4 % anual durante 3 años. Calcula el montante con capitalización anual y la TAE si la capitalización fuera mensual.`, R`$3000\cdot1{,}04^3\approx3374{,}59$ €. TAE $=\left(1+\frac{0{,}04}{12}\right)^{12}-1\approx4{,}07\,\%$.`)
        ],
        [
          Q(3.5, R`a) Calcula $\log_264$, $\log_3\frac1{27}$ y $\log_84$. b) Desarrolla $\log\dfrac{a^3b}{\sqrt c}$.`, R`a) $6$, $-3$ y $\frac23$. <br>b) $3\log a+\log b-\frac12\log c$.`),
          Q(3.5, R`Resuelve: a) $4^x-6\cdot2^x+8=0$ &nbsp; b) $\log(x+3)+\log(x-3)=\log16$`, R`a) $t=2^x$: $t=2,4\Rightarrow x=1,2$. <br>b) $x^2-9=16\Rightarrow x=5$ ($-5$ no vale).`),
          Q(3, R`Pedimos un préstamo de 20 000 € a 5 años al 6 % anual. ¿Cuál es la cuota anual?`, R`$a=\dfrac{20\,000\cdot0{,}06\cdot1{,}06^5}{1{,}06^5-1}\approx4747{,}93$ €.`)
        ],
        [
          Q(3.5, R`a) Calcula y da el resultado en notación científica: $(3{,}2\cdot10^5)(5\cdot10^{-8})$ y $\dfrac{4{,}5\cdot10^{12}}{9\cdot10^{-3}}$. b) Resuelve $|x-4|\le3$.`, R`a) $1{,}6\cdot10^{-2}$ y $5\cdot10^{14}$. <br>b) $[1,7]$.`),
          Q(3.5, R`Un precio de 80 € sube un 20 % y luego baja un 20 %. ¿Cuál es el precio final y el porcentaje total de variación? Si un artículo pasa de 40 € a 46 €, ¿cuál es su número índice?`, R`$80\cdot1{,}2\cdot0{,}8=76{,}80$ €: baja un 4 %. Índice $\frac{46}{40}\cdot100=115$.`),
          Q(3, R`Ingresamos 1000 € al principio de cada año durante 5 años al 4 %. ¿Qué capital tendremos al final?`, R`$\dfrac{1000\cdot1{,}04\,(1{,}04^5-1)}{0{,}04}\approx5632{,}98$ €.`)
        ]
      ] },
    { n: 'T2', name: 'Álgebra', desc: 'Polinomios, fracciones algebraicas, ecuaciones de todo tipo, inecuaciones, Gauss y sistemas no lineales.',
      mv: MV + 'BS1%2002%20ALGEBRA.pdf', mvr: MV + 'Respuestas%20BC1%20Cap%C3%ADtulo%202%20%C3%81lgebra.pdf', tool: 'ruffini',
      theory: TH.algebra, practice: PR.algebra, exams: T('Álgebra').exams },
    { n: 'T3', name: 'Funciones', desc: 'Tipos de funciones, interpolación, a trozos, oferta y demanda, composición, inversa y características.',
      mv: MV + 'BS1%2003%20Funciones.pdf', mvr: MV + 'Respuestas%20BS1%20Cap%C3%ADtulo%203%20Funciones.pdf', tool: 'familias',
      theory: TH.funciones, practice: PR.funciones, exams: T('Funciones').exams },
    { n: 'T4', name: 'Límites y continuidad', desc: 'Límites laterales, indeterminaciones, asíntotas y tipos de discontinuidad.',
      mv: MV + 'BS1%2004%20Limites.pdf', mvr: MV + 'Respuestas%20BS1%20Cap%C3%ADtulo%204%20L%C3%ADmites.pdf',
      theory: T('Límites y continuidad').theory, practice: [G('Límites y continuidad'), ...T('Límites y continuidad').practice], exams: T('Límites y continuidad').exams },
    { n: 'T5', name: 'Derivadas', desc: 'Tasa de variación, reglas, tangente, crecimiento, extremos y aplicaciones a la economía.',
      mv: MV + 'BS1%2005%20Derivadas.pdf', mvr: MV + 'Respuestas%20BS1%20Cap%C3%ADtulo%205%20Derivadas.pdf', tool: 'tangente',
      theory: [...T('Derivadas').theory, ...TH_ECO], practice: [G('Derivadas'), ...T('Derivadas').practice, ...PR_ECO], exams: T('Derivadas').exams },
    { n: 'T6', name: 'Estadística', desc: 'Tablas y parámetros, estadística bidimensional, correlación y regresión.',
      mv: MV + 'BS1%2006%20Estadistica.pdf', mvr: MV + 'Respuestas%20BS1%20Cap%C3%ADtulo%206%20Estad%C3%ADstica.pdf', tool: 'regresion',
      theory: [...T('Estadística').theory, ...TH_REG2], practice: [G('Estadística'), ...T('Estadística').practice], exams: T('Estadística').exams },
    { n: 'T7', name: 'Probabilidad y combinatoria', desc: 'Sucesos, Laplace, árboles, Bayes, permutaciones, variaciones, combinaciones y binomio de Newton.',
      mv: MV + 'BS1%2007%20Probabilidad.pdf', mvr: MV + 'Respuestas%20BS1%20Cap%C3%ADtulo%207%20Prob.pdf',
      theory: [...T('Probabilidad').theory, ...TH_COMB], practice: [G('Probabilidad'), ...T('Probabilidad').practice, ...PR_COMB],
      exams: [
        [
          Q(3.5, R`$P(A)=0{,}6$, $P(B)=0{,}3$ y $P(A\cup B)=0{,}72$. Calcula $P(A\cap B)$ y $P(A|B)$. ¿Son independientes?`, R`$P(A\cap B)=0{,}18$, $P(A|B)=0{,}6$. Sí: $0{,}6\cdot0{,}3=0{,}18$.`),
          Q(3.5, R`En una clase de 12 alumnos: a) ¿cuántos grupos de trabajo de 4 se pueden hacer? b) ¿De cuántas formas se elige delegado, subdelegado y secretario? c) ¿Cuántos anagramas tiene CASA?`, R`a) $\binom{12}4=495$. b) $V_{12,3}=1320$. c) $\frac{4!}{2!}=12$.`),
          Q(3, R`La urna A tiene 3 bolas blancas y 2 negras; la B, 1 blanca y 4 negras. Elegimos urna con una moneda y sacamos una bola. Si es blanca, ¿probabilidad de que sea de A?`, R`$P(B)=\frac12\cdot\frac35+\frac12\cdot\frac15=\frac25$. $P(A|B)=\dfrac{3/10}{2/5}=\frac34$.`)
        ],
        [
          Q(3.5, R`De 300 personas, 180 tienen Android y 120 iPhone; tienen tablet 60 de cada grupo. Calcula $P(\text{tablet})$ y $P(\text{iPhone}|\text{tablet})$. ¿Son independientes?`, R`$0{,}4$ y $0{,}5$. No son independientes ($P(\text{iPhone})=0{,}4$).`),
          Q(3.5, R`Desarrolla $(x-2)^5$ con el binomio de Newton.`, R`$x^5-10x^4+40x^3-80x^2+80x-32$.`),
          Q(3, R`Una bolsa tiene 5 bolas rojas y 4 azules. Sacamos 3 a la vez. ¿Probabilidad de que salgan 2 rojas y 1 azul?`, R`$\dfrac{\binom52\binom41}{\binom93}=\dfrac{40}{84}=\dfrac{10}{21}$.`)
        ],
        [
          Q(3.5, R`Tres máquinas A, B y C fabrican el 50 %, 30 % y 20 % de las piezas, con un 2 %, 3 % y 5 % de defectuosas. Si una pieza es defectuosa, ¿probabilidad de que venga de C?`, R`$P(D)=0{,}029$; $P(C|D)=\dfrac{0{,}01}{0{,}029}\approx0{,}345$.`),
          Q(3.5, R`a) ¿Cuántas combinaciones tiene la Primitiva (6 números de 49)? b) Lanzamos 8 monedas: ¿probabilidad de exactamente 5 caras?`, R`a) $13\,983\,816$. <br>b) $\dfrac{\binom85}{2^8}=\dfrac7{32}$.`),
          Q(3, R`Colocamos 6 libros distintos en una estantería al azar. ¿Probabilidad de que dos libros concretos queden juntos?`, R`Pegamos los dos libros: $2\cdot5!=240$ formas de $6!=720$. Probabilidad $\frac13$.`)
        ]
      ] },
    { n: 'T8', name: 'Distribuciones de probabilidad', desc: 'Variable aleatoria, binomial, normal, aproximación e intervalos de confianza.',
      mv: MV + 'BS1%2008%20Distribuciones.pdf', mvr: MV + 'Respuestas%20BS1%20Cap%C3%ADtulo%208%20Distribuciones.pdf', tool: 'normal',
      theory: TH_DIST, practice: PR_DIST,
      exams: [
        [
          Q(3.5, R`$X$ toma los valores 0, 1, 2, 3 con probabilidades 0,1; 0,3; $k$; 0,2. Halla $k$, $\mu$ y $\sigma$.`, R`$k=0{,}4$; $\mu=1{,}7$; $\sigma^2=0{,}81$, $\sigma=0{,}9$.`),
          Q(3.5, R`El 20 % de los móviles de un lote tiene un fallo. Cogemos 10. Calcula $P(X=2)$, $P(X\le1)$ y la media.`, R`$\approx0{,}302$; $\approx0{,}376$; $\mu=2$.`),
          Q(3, R`Si $Z\sim N(0,1)$, calcula $P(Z\le1{,}25)$, $P(Z\ge0{,}5)$ y $P(-1\le Z\le2)$.`, R`$0{,}8944$; $0{,}3085$; $0{,}8185$.`)
        ],
        [
          Q(3.5, R`La altura de un grupo sigue $N(170,10)$ cm. Calcula $P(X>185)$ y $P(160<X<180)$.`, R`$P(Z>1{,}5)=0{,}0668$. $P(-1<Z<1)=0{,}6826$.`),
          Q(3.5, R`Lanzamos una moneda 100 veces. Usa la normal para estimar la probabilidad de obtener 60 caras o más.`, R`$B(100;0{,}5)\approx N(50,5)$. $P(X'\ge59{,}5)=P(Z\ge1{,}9)=0{,}0287$.`),
          Q(3, R`Pagamos 2 € por lanzar un dado y nos dan 10 € si sale 6. ¿Cuál es la ganancia esperada? ¿Es justo el juego?`, R`$-\frac13$ € por partida: desfavorable para el jugador.`)
        ],
        [
          Q(3.5, R`Una muestra de 100 personas tiene altura media 170 cm, con $\sigma=10$. Halla el intervalo de confianza al 95 % y el tamaño mínimo de muestra para un error menor que 0,5 cm.`, R`$(168{,}04;\ 171{,}96)$. $n\ge1536{,}6$: 1537 personas.`),
          Q(3.5, R`En una encuesta a 400 personas, 160 votarán al partido A. Da un intervalo al 95 % para la proporción de votantes de A.`, R`$0{,}4\pm0{,}048$: $(0{,}352;\ 0{,}448)$.`),
          Q(3, R`Las notas siguen $N(6;\ 1{,}5)$. ¿Qué nota mínima tiene el 10 % de mejores notas?`, R`$P(Z\ge z)=0{,}1\Rightarrow z\approx1{,}28$. Nota $=6+1{,}28\cdot1{,}5\approx7{,}92$.`)
        ]
      ] }
  ];
})();
