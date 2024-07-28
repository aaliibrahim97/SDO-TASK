import { Canvas, ICanvas } from "./../interfaces/canvas";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CanvasService {
  _canvasInfo: ICanvas = null;

  /**
   * @description contains the embedded employee information
   */
  $canvasInfo = new BehaviorSubject<ICanvas>(null);

  /**
   * @description to notify the actions after the canvas is closed
   */
  $closeCanvas = new BehaviorSubject<boolean>(false);

  /**
   * @description to update the employee information
   * @param {Canvas} canvasInfo
   */
  updateCanvasInfo(canvasInfo: Canvas) {
    this._canvasInfo = canvasInfo;
    this.$canvasInfo.next(this._canvasInfo);
  }

  /**
   * @description close the canvas
   * @param {boolean} status
   */
  closeCanvas(status: boolean) {
    this.$closeCanvas.next(status);
  }
}
