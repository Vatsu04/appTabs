import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BolosPage } from './Bolos.page';

describe('BolosPage', () => {
  let component: BolosPage;
  let fixture: ComponentFixture<BolosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BolosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BolosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
