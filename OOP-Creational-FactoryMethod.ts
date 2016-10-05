`
Factory Method (http://www.oodesign.com/factory-method-pattern.html)
 
  Intent:
  - Defines an interface for creating objects, but let subclasses to decide which class to instantiate
  - Refers to the newly created object through a common interface

  Participants:
  - [Product] defines the interface for objects the factory method creates.
  - [ConcreteProduct*] implements the Product interface.
  - [ProductFactory] declares the method factoryMethod, which returns a Product object. 
      May call the generating method for creating Product objects
  - [ConcreteProductFactory] overrides the generating method for creating ConcreteProduct objects
`

abstract class Product {
    constructor(public name?: string){}
}

class ConcreteProductA extends Product {}
class ConcreteProductB extends Product {}

abstract class ProductFactory {
    create(desiredProduct?: string): Product {
        return this.factoryMethod(desiredProduct)
    }
    protected abstract factoryMethod(desiredProduct?: string): Product
}

class ConcreteProductFactory extends ProductFactory {
    protected factoryMethod(desiredProduct: string): Product {
        switch (desiredProduct) {
            case "A": return new ConcreteProductA("ProductA")
            case "B": return new ConcreteProductB("ProductB")
            default: return null
        }
    }
}


let concreteProductsFactory = new ConcreteProductFactory()
let concreteProductA = concreteProductsFactory.create("A")

class OtherProduct extends Product {}

class OtherProductFactory extends ProductFactory {
    protected factoryMethod(): Product {
        return new OtherProduct("OtherProduct")
    }
}

let otherProductFactory = new OtherProductFactory()
let otherProduct = otherProductFactory.create()

console.log(concreteProductA, otherProduct);
