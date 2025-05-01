import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isMenuOpen: boolean = false;
  isModalOpen: boolean = false;
  selectedImage: string = '';

  imgURL ='/img/genesis2.png';

  
  currentSlide = 0;
  alumno = {
    nombre: 'Genesis Ortuño ',
    pais: 'Bolivia',
    foto: this.imgURL
  };

 // Función para abrir el modal
 openModal(image: string) {
  this.selectedImage = image;
  this.isModalOpen = true;
}

// Función para cerrar el modal
closeModal() {
  this.isModalOpen = false;
}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  

  featuredImages = [
    '/img/galeria.jpg',
    '/img/SemanaCountry.jpg',
    
    
  ];

  galleryImages: string[] =[
    '/img/amigos.jpg',
    '/img/animales.jpg',
    '/img/gallito.jpg',
    '/img/gatito.jpg',
    '/img/cajas.jpg',
    '/img/plato.jpg',
    '/img/vaquita.jpg',
    
  ];

  courses = [
    {
      image: '/img/ABCPINTURACOUNTRY.webp',
      title: 'Pintura Country Primeros Pasos',
      description: 'Pintura Country Primeros Pasos, es para quien siempre quizo pintar en madera pero no sabe por dónde comenzar.',
      link: 'https://hotmart.com/es/marketplace/productos/el-abc-de-la-pintura-country/K69642094W?sck=HOTMART_MEM_CA'
    },
    {
      image: '/img/primerospasos.webp',
      title: 'EL ABC DE LA PINTURA COUNTRY',
      description: 'Con este entrenamiento podrás dominar el arte de la pintura country desde cero a experta con 10 proyectos.',
      link: 'https://hotmart.com/es/marketplace/productos/pintura-country-primeros-pasos/V75140567H?sck=HOTMART_MEM_CA'
    },
    // Más cursos...
  ];
  

 
  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.featuredImages.length;
    }, 3000);
  }

  getCarouselTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }
}
