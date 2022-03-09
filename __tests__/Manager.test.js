const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('Class should have name, id, email, and officeNuber properties', () => {
    const test = new Manager('test.A', 'test.B', 'test.C', 'test.D');
    
    expect(test.name).toBe('test.A');
    expect(test.id).toBe('test.B');
    expect(test.email).toBe('test.C');
    expect(test.officeNumber).toBe('test.D');
  });

  it('functions should return property values', () => {
    const test = new Manager('test.A', 'test.B', 'test.C');
    const name = test.getName();
    const id = test.getId();
    const email = test.getEmail();
    
    expect(name).toBe('test.A');
    expect(id).toBe('test.B');
    expect(email).toBe('test.C');
  })

  it('getRole function is overridden to return "Manager"', () => {
    const test = new Manager('test.A', 'test.B', 'test.C');
    const role = test.getRole();

    expect(role).toBe('Manager');
  })
});