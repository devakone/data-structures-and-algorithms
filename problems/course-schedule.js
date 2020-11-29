/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

class Graph {
    constructor(numberOfVertices){
        this.vertices = new Map();
        this.numberOfVertices = numberOfVertices
    }
    
    addVertex(vertex){
        if(this.vertices.has(vertex)){
            throw 'Vertex already exists'
        }
        this.vertices.set(vertex, []);
    }
    
    addEdge(source, destination) {
        if(!this.vertices.has(source)){
           this.vertices.set(source, [])
        }
        const vertex = this.vertices.get(source);
        vertex.push(destination);
           console.log('Added edge: ' + vertex + ' value: ' + this.vertices.get(source) )
    }
    
    traverseWithDFS() {
        const vertices = this.vertices.keys();
        const visited = {};
        for(i = 0; i< vertices.length; i++ ){
            const vertex = vertex[i];
            this.dfs(vertex, visited)
        }
    }
    
    print() {
      const keys = this.vertices.keys();
      for (let i of keys) {
        const values = this.vertices.get(i);
        let value = "";
        for (let j of values) {
          value += j + " ";
        }
        console.log(`${i} => ${value}`);
      }
    }
    
    dfs(vertex, visited) {
        if(!visited[vertex]){
            visited[vertex] = true;
            console.log('vertex visIted', vertex);
            const neighbors = this.vertices.get(vertex);
            for(let neighbor of neighbors ){
                this.dfs(neighbor, visited)
            }
            
        }
    }
    
    isCyclic() {
        const nodes = this.vertices.keys();
        const visited = {};
        const recStack = {};
        for(let vertex of nodes ){
            console.log('vertex', vertex)
            if(this._detectCycleUtil(vertex, visited, recStack)){
                return true
            }
        }
        
        return false;
        
    }

    _detectCycleUtil(vertex, visited, recStack) {
        if(!visited[vertex]){
            visited[vertex] = true;
            recStack[vertex] = true;
            console.log('Vertex', vertex)
            const neighbors = this.vertices.get(vertex);
            console.log('Neighbords', neighbors)
            if(neighbors){
                
                 for(let currentNode of neighbors) {
                if(!visited[currentNode] && this._detectCycleUtil(currentNode, visited, recStack)){
                    return true
                } else if (recStack[currentNode]) {
                    return true
                }
            }
                
            }
           
            
        }
        recStack[vertex] = false;
        return false;
    }
    
    
    
}

var canFinish = function(numCourses, prerequisites) {
    var graph = new Graph(numCourses);

    for (let i=0; i< prerequisites.length; i++){
        let pre = prerequisites[i];
        graph.addEdge(pre[0], pre[1])
    }
    
    graph.print();
  
   if(graph.isCyclic()){
       return false
   }
    
    return true;
    
};