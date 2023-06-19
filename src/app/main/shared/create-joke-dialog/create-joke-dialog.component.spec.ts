import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJokeDialogComponent } from './create-joke-dialog.component';

describe('CreateJokeDialogComponent', () => {
  let component: CreateJokeDialogComponent;
  let fixture: ComponentFixture<CreateJokeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJokeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJokeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
