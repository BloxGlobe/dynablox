// Router for handling client-side navigation

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.init();
    }

    init() {
        // Handle initial page load
        window.addEventListener('load', () => {
            this.handleRoute();
        });

        // Handle back/forward navigation
        window.addEventListener('popstate', () => {
            this.handleRoute();
        });

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });

        // Intercept link clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
                e.preventDefault();
                const link = e.target.matches('a') ? e.target : e.target.closest('a');
                const path = link.getAttribute('href').substring(1);
                this.navigate(path);
            }
        });

        // Register default routes
        this.registerDefaultRoutes();
    }

    // Register a route
    register(path, handler) {
        this.routes[path] = handler;
    }

    // Navigate to a path
    navigate(path) {
        window.location.hash = path;
    }

    // Handle current route
    async handleRoute() {
        const hash = window.location.hash.substring(1) || 'home';
        const [path, ...params] = hash.split('/');

        this.currentRoute = path;
        this.updateActiveNavigation(path);

        // Try to load page module dynamically
        await this.loadPageModule(path, params);
    }

    // Load page module dynamically
    async loadPageModule(page, params = []) {
        const container = document.getElementById('mainContent');
        
        if (!container) return;

        // Show loading state
        container.style.opacity = '0.5';

        try {
            // Try to import the page module
            const module = await import(`./src/pages/${page}.js`);
            
            if (typeof module.default === 'function') {
                // Clear container and run page init
                container.innerHTML = '';
                module.default(container, params);
            }
        } catch (error) {
            console.warn(`No module found for ${page}, using default handler`);
            
            // Fall back to registered routes or default
            if (this.routes[page]) {
                this.routes[page](params);
            } else {
                this.loadDefaultPage(page);
            }
        } finally {
            container.style.opacity = '1';
        }
    }

    // Load default page content (fallback)
    loadDefaultPage(page) {
        const container = document.getElementById('mainContent');
        
        if (page === 'home') {
            container.innerHTML = `
                <h1 class="page-title">Dashboard</h1>
                <section class="section">
                    <div class="section-header">
                        <h2 class="section-title">Friends</h2>
                    </div>
                    <div class="friends-container">
                        <div class="friend-item add-friend">
                            <div class="friend-avatar">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <span class="friend-name">Add Friend</span>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div class="section-header">
                        <h2 class="section-title">Resources</h2>
                    </div>
                    <div class="continue-grid" id="continueGrid"></div>
                </section>
            `;
        }
    }

    // Update active navigation items
    updateActiveNavigation(path) {
        // Update top nav
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${path}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Update sidebar if it exists
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        sidebarItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === `#${path}`) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Register default routes
    registerDefaultRoutes() {
        this.register('home', () => {
            this.loadDefaultPage('home');
        });

        this.register('settings', () => {
            console.log('Settings page loaded');
        });

        this.register('library', () => {
            console.log('Library page loaded');
        });

        this.register('communities', () => {
            console.log('Communities page loaded');
        });

        this.register('resources', () => {
            console.log('Resources page loaded');
        });
    }

    // Get current route
    getCurrentRoute() {
        return this.currentRoute;
    }

    // Go back
    goBack() {
        window.history.back();
    }

    // Reload current route
    reload() {
        this.handleRoute();
    }
}

// Initialize router
const router = new Router();

// Make router globally available
window.router = router;