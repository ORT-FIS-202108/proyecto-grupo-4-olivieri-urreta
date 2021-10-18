# Informe académico entrega 1

Proyecto: 202108 MisGastos  
Autores: Giovanni Olivieri (205237), Diego Urreta (238422)  
Grupo: N3A  
Docentes: Gabriela Sánchez, Miguel Sánchez  
Repositorio Git: [Grupo 4 - Olivieri/Urreta](https://github.com/ORT-FIS-202108/proyecto-grupo-4-olivieri-urreta.git)  
Fecha de entrega: 18-oct-2021

## Repositorio Git

**Creación y uso de repositorios locales y remotos**

Para el proyecto se utilizó el servicio de repositorio remoto GitHub, y cada estudiante trabajó offline en repositorios locales clonados del repositorio remoto.

Para clonar el repositorio remoto al repositorio local se utilizó el siguiente comando de git:  
```git clone https://github.com/ORT-FIS-202108/proyecto-grupo-4-olivieri-urreta.git```

**Comandos Git ejecutados desde terminal y desde el IDE**

Una vez que se realiaron cambion en los distintos archivos y documentos del proyect, se utilizó la terminal del Visual Studio Code IDE para ejecutar los comandos de Git y agregar los cambios a las ramas locales y remotas.

A continuación se detalla un resumen de los distintos comandos ejecutados durante el proyecto y el objetivo de cada uno.

- ```git pull``` - Actualizar rama local con los últimos cambios de la rama remota.
- ```git branch``` - Listar todas las ramas del proyecto.
- ```git branch nombre_rama``` - Creación de una nueva rama.
- ```git checkout nombre_rama``` - Cambio de rama seleccionada.
- ```git status``` - Listar archivos nuevos o modificados, y cuales estan trackeados y cuales no. 
- ```git add nombre_archivo``` - Una vez realizados cambios en un archivo, se agrega el archivo a la área de staging.
- ```git commit -m mensaje_commit``` - Commit de los archivos en el área de staging a la rama local.
- ```git commit -am mensaje_commit``` - Commit de todos los archivos trackeados. Dada la simplicidad de esta etapa del proyecto, y como los cambios a los archivos fueron generalmente pequeños, se optó por no mover a staging los archivos modificados y directamente moverlos a la rama local.
- ```git push``` - Mueve los cambios locales al repositorio remoto.
- ```git branch main``` seguido de ```git merge rama_con_cambios``` - Argega los cambios de la rama_con_cambios a la rama main (se realiza desde el repositorio remoto).
- ```git restore --staged nombre_archivo``` - Remueve del área de staging un archivo.
- ```git reset HEAD~N``` - Elimina los últimos N commits de la rama, siendo N la cantidad de commits a eliminar.

Adicionalmente se agregó al archivo ```.git/info/exclude``` la extensión ```.DS_Store```. Archivos de este tipo son utilizados por el sistema operativo y no son necesarios para el proyecto, por lo que se decidió agregarlos al archivo exclude y que no fueran trackeados por Git.

## Versionado

### Uso de ramas

Para el proyecto se definieron ramas agrupadas en las dos áreas detalladas más abajo. Aunque en esta estapa del proyecto solo se trabajó en *Investigación y Requerimientos*, ya se definieron las ramas que se utilizarán durante la etapa de *Desarrollo*. 

#### Investigación y requerimientos
- Informe - *Rama principal del informe académico, a la cual se integrarán todas las sub-ramas una vez completadas las etapas de elicitación, especificación de requerimientos, validación, verificación y reflexión.*
  - Readme - *Rama para el documento principal del informe donde se aborda cada punto de la letra del proyecto para la [ entrega 1](../letra.md).*
  - Elicitación - *Rama para los documentos y archivos generados durante las diferentes actividades de elicitación. Se crearan a su vez sub-ramas para cada técnica de elicitación que se lleve a cabo, las cuales se nombraran con el siguiente criterio:  
  ```elicitacion-nombre_tecnica```*
  - Especificaciones - *Ramas para los documentos e imágenes generados durante la definición de las especificaciones basadas en los resultados de la elicitación. En esta rama se abordaran las siguientes áreas:*
    - *Requerimientos (funcionales y no fucionales)*
    - *User Stories*
    - *Use Cases*
    - *Prototipos (Bocetos de UI)*
  
#### Desarrollo
- Main - *Rama principal del proyecto a la cual se le integrarán las sub-ramas una vez finalizado todo el desarrollo.*
- Develop - *Esta rama se origina del último release de la rama Main. Se utiliza para el desarrollo y de esta se originan todas las ramas Feature. Una vez que se finaliza el desarrollo de una feature, su rama se integra a la rama Develop.*
- Hotfix-nombre_hotfix - *Rama que se utilizará para abordar bugs críticos que sean necesarios resolver inmediatamente. Esta rama se origina de la rama Main y una vez solucionados los bugs, se integrará a la rama Main y a la rama Develop.*
- Feature-nombre_feature - *Rama utilizada para el desarrollo de nuevas características del software. Se origina de la rama Develop y luego de culminado el desarrollo, se la integra nuevamente a la rama Develop.*
- Release-version - *Una vez que se completó todo el desarrollo en la rama Develop, se crea una rama Release-version a partir de la rama Develop. A partir de ese momento sólo se agregrán cambios para solucionar bugs, y una vez resueltos estos se integrará a la rama Main y a la Develop.*

Para la definición de las ramas de desarrollo, se utilizó como fuente referencia el [Manual de buenas prácticas al trabajar con Git](https://david-estevez.gitbooks.io/the-git-the-bad-and-the-ugly/content/es/buenas-practicas-al-trabajar-con-git.html).

### Resumen de commits y evolución del proyecto

## Elicitación

### Actividades de investigación

Para identificar las necesidades de los interesados en la aplicación de registro de gastos, se utilizaron dos técnicas de elicitación:

- Cuestionario
- Análisis de GUI - ingeniería reversa

A continuación se detalla el proceso llevado a cabo para cada técnica de elicitación y se proporciona evidencia de su realización. Por último se abordan los resultados y la reflexión basada en estos.

#### Cuestionario

Para obtener la mayor cantidad posible de feedback de potenciales usuarios, se optó por la técnica de elicitación Cuestionario. Todos los detalles de este proceso de elicitación se encuentran en el siguiente [link](investigacion/cuestionario/README.md).

#### Análisis de GUI - ingeniería reversa

Este técnica consite en analizar aplicaciones ya existentes que brindan funciones y servicios similares a los queremos brindar con nuestra aplicación. Esto nos permitirá identificar funciones y características que puedan ser de mayor valor para los usuarios. 

En este proyecto la aplicación que se analizó es [Splitwise](https://www.splitwise.com/), una aplicación gratuita para llevar un registro de gastos compartidos con otras personas.

A continuación se detallan características y funciones que pueden ser de mayor y menor valor para los usuarios.

**Funcionalidades con potencial valor** 
- Categorías de gastos predeterminadas - [Captura Splitwise 1](../docs/investigacion/capturas-splitwise/ingreso-gasto-nuevo.jpg) y [Captura Splitwise 2](../docs/investigacion/capturas-splitwise/categorias-gastos.png)
- Regisrar gastos por fecha - [Captura Splitwise 3](../docs/investigacion/capturas-splitwise/config-gasto-recurrente.jpg)
- Registrar gastos recurrentes - [Captura Splitwise 3](../docs/investigacion/capturas-splitwise/config-gasto-recurrente.jpg)
- Ver resumen de gastos en formato lista o formato pie chart. [Captura Splitwise 4](../docs/investigacion/capturas-splitwise/resumen-gastos.png)
- Resumen de gastos por categoría - [Captura Splitwise 4](../docs/investigacion/capturas-splitwise/resumen-gastos.png)
- Posibilidad de registrar gastos en dos monedas diferentes (Pesos/Dólares).
- Totales por moneda.

**Funcionalidades fuera de alcance o menor valor** 
- Agregar imagenes de comprobantes/recibos a un gasto. [Captura Splitwise 5](../docs/investigacion/capturas-splitwise/adjuntar-imagenes.png)
- Multiples grupos de gastos, por ejemplo 'Gastos Casa', 'Gastos trabajo', 'Gastos vacaciones', etc.
- Registrar gastos en monedas diferentes a Pesos y Dólares. [Captura Splitwise 6](../docs/investigacion/capturas-splitwise/multiples-monedas.png)

### Caracterización de usuarios: User Personas

Utilizando la información recabada con la técnica de elicitación Cuestionario, se crearon las siguientes User Personas:

- [User Persona 25 años](./investigacion/user-persona/user-persona-25.png)
- [User Persona 35 años](./investigacion/user-persona/user-persona-35.png)

### Modelo conceptual del problema

En base a los requerimientos del proyecto (letra del proyecto) y al proceso de elicitación y se desarrollo el siguiente modelo conceptual del sistema, que se utilizará en conjunto con los resultados de la investigación para definir los requerimientos y características del sistema a desarrolla.

El modelo conceptual se encuentra en el siguiente [link](./investigacion/mapa-conceptual/mapa-conceptual.jpg).

### Resultados y reflexión

Luego de comparar los resultados de el *Análisis de GUI - ingeniería reversa* el *Cuestionario*, el *Modelo Conceptual*, y la carecterización de usuarios *User Personas*, se obtuvieron datos que nos permitirán definr requerimientos que cumplan con los objetivos, vision y alcance del proyecto.

Los resultados de ambas técnicas de elicitación evidencian que algunas de las características más importantes de la aplicación son la facilidad de uso y simplicidad, a la vez que se pueda utilizar en dispositivos desktop y móviles. La funcionalidad de programar gastos y/o agregar recordatorios, junto con poder agrupar los gastos por categorías aparecieron en los resultados de ambas técnicas de elicitación.

El resultado general del proceso de elicitación fue muy positivo ya que se obtuvo suficiente información para definir tanto requerimientos funcionales como requerimientos no funcionales, y continuar adelante con las especificaciones de la aplicación.

## Especificación

### Requerimientos

Con los resultados obtenidos del proceso de investigación, se definieron los requerimientos Funcionales y No Funcionales detallados debajo. Para la creación de todos ellos se aplicaron los conceptos vistos en clase para ambos tipos de requerimientos.

#### Funcionales

- RF01 - El sistema debe permitir crear una cuenta.
- RF02 - El sistema debe requerir usuario y contraseña para mostrar e ingresar gastos.
- RF03 - Los usuarios pueden registrar un gasto con descripción, precio y fecha.
- RF04 - El sistema debe implementar un calendario de pagos.
- RF05 - Los usuarios deben recibir recordatorios de pagos (e-mail).
- RF06 - Llevar un control de estado de cuenta bancario. 
- RF07 - Los usuarios pueden configurar un gasto como recurrente.
- RF08 - Los usuarios pueden seleccionar una categoría de gasto para cada gasto ingresado.
- RF09 - El sistema permite visualizar un resumen de gastos por mes (gráficas, o listados).
- RF10 - Los usuarios pueden compartir gastos entre ellos (verificar si es posible o si nos complicaría mucho).
- RF11 - Los usuarios pueden seleccionar una vista de listado o pie chart para los resúmenes de gastos.
- RF12 - El sistema muestra total en pesos y total en dólares si hay gastos ingresados en más de una moneda.

#### No Funcionales

- RNF01 - Toda funcionalidad del sistema debe responder al usuario en menos de 5 segundos.
- RNF02 - El sistema debe ser capaz de operar adecuadamente con hasta 150.000 usuarios con sesiones concurrentes.
- RNF03 - El sistema utilizará servidores en la nube para respaldar su información.
- RNF04 - Los permisos de acceso al sistema podrán ser cambiados unicamente por el administrador de acceso a datos.
- RNF05 - El sistema debe contar con guías de usuario estructuradas adecuadamente.
- RNF06 - La aplicación web debe tener un diseño *Responsive*.
- RNF07 - El sistema debe ser estable, y el promedio máximo de duración de fallas debe ser no máximo de 15 minutos. 
- RNF08 - El sistema debe ser compatible con los navegadores Google Chrome y Firefox.
- RNF09 - El sistema será desarrollado en HTML, CSS y JS.

### User Stories

En base a los requerimientos detallados anteriormente se crearon las User Stories correspondientes, explicando cual es el valor que cada funcionalidad le brindará al usuario. A continuación se proporciona un resumen las User Stories creadas con una referencia al requerimiento del cual se desprende cada User Story. 

| ID User Story | Título                                           | # Requerimiento |
| :---          | :---                                             | :----:          |
| 1             | Crear una cuenta                                 | RF01            |
| 2             | Ingresar a una cuenta                            | RF02            |
| 3             | Ingresar un gasto/ingreso                        | RF03            |
| 4             | Visualizar calendario de pagos                   | RF04            |
| 5             | Recibir email con notificaciones y recordatorios | RF05            |
| 6             | Visualizar categorías                            | RF08            |
| 7             | Compartir gastos                                 | RF10            |
| 8             | Diferenciar monedas                              | RF12            |

Para ver en detalle cada User Story (usuario, narrativa, criterios de aceptación) dirigirse al siguiente [link](/docs/user-stories/user-stories.pdf).

### Use Cases

Con lo Requerimientos y User Stories ya definidos, se procede a desarrollar los Use Cases respectivos a cada User Story. En el siguiente [link](/docs/use-cases/use-cases.pdf) se detallan el *actor*, el *curso normal* y el *curso alternativo* de cada Use Case.

### Prototipado

Teniendo las User Stories y Requerimientos ya definidos, se pudo comenzar a trabajar en los bocetos de interfaz de usario. Se utilizaron herramientas digitales para generar los prototipos ya que esto facilitaba la rápida iteración de los diseños una vez recibido feedback de potenciales usuarios. A continuación se listan los bocetos creados para cada User Story y se detallan los cambios entre versiones. En la última versión de cada boceto se incluye también los cursos normales y alternos en caso de que aplique.

#### Crear una cuenta - User Story ID #1

  - Boceto inicial - [Creación Cuenta v1](./bocetosiu/creacion-cuenta-v1.jpeg)
  - Se agregan más campos al formulario y nombre de la app - [Creación Cuenta v2](./bocetosiu/creacion-cuenta-v2.jpeg)
  - Labels cambiadas a placeholders, boton de cerrar - [Creación Cuenta v3](./bocetosiu/creacion-cuenta-v3.png)

#### Ingresar a una cuenta - User Story ID #2

  - Boceto inicial - [Ingresar a cuenta v1](./bocetosiu/ingreso-a-cuenta-v1.jpeg)
  - Se agrega link para cambiar contraseña y nombre de la app - [Ingresar a cuenta v2](./bocetosiu/ingreso-a-cuenta-v2.jpeg)
  - Labels cambiadas a placeholders y se cambia botón de registrarse a link para resaltar el botón de ingresar - [Ingresar a cuenta v3](./bocetosiu/ingreso-a-cuenta-v3.png)

#### Ingresar un gasto/ingreso - User Story ID #3

  - Boceto inicial - [Ingresar gasto/ingreso v1](./bocetosiu/registro-gasto-v1.jpeg)
  - Se agrega campo para monto y campo para nombre del gasto (diferente a la descripción) - [Ingresar gasto/ingreso v2](./bocetosiu/registro-gasto-v2.jpeg)
  - Se colocan en misma línea botones de moneda y monto, y fecha y categoría para darle una apariencia más simple. También se cambian dropdowns por botones que abran una ventana modal - [Ingresar gasto/ingreso v3](./bocetosiu/registro-gasto-v3.jpeg)
  - Se agrega opción de registrar gasto o ingreso. Se cambia botón de cancelar por un botón más simple y ubicado en parte superior de la pantalla - [Ingresar gasto/ingreso v4](./bocetosiu/registro-gasto-v4.png)
  - Versión final con ventanas que se abren a partir de botones de categoría y fecha. Botón de moneda no abre una ventana, sino que cambia de Pesos a Dólares o viceversa - [Ingresar gasto/ingreso v5](./bocetosiu/registro-gasto-v5.png)

#### Visualizar calendario de pagos - User Story ID #4

  - Boceto inicial - [Visualizar calendario de pagos v1](./bocetosiu/visualizar-calendario-pagos-v1.jpeg)
  - Se elimina la columna de fecha, y se dividen las filas por día (gastos diferentes en el mismo día aparecen bajo el mismo día) - [Visualizar calendario de pagos v2](./bocetosiu/visualizar-calendario-pagos-v2.jpeg)
  - Se cambia dropdown de mes, por un carrusel de meses (si se hace click sobre el mes, se abre una lista con meses). Se muestra boton de agregar gasto debajo de la lista para un fácil acceso a esta funcionalidad - [Visualizar calendario de pagos v3](./bocetosiu/visualizar-calendario-pagos-v3.png)
  - Se agrega toggle para ver en formato lista o en formato gráfico de torta (pie chart). Se detalla visualización en opcion pie chart - [Visualizar calendario de pagos v4](./bocetosiu/visualizar-calendario-pagos-v4.png)
  - En vista lista se agrega debajo del mes el total para el mes seleccionado - [Visualizar calendario de pagos v5](./bocetosiu/visualizar-calendario-pagos-v5.png)


#### Visualizar categorías - User Story ID #6

  - Boceto inicial - [Visualizar categorías v1](./bocetosiu/seleccion-categoria-v1.jpeg)
  - Se cambia de seleccionar con radio buttons y hacer click en boto 'Seleccionar', a simplemente seleccionar con hacer click en el ítem de la lista. Esto también remplaza el botón volver. Se utiliza área de radio buttons para mostrar un ícono de la categoría. Por último, se agrega una barra de búsqueda y un botón de retroceder en caso de que no se seleccione una categoría - [Visualizar categorías v2](./bocetosiu/seleccion-categoria-v2.png)

#### Compartir gastos - User Story ID #7

  - Se agrega a boceto de *Ingresar un gasto/ingreso* un botón para compartir gasto que abre una nueva ventana para agregar una direccion de email - [Ingresar gasto/ingreso v6](./bocetosiu/registro-gasto-v6.png)

#### Diferenciar monedas - User Story ID #8

  - En *Ingresar un gasto/ingreso* ya se abordó esta función, pero se agrega opción de ver por moneda en *Visualizar calendario de pagos*. Se agrega un toggle *Pesos/Dólares* para cambiar la moneda para la que se desea visualizar el calendario de pagos (se agrega a vista lista y pie chart) - [Visualizar calendario de pagos v6](./bocetosiu/visualizar-calendario-pagos-v6.png)

## Validación y verificación

Para verificar y validar el proyecto realizamos entrevistas al azar a tres personas ajenas al mismo. Fueron enviados los prototipos y los requerimientos funcionales para su análisis. Los feedbacks obtenidos fueron de mucha utilidad ya que serán tenidos en cuenta a la hora del desarrollo y para evaluar requerimientos. 

Feedback – Florencia Cosentini

“La verdad que según los bocetos recibidos la aplicación tiene muy buen aspecto, lo único que le agregaría es un poco más de distintos colores para identificar los pie chart. Parecería ser muy simple e intuitiva como les había comentado en la encuesta. El único detalle que veo y que agregaría es que si se habilita la opción de compartir gastos yo pueda enviar un link de referencia a la otra persona para que se registre y no tenga por qué estar siempre registrada”

Feedback - Sebastián Martinez

"Me gusto mucho especialmente por el hecho de que podria tener los datos sicronizados tanto en mi computadora como en mi celular, y según los requisitos que detallaron cumplen más que de sobra mis expectativas. No tengo comentarios para hacerles ya que los prototipos y requerimientos me parecen muy completos, estoy deseando poder verla en marcha"


Feedback – Carla ********


## Reflexión

Haber trabajado en este proyecto desde cero, cambió significativamente nuestras perspectivas de lo que implica el proceso de desarrollo de software. Nos ayudó a comprender que no solo escribir código es importante para entregar software de calidad y que cumpla con las expectativas de los usuarios. También nos resultó evidente el rol clave que juegan las etapas inciales del proyecto para disminuir el trabajo innecesario en etapas posteriores.

Con respecto a la división de tareas, el método que útilizamos fue dividirnos partes del proyecto y luego de finalizada la tarea se subían los cambios al repositorio remoto. Luego de subidos los cambios el otro se encargaba de verificar y/o testear que lo realizado por el otro integrante estaba correcto o si debia ser modificado.

Este método que utilizamos nos parecio de mucha utilidad y pretendemos mantenerlo para la próxima entrega ya que ambos integrantes conocemos la totalidad del proyecto y pudimos identificar detalles que si no hubieran sido verificados posteriormente no estarian correctos. 

A continuación se realiza un breve repaso de las Técnicas aplicadas y se proporciona una reflexión sobre los aprendizajes de cada área. 

#### Versionado

Ambos coincidimos que es el área en la que más aprendimos. Al inicio fue un proceso desafiante ya que consideramos que es una habilidad que se gana con la práctica. Los primeros commits que realizamos se podría decir que se encuentran dentro de lo que serían buenas prácticas de versionado, pero a medida que fuimos avanzando en el trabajo fuimos comprendiendo cada vez mejor que commandos ejecutar, que significaban las respuestas de Git cuando nos encontrabamos con un error, y como manejar las ramas entre otras cosas.

A pesar del aprendizaje que tuvimos en esta área, consideramos que deberíamos seguir practicando para la próxima etapa del proyecto, en particular en el uso de las ramas. Un ejemplo de esto es que las ramas que fuimos creando no las creamos desde sub-ramas, sino que en algunos casos las creamos directamente desde el main o cualquier otra rama sin tener presente lo que eso implicaba. Este tipo de errores nos dificulba saber bien donde teníamos las últimas versiones de los documentos y se perdía mucho tiempo buscando en cual rama estaba el documento que buscabamos.

Otro aspecto que aprendimos casi al final del proyecto, fue como traer al repositorio local ramas nuevas del repositorio remoto. Al comienzo no comprendíamos por que no nos aparecian todos los cambios y ramas en nuestros repositorios locales incluso luego de realizar un git pull. Por último, otro aspecto a mejorar es la realización de los commits desde el Visual Studio Code, ya que algunos commits fueron enviados sin comentarios simplemente con el mensaje commit, punto que tendremos en cuenta en la próxima entrega.

En resumen, fue muy interesante poder aplicar Git en un proyecto real y podemos decir que ahora si podemos trabajar más comodos con Git.

#### Elicitación

Para la elicitación utilizamos dos técnicas, *Cuestionario* y *Ingeniería Reversa*. Inicialmente teniamos pensado utlizar una técnica más, *Entrevista*, pero nos dimos cuenta que para el tipo de aplicación que estamos desarrollando no era tan necesario hacerle una entrevista a un usuario específico (esto aplicaría más en el caso de una persona que realiza una tarea dentro de una empresa, y la entrevista sería sobre sus procesos de trabajo). Además, el Cuestionario ya nos iba a brindar mucha información de varios potenciales usuarios.

Si bien de la técnica de *Ingeniería Reversa* se obtuvo algo de información útil, nos sorprendió muchísimo la cantidad de personas que respondieron nuestra encuesta y el feedback adicional que nos brindaron en la sección de comentarios libre. Este feedback fue clave para validar algunas ideas que ya teníamos para los requerimientos y a su vez adicionar otros puntos que no se nos habían ocurrido y los potenciales usuarios consideraban de alta importancia. Ambos coincidimos en que fue un gran acierto utilizar la técnica de Cuestionario para este proyecto, y de hacerlo simple y corto para que las personas lo completaran en pocos minutos y sin mucho esfuerzo.

El aprendizaje que nos llevamos del proceso de elicitación, es la importancia de aplicar la técnica correcta para el proyecto en el que estamos trabajando y el tipo de cliente/usuario final. Con esto nos referimos a que lo que puede funcionar para un proyecto posiblement no funcione para otro, pero cuando se utiliza la técnica adecuada y con las características adecuadas se puede extraer mucha información de alto valor para nuestro proyecto. 

#### Especificación

Luego de la etapa de elicitación, la definición de Requerimientos, User Stories, Use Cases y Prototipos nos resultó bastante fluida ya que la elicitación nos brindó la información que necesitabamos y sólo debiamos construir sobre ella. Al seguir los pasos de primero denifir los Requerimientos, luego las User Stories y por último los Use Cases sentimos que era un proceso incremental que construía sobre lo ya definido agregando otras 'capas' de detalle al proyecto. 

Por último, el bocetado fue una etapa de mucho trabajo, ya que se crearon varias versiones para diferentes funcionalidades, y en cada iteración se le pedía feedback a personas cercanas y ajenas al proyecto. Este fue un proceso muy laborioso pero consideramos que el resultado final quedó muy pulido y estamos conformes con los bocetos finales. En conclusión, el iterar en los diseños tiene un alto valor que se ve en el producto final.