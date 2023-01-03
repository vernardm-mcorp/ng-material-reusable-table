import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Sort } from '@angular/material/sort';

import { VaccineGroup, GROUP_VACCINES } from './vaccine-group';
import { TableColumn } from './../../table/TableColumn';

@Component({
    selector: 'app-vax-group',
    templateUrl: './vaccine-group.component.html',
    styleUrls: ['./vaccine-group.component.scss'],
    providers: [CurrencyPipe, DecimalPipe, PercentPipe],
})
export class VaccineGroupComponent implements OnInit {
    vaccineGroups: VaccineGroup[];
    vaxGroupTableColumns: TableColumn[];

    constructor(private currencyPipe: CurrencyPipe, private decimalPipe: DecimalPipe, private percentPipe: PercentPipe) {}

    ngOnInit(): void {
        this.initializeColumns();
        this.vaccineGroups = this.getVaccineGroups();
    }

    sortData(sortParameters: Sort): any[] {
        const keyName = sortParameters.active;
        if (sortParameters.direction === 'asc') {
            this.vaccineGroups = this.vaccineGroups.sort((a: VaccineGroup, b: VaccineGroup): any => a[keyName].localeCompare(b[keyName]));
        } else if (sortParameters.direction === 'desc') {
            this.vaccineGroups = this.vaccineGroups.sort((a: VaccineGroup, b: VaccineGroup): any => b[keyName].localeCompare(a[keyName]));
        } else {
            return (this.vaccineGroups = this.getVaccineGroups());
        }
    }

    removeVaccineGroup(vaccineGroup: VaccineGroup): void {
        this.vaccineGroups = this.vaccineGroups.filter((item): boolean => item.guid !== vaccineGroup.guid);
    }

    initializeColumns(): void {
        this.vaxGroupTableColumns = [
            {
                name: 'Group ID',
                dataKey: 'guid',
                position: 'left',
                isSortable: false,
            },
            {
                name: 'Group Code',
                dataKey: 'groupCode',
                position: 'left',
                isSortable: true,
            },
            {
                name: 'Display Name',
                dataKey: 'displayName',
                position: 'left',
                isSortable: true,
            },
            {
                name: 'Long Name',
                dataKey: 'name',
                position: 'left',
                isSortable: true,
            },
        ];
    }

    getVaccineGroups(): any[] {
        return [...GROUP_VACCINES];
    }
}
