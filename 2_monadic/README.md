# Aufgabe 2 - Monadic Error Handling

In dieser Aufgabe geht es ein CLI zu bauen, was eine Zahl als input in der Console nimmt und mit der `numberMagic` function transformiert.
Die `numberMagic` function ist sehr spezifisch und nimmt lediglich Zahlen an, welche zwischen 0 und 100 liegen.

Der Callback in `./index.js` in der `runProgramm` function soll so angepasst werden, dass erst der input value geparsed wird und validiert wird.
Value ist in dem Fall der String den ein Nutzer in die Commandline eingibt.

Stelle sicher, dass dieser value:

- Als Zahl geparsed wird, hierfür kannst du einfach `Number(value)` nutzen
- Eine tatsächliche Zahl ist, hierfür kannst du einfach die `isNaN` function nutzen, die `true` zurück gibt, falls es keine echte Zahl ist
- Die Zahle größer oder gleich 0 und kleiner oder gleich 100 ist

**WICHTIG**: Es dürfen keine Errors oder `try-catch` Mechanismen benutzt werden, sondern es muss die `Result` Klasse genutzt werden um Fehler anzugeben.

Die Result Klasse hat folgende API:

- `static ok(value)`: Mit `Result.ok(value)` kann ein neues Success Result erstellt werden
- `static fail(error)`: Mit `Result.fail(error)` kann ein neues Failure Result erstellt werden
- `map(fn)`: Mit dieser function kann der Value innerhalb des Results verändert werden, sollte das Result Successful sein, andernfalls wird das Failure Result wieder zurück gegeben
- `isSuccess`: Gibt an ob das Result ein Success ist
- `value`: Bei `isSuccess === true` ist es der tatsächliche value, andernfalls ist es die ErrorMessage

## Ausführen

Um den Server zu starten `npm run start` ausführen.
Falls Node >= 18 installiert sein, kann auch `npm run dev` ausgeführt werden für hot reloading.
