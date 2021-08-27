/*
    call(), 
    apply() & 
    bind() => bind simlar as call but it not call directly(not Anonymous function).
*/

const student = {
    firstName: 'Anil',
    lastName: 'Kumar',
    age: '35',

    fullDetail(city, country) {
        console.log(`my name is ${this.firstName} ${this.lastName}. My age is ${this.age}. My hometown is ${city}, ${country}`);
    }
}

const student1 = {
    firstName: 'Tom',
    lastName: 'Brad',
    age: '40'
}

const student2 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    age: '40'
}

// General Calling function
student.fullDetail('Kashipur', 'Uttarakhand');

// function calling with call() 
student.fullDetail.call(student1, 'Marlow ', 'UK');

// function calling with apply() 
student.fullDetail.apply(student2, ['Bedford', 'UK']);

// function calling with Bind() 
let students = student.fullDetail.bind(student2, 'xyz', 'US');
students()