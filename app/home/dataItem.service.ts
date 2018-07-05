import { Injectable } from '@angular/core';
import { DATAITEMS } from "./mock-dataItems";
import { DataItem } from "./dataItem";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

@Injectable()
export class DataItemService {
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    getDataItems(): DataItem[] {
        return DATAITEMS;
    }
}
