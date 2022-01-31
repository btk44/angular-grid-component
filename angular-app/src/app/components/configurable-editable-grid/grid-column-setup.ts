export interface GridColumnSetup {
    name: string;
    type: 'number' | 'string' | 'boolean';
    align: 'left' | 'right' | 'center';
    defaultValue: unknown;
}