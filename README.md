# Songboooko
En sangbog lavet i node.js


Her er er nogle commands som er nyttige - og notater til projektet.

Først og fremmest bør man altid huske at tilføje node_modules til .gitignore (det fandt jeg ud af lidt sent i det her projekt.)

<h3> --- Node.js start-up --- </h3>
1. <ins>"% npm init"</ins> starter node projekt<br>
Herunder skal man give forklaringer på spørgsmål.

2. Tilføj " <ins>"type": "module"</ins> " til packages.json fil. <br>
Således at man kan import og export i projektet.

3. Opret index.js fil i roden af mappen. <br>
Kommando <ins>"% node index.js"</ins> kører index.js filen <br>
Genvej <ins>CTRL+C</ins> stopper/genstarter terminalen.

4. Opsæt lokal Node server. <br>
Kan ses i index.js filen.

5. Installér "Nodemon". <br>
Nodemon er kort for "Node Monitor". <br>
Installeres gennem <ins>"% npm i -g nodemon"</ins>. <br>
"-g" betyder at en pakke bliver installeret til globalt brug. <br>
Man kan nu fremover skrive "% nodemon index.js" når man vil starte monitorering. Den genstarter node når der sker en ændring i koden.

6. Output. <br>
```
response.writeHead(200, {'Content-Type': 'text/html'});
response.write('Hello World! and another test!');
response.end();
```
Skrives inde i arrowfunction under :
```
"http.createServer((request, response) => {
    [hér]
})"
```

<h3> --- Installer nye dependencies / Packages --- </h3>

1. <ins>% npm install [package navn]</ins> Installerer ny package.

2. Når ny package er installeret bør <ins>Node_modules</ins> mappen slettes, hvorefter man skriver <ins>% npm i</ins> for at genoprette den med nye dependencies.

3. Man kan nu se nye packages under dependencies i package.json filen.




<h3> --- Kommandostykker og forklaring --- </h3>

Det er forskelligt om man skal bruge $ (dollartegn) eller % (procenttegn) før kommando.

```
% npm init ---- start npm
```
```
% npm -v ---- Tjekker version
```
```
% npm install [package navn] ---- installerer ny package
```
```
% npm install -g npm ---- Opdaterer npm
```
```
% npm i ---- opretter node_modules mappe
```
