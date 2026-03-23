import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, ArrowRight, LogIn, Eye, Cpu, TrendingUp, Map, Layers, MapPin, BarChart2, Plane, CheckCircle2, ChevronDown, Globe, Satellite, TreePine, Factory, Mountain, ScanLine, Pickaxe, Plus } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
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
      }),
    ),
  ],
};
