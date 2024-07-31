Este Proyecto es un servicio de cloud multiplataforma, donde almacene todo tipo de formatos y peso. Los archivos se podran visualizar como un escritorio de un SO, y la con carpetas. Incluira una seccion de contactos, para enviar mensajes y brindar permisos. Facilitando la tranferencia y almacenamiento entre dispositivos. El servicio de transferencia sera para que los usuarios prueben el servicio gratuito.
Aqui ire subiendo los cambios y el estatus de las funciones:

Good Luck!

**PROXIMA TAREA**: 

                  CREAR EL EL DISENO DEL HOME CON BOOTSTRAP 
-----------------------------
31/07/24

## Cree el componente home

- **src/app/home -home.component.css**
      -home.component.html
      -home.component.spec.ts
      -home.component.ts

Se comento el archivo **/app.component.html**con las lineas predeterminadas expeto <router-outlet /> que sigue conectara, -**revisar**


----------------------------------------

30/07/24

## Estructura del Proyecto: 3

- **src/app/components**: Contiene los componentes principales de la aplicación.
  - `confirmation`: Componente para mostrar confirmaciones.
  - `file-detail`: Componente para mostrar detalles de un archivo.
  - `file-list`: Componente para listar archivos.
  - `file-upload`: Componente para subir archivos.
  - `message`: Componente para mostrar mensajes.
  - `navigation`: Componente de navegación.
  - `upload-progress`: Componente para mostrar el progreso de subida.
  - `user-settings`: Componente para configurar ajustes del usuario.

- **src/app/services**: Contiene servicios para manejar la lógica de negocio.
  - `file.service.ts`: Servicio para manejar operaciones de archivos.
  - `user.service.ts`: Servicio para manejar operaciones de usuario.
  - `notification.service.ts`: Servicio para manejar notificaciones.

- **src/app/models**: Contiene modelos para la aplicación.
  - `file.model.ts`: Modelo para los archivos.
  - `user.model.ts`: Modelo para los usuarios.

- **src/app/guards**: Contiene guardias para la protección de rutas.
  - `auth.guard.ts`: Guardia para autenticación.
  - `admin.guard.ts`: Guardia para administración.

- **src/app/pipes**: Contiene pipes personalizados.
  - `file-size.pipe.ts`: Pipe para formatear el tamaño de archivos.
  - `date-format.pipe.ts`: Pipe para formatear fechas.

- **src/app/directives**: Contiene directivas personalizadas.
  - `drag-drop.directive.ts`: Directiva para arrastrar y soltar.
  - `file-upload.directive.ts`: Directiva para manejar la subida de archivos.

## Instalación

