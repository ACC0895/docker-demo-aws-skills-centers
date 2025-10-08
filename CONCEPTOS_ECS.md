# 🌐 De Docker Compose a AWS ECS

**© 2025 Bootcamp Institute**

Esta guía te ayuda a trasladar tus conocimientos de Docker Compose a AWS ECS (Elastic Container Service).

---

## 🎯 Objetivo

Entender cómo los conceptos que aprendiste con Docker Compose se aplican directamente en AWS ECS, el servicio de orquestación de contenedores en la nube.

---

## 📊 Comparación Lado a Lado

### 1. Definir CÓMO Correr un Contenedor

#### Docker Compose (Local)
```yaml
# docker-compose.yml
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    environment:
      - APP_NAME=MyApp
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
```

#### AWS ECS (Nube)
```json
// Task Definition
{
  "family": "web",
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
          "name": "APP_NAME",
          "value": "MyApp"
        }
      ],
      "memory": 512,
      "cpu": 256
    }
  ]
}
```

**Concepto:** Ambos definen QUÉ contenedor ejecutar y CÓMO configurarlo.

---

### 2. Ejecutar el Servicio

#### Docker Compose (Local)
```bash
docker-compose up -d
```

#### AWS ECS (Nube)
```bash
# Via AWS CLI
aws ecs create-service \
  --cluster mi-cluster \
  --service-name web \
  --task-definition web:1 \
  --desired-count 1
```

**O en la consola:** ECS → Clusters → Create Service

**Concepto:** Ambos "levantan" el servicio definido.

---

### 3. Ver Servicios Corriendo

#### Docker Compose (Local)
```bash
docker-compose ps
```

#### AWS ECS (Nube)
```bash
aws ecs list-tasks --cluster mi-cluster
```

**O en la consola:** ECS → Clusters → Tasks

**Concepto:** Verificar qué está corriendo.

---

### 4. Ver Logs

#### Docker Compose (Local)
```bash
docker-compose logs -f web
```

#### AWS ECS (Nube)
```bash
# En CloudWatch Logs
aws logs tail /ecs/web --follow
```

**O en la consola:** CloudWatch → Log Groups → /ecs/web

**Concepto:** Monitorear la salida de los contenedores.

---

### 5. Escalar el Servicio

#### Docker Compose (Local)
```bash
docker-compose up -d --scale web=3
```

#### AWS ECS (Nube)
```bash
aws ecs update-service \
  --cluster mi-cluster \
  --service web \
  --desired-count 3
```

**O en la consola:** ECS → Services → Update → Desired tasks: 3

**Concepto:** Ejecutar múltiples instancias del mismo servicio.

---

### 6. Detener Todo

#### Docker Compose (Local)
```bash
docker-compose down
```

#### AWS ECS (Nube)
```bash
# Eliminar el servicio
aws ecs delete-service --cluster mi-cluster --service web --force

# Eliminar el cluster (si está vacío)
aws ecs delete-cluster --cluster mi-cluster
```

**Concepto:** Limpiar recursos.

---

## 🧩 Mapeo de Conceptos

| Docker Compose | AWS ECS | Descripción |
|----------------|---------|-------------|
| **service** | **Task Definition** | Define cómo correr un contenedor |
| **container** | **Task** | Instancia corriendo de un contenedor |
| **docker-compose up** | **Service** | Mantiene N tareas corriendo |
| **docker-compose.yml** | **Task Definition JSON** | Archivo de configuración |
| **networks** | **VPC + Subnets** | Networking entre contenedores |
| **depends_on** | **Task Dependencies** | Orden de inicio de contenedores |
| **restart** | **Service Scheduler** | Política de reinicio |
| **deploy.resources** | **Task CPU/Memory** | Límites de recursos |
| **healthcheck** | **Health Check** | Verificación de salud |
| **Tu laptop** | **ECS Cluster** | Dónde corren los contenedores |
| **Docker Engine** | **Fargate o EC2** | Infraestructura subyacente |

---

## 🏗️ Arquitectura Comparada

### Docker Compose (Local)

```
┌──────────────────────────────────────┐
│        Tu Laptop                     │
│                                      │
│  ┌────────────────────────────────┐ │
│  │    Docker Compose              │ │
│  │    (Orquestador)               │ │
│  └──────────┬─────────────────────┘ │
│             │                        │
│  ┌──────────▼──────────┐            │
│  │  Docker Network     │            │
│  │  (Bridge)           │            │
│  │                     │            │
│  │  [Container 1]      │            │
│  │  [Container 2]      │            │
│  │  [Container 3]      │            │
│  └─────────────────────┘            │
└──────────────────────────────────────┘
```

### AWS ECS (Nube)

```
┌────────────────────────────────────────────────────────┐
│                    AWS Cloud                           │
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │            ECS Service (Orquestador)             │ │
│  └───────────────────┬──────────────────────────────┘ │
│                      │                                │
│  ┌───────────────────▼────────────────────────────┐  │
│  │                VPC (Networking)                │  │
│  │                                                │  │
│  │   ┌──────────────────┐  ┌──────────────────┐  │  │
│  │   │   Fargate Task   │  │   Fargate Task   │  │  │
│  │   │  [Container 1]   │  │  [Container 2]   │  │  │
│  │   │  Availability    │  │  Availability    │  │  │
│  │   │  Zone A          │  │  Zone B          │  │  │
│  │   └──────────────────┘  └──────────────────┘  │  │
│  │                                                │  │
│  │   ┌──────────────────────────────────────┐    │  │
│  │   │  Application Load Balancer (ALB)     │    │  │
│  │   └──────────────────────────────────────┘    │  │
│  └────────────────────────────────────────────────┘  │
│                                                        │
│  Internet                                              │
│     ▲                                                  │
│     │                                                  │
└─────┼──────────────────────────────────────────────────┘
      │
    Usuarios
```

