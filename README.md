# task-cli

Un gestor de tareas, completo, para usarlo desde la terminal

## 1. Pasos para inicializar la estructura y proyecto

### 1.1 Inicializar nuestro proyecto con npm

```shell
# Inicializar con wizard
npm init
```

### 1.2 Instalar typescript

```shell
# Agregarlo como dependencia de desarrollo
npm install -D typescript
```

### 1.3 Ejecución de archivos javacript, de forma directa usando Node

```shell
# node <ruta del archivo>
node ./dist/index.js
```

### 1.3 Ejecución de archivos typescript, de forma directa usando tsx

```shell
# npx - Forma de usar paquetes, sin instalarlo en nuestro proyecto. Una forma directa

# tsx - Paquete, que nos permite ejecutar archivos typescript

# npx tsc <ruta del archivo>
npx tsx ./src/index.ts
```
