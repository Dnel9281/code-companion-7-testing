function Trainer(name, tasks = []) {
  this.name = name;
  this.tasks = tasks;
  this.identify = function() {
  	let firstLetter = this.name.slice(0, 1).toUpperCase();
  	let properName = firstLetter + this.name.slice(1);
  	let sentence = 'Trainer is ' + properName;
  	return sentence;
  };
  this.printTasks = function() {
  	let sentence = 'Remaining tasks: ' + this.tasks[0];
  	if (this.tasks.length >= 1) {
  		for (let i = 1; i < this.tasks.length; i++) {
  			sentence = sentence + ', ' + this.tasks[i];
  		}
      return sentence;
  	} else {
  		return 'No tasks left!';
  	}
  };
  this.addTask = function(item) {
    this.tasks.push(item);
  };
  this.removeTask = function(item) {
    if (this.tasks.indexOf(item) === -1) {
      return;
    } else {
      this.tasks.splice(this.tasks.indexOf(item), 1);
    }
  };
};

module.exports = Trainer;