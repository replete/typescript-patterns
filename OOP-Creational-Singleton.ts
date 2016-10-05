`
Singleton

  Intent:
  - Ensure that only one instance of a class is created.
  - Provide a global point of access to the object.
`

class Singleton {
    private static instance: Singleton;
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
            // once-only initialisation code
        }
        return Singleton.instance;
    }
}

var something = new Singleton();
var somethingElse = new Singleton();

console.log(something === somethingElse); // true;