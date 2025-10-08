// Script para agregar interactividad adicional

document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para los servicios
    const services = document.querySelectorAll('.service');
    services.forEach((service, index) => {
        service.style.opacity = '0';
        service.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            service.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            service.style.opacity = '1';
            service.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Efecto de partículas (opcional)
    createParticles();
});

function createParticles() {
    const container = document.querySelector('.container');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${5 + Math.random() * 10}s linear infinite;
        `;
        document.body.appendChild(particle);
    }

    // Agregar animación CSS para las partículas
    if (!document.querySelector('#particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.textContent = `
            @keyframes float-particle {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Mensaje de consola para estudiantes curiosos
console.log('%c¡Hola, futuro Cloud Professional! 🚀', 'color: #FF9900; font-size: 20px; font-weight: bold;');
console.log('%cSigue explorando y aprendiendo. El cielo (o mejor dicho, la nube) es el límite.', 'color: #146EB4; font-size: 14px;');
console.log('%c- Bootcamp Institute', 'color: #232F3E; font-size: 12px; font-style: italic;');

