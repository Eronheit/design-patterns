import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Luíza', age: 20 });
myDatabaseClassic.add({ name: 'Moisés', age: 50 });
myDatabaseClassic.add({ name: 'Simone', age: 40 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
