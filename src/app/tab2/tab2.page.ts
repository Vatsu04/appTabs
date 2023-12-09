import { Component } from '@angular/core';

@Component({
  selector: 'app-bolos',
  templateUrl: 'bolos.page.html',
  styleUrls: ['bolos.page.scss'],
})
export class BolosPage {
  bolos: any[] = [
    {
      nome: 'Bolo de Chocolate',
      imagem: 'caminho-para-imagem-1.jpg',
      ingredientes: 'Chocolate, farinha, ovos, açúcar',
      preco: 29.99,
    },
    // ... (repita para cada tipo de bolo)
    {
      nome: 'Bolo de Morango',
      imagem: 'caminho-para-imagem-30.jpg',
      ingredientes: 'Morangos frescos, farinha, ovos, açúcar',
      preco: 34.99,
    },
  ];
}
