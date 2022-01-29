export interface GridColumnSetup {
    name: string;
    type: 'number' | 'string' | 'date' | 'boolean';
    align: 'left' | 'right' | 'center';
    index: number;
}