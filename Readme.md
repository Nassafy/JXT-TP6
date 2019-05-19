# Projet JXT

Authorization token: eyJhbGciOiJIUzI1NiJ9.cm9zZQ.vEvuighmzkYQEtjq0tmPfqb6W3QqaC7wQCJll15lCWE

## Lancer le serveur
Après avoir cloner ce projet utiliser les commandes suivantes pour le lancer:
```console
npm install
npm start
```

Il est possible de changer les ports du serveur et de la base de donnée, ainsi que les identifiants de la base de donnée, dans le fichier config/default.json.

Requête pour créer une alert:
```console
 curl -i -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.cm9zZQ.vEvuighmzkYQEtjq0tmPfqb6W3QqaC7wQCJll15lCWE' -d '{"type":"tes", "label":"l", "status":"s", "from":"f", "to":"t"}' http://localhost:3000/v1/alerts
 ```
 Requête pour chercher une alerte par rapport à ses éléments:
 ```console
 curl -i -X GET  -H 'Content-Type: application/json' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.cm9zZQ.vEvuighmzkYQEtjq0tmPfqb6W3QqaC7wQCJll15lCWE' -d '{"label": "l"}' http://localhost:3000/v1/alerts/search
```

Requête pour le delete:
```console
curl -i -X DELETE  -H 'Content-Type: application/json' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.cm9zZQ.vEvuighmzkYQEtjq0tmPfqb6W3QqaC7wQCJll15lCWE'  http://localhost:3000/v1/alerts/id
```

 Requête pour le patch:
 ```console
curl -i -X PATCH -H 'Content-Type: application/json' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.cm9zZQ.vEvuighmzkYQEtjq0tmPfqb6W3Qqa
C7wQCJll15lCWE' -d '{"type":"testpatch", "label":"l", "status":"s", "from":"f", "to":"t"}' http://localhost:3000/v1/alerts/id
```