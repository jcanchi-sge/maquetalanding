import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  MapPin,
  Layers,
  Building2,
  Route,
  ChevronRight,
  Download,
  Mail,
  CheckCircle2,
  Scan,
  Mountain,
  Ruler,
  Thermometer,
  Droplets,
  Box,
} from 'lucide-angular';

@Component({
  selector: 'app-bim',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule, RouterLink],
  template: `
    <div class="bg-zinc-950 text-zinc-100 overflow-x-hidden">

      <!-- ─── HERO ─── -->
      <section
        id="intro"
        class="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      >
        <!-- Mesh background -->
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-950 via-zinc-950 to-indigo-950 opacity-90"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <!-- Text -->
          <div class="space-y-6">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-medium tracking-wider uppercase">
              <lucide-icon name="layers" class="size-3.5"></lucide-icon>
              Building Information Modeling
            </span>
            <h1 class="text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              BIM con
              <span class="text-emerald-400">Drones</span>
              de última generación
            </h1>
            <p class="text-lg text-zinc-400 max-w-xl leading-relaxed">
              Ofrecemos una nueva perspectiva para BIM a lo largo de todo el ciclo de vida de la construcción. Desde las construcciones hasta la gestión y el cumplimiento de las instalaciones.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
              <a
                href="#contacto"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all duration-200 active:scale-95"
              >
                <lucide-icon name="mail" class="size-4"></lucide-icon>
                Contáctanos
              </a>
              <a
                href="#servicios"
                class="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 hover:border-emerald-600 hover:bg-emerald-950/40 text-zinc-300 hover:text-white rounded-lg font-medium transition-all duration-200 active:scale-95"
              >
                Ver Servicios
                <lucide-icon name="chevron-right" class="size-4"></lucide-icon>
              </a>
            </div>
          </div>

          <!-- Image grid -->
          <div class="grid grid-cols-2 gap-3">
            @for (img of heroImages; track img.src) {
              <div class="overflow-hidden rounded-xl border border-zinc-800/60 shadow-md aspect-video">
                <img
                  [src]="img.src"
                  [alt]="img.alt"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ─── STICKY NAV ─── -->
      <nav
        class="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800"
        style="top: 0"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-1 py-3 overflow-x-auto scrollbar-none">
            @for (link of navLinks; track link.href) {
              <a
                [href]="link.href"
                class="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800/60 transition-all duration-200"
              >
                <lucide-icon [name]="link.icon" class="size-4"></lucide-icon>
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      </nav>

      <!-- ─── BIM SECTION ─── -->
      <section id="bim" class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <!-- Content -->
            <div class="space-y-6">
              <div>
                <h2 class="text-3xl font-bold tracking-tight text-white mb-3">
                  ¿Qué es el Modelado BIM?
                </h2>
                <p class="text-zinc-400 leading-relaxed">
                  El modelado de información de construcción es una visualización del tamaño, la escala y la funcionalidad de todos los sistemas de un edificio. Los drones superponen modelos 3D del mundo real para garantizar una construcción precisa a partir de los planos de diseño.
                </p>
                <p class="text-zinc-400 leading-relaxed mt-3">
                  El uso de drones en la construcción permite generar una visualización remota del estado de avance de los proyectos para revisar el correcto desarrollo.
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-emerald-400 mb-4">
                  Los interesados pueden acceder a:
                </h3>
                <ul class="space-y-2.5">
                  @for (item of bimServices; track item.label) {
                    <li class="flex items-center gap-3 text-sm text-zinc-300">
                      <lucide-icon [name]="item.icon" class="size-4 text-emerald-500 shrink-0"></lucide-icon>
                      {{ item.label }}
                    </li>
                  }
                </ul>
              </div>
            </div>

            <!-- Images -->
            <div class="grid grid-cols-2 gap-3">
              <div class="overflow-hidden rounded-xl border border-zinc-800 aspect-video col-span-2">
                <img
                  src="https://esdima.com/wp-content/uploads/2016/04/directiva-bim-curso-adaptacion.jpg"
                  alt="Modelo BIM 3D"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="overflow-hidden rounded-xl border border-zinc-800 aspect-video">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQQez5J5nM38rwqllkP1eYaHnrjWrSouO3w&s"
                  alt="Drone en construcción"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="overflow-hidden rounded-xl border border-zinc-800 aspect-video">
                <img
                  src="https://civiles.org.ar/wp-content/uploads/2023/07/bim.jpg"
                  alt="BIM datos"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── CONSTRUCCIÓN Y ARQUITECTURA ─── -->
      <section id="construccion" class="py-20 bg-zinc-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">
              Soluciones para Construcciones y Arquitectura
            </h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Cada vez más empresas constructoras agregan servicios de drones gracias a las ventajas que los Vehículos Aéreos No Tripulados ofrecen.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-5">
              <h3 class="text-xl font-semibold text-emerald-400">
                ¿Por qué los sistemas de drones son óptimos para el sector de la construcción?
              </h3>
              <div class="grid sm:grid-cols-2 gap-3">
                @for (benefit of constructionBenefits; track benefit) {
                  <div class="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                    <lucide-icon name="check-circle-2" class="size-4 text-emerald-500 mt-0.5 shrink-0"></lucide-icon>
                    <span class="text-sm text-zinc-300 leading-snug">{{ benefit }}</span>
                  </div>
                }
              </div>
            </div>

            <div class="overflow-hidden rounded-xl border border-zinc-800 shadow-md">
              <img
                src="https://thumbs.dreamstime.com/b/vista-cinem%C3%A1tica-de-drones-un-sitio-construcci%C3%B3n-inteligente-capas-bim-d-colocadas-en-el-aire-drone-hud-mostrando-vivo-que-383180007.jpg"
                alt="Construcción con drones"
                class="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ─── ESTRUCTURAS VIALES ─── -->
      <section id="viales" class="py-20 bg-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <h2 class="text-3xl font-bold tracking-tight text-white mb-3">
              Soluciones para Estructuras Viales, Rutas y Caminos
            </h2>
            <p class="text-zinc-400 max-w-2xl mx-auto">
              Los drones inspeccionan áreas más grandes de forma eficiente, en menos tiempo y a costos más bajos, permitiendo mayor frecuencia en inspecciones regulares.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="overflow-hidden rounded-xl border border-zinc-800 shadow-md">
              <img
                src="https://nicolaspapini.com.ar/wp-content/uploads/2023/09/bim-healthcare.webp"
                alt="Inspección de rutas"
                class="w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div class="space-y-5">
              <h3 class="text-xl font-semibold text-emerald-400">Tipos de Usos</h3>
              <div class="space-y-2.5">
                @for (use of vialUses; track use.label) {
                  <div class="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 hover:border-emerald-800/60 transition-colors duration-200">
                    <lucide-icon [name]="use.icon" class="size-4 text-emerald-500 shrink-0"></lucide-icon>
                    <span class="text-sm text-zinc-300">{{ use.label }}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── CTA ─── -->
      <section id="contacto" class="py-20 bg-zinc-950 border-t border-zinc-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-zinc-900 to-indigo-950 border border-zinc-800 rounded-xl p-8 lg:p-12">
            <!-- Decorative blob -->
            <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none"></div>

            <div class="relative text-center mb-10">
              <h2 class="text-3xl font-bold tracking-tight text-white mb-3">
                Conozca más sobre Nosotros
              </h2>
              <p class="text-zinc-400 max-w-xl mx-auto">
                Contacte a nuestros especialistas para una evaluación personalizada o descargue nuestros brochures.
              </p>
            </div>

            <div class="relative flex flex-col sm:flex-row items-center justify-center gap-8">
              <!-- Actions -->
              <div class="flex flex-col gap-3 items-center">
                <button
                  class="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all duration-200 active:scale-95 w-52 justify-center"
                >
                  <lucide-icon name="mail" class="size-4"></lucide-icon>
                  Contacto
                </button>
                <button
                  class="inline-flex items-center gap-2 px-6 py-2.5 border border-zinc-600 hover:border-emerald-600 hover:bg-emerald-950/40 text-zinc-300 hover:text-white rounded-lg font-medium transition-all duration-200 active:scale-95 w-52 justify-center"
                >
                  <lucide-icon name="download" class="size-4"></lucide-icon>
                  Descargar Brochure
                </button>
                <div class="w-52 overflow-hidden rounded-xl border border-zinc-700 mt-1">
                  <img
                    src="/assets/img/brochure preview.webp"
                    class="w-full object-cover"
                    alt="Vista previa del brochure"
                  />
                </div>
              </div>

              <!-- Divider -->
              <div class="hidden sm:block w-px h-48 bg-zinc-700"></div>

              <!-- QR -->
              <div class="flex flex-col items-center gap-3">
                <div class="flex items-center gap-2 text-sm text-zinc-400 mb-1">
                  <lucide-icon name="scan" class="size-4 text-emerald-400"></lucide-icon>
                  Escanear para más info
                </div>
                <div class="w-48 h-48 overflow-hidden rounded-xl border border-zinc-700">
                  <img
                    src="/assets/img/qr-code.webp"
                    alt="Código QR"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `,
})
export class Bim {

