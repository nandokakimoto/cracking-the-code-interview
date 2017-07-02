class Employee {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.isFree = true;
    this.canHandleCall = false;
  }

  receive(call, dispatcher) {
    if (this.canHandleCall) {
      call.setAssignee(this);
    } else {
      dispatcher.dispatchCall(call, this.level.upLevel);
    }
  }
}

export default Employee;
