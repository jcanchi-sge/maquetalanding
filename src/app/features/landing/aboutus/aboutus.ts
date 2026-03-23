import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  LucideIconData,
  Plane,
  Camera,
  MapPin,
  Cpu,
  Building2,
  Gem,
  Map,
  TriangleAlert,
  Network,
  Trees,
  PlayCircle,
  PencilLine,
  Hammer,
  HardHat,
  RefreshCcw,
  Box,
  BarChart2,
  Eye,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-angular';

// ─── Types ───────────────────────────────────────────────────────────────────

interface TechCard {
  icon: LucideIconData;
  accent: 'indigo' | 'cyan';
  title: string;
  description: string;
}

interface WorkArea {
  icon: LucideIconData;
  accent: 'indigo' | 'cyan';
  title: string;
  description: string;
}

interface Project {
  image: string;
  title: string;
  description: string;
}

interface SlideStep {
  icon: LucideIconData;
  color: string;
  title: string;
  description: string;
}

interface SlideStats {
  value: string;
  label: string;
}

interface Slide {
  bgClass: string;
  accentClass: string;
  title: string;
  subtitle: string;
  leftTitle: string;
  steps: SlideStep[];
  rightTitle: string;
  rightBody: string;
  stats: SlideStats[];
}

// ─── Component ───────────────────────────────────────────────────────────────

