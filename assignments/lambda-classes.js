// CODE here for your Lambda Classes





class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){ return `Hello my name is ${this.name}, I am from ${this.location}`; };
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){ return `Today we are learning about ${subject}`; };
    grade(student, subject){ return `${student.name} recieves a perfect score on ${subject}`;  };
    stretchGrade(student) { 
        if (student.graduate() === false)
        {

        }
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listSubjects(){ return console.log(this.favSubjects)};
    PRAssignment(subject){ return `${this.name} has subbmitted a PR for ${subject}`;  };
    sprintChallenge(subject){ return `${this.name} has begun sprint challenge on ${subject}`;};
    graduate(){ 
        if (this.grade/100 > 70) { return this.graduate = true; } 
        else { return this.graduate = false; }
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup(channel){ return `${this.name} announces to ${channel}, @channel standy times!`;};
    debugsCode(student, subject){ return `${this.name} debugs ${student}'s code on ${subject}`};
}





const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const junior = new ProjectManager({
    name: 'junior',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'WEB19',
    favInstructor: fred,
});

const harvy = new Student({
    name: 'harvy',
    location: 'moon',
    age: 52,
    previousBackground: 'Astronaut',
    className: 'WEB24',
    favSubjects: 'rocket science',
    grade: Math.floor(Math.random() * 101),
});

//Student
console.log(harvy);
harvy.listSubjects();
console.log(harvy.PRAssignment(harvy.favSubjects));
console.log(harvy.sprintChallenge(harvy.favSubjects));

//Instructor
console.log(fred.demo('rocket science'));
console.log(fred.grade(harvy, harvy.favSubjects));

//PM
console.log(junior.favInstructor.name);
console.log(junior.standup('WEB24-Junior'));
console.log(junior.debugsCode(harvy.name, harvy.favSubjects));