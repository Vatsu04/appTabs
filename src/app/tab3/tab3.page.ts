import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3page  {

  constructor(private navCtrl: NavController) {}

  participarSorteio() {
    // Redirecionar para o perfil do Instagram da Anabolic Cakes
    window.open('https://www.instagram.com/anaboliccakes', '_blank');
  }

}