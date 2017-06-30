import assert from 'assert';
import hasRoute from '../solution';
import Node from '../../lib/graph_node';
import Graph from '../../lib/graph';

describe('Route Beetwen Node', () => {
  let graph;
  let one;
  let two;
  let three;
  let four;
  let five;
  let six;

  function resetGraph() {
    one = new Node(1);
    two = new Node(2);
    three = new Node(3);
    four = new Node(4);
    five = new Node(5);
    six = new Node(6);

    one.childrens = [three];
    two.childrens = [one];
    four.childrens = [two, three, five];

    graph = new Graph([one, two, three, four, five]);
  }

  beforeEach(() => {
    resetGraph();
  });

  it('should return false when origin is not in the graph', () => {
    assert(!hasRoute(graph, six, four));
  });

  it('should return false when destination is not in the graph', () => {
    assert(!hasRoute(graph, five, six));
  });

  it('should return false when there is no path', () => {
    assert(!hasRoute(graph, one, four));

    resetGraph();
    assert(!hasRoute(graph, two, five));

    resetGraph();
    assert(!hasRoute(graph, three, five));
  });

  it('should return true when there is a path', () => {
    assert(hasRoute(graph, four, one));

    resetGraph();
    assert(hasRoute(graph, two, three));

    resetGraph();
    assert(hasRoute(graph, one, three));
  });
});
