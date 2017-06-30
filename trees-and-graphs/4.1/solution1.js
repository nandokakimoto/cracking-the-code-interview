import Queue from '../../stacks-and-queues/lib/queue';

function hasRoute(origin, destination) {
  const queue = new Queue();

  origin.visited = true; // eslint-disable-line no-param-reassign
  queue.add(origin);

  while (!queue.isEmpty()) {
    const current = queue.remove();

    if (current.name === destination.name) {
      return true;
    }

    current.children.forEach((child) => {
      if (!child.visited) {
        child.visited = true; // eslint-disable-line no-param-reassign
        queue.add(child);
      }
    });
  }

  return false;
}

export default function (graph, origin, destination) {
  for (let i = 0; i < graph.nodes.length; i += 1) {
    const node = graph.nodes[i];

    if (node.name === origin.name) {
      return hasRoute(node, destination);
    }
  }

  return false;
}
