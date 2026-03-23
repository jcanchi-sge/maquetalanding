import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  LucideIconData,
  TriangleAlert,
  Building2,
  Sun,
  ScanLine,
  Sprout,
  Gem,
  Wind,
  ArrowRight,
  ChevronRight,
} from 'lucide-angular';
import { Footer } from '../../../shared/footer/footer';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Service {
  icon: LucideIconData;
  svg?: string; // optional path to custom SVG icon (overrides Lucide icon if present)
  accent: 'indigo' | 'cyan' | 'emerald' | 'amber' | 'rose' | 'violet' | 'sky';
  title: string;
  description: string;
  route: string;
  tag: string;
}

// ─── Accent helper maps ───────────────────────────────────────────────────────
// Tailwind v4 needs full class strings — no dynamic interpolation

const ICON_BG: Record<string, string> = {
  indigo: 'bg-indigo-600/15 group-hover:bg-indigo-600/25',
  cyan: 'bg-cyan-500/15   group-hover:bg-cyan-500/25',
  emerald: 'bg-emerald-500/15 group-hover:bg-emerald-500/25',
  amber: 'bg-amber-500/15  group-hover:bg-amber-500/25',
  rose: 'bg-rose-500/15   group-hover:bg-rose-500/25',
  violet: 'bg-violet-500/15 group-hover:bg-violet-500/25',
  sky: 'bg-sky-500/15    group-hover:bg-sky-500/25',
};

const ICON_COLOR: Record<string, string> = {
  indigo: 'text-indigo-400',
  cyan: 'text-cyan-400',
  emerald: 'text-emerald-400',
  amber: 'text-amber-400',
  rose: 'text-rose-400',
  violet: 'text-violet-400',
  sky: 'text-sky-400',
};

const BADGE: Record<string, string> = {
  indigo: 'bg-indigo-600/15  text-indigo-400  border-indigo-600/25',
  cyan: 'bg-cyan-500/15    text-cyan-400    border-cyan-500/25',
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  amber: 'bg-amber-500/15   text-amber-400   border-amber-500/25',
  rose: 'bg-rose-500/15    text-rose-400    border-rose-500/25',
  violet: 'bg-violet-500/15  text-violet-400  border-violet-500/25',
  sky: 'bg-sky-500/15     text-sky-400     border-sky-500/25',
};

const ARROW: Record<string, string> = {
  indigo: 'text-indigo-400  group-hover:text-indigo-300',
  cyan: 'text-cyan-400    group-hover:text-cyan-300',
  emerald: 'text-emerald-400 group-hover:text-emerald-300',
  amber: 'text-amber-400   group-hover:text-amber-300',
  rose: 'text-rose-400    group-hover:text-rose-300',
  violet: 'text-violet-400  group-hover:text-violet-300',
  sky: 'text-sky-400     group-hover:text-sky-300',
};

