import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./features/landing/home/home').then(m => m.Home)
      },   
    {
        path: 'servicios', loadComponent() {
            return import('./features/landing/services/services').then(m => m.Services);
        },
        children: [
            { path: 'asistencia-en-emergencias', loadComponent() {
                return import('./features/landing/services/emergency-asist/emergency-asist').then(m => m.EmergencyAsist);
            }},
            { path: 'bim-building-information-modeling', loadComponent() {
                return import('./features/landing/services/bim/bim').then(m => m.Bim);
            }},
            { path: 'inspecciones-termicas-de-plantas-solares', loadComponent() {
                return import('./features/landing/services/solar-inspection/solar-inspection').then(m => m.SolarInspection);
            }},
            { path: 'relevamiento-lidar', loadComponent() {
                return import('./features/landing/services/lidar/lidar').then(m => m.Lidar);
            }},
            { path: 'monitoreo-agricola', loadComponent() {
                return import('./features/landing/services/agricola-monitor/agricola-monitor').then(m => m.AgricolaMonitor);
            }},
            { path: 'monitoreo-en-mineria', loadComponent() {
                return import('./features/landing/services/mine-monitor/mine-monitor').then(m => m.MineMonitor);
            }},
            { path: 'inspecciones-de-platas-eolicas', loadComponent() {
                return import('./features/landing/services/eolic-plant/eolic-plant').then(m => m.EolicPlant);
            }},
        ]
    },
    { path: 'nosotros', loadComponent() {
        return import('./features/landing/aboutus/aboutus').then(m => m.Aboutus);
    }},
    { path: 'contacto', loadComponent() {
        return import('./features/landing/contacto/contacto').then(m => m.Contacto);
    }}

];