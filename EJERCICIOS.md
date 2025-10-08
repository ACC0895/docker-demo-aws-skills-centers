# 🎯 Ejercicios Prácticos - Docker a ECS

**© 2025 Bootcamp Institute**

Estos ejercicios están diseñados para reforzar tu comprensión de Docker, orquestación y AWS ECS.

---

## 🟢 PARTE 1: Docker Básico (Sin Orquestador)

### Ejercicio 1: Construcción de Imágenes ⭐
**Objetivo:** Familiarizarte con el proceso de construcción

```bash
# 1. Construye la imagen con el tag v1
docker build -t aws-skills-centers-demo:v1 .

# 2. Construye otra versión con el tag v2
docker build -t aws-skills-centers-demo:v2 .

# 3. Lista todas las imágenes
docker images

# 4. Inspecciona una imagen
docker inspect aws-skills-centers-demo:v1
```

**Preguntas:**
- ¿Cuál es el tamaño de la imagen?
- ¿Cuántas capas tiene?
- ¿Por qué usar nginx:alpine en lugar de nginx:latest?

---

### Ejercicio 2: Gestión de Contenedores ⭐
**Objetivo:** Dominar el ciclo de vida de contenedores

```bash
# 1. Ejecuta un contenedor en el puerto 8080
docker run -d -p 8080:80 --name web1 aws-skills-centers-demo:v1

# 2. Verifica que está corriendo
docker ps

# 3. Accede en el navegador: http://localhost:8080

# 4. Detén el contenedor
docker stop web1

# 5. Verifica que está detenido (no desaparecerá de la lista)
docker ps -a

# 6. Reinícialo
docker start web1

# 7. Verifica que está corriendo de nuevo
docker ps

# 8. Detén y elimina
docker stop web1
docker rm web1
```

**Desafío:** ¿Puedes hacer todo lo anterior en una sola línea?

---

### Ejercicio 3: Puertos Diferentes ⭐
**Objetivo:** Entender el mapeo de puertos

```bash
# 1. Ejecuta el contenedor en el puerto 3000
docker run -d -p 3000:80 --name web-3000 aws-skills-centers-demo:v1

# 2. Ejecuta otro en el puerto 4000
docker run -d -p 4000:80 --name web-4000 aws-skills-centers-demo:v1

# 3. Verifica que ambos están corriendo
docker ps

# 4. Accede a ambos en el navegador
# http://localhost:3000
# http://localhost:4000
```

**Preguntas:**
- ¿Por qué puedo correr múltiples contenedores de la misma imagen?
- ¿Qué pasa si intento usar el mismo puerto host dos veces?

**Limpieza:**
```bash
docker stop web-3000 web-4000
docker rm web-3000 web-4000
```

---

### Ejercicio 4: Exploración Interna ⭐⭐
**Objetivo:** Inspeccionar contenedores desde dentro

```bash
# 1. Ejecuta un contenedor
docker run -d -p 8080:80 --name explorer aws-skills-centers-demo:v1

# 2. Entra al contenedor
docker exec -it explorer sh

# 3. Dentro del contenedor, ejecuta:
ls -la /usr/share/nginx/html/
cat /usr/share/nginx/html/index.html
ps aux
env
exit

# 4. Ver logs
docker logs explorer

# 5. Ver logs en tiempo real (Ctrl+C para salir)
docker logs -f explorer
```

**Desafío:** Modifica el `index.html` desde DENTRO del contenedor y verifica que el cambio se refleja en el navegador.

---

### Ejercicio 5: Variables de Entorno ⭐⭐
**Objetivo:** Pasar configuración a contenedores

```bash
# 1. Ejecuta con variables de entorno
docker run -d -p 8080:80 \
  -e APP_NAME="Mi App" \
  -e ENV=production \
  --name web-env \
  aws-skills-centers-demo:v1

# 2. Verifica las variables
docker exec web-env env
```

**Desafío:** Modifica el `index.html` para mostrar estas variables usando JavaScript.

---

### Ejercicio 6: Límites de Recursos ⭐⭐
**Objetivo:** Controlar uso de recursos

```bash
# 1. Ejecuta con límites de memoria y CPU
docker run -d -p 8080:80 \
  --memory="128m" \
  --cpus="0.5" \
  --name web-limited \
  aws-skills-centers-demo:v1

# 2. Ver uso de recursos
docker stats web-limited
```

**Pregunta:** ¿Por qué es importante limitar recursos en producción?

---

### Ejercicio 7: Reflexión sobre Gestión Manual ⭐⭐⭐
**Objetivo:** Sentir el dolor de la gestión manual

**Escenario:** Necesitas desplegar una aplicación con:
- 1 Frontend (puerto 80)
- 1 Backend API (puerto 3000)
- 1 Base de datos Redis (puerto 6379)

```bash
# Ejecuta los 3 servicios manualmente
docker run -d -p 8080:80 --name frontend aws-skills-centers-demo:v1
docker run -d -p 3000:80 --name backend nginx:alpine
docker run -d -p 6379:6379 --name redis redis:alpine

# Verifica que todos están corriendo
docker ps
```

