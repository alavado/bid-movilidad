Para iniciar:

### `yarn start`

Para agregar un país:

- Crear una carpeta en src/data/csv con el código ISO 3166-1 alpha-2 del país (habría que crear, por ejemplo, la carpeta src/data/csv/CL para Chile).
- Poner en esa carpeta el CSV con los datos de movilidad (separado por punto y coma, con la primera columna indicando el código de la región en el GeoJSON correspondiente, encabezada "cod").
- Agregar los datos del país al archivo src/config/paises.js (el centro, que es donde se hace lleva la cámara al seleccionar el país, se puede dejar para después).
- Crear la carpeta con el código ISO 3166-1 alpha-2 del país en src/data/geojson y poner ahí el geojson de la división regional, nombrándolo "regiones.json".
- Ejecutar "yarn run merge"

Para agregar el centro:
- Iniciar localmente la aplicación con "yarn start".
- Seleccionar y centrar el país en la pantalla.
- Hacer click en cualquier región del país. Esto escribe la configuración del mapa en la consola.
- Abrir la consola (F12), expandir el objeto impreso y copiar los valores de latitude, longitude y zoom al lugar que corresponda detro del archivo src/config/paises.js.