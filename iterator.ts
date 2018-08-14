class Component {
    constructor (public name: string) {}
  }
  
  class Frame implements IterableIterator<Component> {
  
    constructor(public name: string, public components: Component[]) {}
  
    private pointer = 0;
      
    public next(): IteratorResult<Component> 
    {
        if (this.pointer < this.components.length) {
            return {
            done: false,
            value: this.components[this.pointer++]
            }
        } else {
            return {
            done: true,
            value: new Component("")
            }
        }
    }  

    [Symbol.iterator]():IterableIterator<Component> {
        return this;
    }
  }

  let frame = new Frame("Family Names", [new Component("Narayana Rao"), new Component("Indira Kumari"), 
                new Component("Sarath"), new Component("Sandeep")]);

console.log("printing...");
console.log(frame.next());
for(let item of frame)
{
    console.log(item);
}

// console.log(frame.next().value.name);
// let value = frame.next();
// let comp = value.value;
// let compname = comp.name;

// console.log(value);
// console.log(comp);
// console.log(compname);
// var {value:{comp:any}} = frame.next();
// console.log(value);
// console.log(comp);
//console.log(comp);
// console.log(frame.next());
// console.log(frame.next());
// console.log(frame.next());
// console.log(frame.next());