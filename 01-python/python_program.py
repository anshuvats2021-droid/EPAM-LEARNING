
# 1. Basic Input and Output
print("Hello, World!")

name = input("Enter your name: ")
print("Welcome", name)


# 2. Arithmetic Operations
a = 20
b = 10

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)


# 3. Even or Odd
num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")


# 4. Largest of Three Numbers
a, b, c = 10, 25, 15

if a >= b and a >= c:
    print("Largest:", a)
elif b >= a and b >= c:
    print("Largest:", b)
else:
    print("Largest:", c)


# 5. Factorial of a Number
num = int(input("Enter a number: "))
fact = 1

for i in range(1, num + 1):
    fact *= i

print("Factorial:", fact)


# 6. Prime Number
num = int(input("Enter a number: "))

if num < 2:
    print("Not Prime")
else:
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            print("Not Prime")
            break
    else:
        print("Prime Number")


# 7. Fibonacci Series
n = int(input("Enter number of terms: "))

a, b = 0, 1

for i in range(n):
    print(a, end=" ")
    a, b = b, a + b


# 8. Palindrome String
text = input("\nEnter a string: ")

if text == text[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")


# 9. Reverse a String
text = input("Enter a string: ")

print("Reversed:", text[::-1])


# 10. Count Vowels
text = input("Enter a string: ")
count = 0

for char in text.lower():
    if char in "aeiou":
        count += 1

print("Total Vowels:", count)


# 11. List Operations
numbers = [10, 20, 30, 40, 50]

numbers.append(60)
numbers.remove(30)

print("List:", numbers)
print("Maximum:", max(numbers))
print("Minimum:", min(numbers))


# 12. Dictionary Operations
student = {
    "name": "Anshu",
    "course": "B.Tech CSE",
    "year": 2
}

print("Student Details:", student)
print("Name:", student["name"])


# 13. Function
def calculate_sum(a, b):
    return a + b

print("Sum:", calculate_sum(10, 20))


# 14. OOP - Class and Object
class Student:

    def __init__(self, name):
        self.name = name

    def display(self):
        print("Student Name:", self.name)


s1 = Student("Anshu")
s1.display()


# 15. Exception Handling
try:
    a = int(input("Enter numerator: "))
    b = int(input("Enter denominator: "))

    print("Result:", a / b)

except ZeroDivisionError:
    print("Cannot divide by zero")

except ValueError:
    print("Enter valid numbers")


# 16. File Handling
with open("sample.txt", "w") as file:
    file.write("Learning Python with EPAM")

print("File created successfully")
