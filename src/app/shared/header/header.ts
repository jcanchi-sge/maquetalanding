import {
  Component,
  computed,
  signal,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Sun,
  Moon,
  ChevronDown,
  LayoutGrid,
  X,
  Layers,
  Smartphone,
  Cloud,
  Bot,
  ShieldCheck,
  BarChart2,
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  CalendarDays,
  TrendingUp,
  Settings,
  User,
  Bell,
  HelpCircle,
  LogOut,
  LucideIconData,
} from 'lucide-angular';

// ─── Types ──────────────────────────────────────────────────────────────────

interface NavService {
  icon: LucideIconData;
  label: string;
  description: string;
  route: string;
}

interface AppItem {
  icon: LucideIconData;
  label: string;
  route: string;
}

// ─── Component ──────────────────────────────────────────────────────────────

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
  template: `
    <!-- ════════════════════════════════════════════════════════════
         HEADER WRAPPER
         ════════════════════════════════════════════════════════════ -->
    <header
      class="fixed top-0 left-0 right-0 z-50 h-[9vh]
             bg-zinc-900/80 backdrop-blur-md
             border-b border-zinc-800
             transition-all duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

        <!-- ── LEFT: Logo + Company name ─────────────────────────── -->
        <a
          routerLink="/"
          class="flex items-center gap-2.5 shrink-0 group"
          aria-label="Ir al inicio"
        >
      <div class="flex items-center gap-2 justify-center">
        <img src="/favicon.ico" alt="logo" class="w-10 h-10" />
        <div class="text-white font-bold leading-tight transition-opacity duration-300" 

             style="font-size: 2.3vh;">
          <span>Soluciones</span><br />
          <span class="text-red-600">Geo</span><span class="text-blue-600">Espaciales</span>
        </div>
      </div>
        </a>

        <!-- ── CENTER: Main navigation (desktop) ─────────────────── -->
        <nav
          class="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
          aria-label="Navegación principal"
        >
          @for (item of navItems; track item.label) {
            @if (item.label === 'SERVICIOS') {
              <!-- Services with dropdown -->
              <div
                class="relative"
                (mouseenter)="servicesOpen.set(true)"
                (mouseleave)="servicesOpen.set(false)"
                routerLink="/servicios"
              >
                <button
                  class="flex items-center gap-1 px-3 py-2 text-xs font-semibold tracking-widest
                         text-zinc-400
                         hover:text-zinc-100
                         hover:bg-zinc-800
                         rounded-lg transition-all duration-200"
                  [class.text-indigo-400]="servicesOpen()"
                  [attr.aria-expanded]="servicesOpen()"
                  aria-haspopup="true"
                >
                  {{ item.label }}
                  <lucide-icon
                    [img]="ChevronDown"
                    class="size-3.5 transition-transform duration-200"
                    [class.rotate-180]="servicesOpen()"
                    aria-hidden="true"
                  />
                </button>

                <!-- ── Services mega-dropdown ── -->
                @if (servicesOpen()) {
                  <div
                    class="absolute top-full left-1/2 -translate-x-1/2 mt-2
                           w-[520px] bg-zinc-900
                           border border-zinc-800
                           rounded-xl shadow-md p-5
                           animate-in fade-in slide-in-from-top-2 duration-200"
                    role="menu"
                  >
                    <p class="text-xs font-semibold tracking-widest text-zinc-500 mb-3 uppercase">
                      Nuestros servicios
                    </p>
                    <div class="grid grid-cols-2 gap-2">
                      @for (svc of services; track svc.label) {
                        <a
                          [routerLink]="svc.route"
                          class="flex items-start gap-3 p-3 rounded-lg
                                 hover:bg-zinc-800/60
                                 transition-all duration-150 group/svc"
                          role="menuitem"
                          (click)="servicesOpen.set(false)"
                        >
                          <span class="size-8 rounded-lg bg-indigo-950/40
                                       flex items-center justify-center shrink-0
                                       group-hover/svc:bg-indigo-900/40
                                       transition-colors duration-150">
                            <lucide-icon [img]="svc.icon" class="size-4 text-indigo-400" aria-hidden="true" />
                          </span>
                          <div>
                            <p class="text-sm font-semibold text-zinc-100 leading-tight">
                              {{ svc.label }}
                            </p>
                            <p class="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                              {{ svc.description }}
                            </p>
                          </div>
                        </a>
                      }
                    </div>
                    <!-- Footer CTA -->
                    <div class="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                      <span class="text-xs text-zinc-400">¿No encontrás lo que buscás?</span>
                      <a
                        routerLink="/contacto"
                        class="text-xs font-semibold text-indigo-400
                               hover:underline underline-offset-2"
                        (click)="servicesOpen.set(false)"
                      >
                        Contactanos →
                      </a>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <!-- Regular nav link -->
              <a
                [routerLink]="item.route"
                routerLinkActive="text-indigo-400 bg-indigo-950/30"
                class="px-3 py-2 text-xs font-semibold tracking-widest
                       text-zinc-400
                       hover:text-zinc-100
                       hover:bg-zinc-800
                       rounded-lg transition-all duration-200"
                [routerLinkActiveOptions]="{ exact: item.route === '/' }"
              >
                {{ item.label }}
              </a>
            }
          }
        </nav>

        <!-- ── RIGHT: App grid + Theme toggle + Hamburger ────────── -->
        <div class="flex items-center gap-1 shrink-0">

          <!-- Theme toggle -->
          <button
            (click)="toggleTheme()"
            class="p-2 hover:bg-zinc-800 rounded-lg
                   text-zinc-400 active:scale-95
                   transition-all duration-200"
            [attr.aria-label]="isDark() ? 'Activar modo claro' : 'Activar modo oscuro'"
          >
            @if (isDark()) {
              <lucide-icon [img]="Sun" class="size-5" aria-hidden="true" />
            } @else {
              <lucide-icon [img]="Moon" class="size-5" aria-hidden="true" />
            }
          </button>

          <!-- ── Apps grid (Google-like) ── -->
          <div class="relative hidden sm:block">
            <button
              (click)="appsOpen.set(!appsOpen())"
              class="p-2 hover:bg-zinc-800 rounded-lg
                     text-zinc-400 active:scale-95
                     transition-all duration-200"
              aria-label="Apps"
              [attr.aria-expanded]="appsOpen()"
            >
              <lucide-icon [img]="LayoutGrid" class="size-5" aria-hidden="true" />
            </button>

            @if (appsOpen()) {
              <div
                class="absolute right-0 top-full mt-2 w-72
                       bg-zinc-900
                       border border-zinc-800
                       rounded-xl shadow-md p-4
                       animate-in fade-in slide-in-from-top-2 duration-200"
                role="dialog"
                aria-label="Apps disponibles"
              >
                <p class="text-xs font-semibold tracking-widest text-zinc-500 mb-3 uppercase">
                  Apps
                </p>
                <div class="grid grid-cols-3 gap-1">
                  @for (app of appItems; track app.label) {
                    <a
                      [routerLink]="app.route"
                      class="flex flex-col items-center gap-1.5 p-3 rounded-xl
                             hover:bg-zinc-800
                             transition-all duration-150 group/app active:scale-95"
                      (click)="appsOpen.set(false)"
                    >
                      <span class="size-10 rounded-xl bg-zinc-800
                                   flex items-center justify-center
                                   group-hover/app:bg-indigo-950/40
                                   transition-colors duration-150">
                        <lucide-icon [img]="app.icon" class="size-5 text-zinc-300" aria-hidden="true" />
                      </span>
                      <span class="text-xs font-medium text-zinc-400 text-center leading-tight">
                        {{ app.label }}
                      </span>
                    </a>
                  }
                </div>
              </div>
            }
          </div>

          <!-- ── Hamburger menu (mobile + sidebar trigger) ── -->
          <button
            (click)="sidebarOpen.set(!sidebarOpen())"
            class="p-2 hover:bg-zinc-800 rounded-lg
                   text-zinc-400 active:scale-95
                   transition-all duration-200 flex flex-col gap-1.5 items-center justify-center size-9"
            [attr.aria-label]="sidebarOpen() ? 'Cerrar menú' : 'Abrir menú'"
            [attr.aria-expanded]="sidebarOpen()"
          >
            <!-- Animated bars -->
            <span
              class="block h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
              [style.width]="'18px'"
              [style.transform]="sidebarOpen() ? 'translateY(8px) rotate(45deg)' : 'none'"
            ></span>
            <span
              class="block h-0.5 bg-current rounded-full transition-all duration-300"
              [style.width]="'14px'"
              [style.opacity]="sidebarOpen() ? '0' : '1'"
              [style.transform]="sidebarOpen() ? 'scaleX(0)' : 'scaleX(1)'"
            ></span>
            <span
              class="block h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
              [style.width]="'18px'"
              [style.transform]="sidebarOpen() ? 'translateY(-8px) rotate(-45deg)' : 'none'"
            ></span>
          </button>
        </div>
      </div>
    </header>

    <!-- ════════════════════════════════════════════════════════════
         SIDEBAR OVERLAY
         ════════════════════════════════════════════════════════════ -->
    @if (sidebarOpen()) {
      <!-- Backdrop -->
      <div
        class="fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-sm
               animate-in fade-in duration-200"
        (click)="sidebarOpen.set(false)"
        aria-hidden="true"
      ></div>

      <!-- Drawer -->
      <aside
        class="fixed top-0 right-0 z-50 h-full w-80
               bg-zinc-900
               border-l border-zinc-800
               shadow-xl flex flex-col
               animate-in slide-in-from-right duration-300"
        role="navigation"
        aria-label="Menú lateral"
      >
        <!-- Sidebar header -->
        <div class="flex items-center justify-between p-5 border-b border-zinc-800">
          <div class="flex items-center gap-2.5">
            <div class="size-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" class="size-5 text-white" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.9"/>
                <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="text-sm font-bold text-zinc-100 tracking-tight">NombreEmpresa</span>
          </div>
          <button
            (click)="sidebarOpen.set(false)"
            class="p-2 hover:bg-zinc-800 rounded-lg
                   text-zinc-400 active:scale-95 transition-all duration-200"
            aria-label="Cerrar menú"
          >
            <lucide-icon [img]="X" class="size-5" aria-hidden="true" />
          </button>
        </div>

        <!-- Sidebar nav links -->
        <nav class="flex-1 overflow-y-auto p-4 space-y-1" aria-label="Navegación del menú lateral">
          @for (item of navItems; track item.label) {
            <a
              [routerLink]="item.route"
              routerLinkActive="bg-indigo-950/30 text-indigo-400"
              class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold
                     text-zinc-400
                     hover:bg-zinc-800
                     hover:text-zinc-100
                     transition-all duration-150 active:scale-[0.98] tracking-wide"
              [routerLinkActiveOptions]="{ exact: item.route === '/' }"
              (click)="sidebarOpen.set(false)"
            >
              {{ item.label }}
            </a>
          }

          <!-- Services accordion in sidebar -->
          <div>
            <button
              (click)="sidebarServicesOpen.set(!sidebarServicesOpen())"
              class="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold
                     text-zinc-400
                     hover:bg-zinc-800
                     hover:text-zinc-100
                     transition-all duration-150 tracking-wide"
            >
              <span>SERVICIOS</span>
              <lucide-icon
                [img]="ChevronDown"
                class="size-4 transition-transform duration-200"
                [class.rotate-180]="sidebarServicesOpen()"
                aria-hidden="true"
              />
            </button>

            @if (sidebarServicesOpen()) {
              <div class="mt-1 pl-3 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                @for (svc of services; track svc.label) {
                  <a
                    [routerLink]="svc.route"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                           text-zinc-400
                           hover:bg-zinc-800
                           hover:text-zinc-100
                           transition-all duration-150"
                    (click)="sidebarOpen.set(false)"
                  >
                    <lucide-icon [img]="svc.icon" class="size-4 text-indigo-400" aria-hidden="true" />
                    <span class="font-medium">{{ svc.label }}</span>
                  </a>
                }
              </div>
            }
          </div>
        </nav>
      </aside>
    }

  `,
})
export class Header {
  // ── Icons ────────────────────────────────────────────────────
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly ChevronDown = ChevronDown;
  readonly LayoutGrid = LayoutGrid;
  readonly X = X;

