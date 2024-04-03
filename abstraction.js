class Course {
    constructor({ name, classes = [] }) {
        this.name = name;
        this.classes = classes;
    }
}

class Classes {
    constructor({ name }) {
        this.name = name;
    }
}

const class1 = new Classes({ name: 'Clase1' });
const class2 = new Classes({ name: 'Clase2' });
const class3 = new Classes({ name: 'Clase3' });


const courseBasic = new Course({ name: 'Basic', classes: [class1, class2, class3] });
const courseJS = new Course({ name: 'JS', classes: [class1, class3] });
const courseReact = new Course({ name: 'React', classes: [class3] });
const courseNode = new Course({ name: 'Node', classes: [class2, class3] });

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
