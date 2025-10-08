# 🚀 Guía Rápida - Demo de Docker

Esta es una guía resumida para empezar rápidamente. Para instrucciones completas, consulta el [README.md](README.md).

---

## PARTE 1️⃣: Docker Básico (Sin Orquestador)

### ⚡ Comandos Esenciales

```bash
# 1. Construir la imagen
docker build -t aws-skills-centers-demo:v1 .

# 2. Ejecutar el contenedor
docker run -d -p 8080:80 --name aws-skills-centers-web aws-skills-centers-demo:v1

# 3. Ver el contenedor corriendo
docker ps

# 4. Ver logs
docker logs aws-skills-centers-web

# 5. Detener y eliminar
docker stop aws-skills-centers-web
docker rm aws-skills-centers-web
```

### 🌐 Acceder a la Aplicación
**http://localhost:8080**

---

## PARTE 2️⃣: Orquestación con Docker Compose

### ⚡ Comandos del Orquestador

```bash
# 1. Iniciar TODOS los servicios (un solo comando)
docker-compose up -d

# 2. Ver todos los servicios orquestados
docker-compose ps

# 3. Ver logs de todos los servicios
docker-compose logs -f

# 4. Reconstruir y reiniciar
docker-compose up -d --build

# 5. Detener todos los servicios
docker-compose down
```

### 🌐 Acceder a la Aplicación
**http://localhost:8080**

---

## 🔄 Comparación Rápida

| Acción | Docker Básico | Docker Compose |
|--------|---------------|----------------|
| Iniciar | `docker run...` (largo) | `docker-compose up -d` |
| Detener | `docker stop + rm` | `docker-compose down` |
| Ver logs | `docker logs <nombre>` | `docker-compose logs` |
| Múltiples servicios | Múltiples comandos | Un solo comando |
| Configuración | Memorizar parámetros | Archivo YAML |

---

## 📋 Comandos de Diagnóstico

```bash
# Ver contenedores activos
docker ps

# Ver todos los contenedores
docker ps -a

# Ver imágenes disponibles
docker images

# Entrar al contenedor (para explorar)
docker exec -it aws-skills-centers-web sh

# Ver uso de recursos
docker stats

# Con Docker Compose
docker-compose ps
docker-compose logs
```

---

## 🧹 Limpiar Todo

### Docker Básico
```bash
docker stop aws-skills-centers-web
docker rm aws-skills-centers-web
docker rmi aws-skills-centers-demo:v1
```

### Docker Compose
```bash
# Detener y eliminar contenedores
docker-compose down

# Eliminar también las imágenes
docker-compose down --rmi all

# Limpiar sistema completo (¡cuidado!)
docker system prune -a
```

---

## ⚠️ Problemas Comunes

| Problema | Solución |
|----------|----------|
| Puerto 8080 ocupado | Cambia el puerto: `-p 3000:80` o edita `docker-compose.yml` |
| Contenedor no inicia | Revisa logs: `docker logs <nombre>` o `docker-compose logs` |
| Cambios no se reflejan | Reconstruye: `--build` |
| Error de permisos | Ejecuta Docker Desktop como administrador |
| Nombre duplicado | Elimina el contenedor: `docker rm -f <nombre>` |

---

## 🎯 Tu Primera Modificación

### Con Docker Básico
```bash
# 1. Edita index.html
# 2. Reconstruye la imagen
docker build -t aws-skills-centers-demo:v1 .
# 3. Detén el contenedor viejo
docker stop aws-skills-centers-web && docker rm aws-skills-centers-web
# 4. Ejecuta el nuevo contenedor
docker run -d -p 8080:80 --name aws-skills-centers-web aws-skills-centers-demo:v1
```

### Con Docker Compose (Más Fácil)
```bash
# 1. Edita index.html
# 2. Un solo comando hace todo
docker-compose up -d --build
```

---

## 💡 Conceptos Clave

### Docker Básico
- **Imagen**: Plantilla inmutable (código + dependencias)
- **Contenedor**: Instancia en ejecución de una imagen
- **Puerto mapping**: `-p host:container`

### Orquestación
- **Servicio**: Definición de un contenedor en el orquestador
- **Declarativo**: Describes QUÉ quieres (YAML)
- **Imperativo**: Describes CÓMO hacerlo (comandos)

---

## 🚀 Próximo Paso: AWS ECS

Lo que aprendiste aquí se traduce a AWS ECS:

- `Dockerfile` → Igual en ECS
- `docker build` → AWS CodeBuild o local
- `docker-compose.yml` → Task Definition
- `docker-compose up` → Create Service
- Contenedores locales → Fargate (sin servidor)

---

## 📚 Aprende Más

- [README Completo](README.md) - Documentación detallada con ejercicios
- [Dockerfile](Dockerfile) - Cómo se construye la imagen
- [docker-compose.yml](docker-compose.yml) - Configuración del orquestador

---

## 🌐 Conecta

- 👨‍🏫 **Instructor:** [Gabriel - AWS Community Builder](https://builder.aws.com/community/@awshero)
- 🎓 **Formación Cloud LATAM:** [Bootcamp Institute](https://bootcamp.institute)
- 💬 **AWS Skills Centers:** [Formación gratuita](https://aws.amazon.com/es/training/skills-centers/)

---

**© 2025 Bootcamp Institute**

*Empoderando la próxima generación de profesionales cloud* ☁️
