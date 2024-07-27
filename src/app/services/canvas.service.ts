import { Canvas, ICanvas } from './../interfaces/canvas';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {
  
   _canvasInfo: ICanvas = null;
  $canvasInfo = new BehaviorSubject<ICanvas>(null);
  $closeCanvas = new BehaviorSubject<boolean>(false);

  updateCanvasInfo(canvasInfo:Canvas) {
    this._canvasInfo = canvasInfo;
    this.$canvasInfo.next(this._canvasInfo);
  }

  closeCanvas(status:boolean) {
    this.$closeCanvas.next(status);
  }

}
