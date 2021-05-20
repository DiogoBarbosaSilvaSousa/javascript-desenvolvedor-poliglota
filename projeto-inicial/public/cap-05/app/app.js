import { Person } from './models/person.js';

const person = new Person('Diogo', 'Barbossa');
person.getFullName();
person.speak('Tudo bem?')