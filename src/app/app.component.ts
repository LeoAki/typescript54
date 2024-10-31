import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InferencePresenter } from './feature/typescript/tipos/a_inference.presenter';
import { DefinidedNs } from './feature/typescript/tipos/b_definided.ns';
import { DefinidedPresenter } from './feature/typescript/tipos/b_definided.presente';
import { StructuralSystemPresenter } from './feature/typescript/tipos/c_structual_system.presenter';
import { NoIferPresenter } from './feature/typescript/NoIfer/noIfer.presenter';
import { GroupByPersenter } from './feature/typescript/group/groupBy.presenter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    InferencePresenter, DefinidedPresenter, StructuralSystemPresenter,
    NoIferPresenter,
    GroupByPersenter
  ]
})
export class AppComponent implements OnInit {

  constructor(
    public inferenceP: InferencePresenter,
    public definidedP: DefinidedPresenter,
    public structualSystemP: StructuralSystemPresenter,
    public noIferP: NoIferPresenter,
    public groupByP: GroupByPersenter
  ) {}

  title = 'Typescript';
  listuser: DefinidedNs.User[] = [];

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    // this.inferenceVariables();
    // this.setearUsuarioClase();
    // this.setuserExercise();
    // this.useStructureSystem();
    this.useNoIfer();
    // this.getDataGroupBy();
  }

  inferenceVariables(): void {
    console.log('Tipo de inferencia::',this.inferenceP.task);
  }

  setuserExercise(): void {
    this.definidedP.addUser({id: 33, name: 'Leonardo'});
    this.definidedP.addUser({id: 23, name: 'Pamelita'});
    this.definidedP.addUser({id: 31, name: 'Ericka'});

    console.table(this.definidedP.getAllUsers());
  }

  setearUsuarioClase(): void {
    const user: DefinidedNs.User = {
      id: 1,
      name: 'Leonardo'
    }
    const UserCuenta: DefinidedNs.User = new DefinidedNs.UserAccount("pepito", 70);
    console.log('UserCuenta::', UserCuenta);
  }


  useStructureSystem(): void {
    const point = {x:12, y:26};
    this.structualSystemP.logPoint(point);

    const point3 = {x:15, y:26, z:89}
    this.structualSystemP.logPoint(point3);

    const color =  {hex: "#187ABF"};
    // this.structualSystemP.logPoint(color);
  }

  useNoIfer(): void {
    //Sin Ifer
    this.noIferP.createTrafficLight__without__NoIfer(['rojo', 'amarillo', 'verde'], 'azul');

    //Sin Ifer:
    // this.noIferP.createTrafficLight__without__NoIfer__By_param(['rojo', 'amarillo', 'verde'], 'azul');
    //Esto funciona, pero es un poco extraño porque D probablemente no se usará en ningún otro lugar del método
    //para createTrafficLight__without__NoIfer__By_param().
    //Si bien no está mal en este caso, usar un parámetro de tipo solo una vez suele ser un error de codeSmell.

    //Con Ifer:
    this.noIferP.createTrafficLight__with__NoIfer(['rojo', 'amarillo', 'verde'], "verde");
  }

  getDataGroupBy(): void {
    this.groupByP.getGroup();
  }

}
