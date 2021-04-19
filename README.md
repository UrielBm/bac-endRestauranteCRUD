# Api de CRUD restaurante proyecto back-end en javascript

-esta es una Api de prueba realizada con Node.js y el framework de Express para evaluar y probar los conocimientos del lenguaje de JavaScript.

-Realizada por : Uriel Benítez Medina ;)
-Github [link de GitHub](https://github.com/UrielBm)

## Demo

El demo de la Api la puedes encontrar en [Api Courflix](https://backendcrudrestaurante.herokuapp.com/).

## rutas genericas

**https://backendcrudrestaurante.herokuapp.com/** _endpoint de bienvenida_

## rutas productos

**https://backendcrudrestaurante.herokuapp.com/products** _endpoint para ver los productos registrados_

**https://backendcrudrestaurante.herokuapp.com/product/:id** _endpoint para ver un producto especifico por Id_

**https://backendcrudrestaurante.herokuapp.com/products/add** _endpoint para registrar un nuevo producto_

**https://backendcrudrestaurante.herokuapp.com/products/update/:id** _endpoint para editar info de un producto_

**https://backendcrudrestaurante.herokuapp.com/products/delete/:id** _endpoint para eliminar un producto_


### para hacer registro de productos

Para hacer un registro de usuario EXITOSAMENTE debes ocupar los paramentros requeridos:

```
"name": "Pechuga empanizada" ***requerido***
"price": 60 ***requerido***
"description": "pechuga empanizada con chilaquiles" ***NO REQUERIDO***
```

**_Para hacer updates de productos necesitas el id y los campos para actulizar_**

