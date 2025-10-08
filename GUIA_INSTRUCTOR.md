# 📖 Guía del Instructor - Docker a ECS

**© 2025 Bootcamp Institute**

Esta guía te ayudará a enseñar Docker y orquestación de contenedores de forma progresiva, preparando a los estudiantes para comprender AWS ECS.

---

## 🎯 Objetivos Pedagógicos

Al finalizar este módulo, los estudiantes deberán:

1. ✅ Comprender la diferencia entre imagen y contenedor
2. ✅ Saber construir y ejecutar contenedores manualmente
3. ✅ Entender los problemas de gestionar múltiples contenedores manualmente
4. ✅ Comprender qué es un orquestador y por qué es necesario
5. ✅ Usar Docker Compose para orquestar servicios
6. ✅ Relacionar conceptos de Docker Compose con AWS ECS
7. ✅ Estar preparados para trabajar con ECS en AWS

---

## 📚 Estructura Pedagógica del Curso

### PARTE 1: Docker Básico (2-3 horas)
**Objetivo:** Entender los fundamentos antes de agregar complejidad

### PARTE 2: Orquestación (2-3 horas)
**Objetivo:** Comprender por qué necesitamos orquestadores

### PARTE 3: Conexión con AWS ECS (1 hora)
**Objetivo:** Trasladar conocimientos a la nube

---

## 🎓 PARTE 1: Docker Básico (Sin Orquestador)

### Conceptos a Enseñar

#### 1. Imágenes vs Contenedores
```
📦 IMAGEN              🏃 CONTENEDOR
- Plantilla inmutable  - Instancia en ejecución
- Archivo en disco     - Proceso corriendo
- No usa recursos      - Usa CPU/RAM
- Ejemplo: Clase       - Ejemplo: Objeto
```

**Analogía:** Una imagen es como una receta de cocina, un contenedor es el plato preparado.

#### 2. Dockerfile
**Demostrar:** Abre `Dockerfile` y explica línea por línea:
```dockerfile
FROM nginx:alpine          # Imagen base
LABEL maintainer="..."     # Metadata
COPY index.html /path      # Copiar archivos
EXPOSE 80                  # Puerto
HEALTHCHECK ...            # Verificación de salud
```

#### 3. Construcción de Imágenes
```bash
docker build -t aws-skills-centers-demo:v1 .
```

**Explicar:**
- `-t` = tag (nombre de la imagen)
- `.` = contexto (directorio actual)
- Cada línea del Dockerfile = una capa
- Las capas se cachean para rapidez

#### 4. Ejecución de Contenedores
```bash
docker run -d -p 8080:80 --name aws-skills-centers-web aws-skills-centers-demo:v1
```

**Explicar cada parámetro:**
- `run` = crear y ejecutar
- `-d` = detached (background)
- `-p 8080:80` = mapeo de puertos
- `--name` = nombre del contenedor
- última parte = imagen a usar

#### 5. Ciclo de Vida del Contenedor
```
docker run  →  docker stop  →  docker start  →  docker rm
(crear)        (detener)       (reiniciar)      (eliminar)
```

### 🎯 Ejercicio Práctico 1 (30 min)

**Objetivo:** Que los estudiantes experimenten el flujo completo

1. Construir la imagen
2. Ejecutar el contenedor
3. Acceder a la aplicación en el navegador
4. Ver los logs
5. Entrar al contenedor con `exec`
6. Detener y eliminar

### 💭 Momento de Reflexión (15 min)

**Preguntar a los estudiantes:**

1. ¿Qué pasaría si necesitamos 3 servicios diferentes?
   - Frontend, Backend, Base de datos
   
2. ¿Cuántos comandos `docker run` necesitaríamos?
   - Respuesta: 3 comandos largos con muchos parámetros

3. ¿Qué pasa si el contenedor falla?
   - Respuesta: Tenemos que detectarlo manualmente y reiniciarlo

4. ¿Cómo comunicamos los contenedores entre sí?
   - Respuesta: Redes manuales con `docker network`

5. ¿Es esto escalable en producción?
   - Respuesta: No, necesitamos automatización

**Conclusión:** "¡Necesitamos un ORQUESTADOR!"

---

## 🎭 PARTE 2: Orquestación con Docker Compose

### Conceptos a Enseñar

#### 1. ¿Qué es un Orquestador?

**Definición simple:**
> Un orquestador es como un director de orquesta: coordina múltiples músicos (contenedores) para que toquen juntos en armonía.

**Funciones principales:**
- 🎯 Gestiona múltiples contenedores
- 🔗 Configura redes automáticamente
- ⚖️ Balancea carga y escala
- 🔄 Reinicia contenedores si fallan
- 📦 Define dependencias entre servicios

#### 2. Arquitectura con Orquestador

**Dibujar en la pizarra:**
```
SIN ORQUESTADOR (Parte 1)          CON ORQUESTADOR (Parte 2)
=======================            ==========================

$ docker run ...                    $ docker-compose up
$ docker run ...                    
$ docker run ...                    ┌──────────────────┐
                                    │  Docker Compose  │
[Contenedor 1]                      │   (Orquestador)  │
[Contenedor 2]                      └────────┬─────────┘
[Contenedor 3]                               │
                                    ┌────────┴────────┐
Manual, tedioso                     │    Automático   │
                                    │                 │
                                    [Contenedor 1]
                                    [Contenedor 2]
                                    [Contenedor 3]
```

#### 3. Docker Compose YAML

**Abrir `docker-compose.yml` y explicar:**

```yaml
version: '3.8'              # Versión de Compose

services:                   # Lista de servicios (contenedores)
  nombre-servicio:
    build: .               # Construir desde Dockerfile
    ports:                 # Mapeo de puertos
      - "8080:80"
    restart: unless-stopped # Política de reinicio
    deploy:
      resources:           # Límites de recursos
        limits:
          cpus: '0.5'
          memory: 128M
```

**Concepto clave: DECLARATIVO vs IMPERATIVO**

| Imperativo (Docker Básico) | Declarativo (Docker Compose) |
|----------------------------|------------------------------|
| Describes CÓMO hacerlo     | Describes QUÉ quieres        |
| Comandos secuenciales      | Configuración en archivo     |
| No reproducible fácilmente | Reproducible siempre         |
| Difícil de versionar       | Se guarda en Git             |

#### 4. Comandos del Orquestador

```bash
docker-compose up -d        # Iniciar TODO
docker-compose ps           # Ver servicios
docker-compose logs -f      # Ver logs de TODO
docker-compose down         # Detener TODO
```

**Enfatizar:** Un solo comando gestiona TODO el sistema.

### 🎯 Ejercicio Práctico 2 (30 min)

**Objetivo:** Comparar la experiencia con y sin orquestador

1. **Primero sin orquestador (recordatorio):**
   - Construir imagen
   - Ejecutar contenedor con comando largo
   - Modificar código
   - Detener, eliminar, reconstruir, ejecutar de nuevo

2. **Ahora con orquestador:**
   - `docker-compose up -d`
   - Modificar código
   - `docker-compose up -d --build`
   - ¡Eso es todo!

**Preguntar:** ¿Cuál es más fácil? ¿Por qué?

### 🎯 Ejercicio Práctico 3 (20 min)

**Agregar un segundo servicio al docker-compose.yml**

Ayúdalos a agregar un servicio de Redis o una API simple:

```yaml
services:
  web:
    # ... servicio existente

  api:
    image: nginx:alpine
    ports:
      - "3000:80"
    restart: unless-stopped
```

**Observar:**
- Ambos servicios se inician con un comando
- Están en la misma red automáticamente
- Pueden comunicarse por nombre

---

## 🌐 PARTE 3: Conexión con AWS ECS

### Tabla de Conceptos Equivalentes

**Proyectar esta tabla y explicar cada fila:**

| Concepto | Docker Local | Docker Compose | AWS ECS |
|----------|-------------|----------------|---------|
| **Definición de cómo correr** | Dockerfile | service en YAML | Task Definition |
| **Instancia corriendo** | Container | Container | Task |
| **Gestión del servicio** | `docker run` | `docker-compose up` | ECS Service |
| **Dónde corre** | Tu laptop | Tu laptop | Cluster ECS (Fargate) |
| **Networking** | `docker network` | networks en YAML | VPC + SG |
| **Escalado** | Manual | `--scale` | Auto Scaling |
| **Health checks** | HEALTHCHECK | healthcheck | Health checks |
| **Límites de recursos** | `--memory` | deploy.resources | Task memory/CPU |
| **Reinicio automático** | `--restart` | restart | Automático |
| **Load balancer** | No incluido | No incluido | ALB/NLB |

### Demostración Visual

**Mostrar en AWS Console (sin desplegar):**

1. **ECS Task Definition** - "Miren, es similar a nuestro docker-compose.yml"
2. **ECS Service** - "Esto es como hacer docker-compose up, pero en AWS"
3. **ECS Cluster** - "Es donde corren los contenedores, como nuestra laptop"

### Comparación de Archivos

**Lado a lado:**

```yaml
# docker-compose.yml (LOCAL)
services:
  web:
    build: .
    ports:
      - "8080:80"
    deploy:
      resources:
        limits:
          memory: 128M
```

```json
// ECS Task Definition (AWS)
{
  "family": "web",
  "containerDefinitions": [{
    "name": "web",
    "image": "mi-imagen",
    "portMappings": [{
      "containerPort": 80
    }],
    "memory": 128
  }]
}
```

**Señalar:** ¡Los conceptos son los mismos!

---

## 🎯 Evaluación del Aprendizaje

### Preguntas de Comprensión

1. **Básico:** ¿Cuál es la diferencia entre una imagen y un contenedor?
2. **Intermedio:** ¿Por qué necesitamos un orquestador?
3. **Avanzado:** ¿Cómo se relaciona Docker Compose con AWS ECS?

### Ejercicio Final (1 hora)

**Proyecto:** "Crear una aplicación de 3 capas orquestada"

Pide a los estudiantes que:
1. Modifiquen el `docker-compose.yml` 
2. Agreguen 2 servicios más (ej: API + DB)
3. Hagan que se comuniquen entre sí
4. Documenten cómo trasladarían esto a ECS

### Rúbrica de Evaluación

| Criterio | Puntos |
|----------|--------|
| Comprende diferencia imagen/contenedor | 20% |
| Puede construir y ejecutar contenedores | 20% |
| Entiende el propósito de un orquestador | 20% |
| Puede usar Docker Compose efectivamente | 20% |
| Relaciona conceptos con AWS ECS | 20% |

---

## 💡 Tips de Enseñanza

### 1. Usa Analogías
- **Imagen = Receta de cocina** | Contenedor = Plato preparado
- **Orquestador = Director de orquesta** | Contenedores = Músicos
- **Docker Compose = Playlist** | ECS = Spotify Premium

### 2. Muestra el Problema Primero
No enseñes orquestación hasta que los estudiantes sientan el dolor de gestionar contenedores manualmente.

### 3. Progresión Gradual
```
1 contenedor → Múltiples contenedores manual → Docker Compose → Conceptos de ECS
```

### 4. Hands-on Siempre
Teoría máximo 20%, práctica mínimo 80%.

### 5. Conecta con el Mundo Real
- "Airbnb usa contenedores para..."
- "Netflix orquesta miles de contenedores con..."

---

## 📊 Cronograma Sugerido

### Sesión 1: Docker Básico (3 horas)
- 0:00 - 0:30: Introducción a contenedores
- 0:30 - 1:00: Dockerfile y construcción de imágenes
- 1:00 - 1:30: Ejercicio práctico 1
- 1:30 - 2:00: Gestión de contenedores
- 2:00 - 2:30: Ejercicio práctico avanzado
- 2:30 - 3:00: Reflexión: problemas de gestión manual

### Sesión 2: Orquestación (3 horas)
- 0:00 - 0:30: ¿Qué es un orquestador?
- 0:30 - 1:00: Introducción a Docker Compose
- 1:00 - 1:30: Ejercicio práctico 2
- 1:30 - 2:00: Aplicaciones multi-contenedor
- 2:00 - 2:30: Ejercicio práctico 3
- 2:30 - 3:00: Conexión con AWS ECS

### Sesión 3: Proyecto Final (2 horas)
- 0:00 - 1:30: Desarrollo del proyecto
- 1:30 - 2:00: Presentaciones y Q&A

---

## 🚨 Errores Comunes de Estudiantes

### 1. Confunden imagen con contenedor
**Solución:** Usa la analogía de clase/objeto o receta/plato

### 2. No entienden por qué detener un contenedor antes de eliminarlo
**Solución:** Analogía: primero apagas el carro, luego lo vendes

### 3. Olvidan el contexto (`.`) en docker build
**Solución:** Explica qué archivos se envían al daemon

### 4. Piensan que Docker Compose es solo para local
**Solución:** Muestra herramientas como docker-compose en ECS

### 5. No ven la utilidad de los orquestadores
**Solución:** Asegúrate de que experimenten el dolor manual primero

---

## 📚 Recursos para el Instructor

### Documentación
- [Docker Docs](https://docs.docker.com/)
- [Docker Compose Spec](https://compose-spec.io/)
- [AWS ECS Best Practices](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/)

### Videos Recomendados
- Docker 101 (YouTube)
- AWS ECS Deep Dive (AWS re:Invent)

### Demos Adicionales
- Desplegar WordPress con Docker Compose
- Microservicios con Docker Compose
- Migrar Compose a ECS

---

## ✅ Checklist Pre-Clase

- [ ] Docker Desktop instalado y funcionando
- [ ] Repositorio clonado en todas las máquinas
- [ ] Acceso a internet (para descargar imágenes)
- [ ] Proyector o pantalla compartida configurada
- [ ] Ejemplos de código listos
- [ ] Diagrama de arquitectura preparado
- [ ] Cuenta AWS para mostrar ECS Console (opcional)

---

## 🤝 Feedback y Mejora Continua

Después de cada sesión:

1. **Encuesta rápida:**
   - ¿Qué fue lo más difícil?
   - ¿Qué fue lo más útil?
   - ¿Qué mejorarías?

2. **Auto-reflexión:**
   - ¿Los estudiantes lograron los objetivos?
   - ¿Cuántos completaron los ejercicios?
   - ¿Dónde tuvieron más dificultades?

3. **Mejoras para próxima vez:**
   - Ajustar timing
   - Agregar/quitar ejercicios
   - Mejorar explicaciones

---

**© 2025 Bootcamp Institute. Todos los derechos reservados.**

*Empoderando instructores para formar la próxima generación de Cloud Professionals* ☁️

