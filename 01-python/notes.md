# Python Programming

## 1. Introduction to Python

Python is a high-level, interpreted, general-purpose programming language. It was created by Guido van Rossum and released in 1991.

Python is popular because of its simple syntax, readability and wide range of applications.

### Features of Python
- Easy to learn and understand.
- Simple and readable syntax.
- Interpreted programming language.
- Platform independent.
- Object-oriented programming support.
- Large collection of libraries.
- Open-source and free.

## 2. Applications of Python

Python is used in various fields:

- Artificial Intelligence (AI)
- Machine Learning (ML)
- Data Science
- Web Development
- Automation and Scripting
- Software Development
- Natural Language Processing (NLP)

## 3. Variables in Python

A variable is a name used to store data in memory.

Example:

```python
name = "Anshu"
age = 21
marks = 85.5

print(name)
print(age)
print(marks)
```

## 4. Data Types in Python

Data types define the type of value stored in a variable.

Common Python data types:

| Data Type | Example |
|---|---|
| int | 10 |
| float | 10.5 |
| str | "Hello" |
| bool | True |
| list | [1, 2, 3] |
| tuple | (1, 2, 3) |
| set | {1, 2, 3} |
| dict | {"name": "Anshu"} |

## 5. Operators in Python

Operators are symbols used to perform operations on variables and values.

Types of operators:

1. Arithmetic Operators (+, -, *, /, %)
2. Comparison Operators (==, !=, >, <)
3. Logical Operators (and, or, not)
4. Assignment Operators (=, +=, -=)
5. Membership Operators (in, not in)

Example:

```python
a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
```

## 6. Conditional Statements

Conditional statements are used to execute code based on conditions.

Types:
- if statement
- if-else statement
- if-elif-else statement

Example:

```python
age = 18

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")
```

## 7. Loops in Python

Loops are used to execute a block of code repeatedly.

### For Loop

```python
for i in range(1, 6):
    print(i)
```

### While Loop

```python
i = 1

while i <= 5:
    print(i)
    i += 1
```

## 8. Functions in Python

A function is a reusable block of code that performs a specific task.

Example:

```python
def add(a, b):
    return a + b

result = add(10, 20)
print(result)
```

Advantages:
- Code reusability.
- Reduces code repetition.
- Makes programs easier to understand.
- Improves code organization.

## 9. Python Collections

Python provides different collection data types.

### List
An ordered and mutable collection.

```python
fruits = ["Apple", "Banana", "Mango"]
print(fruits)
```

### Tuple
An ordered and immutable collection.

```python
numbers = (10, 20, 30)
print(numbers)
```

### Set
An unordered collection of unique elements.

```python
numbers = {1, 2, 3, 3}
print(numbers)
```

### Dictionary
Stores data in key-value pairs.

```python
student = {
    "name": "Anshu",
    "age": 21,
    "course": "B.Tech CSE"
}

print(student["name"])
```

## 10. Object-Oriented Programming (OOP)

OOP is a programming approach based on classes and objects.

Main concepts:

- Class: A blueprint for creating objects.
- Object: An instance of a class.
- Inheritance: Acquiring properties of another class.
- Polymorphism: One interface with different behaviours.
- Encapsulation: Binding data and methods together.
- Abstraction: Hiding implementation details.

Example:

```python
class Student:
    def __init__(self, name):
        self.name = name

    def display(self):
        print(self.name)

s1 = Student("Anshu")
s1.display()
```

## 11. Practice Programs

Programs to practice:

1. Print Hello World.
2. Add two numbers.
3. Check even or odd.
4. Find the largest of three numbers.
5. Find factorial of a number.
6. Check palindrome number.
7. Generate multiplication table.
8. Print Fibonacci series.
9. Check prime number.
10. Reverse a string.

## 12. Learning Outcomes

After learning Python, I understood:

- Basic syntax and programming concepts.
- Variables and different data types.
- Conditional statements and loops.
- Functions and code reusability.
- Python collection data structures.
- Basic Object-Oriented Programming concepts.

## Conclusion

Python is a powerful and beginner-friendly programming language. Learning Python provides a strong foundation for programming, automation, Artificial Intelligence and Machine Learning.

---

**Author:** Anshu  
**Learning Track:** EPAM Learning  
**Subject:** Python Programming