// ─── Component ───────────────────────────────────────────────────────────────

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LucideAngularModule, Footer],
  template: `
    <!-- ══════════════════════════════════════════════════════════
         HERO — animated ambient blobs
    ══════════════════════════════════════════════════════════ -->
    <section class="pt-[10vh] relative min-h-[70vh] flex items-center overflow-hidden bg-zinc-950">

      <!-- Animated ambient blobs (preserve original effect) -->
      <div class="blob blob-1" aria-hidden="true"></div>
      <div class="blob blob-2" aria-hidden="true"></div>
      <div class="blob blob-3" aria-hidden="true"></div>
      <div class="blob blob-4" aria-hidden="true"></div>

      <!-- Video right half -->
      <div class="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none">
        <video
          autoplay muted loop playsinline
          class="h-full w-full object-cover opacity-30 lg:opacity-50"
          aria-hidden="true"
        >
          <source src="/videos/videoservice.mp4" type="video/mp4">
        </video>
        <!-- gradient mask so text stays readable -->
        <div class="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
        <div class="max-w-2xl">

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-zinc-100">
            Servicios
          </h1>

          <p class="mt-5 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
            Explora todos nuestros servicios geoespaciales y descubrí cómo podemos ayudarte a
            optimizar la toma de decisiones, mejorar la planificación y aprovechar al máximo
            los datos espaciales.
          </p>

          <a
            href="#servicios-grid"
            class="mt-8 inline-flex items-center gap-2 px-6 py-3
                   border-2 border-zinc-100 text-zinc-100 text-sm font-semibold
                   rounded-lg hover:bg-white/10 active:scale-95
                   transition-all duration-200"
          >
            Explorar todos los servicios
            <lucide-icon [img]="ChevronRight" class="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         SERVICES GRID
    ══════════════════════════════════════════════════════════ -->
    <section id="servicios-grid" class="py-20 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Section header -->
        <div class="text-center mb-14">
          <span class="text-xs font-semibold tracking-widest uppercase text-indigo-400">
            Catálogo
          </span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            Todos los servicios
          </h2>
          <p class="mt-3 text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Desde mapeo hasta análisis avanzado, estamos comprometidos con la excelencia
            y la precisión en cada proyecto.
          </p>
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (svc of services; track svc.route) {
            <a
              [routerLink]="['/servicios', svc.route]"
              class="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6
                     flex flex-col gap-5
                     hover:border-zinc-700 hover:shadow-md
                     active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <!-- Top row: icon + badge -->
              <div class="flex items-start justify-between">
                <div
                  class="flex items-center justify-center"
                  
                >
                @if(svc.svg) {

                  <div 
  class="size-18 bg-gray-300 transition-colors duration-200"
  [style.mask-image]="'url(' + svc.svg + ')'"
  [style.mask-size]="'contain'"
  [style.mask-repeat]="'no-repeat'">
</div>
                }
                @else {
                  <lucide-icon
                    [img]="svc.icon"
                    class="size-6 transition-colors duration-200"
                    [class]="iconColor(svc.accent)"
                    aria-hidden="true"
                  />
                }
                </div>
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-medium border transition-colors duration-200"
                  [class]="badge(svc.accent)"
                >
                  {{ svc.tag }}
                </span>
              </div>

              <!-- Text -->
              <div class="flex flex-col gap-2 flex-1">
                <h3 class="text-sm font-bold text-zinc-100 leading-snug">
                  {{ svc.title }}
                </h3>
                <p class="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {{ svc.description }}
                </p>
              </div>

              <!-- CTA row -->
              <div
                class="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
                [class]="arrow(svc.accent)"
              >
                Ver servicio
                <lucide-icon
                  [img]="ArrowRight"
                  class="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>

              <!-- Subtle top-border glow on hover (pseudo via ring) -->
              <div
                class="pointer-events-none absolute inset-0 rounded-xl opacity-0
                       group-hover:opacity-100 transition-opacity duration-300
                       ring-1 ring-inset ring-white/5"
                aria-hidden="true"
              ></div>
            </a>
          }
        </div>
      </div>
    </section>

    <app-footer></app-footer>

    <!-- ══════════════════════════════════════════════════════════
         ROUTER OUTLET (child routes)
    ══════════════════════════════════════════════════════════ -->
    <router-outlet />
  `,
  styles: `
    :host { display: block; }

    /* ── Animated ambient blobs (replaces original .circle CSS) ── */
    .blob {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      filter: blur(110px);
      z-index: 1;
      animation-duration: 15s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .blob-1 {
      background: rgba(79, 70, 229, 0.45); /* indigo-600 */
      top: -100px; left: -100px;
      animation-name: blob1;
    }
    .blob-2 {
      background: rgba(6, 182, 212, 0.35); /* cyan-500 */
      top: 50%; right: -150px;
      animation-name: blob2;
    }
    .blob-3 {
      background: rgba(99, 102, 241, 0.3); /* indigo-500 */
      bottom: -150px; left: 25%;
      animation-name: blob3;
    }
    .blob-4 {
      background: rgba(16, 185, 129, 0.2); /* emerald-500 */
      top: 25%; left: 35%;
      animation-name: blob4;
    }

    @keyframes blob1 {
      0%,100% { transform: translate(0,0)   scale(1);   }
      25%      { transform: translate(200px,150px) scale(1.4); }
      50%      { transform: translate(100px,250px) scale(0.8); }
      75%      { transform: translate(300px,100px) scale(1.2); }
    }
    @keyframes blob2 {
      0%,100% { transform: translate(0,0)      scale(1.2); }
      25%      { transform: translate(-200px,-100px) scale(0.8); }
      50%      { transform: translate(-300px,100px)  scale(1.4); }
      75%      { transform: translate(-150px,-200px) scale(1);   }
    }
    @keyframes blob3 {
      0%,100% { transform: translate(0,0)      scale(0.8); }
      25%      { transform: translate(250px,-200px) scale(1.2); }
      50%      { transform: translate(-200px,-250px) scale(1);  }
      75%      { transform: translate(150px,-100px)  scale(1.4); }
    }
    @keyframes blob4 {
      0%,100% { transform: translate(0,0)      scale(1);   }
      25%      { transform: translate(-200px,200px) scale(1.2); }
      50%      { transform: translate(200px,-150px) scale(0.9); }
      75%      { transform: translate(-150px,-200px) scale(1.3); }
    }

    @media (max-width: 768px) {
      .blob { width: 200px; height: 200px; filter: blur(80px); }
    }
  `,
})
export class Services {

