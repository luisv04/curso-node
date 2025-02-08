# Comandos del proyecto

## Comandos de Git

### Configuracion de git

```
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Configuracion inicial

```
git init
```

### Conectar a repositorio remoto

```
git remote add origin https://github.com/usuario/repositorio.git
```

### Clonar repositorio

```
git clone https://github.com/usuario/repositorio.git
```

### Ver estado de los archivos

```
git status
```

### Crear una rama

```
git branch nombre-rama
```

### Renombrar rama

```
git branch -m main     # Puedes colocar el nombre que quieras en lugar de main
```

### Añadir archivos

```
git add nombre_archivo # Añade un archivo específico
git add . # Añade todos los archivos nuevos o modificados
```

### Confirmar cambios

```
git commit -m "Mensaje descriptivo del cambio"
```

### Subir cambios a repositorio

```
git push origin main         # Si la rama se llama "main"
git push origin master       # Si la rama se llama "master"

git push -f origin main      # Para forzar la subida
```

### Descargar cambios

```
git pull origin main
```

### Actualizar tu repositorio local con los últimos cambios (fetch + merge):

```
git fetch origin            # Descarga cambios sin mezclarlos
git merge origin/main       # Mezcla los cambios en tu rama actual
```

#### Otros

```
git log                         # Ver el historial de commits
git rm nombre_archivo           # Eliminar un archivo
git mv archivo_old archivo_new  # Mover un archivo
git checkout -- nombre_archivo  # Remover un archivo antes de hacer commit
git diff                        # Ver diferencia entre cambios
```

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
