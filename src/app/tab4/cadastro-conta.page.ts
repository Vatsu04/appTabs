import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.page.html',
  styleUrls: ['./cadastro-conta.page.scss'],
})
export class CadastroContaPage {
  conta = {
    nome: '',
    email: '',
    senha: '',
  };

  constructor(private toastController: ToastController) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duração em milissegundos
      position: 'bottom', // Posição do Toast
      color: 'success', // Cor do Toast
    });
    toast.present();
  }

  onSubmit() {
    // Lógica para lidar com o envio do formulário (por exemplo, chamar um serviço para criar a conta)
    // Substitua o console.log pelo Toast
    this.presentToast('Conta cadastrada com sucesso!');
    console.log('Conta cadastrada:', this.conta);
  }
}
