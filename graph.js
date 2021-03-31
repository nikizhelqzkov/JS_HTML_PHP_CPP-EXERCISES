class Queue {
  constructor(arr = []) {
    this.arr = arr;
  }
  push(element) {
    this.arr.push(element);
  }
  pop() {
    this.arr = this.arr.slice(1);
  }
  size() {
    return this.arr.length;
  }
  empty() {
    return this.arr.length === 0;
  }
  front() {
    return this.arr[0];
  }
}

class G {
  constructor(list = []) {
    this.list = list;
  }
  addV(element) {
    let arr = [element];
    this.list.push(arr);
  }
  Adg() {
    return this.list;
  }
  size() {
    return this.list.length;
  }
  lastEl() {
    return this.list.length - 1;
  }
  addEdge(el1, el2) {
    let lastEl;
    let indexEl1 = this.list.findIndex((element) => element[0] === el1);
    let indexEl2 = this.list.findIndex((element) => element[0] === el2);
    if (indexEl1 >= 0 && indexEl2 >= 0) {
      this.list[indexEl1].push(el2);
      this.list[indexEl2].push(el1);
    } else if (indexEl1 >= 0 && !indexEl2 >= 0) {
      this.addV(el2);
      lastEl = this.lastEl();
      this.list[lastEl].push(el1);
      this.list[indexEl1].push(el2);
    } else if (!indexEl1 >= 0 && indexEl2 >= 0) {
      this.addV(el1);
      this.list[indexEl2].push(el1);
      lastEl = this.lastEl();
      this.list[lastEl].push(el2);
    } else {
      this.addV(el1);
      lastEl = this.lastEl();
      this.list[lastEl].push(el2);
      this.addV(el2);
      lastEl = this.lastEl();
      this.list[lastEl].push(el1);
    }
  }
}
let graph = new G();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(2, 6);
console.log(graph.Adg());
const bfs = (V) => {
  let q = new Queue();
  let p = [];
  let indP = 0;
  let o = [];
  for (let i = 0; i < V.size(); i++) {
    o[i] = 0;
  }
  for (let i = 0; i < V.size(); i++) {
    if (o[i] !== 0) {
      continue;
    }
    p[i] = null;
    o[i] = 1;
    q.push(V.Adg()[i]);
    while (!q.empty()) {
      let u = q.front();
      q.pop();
      let uInd = V.Adg().findIndex((element) => element[0] === u[0]);
      console.log(`Vruh ${u[0]}: nachalo `);
      p[indP] = u[0];
      ++indP;
      for (const v of u) {
        let index = V.Adg().findIndex((element) => element[0] === v);
        if (o[index] !== 0) {
          continue;
        }
        o[index] = 1;
        console.log(`Edge: (${p[indP - 1]}:${V.Adg()[index][0]})`);
        q.push(V.Adg()[index]);
      }
      console.log(`Vruh ${u[0]}: krai `);
      o[uInd] = 2;
    }
  }
  return p;
};
console.log(bfs(graph));