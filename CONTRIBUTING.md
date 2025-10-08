# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto educativo de AWS Skills Centers!

## 🎯 Objetivo del Proyecto

Este repositorio es un recurso educativo para enseñar Docker y orquestación de contenedores como preparación para AWS ECS. Mantenemos el contenido:

- ✅ Pedagógicamente progresivo (principiante → avanzado)
- ✅ Práctico y orientado a ejercicios
- ✅ Bien documentado en español
- ✅ Alineado con AWS Skills Centers

## 🌟 Cómo Contribuir

### Reportar Errores

¿Encontraste un bug o error en la documentación?

1. Ve a [Issues](https://github.com/tuusuario/docker-demo/issues)
2. Crea un nuevo issue
3. Usa el template de bug report
4. Describe claramente el problema

### Proponer Mejoras

¿Tienes ideas para mejorar el contenido?

1. Ve a [Issues](https://github.com/tuusuario/docker-demo/issues)
2. Crea un nuevo issue con el tag `enhancement`
3. Explica tu propuesta y su valor educativo

### Enviar Pull Requests

#### Proceso:

```bash
# 1. Haz fork del repositorio

# 2. Clona tu fork
git clone https://github.com/tu-usuario/docker-demo.git
cd docker-demo

# 3. Crea una rama para tu contribución
git checkout -b feature/mejora-descripcion

# 4. Haz tus cambios

# 5. Commit con mensaje descriptivo
git commit -m "docs: mejorar explicación de healthchecks"

# 6. Push a tu fork
git push origin feature/mejora-descripcion

# 7. Abre un Pull Request en GitHub
```

#### Criterios de Aceptación:

- ✅ Mantiene el enfoque pedagógico
- ✅ Está en español
- ✅ Incluye ejemplos prácticos
- ✅ No introduce dependencias innecesarias
- ✅ Actualiza documentación relevante

## 📝 Estilo de Código y Documentación

### Commits:

Usamos conventional commits:

```
feat: nueva funcionalidad
fix: corrección de bug
docs: cambios en documentación
style: formato, sin cambios de código
refactor: refactorización de código
test: agregar o modificar tests
chore: tareas de mantenimiento
```

### Documentación:

- Usa lenguaje claro y accesible
- Incluye ejemplos de código
- Agrega emojis para mejor legibilidad (con moderación)
- Mantén consistencia con el resto del proyecto

### Código:

- Comentarios en español
- Nombres de variables descriptivos
- Sigue las mejores prácticas de Docker

## 🎓 Tipos de Contribuciones Bienvenidas

### Muy Bienvenidas:

- 📚 Mejorar explicaciones pedagógicas
- 🎯 Agregar más ejercicios prácticos
- 🐛 Corregir errores técnicos
- 🌍 Traducciones (mantener español como primario)
- 📖 Agregar diagramas o visualizaciones
- 💡 Ejemplos adicionales de uso

### A Considerar:

- 🔧 Cambios en la estructura del proyecto
- 📦 Agregar nuevas herramientas o dependencias
- 🎨 Cambios mayores en la UI de la aplicación

### No Aceptamos:

- ❌ Contenido no relacionado con Docker/ECS
- ❌ Cambios que compliquen innecesariamente
- ❌ Contenido comercial o promocional
- ❌ Material que no sea educativo

## 🧪 Prueba tus Cambios

Antes de enviar un PR:

```bash
# Prueba que Docker funciona
docker build -t test:v1 .
docker run -d -p 8080:80 --name test test:v1
# Verifica: http://localhost:8080
docker stop test && docker rm test

# Prueba Docker Compose
docker-compose up -d
docker-compose ps
docker-compose down

# Verifica la ortografía en documentación
```

## 🏆 Reconocimientos

Todos los contribuidores serán listados en el README.

## 🌐 Conecta

¿Preguntas sobre cómo contribuir?

- 👨‍🏫 **Instructor:** [Gabriel - AWS Community Builder](https://builder.aws.com/community/@awshero)
- 🐛 **GitHub Issues:** [Abre un issue con el tag `question`](https://github.com/tuusuario/docker-demo/issues)
- 🎓 **Bootcamp Institute:** [bootcamp.institute](https://bootcamp.institute)
- 💬 **AWS Skills Centers:** [aws.amazon.com/es/training/skills-centers](https://aws.amazon.com/es/training/skills-centers/)

## 📜 Código de Conducta

Este proyecto sigue el [Código de Conducta de Contributor Covenant](https://www.contributor-covenant.org/es/version/2/1/code_of_conduct/).

En resumen:

- 🤝 Sé respetuoso y profesional
- 🌈 Valoramos la diversidad
- 🎓 Enfócate en el aprendizaje
- 💪 Ayuda a otros a crecer

---

## 🎓 Sobre AWS Skills Centers

Este proyecto es parte del ecosistema educativo de AWS Skills Centers, donde ofrecemos formación gratuita en la nube para todos.

**Regístrate en clases gratuitas:** [https://aws.amazon.com/es/training/skills-centers/](https://aws.amazon.com/es/training/skills-centers/)

---

**¡Gracias por contribuir a la educación en la nube!** ☁️

© 2025 Bootcamp Institute

