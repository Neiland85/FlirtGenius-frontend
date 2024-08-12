FlirtGenius Frontend
Aplicación de tienda en línea desarrollada con Vue.js. Permite a los usuarios explorar productos, agregar al carrito y realizar pagos, integrándose con la API del backend para una experiencia de usuario fluida y un manejo eficiente del estado.

Contenido
Instalación
Ejecución del Servidor de Desarrollo
Estructura del Proyecto
Integración con el Backend
Gestión de Estado
Contribución
Licencia
Instalación
Clona el repositorio e instala las dependencias:

bash
Copiar código
git clone https://github.com/Neiland85/FlirtGenius-frontend.git
cd FlirtGenius-frontend
npm install
Ejecución del Servidor de Desarrollo
Para iniciar el servidor de desarrollo:

bash
Copiar código
npm run serve
El servidor estará corriendo en http://localhost:8080.

Estructura del Proyecto
plaintext
Copiar código
src/
├── components/
├── views/
├── store/
├── router/
└── main.js
Integración con el Backend
Este frontend se conecta a una API backend. Asegúrate de que el backend esté corriendo antes de usar la aplicación frontend.

Gestión de Estado
La aplicación utiliza Vuex para manejar el estado global de los productos y el carrito de compras. Las llamadas a la API se gestionan a través de Axios, y los datos se almacenan en el store de Vuex para facilitar el acceso en todos los componentes.

Contribución
Si deseas contribuir, por favor realiza un fork del repositorio, crea una nueva rama, realiza tus cambios y envía un Pull Request.

Licencia
Este proyecto está bajo la Licencia MIT.
