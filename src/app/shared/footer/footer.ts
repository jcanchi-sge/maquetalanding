import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="relative text-white bg-center bg-gray-600 py-24" style=""
    style="background-image: url('/img/footerimg.webp'); background-size: cover; background-repeat: no-repeat; background-position: top;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div class="flex items-center space-x-4">
            <img src="favicon.ico" alt="logo soluciones-geoespaciales" class="w-32 h-32">
            <div>
                <h3 class="text-xl font-bold texto-negrita text-white mb-4">Oficina CABA</h3>
                <p class="text-gray-400">Junin 1140 - 5° "B"<br>1113 - Ciudad Autónoma de Buenos Aires<br>ARGENTINA</p>
            </div>
        </div>
        <div>
            <h3 class="text-xl font-bold texto-negrita text-white mb-4">Oficina NOA</h3>
            <p class="text-gray-400">Mz. 29 Lt. 1 - Las Delicias<br>4607 - Los Alisos - Jujuy<br>ARGENTINA</p>
        </div>
        <div>
            <h3 class="text-xl font-bold texto-negrita text-white mb-4">Contacto</h3>
            <p class="text-gray-400">Teléfono: +54-388-407.5472<br>e-mail: <a
                    href="mailto:info@soluciones-geoespaciales.com"
                    class="text-gray-400 hover:underline">info@soluciones-geoespaciales.com</a><br><a
                    href="https://www.soluciones-geoespaciales.com"
                    class="text-gray-400 hover:underline">www.soluciones-geoespaciales.com</a></p>
            <div class="flex space-x-6 justify-center text-lg">
                <i class="bi bi-instagram hover:text-gray-300 transition"></i>
                <i class="bi bi-twitter-x hover:text-gray-300 transition"></i>
                <i class="bi bi-youtube hover:text-gray-300 transition"></i>
                <i class="bi bi-linkedin hover:text-gray-300 transition"></i>
            </div>
        </div>
    </div>


    <div class="text-center mt-8 text-gray-500">
        <p>&copy; 2026 Soluciones geoespaciales. Todos los derechos reservados.</p>
    </div>
</footer>

  `,
  styles: `
  .logo-footer img{
    width: 7rem;
    height: 7rem;
}
  `,
})
export class Footer {

}
