import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatIngredientesPage } from './cat-ingredientes.page';

describe('CatIngredientesPage', () => {
  let component: CatIngredientesPage;
  let fixture: ComponentFixture<CatIngredientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatIngredientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatIngredientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