  readonly heroImages = [
    { src: 'https://image.jimcdn.com/app/cms/image/transf/dimension=536x1024:format=jpg/path/s701e818940989375/image/iea9f3a9f77a7f4d8/version/1478191579/image.jpg', alt: 'Drone en acción' },
    { src: 'https://civiles.org.ar/wp-content/uploads/2023/07/bim.jpg', alt: 'Satélite geoespacial' },
    { src: 'https://nicolaspapini.com.ar/wp-content/uploads/2023/09/bim-healthcare.webp', alt: 'Análisis AI' },
    { src: 'https://www.unir.net/wp-content/uploads/2025/03/Que-es-BIM-y-como-se-usa-en-la-Industria-4.0-1.jpg', alt: 'Modelado 3D' },
  ];

  readonly navLinks = [
    { href: '#intro',         label: 'Introducción',              icon: 'layers' },
    { href: '#bim',           label: 'BIM',                       icon: 'box' },
    { href: '#construccion',  label: 'Construcción y Arquitectura', icon: 'building-2' },
    { href: '#viales',        label: 'Estructuras Viales',        icon: 'route' },
    { href: '#contacto',      label: 'Contacto',                  icon: 'mail' },
  ];

  readonly bimServices = [
    { icon: 'layers',      label: 'Control de Modelos de Superficie Digital (DSM)' },
    { icon: 'mountain',    label: 'Topografía y restitución de terrenos' },
    { icon: 'box',         label: 'Modelados 3D' },
    { icon: 'building-2',  label: 'Avances de construcción' },
    { icon: 'ruler',       label: 'Movimientos de suelos' },
    { icon: 'map-pin',     label: 'Catastro' },
    { icon: 'droplets',    label: 'Relevamiento Hidrológico' },
    { icon: 'route',       label: 'Relevamientos Topográficos' },
    { icon: 'thermometer', label: 'Termografías' },
  ];

