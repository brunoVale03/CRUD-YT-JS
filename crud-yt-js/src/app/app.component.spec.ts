import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Corrigir para 'declarations'
      imports: [FormsModule] // Importar FormsModule para o ngModel funcionar nos testes
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Remover o teste do título, pois não há uma propriedade 'title' no AppComponent

  it('should render input and buttons', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input')?.placeholder).toContain('Insira a URL do YouTube');
    expect(compiled.querySelector('button')?.textContent).toContain('Tocar Vídeo');
  });
});
