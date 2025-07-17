// solar-system-explorer.js
class SolarSystemExplorer {
  constructor() {
    this.mobileBreakpoint = 768;
    this.isMobile = window.innerWidth <= this.mobileBreakpoint;
    this.currentPlanet = null;
    this.panels = document.querySelectorAll('.panel');
    this.planetInputs = document.querySelectorAll('input[name="planet"]');
    this.readInputs = document.querySelectorAll('input[class="read"]');
    this.closeButtons = document.querySelectorAll('label[class="closeBig"]');
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.applyResponsiveLayout();
    this.setupMobileMenu();
    this.setupAccessibility();
    this.setupPerformanceOptimizations();
  }

  setupEventListeners() {
    // Planet selection
    this.planetInputs.forEach(input => {
      input.addEventListener('change', (e) => this.handlePlanetSelection(e.target.id));
    });

    // Read more panels
    this.readInputs.forEach(input => {
      input.addEventListener('change', (e) => this.handlePanelToggle(e.target.id));
    });

    // Close buttons
    this.closeButtons.forEach(button => {
      button.addEventListener('click', () => this.closeAllPanels());
    });

    // Window resize with debounce
    window.addEventListener('resize', this.debounce(() => {
      this.isMobile = window.innerWidth <= this.mobileBreakpoint;
      this.applyResponsiveLayout();
    }, 250));

    // Orientation change
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.isMobile = window.innerWidth <= this.mobileBreakpoint;
        this.applyResponsiveLayout();
      }, 300);
    });
  }

  handlePlanetSelection(planetId) {
    this.currentPlanet = planetId;
    // Aqui você pode adicionar animações 3D específicas para o planeta selecionado
    if (this.isMobile) {
      this.scrollToPlanet(planetId);
    }
  }

  handlePanelToggle(panelId) {
    if (panelId.startsWith('read')) {
      const panel = document.getElementById(panelId.replace('read', ''));
      if (panel) {
        this.scrollToPanel(panel);
      }
    }
  }

  closeAllPanels() {
    this.readInputs.forEach(input => {
      if (input.checked) input.checked = false;
    });
  }

  scrollToPlanet(planetId) {
    const planetElement = document.querySelector(`.${planetId.replace('read', '').toLowerCase()}`);
    if (planetElement) {
      planetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  scrollToPanel(panel) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  applyResponsiveLayout() {
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const solarContainer = document.querySelector('.solar');

    body.classList.remove('mobile', 'desktop');
    
    if (this.isMobile) {
      body.classList.add('mobile');
      
      // Mobile optimizations
      if (solarContainer) {
        solarContainer.style.flexDirection = 'column';
        solarContainer.style.overflowX = 'hidden';
      }
      
      if (header) {
        header.style.fontSize = '1.5rem';
        header.style.padding = '10px';
      }
      
      // Hide desktop navigation
      if (nav) nav.style.display = 'none';
      
      // Optimize planet previews
      document.querySelectorAll('.menu').forEach(menu => {
        menu.style.padding = '8px';
        menu.querySelector('.info h2').style.fontSize = '0.9rem';
        menu.querySelector('.info h3').style.fontSize = '0.8rem';
      });
      
    } else {
      body.classList.add('desktop');
      
      // Restore desktop layout
      if (solarContainer) {
        solarContainer.style.flexDirection = 'row';
        solarContainer.style.overflowX = 'visible';
      }
      
      if (header) {
        header.style.fontSize = '';
        header.style.padding = '';
      }
      
      if (nav) nav.style.display = 'flex';
      
      // Restore planet previews
      document.querySelectorAll('.menu').forEach(menu => {
        menu.style.padding = '';
        menu.querySelector('.info h2').style.fontSize = '';
        menu.querySelector('.info h3').style.fontSize = '';
      });
    }
  }

  setupMobileMenu() {
    // Create mobile menu button if it doesn't exist
    if (!document.getElementById('mobile-menu-btn') && this.isMobile) {
      const menuBtn = document.createElement('button');
      menuBtn.id = 'mobile-menu-btn';
      menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
      menuBtn.classList.add('mobile-menu-button');
      
      const mobileMenu = document.createElement('div');
      mobileMenu.id = 'mobile-menu';
      mobileMenu.classList.add('mobile-menu');
      
      // Clone planet menu items for mobile
      this.planetInputs.forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
          const clone = label.cloneNode(true);
          clone.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
          });
          mobileMenu.appendChild(clone);
        }
      });
      
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
      });
      
      document.body.appendChild(menuBtn);
      document.body.appendChild(mobileMenu);
      
      // Add styles dynamically
      const style = document.createElement('style');
      style.textContent = `
        .mobile-menu-button {
          position: fixed;
          top: 10px;
          right: 10px;
          z-index: 1000;
          background: rgba(0,0,0,0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu {
          position: fixed;
          top: 60px;
          right: -100%;
          width: 80%;
          max-width: 300px;
          background: rgba(0,0,0,0.9);
          border-radius: 5px;
          padding: 10px;
          transition: right 0.3s ease;
          z-index: 999;
          max-height: 80vh;
          overflow-y: auto;
        }
        .mobile-menu.active {
          right: 10px;
        }
        .mobile-menu .menu {
          display: block;
          margin: 10px 0;
        }
      `;
      document.head.appendChild(style);
    }
  }

  setupAccessibility() {
    // Add ARIA attributes for better accessibility
    this.planetInputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        label.setAttribute('role', 'button');
        label.setAttribute('aria-label', `Selecionar planeta ${input.id}`);
        label.setAttribute('tabindex', '0');
        
        label.addEventListener('keypress', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            input.checked = true;
            this.handlePlanetSelection(input.id);
          }
        });
      }
    });
    
    this.readInputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) {
        label.setAttribute('role', 'button');
        label.setAttribute('aria-label', `Abrir informações sobre ${input.id.replace('read', '')}`);
        label.setAttribute('tabindex', '0');
      }
    });
    
    this.closeButtons.forEach(button => {
      button.setAttribute('role', 'button');
      button.setAttribute('aria-label', 'Fechar painel');
      button.setAttribute('tabindex', '0');
      
      button.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          this.closeAllPanels();
        }
      });
    });
  }

  setupPerformanceOptimizations() {
    if (this.isMobile) {
      // Reduce animations on mobile
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
      
      // Optimize images
      document.querySelectorAll('.panel img').forEach(img => {
        img.loading = 'lazy';
      });
      
      // Use passive event listeners for better scrolling performance
      document.addEventListener('touchmove', () => {}, { passive: true });
    }
  }

  debounce(func, wait) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const solarSystem = new SolarSystemExplorer();
  
  // Expose to global scope if needed
  window.SolarSystem = solarSystem;
});