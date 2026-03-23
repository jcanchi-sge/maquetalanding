import { Routes } from '@angular/router';
import { Home } from './features/landing/home/home';
import { Services } from './features/landing/services/services';
import { Aboutus } from './features/landing/aboutus/aboutus';
import { Contacto } from './features/landing/contacto/contacto';
import { EmergencyAsist } from './features/landing/services/emergency-asist/emergency-asist';
import { Bim } from './features/landing/services/bim/bim';
import { SolarInspection } from './features/landing/services/solar-inspection/solar-inspection';
import { Lidar } from './features/landing/services/lidar/lidar';
import { AgricolaMonitor } from './features/landing/services/agricola-monitor/agricola-monitor';
import { MineMonitor } from './features/landing/services/mine-monitor/mine-monitor';
import { EolicPlant } from './features/landing/services/eolic-plant/eolic-plant';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    {
        path: 'servicios', component: Services,
        children: [
            { path: 'asistencia-en-emergencias', component: EmergencyAsist },
            { path: 'bim-building-information-modeling', component: Bim },
            { path: 'inspecciones-termicas-de-plantas-solares', component: SolarInspection },
            { path: 'relevamiento-lidar', component: Lidar },
            { path: 'monitoreo-agricola', component: AgricolaMonitor },
            { path: 'monitoreo-en-mineria', component: MineMonitor },
            { path: 'inspecciones-de-platas-eolicas', component: EolicPlant },
        ]
    },
    { path: 'nosotros', component: Aboutus },
    { path: 'servicios', component: Services },
    { path: 'contacto', component: Contacto }

];