const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('Class should have name, id, and email properties', () => {
    const test = new Employee('test.A', 'test.B', 'test.C');
    
    expect(test.name).toBe('test.A');
    expect(test.id).toBe('test.B');
    expect(test.email).toBe('test.C');
  });

  it('functions should return property values', () => {
    const test = new Employee('test.A', 'test.B', 'test.C');
    const name = test.getName();
    const id = test.getId();
    const email = test.getEmail();

    expect(name).toBe('test.A')
    expect(id).toBe('test.B')
    expect(email).toBe('test.C')
  })

  it('getRole() should return "Employee"', () => {
    const test = new Employee('test.A', 'test.B', 'test.C');
    const role = test.getRole();

    expect(role).toBe('Employee');
  });
});