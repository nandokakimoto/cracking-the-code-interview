class CallDispatcher {
  constructor(employees) {
    this.employees = employees;
  }

  dispatchCall(call, level) {
    if (level == null) {
      throw Error('There are no employees available. Please, try again later.');
    }

    const employee = this.employees.find(e => e.isFree && e.level.equals(level));

    if (employee !== null) {
      employee.receiveCall(call, this);
    } else {
      this.dispatchCall(call, level.upLevel);
    }
  }
}

export default CallDispatcher;
