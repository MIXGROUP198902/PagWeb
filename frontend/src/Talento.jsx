import React from 'react';
import { Link } from 'react-router-dom';

function Talento() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-slate-100 overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-10 py-3">
          
          {/* Logo que regresa al INICIO */}
          <Link to="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="size-8 text-primary group-hover:scale-110 transition-transform">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
              InnovaFreelance
            </h2>
          </Link>

          <div className="flex flex-1 justify-end gap-8 items-center">
            <nav className="hidden md:flex items-center gap-9">
              <Link to="/talento" className="text-primary font-bold leading-normal border-b-2 border-primary pb-0.5">Descubrir</Link>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Proyectos</a>
              <Link to="/talento" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium leading-normal transition-colors">Talento</Link>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium leading-normal transition-colors" href="#">Comunidad</a>
            </nav>
            <div className="flex gap-3">
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-900 text-sm font-bold leading-normal tracking-wide hover:brightness-110 transition-all">
                <span className="truncate">Publicar Proyecto</span>
              </button>
              <Link to="/login" className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold leading-normal tracking-wide hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                <span className="truncate">Iniciar Sesión</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex flex-1 justify-center py-5 px-4 md:px-10 lg:px-40">
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
            
            {/* Hero Section with Search */}
            <div className="mb-12">
              <div className="flex min-h-[400px] flex-col gap-8 rounded-xl bg-cover bg-center bg-no-repeat items-center justify-center p-8 relative overflow-hidden group" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80")' }}>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-background-dark/95 z-0"></div>
                
                <div className="relative z-10 flex flex-col gap-3 text-center max-w-3xl">
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                    Encuentra expertos en tecnología e ingeniería de élite
                  </h1>
                  <p className="text-slate-300 text-lg font-normal leading-relaxed max-w-2xl mx-auto">
                    Conecta con los mejores freelancers para tus proyectos más ambiciosos. Desde IA hasta hardware avanzado.
                  </p>
                </div>
                
                <div className="relative z-10 w-full max-w-2xl mt-4">
                  <form className="flex w-full items-stretch rounded-xl shadow-2xl shadow-primary/10 overflow-hidden ring-1 ring-slate-700 focus-within:ring-primary transition-all duration-300 h-16 bg-slate-800/80 backdrop-blur-sm">
                    <div className="flex items-center justify-center pl-5 pr-2 text-slate-400">
                      <span className="material-symbols-outlined text-2xl">search</span>
                    </div>
                    <input className="w-full bg-transparent border-none text-white placeholder:text-slate-400 focus:ring-0 text-lg h-full outline-none" placeholder="Busca expertos en React, hardware, IA..." type="text" />
                    <div className="p-2">
                      <button type="button" className="h-full px-8 rounded-lg bg-primary text-slate-900 font-bold hover:bg-cyan-400 transition-colors">
                        Buscar
                      </button>
                    </div>
                  </form>
                  <div className="flex gap-3 mt-4 justify-center text-sm text-slate-400">
                    <span>Tendencias:</span>
                    <a className="hover:text-primary underline decoration-primary/50" href="#">Machine Learning</a>
                    <a className="hover:text-primary underline decoration-primary/50" href="#">Rust</a>
                    <a className="hover:text-primary underline decoration-primary/50" href="#">CAD Design</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Talent Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6 px-2">
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  Talento Destacado de la Semana
                </h2>
                <a className="text-primary text-sm font-bold hover:underline" href="#">Ver todos</a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Card 1 */}
                <div className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <div className="relative h-24 bg-gradient-to-r from-slate-800 to-slate-700">
                    <div className="absolute -bottom-10 left-6 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-slate-800 size-20 overflow-hidden flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-slate-400">person</span>
                    </div>
                  </div>
                  <div className="pt-12 px-6 pb-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold">Sofia Martinez</h3>
                        <p className="text-primary text-sm font-medium">Ingeniera IoT Senior</p>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-yellow-400 text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px] fill-current">star</span> 5.0
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                      Especialista en desarrollo de sistemas embebidos y conectividad LoRaWAN para industria 4.0.
                    </p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">C++</span>
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">Arduino</span>
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">PCB Design</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                      <span className="text-slate-900 dark:text-white font-bold">$65/hr</span>
                      {/* CAMBIO AQUÍ PARA LA TARJETA 1 */}
                      <Link to="/perfil" className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors flex items-center gap-1">
                        Ver Perfil <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <div className="relative h-24 bg-gradient-to-r from-slate-900 to-slate-800">
                    <div className="absolute -bottom-10 left-6 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-slate-800 size-20 overflow-hidden flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-slate-400">person</span>
                    </div>
                  </div>
                  <div className="pt-12 px-6 pb-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold">David Chen</h3>
                        <p className="text-primary text-sm font-medium">Arquitecto Cloud</p>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-yellow-400 text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px] fill-current">star</span> 4.9
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                      Experto en migración a la nube y arquitecturas serverless. AWS Certified Solutions Architect.
                    </p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">AWS</span>
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">Terraform</span>
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">Docker</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                      <span className="text-slate-900 dark:text-white font-bold">$90/hr</span>
                      {/* CAMBIO AQUÍ PARA LA TARJETA 2 */}
                      <Link to="/perfil" className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors flex items-center gap-1">
                        Ver Perfil <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <div className="relative h-24 bg-gradient-to-r from-slate-700 to-slate-600">
                    <div className="absolute -bottom-10 left-6 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-slate-800 size-20 overflow-hidden flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-slate-400">person</span>
                    </div>
                  </div>
                  <div className="pt-12 px-6 pb-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold">Elena Rodriguez</h3>
                        <p className="text-primary text-sm font-medium">Ingeniera Mecánica</p>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded text-yellow-400 text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px] fill-current">star</span> 5.0
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                      Diseño 3D avanzado y simulación de fluidos. Experiencia en automoción y aeroespacial.
                    </p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">SolidWorks</span>
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">ANSYS</span>
                      <span className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">Matlab</span>
                    </div>
                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                      <span className="text-slate-900 dark:text-white font-bold">$75/hr</span>
                      {/* CAMBIO AQUÍ PARA LA TARJETA 3 */}
                      <Link to="/perfil" className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors flex items-center gap-1">
                        Ver Perfil <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Talento;