**Preguntas de Reflexión:**
1. ¿Cuántos comandos necesitaste?
2. ¿Qué pasa si uno falla? ¿Cómo lo sabrías?
3. ¿Cómo se comunican entre sí?
4. ¿Cómo los actualizas todos?
5. ¿Es esto escalable?

**Limpieza:**
```bash
docker stop frontend backend redis
docker rm frontend backend redis
```

---

## 🟡 PARTE 2: Orquestación con Docker Compose

### Ejercicio 8: Tu Primer docker-compose ⭐
**Objetivo:** Sentir la diferencia del orquestador

```bash
# 1. Inicia TODO con un comando
docker-compose up -d

# 2. Verifica los servicios
docker-compose ps

# 3. Ver logs de todos
docker-compose logs

# 4. Detén todo con un comando
docker-compose down
```

**Pregunta:** ¿Qué te parece más fácil comparado con Docker básico?

---

### Ejercicio 9: Modificar y Redesplegar ⭐
**Objetivo:** Flujo de trabajo con orquestador

```bash
# 1. Edita index.html - cambia el mensaje de bienvenida

# 2. Reconstruye y reinicia (un solo comando)
docker-compose up -d --build

# 3. Refresca el navegador
# http://localhost:8080
```

**Compara:** ¿Cuántos pasos necesitarías sin Docker Compose?

---

### Ejercicio 10: Agregar un Segundo Servicio ⭐⭐
**Objetivo:** Aplicación multi-contenedor

Edita `docker-compose.yml` y agrega:

```yaml
services:
  # ... servicio web existente

  api:
    image: nginx:alpine
    container_name: api-backend
    ports:
      - "3000:80"
    restart: unless-stopped
    labels:
      tier: "backend"
```

```bash
# Reinicia con el nuevo servicio
docker-compose up -d

# Verifica que ambos están corriendo
docker-compose ps

# Deberías ver:
# - aws-skills-centers-web (puerto 8080)
# - api-backend (puerto 3000)
```

**Accede a:**
- Frontend: http://localhost:8080
- API: http://localhost:3000

---

### Ejercicio 11: Networking entre Contenedores ⭐⭐⭐
**Objetivo:** Comunicación inter-contenedor

```yaml
# Agrega a docker-compose.yml
services:
  web:
    # ... configuración existente
    environment:
      - API_URL=http://api:80  # ¡Nota que usamos el nombre del servicio!
  
  api:
    # ... configuración existente
```

```bash
# Reinicia
docker-compose up -d

# Entra al contenedor web
docker exec -it aws-skills-centers-web sh

# Desde dentro, haz ping al API (por nombre)
ping api
wget -O- http://api/
exit
```

**Pregunta:** ¿Cómo supo el contenedor web dónde está "api"?

---

### Ejercicio 12: Escalar Servicios ⭐⭐
**Objetivo:** Múltiples instancias

```bash
# Escala el servicio web a 3 instancias
docker-compose up -d --scale aws-skills-centers-demo=3

# Ver todas las instancias
docker-compose ps

# Ver logs de todas
docker-compose logs -f
```

**Nota:** Para que esto funcione correctamente con múltiples instancias en el mismo puerto, necesitarías un load balancer (que aprenderás en ECS).

---

### Ejercicio 13: Variables de Entorno desde Archivo ⭐⭐
**Objetivo:** Configuración externalizada

1. Crea un archivo `.env`:
```bash
# .env
APP_NAME=AWS Skills Centers Demo
APP_VERSION=2.0
ENVIRONMENT=production
PORT=8080
```

2. Modifica `docker-compose.yml`:
```yaml
services:
  aws-skills-centers-demo:
    # ...
    env_file:
      - .env
    ports:
      - "${PORT}:80"
```

3. Reinicia:
```bash
docker-compose up -d
```

**Ventaja:** Puedes tener diferentes `.env` para dev, staging, prod.

---

### Ejercicio 14: Volúmenes para Desarrollo ⭐⭐⭐
**Objetivo:** Hot reload sin reconstruir

Modifica `docker-compose.yml`:

```yaml
services:
  aws-skills-centers-demo:
    # ...
    volumes:
      - ./index.html:/usr/share/nginx/html/index.html
      - ./styles.css:/usr/share/nginx/html/styles.css
      - ./script.js:/usr/share/nginx/html/script.js
```

```bash
# Reinicia
docker-compose up -d

# Ahora edita index.html
# ¡Los cambios se reflejan INMEDIATAMENTE sin reconstruir!
```

**Pregunta:** ¿Cuándo usarías volúmenes vs reconstruir la imagen?

---

### Ejercicio 15: Aplicación Completa de 3 Capas ⭐⭐⭐
**Objetivo:** Simular aplicación real

Crea una aplicación con Frontend + Backend + Base de datos:

```yaml
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - "8080:80"
    depends_on:
      - backend
    environment:
      - API_URL=http://backend:3000
  
  backend:
    image: nginx:alpine
    ports:
      - "3000:80"
    depends_on:
      - database
    environment:
      - DB_HOST=database
  
  database:
    image: redis:alpine
    ports:
      - "6379:6379"
```

