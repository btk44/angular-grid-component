const GridColumnSetupFieldNames = [
    'Column name',
    'Column type',
    'Column align'
];

interface GridColumnSetup {
    name: string;
    type: 'number' | 'string' | 'date' | 'boolean';
    align: 'left' | 'right' | 'center';
    index: number;
}

export { GridColumnSetupFieldNames, GridColumnSetup }