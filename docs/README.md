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

- [User Persona 25 años](./investigacion/user-persona-25.png)
- [User Persona 35 años](./investigacion/user-persona-35.png)


### Modelo conceptual del problema

En base a los requerimientos del proyecto (letra del proyecto) y al proceso de elicitación y se desarrollo el siguiente modelo conceptual del sistema, que se utilizará en conjunto con los resultados de la investigación para definir los requerimientos y características del sistema a desarrolla.

El modelo conceptual se encuentra en el siguiente [link]().

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



### Prototipado




## Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes



