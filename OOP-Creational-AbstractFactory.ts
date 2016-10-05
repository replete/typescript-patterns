`
Abstract Method (http://www.oodesign.com/abstract-factory-pattern.html)
 
  Intent:
  - Abstract Factory offers the interface for creating a family of related objects, without explicitly specifying their classes.

  Participants:
    - [Factory] declares a interface for operations that create abstract products.
    - [ConcreteFactory*] implements operations to create concrete products.
    - [Product] declares an interface for a type of product objects.
    - [ConcreteProduct**] defines a product to be created by the corresponding ConcreteFactory; it implements the Product interface.
`;

abstract class ProductA {
  constructor(public name:string){}
  abstract operationA1(): void
  abstract operationA2(): void
}
class ConcreteProductA1 extends ProductA {
  operationA1():void {}
  operationA2():void {}
}
class ConcreteProductA2 extends ProductA {
  operationA1():void {}
  operationA2():void {}
}

abstract class ProductB {
  constructor(public name:string){}
  abstract operationB1(): void
  abstract operationB2(): void
}
class ConcreteProductB1 extends ProductB {
  operationB1():void {}
  operationB2():void {}
}
class ConcreteProductB2 extends ProductB {
  operationB1():void {}
  operationB2():void {}
}

abstract class Factory {
  abstract createProductA(): ProductA
  abstract createProductB(): ProductB
}
class ConcreteFactory1 extends Factory {
  createProductA(): ProductA {
    return new ConcreteProductA1("Product A1")
  }
  createProductB(): ProductB {
    return new ConcreteProductB1("Product B1")
  }
}
class ConcreteFactory2 extends Factory {
  createProductA(): ProductA {
    return new ConcreteProductA2("Product A2")
  }
  createProductB(): ProductB {
    return new ConcreteProductB2("Product B2")
  }
}

class FactoryMaker {
  private static pf:Factory = null
  static getFactory(choice: string): Factory {
    switch (choice) {
      case "A": return new ConcreteFactory1()
      case "B": return new ConcreteFactory2()
      default: return null
    }
  }
}

let pf:Factory = FactoryMaker.getFactory("A")
let product = pf.createProductA()
console.log(product);