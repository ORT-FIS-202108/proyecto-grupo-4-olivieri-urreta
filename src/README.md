# Informe académico entrega 2

Proyecto: 202108 MisGastos  
Autores: Giovanni Olivieri (205237), Diego Urreta (238422)  
Grupo: N3A
Docentes: Gabriela Sánchez, Miguel Sánchez  
Repositorio Git: [Grupo 4 - Olivieri/Urreta](https://github.com/ORT-FIS-202108/proyecto-grupo-4-olivieri-urreta.git)  
Fecha Code Freeze: 22-nov-2021
Fecha de entrega: 29-nov-2021

## Construcción

### Implementación de funciones principales (sin la necesidad de persistencia de datos)

Para la implementación de las funciones de la aplicación se tomaron como punto de partida los requerimientos funcionales definidos en la primer entrega del obligatorio. De todos los requerimientos funcionales, sólo se trabajó en aquellos que era posible implementar con las herramientas y conocimientos actuales de ambos integrantes del equipo.

Se descartaron en esta etapa aquellos que implicaban una complejidad técnica elevada, gran cantidad de horas necesarias para implementar, o necesidad de aplicar herramientas no vistas en clase. Un ejemplo de esto, es la implementación de un servicio email en el servidor para enviar emails con recordatorios a los usuarios.

**Requerimientos implementados**
- RF01 - El sistema debe permitir crear una cuenta.
- RF02 - El sistema debe requerir usuario y contraseña para mostrar e ingresar gastos.
- RF03 - Los usuarios pueden registrar un gasto con descripción, precio y fecha.
- RF04 - El sistema debe implementar un calendario de pagos.
- RF07 - Los usuarios pueden configurar un gasto como recurrente.
- RF08 - Los usuarios pueden seleccionar una categoría de gasto para cada gasto ingresado.
- RF09 - El sistema permite visualizar un resumen de gastos por mes (gráficas, o listados).

**Requerimientos no implementados**
- RF05 - Los usuarios deben recibir recordatorios de pagos (e-mail).
- RF06 - Llevar un control de estado de cuenta bancario.
- RF10 - Los usuarios pueden compartir gastos entre ellos (verificar si es posible o si nos complicaría mucho).
- RF11 - Los usuarios pueden seleccionar una vista de listado o pie chart para los resúmenes de gastos.
- RF12 - El sistema muestra total en pesos y total en dólares si hay gastos ingresados en más de una moneda.

### Configuración de plataforma tecnológica para desarrollo y producción

Se crea la rama ```develop``` a partir de la rama ```main```, siendo la rama ```develop``` el punto de partida para todas las sub-ramas ```feature-*```.

Todo el trabajo de desarrollo de las distintas funciones de la aplicación se lleva a cabo en las distintas ramas ```feature-nombre```, donde ```nombre``` es el nombre de la función a desarrollar. Una vez que se completa el desarrollo de una función, se hace un merge con la rama ```develop```. 

Luego de finalizado el desarrollo de todas las funciones, se congela el código de las funciones y se hace un merge de la rama ```develop``` a la rama ```main```. A partir de este punto sólo se trabaja en el test de sistema, la documentación de issues y generación del informe académico. Para el trabajo en el test de sistema se crea la rama ```testing``` a partir de la rama ```main```; para el trabajo en la documentación de issues y generación del informe académico se crea la rama ```documentacion``` a partir de la rama ```main```.

Finalizadas las actividades de test de sistema, reporte de issues y generación del informe académico, se integran las ramas ```testing``` y ```documentacion``` a la rama ```main```.

*Agregar imagen de Git Graph con las ramas y commits*  

### Documentación del uso de librerías externas (package.json)

En el archivo _package.json_, bajo las secciones _devDependencies_ y _dependencies_, se pueden encontrar las siguientes dependencias que refieren a las librerías externas utilizadas durante el desarrollo del proyecto:

```
"devDependencies": {
    "eslint": "^8.2.0",
    "eslint-config-google": "^0.14.0",
    "jest": "^26.6.3"
  },
"dependencies": {
    "moment": "^2.29.1"
}
```

A continuación se describen brevementes las dependencias y para que se utilizó cada una de ellas.

**ESLint**

```
    "eslint": "^8.2.0",
    "eslint-config-google": "^0.14.0"
```

Es un analizador estático de código que se utilizó en los archivos Javascript para identificar errores de calidad o sintaxis en el código, evitar posibles bugs, y para escribir código que sea más mantenible.

Esta es fue una herramienta de gran importancia ya que ayudó a que el código sea más fácil de leer y entender por todos los integrantes del equipo facilitando la colaboración. 

En cuanto a la calidad del código, durante la instalación y configuración se seleccionó el estándar de Google como el conjunto de reglas a validar. 

En las sección _Codificación_ se brindan más detalles sobre el impacto de ESLint y el análisis estático del código.

**Jest**

```
    "jest": "^26.6.3"
```

Jest es un framework para testing que se utilizó para llevar a cabo las pruebas unitarias. En la sección _Test unitario_ se brindan más detalles sobre el proceso para ejecutar pruebas unitarias con Jest.

**Moment**

```
    "moment": "^2.29.1"
```

Moment es un framework para validar, formatear y mostrar fechas de una manera más fácil. Se utilizó para validar si las fechas ingresadas por interfaz cumplen con el formato válido y detectar errores.

## Interfaz de usuario

### Interfaz de usuario web / mobile (responsive).

La aplicación cuenta con una interfaz responsive que se ajusta al tamaño del dispositivo y/o browser, que ya estaba implementada en el framework base provisto.

De nuestra parte, al momento de diseñar y agregar los componentes se tuvo en cuenta que estos se ajustaran de manera que no interfirieran entre ellos y mantuviesen el sistema de diseño.

A continuación se muestran ejemplos de las diferentes secciones del sitio y su comportamiento responsive en diferentes dispositivos y tamaños.

**Web**

- 

**Mobile**

- Android

    ![Responsive Mobile](../docs/interfaz-de-usuario/galaxy-s51.png =350x)

- iOS

    ![Responsive iOS](../docs/interfaz-de-usuario/iphone.png =350x)


 
 AGREGAR - Prt screen de pag, login, reg. usuario y home. En ambos tipos dispositivos

### Página única con navegación entre secciones

    AGREGAR - Imagenes de tabs para navegacion. Hablar un poco de como implementamos el cod. (hide/show de sections/tabs)

### Implementación: Material Design Web Components

    Detallar componentes que usamos. Tab Bar, Iconos material, Colores (primary/secondary), font... etc.

### Aplicar un sistema de diseño y principios de usabilidad

    ANALISIS HEURISTICO
    - https://docs.google.com/spreadsheets/d/1k1rVll3sRhTdeMmno9QNb27nRulzlmFe/edit#gid=331333407
    - https://www.nngroup.com/articles/ten-usability-heuristics/

### Cumplimiento de estándar de accesibilidad WCAG
  https://achecker.achecks.ca/checker/index.php
  

### Seguir especificación de estilo

    AGREGAR - Se usaron estilo de la letra

## Codificación

### IDE Visual Studio Code: configuración común del equipo

- Extensiones
  - Git Graph
  - Git Lens
  - ESLint

### Estándares de codificación Google (HTML, CSS, JavaScript)
  - validadores online
  - CSS - todo OK
  - HTML - 19 errores y 10 warnings en un inicio, despues 8 errores 6 warnings
  - utf encoding

  - camel case en variables y funciones

### Buenas prácticas de OOP: separación de lógica e interfaz

    AGREGAR - prt. screens de clases 
        Funciones en sistema ( y clases) y no en index.js

### Análisis estático de código: mostrar reducción de problemas
    AGREGAR QUE USAMOS eslint 
    y agregar imagenes

## Test unitario

### Test unitarios en Jest

    Describir un poco como implementamos los tests

### 100% cobertura en clases de dominio

    MOSTRAR evidencia

## Test de sistema

### Realizar test de sistema sobre la versión congelada
    TEST PLANIFICADO
    TEST EXPLORATORIO
    EVALUACIÓN DE CALIDAD
### Ambiente de testing independiente del desarrollo



### Generar casos de prueba aplicando técnica partición equivalente
### Detallar sesiones de prueba exploratori
- No hacer sesiones cortas de 30 min, pero detallar en el informe que se opto por definir sesiones más cortas
    - Oportunidades vs Mision (cubrir al menos un % del tiempo en la misión)
    - En el informe detallar como se dividio el tiempo (inv y reporte, diseño y ejecucion, config. pruebas)
    - Usar template 'Sesion de Testing Exploratorio' del Drive


## Reporte de issues

### Reportar issues (bugs, improvements, missing features) en GitHub 

    Cod issue y titulo.
    Link a seccion issues

### Aplicar buenas prácticas de reporte de issues

    AGREGAR - describir que agregamos a los issues y por que.
  
### Definir labels para tipos de issue y niveles de severidad

    labels - usamos las predeterminadas de github

**Severidad**
  - Alta - Problemas que impiden el funcionamiento de las funcionalidades base del sistema. (Agregar/Editar/Borrar Gasto, Iniciar Sesión, Registro de Usuario, Recuperar Contraseña).
  - Media - Problemas en navegación de la interfaz, deficiencias de usabilidad, y requerimientos funcionales no implementados (Mostrar gráfico de torta para categorías de gastos, Mostrar total del mes).
  - Baja - Problemas de diseño y defectos visuales que no afectan las funciones y/o usabilidad del sistema. Funcionalidades extras a implementar (Creación de gastos con multiples divisas, compartir gasto).

  **Prioridad**
  - Crítica - Se debe resolver lo más pronto posible. Se detiene el desarrollo en otras áreas para resolver este problema.
  - Media -  Se debe resolver antes del próximo release.
  - Baja - Se puede posponer para otro release. Se resulve si hay tiempo.


### Dejar issues abiertos para correcciones o mejoras futuras

    DESCRIBIR QUE QUEDO PARA EL FUTURO

### Sumarizar número de issues reportados por tipo

    GRAFICA/TABLA - Y breve analisis de issues y sus tipos

### Realizar una evaluación global de la calidad
  - Clase nov 11 luego de la mitad
  - Cobertura de test y resultado para las las funciones criticas
  - Cant. de issues reportados y resueltos
    - Si son issues criticos o no
  - Funcionalidades criticas, cuantos issues tienen
  - Mejoras que se pueden hacer a partir de issues
  - De todos los casos de prueba diseñados, cuantos se pudieron ejecutra
    - De los ejecutados cuantos pasaron/fallaron
    - Tiempo utilizado en pruebas
  - Analisis de estandares
  - Analisis de usabilidad
  - Categorias de los issues
    - Cuantos de usabilidad/accessibilidad/typo
  - Usar Visualizaciones / Graficas para mostrar los analisis anteriores.

Conclusión - Prox. pasos a seguri (salir a prod. o no) Resolver x cosas antes... etc

## Reflexión

### Detalle del trabajo individual


### Técnicas aplicadas y aprendizajes

