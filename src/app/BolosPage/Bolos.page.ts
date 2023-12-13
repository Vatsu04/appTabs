import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-Bolos',
  templateUrl: 'Bolos.page.html',
  styleUrls: ['Bolos.page.scss'],
})
export class BolosPage {
  carrinhoItens: any[] = [];
  bolos: any[] = [
    {
      nome: 'Bolo de Chocolate',
      imagem: 'https://drbrunocosme.com.br/wp-content/uploads/2015/10/bolo.jpg',
      ingredientes: 'Chocolate, farinha, ovos, açúcar, Whey de Chocolate',
      preco: 29.99,
      quantidade: 0
    },
    // ... (repita para cada tipo de bolo)
    {
      nome: 'Bolo de Morango',
      imagem: 'https://emagrecerplus.com.br/wp-content/uploads/2022/03/Bolo-de-whey-de-morango.jpg',
      ingredientes: 'Morangos frescos, farinha, ovos, açúcar, Whey de Morango',
      preco: 34.99,
      quantidade: 0
    },
    {
      nome: 'Bolo de Baunilha',
      imagem: 'https://todaemforma.com.br/wp-content/uploads/2014/09/Bolo-de-Whey.jpg',
      ingredientes: 'Essência de baunilha, farinha, ovos, açúcar, Whey de Baunilha',
      preco: 27.99,
      quantidade: 0
    },
    {
      nome: 'Pamonha',
      imagem: 'https://comidinhasdochef.com/wp-content/uploads/2018/07/Bolo-de-Pamonha-de-Liquidificador.jpg',
      ingredientes: 'Milho, farinha, ovos, açúcar, Whey de Pamonha',
      preco: 31.99,
      quantidade: 0
    },
    {
      nome: 'Bolo de Chocolate Vegano',
      imagem: 'https://veganandcolors.com/wp-content/uploads/2020/07/c1-11-1024x576.jpg',
      ingredientes: 'Chocolate vegano, farinha, linhaça, açúcar, Whey de Chocolate Vegano',
      preco: 36.99,
      quantidade: 0
    },
    {
      nome: 'Bolo de Limão Proteico',
      imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/Bolo-de-limao.jpg', // replace with the actual image path
      ingredientes: 'Limão, farinha, ovos, proteína, açúcar, Whey de Limão',
      preco: 32.99, 
      quantidade: 0
    },
  ];
  constructor(private toastController: ToastController) {}
  
  async adicionarAoCarrinho(bolo: any) {

      
      bolo.quantidade++;
      this.carrinhoItens.push({ nome: bolo.nome, quantidade: bolo.quantidade , preco: bolo.preco});

      // Adicione lógica para adicionar ao carrinho (por exemplo, armazenar em um serviço)
      const mensagem = `Adicionado ao carrinho: ${bolo.nome} - Quantidade: ${bolo.quantidade}`;

      const toast = await this.toastController.create({
        message: mensagem,
        duration: 2000, // Duração do toast em milissegundos
        position: 'bottom', // Posição do toast
        color: 'success', // Cor do toast
      });

      toast.present();

      // Reinicie a quantidade após adicionar ao carrinho
      
    
      
  }
  async comprarItens() {
    // Adicione lógica para realizar a compra (por exemplo, enviar para um servidor)
    // Neste exemplo, apenas exibimos uma mensagem
    const toast = await this.toastController.create({
      message: 'Compra realizada com sucesso!',
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    this.carrinhoItens = [];
    toast.present();
  }
  calcularTotalCarrinho(): number {
    return this.carrinhoItens.reduce((total, item) => total + item.preco, 0);
  }
  
}
