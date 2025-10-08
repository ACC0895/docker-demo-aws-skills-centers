# 🚀 Inicio Rápido - 5 Minutos

¿Primera vez con este proyecto? Sigue estos pasos para empezar en minutos.

---

## ✅ Paso 0: Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- ✅ **Docker Desktop** - [Descargar aquí](https://www.docker.com/products/docker-desktop/)
- ✅ **Git** - [Descargar aquí](https://git-scm.com/downloads)

**Verificar instalación:**
```bash
docker --version
docker-compose --version
git --version
```

---

## 📥 Paso 1: Clonar el Repositorio

```bash
# Clona el repositorio
git clone https://github.com/TU-USUARIO/docker-demo-aws-skills-centers.git

# Entra al directorio
cd docker-demo-aws-skills-centers

# Verifica que tienes todos los archivos
ls -la
```

Deberías ver:
```
README.md
Dockerfile
docker-compose.yml
index.html
styles.css
script.js
...
```

---

## 🐳 Opción A: Inicio Súper Rápido (Docker Compose)

**Para empezar rápido sin aprender los detalles:**

```bash
# Un solo comando inicia todo
docker-compose up -d

# Espera 5 segundos y luego abre tu navegador
```

**Abre:** http://localhost:8080

**¡Listo!** 🎉 Tu primera aplicación dockerizada está corriendo.

**Para detener:**
```bash
docker-compose down
```

---

## 📚 Opción B: Aprendizaje Paso a Paso (Docker Básico)

**Para entender cómo funciona Docker:**

### 1️⃣ Construir la imagen
```bash
docker build -t aws-skills-centers-demo:v1 .
```

Verás algo como:
```
[+] Building 2.5s
=> [1/4] FROM docker.io/library/nginx:alpine
=> [2/4] COPY index.html /usr/share/nginx/html/
...
```

### 2️⃣ Ejecutar el contenedor
```bash
docker run -d -p 8080:80 --name mi-primer-contenedor aws-skills-centers-demo:v1
```

### 3️⃣ Ver tu aplicación
**Abre:** http://localhost:8080

### 4️⃣ Ver contenedores corriendo
```bash
docker ps
```

### 5️⃣ Ver logs
```bash
docker logs mi-primer-contenedor
```

### 6️⃣ Detener y limpiar
```bash
docker stop mi-primer-contenedor
docker rm mi-primer-contenedor
```

---

## 🎯 ¿Qué Sigue?

Ahora que tienes todo funcionando:

### 📖 Si eres principiante:
1. Lee: [README.md](README.md) - Documentación completa
2. Sigue: **Parte 1 - Docker Básico** paso a paso
3. Practica: [EJERCICIOS.md](EJERCICIOS.md) - Ejercicios 1-7

### 🎓 Si tienes experiencia con Docker:
1. Salta a: **Parte 2 - Orquestación** en [README.md](README.md)
2. Practica: [EJERCICIOS.md](EJERCICIOS.md) - Ejercicios 8-15
3. Aprende: [CONCEPTOS_ECS.md](CONCEPTOS_ECS.md) - Conexión con AWS ECS

### 👨‍🏫 Si eres instructor:
1. Lee: [GUIA_INSTRUCTOR.md](GUIA_INSTRUCTOR.md)
2. Revisa: Metodología pedagógica
3. Prepara: Tu clase con los materiales

---

## 🆘 Solución de Problemas Rápida

### ❌ Error: "Cannot connect to the Docker daemon"

**Solución:** Abre Docker Desktop y espera a que inicie completamente.

### ❌ Error: "port is already allocated"

**Solución:** El puerto 8080 está ocupado. Usa otro puerto:
```bash
docker run -d -p 3000:80 --name mi-contenedor aws-skills-centers-demo:v1
```
Luego accede a: http://localhost:3000

### ❌ Error: "No such file or directory"

**Solución:** Asegúrate de estar en el directorio correcto:
```bash
cd docker-demo-aws-skills-centers
pwd  # Debería mostrar la ruta al proyecto
ls   # Debería mostrar Dockerfile, index.html, etc.
```

### ❌ Los cambios no se reflejan

**Solución:** Reconstruye la imagen:
```bash
docker-compose down
docker-compose up -d --build
```

---

## 📊 Diagrama del Flujo de Inicio

```
1. Clonar Repo
   ↓
2. cd al directorio
   ↓
3. Elegir opción:
   ├─→ A) docker-compose up -d  (Rápido)
   └─→ B) docker build → docker run (Aprendizaje)
   ↓
4. Abrir http://localhost:8080
   ↓
5. ¡Funciona! 🎉
   ↓
6. Continuar con README.md
```

---

## 🎓 Recursos de Aprendizaje

| Archivo | Para qué sirve | Tiempo estimado |
|---------|----------------|-----------------|
| 📖 [README.md](README.md) | Tutorial completo en 2 partes | 4-6 horas |
| ⚡ [GUIA_RAPIDA.md](GUIA_RAPIDA.md) | Referencia rápida de comandos | 15 min |
| 🎯 [EJERCICIOS.md](EJERCICIOS.md) | 20 ejercicios prácticos | 3-4 horas |
| ☁️ [CONCEPTOS_ECS.md](CONCEPTOS_ECS.md) | Docker → AWS ECS | 1 hora |
| 👨‍🏫 [GUIA_INSTRUCTOR.md](GUIA_INSTRUCTOR.md) | Para instructores | 1 hora |
| 📑 [INDICE.md](INDICE.md) | Navegación del repo | 10 min |

---

## 🌟 Comandos Más Usados

```bash
# Ver contenedores corriendo
docker ps

# Ver todas las imágenes
docker images

# Ver logs
docker logs <nombre-contenedor>

# Detener todo (Docker Compose)
docker-compose down

# Ver ayuda de cualquier comando
docker --help
docker-compose --help
```

---

## 🎓 ¡Regístrate en AWS Skills Centers!

Este es solo el comienzo. Continúa tu aprendizaje con clases gratuitas:

👉 **[https://aws.amazon.com/es/training/skills-centers/](https://aws.amazon.com/es/training/skills-centers/)**

- ✅ Formación 100% gratuita
- ✅ Instructores certificados de AWS
- ✅ Clases presenciales y virtuales
- ✅ Sin requisitos previos

---

## 🌐 Conecta y Aprende Más

### 👨‍🏫 Tu Instructor
**Gabriel** - AWS Community Builder  
🔗 [builder.aws.com/community/@awshero](https://builder.aws.com/community/@awshero)

### 🎓 Formación Profesional
**Bootcamp Institute** - Cloud Computing para toda LATAM en español  
🔗 [bootcamp.institute](https://bootcamp.institute)

### 💬 Comunidad
**AWS Skills Centers** - Formación gratuita global  
🔗 [aws.amazon.com/es/training/skills-centers](https://aws.amazon.com/es/training/skills-centers/)

### 🐛 Reportar Problemas
[GitHub Issues](https://github.com/TU-USUARIO/docker-demo-aws-skills-centers/issues)

---

**¡Bienvenido a tu viaje en la nube!** ☁️

© 2025 Bootcamp Institute

