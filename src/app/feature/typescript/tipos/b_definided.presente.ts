import { DefinidedNs } from "./b_definided.ns";

export class DefinidedPresenter {

  // variables
  usuarios: DefinidedNs.User[] = [];

  // métodos
  getUserNull(): DefinidedNs.User {
    return {
      id: null,
      name: ''
    }
  }

  addUser(user: DefinidedNs.User) {
    this.usuarios.push(user);
  }

  deleteUser(user: DefinidedNs.User) {
    this.usuarios = this.usuarios.filter(x => x.id == user.id && x.name == user.name);
  };

  getAdminUser(id: number): DefinidedNs.User {
    return this.usuarios.find((x) => x.id == id) || this.getUserNull();
  };

  getAllUsers(): DefinidedNs.User[] {
    return this.usuarios;
  }
}