@Component({
  selector: 'app-aboutus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterModule, LucideAngularModule],
  template: `
    <!-- ══════════════════════════════════════════════════════════
         HERO
    ══════════════════════════════════════════════════════════ -->
<section class="relative min-h-screen flex items-center overflow-hidden bg-zinc-950 px-4 sm:px-6 lg:px-8">

  <div class="absolute inset-0">
    <img
      ngSrc="/img/3dscan.webp"
      fill
      priority
      alt="Drone scanning landscape"
      class="object-cover opacity-60"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto w-full py-20 lg:py-0">
    
    <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
      
      <div class="w-full lg:max-w-2xl text-center lg:text-left">
        

        <h1 class="mt-8 text-left text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-zinc-100">
          <span class="block">MIRAMOS DISTINTO,</span>
          <span class="block bordo mt-1">ENCONTRAMOS RESPUESTAS,</span>
          <span class="block text-zinc-400 mt-1">CREAMOS VALOR.</span>
        </h1>

        <p class="text-left mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          {{ missionText }}
        </p>

        <div class="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
          <a routerLink="/servicios"
             class="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white text-sm font-bold
                    rounded-xl hover:bg-indigo-700 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-600/20">
            Conocer más
            <lucide-icon [img]="ArrowRight" class="size-4" aria-hidden="true" />
          </a>
          <a routerLink="/contacto"
             class="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800/50 text-zinc-100 text-sm font-bold
                    rounded-xl hover:bg-zinc-800 active:scale-95 transition-all duration-300 border border-zinc-700 backdrop-blur-sm">
            Contacto
          </a>
        </div>
      </div>

      <div class="w-full lg:w-auto flex justify-center lg:justify-end">
        <div class="relative group">
          <div class="absolute inset-0 bg-indigo-600/10 blur-[80px] rounded-full group-hover:bg-indigo-600/20"></div>
          
          <img
            ngSrc="/img/logo.webp"
            width="500"
            height="500"
            alt="Soluciones GeoEspaciales logo"
            class="relative z-20 w-48 h-48 sm:w-64 sm:h-64 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-[0_0_30px_rgba(79,70,229,0.3)]"
          />
        </div>
      </div>

    </div>
  </div>
</section>

    <!-- ══════════════════════════════════════════════════════════
         QUIENES SOMOS
    ══════════════════════════════════════════════════════════ -->
    <section class="py-20 bg-indigo-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- Text -->
        <div class="order-2 lg:order-1">
          <span class="text-xs font-semibold tracking-widest uppercase text-indigo-200">
            Quiénes somos
          </span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {{ historyTitle }}
          </h2>
          <p class="mt-4 text-lg text-indigo-100 leading-relaxed">
            {{ historyText }}
          </p>
          <p class="mt-4 text-lg text-indigo-100 leading-relaxed">
            Basados en Jujuy desde el año 2015, integramos el uso de Vehículos Aéreos No Tripulados (VANTs),
            adquisición de imágenes con diversos tipos de cámaras, sistemas de georeferenciación y software
            especializado para el post-procesamiento de la información.
          </p>
        </div>

        <!-- Image -->
        <div class="order-1 lg:order-2 rounded-xl overflow-hidden shadow-xl border border-indigo-500/30">
          <img
            ngSrc="/img/aboutus/img51.webp"
            width="720"
            height="480"
            alt="Equipo de trabajo"
            class="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         NUESTRA TECNOLOGÍA
    ══════════════════════════════════════════════════════════ -->
    <section class="py-20 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-14">
          <span class="text-xs font-semibold tracking-widest uppercase text-indigo-400">Herramientas</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            Nuestra Tecnología
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (card of techCards; track card.title) {
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                        hover:border-indigo-600/50 hover:shadow-md transition-all duration-200 group">
              <div
                class="size-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200"
                [class]="card.accent === 'indigo'
                  ? 'bg-indigo-600/20 group-hover:bg-indigo-600/30'
                  : 'bg-cyan-500/20 group-hover:bg-cyan-500/30'"
              >
                <lucide-icon
                  [img]="card.icon"
                  class="size-6"
                  [class]="card.accent === 'indigo' ? 'text-indigo-400' : 'text-cyan-400'"
                  aria-hidden="true"
                />
              </div>
              <h3 class="text-base font-bold text-zinc-100 mb-2">{{ card.title }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ card.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         ÁREAS DE TRABAJO
    ══════════════════════════════════════════════════════════ -->
    <section class="py-20 bg-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-4">
          <span class="text-xs font-semibold tracking-widest uppercase text-indigo-400">Especialidades</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            Áreas de Trabajo
          </h2>
        </div>
        <p class="text-base text-zinc-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
          Hemos desarrollado diferentes áreas de trabajo en función de las necesidades de nuestros clientes.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          @for (area of workAreas; track area.title) {
            <div class="bg-zinc-950 border border-zinc-800 rounded-xl p-6
                        hover:border-indigo-600/50 hover:shadow-md
                        transition-all duration-200 group">
              <lucide-icon
                [img]="area.icon"
                class="size-7 mb-3 transition-colors duration-200"
                [class]="area.accent === 'indigo'
                  ? 'text-indigo-400 group-hover:text-indigo-300'
                  : 'text-cyan-400 group-hover:text-cyan-300'"
                aria-hidden="true"
              />
              <h3 class="text-sm font-bold text-zinc-100 mb-1">{{ area.title }}</h3>
              <p class="text-xs text-zinc-400 leading-relaxed">{{ area.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         TECNOLOGÍA ESPECÍFICA — CAROUSEL
    ══════════════════════════════════════════════════════════ -->
    <section class="relative overflow-hidden">

      <!-- Slides wrapper -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        [style.transform]="'translateX(-' + currentSlide() * 100 + '%)'"
      >
        @for (slide of slides; track slide.title) {
          <div class="w-full flex-shrink-0 py-20" [class]="slide.bgClass">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <!-- Slide header -->
              <div class="text-center mb-12">
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white mb-4">{{ slide.title }}</h2>
                <p class="text-lg text-zinc-300 max-w-3xl mx-auto">{{ slide.subtitle }}</p>
              </div>

              <!-- Two-column content -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <!-- Steps -->
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h3 class="text-xl font-bold text-white mb-6">{{ slide.leftTitle }}</h3>
                  <div class="space-y-4">
                    @for (step of slide.steps; track step.title) {
                      <div class="flex items-start gap-4">
                        <div
                          class="size-10 rounded-lg flex items-center justify-center shrink-0"
                          [class]="step.color"
                        >
                          <lucide-icon [img]="step.icon" class="size-5 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 class="text-sm font-semibold text-white">{{ step.title }}</h4>
                          <p class="text-xs text-zinc-300 mt-0.5 leading-relaxed">{{ step.description }}</p>
                        </div>
                      </div>
                    }
                  </div>
                </div>

                <!-- Stats -->
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h3 class="text-xl font-bold text-white mb-3">{{ slide.rightTitle }}</h3>
                  <p class="text-sm text-zinc-300 mb-6 leading-relaxed">{{ slide.rightBody }}</p>
                  <div class="grid grid-cols-2 gap-3">
                    @for (stat of slide.stats; track stat.label) {
                      <div class="bg-white/20 rounded-lg p-4 text-center">
                        <div class="text-2xl font-extrabold" [class]="slide.accentClass">
                          {{ stat.value }}
                        </div>
                        <div class="text-xs text-zinc-300 mt-1">{{ stat.label }}</div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Prev / Next arrows -->
      <button
        (click)="prevSlide()"
        class="absolute left-4 top-1/2 -translate-y-1/2
               bg-white/20 hover:bg-white/30 text-white
               p-3 rounded-full transition-all duration-200 z-10 active:scale-95"
        aria-label="Slide anterior"
      >
        <lucide-icon [img]="ChevronLeft" class="size-5" aria-hidden="true" />
      </button>
      <button
        (click)="nextSlide()"
        class="absolute right-4 top-1/2 -translate-y-1/2
               bg-white/20 hover:bg-white/30 text-white
               p-3 rounded-full transition-all duration-200 z-10 active:scale-95"
        aria-label="Slide siguiente"
      >
        <lucide-icon [img]="ChevronRight" class="size-5" aria-hidden="true" />
      </button>

      <!-- Dot indicators -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        @for (slide of slides; track $index) {
          <button
            (click)="goToSlide($index)"
            class="size-2.5 rounded-full transition-all duration-300 active:scale-95"
            [class]="currentSlide() === $index ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'"
            [attr.aria-label]="'Ir al slide ' + ($index + 1)"
          ></button>
        }
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════
         TRABAJOS DESTACADOS
    ══════════════════════════════════════════════════════════ -->
    <section class="py-20 bg-zinc-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-14">
          <span class="text-xs font-semibold tracking-widest uppercase text-indigo-400">Portfolio</span>
          <h2 class="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100">
            Algunos de Nuestros Trabajos
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.title) {
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden
                        hover:border-indigo-600/50 hover:shadow-md transition-all duration-200 group">
              <div
                class="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                [style.backgroundImage]="'url(' + project.image + ')'"
              ></div>
              <div class="p-5">
                <h3 class="text-sm font-bold text-zinc-100 mb-1">{{ project.title }}</h3>
                <p class="text-xs text-zinc-400">{{ project.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Aboutus {

  // ── Icons ─────────────────────────────────────────────────────
  readonly ArrowRight = ArrowRight;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  // ── Copy ──────────────────────────────────────────────────────
  readonly missionText =
    'La empresa tiene como misión proveer servicios de geotecnología integrales, utilizando tecnologías avanzadas como inspecciones aéreas no-invasivas, fotogrametría, mapeo y modelado 3D, para brindar información precisa y oportuna a sus clientes, apoyando sus decisiones y procesos de trabajo.';

  readonly historyTitle = 'QUIÉNES SOMOS';
  readonly historyText =
    'Somos un equipo dinámico que busca empatizar con el cliente para encontrar soluciones personalizadas a sus problemas y desafíos. Estamos siempre pensando y trabajando con tecnología de punta para lograr brindar la mejor respuesta tecnológica.';

  // ── Carousel state ────────────────────────────────────────────
  readonly totalSlides = 3;
  readonly currentSlide = signal(0);

  nextSlide(): void {
    this.currentSlide.update(s => (s + 1) % this.totalSlides);
  }

  prevSlide(): void {
    this.currentSlide.update(s => (s - 1 + this.totalSlides) % this.totalSlides);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }

  // ── Tech cards ────────────────────────────────────────────────
  readonly techCards: TechCard[] = [
    { icon: Plane, accent: 'cyan', title: 'VANTs', description: 'Vehículos Aéreos No Tripulados de última generación para captura de datos aéreos.' },
    { icon: Camera, accent: 'indigo', title: 'Cámaras Especializadas', description: 'Diversos tipos de cámaras para captura de imágenes de alta precisión.' },
    { icon: MapPin, accent: 'cyan', title: 'Georeferenciación', description: 'Sistemas de georeferenciación precisos para ubicación exacta de datos.' },
    { icon: Cpu, accent: 'indigo', title: 'Software Especializado', description: 'Post-procesamiento avanzado de información con software de punta.' },
  ];

  // ── Work areas ────────────────────────────────────────────────
  readonly workAreas: WorkArea[] = [
    { icon: Building2, accent: 'cyan', title: 'Inspecciones Industriales No Invasivas', description: 'Inspección segura de infraestructuras sin interrumpir operaciones.' },
    { icon: Gem, accent: 'cyan', title: 'Monitoreo Minero', description: 'Relevamiento y control de operaciones mineras.' },
    { icon: Map, accent: 'indigo', title: 'Topografía y Catastro', description: 'Levantamientos topográficos y catastrales de precisión.' },
    { icon: TriangleAlert, accent: 'cyan', title: 'Asistencia en Emergencias', description: 'Soporte inmediato en situaciones críticas y desastres.' },
    { icon: Network, accent: 'cyan', title: 'BIM', description: 'Building Information Modeling para gestión integral de proyectos.' },
    { icon: Trees, accent: 'indigo', title: 'Ver todos los servicios', description: 'Explora todos los servicios disponibles de Soluciones GeoEspaciales.' },
  ];

  // ── Projects ──────────────────────────────────────────────────
  readonly projects: Project[] = [
    { image: '/img/aboutus/img42.png', title: 'Relevamiento de Propiedades Mineras', description: 'Mapeo y análisis detallado de propiedades mineras.' },
    { image: '/img/aboutus/img44.png', title: 'Qhapaq Ñan - Salta', description: 'Relevamiento de sitios arqueológicos del camino inca.' },
    { image: '/img/aboutus/img52.png', title: 'Casco Histórico de Purmamarca', description: 'Documentación digital del patrimonio histórico.' },
    { image: '/img/aboutus/img56.png', title: 'Alud de Volcán (2017)', description: 'Registro de áreas afectadas por desastre natural.' },
    { image: '/img/aboutus/img67.png', title: 'Qhapaq Ñan - Jujuy', description: 'Relevamiento completo del camino del inca en Jujuy.' },
    { image: '/img/aboutus/img57.png', title: 'Registro Catastral de Volcán', description: 'Levantamiento catastral completo del área.' },
  ];

  // ── Carousel slides ───────────────────────────────────────────
  readonly slides: Slide[] = [
    {
      bgClass: 'bg-zinc-800',
      accentClass: 'text-cyan-400',
      title: 'BIM — Building Information Modeling',
      subtitle: 'Metodología de trabajo colaborativa y en tiempo real para la gestión de proyectos. Representación digital de características físicas y funcionales de un objeto.',
      leftTitle: 'Dónde Participamos',
      steps: [
        { icon: PlayCircle, color: 'bg-cyan-600', title: 'Fase Inicial (Start Up)', description: 'Integración a BIM existentes y desarrollo de infraestructura BIM.' },
        { icon: PencilLine, color: 'bg-cyan-600', title: 'Diseño', description: 'Topografía, morfología del terreno y generación de nube de puntos georeferenciada.' },
        { icon: Hammer, color: 'bg-cyan-600', title: 'Construcción', description: 'Monitoreo de avances, documentación, detección de incidentes y seguridad.' },
        { icon: RefreshCcw, color: 'bg-cyan-600', title: 'Fin de Ciclo de Vida', description: 'Monitoreo de desmontaje, demolición y manejo de sustancias peligrosas.' },
      ],
      rightTitle: 'Presencia en el Ciclo de Vida',
      rightBody: 'Argentina adhirió en 2020 mediante la Norma IRAM-ISO 19650-1 a los estándares internacionales para la organización y digitalización de la información en obras que utilizan BIM.',
      stats: [
        { value: '3D', label: 'Geometría' },
        { value: '4D', label: 'Tiempo' },
        { value: '5D', label: 'Costos' },
        { value: '6D+', label: 'Sostenibilidad' },
      ],
    },
    {
      bgClass: 'bg-blue-950',
      accentClass: 'text-blue-400',
      title: 'Drones & Fotogrametría',
      subtitle: 'Tecnología de captura aérea y procesamiento de imágenes para la creación de modelos 3D precisos y mapas topográficos de alta resolución.',
      leftTitle: 'Servicios Ofrecidos',
      steps: [
        { icon: Camera, color: 'bg-blue-600', title: 'Levantamiento Aéreo', description: 'Captura de imágenes de alta resolución y videos 4K para documentación completa.' },
        { icon: Box, color: 'bg-blue-600', title: 'Modelos 3D', description: 'Generación de modelos tridimensionales precisos y ortofotos georeferenciadas.' },
        { icon: BarChart2, color: 'bg-blue-600', title: 'Análisis de Avance', description: 'Seguimiento temporal de obras y cálculo de volumetrías con precisión centimétrica.' },
        { icon: Eye, color: 'bg-blue-600', title: 'Inspección de Estructuras', description: 'Revisión de áreas de difícil acceso y detección temprana de anomalías.' },
      ],
      rightTitle: 'Tecnología y Precisión',
      rightBody: 'Utilizamos equipos de última generación con sensores RTK/PPK para obtener precisiones de hasta 2cm, cumpliendo con los más altos estándares de la industria.',
      stats: [
        { value: '±2cm', label: 'Precisión' },
        { value: '4K+', label: 'Resolución' },
        { value: 'GCP', label: 'Georeferencia' },
        { value: 'Cloud', label: 'Procesamiento' },
      ],
    }
  ];
}