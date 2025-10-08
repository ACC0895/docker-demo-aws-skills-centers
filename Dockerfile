# Dockerfile para AWS Skills Centers Demo
# Este archivo define cómo construir la imagen de Docker para nuestra aplicación

# Usamos nginx:alpine como base - es ligera y eficiente
FROM nginx:alpine

# Información del mantenedor
LABEL maintainer="Bootcamp Institute"
LABEL description="Demo de Docker para estudiantes de AWS Skills Centers"
LABEL version="1.0"

# Copiamos los archivos de nuestra aplicación al directorio de nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Exponemos el puerto 80 para acceder a la aplicación
EXPOSE 80

# nginx se ejecutará automáticamente cuando el contenedor inicie
# No necesitamos un CMD porque la imagen base ya lo tiene configurado

# Health check para asegurar que el contenedor está funcionando
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

