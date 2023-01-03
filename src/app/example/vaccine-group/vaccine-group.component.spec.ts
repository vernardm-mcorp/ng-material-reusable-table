import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineGroupComponent } from './vaccine-group.component';

describe('The Vaccine Group Component', (): void => {
    let component: VaccineGroupComponent;
    let fixture: ComponentFixture<VaccineGroupComponent>;

    beforeEach(async((): void => {
        TestBed.configureTestingModule({
            declarations: [VaccineGroupComponent],
        }).compileComponents();
    }));

    beforeEach((): void => {
        fixture = TestBed.createComponent(VaccineGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', (): void => {
        expect(component).toBeTruthy();
    });
});
