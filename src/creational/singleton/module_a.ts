import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Eronaldo', age: 20 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'José', age: 40 });

export { myDatabaseClassic };