  readonly constructionBenefits = [
    'Crear datos, mapas y modelos 2D y 3D fácilmente.',
    'Inspecciones antes, durante y después de la obra.',
    'Acceso a zonas peligrosas sin riesgo para operarios.',
    'Estimaciones de proyecto más precisas.',
    'Vistas generales en tiempo real para mayor seguridad.',
    'Control de progresos eficaz.',
    'Inspección rápida, segura y precisa de estructuras.',
    'Seguimiento de volúmenes y existencias.',
    'Cartografía precisa de infraestructuras lineales.',
    'Mejora de vigilancia y seguridad del emplazamiento.',
  ];

  readonly vialUses = [
    { icon: 'mountain',    label: 'Remediación riesgos geológicos' },
    { icon: 'ruler',       label: 'Relevamiento para ingeniería de diseños' },
    { icon: 'layers',      label: 'Relevamiento de estabilidad de taludes' },
    { icon: 'building-2',  label: 'Datos de situación post-construcción' },
    { icon: 'check-circle-2', label: 'Soporte para estándares constructivos' },
    { icon: 'box',         label: 'Informes de avance' },
    { icon: 'route',       label: 'Indicaciones de mejores opciones de avance' },
  ];

  protected readonly icons = {
    MapPin,
    Layers,
      Building2,
  Route,
  ChevronRight,
  Download,
  Mail,
  CheckCircle2,
  Scan,
  Mountain,
  Ruler,
  Thermometer,
  Droplets,
  Box,
  };
}