  // ── State ───────────────────────────────────────────────────
  readonly servicesOpen = signal(false);
  readonly appsOpen = signal(false);
  readonly sidebarOpen = signal(false);
  readonly sidebarServicesOpen = signal(false);

  // Dark mode: default true (dark)
  readonly isDark = signal(true);

  // ── Theme toggle ─────────────────────────────────────────────
  toggleTheme(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    // Apply/remove the 'dark' class on <html> for Tailwind dark mode
    document.documentElement.classList.toggle('dark', next);
  }

  // ── Nav items ───────────────────────────────────────────────
  readonly navItems = [
    { label: 'INICIO', route: '/' },
    { label: 'NOSOTROS', route: '/nosotros' },
    { label: 'SERVICIOS', route: '/servicios' },
    { label: 'NOTICIAS', route: '/noticias' },
    { label: 'CONTACTO', route: '/contacto' },
  ];

  // ── Services data ────────────────────────────────────────────
  readonly services: NavService[] = [
    { icon: Layers,        label: 'Monitoreo Agricola',        description: '',   route: '/servicios/monitoreo-agricola'      },
    { icon: Smartphone,    label: 'BIM',           description: '',    route: '/servicios/bim-building-information-modeling'   },
    { icon: Cloud,         label: 'Inspecciones a Plantas Eolicas',         description: '',   route: '/servicios/inspecciones-de-platas-eolicas'    },
    { icon: Bot,           label: 'Relevamiento LiDAR',description: '',    route: '/servicios/relevamiento-lidar'       },
    { icon: ShieldCheck,   label: 'Monitoreo en Mineria',         description: '',     route: '/servicios/monitoreo-en-mineria' },
    { icon: BarChart2,     label: 'Inspeccion a Plantar Solares',       description: '', route: '/servicios/inspecciones-termicas-de-plantas-solares'     },
  ];

  // ── App items ────────────────────────────────────────────────
  readonly appItems: AppItem[] = [
    { icon: LayoutDashboard, label: 'App Center',  route: '/appcenter'     },
    { icon: FolderOpen,      label: 'Intranet',  route: '/intranet'     },
    { icon: MessageSquare,   label: 'Mensajes',   route: '/mensajes'      },
    { icon: CalendarDays,    label: 'Tablero',     route: '/agenda'        },
    { icon: TrendingUp,      label: 'Reportes',   route: '/reportes'      },
    { icon: Settings,        label: 'Config',     route: '/configuracion' },
  ];

  // ── Keyboard / outside click handling ───────────────────────
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.servicesOpen.set(false);
    this.appsOpen.set(false);
    this.sidebarOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('app-header')) {
      this.servicesOpen.set(false);
      this.appsOpen.set(false);
    }
  }
}