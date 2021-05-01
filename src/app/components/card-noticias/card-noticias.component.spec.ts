import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticiasComponent } from './card-noticias.component';

describe('CardNoticiasComponent', () => {
  let component: CardNoticiasComponent;
  let fixture: ComponentFixture<CardNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
