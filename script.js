/**
 * Abhi Srivastava - Portfolio JavaScript
 * Modern, clean, and responsive single-page interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Dynamic Tagline Typing Effect
  initDynamicTyping();

  // 2. Navigation bar scroll effect & active section scroll-spy
  initScrollNav();

  // 3. Mobile Hamburger Menu Toggle
  initMobileMenu();

  // 4. Skills Category Filtering
  initSkillFiltering();

  // 5. Contact Form Submission & Validation
  initContactForm();

  // 6. Copy Email To Clipboard
  initCopyEmail();

  // 7. Resume Modal Handler
  initResumeModal();

  // 8. Back to Top Button
  initBackToTop();
});

/**
 * Dynamic Typing Effect for Hero Sub-headline
 */
function initDynamicTyping() {
  const taglineEl = document.getElementById('typed-tagline');
  if (!taglineEl) return;

  const phrases = [
    'Full-Stack Developer',
    'Problem Solver',
    'Cloud & System Architect',
    'Tech Enthusiast'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      taglineEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      taglineEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at complete phrase
      isDeleting = true;
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/**
 * Navigation Bar Scroll Effect & Active Section Spy
 */
function initScrollNav() {
  const navContainer = document.getElementById('nav-container');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    // Toggle backdrop style when scrolled
    if (scrollY > 30) {
      navContainer.classList.add('nav-scrolled');
    } else {
      navContainer.classList.remove('nav-scrolled');
    }

    // Scroll spy: highlight current section in navigation
    let currentId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Hamburger Menu Toggle
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconBars = document.getElementById('menu-icon-bars');
  const iconClose = document.getElementById('menu-icon-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu() {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      iconBars.classList.add('hidden');
      iconClose.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      iconBars.classList.remove('hidden');
      iconClose.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  menuBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking any mobile navigation link
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      iconBars.classList.remove('hidden');
      iconClose.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      iconBars.classList.remove('hidden');
      iconClose.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Skills Category Filtering
 */
function initSkillFiltering() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!tabBtns.length || !skillCards.length) return;

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active class from all tabs
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      skillCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease';
            card.style.opacity = '1';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Contact Form Submission with Validation & Feedback
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const submitIcon = document.getElementById('submit-icon');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    messageError.classList.add('hidden');

    if (!nameInput.value.trim()) {
      nameError.classList.remove('hidden');
      isValid = false;
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageError.classList.remove('hidden');
      isValid = false;
    }

    if (!isValid) return;

    // Simulate sending state
    submitBtn.disabled = true;
    submitText.textContent = 'Sending message...';

    setTimeout(() => {
      // Success feedback
      submitBtn.disabled = false;
      submitText.textContent = 'Send Message';
      form.reset();

      showToast('Message sent successfully! Abhi will get back to you soon.', 'success');
    }, 900);
  });
}

/**
 * Copy Email Address to Clipboard
 */
function initCopyEmail() {
  const heroCopyBtn = document.getElementById('hero-copy-email');
  const contactCopyBtn = document.getElementById('copy-contact-email');
  const email = 'abhi.srivastava@example.com';

  function copyAction() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!', 'info');
      }).catch(() => {
        fallbackCopy(email);
      });
    } else {
      fallbackCopy(email);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Email copied to clipboard!', 'info');
    } catch (err) {
      showToast('Please email: ' + text, 'info');
    }
    document.body.removeChild(textArea);
  }

  if (heroCopyBtn) heroCopyBtn.addEventListener('click', copyAction);
  if (contactCopyBtn) contactCopyBtn.addEventListener('click', copyAction);
}

/**
 * Resume Preview Modal Handler
 */
function initResumeModal() {
  const modal = document.getElementById('resume-modal');
  const openDesktopBtn = document.getElementById('open-resume-btn');
  const openMobileBtn = document.getElementById('mobile-resume-btn');
  const closeBtn = document.getElementById('close-resume-modal');
  const modalContactBtn = document.getElementById('btn-modal-contact');
  const printBtn = document.getElementById('btn-print-resume');

  if (!modal) return;

  function openModal() {
    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal-active');
    document.body.style.overflow = '';
  }

  if (openDesktopBtn) openDesktopBtn.addEventListener('click', openModal);
  if (openMobileBtn) openMobileBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modalContactBtn) {
    modalContactBtn.addEventListener('click', () => {
      closeModal();
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal-active')) {
      closeModal();
    }
  });
}

/**
 * Back to Top Floating Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Lightweight Toast Notification System
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-2xl text-sm transition-all duration-300 ${
    type === 'success' 
      ? 'bg-emerald-950/90 border-emerald-700/80 text-emerald-200' 
      : 'bg-slate-900/90 border-slate-700/80 text-slate-200'
  }`;

  const iconName = type === 'success' ? 'check-circle' : 'info';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 flex-shrink-0 ${type === 'success' ? 'text-emerald-400' : 'text-brand-400'}"></i>
    <span class="font-medium">${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons({ root: toast });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 4000);
}
