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

Adicionalmente se agregó al archivo ```.git/info/exclude``` la extensión ```.DS_Store```. Archivos de este tipo son utilizados por el sistema operativo y no son necesarios para el proyecto, por lo que se decidió agregarlos al archivo exclude y que no fueran trackeados por Git.

## Versionado

### Uso de ramas

Para el proyecto se definieron ramas agrupadas en las dos áreas detalladas más abajo. Aunque en esta estapa del proyecto solo se trabajó en *Investigación y Requerimientos*, ya se definieron las ramas que se utilizarán durante la etapa de *Desarrollo*. 

#### Investigación y requerimientos
- Informe - *Rama principal del informe académico, a la cual se integrarán todas las sub-ramas una vez completadas las etapas de elicitación, especificación de requerimientos, validación, verificación y reflexión.*
  - Readme - *Rama para el documento principal del informe donde se aborda cada punto de la letra del proyecto para la [ entrega 1](../letra.md).*
  - Elicitación - *Rama para los documentos y archivos generados durante las diferentes actividades de elicitación. Se crearan a su vez sub-ramas para cada técnica de elicitación que se lleve a cabo, las cuales se nombraran con el siguiente criterio:  
  ```elicitacion-nombre_tecnica```*
  - Especificaciones - *Rama para los documentos e imágenes generados durante la definición de las especificaciones basadas en los resultados de la elicitación. Una vez finalizadas las tareas en las sub-ramas, se integrarán a esta rama.*
    - Requerimientos - *Rama para los documentos de requerimientos, funcionales y no fucionales. Sub-ramas se integrarán a esta rama luego de definidos los requerimientos.*
      - Funcionales - *Rama para requerimientos funcionales*
      - No funcionales - *Rama para requerimientos no funcionales*
    - User Stories - *Rama user stories*
    - Bocetos UI - *Rama para bocetos de UI*
  
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

Para identificar las necesidades de los interesados en la aplicación de registro de gastos, se utilizaron tres técnicas de elicitación:

- Entrevista
- Cuestionario
- Análisis de GUI - ingeniería reversa

A continuación se detalla el proceso llevado a cabo para cada técnica de elicitación y se proporciona evidencia de su realización. Por último se abordan los resultados y la reflexión basada en estos.

#### Entrevista

#### Cuestionario

#### Análisis de GUI - ingeniería reversa

Referencias a fuentes de información


### Caracterización de usuarios: User Personas

### Modelo conceptual del problema

## Especificación

Definición de requerimientos funcionales y no funcionales

User Stories / Use Cases detallados

Bocetos de IU

## Validación y verificación

Verificar la especificación

Validar la solución con personas no involucradas en el proyecto

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes



