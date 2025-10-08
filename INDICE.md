# 📑 Índice del Repositorio - Docker Demo

**© 2025 Bootcamp Institute**

Este repositorio contiene un demo completo de Docker enfocado en enseñar orquestación de contenedores como preparación para AWS ECS.

---

## 🎯 ¿Por Dónde Empezar?

### 👨‍🎓 Si eres ESTUDIANTE:

1. **🚀 Empieza aquí:** [INICIO_RAPIDO.md](INICIO_RAPIDO.md) - Comienza en 5 minutos
2. **⚡ Referencia rápida:** [GUIA_RAPIDA.md](GUIA_RAPIDA.md) - Comandos esenciales
3. **📖 Documentación completa:** [README.md](README.md) - Guía paso a paso
4. **🎯 Práctica:** [EJERCICIOS.md](EJERCICIOS.md) - 20 ejercicios progresivos
5. **☁️ Conceptos avanzados:** [CONCEPTOS_ECS.md](CONCEPTOS_ECS.md) - Relación con AWS ECS

### 👨‍🏫 Si eres INSTRUCTOR:

1. **Empieza aquí:** [GUIA_INSTRUCTOR.md](GUIA_INSTRUCTOR.md) - Metodología de enseñanza
2. **Material para estudiantes:** [README.md](README.md)
3. **Ejercicios:** [EJERCICIOS.md](EJERCICIOS.md)

---

## 📚 Estructura del Repositorio

### 📖 Documentación

| Archivo | Descripción | Para quién |
|---------|-------------|------------|
| 🚀 **[INICIO_RAPIDO.md](INICIO_RAPIDO.md)** | Comienza en 5 minutos - Primera vez aquí | Todos (Comenzar aquí) |
| 📖 **[README.md](README.md)** | Documentación principal con tutorial completo en 2 partes | Estudiantes y todos |
| ⚡ **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)** | Referencia rápida de comandos esenciales | Estudiantes |
| 🎯 **[EJERCICIOS.md](EJERCICIOS.md)** | 20 ejercicios prácticos progresivos | Estudiantes |
| ☁️ **[CONCEPTOS_ECS.md](CONCEPTOS_ECS.md)** | Mapeo de conceptos Docker → AWS ECS | Estudiantes avanzados |
| 👨‍🏫 **[GUIA_INSTRUCTOR.md](GUIA_INSTRUCTOR.md)** | Metodología pedagógica y tips de enseñanza | Instructores |
| 📑 **[INDICE.md](INDICE.md)** | Este archivo - navegación del repo | Todos |

### 🗂️ Archivos de Configuración

| Archivo | Descripción |
|---------|-------------|
| **[Dockerfile](Dockerfile)** | Define cómo construir la imagen Docker |
| **[docker-compose.yml](docker-compose.yml)** | Configuración del orquestador (muy comentada) |
| **[.dockerignore](.dockerignore)** | Archivos a ignorar al construir imágenes |
| **[.gitignore](.gitignore)** | Archivos a ignorar en Git |

### 🌐 Aplicación Web

| Archivo | Descripción |
|---------|-------------|
| **[index.html](index.html)** | Página principal con mensaje motivante |
| **[styles.css](styles.css)** | Estilos con animación de gradiente |
| **[script.js](script.js)** | JavaScript para interactividad |

---

## 🎓 Flujo de Aprendizaje Recomendado

### 📅 Sesión 1: Docker Básico (3 horas)

```
1. Lee: README.md (Parte 1)
2. Práctica: EJERCICIOS.md (Ejercicios 1-7)
3. Reflexión: "¿Por qué necesitamos orquestadores?"
```

### 📅 Sesión 2: Orquestación (3 horas)

```
1. Lee: README.md (Parte 2)
2. Práctica: EJERCICIOS.md (Ejercicios 8-15)
3. Explora: docker-compose.yml comentado
```

### 📅 Sesión 3: AWS ECS (2 horas)

```
1. Lee: CONCEPTOS_ECS.md
2. Práctica: EJERCICIOS.md (Ejercicios 16-20)
3. Investiga: Consola de AWS ECS
```

---

## 🚀 Quick Start

### Opción 1: Docker Básico (sin orquestador)

```bash
# Construir imagen
docker build -t aws-skills-centers-demo:v1 .

# Ejecutar contenedor
docker run -d -p 8080:80 --name aws-skills-centers-web aws-skills-centers-demo:v1

# Ver en: http://localhost:8080
```

### Opción 2: Docker Compose (con orquestador)

```bash
# Un solo comando
docker-compose up -d

# Ver en: http://localhost:8080
```

---

## 📊 Contenido por Nivel

### 🟢 Nivel Principiante

**Archivos recomendados:**
1. [GUIA_RAPIDA.md](GUIA_RAPIDA.md) - Comandos básicos
2. [README.md](README.md) - Parte 1 (Docker Básico)
3. [EJERCICIOS.md](EJERCICIOS.md) - Ejercicios 1-7

**Conceptos clave:**
- Imágenes vs Contenedores
- Construcción con Dockerfile
- Ejecución de contenedores
- Mapeo de puertos

### 🟡 Nivel Intermedio

**Archivos recomendados:**
1. [README.md](README.md) - Parte 2 (Orquestación)
2. [docker-compose.yml](docker-compose.yml) - Configuración comentada
3. [EJERCICIOS.md](EJERCICIOS.md) - Ejercicios 8-15

**Conceptos clave:**
- Orquestadores
- Docker Compose
- Networking entre contenedores
- Aplicaciones multi-contenedor

### 🔴 Nivel Avanzado

**Archivos recomendados:**
1. [CONCEPTOS_ECS.md](CONCEPTOS_ECS.md) - Docker → ECS
2. [EJERCICIOS.md](EJERCICIOS.md) - Ejercicios 16-20
3. [GUIA_INSTRUCTOR.md](GUIA_INSTRUCTOR.md) - Conceptos pedagógicos

**Conceptos clave:**
- AWS ECS Task Definitions
- Fargate vs EC2 launch type
- Migración a la nube
- Alta disponibilidad

---

## 🎯 Objetivos de Aprendizaje

Al completar este repositorio, serás capaz de:

### ✅ Docker Básico
- [ ] Construir imágenes Docker
- [ ] Ejecutar y gestionar contenedores
- [ ] Trabajar con puertos y volúmenes
- [ ] Usar variables de entorno
- [ ] Inspeccionar y depurar contenedores

### ✅ Orquestación
- [ ] Entender qué es un orquestador
- [ ] Usar Docker Compose
- [ ] Gestionar aplicaciones multi-contenedor
- [ ] Configurar networking entre servicios
- [ ] Escalar servicios

### ✅ AWS ECS
- [ ] Mapear conceptos Docker → ECS
- [ ] Entender Task Definitions
- [ ] Conocer servicios de AWS ECS
- [ ] Planificar migraciones a la nube

---

## 🔍 Búsqueda Rápida

### ¿Cómo hago...?

| Quiero... | Busca en... |
|-----------|-------------|
| Construir mi primera imagen | [README.md](README.md) - Parte 1, Paso 1 |
| Ejecutar un contenedor | [README.md](README.md) - Parte 1, Paso 2 |
| Usar Docker Compose | [README.md](README.md) - Parte 2 |
| Comandos rápidos | [GUIA_RAPIDA.md](GUIA_RAPIDA.md) |
| Practicar | [EJERCICIOS.md](EJERCICIOS.md) |
| Entender el docker-compose.yml | [docker-compose.yml](docker-compose.yml) |
| Relacionar con AWS ECS | [CONCEPTOS_ECS.md](CONCEPTOS_ECS.md) |
| Enseñar esto | [GUIA_INSTRUCTOR.md](GUIA_INSTRUCTOR.md) |

---

## 🎨 Características de la Aplicación

La aplicación web incluye:

- ✨ Animación de gradiente con colores de AWS
- ☁️ Ícono de nube flotante animado
- 💬 Mensajes motivantes para estudiantes
- 🏷️ Badges de servicios AWS (EC2, S3, Lambda, etc)
- 📱 Diseño responsive
- 🎭 Efectos de hover y transiciones suaves
- © Copyright de Bootcamp Institute

---

## 🛠️ Tecnologías Utilizadas

- **Docker** - Contenedorización
- **Docker Compose** - Orquestación
- **Nginx Alpine** - Servidor web (imagen ligera)
- **HTML5 + CSS3 + JavaScript** - Frontend
- **AWS ECS** - Conceptos (no desplegado)

---

## 📞 Soporte

Si tienes preguntas:

- 📧 Contacta a tu instructor
- 💬 Únete a la comunidad de AWS Skills Centers
- 🐛 Reporta issues en el repositorio

---

## 🤝 Contribuir

¿Quieres mejorar este demo?

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agregar mejora'`)
4. Push (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 📜 Licencia

Este proyecto ha sido desarrollado con fines educativos para el programa **AWS Skills Centers**.

**© 2025 Bootcamp Institute. Todos los derechos reservados.**

---

## 🌟 Agradecimientos

Este material fue creado para empoderar la próxima generación de **Cloud Professionals**.

Si este repositorio te ayudó en tu aprendizaje:
- ⭐ Dale una estrella al repo
- 📢 Compártelo con otros estudiantes
- 💬 Deja tu feedback

---

## 🚀 Próximos Pasos

Después de dominar este contenido:

1. **Amazon ECR** - Almacena imágenes en AWS
2. **Amazon ECS** - Despliega contenedores en producción
3. **AWS Fargate** - Contenedores serverless
4. **Amazon EKS** - Kubernetes en AWS
5. **CI/CD** - Automatiza con CodePipeline

---

## 📊 Estadísticas del Repositorio

- 📄 **Archivos de documentación:** 7
- 🎯 **Ejercicios prácticos:** 20
- 📚 **Páginas de contenido:** ~100+
- ⏱️ **Tiempo estimado:** 8-10 horas
- 🎓 **Nivel:** Principiante a Intermedio

---

## 🎓 ¡Regístrate en AWS Skills Centers!

Este proyecto es solo el comienzo. Continúa tu aprendizaje con **clases gratuitas** de AWS:

### 🌟 AWS Skills Centers ofrece:

- ✅ **Formación 100% gratuita** en la nube
- ✅ **Clases presenciales y virtuales** con instructores certificados
- ✅ **Exhibiciones interactivas** de tecnologías cloud
- ✅ **Eventos de networking** con empleadores
- ✅ **Para todos** - sin requisitos previos

### 🚀 Regístrate Ahora:

👉 **[https://aws.amazon.com/es/training/skills-centers/](https://aws.amazon.com/es/training/skills-centers/)**

---

**#AWSSkillsCenters #Docker #DockerCompose #CloudComputing #BootcampInstitute**

**© 2025 Bootcamp Institute. Todos los derechos reservados.**

*Tu camino hacia la nube comienza aquí* ☁️

