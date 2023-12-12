import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3page } from './tab3.page';

describe('Tab3page', () => {
  let component: Tab3page;
  let fixture: ComponentFixture<Tab3page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tab3page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
