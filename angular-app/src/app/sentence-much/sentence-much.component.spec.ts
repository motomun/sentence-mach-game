import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceMuchComponent } from './sentence-much.component';

describe('SentenceMuchComponent', () => {
  let component: SentenceMuchComponent;
  let fixture: ComponentFixture<SentenceMuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceMuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceMuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
