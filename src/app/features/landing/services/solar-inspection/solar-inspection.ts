import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  Zap,
  Shield,
  Network,
  TrendingDown,
  Leaf,
  Timer,
  Thermometer,
  ScanLine,
  Cpu,
  Map,
  FileText,
  MapPin,
  Database,
  Globe,
  CheckCircle,
  ChevronDown,
  Mail,
  Download,
  Scan,
  FlameKindling,
  AlertTriangle,
  Wrench,
} from 'lucide-angular';

@Component({
  selector: 'app-solar-inspection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  styles: `
    @keyframes gradient-shift {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .hero-gradient {
      background: linear-gradient(-45deg, #ec0000, #c30000, #d69e2e, #f56500, #2b6cb0, #188694);
      background-size: 400% 400%;
      animation: gradient-shift 30s ease infinite;
    }
    details[open] summary .faq-arrow { transform: rotate(180deg); }
  `,
  template: `
    <div class="bg-zinc-950 text-zinc-100 overflow-x-hidden">

      <!-- ─── HERO ─── -->
      <section id="intro" class="hero-gradient relative min-h-screen flex items-center pt-20 pb-16">
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <!-- Text -->
          <div class="space-y-6">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-700/50 text-amber-400 text-xs font-medium tracking-wider uppercase">
              <lucide-icon name="thermometer" class="size-3.5"></lucide-icon>
              Inspección Térmica con Drones
            </span>
            <h1 class="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Inspecciones Térmicas de
              <span class="text-amber-400">Plantas Solares</span>
            </h1>
            <p class="text-lg text-zinc-200 max-w-xl leading-relaxed">
              Revolucionamos el mantenimiento de plantas fotovoltaicas con tecnología de drones avanzada y análisis térmico de precisión. Detectamos fallas antes de que se conviertan en problemas costosos.
            </p>
            <div class="flex items-start gap-3 bg-black/40 border-l-4 border-amber-500 rounded-lg p-4">
              <lucide-icon name="zap" class="size-5 text-amber-400 mt-0.5 shrink-0"></lucide-icon>
              <p class="text-sm text-white">
                <strong class="text-amber-400">Detectamos más de 15 tipos de fallas</strong> usando inteligencia artificial y análisis radiométrico avanzado.
              </p>
            </div>
            <div class="flex flex-wrap gap-3 pt-2">
              <a href="#tecnologia"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold rounded-lg transition-all duration-200 active:scale-95">
                <lucide-icon name="scan-line" class="size-4"></lucide-icon>
                Conocer Tecnología
              </a>
              <a href="#beneficios"
                class="inline-flex items-center gap-2 px-5 py-2.5 border border-amber-500 hover:bg-amber-500 hover:text-zinc-900 text-white font-semibold rounded-lg transition-all duration-200 active:scale-95">
                Ver Beneficios
                <lucide-icon name="chevron-down" class="size-4"></lucide-icon>
              </a>
            </div>
          </div>

          <!-- Image grid -->
          <div class="grid grid-cols-2 gap-3">
            @for (card of heroCards; track card.label) {
              <div class="relative h-48 rounded-xl overflow-hidden border border-zinc-800/60 shadow-md group"
                [style.background-image]="'url(' + card.img + ')'"
                style="background-size: cover; background-position: center;">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                <div class="absolute bottom-3 left-3 z-10">
                  <span class="text-sm font-bold text-white">{{ card.label }}</span>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ─── STICKY NAV ─── -->
      <nav class="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-1 py-3 overflow-x-auto">
            @for (link of navLinks; track link.href) {
              <a [href]="link.href"
                class="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-amber-400 hover:bg-zinc-800/60 transition-all duration-200">
                <lucide-icon [name]="link.icon" class="size-4"></lucide-icon>
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      </nav>

      <!-- ─── TECNOLOGÍA ─── -->
      <section id="tecnologia" class="py-20 bg-zinc-900 relative overflow-hidden">
        <!-- Parallax bg hint -->
        <div class="absolute inset-0 bg-[url('/img/servicios/temp/DJImatice.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-zinc-900/90 pointer-events-none"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Tecnología de Vanguardia</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Utilizamos drones DJI Matrice 300 RTK equipados con cámaras térmicas de alta precisión para inspecciones no invasivas.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Tech cards -->
            <div class="space-y-4">
              @for (tech of techCards; track tech.title) {
                <div class="flex items-center gap-6 bg-zinc-950/60 backdrop-blur border border-zinc-800 rounded-xl p-5 hover:border-amber-800/50 hover:-translate-y-0.5 transition-all duration-300">
                  <div class="w-14 h-14 shrink-0 bg-amber-950/40 border border-amber-800/40 rounded-xl flex items-center justify-center">
                    <lucide-icon [name]="tech.icon" class="size-6 text-amber-400"></lucide-icon>
                  </div>
                  <div>
                    <h3 class="text-base font-semibold text-white mb-1">{{ tech.title }}</h3>
                    <p class="text-sm text-zinc-400 leading-snug">{{ tech.desc }}</p>
                  </div>
                </div>
              }
            </div>

            <!-- Specs table -->
            <div class="bg-zinc-950/60 backdrop-blur border border-zinc-800 rounded-xl p-6">
              <h3 class="text-lg font-semibold text-white mb-5 text-center">Especificaciones Técnicas</h3>
              <div class="space-y-3">
                @for (spec of techSpecs; track spec.label) {
                  <div class="flex justify-between items-center border-b border-zinc-800 pb-3 last:border-0 last:pb-0">
                    <span class="text-sm text-zinc-400 font-medium">{{ spec.label }}</span>
                    <span class="text-sm text-amber-400 font-semibold">{{ spec.value }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── BENEFICIOS ─── -->
      <section id="beneficios" class="py-20 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Beneficios Revolucionarios</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Transforme su operación solar con inspecciones inteligentes que maximizan la eficiencia y minimizan los costos.
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            @for (b of benefits; track b.title) {
              <div class="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  [class]="b.iconBg">
                  <lucide-icon [name]="b.icon" class="size-5 text-white"></lucide-icon>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-white mb-2">{{ b.title }}</h3>
                  <p class="text-sm text-zinc-400 leading-snug">{{ b.desc }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ─── PROCESO ─── -->
      <section id="proceso" class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Proceso de Inspección Inteligente</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Metodología probada que combina tecnología avanzada con análisis de inteligencia artificial.
            </p>
          </div>

          <div class="space-y-8">
            @for (step of processSteps; track step.number) {
              <div class="grid lg:grid-cols-2 gap-8 items-center" [class.lg:flex-row-reverse]="step.reverse">
                <!-- Text card -->
                <div [class]="step.reverse ? 'lg:order-2' : ''" class="bg-zinc-950/80 border border-zinc-800 rounded-xl p-8">
                  <div class="flex items-center gap-4 mb-5">
                    <div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                      [class]="step.numBg">
                      {{ step.number }}
                    </div>
                    <h3 class="text-xl font-bold text-white">{{ step.title }}</h3>
                  </div>
                  <p class="text-zinc-400 text-sm mb-4 leading-relaxed">{{ step.desc }}</p>
                  <ul class="space-y-2">
                    @for (item of step.items; track item) {
                      <li class="flex items-center gap-2 text-sm text-zinc-400">
                        <lucide-icon name="check-circle" class="size-4 text-amber-500 shrink-0"></lucide-icon>
                        {{ item }}
                      </li>
                    }
                  </ul>
                </div>
                <!-- Image card -->
                <div [class]="step.reverse ? 'lg:order-1' : ''"
                  class="relative h-64 rounded-xl overflow-hidden border border-zinc-800"
                  [style.background-image]="'url(' + step.img + ')'"
                  style="background-size: cover; background-position: center;">
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div class="absolute bottom-4 left-4 z-10">
                    <span class="text-sm font-bold text-white">{{ step.imgLabel }}</span>
                    <p class="text-xs text-zinc-300">{{ step.imgSub }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ─── RESULTADOS / ENTREGABLES ─── -->
      <section id="resultados" class="py-20 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Entregables Completos</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Reportes detallados y análisis accionable para optimizar su planta solar.
            </p>
          </div>

          <!-- Deliverable cards -->
          <div class="grid lg:grid-cols-3 gap-5 mb-10">
            @for (d of deliverables; track d.title) {
              <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-amber-800/40 hover:-translate-y-1 transition-all duration-300">
                <div class="h-44 overflow-hidden">
                  <img [src]="d.img" [alt]="d.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="p-6">
                  <h3 class="text-base font-semibold text-white mb-2">{{ d.title }}</h3>
                  <p class="text-sm text-zinc-400 leading-snug">{{ d.desc }}</p>
                </div>
              </div>
            }
          </div>

          <!-- Fault types -->
          <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-white mb-5 text-center">Tipos de Fallas Detectadas</h3>
            <div class="grid md:grid-cols-3 gap-4">
              @for (fault of faultTypes; track fault.label) {
                <div class="rounded-xl p-4 border" [class]="fault.style">
                  <div class="flex items-center gap-2 mb-3">
                    <lucide-icon [name]="fault.icon" class="size-4 shrink-0" [class]="fault.iconColor"></lucide-icon>
                    <h4 class="text-sm font-semibold" [class]="fault.titleColor">{{ fault.label }}</h4>
                  </div>
                  <ul class="space-y-1.5">
                    @for (item of fault.items; track item) {
                      <li class="text-xs text-zinc-300 flex items-center gap-2">
                        <span class="size-1 rounded-full shrink-0" [class]="fault.dotColor"></span>
                        {{ item }}
                      </li>
                    }
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- ─── CASOS DE ÉXITO ─── -->
      <section id="casos-estudio" class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Casos de Éxito</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Resultados reales obtenidos en plantas solares de nuestros clientes.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-6 mb-12">
            @for (c of casosEstudio; track c.number) {
              <div class="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300">
                <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 font-bold text-xl text-white mx-auto text-center"
                  [class]="c.numBg">
                  {{ c.number }}
                </div>
                <h3 class="text-lg font-bold text-center text-white mb-5">{{ c.title }}</h3>
                <div class="space-y-3">
                  @for (stat of c.stats; track stat.label) {
                    <div class="border rounded-xl p-3" [class]="stat.style">
                      <p class="text-sm font-semibold" [class]="stat.labelColor">{{ stat.label }}</p>
                      <p class="text-xs text-zinc-400 mt-0.5">{{ stat.sub }}</p>
                    </div>
                  }
                </div>
              </div>
            }
          </div>

          <!-- Stats banner -->
          <div class="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 rounded-xl p-8">
            <div class="absolute inset-0 bg-black/20"></div>
            <h3 class="relative text-2xl font-bold text-white text-center mb-6">¿Sabías que...?</h3>
            <div class="relative grid md:grid-cols-3 gap-4">
              @for (stat of didYouKnow; track stat.value) {
                <div class="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10">
                  <div class="text-4xl font-bold text-white mb-2">{{ stat.value }}</div>
                  <p class="text-sm text-orange-100">{{ stat.desc }}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- ─── INTEGRACIÓN ─── -->
      <section class="py-20 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Integración Inteligente</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Conectamos nuestros resultados directamente con sus sistemas de gestión existentes.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-10 items-start">
            <!-- Integration systems -->
            <div class="space-y-4">
              @for (sys of integrationSystems; track sys.title) {
                <div class="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all duration-200">
                  <div class="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center" [class]="sys.iconBg">
                    <lucide-icon [name]="sys.icon" class="size-4 text-white"></lucide-icon>
                  </div>
                  <div>
                    <h3 class="text-sm font-semibold text-white mb-1">{{ sys.title }}</h3>
                    <p class="text-xs text-zinc-400 leading-snug">{{ sys.desc }}</p>
                  </div>
                </div>
              }
            </div>

            <!-- Delivery formats -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 class="text-base font-semibold text-white mb-5 text-center">Formatos de Entrega</h3>
              <div class="space-y-2.5">
                @for (fmt of deliveryFormats; track fmt.label) {
                  <div class="flex items-center justify-between bg-zinc-950/80 border border-zinc-800 rounded-lg px-4 py-3">
                    <div class="flex items-center gap-3">
                      <div class="w-7 h-7 rounded shrink-0 flex items-center justify-center" [class]="fmt.iconBg">
                        <lucide-icon [name]="fmt.icon" class="size-3.5 text-white"></lucide-icon>
                      </div>
                      <span class="text-sm text-zinc-300">{{ fmt.label }}</span>
                    </div>
                    <lucide-icon name="check-circle" class="size-4 text-emerald-500"></lucide-icon>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── LO QUE DEBES SABER ─── -->
      <section class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">Lo Que Debes Saber</h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Respuestas a las consultas más importantes sobre nuestro servicio.
            </p>
          </div>
          <div class="grid lg:grid-cols-2 gap-4">
            @for (qa of quickFAQ; track qa.q) {
              <div class="bg-zinc-950 border border-zinc-800 rounded-xl p-5">
                <h3 class="text-sm font-semibold mb-2" [class]="qa.color">{{ qa.q }}</h3>
                <p class="text-sm text-zinc-400 leading-relaxed">{{ qa.a }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ─── FAQ ACCORDION ─── -->
      <section id="faq" class="relative min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-950 via-zinc-900 to-rose-950">
        <!-- Sticky image -->
        <div class="w-full md:w-[50vw] shrink-0 md:sticky md:top-0 md:h-screen overflow-hidden">
          <img src="/img/faqimg.webp" alt="FAQ imagen solar"
            class="w-full h-48 md:h-full object-cover" />
        </div>
        <!-- Questions -->
        <div class="w-full md:w-[50vw] flex flex-col justify-center items-center bg-white/5 backdrop-blur-lg px-4 py-12 md:px-10 min-h-screen gap-3">
          <h2 class="text-2xl font-bold text-white mb-4">FAQ</h2>
          @for (faq of faqItems; track faq.q) {
            <details class="w-full max-w-xl group" name="solar-faq">
              <summary
                class="cursor-pointer flex items-center justify-between px-4 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl text-sm font-semibold text-zinc-200 transition-all duration-200 list-none">
                {{ faq.q }}
                <lucide-icon name="chevron-down" class="size-4 text-zinc-400 faq-arrow transition-transform duration-300 shrink-0 ml-3"></lucide-icon>
              </summary>
              <div class="px-5 py-4 bg-zinc-100 text-zinc-800 text-sm leading-relaxed rounded-b-xl -mt-1 border border-t-0 border-zinc-300">
                {{ faq.a }}
              </div>
            </details>
          }
        </div>
      </section>

      <!-- ─── CTA / BROCHURE ─── -->
      <section class="py-20 bg-zinc-950 border-t border-zinc-800">
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
                  <lucide-icon name="scan" class="size-4 text-amber-400"></lucide-icon>
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
export class SolarInspection {

  readonly heroCards = [
    { label: 'Análisis Térmico',  img: '/img/servicios/temp/mainex02.png' },
    { label: 'Drones RTK',        img: '/img/servicios/temp/img11.png' },
    { label: 'IA Avanzada',       img: '/img/servicios/temp/img512.png' },
    { label: 'Reportes 3D',       img: '/img/servicios/temp/digitalpanel.png' },
  ];

  readonly navLinks = [
    { href: '#intro',         label: 'Introducción',    icon: 'thermometer' },
    { href: '#tecnologia',    label: 'Tecnología',      icon: 'cpu' },
    { href: '#beneficios',    label: 'Beneficios',      icon: 'zap' },
    { href: '#proceso',       label: 'Proceso',         icon: 'scan-line' },
    { href: '#resultados',    label: 'Resultados',      icon: 'map' },
    { href: '#casos-estudio', label: 'Casos de Éxito',  icon: 'trending-down' },
    { href: '#faq',           label: 'FAQ',             icon: 'file-text' },
  ];

  readonly techCards = [
    {
      icon: 'cpu',
      title: 'DJI Matrice 300 RTK',
      desc: 'Drone industrial con precisión centimétrica RTK, capaz de cubrir grandes extensiones con vuelos autónomos programables.',
    },
    {
      icon: 'thermometer',
      title: 'Cámara Térmica Radiométrica',
      desc: 'Sensores térmicos de alta resolución que detectan variaciones mínimas de temperatura, identificando puntos calientes invisibles al ojo humano.',
    },
    {
      icon: 'scan-line',
      title: 'Radiometría Avanzada',
      desc: 'Análisis preciso de la radiación térmica emitida por cada panel, permitiendo mediciones exactas y detección de fallos microscópicos.',
    },
  ];

  readonly techSpecs = [
    { label: 'Tiempo de vuelo',      value: '55 minutos' },
    { label: 'Precisión RTK',        value: '±1.5cm vertical, ±1cm horizontal' },
    { label: 'Resolución térmica',   value: '640×512 píxeles' },
    { label: 'Rango de temperatura', value: '-40°C a +550°C' },
    { label: 'Área de cobertura',    value: 'Hasta 200 ha por vuelo' },
  ];

  readonly benefits = [
    { icon: 'shield',        iconBg: 'bg-emerald-600',  title: 'Seguridad Mejorada',       desc: 'Elimina la necesidad de que los operarios suban a estructuras peligrosas. Reduce significativamente el riesgo de accidentes laborales.' },
    { icon: 'network',       iconBg: 'bg-blue-600',     title: 'Confiabilidad de Red',      desc: 'Inspecciones más eficientes del estado de la infraestructura, mejorando la confiabilidad general del sistema fotovoltaico.' },
    { icon: 'trending-down', iconBg: 'bg-indigo-600',   title: 'Reducción de Costos',       desc: 'Minimiza el uso de helicópteros y vehículos terrestres. Reduce hasta 70% los costos de inspección.' },
    { icon: 'zap',           iconBg: 'bg-rose-600',     title: 'Eficiencia de Salida',      desc: 'La detección temprana de elementos defectuosos previene deficiencias de producción y maximiza el ROI.' },
    { icon: 'leaf',          iconBg: 'bg-amber-600',    title: 'Sostenibilidad Ambiental',  desc: 'Reducción significativa de la huella de carbono al eliminar la necesidad de vehículos terrestres y helicópteros.' },
    { icon: 'timer',         iconBg: 'bg-purple-600',   title: 'Rapidez de Inspección',     desc: 'Cobertura de grandes áreas en horas en lugar de días, acelerando la toma de decisiones y acciones correctivas.' },
  ];

  readonly processSteps = [
    {
      number: '1', reverse: false,
      numBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      title: 'Planificación y Mapeo',
      desc: 'Diseñamos rutas de vuelo optimizadas usando GPS RTK para cobertura sistemática de toda la planta solar.',
      items: ['Análisis del layout de la planta', 'Programación de vuelos autónomos', 'Definición de parámetros de captura'],
      img: '/img/servicios/temp/puntocaliente.png',
      imgLabel: 'Mapeo Inteligente', imgSub: 'Cobertura completa con precisión centimétrica',
    },
    {
      number: '2', reverse: true,
      numBg: 'bg-gradient-to-br from-blue-500 to-indigo-700',
      title: 'Captura de Datos',
      desc: 'Recolección simultánea de imágenes RGB y térmicas de alta resolución durante vuelos programados.',
      items: ['Imágenes térmicas radiométricas', 'Fotografías RGB georeferenciadas', 'Datos de posicionamiento precisos'],
      img: '/img/servicios/temp/mapatermico.png',
      imgLabel: 'Captura Dual', imgSub: 'Imágenes RGB + Térmicas simultáneas',
    },
    {
      number: '3', reverse: false,
      numBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
      title: 'Procesamiento con IA',
      desc: 'Algoritmos de inteligencia artificial analizan automáticamente las imágenes para detectar anomalías.',
      items: ['Detección automática de matrices fotovoltaicas', 'Identificación de puntos calientes', 'Clasificación de tipos de fallas'],
      img: '/img/servicios/temp/digitalpanel.png',
      imgLabel: 'IA Avanzada', imgSub: '15+ tipos de fallas detectadas automáticamente',
    },
  ];

  readonly deliverables = [
    { title: 'Mapeo Térmico Completo',  img: '/img/servicios/temp/mapatermico.png',  desc: 'Ortomosaicos térmicos de alta resolución que muestran la distribución de temperatura en toda la planta solar.' },
    { title: 'Digitalización de Paneles', img: '/img/servicios/temp/digitalpanel.png', desc: 'Identificación y vectorización automática de cada panel solar con ubicación precisa GPS.' },
    { title: 'Mapa de Defectos',         img: '/img/servicios/temp/panelbroken.png',   desc: 'Localización exacta de puntos calientes, paneles defectuosos y clasificación de criticidad de fallas.' },
  ];

  readonly faultTypes = [
    {
      label: 'Fallas Críticas',  icon: 'flame-kindling',  iconColor: 'text-rose-400',
      style: 'bg-rose-950/30 border-rose-800/50', titleColor: 'text-rose-400', dotColor: 'bg-rose-500',
      items: ['Puntos calientes severos', 'Cortocircuitos', 'Delaminación'],
    },
    {
      label: 'Fallas Moderadas', icon: 'alert-triangle', iconColor: 'text-amber-400',
      style: 'bg-amber-950/30 border-amber-800/50', titleColor: 'text-amber-400', dotColor: 'bg-amber-500',
      items: ['Grietas en células', 'Suciedad localizada', 'Degradación PID'],
    },
    {
      label: 'Mantenimiento',    icon: 'wrench',          iconColor: 'text-blue-400',
      style: 'bg-blue-950/30 border-blue-800/50', titleColor: 'text-blue-400', dotColor: 'bg-blue-500',
      items: ['Limpieza requerida', 'Vegetación interferente', 'Sombreado parcial'],
    },
  ];

  readonly casosEstudio = [
    {
      number: '01',
      numBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      title: 'Ejemplo 01',
      stats: [
        { label: '23% Reducción de Costos', sub: 'Mantenimiento predictivo implementado', style: 'bg-purple-950/30 border-purple-800/50', labelColor: 'text-purple-400' },
        { label: 'Cobertura: 78 Hectáreas', sub: '1,200 paneles inspeccionados',         style: 'bg-amber-950/30 border-amber-800/50',  labelColor: 'text-amber-400'  },
      ],
    },
    {
      number: '02',
      numBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      title: 'Ejemplo 02',
      stats: [
        { label: '92% Fallas Detectadas', sub: 'Antes de convertirse en críticas',  style: 'bg-rose-950/30 border-rose-800/50',     labelColor: 'text-rose-400'   },
        { label: 'Integración CMMS',      sub: 'Sistema automático implementado',   style: 'bg-indigo-950/30 border-indigo-800/50', labelColor: 'text-indigo-400' },
      ],
    },
  ];

  readonly didYouKnow = [
    { value: '70%', desc: 'de las fallas en paneles solares son indetectables visualmente' },
    { value: '25%', desc: 'de pérdida de eficiencia puede ocurrir sin detección temprana' },
    { value: '90%', desc: 'más rápido que inspecciones tradicionales' },
  ];

  readonly integrationSystems = [
    { icon: 'map',      iconBg: 'bg-blue-600',   title: 'Sistemas GIS',       desc: 'Los mapas térmicos y de defectos se integran automáticamente con Sistemas de Información Geográfica para análisis espacial avanzado.' },
    { icon: 'wrench',   iconBg: 'bg-emerald-600', title: 'CMMS/EAM',           desc: 'Integración directa con Software de Gestión de Mantenimiento y Enterprise Asset Management para flujos de trabajo automatizados.' },
    { icon: 'database', iconBg: 'bg-purple-600',  title: 'APIs Personalizadas', desc: 'Desarrollamos APIs customizadas para integrar nuestros datos con cualquier plataforma o dashboard existente.' },
  ];

  readonly deliveryFormats = [
    { icon: 'file-text', iconBg: 'bg-blue-600',   label: 'Reportes PDF' },
    { icon: 'map',       iconBg: 'bg-emerald-600', label: 'Archivos GeoTIFF' },
    { icon: 'database',  iconBg: 'bg-amber-600',   label: 'Shapefiles (SHP)' },
    { icon: 'globe',     iconBg: 'bg-purple-600',  label: 'API REST JSON' },
    { icon: 'network',   iconBg: 'bg-rose-600',    label: 'Dashboards Web' },
  ];

  readonly quickFAQ = [
    { color: 'text-amber-400',   q: '¿Cuándo es el mejor momento para inspeccionar?',          a: 'Las inspecciones térmicas son más efectivas entre las 10:00 AM y 2:00 PM cuando los paneles alcanzan su temperatura operativa máxima. También recomendamos inspecciones después de eventos climáticos extremos.' },
    { color: 'text-blue-400',    q: '¿Qué precisión tienen las mediciones?',                    a: 'Nuestros drones RTK ofrecen precisión centimétrica (±1cm horizontal, ±1.5cm vertical) y las cámaras térmicas detectan diferencias de temperatura de ±0.1°C.' },
    { color: 'text-emerald-400', q: '¿Se puede realizar durante la operación?',                 a: 'Sí, nuestras inspecciones son completamente no-invasivas. No requieren parar la operación de la planta y se realizan sin contacto físico con los equipos.' },
    { color: 'text-purple-400',  q: '¿Cuánto tiempo demora una inspección completa?',           a: 'Plantas de 10–50 MW se completan en 1–2 días; de 50–100 MW en 2–4 días. El procesamiento y entrega toma 3–5 días adicionales.' },
    { color: 'text-rose-400',    q: '¿Qué sucede si se detectan fallas críticas?',              a: 'Las fallas críticas se reportan inmediatamente con ubicación GPS exacta y fotografías de alta resolución, junto con recomendaciones de acción específicas.' },
    { color: 'text-orange-400',  q: '¿Incluye seguimiento de reparaciones?',                    a: 'Ofrecemos inspecciones de seguimiento para verificar la efectividad de las reparaciones y mantenemos un historial completo de cada panel.' },
  ];

  readonly faqItems = [
    { q: '¿Qué tipos de fallas puede detectar una inspección térmica?',                    a: 'Las inspecciones térmicas pueden detectar más de 15 tipos de fallas, incluyendo: puntos calientes, células en cortocircuito, delaminación, grietas en células, fallas en diodos de bypass, degradación PID, suciedad localizada, sombreado parcial y problemas en inversores.' },
    { q: '¿Con qué frecuencia se debe realizar una inspección térmica?',                   a: 'Se recomienda al menos dos veces al año, idealmente al inicio y al final de la temporada de mayor producción. Para plantas de gran escala, inspecciones trimestrales permiten un mantenimiento predictivo más efectivo.' },
    { q: '¿Necesito detener la operación de la planta para la inspección?',                a: 'No. Las inspecciones con drones son completamente no-invasivas. De hecho, es preferible que los paneles estén operando durante la inspección, ya que las anomalías térmicas son más evidentes cuando los módulos generan electricidad.' },
    { q: '¿Cuál es la diferencia entre una inspección visual y una térmica con drones?',  a: 'Las inspecciones visuales solo detectan daños superficiales evidentes. Las inspecciones térmicas revelan problemas internos invisibles al ojo humano. Aproximadamente el 70% de las fallas no son detectables visualmente. Además, con drones las inspecciones son 90% más rápidas.' },
    { q: '¿Qué condiciones climáticas son necesarias?',                                   a: 'Las condiciones ideales incluyen: cielo despejado o parcialmente nublado, irradiancia solar mínima de 600–700 W/m², vientos menores a 40 km/h y visibilidad superior a 5 km. No se puede inspeccionar durante lluvia o niebla densa.' },
    { q: '¿Cómo se clasifican las fallas detectadas por criticidad?',                     a: 'Fallas Críticas (rojo): acción inmediata, hot spots severos >20°C, cortocircuitos. Moderadas (amarillo): atención en 1–3 meses, grietas, degradación PID. Mantenimiento (azul): seguimiento programado, limpieza, vegetación cercana.' },
    { q: '¿Qué información exacta recibo en el reporte final?',                           a: 'El reporte incluye: ortomosaico térmico completo, mapa RGB georeferenciado, vectorización digital de cada panel, mapa de defectos con GPS exacto, clasificación de fallas, estadísticas de rendimiento por sector, y archivos en formatos GeoTIFF, Shapefile, PDF y JSON.' },
    { q: '¿Cuánto cuesta una inspección térmica y cómo se compara con el ROI?',           a: 'El costo típicamente representa menos del 0.5% del valor de la instalación. El ROI es excelente: detectar y reparar una falla temprana puede ahorrar 10–20 veces el costo de la inspección. La mayoría de clientes recuperan la inversión en la primera inspección.' },
  ];
}