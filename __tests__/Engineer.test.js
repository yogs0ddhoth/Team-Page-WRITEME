const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('Class should have name, id, email, and officeNuber properties', () => {
    const test = new Engineer('test.A', 'test.B', 'test.C', 'test.D');
    
    expect(test.name).toBe('test.A');
    expect(test.id).toBe('test.B');
    expect(test.email).toBe('test.C');
    expect(test.github).toBe('test.D');
  });

  it('functions should return property values', () => {
    const test = new Engineer('test.A', 'test.B', 'test.C', 'test.D');
    const name = test.getName();
    const id = test.getId();
    const email = test.getEmail();
    const github = test.getGithub();

    expect(name).toBe('test.A');
    expect(id).toBe('test.B');
    expect(email).toBe('test.C');
    expect(github).toBe('test.D');
  })

  it('getRole function is overridden to return "Engineer"', () => {
    const test = new Engineer('test.A', 'test.B', 'test.C', 'test.D');
    const role = test.getRole();

    expect(role).toBe('Engineer');
  })
});