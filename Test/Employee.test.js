const Employee = require('../lib/Employee');
const employee = new employee ('Richard','510030','calvinrich20@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
expect(employee.name).toBe('Richard');
expect(employee.id).toBe('510030');
expect(employee.email).toBe('calvinrich20@gmail.com');

});

test('test if we can get the name from the getName () method',() =>{
    expect(employee.getName()).toBe('Richard');
});

test('test if we can get the id from the getId () method',()=> {
    expect(employee.getId()).toBe('510030');

});

test('test if we can get the email from the getEmail() method', ()=>{
    expect(employee.getEmail()).toBe('calvinrich20@gmail.com')
});

test('test if we can get the role from the getRole() method',()=>{
    expect(employee.getRole()).toBe('Employee');
});