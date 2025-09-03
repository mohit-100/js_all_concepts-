"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8000;
const app = (0, express_1.default)();
app.listen(PORT, function () {
    console.log(`server are runing on PORT${PORT}`);
});
// interface DocumentElement{
//     render():string;
// }
// class TextElement implements DocumentElement {
//     private text:string;
//     constructor(Text : string){
//         this.text = Text;
//     }
//      render():string{
//         return this.text;
//      }
// }
// class ImageElement implements DocumentElement{
//     private Img : string;
//     constructor(images : string){
//         this.Img  = images;
//     }
//     render():string{
//         return this.Img;
//     }
// }
// class Documents{
//       private Element : DocumentElement[] = [];
//       addElement(el: DocumentElement):void{
//            this.Element.push(el);
//       }
//       getElement() :string[] {
//         return this.Element.map((el)=> el.render());
//       }
// }
// interface Persistence {
//   save(content: string): void;
// }
// class FileStorage implements Persistence {
//   save(content: string): void {
//     console.log("File saved successfully:\n", content);
//   }
// }
// class DocumentEditor {
//    private document : Documents;
//    private storage : Persistence;
//     private renderedDocument: string = "";
//     constructor(doc : Documents , storage: Persistence){
//          this.document = doc;
//          this.storage = storage
//     }
//     addText(text : string):void{
//         return this.document.addElement( new TextElement(text));
//     } 
//      addImage(path: string): void {
//     const imageElement = new ImageElement(path);
//     this.document.addElement(imageElement);
//   }
//       renderDocument(): string {
//     this.renderedDocument = this.document.getElement().join("/n");
//     return this.renderedDocument;
//   }
//    save(): void {
//     this.storage.save(this.renderedDocument);
//   }
// }
// const doc = new Documents();
// const storage = new FileStorage();
// const editor = new DocumentEditor(doc, storage);
// editor.addText("Hello Mohit singh");
// const rendered = editor.renderDocument();
// console.log("Rendered Document:\n", rendered);
// editor.save();
