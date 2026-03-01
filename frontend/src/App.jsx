import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Talento from './Talento';
import Perfil from './Perfil';
// --- ESTA ES TU LANDING PAGE COMPLETA (Recuperada al 100%) ---
function Inicio() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-navy-dark border-b border-navy-light px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h1 className="text-white text-xl font-bold tracking-tight">InnovaFreelance</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-300 hover:text-primary transition-colors text-sm font-medium">Inicio</Link>
            <Link to="/talento" className="text-slate-300 hover:text-primary transition-colors text-sm font-medium">Talento</Link>
            <a className="text-slate-300 hover:text-primary transition-colors text-sm font-medium" href="#">Proyectos</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:flex text-slate-300 hover:text-white px-4 py-2 text-sm font-bold transition-colors">
              Iniciar sesión
            </Link>
            <Link to="/login" className="bg-primary hover:bg-primary-dark text-navy-dark px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-primary/20 flex items-center justify-center">
              Regístrate
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-navy-dark py-20 px-4 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20" data-alt="Abstract cyan radial gradient background" style={{ backgroundImage: 'radial-gradient(circle at center, #0dccf2 0%, transparent 70%)' }}>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-light border border-slate-700 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs text-slate-300 font-medium tracking-wide uppercase">Plataforma #1 de Ingeniería</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              El talento tecnológico que tu <span className="text-primary">proyecto necesita</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Conecta con ingenieros expertos en desarrollo web, sistemas embebidos, diseño de PCBs e inteligencia artificial para llevar tus ideas al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/talento" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-navy-dark font-bold rounded-lg text-base transition-all hover:scale-105 shadow-xl shadow-primary/25 text-center block">
                Buscar talento
              </Link>
              <Link to="/login" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 hover:border-slate-400 text-white font-bold rounded-lg text-base transition-all hover:bg-white/5 text-center block">
                Ofrecer mis servicios
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        </section>

        {/* Categories Section */}
        <section className="py-20 px-4 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Categorías Principales</h3>
                <p className="text-slate-500 dark:text-slate-400">Explora talento especializado en áreas de alta demanda</p>
              </div>
              <a className="text-primary font-bold hover:text-primary-dark flex items-center gap-1 group" href="#">
                Ver todas las categorías
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category 1 */}
              <div className="group bg-white dark:bg-navy-light p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">code</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Desarrollo de Software</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Fullstack, Backend, Frontend y Arquitectura de soluciones.</p>
              </div>
              {/* Category 2 */}
              <div className="group bg-white dark:bg-navy-light p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">memory</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Sistemas Embebidos & IoT</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Firmware, RTOS, Microcontroladores y Sensores.</p>
              </div>
              {/* Category 3 */}
              <div className="group bg-white dark:bg-navy-light p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">settings_input_component</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Diseño Electrónico</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Diseño de PCBs, Esquemáticos y Prototipado rápido.</p>
              </div>
              {/* Category 4 */}
              <div className="group bg-white dark:bg-navy-light p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">smart_toy</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Inteligencia Artificial</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Machine Learning, Visión por Computadora y NLP.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature/Trust Section */}
        <section className="py-16 px-4 bg-white dark:bg-navy-light border-y border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                  <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Talento Verificado</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm px-4">Cada ingeniero pasa por un riguroso proceso de validación técnica.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                  <span className="material-symbols-outlined text-4xl">payments</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Pagos Seguros</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm px-4">Tu dinero está protegido hasta que apruebes el trabajo final.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full text-primary">
                  <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Proyectos Ágiles</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm px-4">Herramientas integradas para gestionar el desarrollo sin fricción.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy-dark text-center py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="w-10 h-10 text-primary opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="flex gap-6 text-sm text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Términos</a>
            <a className="hover:text-primary transition-colors" href="#">Privacidad</a>
            <a className="hover:text-primary transition-colors" href="#">Soporte</a>
          </div>
          <p className="text-slate-600 text-sm font-medium">© 2026 InnovaFreelance - Proyecto InnovaTecNM</p>
        </div>
      </footer>
    </div>
  );
}

// --- ESTE ES EL ENRUTADOR PRINCIPAL ---
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/talento" element={<Talento />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;