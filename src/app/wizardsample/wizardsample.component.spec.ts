import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardsampleComponent } from './wizardsample.component';

describe('WizardsampleComponent', () => {
  let component: WizardsampleComponent;
  let fixture: ComponentFixture<WizardsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
