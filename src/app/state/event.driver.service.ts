import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "./product.state";

@Injectable({providedIn:"root"})
export class EventDriverService{
    sourceEventSujet:Subject<ActionEvent> = new Subject<ActionEvent>();
    sourceEventSujetObservable = this.sourceEventSujet.asObservable();

    publishEvent(event:ActionEvent){
        this.sourceEventSujet.next(event);
    }


}