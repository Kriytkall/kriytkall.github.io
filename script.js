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

// Copiar email para área de transferência
function copyEmail(event) {
    event.preventDefault();
    const email = 'luisfernandolbatista@outlook.com';
    
    navigator.clipboard.writeText(email).then(() => {
        // Criar notificação de sucesso
        const notification = document.createElement('div');
        notification.textContent = '✓ Email copiado para área de transferência!';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-family: 'JetBrains Mono', monospace;
        `;
        
        document.body.appendChild(notification);
        
        // Remover notificação após 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }).catch(err => {
        alert('Email: ' + email);
    });
}

// Menu Mobile Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

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
const animateOnScroll = document.querySelectorAll('.projeto-card, .info-card, .objetivo-box, .formacao-box, .outras-qualificacoes, .tech-category, .learning-section, .sobre-card, .timeline-item, .contato-card');
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

// Hebrew Rain Effect no Background (Inspiração cristã)
function createCodeRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.06';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Palavras e frases bíblicas em hebraico
    const hebrewWords = [
        'אלוהים',      // Elohim - Deus
        'יהוה',        // YHWH - Nome de Deus
        'שלום',        // Shalom - Paz
        'אמן',         // Amém
        'הללויה',      // Aleluia
        'אהבה',        // Ahavá - Amor
        'אמת',         // Emet - Verdade
        'חיים',        // Chaim - Vida
        'אור',         // Or - Luz
        'ברכה',        // Berachá - Bênção
        'תפילה',       // Tefilá - Oração
        'תורה',        // Torá
        'רוח',         // Ruach - Espírito
        'ישוע',        // Yeshua - Jesus
        'משיח',        // Mashiach - Messias
        'גאולה',       // Geulá - Redenção
        'חסד',         // Chesed - Graça/Misericórdia
        'צדקה',        // Tzedaká - Justiça
        'קדוש',        // Kadosh - Santo
        'כבוד'         // Kavod - Glória
    ];
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    // Cada coluna tem uma palavra atribuída e um índice de letra atual
    for (let i = 0; i < Math.floor(columns); i++) {
        drops[i] = {
            y: 1,
            word: hebrewWords[Math.floor(Math.random() * hebrewWords.length)],
            letterIndex: 0
        };
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#a78bfa';
        ctx.font = fontSize + 'px Arial';
        
        for (let i = 0; i < drops.length; i++) {
            const drop = drops[i];
            
            // Pega a letra atual da palavra (ciclando se necessário)
            const letter = drop.word[drop.letterIndex % drop.word.length];
            
            // Desenha a letra
            ctx.fillText(letter, i * fontSize, drop.y * fontSize);
            
            // Quando chega no fim da tela, reseta e troca de palavra
            if (drop.y * fontSize > canvas.height && Math.random() > 0.975) {
                drop.y = 0;
                drop.word = hebrewWords[Math.floor(Math.random() * hebrewWords.length)];
                drop.letterIndex = 0;
            }
            
            // Avança para a próxima letra da palavra
            drop.letterIndex++;
            drop.y++;
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


// Sistema de Imagens dos Projetos
// Para adicionar imagens aos projetos, basta colocar as imagens na pasta 'images/'
// e atualizar o atributo src das tags <img class="projeto-img">

document.addEventListener('DOMContentLoaded', () => {
    const projetoImages = document.querySelectorAll('.projeto-img');
    
    projetoImages.forEach(img => {
        // Quando a imagem carregar, esconder o placeholder
        img.addEventListener('load', function() {
            if (this.src && this.src !== window.location.href) {
                this.style.display = 'block';
                const placeholder = this.parentElement.querySelector('.image-placeholder');
                if (placeholder) {
                    placeholder.style.display = 'none';
                }
            }
        });
        
        // Se já tiver src definido, tentar carregar
        if (img.src && img.src !== window.location.href) {
            img.style.display = 'block';
            const placeholder = img.parentElement.querySelector('.image-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        }
    });
});

// Animação de entrada para categorias de projetos
const categoriaTitulos = document.querySelectorAll('.categoria-titulo');
categoriaTitulos.forEach((titulo, index) => {
    titulo.style.opacity = '0';
    titulo.style.transform = 'translateX(-30px)';
    
    setTimeout(() => {
        titulo.style.transition = 'all 0.6s ease-out';
        titulo.style.opacity = '1';
        titulo.style.transform = 'translateX(0)';
    }, index * 200);
});


// Animação de contagem nos números de experiência
const experienciaCards = document.querySelectorAll('.experiencia-card');
const experienciaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberElement = entry.target.querySelector('.exp-number');
            const targetText = numberElement.textContent;
            
            // Se for número, animar contagem
            if (targetText.includes('+') || targetText.includes('%')) {
                const target = parseInt(targetText);
                if (!isNaN(target)) {
                    animateCounter(numberElement, target, targetText);
                }
            }
            
            experienciaObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

experienciaCards.forEach(card => experienciaObserver.observe(card));

function animateCounter(element, target, originalText) {
    let current = 0;
    const increment = target / 50;
    const suffix = originalText.replace(/[0-9]/g, '');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = originalText;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Hover effect nas tech tags
const techTags = document.querySelectorAll('.tech-tag');
techTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        // Adicionar efeito de "pulse" nas tags relacionadas
        const parentItem = this.closest('.tech-item');
        if (parentItem) {
            const allTags = parentItem.querySelectorAll('.tech-tag');
            allTags.forEach(t => {
                if (t !== this) {
                    t.style.opacity = '0.5';
                }
            });
        }
    });
    
    tag.addEventListener('mouseleave', function() {
        const parentItem = this.closest('.tech-item');
        if (parentItem) {
            const allTags = parentItem.querySelectorAll('.tech-tag');
            allTags.forEach(t => {
                t.style.opacity = '1';
            });
        }
    });
});

// Sistema de Modais dos Projetos
document.addEventListener('DOMContentLoaded', () => {
    // Mapear botões "Ver Detalhes" para seus respectivos modais
    const modalMap = {
        'Grimório Mágico': 'modal-grimorio',
        'Clube dos Exploradores de Dimensões Paralelas': 'modal-clube',
        'Organizador Moodle & SUAP': 'modal-moodle',
        'Aero News': 'modal-aero',
        'Vox Arcanum': 'modal-vox',
        'DINNEER': 'modal-dinneer',
        'Organizador de Tarefas': 'modal-tarefas',
        'App de Histórias - TCC': 'modal-historias'
    };
    
    // Adicionar event listeners aos botões "Ver Detalhes"
    const projetoCards = document.querySelectorAll('.projeto-card');
    projetoCards.forEach(card => {
        const btnView = card.querySelector('.btn-view');
        const projetoTitulo = card.querySelector('.projeto-info h3').textContent;
        
        if (btnView && modalMap[projetoTitulo]) {
            btnView.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(modalMap[projetoTitulo]);
            });
        }
    });
    
    // Fechar modais
    const modalCloses = document.querySelectorAll('.modal-close');
    modalCloses.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
        });
    });
    
    // Fechar ao clicar fora do modal
    const modals = document.querySelectorAll('.projeto-modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // Fechar outros modais primeiro
        closeAllModals();
        
        // Abrir o modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Scroll para o topo do modal
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.projeto-modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
}
