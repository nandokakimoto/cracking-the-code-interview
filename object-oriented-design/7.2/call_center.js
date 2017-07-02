import CallDispatcher from './call_dispatcher';
import { Respondent } from './level';

class CallCenter {
  constructor() {
    this.employees = [];
  }

  dispatchCall(call) {
    const dispatcher = new CallDispatcher(this.employees);
    dispatcher.dispatch(call, new Respondent());
  }
}

export default CallCenter;
