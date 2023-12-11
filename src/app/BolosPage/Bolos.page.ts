import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class BolosPage {
  bolos: any[] = [
    {
      nome: 'Bolo de Chocolate',
      imagem: 'caminho-para-imagem-1.jpg',
      ingredientes: 'Chocolate, farinha, ovos, açúcar, Whey de Chocolate',
      preco: 29.99,
    },
    // ... (repita para cada tipo de bolo)
    {
      nome: 'Bolo de Morango',
      imagem: 'caminho-para-imagem-30.jpg',
      ingredientes: 'Morangos frescos, farinha, ovos, açúcar, Whey de Morango',
      preco: 34.99,
    },
  {
    nome:'Bolo de Baunilha',
    imagem: 'caminho-para-imagem-30.jpg',
    ingredientes: 'Essência de baunilha, farinha, ovos, açúcar, Whey de Baunilha'
  },
  {
    nome:'Pamonha',
    imagem:'caminho-para-imagem-30.jpg',
    ingredientes:'Milho, farinha, ovos, açúcar, Whey de Pamonha'
  },
  {
    nome:'Bolo de Chocolate Vegano',
    imagem:'caminho-para-imagem-30.jpg',
    ingredientes:'Chocolate vegano, farinha, linhaça, açúcar, Whey de Chocolate Vegano'
  }
  ];
}
