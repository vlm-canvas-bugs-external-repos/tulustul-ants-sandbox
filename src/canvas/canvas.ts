import { Application } from "pixi.js";

import { Camera } from ".";

export class Canvas {
  app: Application;
  camera: Camera;

  constructor(view: HTMLCanvasElement) {
    this.app = new Application({
      view,
      resizeTo: window,
      backgroundColor: 0x111111,
    });
    window.__PIXI_APP__ = this.app
    this.camera = new Camera(this);
  }
}
