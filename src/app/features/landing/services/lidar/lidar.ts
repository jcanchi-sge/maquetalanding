import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  Scan,
  Mountain,
  Layers,
  Map,
  Activity,
  ShieldCheck,
  Leaf,
  Clock,
  Waves,
  FlaskConical,
  BarChart3,
  Route,
  Mail,
  Download,
  ChevronRight,
} from 'lucide-angular';

@Component({
  selector: 'app-lidar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  styles: `
    @keyframes neon-pulse {
      0%, 100% { text-shadow: 0 0 6px rgba(34,211,238,0.4), 0 0 14px rgba(34,211,238,0.2); }
      50%       { text-shadow: 0 0 12px rgba(34,211,238,0.7), 0 0 28px rgba(34,211,238,0.4); }
    }
    .neon-title { animation: neon-pulse 4s ease-in-out infinite; }

    /* Subtle noise overlay */
    .noise-bg::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      opacity: 0.04;
      z-index: 0;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICA8ZmlsdGVyIGlkPSJuIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjciIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJub1N0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==');
      background-size: 100px 100px;
    }
  `,
  template: `
    <div class="noise-bg bg-zinc-950 text-zinc-100 overflow-x-hidden relative">

      <!-- ─── HERO ─── -->
      <section id="intro" class="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-fuchsia-950 via-zinc-950 to-teal-950">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(20,184,166,0.08),transparent)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_30%,rgba(168,85,247,0.07),transparent)]"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-700/50 text-teal-400 text-xs font-medium tracking-wider uppercase">
              <lucide-icon name="scan" class="size-3.5"></lucide-icon>
              LiDAR · Light Detection and Ranging
            </span>
            <h1 class="neon-title text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Levantamiento LiDAR de Minería Detallada y de Alta Precisión
            </h1>
            <p class="text-lg text-zinc-400 max-w-xl leading-relaxed">
              Aumente la productividad de sus proyectos al cubrir el área de interés en menos de la mitad del tiempo en comparación con otros métodos topográficos convencionales.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <a href="#contacto"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-semibold transition-all duration-200 active:scale-95 shadow-[0_0_12px_rgba(20,184,166,0.4)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]">
                <lucide-icon name="mail" class="size-4"></lucide-icon>
                Contáctanos
              </a>
              <a href="#exploracion"
                class="inline-flex items-center gap-2 px-5 py-2.5 border border-teal-700 hover:border-teal-500 hover:bg-teal-950/40 text-zinc-300 hover:text-white rounded-lg font-semibold transition-all duration-200 active:scale-95">
                Ver Servicios
                <lucide-icon name="chevron-right" class="size-4"></lucide-icon>
              </a>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <img
              src="/img/servicios/temp/erasebg-transformed.png"
              alt="LiDAR example"
              class="w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <!-- ─── STICKY NAV ─── -->
      <nav class="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-cyan-800/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-1 py-3 overflow-x-auto">
            @for (link of navLinks; track link.href) {
              <a [href]="link.href"
                class="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800/60 transition-all duration-200">
                <lucide-icon [name]="link.icon" class="size-4"></lucide-icon>
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      </nav>

      <!-- ─── EXPLORACIÓN ─── -->
      <section id="exploracion" class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-cyan-400 mb-3">Etapa de Exploración</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Levantamiento LiDAR para ayudar en la interpretación de la geología estructural. La capacidad del método para ver a través de la cubierta vegetal e ilustrar sutiles lineamientos en la roca es de considerable valor.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="overflow-hidden rounded-xl border border-zinc-800 shadow-[0_0_40px_rgba(20,184,166,0.12)]">
              <img
                src="/img/servicios/temp/geologia.png"
                alt="Geología estructural LiDAR"
                class="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div class="space-y-6">
              <p class="text-zinc-400 leading-relaxed">
                Mantener la precisión, las reservas actualizadas y la medición del cambio de terreno a cielo abierto y subterráneo es un factor clave para el éxito en el mundo de la minería. <strong class="text-teal-400">LiDAR</strong> utiliza pulsos láser para medir distancias y generar mapas 3D altamente precisos, ideales para detectar fallas geológicas ocultas bajo vegetación densa.
              </p>
              <h3 class="text-lg font-semibold text-teal-400">Beneficios clave:</h3>
              <ul class="space-y-3">
                @for (b of exploracionBenefits; track b.text) {
                  <li class="flex items-start gap-3 text-sm text-zinc-300">
                    <lucide-icon [name]="b.icon" class="size-4 text-teal-500 mt-0.5 shrink-0"></lucide-icon>
                    {{ b.text }}
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── PRODUCCIÓN ─── -->
      <section id="produccion" class="py-20 relative overflow-hidden bg-zinc-950">
        <div class="absolute inset-0 bg-gradient-to-r from-teal-950/60 to-fuchsia-950/60 pointer-events-none"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Mediciones en Etapa de Producción</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Mantenga la precisión, las reservas actualizadas y la medición del cambio de terreno a cielo abierto y subterráneo, un factor clave para el éxito en la minería.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-5">
              <h3 class="text-lg font-semibold text-cyan-400">Ventajas en producción:</h3>
              <div class="space-y-3">
                @for (v of produccionVentajas; track v.text) {
                  <div class="flex items-start gap-3 bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 hover:border-teal-800/50 transition-colors duration-200">
                    <lucide-icon [name]="v.icon" class="size-4 text-teal-400 mt-0.5 shrink-0"></lucide-icon>
                    <span class="text-sm text-zinc-300">{{ v.text }}</span>
                  </div>
                }
              </div>
              <p class="text-sm text-zinc-400 leading-relaxed mt-2">
                El LiDAR permite monitoreo no invasivo, reduciendo downtime y mejorando la eficiencia operativa en minas a cielo abierto y subterráneas.
              </p>
            </div>

            <div class="overflow-hidden rounded-xl border border-zinc-800 shadow-[0_0_40px_rgba(168,85,247,0.1)]">
              <img
                src="/img/servicios/temp/img10.png"
                alt="Producción minera con LiDAR"
                class="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ─── POSTPROCESAMIENTO ─── -->
      <section id="postprocesamiento" class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-cyan-400 mb-3">Postprocesamiento</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Procesos avanzados para garantizar la precisión de los datos LiDAR, incluyendo calibración y generación de modelos.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="overflow-hidden rounded-xl border border-zinc-800 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <img
                src="/img/servicios/temp/img22.png"
                alt="Postprocesamiento LiDAR"
                class="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div class="space-y-5">
              <h3 class="text-lg font-semibold text-teal-400">Pasos clave:</h3>
              <div class="space-y-3">
                @for (step of postSteps; track step.text) {
                  <div class="flex items-center gap-3 bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 hover:border-cyan-800/50 transition-colors duration-200">
                    <div class="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center shrink-0">
                      <lucide-icon [name]="step.icon" class="size-3.5 text-cyan-400"></lucide-icon>
                    </div>
                    <span class="text-sm text-zinc-300">{{ step.text }}</span>
                  </div>
                }
              </div>
              <p class="text-sm text-zinc-400 leading-relaxed mt-2">
                Estos procesos aseguran datos de alta fidelidad, listos para integración en software de modelado 3D y análisis geológico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── HERRAMIENTAS DIARIAS ─── -->
      <section id="herramientas" class="py-20 bg-zinc-950">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(20,184,166,0.04),transparent)] pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-cyan-400 mb-3">Herramientas para el Uso Diario en la Producción Minera</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Elimine impactos ambientales y optimice operaciones con LiDAR.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            @for (tool of dailyTools; track tool.title) {
              <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-cyan-800/50 hover:-translate-y-1 transition-all duration-300 group">
                <div class="h-56 overflow-hidden">
                  <img
                    [src]="tool.img"
                    [alt]="tool.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div class="p-5">
                  <div class="flex items-center gap-2 mb-2">
                    <lucide-icon [name]="tool.icon" class="size-4 text-teal-400 shrink-0"></lucide-icon>
                    <h3 class="text-sm font-semibold text-teal-400">{{ tool.title }}</h3>
                  </div>
                  <p class="text-xs text-zinc-400 leading-relaxed">{{ tool.desc }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ─── CTA / BROCHURE ─── -->
      <section id="contacto" class="py-20 bg-zinc-950 border-t border-zinc-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative overflow-hidden bg-gradient-to-br from-amber-950 via-zinc-900 to-orange-950 border border-zinc-800 rounded-xl p-8 lg:p-12">
            <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-600/10 blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-orange-600/10 blur-3xl pointer-events-none"></div>

            <div class="relative text-center mb-10">
              <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Conozca más sobre Nosotros</h2>
              <p class="text-zinc-400 max-w-xl mx-auto">
                Contacte a nuestros especialistas para una evaluación personalizada o descargue nuestros brochures.
              </p>
            </div>

            <div class="relative flex flex-col sm:flex-row items-center justify-center gap-10">
              <div class="flex flex-col gap-3 items-center">
                <button class="inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-zinc-100 text-zinc-900 rounded-lg font-semibold transition-all duration-200 active:scale-95 w-52 justify-center">
                  <lucide-icon name="mail" class="size-4"></lucide-icon>
                  Contacto
                </button>
                <button class="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-white hover:bg-white hover:text-zinc-900 text-white rounded-lg font-semibold transition-all duration-200 active:scale-95 w-52 justify-center">
                  <lucide-icon name="download" class="size-4"></lucide-icon>
                  Descargar Brochure
                </button>
                <div class="w-52 overflow-hidden rounded-xl border border-zinc-700 mt-1">
                  <img src="/img/brochure preview.webp" class="w-full object-cover" alt="Vista previa brochure" />
                </div>
              </div>

              <div class="hidden sm:block w-px h-48 bg-zinc-700"></div>

              <div class="flex flex-col items-center gap-3">
                <div class="flex items-center gap-2 text-sm text-zinc-400">
                  <lucide-icon name="scan" class="size-4 text-teal-400"></lucide-icon>
                  Escanear para más info
                </div>
                <div class="w-48 h-48 overflow-hidden rounded-xl border border-zinc-700">
                  <img src="/img/qr-code.webp" alt="Código QR" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `,
})
export class Lidar {

  readonly navLinks = [
    { href: '#intro',              label: 'Introducción',       icon: 'scan' },
    { href: '#exploracion',        label: 'Exploración',        icon: 'mountain' },
    { href: '#produccion',         label: 'Producción',         icon: 'activity' },
    { href: '#postprocesamiento',  label: 'Postprocesamiento',  icon: 'layers' },
    { href: '#herramientas',       label: 'Herramientas',       icon: 'bar-chart-3' },
  ];

  readonly exploracionBenefits = [
    { icon: 'leaf',         text: 'Cobertura rápida de grandes áreas sin remover vegetación' },
    { icon: 'scan',         text: 'Detección de estructuras geológicas subterráneas' },
    { icon: 'layers',       text: 'Generación de nubes de puntos para análisis detallado' },
    { icon: 'map',          text: 'Integración con GIS para modelado predictivo' },
  ];

  readonly produccionVentajas = [
    { icon: 'shield-check',  text: 'Supervisión en etapas críticas con informes por expertos' },
    { icon: 'bar-chart-3',   text: 'Actualización continua de volúmenes en pilas de materiales' },
    { icon: 'activity',      text: 'Medición de movimientos de tierras para verificación' },
    { icon: 'waves',         text: 'Optimización de diseños hidrológicos y vías de acceso' },
    { icon: 'scan',          text: 'Reducción de riesgos operativos mediante datos en tiempo real' },
  ];

  readonly postSteps = [
    { icon: 'activity',       text: 'Calibración — Ajuste de la trayectoria' },
    { icon: 'layers',         text: 'Nube de puntos — DTM — DSM — Curvas de nivel' },
    { icon: 'shield-check',   text: 'Verificación del levantamiento' },
    { icon: 'map',            text: 'Proyección a un geoide' },
  ];

  readonly dailyTools = [
    {
      icon: 'leaf',
      title: 'Elimine el impacto ambiental',
      img: '/img/servicios/temp/img511.png',
      desc: 'Impidiendo remover la vegetación para obtener información del terreno. DTM muy detallado para interpretación geológica.',
    },
    {
      icon: 'clock',
      title: 'Avance 10 horas de operación',
      img: '/img/servicios/temp/img512.png',
      desc: 'En campo en solo 20 minutos, para cubrir un área de hasta 60 ha. Dibujos CAD que incluyen infraestructura.',
    },
    {
      icon: 'shield-check',
      title: 'No exponga a riesgos a sus expertos',
      img: '/img/servicios/temp/img513.png',
      desc: 'Obtenga en un vuelo los resultados operando desde un punto seguro.',
    },
    {
      icon: 'waves',
      title: 'Curvas de nivel para óptimo diseño',
      img: '/img/servicios/temp/img514.png',
      desc: 'Hidrológico, vías y planificación de la producción minera.',
    },
    {
      icon: 'scan',
      title: 'Levantamiento interior 3× más rápido',
      img: '/img/servicios/temp/img515.png',
      desc: 'Que un levantamiento convencional estático. Genere un mapa 3D preciso dentro de la mina sin GPS en entornos oscuros y peligrosos.',
    },
    {
      icon: 'bar-chart-3',
      title: 'Medición de volúmenes de movimiento de tierras',
      img: '/img/servicios/temp/img516.png',
      desc: 'Para verificación y ajuste continuo a lo planeado. Actualización continua del volumen de material en las pilas.',
    },
  ];


  
}