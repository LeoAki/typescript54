export class NoIferPresenter {

  createTrafficLight__without__NoIfer<C extends string>(colors: C[], defaultColor?: C) {
    console.log('=>createTrafficLight__without__NoIfer()');
    console.log('colores::', colors);
    console.log('Color por defecto:', defaultColor);
  }

  //Agregamos un parámetro de tipo separado, que esté limitado por el parámetro de tipo existente:
  createTrafficLight__without__NoIfer__By_param<C extends string, D extends C>(colors: C[], defaultColor?: D) {
    console.log('=>createStreetLight__with_NoIfer()');
    console.log('colores::', colors);
    console.log('Color por defecto:', defaultColor);
  }

  createTrafficLight__with__NoIfer<C extends string>(colors: C[], defaultColor?: NoInfer<C>) {
    console.log('=>createTrafficLight__with__NoIfer()');
    console.log('colores::', colors);
    console.log('Color por defecto:', defaultColor);
  }

}
