import { Component } from '@angular/core';

@Component({
  selector: 'app-Bolos',
  templateUrl: 'Bolos.page.html',
  styleUrls: ['Bolos.page.scss'],
})
export class BolosPage {
  bolos: any[] = [
    {
      nome: 'Bolo de Chocolate',
      imagem: 'https://drbrunocosme.com.br/wp-content/uploads/2015/10/bolo.jpg',
      ingredientes: 'Chocolate, farinha, ovos, açúcar, Whey de Chocolate',
      preco: 29.99,
    },
    // ... (repita para cada tipo de bolo)
    {
      nome: 'Bolo de Morango',
      imagem: 'https://emagrecerplus.com.br/wp-content/uploads/2022/03/Bolo-de-whey-de-morango.jpg',
      ingredientes: 'Morangos frescos, farinha, ovos, açúcar, Whey de Morango',
      preco: 34.99,
    },
    {
      nome: 'Bolo de Baunilha',
      imagem: 'https://todaemforma.com.br/wp-content/uploads/2014/09/Bolo-de-Whey.jpg',
      ingredientes: 'Essência de baunilha, farinha, ovos, açúcar, Whey de Baunilha',
      preco: 27.99,
    },
    {
      nome: 'Pamonha',
      imagem: 'https://comidinhasdochef.com/wp-content/uploads/2018/07/Bolo-de-Pamonha-de-Liquidificador.jpg',
      ingredientes: 'Milho, farinha, ovos, açúcar, Whey de Pamonha',
      preco: 31.99,
    },
    {
      nome: 'Bolo de Chocolate Vegano',
      imagem: 'https://veganandcolors.com/wp-content/uploads/2020/07/c1-11-1024x576.jpg',
      ingredientes: 'Chocolate vegano, farinha, linhaça, açúcar, Whey de Chocolate Vegano',
      preco: 36.99,
    },
    {
      nome: 'Bolo de Limão Proteico',
      imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/Bolo-de-limao.jpg', // replace with the actual image path
      ingredientes: 'Limão, farinha, ovos, proteína, açúcar, Whey de Limão',
      preco: 32.99, // Adjust the price as needed
    },
  ];
}