  // ── Icons exposed to template ─────────────────────────────────
  readonly ChevronRight = ChevronRight;
  readonly ArrowRight = ArrowRight;

  // ── Accent helper methods (full class strings for Tailwind v4) ─
  iconBg(a: string): string { return ICON_BG[a] ?? ICON_BG['indigo']; }
  iconColor(a: string): string { return ICON_COLOR[a] ?? ICON_COLOR['indigo']; }
  badge(a: string): string { return BADGE[a] ?? BADGE['indigo']; }
  arrow(a: string): string { return ARROW[a] ?? ARROW['indigo']; }

  // ── Services data (routes match app.routes.ts exactly) ────────
  readonly services: Service[] = [
    {
      icon: TriangleAlert,
      svg: '/serviceslogos/emergency.svg',
      accent: 'rose',
      title: 'Asistencia en Emergencias',
      description: 'Soporte inmediato mediante drones y geotecnología en situaciones críticas: aludes, inundaciones, incendios y desastres naturales.',
      route: 'asistencia-en-emergencias',
      tag: 'Emergencias',
    },
    {
      icon: Building2,
      svg: '/serviceslogos/bim.svg',
      accent: 'cyan',
      title: 'BIM — Building Information Modeling',
      description: 'Integración de relevamientos geoespaciales al flujo BIM: nube de puntos georeferenciada, topografía y morphología del terreno para gestión de obras.',
      route: 'bim-building-information-modeling',
      tag: 'Construcción',
    },
    {
      icon: Sun,
      svg: '/serviceslogos/planta-solar.svg',
      accent: 'amber',
      title: 'Inspecciones Térmicas de Plantas Solares',
      description: 'Detección de fallas y pérdidas de eficiencia en paneles fotovoltaicos mediante cámaras termográficas montadas en VANTs.',
      route: 'inspecciones-termicas-de-plantas-solares',
      tag: 'Energía',
    },
    {
      icon: ScanLine,
      svg: '/serviceslogos/lidar.svg',
      accent: 'indigo',
      title: 'Relevamiento LiDAR',
      description: 'Captura de nubes de puntos de alta densidad con sensores LiDAR para modelos de elevación, catastro y análisis de infraestructura.',
      route: 'relevamiento-lidar',
      tag: 'Mapeo',
    },
    {
      icon: Sprout,
      svg: '/serviceslogos/monitoreo-agricola.svg',
      accent: 'emerald',
      title: 'Monitoreo Agrícola',
      description: 'Análisis multiespectral de cultivos para determinar índices de vegetación (NDVI), detección de estrés hídrico y planificación de siembra.',
      route: 'monitoreo-agricola',
      tag: 'Agricultura',
    },
    {
      icon: Gem,
      svg: '/serviceslogos/monitoreo-minero.svg',
      accent: 'violet',
      title: 'Monitoreo en Minería',
      description: 'Relevamiento y control de operaciones mineras: cálculo de volúmenes, seguimiento de taludes y documentación de frentes de explotación.',
      route: 'monitoreo-en-mineria',
      tag: 'Minería',
    },
    {
      icon: Wind,
      svg: '/serviceslogos/planta-eolica.svg',
      accent: 'sky',
      title: 'Inspecciones de Plantas Eólicas',
      description: 'Inspección visual y termográfica de aerogeneradores con drones: detección de fisuras, erosión de palas y anomalías estructurales.',
      route: 'inspecciones-de-platas-eolicas',
      tag: 'Energía',
    },
  ];
}