import { Component } from '@angular/core';

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

  onSubmit() {
    // Lógica para lidar com o envio do formulário (por exemplo, chamar um serviço para criar a conta)
    console.log('Conta cadastrada:', this.conta);
  }
}
