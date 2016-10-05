`
Factory (http://www.oodesign.com/factory-pattern.html)

  Intent:
  - Creates objects without exposing the instantiation logic to the client.
  - Refers to the newly created object through a common interface

  Implementation:
  - The client needs a product, but instead of creating it directly using the new operator, it asks the factory object 
    for a new product, providing the information about the type of object it needs.
  - The factory instantiates a new concrete product and then returns to the client the newly created product(casted to 
    abstract product class).
  - The client uses the products as abstract products without being aware about their concrete implementation.

  Participants:
  - [Product] defines the interface for objects the factory creates.
  - [ConcreteProduct*] implements the Product interface.
  - [ProductFactory] declares the method create, which returns a Product object. 
      May call the generating method for creating Product objects

`
abstract class Product {
  constructor(public name:string) {}
}
class ConcreteProductA extends Product { }
class ConcreteProductB extends Product { }

class ProductFactory {
  create(productId?:string):Product {
    switch (productId) {
      case "A": return new ConcreteProductA("Product A")
      case "B": return new ConcreteProductB("Product B")
      default: return null
    }
  }
}

let productFactory = new ProductFactory()
let concreteProductA = productFactory.create("A")
let concreteProductB = productFactory.create("B")
console.log(concreteProductA, concreteProductB)
