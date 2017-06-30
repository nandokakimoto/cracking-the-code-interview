class GraphNode {
  constructor(name, childrens) {
    this.name = name;
    this.childrens = childrens || [];
  }
}

export default GraphNode;
