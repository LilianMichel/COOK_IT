import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngredientePage } from './ingrediente.page';

describe('IngredientePage', () => {
  let component: IngredientePage;
  let fixture: ComponentFixture<IngredientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
