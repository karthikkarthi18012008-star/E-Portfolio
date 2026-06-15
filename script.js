/* ==========================================================================
   NEURAL NETWORK PARTICLE BACKGROUND
   ========================================================================== */
const canvas = document.getElementById('neuron-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null, radius: 150 };

// Resize canvas dynamically
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

// Particle Class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
        // Assign a color gradient coordinate color
        this.color = Math.random() > 0.5 ? 'rgba(0, 242, 254, 0.7)' : 'rgba(127, 0, 255, 0.7)';
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        // Bounce on boundaries
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Interaction with mouse (gentle push/pull)
        if (mouse.x !== null && mouse.y !== null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.hypot(dx, dy);
            
            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                const angle = Math.atan2(dy, dx);
                // Move away from mouse slightly
                this.x -= Math.cos(angle) * force * 0.6;
                this.y -= Math.sin(angle) * force * 0.6;
            }
        }
    }
}

// Initialize Particle Array
function initParticles() {
    particles = [];
    // Adjust density based on screen size
    const density = window.innerWidth < 768 ? 40 : 85;
    for (let i = 0; i < density; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

// Draw Lines connecting points
function connectParticles() {
    const maxDistance = 110;
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            let dist = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
            
            if (dist < maxDistance) {
                // Opacity fades as distance increases
                const alpha = (1 - dist / maxDistance) * 0.18;
                ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }

        // Connect to mouse as well
        if (mouse.x !== null && mouse.y !== null) {
            let mouseDist = Math.hypot(particles[a].x - mouse.x, particles[a].y - mouse.y);
            if (mouseDist < mouse.radius) {
                const alpha = (1 - mouseDist / mouse.radius) * 0.25;
                ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

// Main Canvas Loop
function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background subtle radial gradient to make it feel premium
    let radialGrd = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 10, canvas.width/2, canvas.height/2, Math.max(canvas.width, canvas.height));
    radialGrd.addColorStop(0, '#0a0b12');
    radialGrd.addColorStop(1, '#050508');
    ctx.fillStyle = radialGrd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let particle of particles) {
        particle.update();
        particle.draw();
    }
    connectParticles();
    requestAnimationFrame(animateCanvas);
}

// Event Listeners for Canvas
window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

// Start Canvas Background
resizeCanvas();
animateCanvas();


/* ==========================================================================
   TYPING TEXT ANIMATION
   ========================================================================== */
const typingText = document.getElementById('typing-text');
const words = [
    "Aspiring AI/ML Engineer", 
    "B.Tech AIML Student", 
    "Problem Solver", 
    "Continuous Learner"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeDelay = 120;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove characters
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeDelay = 60; // Deletes faster
    } else {
        // Add characters
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeDelay = 120;
    }
    
    // Transition points
    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at full word
        typeDelay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        // Pause before typing next word
        typeDelay = 500;
    }
    
    setTimeout(typeEffect, typeDelay);
}

// Start typing
setTimeout(typeEffect, 1000);


/* ==========================================================================
   HEADER SCROLL & SCROLLSPY
   ========================================================================== */
const header = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function handleScroll() {
    const scrollPos = window.scrollY;
    
    // Header shadow on scroll
    if (scrollPos > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    const backToTopBtn = document.getElementById('back-to-top');
    if (scrollPos > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    // ScrollSpy active link toggle
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    if (currentSectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

window.addEventListener('scroll', handleScroll);


/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
const hamburger = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu on nav-link clicks (mobile context)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


/* ==========================================================================
   PORTFOLIO CATEGORY FILTER
   ========================================================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.classList.remove('hidden');
                // Triggers subtle entrance scale
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                card.classList.add('hidden');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.92)';
            }
        });
    });
});


/* ==========================================================================
   BACK TO TOP ACTION
   ========================================================================== */
const backToTopBtn = document.getElementById('back-to-top');
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* ==========================================================================
   CONTACT FORM HANDLER (SIMULATION)
   ========================================================================== */
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('form-submit-btn');
const responseMsg = document.getElementById('form-response-msg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;
    
    // Basic verification check
    if (!name || !email || !subject || !message) {
        responseMsg.className = 'form-msg error';
        responseMsg.textContent = 'Please fill out all fields.';
        return;
    }
    
    // Start loader state
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending Message...';
    responseMsg.textContent = '';
    
    // Simulate backend POST request
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Reset form content
        contactForm.reset();
        
        // Output success statement
        responseMsg.className = 'form-msg success';
        responseMsg.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        
        // Clear message after 5 seconds
        setTimeout(() => {
            responseMsg.textContent = '';
        }, 5000);
    }, 1500);
});
