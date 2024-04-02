const personName = {
    name: 'John',
    age: 30,
    courseAttend: ['JS', 'React', 'Node', 'MongoDB'],
    // attendCourse: function() {}
    attendCourse(courseName) {
        this.courseAttend.push(courseName) // this refers to the object 
    }

};
personName.attendCourse('Python')

function Student(name, age, courseAttend) {
    this.name = name;
    this.age = age;
    this.courseAttend = courseAttend;
    // this.attendCourse = function(courseName) {
    //     this.courseAttend.push(courseName)
    // }
}
Student.prototype.attendCourse = function (courseName) {
    this.courseAttend.push(courseName)
}

const John = new Student('John', 30, ['JS', 'React', 'Node', 'MongoDB'])
John.attendCourse('Python')


// prototypes with classes

// class Student2 {
//     constructor(name, age, courseAttend) { // constructor is a method that runs when we create a new instance of a class
//         this.name = name;
//         this.age = age;
//         this.courseAttend = courseAttend;
//     }
//     attendCourse(courseName) { // this method is added to the prototype of the class
//         this.courseAttend.push(courseName)
//     }
// }
class Student2 {
    constructor({ name, age, courseAttend }) {  // RORO: Receive and object and return an object
        this.name = name;
        this.age = age;
        this.courseAttend = courseAttend;
    }
    attendCourse(courseName) { // this method is added to the prototype of the class
        this.courseAttend.push(courseName)
    }
}
const John2 = new Student2({ name: 'John', age: 30, courseAttend: ['JS', 'React', 'Node', 'MongoDB'] })
John2.attendCourse('Vue')

console.log(John2)
