export namespace DefinidedNs {

  export interface User {
    name: string;
    id: number | null; // Tipos compuestos
  }

  enum TIPOS_NACIONALIDAD {
    EXTRANJERO= '1',
    LOCAL= '2'
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
