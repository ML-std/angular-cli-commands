import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandLineLibComponent } from './command-line-lib.component';

describe('CommandLineLibComponent', () => {
  let component: CommandLineLibComponent;
  let fixture: ComponentFixture<CommandLineLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandLineLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandLineLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
