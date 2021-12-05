# =================================
# Master Continuo - Laboratorio - Módulo 6 - REST API - Ejercicio 02

Laboratorio REST API
Introducción
Vamos a consumir una API pública para mostrar datos de la serie Rick & Morty

https://rickandmortyapi.com/

Para simular escrituras vamos a utilizar un servidor local json-server

json-server .- https://github.com/typicode/json-server

Cómo punto de entrada vamos a partir del Boilerplate:

00-boilerplate .- https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/06-rest-api/01-concepts/00-boilerplate

Tendrás que:

Cambiar las escenas, rutas y pods a character-collection y character
Actualizar el json-server.

Ejercicio 2
Montamos un json-server local.
json-server .- https://github.com/typicode/json-server

Vamos añadir una colección en la que se puede añadir un comentario de un actor.

Cuando visualicemos la ventana de detalle del actor intentaremos recuperar el comentario para dicho actor (GET - si no existe lo pondremos en blanco).

El usuario puede editar y guardar el comentario