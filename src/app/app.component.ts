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

 
  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.featuredImages.length;
    }, 3000);
  }

  getCarouselTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }
}
