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
        let scoreAdjust = 0;
        console.log(student.graduated);
        console.log(student.grade);
        student.graduate();
        while(student.graduated === false){
            if ((Math.floor(Math.random() * 100)) < 50){
                scoreAdjust = Math.floor(Math.random() * 5)+1;
                console.log(`${this.name} increased ${student.name}'s grade by ${scoreAdjust}`);
                if (student.grade > 100){
                    student.grade = 100;
                }  
                student.grade += scoreAdjust;
            }
            else{
                scoreAdjust = Math.floor(Math.random() * 5)+1;
                console.log(`${this.name} decreased ${student.name}'s grade by ${scoreAdjust}`);  
                if (student.grade <= 0){
                    student.grade = 0;
                }  
                student.grade -= scoreAdjust;
            }
            console.log(student.grade);
            student.graduate();
        }
        console.log(`${student.name} graduated with a ${student.grade}`);
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
        this.graduated = attributes.graduated;
    }
    listSubjects(){ return console.log(this.favSubjects)};
    PRAssignment(subject){ return `${this.name} has subbmitted a PR for ${subject}`;  };
    sprintChallenge(subject){ return `${this.name} has begun sprint challenge on ${subject}`;};
    graduate(){ 
        if (this.grade > 70) { return this.graduated = true; } 
        else { return this.graduated = false; }
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
    graduated: false,
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

//stretch
fred.stretchGrade(harvy);