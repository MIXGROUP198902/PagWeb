import React from 'react';
import { Link } from 'react-router-dom';

function Perfil() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col overflow-x-hidden">
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-border-dark bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-6 py-3 lg:px-10">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 text-slate-900 dark:text-white cursor-pointer group">
            <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
              <span className="material-symbols-outlined text-[20px]">terminal</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">InnovaFreelance</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/talento" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Descubrir</Link>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Proyectos</a>
            <Link to="/talento" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Talento</Link>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <label className="hidden sm:flex relative w-full max-w-xs h-10 group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input className="w-full bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-slate-100 transition-all" placeholder="Buscar ingenieros, habilidades..." type="text" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 border border-slate-300 dark:border-border-dark rounded px-1.5 py-0.5 text-[10px] text-slate-400 dark:text-slate-500 font-mono hidden lg:block">/</div>
          </label>
          <Link to="/login" className="flex items-center justify-center gap-2 rounded-lg h-9 px-4 border border-slate-200 dark:border-border-dark hover:bg-slate-100 dark:hover:bg-surface-dark text-slate-900 dark:text-white text-sm font-bold transition-colors">
            <span className="truncate">Iniciar Sesión</span>
          </Link>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 layout-container w-full max-w-[1400px] mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Left Sidebar (Profile Info) */}
          <aside className="w-full md:w-1/4 md:min-w-[280px] flex flex-col gap-6 sticky top-24">
            <div className="flex flex-col gap-4">
              
              {/* Avatar de Sofia */}
              <div className="relative group w-full aspect-square max-w-[280px] rounded-full md:rounded-xl overflow-hidden border-2 border-slate-200 dark:border-border-dark shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-mono">Estado: Soldando componentes...</span>
                </div>
                {/* Imagen de perfil de ingeniera */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80')" }}></div>
              </div>

              {/* Basic Info */}
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">Sofia Martinez</h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-light">sofia_iot</p>
                <p className="text-primary mt-2 font-medium">Ingeniera IoT & Hardware</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                <p>DISEÑANDO HARDWARE CONECTADO DESDE 2018.</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-slate-400">location_on</span>
                  <span>México</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-slate-400">link</span>
                  <a className="hover:text-primary transition-colors hover:underline" href="#">sofia-hardware.dev</a>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 w-full">
                <button className="w-full h-10 rounded-lg bg-primary hover:bg-cyan-400 text-background-dark font-bold text-sm transition-colors shadow-[0_0_15px_-3px_rgba(13,204,242,0.3)]">
                  Contactar
                </button>
                <button className="w-full h-10 rounded-lg bg-slate-200 dark:bg-surface-dark border border-slate-300 dark:border-border-dark hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors">
                  Descargar CV
                </button>
              </div>

              <div className="h-px w-full bg-slate-200 dark:bg-border-dark my-2"></div>

              {/* Skills */}
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">Habilidades Clave</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">C / C++</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">Altium Designer</span>
                  <span class="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">ESP32 / Microcontroladores</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">LoRaWAN</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">Python</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area (README style) */}
          <section className="w-full md:w-3/4 flex flex-col gap-6">
            
            {/* README.md Container */}
            <div className="border border-slate-200 dark:border-border-dark rounded-xl bg-white dark:bg-surface-dark overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-surface-darker border-b border-slate-200 dark:border-border-dark">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-slate-600 dark:text-slate-300 font-mono">sofia_iot / README.md</span>
                  <span className="material-symbols-outlined text-[16px] text-slate-400">edit</span>
                </div>
              </div>

              {/* Readme Content */}
              <div className="p-6 md:p-10 flex flex-col gap-8">
                
                {/* Hero Section inside Readme */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-border-dark">
                    <span className="text-3xl">👋</span>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">¡Hola! Soy Sofia</h2>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Soy una ingeniera especializada en <strong>Sistemas Embebidos y Diseño de PCBs</strong>. Me apasiona crear hardware desde cero, programar firmware en C/C++ y conectar dispositivos industriales a la nube usando tecnologías como LoRaWAN y MQTT. 
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary">memory</span>
                      <span>Enfoque en optimización de energía para IoT</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary">router</span>
                      <span>Diseño de esquemáticos multicapa</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Visualization */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">developer_board</span>
                      Stack de Hardware
                    </h3>
                    <div className="bg-slate-900 dark:bg-black rounded-lg p-4 font-mono text-sm shadow-inner border border-slate-800">
                      <div className="flex gap-2 text-slate-500 mb-2">
                        <div className="size-3 rounded-full bg-red-500"></div>
                        <div className="size-3 rounded-full bg-yellow-500"></div>
                        <div className="size-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex">
                          <span className="text-pink-400 min-w-[80px]">firmware:</span>
                          <span className="text-green-400">["C++", "FreeRTOS", "Micropython"]</span>
                        </div>
                        <div className="flex">
                          <span className="text-pink-400 min-w-[80px]">hardware:</span>
                          <span className="text-green-400">["ESP32", "STM32", "Raspberry Pi Pico"]</span>
                        </div>
                        <div className="flex">
                          <span className="text-pink-400 min-w-[80px]">diseño:</span>
                          <span className="text-green-400">["Altium", "KiCad", "Archivos Gerber"]</span>
                        </div>
                        <div className="flex mt-2">
                          <span className="text-blue-400">void</span>
                          <span className="text-yellow-300 ml-2">iniciarProyecto</span>
                          <span className="text-white">() {'{'}</span>
                        </div>
                        <div className="flex">
                          <span className="text-slate-400 ml-6">// Listo para diseñar</span>
                        </div>
                        <div className="flex">
                          <span className="text-white">{'}'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Imagen de un entorno de trabajo de hardware */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                      Prototipado en Acción
                    </h3>
                    <div className="h-full rounded-lg bg-cover bg-center border border-slate-200 dark:border-slate-800 min-h-[160px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')" }}>
                    </div>
                  </div>
                </div>

                {/* Featured Project */}
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 dark:text-white text-xl">Proyecto Destacado</h3>
                  </div>
                  <div className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700 hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      {/* Image Side - Placa electrónica */}
                      <div className="w-full md:w-2/5 h-48 md:h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606001423238-d6e42b85e0de?auto=format&fit=crop&w=800&q=80')" }}></div>
                      
                      {/* Content Side */}
                      <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Sistema de Monitoreo Industrial (ESP32)</h4>
                            <div className="flex gap-2">
                              <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                              <span className="text-xs text-green-400">Completado</span>
                            </div>
                          </div>
                          <p className="text-slate-400 text-sm mb-4">
                            Diseño de PCB personalizado y desarrollo de firmware en C++ para monitorear maquinaria industrial. Utiliza sensores de temperatura y vibración con transmisión de datos vía LoRaWAN a la nube.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">C++</span>
                            <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">Altium</span>
                            <span className="px-2 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">ESP32</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Latest Activity */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg">Actividad Reciente</h3>
                  <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-4 divide-y divide-slate-100 dark:divide-slate-800">
                    <div className="flex gap-4 py-3 first:pt-0">
                      <div className="mt-1">
                        <span className="material-symbols-outlined text-purple-400 bg-purple-400/10 p-1.5 rounded-full text-sm">precision_manufacturing</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-900 dark:text-slate-200">
                          Finalizó la generación de <a className="text-primary hover:underline" href="#">Archivos Gerber v2.0</a> para producción en masa.
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Hace 2 horas</p>
                      </div>
                    </div>
                    <div className="flex gap-4 py-3 last:pb-0">
                      <div class="mt-1">
                        <span className="material-symbols-outlined text-blue-400 bg-blue-400/10 p-1.5 rounded-full text-sm">code</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-900 dark:text-slate-200">
                          Actualización de repositorio <a className="text-primary hover:underline" href="#">esp32-sensor-driver</a> en GitHub.
                        </p>
                        <div className="mt-2 bg-slate-50 dark:bg-surface-darker p-2 rounded text-xs text-slate-600 dark:text-slate-400 italic border-l-2 border-slate-300 dark:border-slate-600">
                          "Se optimizó el consumo de energía durante el modo Deep Sleep del microcontrolador..."
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Hace 1 día</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Perfil;