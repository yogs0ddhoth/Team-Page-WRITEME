// create classes to generate objects
class Prompt {
  constructor(type, name, message) {
    this.type = type;
    this.name = name;
    this.message = message;
  }
}

class Input extends Prompt {
  constructor(name, message) {
    super('input', name, message);

  }
}

const choices = [
  'Engineer',
  'Intern',
  'Finish'
]

class List extends Prompt {
  constructor(name, message) {
    super('list', name, message);
    this.choices = choices;
  }
}

module.exports = {
  Input,
  List
}