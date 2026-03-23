import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  LucideIconData,
  Search,
  Flame,
  CloudLightning,
  Zap,
  Crosshair,
  Moon,
  Radio,
  Camera,
  Bot,
  Video,
  ScanEye,
  Check,
  ChevronDown,
  Phone,
  Download,
  ArrowRight,
} from 'lucide-angular';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceCard {
  icon:        LucideIconData;
  title:       string;
  description: string;
  items:       string[];
  gradient:    string;
}

interface Advantage {
  icon:   LucideIconData;
  iconBg: string;
  title:  string;
  desc:   string;
}

interface AdvantageBar {
  border: string;
  bg:     string;
  title:  string;
  desc:   string;
}

interface TechSpec {
  label: string;
  value: string;
}

interface TechFeature {
  title: string;
  desc:  string;
}

interface FaqItem {
  question: string;
  answer:   string;
}

// ─── Component ───────────────────────────────────────────────────────────────

@Component({
  selector: 'app-emergency-asist',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, LucideAngularModule],
  template: `
    <div class="bg-zinc-950 text-zinc-100 overflow-x-hidden">

      <!-- ════════════════════════════════════════════════════════
           HERO
      ════════════════════════════════════════════════════════ -->
      <section id="intro" class="relative min-h-screen flex items-center overflow-hidden">

        <!-- Gradient bg -->
        <div class="absolute inset-0 bg-gradient-to-br from-rose-950 via-orange-950/60 to-zinc-950"
             aria-hidden="true"></div>
        <!-- Ambient blobs -->
        <div class="pointer-events-none absolute -top-24 -left-24 size-[420px] rounded-full
                    bg-rose-600/20 blur-3xl" aria-hidden="true"></div>
        <div class="pointer-events-none absolute bottom-0 right-0 size-[300px] rounded-full
                    bg-orange-600/15 blur-3xl" aria-hidden="true"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28
                    grid lg:grid-cols-2 gap-12 items-center">

          <!-- Left: copy -->
          <div class="space-y-6">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold
                         bg-rose-600/20 text-rose-400 border border-rose-600/30 tracking-widest uppercase">
              Servicio Especializado
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-zinc-100">
              Asistencia en<br>
              <span class="text-rose-400">Emergencias</span>
            </h1>
            <p class="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
              Los drones han demostrado su efectividad en situaciones de emergencia y rescates.
              Su uso en ambientes de riesgo está en expansión debido a las ventajas que presentan
              frente a métodos tradicionales.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <a
                href="#contacto"
                class="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700
                       active:scale-95 text-white text-sm font-semibold rounded-lg
                       transition-all duration-200 shadow-md"
              >
                <lucide-icon [img]="Phone" class="size-4" aria-hidden="true" />
                Solicitar Servicio
              </a>
              <a
                href="#servicios"
                class="inline-flex items-center gap-2 px-6 py-3
                       border-2 border-zinc-100 text-zinc-100 text-sm font-semibold rounded-lg
                       hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                Ver Servicios
                <lucide-icon [img]="ArrowRight" class="size-4" aria-hidden="true" />
              </a>
            </div>
            <!-- 24/7 badge -->
            <div class="flex items-center gap-3 pt-2">
              <div class="size-12 bg-rose-600 rounded-full flex items-center justify-center shrink-0">
                <span class="text-white text-xs font-extrabold leading-none">24/7</span>
              </div>
              <span class="text-sm text-zinc-300">Disponible las 24 horas para emergencias</span>
            </div>
          </div>

          <!-- Right: equipment cards -->
          <div class="grid grid-cols-2 gap-4">
            @for (eq of equipment; track eq.title) {
              <div class="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-xl p-5">
                <div class="size-9 rounded-lg bg-rose-600/20 flex items-center justify-center mb-3">
                  <lucide-icon [img]="eq.icon" class="size-5 text-rose-400" aria-hidden="true" />
                </div>
                <h3 class="text-sm font-bold text-zinc-100 mb-1">{{ eq.title }}</h3>
                <p class="text-xs text-zinc-400 leading-relaxed">{{ eq.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════
           STICKY NAV
      ════════════════════════════════════════════════════════ -->
      <nav class="sticky top-[9vh] z-40 bg-zinc-950/80 backdrop-blur-md border-b border-rose-500/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="hidden md:flex gap-8 py-4 text-sm font-medium text-zinc-400">
            @for (link of navLinks; track link.href) {
              <a [href]="link.href" class="hover:text-rose-400 transition-colors duration-200">
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      </nav>

      <!-- ════════════════════════════════════════════════════════
           SERVICIOS
      ════════════════════════════════════════════════════════ -->
      <section id="servicios" class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <span class="text-xs font-semibold tracking-widest uppercase text-rose-400">Cobertura</span>
            <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
              Nuestros Servicios de Emergencia
            </h2>
            <p class="mt-3 text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Utilizamos tecnología de vanguardia para brindar asistencia efectiva en situaciones críticas.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            @for (svc of serviceCards; track svc.title) {
              <div
                class="rounded-xl p-6 flex flex-col gap-4 border border-white/10
                       hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                [class]="svc.gradient"
              >
                <div class="size-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <lucide-icon [img]="svc.icon" class="size-7 text-white" aria-hidden="true" />
                </div>
                <h3 class="text-base font-bold text-white">{{ svc.title }}</h3>
                <p class="text-sm text-zinc-200 leading-relaxed">{{ svc.description }}</p>
                <ul class="space-y-1.5 mt-auto">
                  @for (item of svc.items; track item) {
                    <li class="flex items-center gap-2 text-xs text-zinc-300">
                      <lucide-icon [img]="Check" class="size-3.5 text-white/60 shrink-0" aria-hidden="true" />
                      {{ item }}
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════
           VENTAJAS
      ════════════════════════════════════════════════════════ -->
      <section id="ventajas" class="py-20 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <span class="text-xs font-semibold tracking-widest uppercase text-rose-400">Diferencial</span>
            <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
              ¿Por qué incorporar drones en emergencias?
            </h2>
          </div>
          <!-- 4-col icons -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            @for (adv of advantages; track adv.title) {
              <div class="flex flex-col items-center text-center p-6
                          bg-zinc-900 border border-zinc-800 rounded-xl
                          hover:border-rose-500/30 hover:shadow-md transition-all duration-200">
                <div
                  class="size-16 rounded-full flex items-center justify-center mb-4"
                  [class]="adv.iconBg"
                >
                  <lucide-icon [img]="adv.icon" class="size-7 text-white" aria-hidden="true" />
                </div>
                <h4 class="text-sm font-bold text-zinc-100 mb-2">{{ adv.title }}</h4>
                <p class="text-xs text-zinc-400 leading-relaxed">{{ adv.desc }}</p>
              </div>
            }
          </div>
          <!-- 3-col bar cards -->
          <div class="grid md:grid-cols-3 gap-6">
            @for (bar of advantageBars; track bar.title) {
              <div class="p-6 rounded-xl border-l-4" [class]="bar.border + ' ' + bar.bg">
                <h4 class="text-sm font-bold text-zinc-100 mb-2">{{ bar.title }}</h4>
                <p class="text-xs text-zinc-400 leading-relaxed">{{ bar.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════
           TECNOLOGÍA
      ════════════════════════════════════════════════════════ -->
      <section id="tecnologia" class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <span class="text-xs font-semibold tracking-widest uppercase text-rose-400">Equipamiento</span>
            <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
              DJI Matrice 300 RTK
            </h2>
          </div>
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Features list -->
            <div class="space-y-5">
              @for (feat of techFeatures; track feat.title) {
                <div class="flex items-start gap-4">
                  <div class="size-8 bg-rose-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <lucide-icon [img]="Check" class="size-4 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-zinc-100 mb-0.5">{{ feat.title }}</h4>
                    <p class="text-xs text-zinc-400 leading-relaxed">{{ feat.desc }}</p>
                  </div>
                </div>
              }
            </div>
            <!-- Specs card -->
            <div class="bg-zinc-950/60 backdrop-blur-sm border border-zinc-800 rounded-xl p-8">
              <div class="text-center mb-6">
                <div class="size-20 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <lucide-icon [img]="ScanEye" class="size-10 text-rose-400" aria-hidden="true" />
                </div>
                <h3 class="text-xl font-bold text-zinc-100 mb-2">Certificación ANAC</h3>
                <p class="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
                  Pilotos, drones y procedimientos registrados en la Administración Nacional de Aviación Civil.
                </p>
              </div>
              <div class="grid grid-cols-2 gap-3">
                @for (spec of techSpecs; track spec.label) {
                  <div class="bg-white/5 rounded-lg p-3 text-center">
                    <div class="text-sm font-bold text-zinc-100">{{ spec.value }}</div>
                    <div class="text-xs text-zinc-500 mt-0.5">{{ spec.label }}</div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════
           FAQ
      ════════════════════════════════════════════════════════ -->
      <section id="faq" class="py-20 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Image -->
            <div class="relative lg:sticky lg:top-28 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/img/faqimg.webp"
                alt="Drone en operación de emergencia"
                class="w-full h-72 lg:h-[60vh] object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent
                          pointer-events-none"></div>
            </div>
            <!-- Accordion -->
            <div>
              <span class="text-xs font-semibold tracking-widest uppercase text-rose-400">
                Preguntas frecuentes
              </span>
              <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-zinc-100 mb-8">FAQ</h2>
              <div class="space-y-3">
                @for (item of faqItems; track item.question; let i = $index) {
                  <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden
                               hover:border-zinc-700 transition-colors duration-200">
                    <button
                      class="w-full flex items-center justify-between gap-4
                             px-5 py-4 text-left text-sm font-semibold text-zinc-100
                             hover:text-zinc-50 active:scale-[0.99] transition-all duration-200"
                      (click)="toggleFaq(i)"
                      [attr.aria-expanded]="openFaq() === i"
                    >
                      <span>{{ item.question }}</span>
                      <lucide-icon
                        [img]="ChevronDown"
                        class="size-4 text-zinc-400 shrink-0 transition-transform duration-300"
                        [class.rotate-180]="openFaq() === i"
                        aria-hidden="true"
                      />
                    </button>
                    @if (openFaq() === i) {
                      <div class="px-5 pb-5 text-xs text-zinc-400 leading-relaxed
                                  border-t border-zinc-800 pt-4
                                  animate-in fade-in slide-in-from-top-1 duration-200">
                        {{ item.answer }}
                      </div>
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ════════════════════════════════════════════════════════
           CTA FINAL
      ════════════════════════════════════════════════════════ -->
      <section id="contacto" class="py-20 bg-zinc-900 border-t border-rose-500/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 rounded-xl p-10 text-center">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Conozca más sobre Nosotros
            </h2>
            <p class="text-base text-orange-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contacte a nuestros especialistas para una evaluación personalizada o descubra
              nuestros servicios en el brochure para descargar.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4 mb-10">
              <a
                routerLink="/contacto"
                class="inline-flex items-center gap-2 px-8 py-3
                       bg-white text-zinc-900 text-sm font-bold rounded-lg
                       hover:bg-zinc-100 active:scale-95 transition-all duration-200"
              >
                <lucide-icon [img]="Phone" class="size-4" aria-hidden="true" />
                Contacto
              </a>
              <a
                href="/img/brochure preview.webp"
                download
                class="inline-flex items-center gap-2 px-8 py-3
                       border-2 border-white text-white text-sm font-bold rounded-lg
                       hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                <lucide-icon [img]="Download" class="size-4" aria-hidden="true" />
                Descargar Brochure
              </a>
            </div>
            <div class="flex flex-wrap items-end justify-center gap-8">
              <img
                src="/img/brochure preview.webp"
                alt="Vista previa del brochure"
                class="w-48 rounded-lg shadow-xl object-cover"
              />
              <img
                src="/img/qr-code.webp"
                alt="Código QR"
                class="size-40 rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  `,
  styles: `
    :host { display: block; }
  `,
})
export class EmergencyAsist {

