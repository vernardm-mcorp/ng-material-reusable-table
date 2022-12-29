import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCorpReuseableTable } from './table.component';

describe('MCorpReuseableTable', () => {
  let component: MCorpReuseableTable;
  let fixture: ComponentFixture<MCorpReuseableTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MCorpReuseableTable]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCorpReuseableTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
