from models import Animal, Dog, Cat


def main():
    animal = Animal("GenericAnimal", 5, "gray")
    dog = Dog("Rex", 3, "brown", "Labrador")
    cat = Cat("Mimi", 2, "white", 9)

    animals = [animal, dog, cat]

    print("=== Printing Objects ===")
    for a in animals:
        print(a)

    print("\n=== Animal Information ===")
    for a in animals:
        print(a.info())

    print("\n=== Animal Sounds (Polymorphism) ===")
    for a in animals:
        print(a.speak())

    print("\n=== Unique Methods ===")
    print(dog.fetch())
    print(cat.climb())


if __name__ == "__main__":
    main()