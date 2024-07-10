# Aufgabe 1 - Exceptions

In dieser Aufgabe geht es darum 2 Routen für einen HTTP Server zu schreiben.

- `GET /`: Gib eine JSON Liste an Personen zurück
- `GET /:id`: Gib eine einzelne Person zurück
- BONUS: `POST /`: Erstellt eine neue Person in der Liste

## Ausführen

Um den Server zu starten `npm run start` ausführen.
Falls Node >= 18 installiert sein, kann auch `npm run dev` ausgeführt werden für hot reloading.

Jetzt kann über den HTTP Client des Vertrauens an `http://localhost:3000` gesendet werden. In der `./request.http` Datei finden sich einige Requests die getestet werden können.

## Step 1 - Handlers

Hier sollen zuerst die Handler für die Endpunkte geschrieben werden, der Startpunkt hier ist `./controller.js`.

Folgende Helper stehen zur Verfügung:

- `getDBData`: Gibt eine Liste an Daten zurück
- `sendJSONResponse`: Sendet ein JSON Object über eine Response mit einem gegebenen Status Code
- `StatusCodes`: Ein Object mit den Status Codes für "OK", "CREATED", "NOT_FOUND" und "INTERNAL_SERVER_ERROR"
- `NotFoundError`: Ein Error Object, was einen NotFound Error repräsentiert
- BONUS `addToDB`: Fügt ein Object in die Liste hinzu

## Step 2 - Middleware

Jetzt bricht der Server momentan ständig ab wenn ein Fehler auftritt, das soll jetzt mit einer Middleware behoben werden. Startpunkt für die Middleware ist `./middleware.js`.

Hier wird die `fn` ausgeführt, was die einzelnen Handler sind. Nun muss der Code folgendermaßen angepasst werden, dass jegliche Fehler die während der Ausführung von `fn` geworfen werden als JSON response über den Request gesendet werden.

Hier gilt folgendes:

1. Die JSON Response soll folgende Struktur haben `{ code: HTTP_ERROR_CODE, message: ERROR_MESSAGE }`
2. Falls der Fehler eine `instanceof HTTPError` ist, soll der StatusCode und die Message von dem `HTTPError` genommen werden
3. Falls es ein anderer Fehler ist soll ein Internal Server Error Status zurück gesendet werden mit der Message des Errors.
