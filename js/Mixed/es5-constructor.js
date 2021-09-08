const Employee = function(fName, lName, dob) {
    this.fistName = fName,
    this.lastName = lName,
    this.birthday = new Date(dob);

    this.calculateAge = function() {
        const diff = Date.now()-this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }    
}
Employee.prototype.gender = 'male';
delete Employee.prototype.gender;
delete Employee.prototype.calculateAge();

Employee.prototype.fullName = function() {
    return `My full name is ${this.fistName} ${this.lastName}`;
}

per1 = new Employee('Rahul', 'Kumar', '29-11-1992')
// per2 = new Employee('Rohit', 'Kumar', 45)

console.log(per1.fullName());
console.log(per1);