---

## 🆕 Diferencias Clave

### Ventajas de AWS ECS sobre Docker Compose

| Característica | Docker Compose | AWS ECS |
|----------------|----------------|---------|
| **Alta disponibilidad** | ❌ No (un solo host) | ✅ Sí (multi-AZ) |
| **Auto escalado** | ⚠️ Manual | ✅ Automático |
| **Load balancer** | ❌ No incluido | ✅ ALB/NLB integrado |
| **Costo** | ✅ Gratis | 💰 Pagas por uso |
| **Gestión de infraestructura** | Manual (tu laptop) | Automática (Fargate) |
| **Monitoreo** | ⚠️ Limitado | ✅ CloudWatch integrado |
| **Seguridad** | Tu responsabilidad | IAM Roles, Security Groups |
| **Escalabilidad** | ⚠️ Limitada (1 host) | ✅ Ilimitada |
| **Respaldos** | ❌ No automático | ✅ Multi-región |

### Cuándo Usar Cada Uno

**Docker Compose:**
- ✅ Desarrollo local
- ✅ Testing
- ✅ Demos
- ✅ Aprendizaje
- ✅ Proyectos personales pequeños

**AWS ECS:**
- ✅ Producción
- ✅ Alta disponibilidad requerida
- ✅ Tráfico alto
- ✅ Múltiples ambientes (dev, staging, prod)
- ✅ Aplicaciones empresariales

---

## 🚀 Migración: De Compose a ECS

### Paso 1: Convertir docker-compose.yml a Task Definition

Hay herramientas que ayudan:

```bash
# Instalar ECS CLI
# Convertir automáticamente
ecs-cli compose --file docker-compose.yml convert > task-definition.json
```

### Paso 2: Subir Imagen a ECR

```bash
# Crear repositorio en ECR
aws ecr create-repository --repository-name mi-app

# Autenticarse
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com

# Tag y push
docker tag mi-app:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/mi-app:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/mi-app:latest
```

### Paso 3: Crear Cluster ECS

```bash
aws ecs create-cluster --cluster-name mi-cluster
```

### Paso 4: Registrar Task Definition

```bash
aws ecs register-task-definition --cli-input-json file://task-definition.json
```

### Paso 5: Crear Servicio

```bash
aws ecs create-service \
  --cluster mi-cluster \
  --service-name mi-servicio \
  --task-definition mi-app:1 \
  --desired-count 2 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-12345],securityGroups=[sg-12345],assignPublicIp=ENABLED}"
```

---

## 💡 Ejemplo Completo

### docker-compose.yml (Original)

```yaml
version: '3.8'
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
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost/"]
      interval: 30s
```

### Task Definition ECS (Equivalente)

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
      ],
      "healthCheck": {
        "command": ["CMD-SHELL", "wget -q --spider http://localhost/ || exit 1"],
        "interval": 30,
        "timeout": 5,
        "retries": 3,
        "startPeriod": 60
      },
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/web",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

**Observa:** Los conceptos son prácticamente idénticos, solo cambia el formato.

---

## 📚 Próximos Pasos

Para profundizar en ECS:

1. **Amazon ECR** - Aprende a almacenar imágenes en AWS
2. **ECS Fargate** - Contenedores sin gestionar servidores
3. **Application Load Balancer** - Distribuir tráfico entre contenedores
4. **Auto Scaling** - Escalar automáticamente según demanda
5. **CI/CD** - Automatizar despliegues con CodePipeline

---

## 🌐 Conecta y Aprende Más

¿Preguntas o quieres profundizar?

- 👨‍🏫 **Instructor:** Gabriel - [AWS Community Builder](https://builder.aws.com/community/@awshero)
- 🎓 **Bootcamp Institute:** [Formación Cloud para LATAM](https://bootcamp.institute)
- 💬 **AWS Skills Centers:** [Comunidad global](https://aws.amazon.com/es/training/skills-centers/)
- 🐛 **GitHub Issues:** [Reporta problemas](https://github.com/tuusuario/docker-demo/issues)

---

## 🎯 Conceptos Clave para Recordar

1. **Docker Compose = Orquestador Local**
   - Perfecto para desarrollo y aprendizaje

2. **AWS ECS = Orquestador en la Nube**
   - Usa los mismos conceptos que Compose
   - Agrega alta disponibilidad y escalabilidad

3. **Los Conceptos Son Transferibles**
   - Lo que aprendes con Compose aplica directamente a ECS
   - La curva de aprendizaje es suave

4. **Task Definition ≈ docker-compose.yml**
   - Ambos definen cómo correr contenedores

5. **Service = Instancias Gestionadas**
   - El orquestador mantiene el número deseado corriendo

---

## ✅ Checklist de Comprensión

¿Entiendes estos conceptos?

- [ ] Puedo explicar qué es una Task Definition
- [ ] Sé la diferencia entre Task y Service en ECS
- [ ] Entiendo qué es un ECS Cluster
- [ ] Puedo mapear conceptos de Compose a ECS
- [ ] Conozco las ventajas de ECS sobre Compose
- [ ] Sé cuándo usar cada herramienta
- [ ] Puedo convertir un docker-compose.yml a Task Definition

Si marcaste todas, ¡estás listo para ECS! 🎉

---

**© 2025 Bootcamp Institute. Todos los derechos reservados.**

*De tu laptop a la nube: El camino del Cloud Professional* ☁️

