import { error } from 'console';
import express, { NextFunction ,Request,Response} from 'express'
import {ErrorMiddleware} from "./middleware/ErrorMiddleware";
const PORT = 8000;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:"100mb"}));

app.all("*",(req:Request,res:Response,next:NextFunction)=>{
    const err = new Error(`Route is ${req.originalUrl} notFound`) as any;
    err.statusCode = 404;
    next(err);


})

app.use(ErrorMiddleware);

app.listen(PORT, function(){
   console.log(`server are runing on PORT = ${PORT}`);
})



































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