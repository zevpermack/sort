import { NumbersCollection } from './NumbersCollection';
class Sorter {
  constructor(public collection: /*something else */) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      // using -1 to keep track of not needing the
      // next ending index in bubble sort after each iteration
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}