const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('Class should have name, id, email, and officeNuber properties', () => {
    const test = new Intern('test.A', 'test.B', 'test.C', 'test.D');
    
    expect(test.name).toBe('test.A');
    expect(test.id).toBe('test.B');
    expect(test.email).toBe('test.C');
    expect(test.school).toBe('test.D');
  });

  it('functions should return property values', () => {
    const test = new Intern('test.A', 'test.B', 'test.C', 'test.D');
    const name = test.getName();
    const id = test.getId();
    const email = test.getEmail();
    const school = test.getSchool();

    expect(name).toBe('test.A');
    expect(id).toBe('test.B');
    expect(email).toBe('test.C');
    expect(school).toBe('test.D');
  })

  it('getRole function is overridden to return "Intern"', () => {
    const test = new Intern('test.A', 'test.B', 'test.C', 'test.D');
    const role = test.getRole();

    expect(role).toBe('Intern');
  })
});