  // ── Icons ──────────────────────────────────────────────────────
  readonly Phone       = Phone;
  readonly ArrowRight  = ArrowRight;
  readonly Check       = Check;
  readonly ChevronDown = ChevronDown;
  readonly ScanEye     = ScanEye;
  readonly Download    = Download;

  // ── FAQ state ──────────────────────────────────────────────────
  readonly openFaq = signal<number | null>(null);

  toggleFaq(i: number): void {
    this.openFaq.update(cur => cur === i ? null : i);
  }

  // ── Nav ────────────────────────────────────────────────────────
  readonly navLinks = [
    { label: 'Inicio',     href: '#intro'      },
    { label: 'Servicios',  href: '#servicios'  },
    { label: 'Ventajas',   href: '#ventajas'   },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'FAQ',        href: '#faq'        },
  ];

  // ── Hero equipment ─────────────────────────────────────────────
  readonly equipment: { icon: LucideIconData; title: string; desc: string }[] = [
    { icon: Camera,  title: 'Matrice 300 RTK', desc: 'Equipo de alta precisión para búsqueda y rescate' },
    { icon: ScanEye, title: 'Cámara Térmica',  desc: 'Localización de personas con tecnología infrarroja' },
    { icon: Bot,     title: 'Seguimiento AI',  desc: 'Smart Track para objetivos en movimiento' },
    { icon: Video,   title: 'Tiempo Real',     desc: 'Coordenadas y video en directo' },
  ];

  // ── Service cards ──────────────────────────────────────────────
  readonly serviceCards: ServiceCard[] = [
    {
      icon:        Search,
      gradient:    'bg-gradient-to-br from-rose-700 to-rose-950',
      title:       'Búsqueda de Personas Desaparecidas',
      description: 'Utilizamos el VANT DJI Matrice 300 RTK con cámara térmica para localización rápida y precisa de personas desaparecidas.',
      items:       ['Localización con cámara térmica', 'Seguimiento inteligente (Smart Track)', 'Coordenadas en tiempo real', 'Acceso a zonas remotas'],
    },
    {
      icon:        Flame,
      gradient:    'bg-gradient-to-br from-orange-600 to-rose-900',
      title:       'Prevención y Control de Incendios',
      description: 'Vuelos perimetrales con información térmica georreferenciada para apoyo a bomberos y equipos de rescate.',
      items:       ['Monitoreo térmico en tiempo real', 'Mapeo de zonas de riesgo', 'Alerta de colapso de estructuras', 'Apoyo a equipos terrestres'],
    },
    {
      icon:        CloudLightning,
      gradient:    'bg-gradient-to-br from-zinc-700 to-zinc-900',
      title:       'Apoyo en Accidentes y Desastres',
      description: 'Respuesta rápida en desastres naturales con acceso inmediato a zonas remotas o de difícil acceso.',
      items:       ['Evaluación rápida de daños', 'Mapeo de zonas afectadas', 'Coordenadas GPS precisas', 'Video streaming en vivo'],
    },
  ];

  // ── Advantages ─────────────────────────────────────────────────
  readonly advantages: Advantage[] = [
    { icon: Zap,       iconBg: 'bg-rose-600',   title: 'Rapidez',        desc: 'Llegada más rápida que vehículos terrestres, incluso a lugares inaccesibles' },
    { icon: Crosshair, iconBg: 'bg-orange-600', title: 'Alta Precisión', desc: 'Localización exacta a través de sensores IR y RGB con coordenadas GPS' },
    { icon: Moon,      iconBg: 'bg-rose-700',   title: 'Visión Nocturna',desc: 'Mayor visibilidad durante la noche gracias a cámara térmica avanzada' },
    { icon: Radio,     iconBg: 'bg-zinc-600',   title: 'Tiempo Real',    desc: 'Monitoreo en vivo y comunicación directa con equipos de rescate' },
  ];

  readonly advantageBars: AdvantageBar[] = [
    { border: 'border-rose-500',   bg: 'bg-rose-950/40',   title: 'Adaptabilidad Total', desc: 'Capacidad de adaptación a distintas situaciones de emergencia y terrenos complejos' },
    { border: 'border-orange-500', bg: 'bg-orange-950/40', title: 'Acceso Remoto',       desc: 'Llegada a zonas remotas para búsqueda y rescate donde otros medios no pueden acceder' },
    { border: 'border-zinc-500',   bg: 'bg-zinc-800/40',   title: 'Apoyo Estratégico',   desc: 'Monitoreo completo dando apoyo sobre el terreno a servicios de emergencias' },
  ];

  // ── Tech ───────────────────────────────────────────────────────
  readonly techFeatures: TechFeature[] = [
    { title: 'Cámara Térmica Avanzada',           desc: 'Todo lo que tenga masa emite radiación infrarroja que capturamos con precisión' },
    { title: 'Seguimiento Inteligente (Smart Track)', desc: 'Detecta y sigue objetivos en movimiento a grandes distancias' },
    { title: 'Fusión de Sensores',                desc: 'Algoritmos avanzados calculan coordenadas GPS inmediatamente' },
    { title: 'Transmisión en Vivo',               desc: 'Video en directo para coordinación con equipos de emergencia' },
  ];

  readonly techSpecs: TechSpec[] = [
    { label: 'Alcance',       value: '10+ km'    },
    { label: 'Autonomía',     value: '55 min'    },
    { label: 'Precisión GPS', value: '±1 cm RTK' },
    { label: 'Resistencia',   value: 'IP45'      },
  ];

  // ── FAQ ────────────────────────────────────────────────────────
  readonly faqItems: FaqItem[] = [
    {
      question: '¿Qué tan rápido pueden llegar los drones en caso de emergencia?',
      answer:   'Los drones pueden llegar a una ubicación mucho más rápido que los vehículos terrestres, incluso a lugares inaccesibles. Una vez recibida la solicitud, nuestro equipo puede desplegar el drone en minutos, proporcionando cobertura aérea inmediata y transmisión de video en tiempo real a los equipos de emergencia en tierra.',
    },
    {
      question: '¿Cómo funciona la cámara térmica para localizar personas?',
      answer:   'Todo lo que tiene masa emite radiación infrarroja que puede ser capturada con nuestra cámara térmica. Esto permite detectar el calor corporal de personas incluso en condiciones de baja visibilidad, durante la noche, entre vegetación densa o en estructuras colapsadas. El sistema calcula inmediatamente las coordenadas GPS exactas del objetivo detectado.',
    },
    {
      question: '¿Pueden operar los drones durante la noche o en condiciones climáticas adversas?',
      answer:   'Sí, nuestros drones tienen mayor visibilidad durante la noche gracias a la cámara térmica avanzada. El DJI Matrice 300 RTK cuenta con certificación IP45 que le permite operar bajo lluvia moderada. En condiciones extremas evaluamos cada caso para garantizar la seguridad de la operación.',
    },
    {
      question: '¿Qué es el Smart Track y cómo ayuda en las emergencias?',
      answer:   'Smart Track es una función de seguimiento inteligente que permite detectar y seguir automáticamente a un objetivo en movimiento, incluso a grandes distancias. Esto es crucial cuando se localiza a una persona que está desplazándose, permitiendo comunicar su ubicación en tiempo real a los equipos de rescate terrestres sin perder el contacto visual.',
    },
    {
      question: '¿Están certificados para operar en situaciones de emergencia?',
      answer:   'Sí, nuestros pilotos, drones y procedimientos se encuentran registrados y certificados por la ANAC (Administración Nacional de Aviación Civil). Cumplimos con todas las normativas vigentes para operaciones profesionales de drones, especialmente en ambientes de riesgo y situaciones críticas.',
    },
    {
      question: '¿Cómo ayudan los drones en el control de incendios?',
      answer:   'Realizamos vuelos perimetrales enviando información térmica georreferenciada en tiempo real sobre el estado de diferentes zonas de riesgo. Las cámaras térmicas permiten identificar focos ocultos, monitorear la evolución del incendio y alertar sobre el riesgo de colapso de estructuras, proporcionando información vital para bomberos y equipos de rescate.',
    },
    {
      question: '¿Qué alcance y autonomía tienen los drones?',
      answer:   'El DJI Matrice 300 RTK tiene un alcance de más de 10 kilómetros y una autonomía de vuelo de hasta 55 minutos. Esto permite cubrir áreas extensas en una sola operación. Además, contamos con baterías adicionales para operaciones prolongadas que requieran múltiples vuelos consecutivos.',
    },
    {
      question: '¿Están disponibles 24 horas al día, 7 días a la semana?',
      answer:   'Sí, mantenemos disponibilidad 24/7 para situaciones de emergencia. Entendemos que las emergencias no tienen horario, por lo que nuestro equipo está preparado para responder en cualquier momento. Puede contactarnos al +54-388-407.5472 para despliegue inmediato en situaciones críticas.',
    },
  ];
}