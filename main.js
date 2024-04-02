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
console.log(John)
