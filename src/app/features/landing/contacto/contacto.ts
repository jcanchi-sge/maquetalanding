import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LucideAngularModule,
  LucideIconData,
  MapPin,
  Phone,
  Mail,
  Send,
} from 'lucide-angular';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Location {
  city: string;
  address: string;
  detail: string;
}

interface ContactInfo {
  icon: LucideIconData;
  label: string;
  sublabel: string;
  value: string;
  href: string;
}

// ─── Component ───────────────────────────────────────────────────────────────

@Component({
  selector: 'app-contacto',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, LucideAngularModule],
  template: `
    <!-- ══════════════════════════════════════════════════════════
         PAGE WRAPPER — full-screen with background
    ══════════════════════════════════════════════════════════ -->
    <div class="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden px-4 py-20">

      <!-- Ambient gradient blobs -->
      <div class="pointer-events-none absolute -top-32 -left-32 size-[500px] rounded-full
                  bg-indigo-600/10 blur-3xl" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -bottom-32 -right-32 size-[400px] rounded-full
                  bg-cyan-500/8 blur-3xl" aria-hidden="true"></div>

      <!-- Inner layout: info + form -->
      <div class="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- ── LEFT: Info panel ────────────────────────────────── -->
        <div class="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl p-8
                    flex flex-col gap-10">

          <!-- Header -->
          <div>
            <h1 class="text-xl font-semibold tracking-widest uppercase text-indigo-400">
              Contacto
            </h1>
            <p class="mt-3 text-sm text-zinc-400 leading-relaxed max-w-sm">
              Realizá tu consulta y obtendrás respuesta a la brevedad vía correo electrónico.
            </p>
          </div>

          <!-- Locations -->
          <div class="space-y-6">
            <p class="text-xs font-semibold tracking-widest uppercase text-zinc-500">
              Nuestras ubicaciones
            </p>
            @for (loc of locations; track loc.city) {
              <div class="flex items-start gap-3">
                <div class="size-9 rounded-lg bg-indigo-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <lucide-icon [img]="MapPin" class="size-4 text-indigo-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 class="text-sm font-bold text-zinc-100">{{ loc.city }}</h3>
                  <p class="text-xs text-zinc-400 mt-0.5">{{ loc.address }}</p>
                  <p class="text-xs text-zinc-500">{{ loc.detail }}</p>
                </div>
              </div>
            }
          </div>

          <!-- Divider -->
          <div class="border-t border-zinc-800"></div>

          <!-- Contact channels -->
          <div class="space-y-5">
            @for (info of contactInfo; track info.label) {
              <a
                [href]="info.href"
                class="flex items-center gap-3 group"
              >
                <div class="size-9 rounded-lg bg-indigo-600/15 flex items-center justify-center shrink-0
                            group-hover:bg-indigo-600/25 transition-colors duration-200">
                  <lucide-icon [img]="info.icon" class="size-4 text-indigo-400" aria-hidden="true" />
                </div>
                <div>
                  <p class="text-xs text-zinc-500">{{ info.sublabel }}</p>
                  <p class="text-sm font-semibold text-indigo-400
                             group-hover:text-indigo-300 transition-colors duration-200">
                    {{ info.value }}
                  </p>
                </div>
              </a>
            }
          </div>
        </div>

        <!-- ── RIGHT: Contact form ─────────────────────────────── -->
        <div class="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-xl p-8
                    flex flex-col justify-between">

          <!-- Form header -->
          <div class="mb-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-zinc-100">Envianos un mensaje</h2>
            <p class="mt-1 text-sm text-zinc-400">Todos los campos son obligatorios.</p>
          </div>

          <!-- Form -->
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-5 flex-1">

            <!-- Email -->
            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                formControlName="email"
                placeholder="nombre@ejemplo.com"
                class="w-full px-4 py-2.5 rounded-lg text-sm
                       bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500
                       focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                       transition-colors duration-200"
              />
              @if (form.get('email')?.invalid && form.get('email')?.touched) {
                <p class="text-xs text-rose-400">Ingresá un email válido.</p>
              }
            </div>

            <!-- Subject -->
            <div class="flex flex-col gap-1.5">
              <label for="subject" class="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
                Asunto
              </label>
              <input
                id="subject"
                type="text"
                formControlName="subject"
                placeholder="Asunto de la consulta"
                class="w-full px-4 py-2.5 rounded-lg text-sm
                       bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500
                       focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                       transition-colors duration-200"
              />
              @if (form.get('subject')?.invalid && form.get('subject')?.touched) {
                <p class="text-xs text-rose-400">El asunto es requerido.</p>
              }
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5 flex-1">
              <label for="message" class="text-xs font-semibold text-zinc-400 tracking-wide uppercase">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="5"
                formControlName="message"
                placeholder="Dejá tu comentario..."
                class="w-full px-4 py-2.5 rounded-lg text-sm resize-none
                       bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500
                       focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                       transition-colors duration-200"
              ></textarea>
              @if (form.get('message')?.invalid && form.get('message')?.touched) {
                <p class="text-xs text-rose-400">El mensaje es requerido.</p>
              }
            </div>

            <!-- Success feedback -->
            @if (submitted()) {
              <div class="px-4 py-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50
                          text-sm font-medium text-emerald-400">
                ¡Mensaje enviado! Te responderemos a la brevedad.
              </div>
            }

            <!-- Submit -->
            <button
              type="submit"
              [disabled]="form.invalid || submitted()"
              class="inline-flex items-center justify-center gap-2 px-6 py-3
                     bg-indigo-600 hover:bg-indigo-700 active:scale-95
                     disabled:opacity-50 disabled:cursor-not-allowed
                     text-white text-sm font-semibold rounded-lg
                     transition-all duration-200 shadow-md self-start"
            >
              <lucide-icon [img]="Send" class="size-4" aria-hidden="true" />
              Enviar mensaje
            </button>

          </form>
        </div>

      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Contacto {

  // ── Icons ─────────────────────────────────────────────────────
  readonly MapPin = MapPin;
  readonly Send   = Send;

  // ── Form ──────────────────────────────────────────────────────
  private readonly fb = new FormBuilder();

  readonly form: FormGroup = this.fb.group({
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  readonly submitted = signal(false);

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: conectar con servicio de envío
    console.log('Contact form:', this.form.value);
    this.submitted.set(true);
    this.form.reset();
  }

  // ── Data ──────────────────────────────────────────────────────
  readonly locations: Location[] = [
    {
      city:    'CABA — Argentina',
      address: 'Junín 1140, 5° "B"',
      detail:  'CP (1113)',
    },
    {
      city:    'Jujuy — Argentina',
      address: 'Mz. 29 Lt. 1 — Las Delicias',
      detail:  'Los Alisos',
    },
  ];

  readonly contactInfo: ContactInfo[] = [
    {
      icon:     Phone,
      label:    'Teléfono',
      sublabel: 'Argentina',
      value:    '+54 388 407-5472',
      href:     'tel:+543884075472',
    },
    {
      icon:     Mail,
      label:    'Email',
      sublabel: 'Envianos un correo',
      value:    'info@soluciones-geoespaciales.com',
      href:     'mailto:info@soluciones-geoespaciales.com',
    },
  ];
}