// Cursor Follower - Profissional
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;
    
    followerX += distX * 0.1;
    followerY += distY * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Hover effects - Mais sutis e profissionais
const interactiveElements = document.querySelectorAll('a, button, .projeto-card, .competencia-card, .info-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.style.width = '60px';
        cursorFollower.style.height = '60px';
        cursorFollower.style.borderColor = '#0ea5e9';
        cursorFollower.style.opacity = '0.8';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
        cursorFollower.style.borderColor = '#0ea5e9';
        cursorFollower.style.opacity = '0.6';
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect - Mais sutil
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.05;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Parallax no hero visual
    const heroVisual = document.querySelector('.visual-container');
    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Intersection Observer para animações no scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos
const animateOnScroll = document.querySelectorAll('.competencia-card, .projeto-card, .info-card, .objetivo-box, .formacao-box, .outras-qualificacoes');
animateOnScroll.forEach(el => observer.observe(el));

// Navbar background no scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// Form Submission
const contactForm = document.querySelector('.contato-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animação de sucesso
        const btn = contactForm.querySelector('.btn-primary');
        const originalText = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = 'Mensagem Enviada!';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// Typing Effect no Hero Title - Mais profissional
const titleLines = document.querySelectorAll('.title-line');
titleLines.forEach((line, index) => {
    const text = line.textContent;
    line.textContent = '';
    line.style.opacity = '1';
    
    setTimeout(() => {
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                line.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 80);
    }, index * 600);
});

// Magnetic Effect nos Botões - Mais sutil
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Tilt Effect nos Cards - Mais sutil e profissional
const projectCards = document.querySelectorAll('.projeto-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Tilt Effect nos Competencia Cards
const competenciaCards = document.querySelectorAll('.competencia-card');
competenciaCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Particle Effect - Mais discreto e profissional
document.addEventListener('click', (e) => {
    // Apenas em elementos interativos
    if (e.target.closest('button, a, .projeto-card, .competencia-card')) {
        createParticles(e.clientX, e.clientY);
    }
});

function createParticles(x, y) {
    const colors = ['#0ea5e9', '#06b6d4', '#3b82f6'];
    
    for (let i = 0; i < 4; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 4;
        const velocity = 1.5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = 0;
        let posY = 0;
        let opacity = 1;
        
        const animate = () => {
            posX += vx;
            posY += vy;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${posX * 15}px, ${posY * 15}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Code Rain Effect no Background (Easter Egg sutil)
function createCodeRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.03';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0ea5e9';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
}

// Ativar code rain apenas em telas grandes
if (window.innerWidth > 1024) {
    createCodeRain();
}

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Console Message - Toque profissional
console.log('%c👨‍💻 Luis Fernando da Luz Batista', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvedor Web & Mobile Full Stack', 'color: #06b6d4; font-size: 14px;');
console.log('%cPortfólio desenvolvido com HTML, CSS e JavaScript', 'color: #94a3b8; font-size: 12px;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #0ea5e9;');
