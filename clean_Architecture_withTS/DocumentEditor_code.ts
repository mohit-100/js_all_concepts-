// src/entities/DocumentElement.ts
export interface DocumentElement {
  render(): string;
}

// src/entities/TextElement.ts
import { DocumentElement } from "./DocumentElement";

export class TextElement implements DocumentElement {
  constructor(private text: string) {}

  render(): string {
    return this.text;
  }
}

// src/entities/ImageElement.ts
import { DocumentElement } from "./DocumentElement";

export class ImageElement implements DocumentElement {
  constructor(private img: string) {}

  render(): string {
    return this.img;
  }
}

// src/entities/Document.ts
import { DocumentElement } from "./DocumentElement";

export class Document {
  private elements: DocumentElement[] = [];

  addElement(el: DocumentElement): void {
    this.elements.push(el);
  }

  getElements(): string[] {
    return this.elements.map((el) => el.render());
  }
}

// src/use-cases/addTextToDocument.ts
import { Document } from "../entities/Document";
import { TextElement } from "../entities/TextElement";

export function addTextToDocument(document: Document, text: string): void {
  const textElement = new TextElement(text);
  document.addElement(textElement);
}

// src/use-cases/addImageToDocument.ts
import { Document } from "../entities/Document";
import { ImageElement } from "../entities/ImageElement";

export function addImageToDocument(document: Document, image: string): void {
  const imageElement = new ImageElement(image);
  document.addElement(imageElement);
}

// src/use-cases/renderDocument.ts
import { Document } from "../entities/Document";

export function renderDocument(document: Document): string {
  return document.getElements().join("\n");
}

// src/use-cases/saveDocument.ts
import { Persistence } from "../interfaces/storage/Persistence";

export function saveDocument(content: string, storage: Persistence): void {
  storage.save(content);
}

// src/interfaces/storage/Persistence.ts
export interface Persistence {
  save(content: string): void;
}

// src/interfaces/storage/FileStorage.ts
import { Persistence } from "./Persistence";

export class FileStorage implements Persistence {
  save(content: string): void {
    console.log("File saved successfully:\n", content);
  }
}

// src/interfaces/controllers/DocumentEditor.ts
import { Document } from "../../entities/Document";
import { Persistence } from "../storage/Persistence";
import { addTextToDocument } from "../../use-cases/addTextToDocument";
import { addImageToDocument } from "../../use-cases/addImageToDocument";
import { renderDocument } from "../../use-cases/renderDocument";
import { saveDocument } from "../../use-cases/saveDocument";

export class DocumentEditor {
  private renderedContent: string = "";

  constructor(private document: Document, private storage: Persistence) {}

  addText(text: string): void {
    addTextToDocument(this.document, text);
  }

  addImage(path: string): void {
    addImageToDocument(this.document, path);
  }

  render(): string {
    this.renderedContent = renderDocument(this.document);
    return this.renderedContent;
  }

  save(): void {
    saveDocument(this.renderedContent, this.storage);
  }
}

// src/app/index.ts
import { Document } from "../entities/Document";
import { FileStorage } from "../interfaces/storage/FileStorage";
import { DocumentEditor } from "../interfaces/controllers/DocumentEditor";

const document = new Document();
const storage = new FileStorage();
const editor = new DocumentEditor(document, storage);

editor.addText("Hello, Mohit Singh!");
editor.addImage("image_path.png");

const content = editor.render();
console.log("Rendered Document:\n", content);
editor.save();
