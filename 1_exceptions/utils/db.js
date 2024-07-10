class DBError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DBError';
    }
}

let id = 0
const DB = [
    { id: `${id++}`, name: 'John' },
    { id: `${id++}`, name: 'Jane' },
    { id: `${id++}`, name: 'Doe' }
]

export function getDBData() {
    if(Math.random() < 0.3) {
        throw new DBError('DB connection failed');
    }
    return DB;
}

export function addToDB(data) {
    data.id = `${id++}`;
    DB.push(data);
}
