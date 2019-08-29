
function human () {
    this.name = 'Barbara';
    this.age = 21;
    this.sex = 'female';
    this.height = 178;
    this.weight = 58;
}

function worker() {
    this.workingPlace = 'frontend';
    this.salary = 1200;
    this.toWork = function() {
        alert('to work');
    };
}

function student() {
    this.university = 'Harvard University';
    this.grants = 500;
    this.watch = function() {
        alert('watching TV');
    };
}

worker.prototype = new human();
student.prototype = new human();

var newWorker = new worker();
var newStudent = new student();

console.log('newWorker.sex', newWorker.sex);
console.log('newStudent.name', newStudent.name);
console.log('newStudent.age', newStudent.age);
console.log('newStudent.weight', newStudent.weight);
console.log('newWorker.salary', newWorker.salary);
console.log('newStudent.studyPlace', newStudent.university);
