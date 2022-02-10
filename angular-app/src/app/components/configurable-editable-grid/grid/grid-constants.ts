enum DataTypeNames{
    Boolean = 'boolean',
    Number = 'number',
    String = 'string'
}

const TypeNameToInputTypeMap = {
    boolean: 'checkbox',
    number: 'number',
    string: 'string',
    email: 'email'
    // etc
};

export { TypeNameToInputTypeMap, DataTypeNames }
