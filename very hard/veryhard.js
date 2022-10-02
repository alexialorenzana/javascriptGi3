//Object prototype chain and prototypal inheritance exercise.
//1. Create a Person constructor that has three properties: name, job, and age.
//2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
//3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
// 4. Create a Programmer constructor that inherits all the members from Person with an additional
// 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer
// to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property
// on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is
// busy and another if the programmer is not, e.g. should initially log out "Mark can't accept
// any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the
// programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does each
// programmer maintain their own properties properly and independently of the other programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties
// to  incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }




//Classes are bits of code that encompass multiple objects,
//methods and allow manipulation for its member variables and functions. 
//methods are basically functions inisde your cunstroctors 


class Person {
    constructor(fullName, job, age) {
      this.fName = fullName;   // we use the "this" keyword to refer to the constructor parent, 
      this.job = job;          // "this" will allow us to pass the variable (name, job age) from the constructor
      this.age = age;
    }
    getName () {
        return this.fName
    }

    exercise() {
        console.log(`Running is fun! said no one ever.`);
    }

    fetchJob(){
        console.log(`${this.fName} is a ${this.job}`);
    }
}

//The extends keyword is used in class declarations or 
//class expressions to create a class that is a child of another class.
//In this challenge the person1 constructor is the parent, and the programmer constructor is the child


class Programmer extends Person {
    constructor(fullName, job, age, languages = []) {
      super(fullName, job, age);  // the super keyword, can be used as a function 
      this.languages = languages; //and as a property look up which we are doing here
      this.busy = true;
    }
    completeTask() {
      this.busy = false;
    }
    acceptNewTask() {
      this.busy = true;
    }
    offerNewTask() {
      if (this.busy) {
        console.log(`Mark can't accept any new tasks right now.`);
      } else {
        console.log(`Mark would love to take on a new responsibility.`);
      }
    }
    learnLanguage(language) {
      this.languages.push(language);
    }
  
    listLanguage() {
      console.log(this.languages);
    }
  }


  const Person1 = new Person("Alexia", "R2H Apprentice", 22);
  const programmer01 = new Programmer("Aida", "DJ", 24, [
    "HTML",
    "CSS",
    "JavaScript",
  ]);
  const programmer02 = new Programmer("Yareline", "Librarian", 23, [
    "React",
    "Node.Js",
    "MySQL"
  ]);

  

  programmer01.learnLanguage("Responsive Design");
  programmer02.learnLanguage("Java");
  programmer01.listLanguage();
  programmer02.listLanguage();
  console.log(Person1);
  Person1.exercise();
  Person1.fetchJob();
  console.log(programmer01.offerNewTask());
