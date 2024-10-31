export class GroupByPersenter {
//TypeScript 5.4 adds declarations for JavaScript’s new Object.groupBy and Map.groupBy static methods.

  array = [0,1,2,3,4,5];

  getGroup(): void {
    const myObj = Object.groupBy(this.array, (num: number, index: number) => {
      return num % 2 === 0 ? "even": "odd";
    });
    console.log('=>getGroup()');
    console.log('Valores agrupados:', myObj);
  }

}
