class TodoInput {
    templateElement : HTMLTemplateElement;
    hostElement : HTMLDivElement;
    element : HTMLFormElement;

    constructor(){
        this.templateElement = document.getElementById("todo-input")! as HTMLTemplateElement

          this.hostElement = document.getElementById("app")! as HTMLDivElement;

          const importedNode = document.importNode(this.templateElement.content,true);

              this.element = importedNode.firstElementChild as HTMLFormElement
              this.hostElement.insertAdjacentElement("beforeend",this.element)
    }
}

new TodoInput();