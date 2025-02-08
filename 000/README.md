# Comandos del proyecto

## Inicio del proyecto

```markdown
npm init
```

## Ejecucion del proyecto

```markdown
npm start <!--Predefinido-->
npm run dev <!--Definidos por el usuario-->
```

## Instalacion de nodemon

### Sirve para ejecutar el proyecto (en desarrollo - dev) con todos los cambios realizados. No se utiliza para ambientes en produccion, solo en desarrollo.

```markdown
npm install --save-dev nodemon
```

#### Se debe agregar al package.json

```markdown
dev": "nodemon src/app.js"
```

### Ejecucion:

```markdown
npm run dev
```
