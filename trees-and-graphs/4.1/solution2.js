import Queue from '../../stacks-and-queues/lib/queue';

function hasRoute(origin, destination) {
  if (origin === null) {
    return false;
  }

  origin.visited = true;

  if (origin.name === destination.name) {
    return true;
  }

  for(let i = 0; i < origin.children.length; i += 1) {
    const child = origin.children[i];

    if (!child.visited && hasRoute(child, destination)) {
      return true;
    }
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
