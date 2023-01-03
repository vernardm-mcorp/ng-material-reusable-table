export interface VaccineGroup {
    guid: number;
    vaccineId: number;
    keyIndex: number;
    groupCode: string;
    name: string;
    displayName: string;
    requiresResult: boolean;
    releaseDate: string;
    childHoodVaccine: boolean;
    ignoreDedup: string;
    vaccineInformation?: string;
}

/* SAMPLE DATA */
export const GROUP_VACCINES: VaccineGroup[] = [
    {
        guid: 1,
        vaccineId: 7,
        keyIndex: getRandomInt(100, 9999),
        groupCode: 'DTAP',
        name: 'Diphtheria, Tetanus, Acellular Pertussis',
        displayName: 'DTP/aP',
        requiresResult: false,
        releaseDate: '11/10/2015',
        childHoodVaccine: true,
        ignoreDedup: 'N/A',
        vaccineInformation:
            'DTaP is only for children younger than 7 years old. Different vaccines against tetanus, diphtheria, and pertussis (Tdap and Td) are available for older children, adolescents, and adults.',
    },
    {
        guid: 2,
        vaccineId: 11,
        keyIndex: getRandomInt(200, 9999),
        groupCode: 'HEPA',
        name: 'Hepatitis A',
        displayName: 'HepA',
        requiresResult: false,
        releaseDate: '08/13/1999',
        childHoodVaccine: false,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 3,
        vaccineId: 12,
        keyIndex: getRandomInt(200, 9999),
        groupCode: 'HEPB',
        name: 'Hepatitis B',
        displayName: 'HepB',
        requiresResult: false,
        releaseDate: '08/18/1999',
        childHoodVaccine: false,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 4,
        vaccineId: 13,
        keyIndex: getRandomInt(300, 9999),
        groupCode: 'HIB',
        name: 'Hib',
        displayName: 'Hib',
        requiresResult: false,
        releaseDate: '10/20/1982',
        childHoodVaccine: false,
        ignoreDedup: 'N/A',
        vaccineInformation:
            'Hib vaccine can prevent Haemophilus influenzae type b (Hib) disease. Hib vaccine is usually given in 3 or 4 doses (depending on brand). Hib vaccine may be given as a stand-alone vaccine, or as part of a combination vaccine (a type of vaccine that combines more than one vaccine together into one shot).  Hib vaccine may be given at the same time as other vaccines.',
    },
    {
        guid: 5,
        vaccineId: 130,
        keyIndex: getRandomInt(400, 9999),
        groupCode: 'HPV',
        name: 'Human Papilloma Virus',
        displayName: 'HPV',
        requiresResult: false,
        releaseDate: '02/23/1992',
        childHoodVaccine: false,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 6,
        vaccineId: 17,
        keyIndex: getRandomInt(500, 9999),
        groupCode: 'MMR',
        name: 'Measles, Mumps, Rubella',
        displayName: 'MMR',
        requiresResult: false,
        releaseDate: '01/21/1997',
        childHoodVaccine: true,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 7,
        vaccineId: 19,
        keyIndex: getRandomInt(600, 9999),
        groupCode: 'PNCN',
        name: 'Pneumonia Conjugate',
        displayName: 'PneumoConjugate',
        requiresResult: false,
        releaseDate: '11/14/1974',
        childHoodVaccine: false,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 8,
        vaccineId: 34,
        keyIndex: getRandomInt(600, 9999),
        groupCode: 'PNPL',
        name: 'Pneumonia Polysaccharide ',
        displayName: 'PneumoPoly 23',
        requiresResult: false,
        releaseDate: '03/20/1988',
        childHoodVaccine: false,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 9,
        vaccineId: 20,
        keyIndex: getRandomInt(700, 9999),
        groupCode: 'POL',
        name: 'Poliomyelitis',
        displayName: 'Polio',
        requiresResult: false,
        releaseDate: '07/14/1992',
        childHoodVaccine: false,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 10,
        vaccineId: 23,
        keyIndex: getRandomInt(800, 9999),
        groupCode: 'RV',
        name: 'Rotavirus',
        displayName: 'Rotavirus',
        requiresResult: false,
        releaseDate: '05/14/1988',
        childHoodVaccine: true,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 11,
        vaccineId: 6,
        keyIndex: getRandomInt(0, 9999),
        groupCode: 'TD',
        name: 'Tetanus, Diphtheria, Acellular Pertussis',
        displayName: 'Td/Tdap',
        requiresResult: false,
        releaseDate: '01/16/1979',
        childHoodVaccine: true,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
    {
        guid: 12,
        vaccineId: 26,
        keyIndex: getRandomInt(900, 9999),
        groupCode: 'VAR',
        name: 'Varicella',
        displayName: 'Varicella',
        requiresResult: false,
        releaseDate: '09/16/1977',
        childHoodVaccine: true,
        ignoreDedup: 'N/A',
        vaccineInformation: null,
    },
];

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
