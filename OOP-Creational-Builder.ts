module Builder {
    export class UserBuilder {
        private name: string;
        private age: number;
        private phone: string;
        private address: string;

        constructor(name: string) { this.name = name }

        get Name() { return this.name }
        get Age() { return this.age }
        get Phone() { return this.phone }
        get Address() { return this.address }

        setAge(value: number): UserBuilder {
            this.age = value;
            return this;
        }
        setPhone(value: string): UserBuilder { 
            this.phone = value;
            return this;
        }
        setAddress(value: string): UserBuilder {
            this.address = value;
            return this;
        }

        build(): User { return new User(this) }
    }

    export class User {
        private name: string;
        private age: number;
        private phone: string;
        private address: string;

        constructor(builder: UserBuilder) {
            this.name = builder.Name;
            this.age = builder.Age;
            this.phone = builder.Phone;
            this.address = builder.Address
        }

        get Name() { return this.name }
        get Age() { return this.age }
        get Phone() { return this.phone }
        get Address() { return this.address }
    }
}

var u: Builder.User = new Builder.UserBuilder("Jancsi")
                    .setAge(12)
                    .setPhone("0123456789")
                    .setAddress("asdf")
                    .build()

console.log(`${u.Name} ${u.Age} ${u.Phone} ${u.Address}`)
