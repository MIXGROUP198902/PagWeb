import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col overflow-x-hidden text-slate-900 dark:text-slate-100">
      {/* Header Simplificado para el Login */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-surface-border bg-background-light dark:bg-background-dark px-6 lg:px-10 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <Link to="/" className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] hover:text-primary transition-colors">
            InnovaFreelance
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 relative">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-700 blur-[100px]"></div>
        </div>

        <div className="w-full max-w-[480px] z-10">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] md:text-[40px] font-bold leading-tight text-center pb-8 pt-2">
            Bienvenido a <span className="text-primary">InnovaFreelance</span>
          </h1>

          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl dark:shadow-none border border-slate-200 dark:border-surface-border overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 dark:border-surface-border">
              <button className="flex-1 flex flex-col items-center justify-center pb-[13px] pt-4 relative group">
                <p className="text-primary text-sm font-bold leading-normal tracking-[0.015em]">Iniciar Sesión</p>
                <div className="absolute bottom-0 h-[3px] w-full bg-primary rounded-t-full"></div>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center pb-[13px] pt-4 relative group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                <p className="text-slate-500 dark:text-text-muted group-hover:text-slate-700 dark:group-hover:text-text-main text-sm font-bold leading-normal tracking-[0.015em]">Crear Cuenta</p>
                <div className="absolute bottom-0 h-[3px] w-full bg-transparent group-hover:bg-slate-300 dark:group-hover:bg-surface-border rounded-t-full"></div>
              </button>
            </div>

            {/* Form */}
            <div className="p-6 md:p-8 flex flex-col gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-slate-900 dark:text-white text-base font-medium leading-normal">Correo electrónico</span>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-text-muted group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <input className="form-input w-full rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-surface-border focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-11 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-muted text-base transition-all outline-none" placeholder="ejemplo@empresa.com" type="email" />
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-slate-900 dark:text-white text-base font-medium leading-normal">Contraseña</span>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-text-muted group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <input className="form-input w-full rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-surface-border focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-11 pr-12 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-muted text-base transition-all outline-none" placeholder="••••••••" type="password" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-text-muted hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                  </button>
                </div>
              </label>

              <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(13,204,242,0.4)] transition-all duration-300 text-background-dark text-base font-bold leading-normal tracking-[0.015em] mt-2">
                Entrar
              </button>

              <div className="flex flex-col items-center gap-4 mt-2">
                <a className="text-slate-500 dark:text-text-muted hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">
                  ¿Olvidaste tu contraseña?
                </a>
                <div className="w-full flex items-center gap-3">
                  <div className="h-px bg-slate-200 dark:bg-surface-border flex-1"></div>
                  <span className="text-xs text-slate-400 dark:text-text-muted uppercase tracking-wider">O continuar con</span>
                  <div className="h-px bg-slate-200 dark:bg-surface-border flex-1"></div>
                </div>
                <div className="flex gap-4 w-full">
                  <button className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg border border-slate-200 dark:border-surface-border bg-slate-50 dark:bg-background-dark hover:bg-slate-100 dark:hover:bg-surface-border transition-colors text-slate-700 dark:text-white text-sm font-medium">
                    Google
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg border border-slate-200 dark:border-surface-border bg-slate-50 dark:bg-background-dark hover:bg-slate-100 dark:hover:bg-surface-border transition-colors text-slate-700 dark:text-white text-sm font-medium">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-500 dark:text-text-muted text-sm mt-8">
            Al continuar, aceptas nuestros <a className="text-primary hover:underline" href="#">Términos de Servicio</a> y <a className="text-primary hover:underline" href="#">Política de Privacidad</a>.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;