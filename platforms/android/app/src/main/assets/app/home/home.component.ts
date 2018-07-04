import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import {Injectable} from "@angular/core";
import {Input} from "@angular/core";

class DataItem {
    private static count = 0;
    public id: number;
    constructor(public name: string, public isHeader: boolean) {
        this.id = DataItem.count++;
    }
}

@Component({
    selector: "header-component",
    template: `<Label [text]='"HEADER: " + data.name'></Label>`
})
export class HeaderComponent {
    @Input() data: DataItem;
}

@Component({
    selector: "item-component",
    template: `<Label [text]='"ITEM: " + data.name'></Label>`
})
export class ItemComponent {
    @Input() data: DataItem;
}

@Injectable()
export class DataService {
    public getItems(): DataItem[] {
        const result = [];
        for (let headerIndex = 0; headerIndex < 10; headerIndex++) {
            result.push(new DataItem("Header " + headerIndex, true));

            for (let i = 1; i < 10; i++) {
                result.push(new DataItem(`item ${headerIndex}.${i}`, false));
            }
        }
        return result;
    }
}

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public myItems: Array<DataItem>;

    public templateSelector = (item: DataItem, index: number, items: any) => {
        return item.isHeader ? "header" : "item";
    }

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.myItems = this.dataService.getItems();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
