import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarUsuarioComponent } from './buscar-usuario';

describe('BuscarUsuarioComponent', () => {
  let component: BuscarUsuarioComponent;
  let fixture: ComponentFixture<BuscarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarUsuarioComponent] 
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarUsuarioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