```bash
docker-compose up -d
docker-compose ps
```

**Observa:**
- Los servicios se inician en orden (depends_on)
- Se comunican por nombre
- Un solo comando gestiona todo

---

## 🔴 PARTE 3: Preparación para AWS ECS

### Ejercicio 16: Mapeo de Conceptos ⭐⭐
**Objetivo:** Relacionar Compose con ECS

Completa la tabla:

| Mi docker-compose.yml | AWS ECS |
|-----------------------|---------|
| `services:` | ? |
| `web:` | ? |
| `image: nginx:alpine` | ? |
| `ports: - "8080:80"` | ? |
| `restart: unless-stopped` | ? |
| `deploy.resources.limits` | ? |
| `docker-compose up` | ? |

<details>
<summary>Ver respuestas</summary>

| Mi docker-compose.yml | AWS ECS |
|-----------------------|---------|
| `services:` | Task Definitions |
| `web:` | Container Definition |
| `image: nginx:alpine` | Image en Task Definition |
| `ports: - "8080:80"` | Port Mappings |
| `restart: unless-stopped` | Service Scheduler |
| `deploy.resources.limits` | Task CPU/Memory |
| `docker-compose up` | Create Service |

</details>

---

### Ejercicio 17: Convertir a Task Definition ⭐⭐⭐
**Objetivo:** Traducir Compose a ECS

Tu `docker-compose.yml`:
```yaml
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    environment:
      - ENV=production
    deploy:
      resources:
        limits:
          memory: 512M
```

Conviértelo a una Task Definition de ECS (JSON).

<details>
<summary>Ver solución</summary>

```json
{
  "family": "web",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "web",
      "image": "nginx:alpine",
      "portMappings": [
        {
          "containerPort": 80,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "ENV",
          "value": "production"
        }
      ]
    }
  ]
}
```
</details>

---

### Ejercicio 18: Investigación AWS ECS ⭐⭐⭐
**Objetivo:** Familiarizarte con la consola ECS

1. Accede a la consola de AWS (sin desplegar nada)
2. Navega a ECS
3. Explora:
   - Clusters
   - Task Definitions
   - Services
   - Tasks

**Preguntas:**
- ¿Reconoces los conceptos de Docker Compose?
- ¿Qué diferencias notas?
- ¿Qué opciones adicionales ofrece ECS?

---

### Ejercicio 19: Calcular Costos ⭐⭐
**Objetivo:** Entender el modelo de costos de ECS

Escenario:
- 2 contenedores
- 0.5 vCPU cada uno
- 512 MB RAM cada uno
- Corriendo 24/7
- Región: us-east-1

Usa la [Calculadora de precios de AWS](https://calculator.aws/) para estimar el costo mensual con Fargate.

---

### Ejercicio 20: Proyecto Final ⭐⭐⭐
**Objetivo:** Aplicar todo lo aprendido

**Requisitos:**
1. Crea una aplicación con mínimo 2 servicios
2. Usa Docker Compose para orquestación local
3. Los servicios deben comunicarse entre sí
4. Implementa health checks
5. Usa límites de recursos
6. Documenta cómo migrarías esto a ECS

**Entregables:**
- `docker-compose.yml` funcional
- `README.md` con instrucciones
- Documento explicando la migración a ECS

---

## ✅ Auto-Evaluación

Marca lo que puedes hacer sin ayuda:

### Docker Básico
- [ ] Construir una imagen con Dockerfile
- [ ] Ejecutar un contenedor
- [ ] Mapear puertos
- [ ] Ver logs de contenedores
- [ ] Detener y eliminar contenedores
- [ ] Entrar a un contenedor con exec
- [ ] Pasar variables de entorno
- [ ] Limitar recursos (CPU/memoria)

### Orquestación
- [ ] Escribir un docker-compose.yml
- [ ] Levantar servicios con docker-compose up
- [ ] Ver servicios con docker-compose ps
- [ ] Escalar servicios
- [ ] Comunicar contenedores por nombre
- [ ] Usar volúmenes
- [ ] Definir dependencias entre servicios
- [ ] Implementar health checks

### Conceptos ECS
- [ ] Explicar qué es una Task Definition
- [ ] Explicar qué es un Task
- [ ] Explicar qué es un Service
- [ ] Mapear conceptos de Compose a ECS
- [ ] Entender cuándo usar ECS vs Compose
- [ ] Convertir docker-compose.yml a Task Definition
- [ ] Explicar el modelo de costos de Fargate

---

## 🎓 Certificado de Completitud

Si completaste todos los ejercicios, ¡felicidades! 🎉

Has dominado:
✅ Docker básico  
✅ Orquestación con Docker Compose  
✅ Fundamentos para AWS ECS  

**Próximo paso:** Desplegar tu primera aplicación en AWS ECS.

---

## 📚 Recursos Adicionales

- [Documentación oficial de Docker](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)
- [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/)
- [AWS Fargate Pricing](https://aws.amazon.com/fargate/pricing/)

---

**© 2025 Bootcamp Institute. Todos los derechos reservados.**

*Practica, practica, practica - El camino del Cloud Professional* ☁️

