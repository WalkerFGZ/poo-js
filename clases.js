class LearningPaths {
    constructor({ name, courses = [] }) {
        this.name = name;
        this.courses = courses;
    }

    addCourse(course) {
        this.courses.push(course);
    }
}

const webPath = new LearningPaths({ name: 'EscuelaWeb', courses: ['JS', 'React', 'Node'] });
const dataPath = new LearningPaths({ name: 'EscuelaData', courses: ['Python', 'R', 'Scala'] });

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const andres2 = new Student({
    name: 'Andres',
    username: 'andres123',
    email: 'andres@test.com',
    twitter: 'andres123',
    learningPaths: [webPath, dataPath],
});

const miguel2 = new Student({
    name: 'Miguel',
    username: 'miguelito',
    email: 'miguel@test.com',
    instagram: 'miguelito',
    learningPaths: [webPath],
});

// const andres1 = { // no recommended
//     name: 'Andres',
//     userName: 'andres123',
//     points: 100,
//     socialMedia: {
//         twitter: 'andres123',
//         instagram: 'andres123',
//         facebook: undefined,
//     },
//     approvedCourses: [
//         'JavaScript',
//         'Python',
//         'Node.js',
//     ],
//     learningPaths: [
//         {
//             name: 'Web Development',
//             courses: [
//                 'HTML',
//                 'CSS',
//                 'JavaScript',
//                 'React',
//                 'Node.js',
//             ]
//         },
//         {
//             name: 'Data Science',
//             courses: [
//                 'Python',
//                 'R',
//                 'Machine Learning',
//             ]
//         }
//     ]
// }

// const miguel1 = {
//     name: 'Miguel',
//     userName: 'miguelito',
//     points: 1000,
//     socialMedia: {
//         twitter: 'miguelito',
//         instagram: 'miguelito',
//         facebook: undefined,
//     },
//     approvedCourses: [
//         'JavaScript',
//         'Premiere',
//         'Node.js',
//     ],
//     learningPaths: [
//         {
//             name: 'Web Development',
//             courses: [
//                 'HTML',
//                 'CSS',
//                 'JavaScript',
//                 'React',
//                 'Node.js',
//             ]
//         },
//         {
//             name: 'Video Edition',
//             courses: [
//                 'Premiere',
//                 'After Effects',
//                 'Sony Vegas',
//             ]
//         }
//     ]

// }

// const personName = {
//     name: 'John',
//     age: 30,
//     courseAttend: ['JS', 'React', 'Node', 'MongoDB'],
//     // attendCourse: function() {}
//     attendCourse(courseName) {
//         this.courseAttend.push(courseName) // this refers to the object
//     }

// };
// personName.attendCourse('Python')

// function Student(name, age, courseAttend) {
//     this.name = name;
//     this.age = age;
//     this.courseAttend = courseAttend;
//     // this.attendCourse = function(courseName) {
//     //     this.courseAttend.push(courseName)
//     // }
// }
// Student.prototype.attendCourse = function (courseName) {
//     this.courseAttend.push(courseName)
// }

// const John = new Student('John', 30, ['JS', 'React', 'Node', 'MongoDB'])
// John.attendCourse('Python')

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
// // }
// class Student2 {
//     constructor({ name, age, courseAttend }) {  // RORO: Receive and object and return an object
//         this.name = name;
//         this.age = age;
//         this.courseAttend = courseAttend;
//     }
//     attendCourse(courseName) { // this method is added to the prototype of the class
//         this.courseAttend.push(courseName)
//     }
// }
// const John2 = new Student2({ name: 'John', age: 30, courseAttend: ['JS', 'React', 'Node', 'MongoDB'] })
// John2.attendCourse('Vue')

// console.log(John2)
