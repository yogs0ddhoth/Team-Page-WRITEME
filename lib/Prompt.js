// create classes to generate objects
class Prompt {
  constructor(type, name, message) {
    this.type = type;
    this.name = name;
    this.message = message;
  }
}

class List extends Prompt {
  constructor(name, message, choices, when) {
    super('list', name, message);
    this.choices = choices;
    this.when = when;
  }
}

class Input extends Prompt {
  constructor(name, message, when) {
    super('input', name, message);
    this.when = when;
  }
}

class Validate extends Prompt {
  constructor(name, message, when, validate) {
    super('input', name, message);
    this.when = when;
    this.validate = validate;
  }
}

class Loop extends Prompt {
  constructor(name, message, questions) {
    super('loop', name, message);
    this.questions = questions;
  }
}
module.exports = {
  Input,
  List,
  Loop,
  Validate
}