import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CadastroContaPage } from './cadastro-conta.page';

describe('CadastroContaPage', () => {
  let component: CadastroContaPage;
  let fixture: ComponentFixture<CadastroContaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
