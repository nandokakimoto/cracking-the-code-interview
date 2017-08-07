import Stack from '../lib/stack';

function insertInCorrectOrder(value, stack, otherStack) {
  let pops = 0;

  while (!otherStack.isEmpty() && value < otherStack.peek()) {
    stack.push(otherStack.pop());
    pops += 1;
  }

  otherStack.push(value);

  while (pops > 0) {
    otherStack.push(stack.pop());
    pops -= 1;
  }
}

export default function (stack) {
  const temp = new Stack();

  while (!stack.isEmpty()) {
    const value = stack.pop();
    insertInCorrectOrder(value, stack, temp);
  }

  while (!temp.isEmpty()) {
    stack.push(temp.pop());
  }
}
