import Dexie from 'dexie';

const localdb = new Dexie('kalavarana');
localdb.version(1).stores({
    cart: `id`
});

export default localdb;