import { workerData } from "worker_threads";

class TextProcessor {
  constructor(text) {
    this.text = text;
    this.wordCount = text.split();
  }
}
