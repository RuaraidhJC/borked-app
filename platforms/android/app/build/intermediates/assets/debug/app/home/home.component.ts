import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RadListView } from "nativescript-ui-listview";
import { Injectable } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { DataItemService } from "~/home/dataItem.service";
import { DataItem } from "~/home/dataItem";

@Component({
    selector: "tk-listview-getting-started",
    moduleId: module.id,
    providers: [DataItemService],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
