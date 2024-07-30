export namespace DefinidedNs {

  export interface User {
    name: string;
    id: number | null; // Tipos compuestos
  }

  export class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

}
