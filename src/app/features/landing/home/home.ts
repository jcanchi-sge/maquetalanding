import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  ArrowRight,
  LogIn,
  Eye,
  Cpu,
  TrendingUp,
  Map,
  Layers,
  MapPin,
  BarChart2,
  Plane,
  CheckCircle2,
  ChevronDown,
  Globe,
  Satellite,
  TreePine,
  Factory,
  Mountain,
  ScanLine,
  Pickaxe,
  Plus,
} from 'lucide-angular';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  route: string;
}

interface OrbitalItem {
  icon: string;
  label: string;
  color: string;
  angle: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spin-slow-reverse {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-16px); }
    }
    @keyframes card-cycle {
      0%, 28% { opacity: 1; transform: scale(1); z-index: 10; }
      33%, 95% { opacity: 0; transform: scale(0.95); z-index: -1; }
      100% { opacity: 1; transform: scale(1); z-index: 10; }
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes slide-up {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse-ring {
      0%, 100% { box-shadow: 0 0 0 0 rgba(46,46,254,0.3); }
      50% { box-shadow: 0 0 0 12px rgba(46,46,254,0); }
    }

    .animate-spin-slow { animation: spin-slow 12s linear infinite; }
    .animate-spin-slow-reverse { animation: spin-slow-reverse 18s linear infinite; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 8s ease infinite;
    }
    .animate-slide-up { animation: slide-up 0.8s ease-out both; }
    .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.2s both; }
    .animate-slide-up-delay2 { animation: slide-up 0.8s ease-out 0.4s both; }
    .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }

    .card-0 { animation: card-cycle 9s ease-in-out 0s infinite; }
    .card-1 { animation: card-cycle 9s ease-in-out 3s infinite; }
    .card-2 { animation: card-cycle 9s ease-in-out 6s infinite; }

    .service-overlay {
      position: absolute;
      bottom: 0; left: 0;
      width: 100%; height: 0;
      overflow: hidden;
      transition: height 0.35s cubic-bezier(0.4,0,0.2,1);
      background-image: url('/img/backhome.webp');
      background-size: cover;
      background-position: center;
    }
    .group:hover .service-overlay { height: 100%; }

    .service-default-layer {
      transition: opacity 0.3s ease;
    }
    .group:hover .service-default-layer { opacity: 0; }

    .orbital-dot {
      position: absolute;
      top: 50%; left: 50%;
      width: 48px; height: 48px;
      border-radius: 9999px;
      display: flex; align-items: center; justify-content: center;
      pointer-events: all;
    }
  `,
  template: `
    <div class="bg-slate-50 text-slate-800 antialiased overflow-x-hidden">

      <!-- ============ HERO ============ -->
      <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">

        <!-- BG gif -->
        <div class="absolute inset-0 z-0">
          <img src="/assets/gif/main.gif" alt="Background Tech"
               class="w-full h-full object-cover opacity-40" />
          <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>

        <!-- grid overlay -->
        <div class="absolute inset-0 z-1 pointer-events-none"
             style="background-image: linear-gradient(rgba(46,46,254,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,46,254,0.06) 1px, transparent 1px); background-size: 50px 50px;">
        </div>

        <div class="relative z-10 container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">

          <!-- Left -->
          <div class="text-center lg:text-left space-y-8">
            <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <img src="/favicon.ico" alt="logo" class="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 animate-float" />
              <div class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center sm:text-left">
                <span>Soluciones</span><br />
                <span class="text-red-600">Geo</span><span class="text-blue-500">Espaciales</span>
              </div>
            </div>

            <p class="animate-slide-up-delay text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Integramos drones, satélites e inteligencia artificial para ofrecer soluciones de ingeniería de precisión.
              Desde la planificación hasta el producto final.
            </p>

            <div class="animate-slide-up-delay2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                class="group bg-red-800 hover:bg-red-700 active:scale-95 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-800/30">
                Explorar Servicios
                <lucide-icon name="arrow-right" [size]="20"
                  class="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                class="active:scale-95 bg-transparent border border-slate-600 text-white hover:bg-slate-800 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2">
                <lucide-icon name="log-in" [size]="20" />
                Intranet
              </button>
            </div>
          </div>

          <!-- Right: orbital -->
          <div class="w-full flex justify-center items-center relative py-10 lg:py-0">
            <div class="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px] flex justify-center items-center">

              <!-- Rings -->
              <div class="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow"></div>
              <div class="absolute inset-8 sm:inset-12 border border-dashed border-cyan-500/25 rounded-full animate-spin-slow-reverse"></div>
              <div class="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl"></div>

              <!-- Orbital items using inline style transform -->
              @for (item of orbitalItems; track item.label) {
                <div class="absolute top-1/2 left-1/2 pointer-events-none"
                     [style.transform]="getOrbitalTransform(item.angle)">
                  <div class="flex flex-col items-center gap-1.5 pointer-events-all cursor-default select-none"
                       [style.transform]="getCounterTransform(item.angle)">
                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 border rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse-ring"
                         [class]="'border-' + item.color + '-500/50 text-' + item.color + '-400 shadow-' + item.color + '-500/20'">
                      <lucide-icon [name]="item.icon" [size]="18" />
                    </div>
                    <span class="text-[10px] sm:text-xs font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-700 whitespace-nowrap">
                      {{ item.label }}
                    </span>
                  </div>
                </div>
              }

              <!-- Center tech cards -->
              <div class="absolute inset-0 flex items-center justify-center z-20">
                <div class="relative w-56 sm:w-64 h-40 sm:h-44">
                  @for (card of techCards; track card.title; let i = $index) {
                    <div class="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-center transition-all duration-700"
                         [class]="'card-' + i">
                      <div class="flex items-center gap-3 mb-3 border-b border-white/10 pb-3">
                        <div class="p-2 rounded-lg shadow-lg" [class]="card.iconBg">
                          <lucide-icon [name]="card.icon" [size]="16" class="text-white" />
                        </div>
                        <div>
                          <p class="text-[10px] uppercase tracking-wider" [class]="card.labelColor">{{ card.category }}</p>
                          <p class="text-sm font-bold text-white">{{ card.title }}</p>
                        </div>
                      </div>
                      <div class="space-y-2">
                        @for (stat of card.stats; track stat.key) {
                          <div class="flex justify-between text-xs text-slate-300">
                            <span>{{ stat.key }}</span>
                            <span class="text-white font-mono">{{ stat.val }}</span>
                          </div>
                        }
                        <div class="w-full bg-slate-700 h-1 rounded-full mt-2 overflow-hidden">
                          <div class="h-full rounded-full animate-pulse" [class]="card.barColor" [style.width]="card.barWidth"></div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- scroll hint -->
        <button (click)="scrollDown()"
          class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-slate-400 hover:text-white animate-bounce transition-colors">
          <lucide-icon name="chevron-down" [size]="28" />
        </button>
      </section>

      <!-- ============ PILLARES ============ -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6 lg:px-12">
          <div class="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">

            @for (pillar of pillars; track pillar.title) {
              <div class="text-center px-4 py-4 group hover:-translate-y-2 transition-transform duration-300">
                <div class="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <lucide-icon [name]="pillar.icon" [size]="28" />
                </div>
                <h3 class="text-2xl font-bold mb-3 text-slate-900">{{ pillar.title }}</h3>
                <p class="text-slate-600 leading-relaxed">{{ pillar.desc }}</p>
              </div>
            }

          </div>
        </div>
      </section>

      <!-- ============ BIM ============ -->
      <section id="bim" class="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>

        <div class="container mx-auto px-6 lg:px-12 relative z-10">
          <div class="flex flex-col lg:flex-row items-center gap-16">

            <div class="w-full lg:w-1/2 space-y-6">
              <p class="text-blue-400 font-bold tracking-widest uppercase text-sm">Metodología Avanzada</p>
              <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
                BIM: Más que planos y maquetas
              </h2>
              <p class="text-slate-400 text-lg leading-relaxed">
                La metodología BIM (Building Information Modeling) centraliza toda la información de un proyecto en un modelo digital inteligente,
                permitiendo coordinar, analizar y gestionar en tiempo real.
              </p>

              <ul class="space-y-5 pt-2">
                @for (feat of bimFeatures; track feat.title) {
                  <li class="flex items-start gap-3">
                    <lucide-icon name="check-circle-2" [size]="20" class="text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <strong class="text-white block">{{ feat.title }}</strong>
                      <span class="text-slate-400 text-sm">{{ feat.desc }}</span>
                    </div>
                  </li>
                }
              </ul>
            </div>

            <div class="w-full lg:w-1/2 relative">
              <div class="relative rounded-2xl overflow-hidden group">
                <img src="/img/framebiminit.webp" alt="Modelo BIM 3D"
                     class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                <div class="absolute bottom-6 left-6 right-6 bg-slate-800/90 backdrop-blur border border-slate-600 p-4 rounded-lg">
                  <div class="flex justify-between items-center text-sm font-mono text-blue-300 mb-2">
                    <span>Modelo activo</span>
                    <span class="flex items-center gap-1.5">
                      <lucide-icon name="layers" [size]="14" />
                      Multidimensional
                    </span>
                  </div>
                  <div class="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500 w-2/3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ============ SERVICIOS ============ -->
      <section id="servicios" class="py-24 bg-slate-50">
        <div class="container mx-auto px-6 lg:px-12">

          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-4xl font-bold text-slate-900 mb-4">Nuestras Soluciones</h2>
            <p class="text-slate-600 text-lg">
              Desarrollamos áreas de trabajo específicas en función de las necesidades críticas de nuestros clientes.
            </p>
          </div>

          <div class="flex flex-wrap justify-center">
            @for (svc of services; track svc.id) {
              <div class="relative h-64 sm:h-72 lg:h-80 w-full sm:w-1/2 lg:w-1/3 group overflow-hidden">

                <!-- imagen fondo -->
                <img [src]="svc.imgSrc" [alt]="svc.imgAlt" class="w-full h-full object-cover" />

                <!-- capa default (titulo + "ver detalles") -->
                <div class="service-default-layer absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4">
                  <h3 class="text-xl font-bold text-white text-center">{{ svc.title }}</h3>
                  <span class="inline-flex items-center gap-1 text-white/80 font-semibold text-sm mt-2">
                    Ver detalles
                    <lucide-icon name="arrow-right" [size]="14" />
                  </span>
                </div>

                <!-- overlay hover (slide desde abajo) -->
                <div class="service-overlay flex flex-col items-center justify-center px-6 text-white">
                  <h4 class="font-bold text-2xl sm:text-3xl mt-2 uppercase text-center">{{ svc.title }}</h4>
                  <span class="text-center opacity-90 text-sm sm:text-base my-4 leading-relaxed">{{ svc.description }}</span>
                  <button
                    class="active:scale-95 bg-red-700 hover:bg-red-800 text-white border-none text-base px-6 py-2 rounded transition-colors duration-200 font-semibold">
                    Conoce más
                  </button>
                </div>

              </div>
            }
          </div>

        </div>
      </section>

      <!-- ============ CTA FOOTER ============ -->
      <section class="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none"
             style="background: linear-gradient(-45deg, #1e1e2e, #0f172a, #B40404 200%, #2E2EFE 200%); opacity: 0.6;"></div>
        <div class="absolute inset-0 pointer-events-none"
             style="background-image: linear-gradient(rgba(46,46,254,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(46,46,254,0.07) 1px, transparent 1px); background-size: 50px 50px;">
        </div>

        <div class="relative z-10 container mx-auto px-6 lg:px-12 text-center space-y-8">
          <h2 class="text-4xl lg:text-5xl font-bold">¿Listo para ver tu proyecto desde arriba?</h2>
          <p class="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Contactanos y descubrí cómo la tecnología geoespacial puede transformar tu industria.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              class="group active:scale-95 bg-red-700 hover:bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-red-700/30">
              Contactar ahora
              <lucide-icon name="arrow-right" [size]="20" class="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              class="active:scale-95 border border-slate-600 hover:border-slate-400 text-white hover:bg-slate-800 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200">
              Ver todos los servicios
            </button>
          </div>
        </div>
      </section>

    </div>
  `,
})
export class Home implements OnInit, OnDestroy {
  // ── Static Data ──────────────────────────────────────────────────
  readonly orbitalItems: OrbitalItem[] = [
    { icon: 'globe', label: 'Mapas', color: 'purple', angle: 0 },
    { icon: 'layers', label: 'Datos', color: 'cyan', angle: 72 },
    { icon: 'map-pin', label: 'Análisis', color: 'orange', angle: 144 },
    { icon: 'bar-chart-2', label: 'Reportes', color: 'green', angle: 216 },
    { icon: 'plane', label: 'Drones', color: 'pink', angle: 288 },
  ];

  getOrbitalTransform(angle: number): string {
    const rad = (angle * Math.PI) / 180;
    const dist = 200;
    const x = Math.sin(rad) * dist;
    const y = -Math.cos(rad) * dist;
    return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }

  getCounterTransform(_angle: number): string {
    return 'none';
  }

  readonly techCards = [
    {
      icon: 'layers',
      iconBg: 'bg-blue-600 shadow-blue-600/30',
      category: 'Tecnología',
      labelColor: 'text-blue-300',
      title: 'LIDAR & Foto',
      stats: [
        { key: 'Precisión', val: '< 1cm' },
        { key: 'Proceso', val: 'IA Cloud' },
      ],
      barColor: 'bg-blue-500',
      barWidth: '75%',
    },
    {
      icon: 'cpu',
      iconBg: 'bg-purple-600 shadow-purple-600/30',
      category: 'Metodología',
      labelColor: 'text-purple-300',
      title: 'Sistema BIM',
      stats: [
        { key: 'Dimensiones', val: '1D a 7D' },
        { key: 'Colaboración', val: 'Tiempo Real' },
      ],
      barColor: 'bg-purple-500',
      barWidth: '100%',
    },
    {
      icon: 'scan-line',
      iconBg: 'bg-orange-600 shadow-orange-600/30',
      category: 'Industria',
      labelColor: 'text-orange-300',
      title: 'Inspecciones',
      stats: [
        { key: 'Tipo', val: 'No Invasiva' },
        { key: 'Sensor', val: 'Térmico/RGB' },
      ],
      barColor: 'bg-orange-500',
      barWidth: '50%',
    },
  ];

  readonly pillars = [
    {
      icon: 'eye',
      title: 'Miramos distinto',
      desc: 'Utilizamos sensores remotos y perspectivas aéreas para capturar datos invisibles al ojo humano.',
    },
    {
      icon: 'cpu',
      title: 'Encontramos respuestas',
      desc: 'Procesamos Big Data con software especializado para entregar diagnósticos precisos.',
    },
    {
      icon: 'trending-up',
      title: 'Creamos valor',
      desc: 'Transformamos información compleja en modelos BIM y reportes accionables para tu negocio.',
    },
  ];

  readonly bimFeatures = [
    {
      title: 'Gestión del Ciclo de Vida',
      desc: 'Acompañamos el proyecto desde el diseño conceptual hasta el mantenimiento post-construcción.',
    },
    {
      title: 'Interoperabilidad & Colaboración',
      desc: 'Un tablero centralizado donde todos los actores del proyecto interactúan en tiempo real.',
    },
    {
      title: 'Estándares Internacionales',
      desc: 'Alineados con la norma IRAM-ISO 19650-1 para calidad asegurada.',
    },
  ];

  readonly services: ServiceCard[] = [
    {
      id: 'agricola',
      title: 'Monitoreo Agrícola',
      description:
        'Vuelos de bajo costo para evaluar grandes superficies con análisis multiespectral e índices de vegetación.',
      imgSrc: '/img/agricola.webp',
      imgAlt: 'monitoreo',
      route: '/servicios/monitoreo-agricola',
    },
    {
      id: 'inspecciones',
      title: 'Inspecciones Aéreas no-invasivas',
      description:
        'Evaluaciones sin interrupciones en la operación: daños estructurales, termografía y ductos.',
      imgSrc: '/img/fabrica.webp',
      imgAlt: 'inspecciones',
      route: '/servicios/inspecciones-industriales-aereas-no-invasivas',
    },
    {
      id: 'topografia',
      title: 'Topografía y Catastro',
      description:
        'Relevamientos rápidos y precisos del terreno con información geoespacial de calidad para decisiones efectivas.',
      imgSrc: '/img/cartografia.webp',
      imgAlt: 'topografia',
      route: '/servicios/topografia-y-catastro',
    },
    {
      id: 'fotogrametria',
      title: 'Fotogrametría y Modelos 3D',
      description:
        'Procesamiento de imágenes aéreas y terrestres para mediciones precisas y construcción de modelos tridimensionales.',
      imgSrc: '/img/3dscan.webp',
      imgAlt: 'fotogrametria',
      route: '/servicios/fotogrametria-y-modelos-3d',
    },
    {
      id: 'mineria',
      title: 'Minería Magnetometría',
      description:
        'Escaneo geofísico de alta precisión en áreas de difícil topografía, garantizando seguridad y eficiencia en prospección.',
      imgSrc: '/img/mineria.webp',
      imgAlt: 'mineria',
      route: '/servicios/magnetometria',
    },
    {
      id: 'mas',
      title: 'Más Servicios',
      description: 'Echa un vistazo a todo lo que ofrecemos en Soluciones Geoespaciales.',
      imgSrc: '/img/satelite.webp',
      imgAlt: 'mas servicios',
      route: '/servicios',
    },
  ];

  // ── Icons register (for template reference if needed) ────────────
  protected readonly icons = {
    ArrowRight,
    LogIn,
    Eye,
    Cpu,
    TrendingUp,
    Map,
    Layers,
    MapPin,
    BarChart2,
    Plane,
    CheckCircle2,
    ChevronDown,
    Globe,
    Satellite,
    TreePine,
    Factory,
    Mountain,
    ScanLine,
    Pickaxe,
    Plus,
  };
  // ── Scroll helper ────────────────────────────────────────────────
  scrollDown(): void {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}