"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var DataItem = /** @class */ (function () {
    function DataItem(name, isHeader) {
        this.name = name;
        this.isHeader = isHeader;
        this.id = DataItem.count++;
    }
    DataItem.count = 0;
    return DataItem;
}());
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    __decorate([
        core_3.Input(),
        __metadata("design:type", DataItem)
    ], HeaderComponent.prototype, "data", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "header-component",
            template: "<Label [text]='\"HEADER: \" + data.name'></Label>"
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    __decorate([
        core_3.Input(),
        __metadata("design:type", DataItem)
    ], ItemComponent.prototype, "data", void 0);
    ItemComponent = __decorate([
        core_1.Component({
            selector: "item-component",
            template: "<Label [text]='\"ITEM: \" + data.name'></Label>"
        })
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getItems = function () {
        var result = [];
        for (var headerIndex = 0; headerIndex < 10; headerIndex++) {
            result.push(new DataItem("Header " + headerIndex, true));
            for (var i = 1; i < 10; i++) {
                result.push(new DataItem("item " + headerIndex + "." + i, false));
            }
        }
        return result;
    };
    DataService = __decorate([
        core_2.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.templateSelector = function (item, index, items) {
            return item.isHeader ? "header" : "item";
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.myItems = this.dataService.getItems();
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [DataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsc0NBQXlDO0FBQ3pDLHNDQUFvQztBQUVwQztJQUdJLGtCQUFtQixJQUFZLEVBQVMsUUFBaUI7UUFBdEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDckQsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUpjLGNBQUssR0FBRyxDQUFDLENBQUM7SUFLN0IsZUFBQztDQUFBLEFBTkQsSUFNQztBQU1EO0lBQUE7SUFFQSxDQUFDO0lBRFk7UUFBUixZQUFLLEVBQUU7a0NBQU8sUUFBUTtpREFBQztJQURmLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLG1EQUFpRDtTQUM5RCxDQUFDO09BQ1csZUFBZSxDQUUzQjtJQUFELHNCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksMENBQWU7QUFRNUI7SUFBQTtJQUVBLENBQUM7SUFEWTtRQUFSLFlBQUssRUFBRTtrQ0FBTyxRQUFROytDQUFDO0lBRGYsYUFBYTtRQUp6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsaURBQStDO1NBQzVELENBQUM7T0FDVyxhQUFhLENBRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSxzQ0FBYTtBQUsxQjtJQUFBO0lBWUEsQ0FBQztJQVhVLDhCQUFRLEdBQWY7UUFDSSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxFQUFFLFdBQVcsR0FBRyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQztZQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUV6RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVEsV0FBVyxTQUFJLENBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBWFEsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQVl2QjtJQUFELGtCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksa0NBQVc7QUFtQnhCO0lBT0ksdUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnJDLHFCQUFnQixHQUFHLFVBQUMsSUFBYyxFQUFFLEtBQWEsRUFBRSxLQUFVO1lBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM3QyxDQUFDLENBQUE7SUFHRCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWpCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQVFtQyxXQUFXO09BUG5DLGFBQWEsQ0FrQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmNsYXNzIERhdGFJdGVtIHtcbiAgICBwcml2YXRlIHN0YXRpYyBjb3VudCA9IDA7XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGlzSGVhZGVyOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaWQgPSBEYXRhSXRlbS5jb3VudCsrO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaGVhZGVyLWNvbXBvbmVudFwiLFxuICAgIHRlbXBsYXRlOiBgPExhYmVsIFt0ZXh0XT0nXCJIRUFERVI6IFwiICsgZGF0YS5uYW1lJz48L0xhYmVsPmBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBkYXRhOiBEYXRhSXRlbTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiaXRlbS1jb21wb25lbnRcIixcbiAgICB0ZW1wbGF0ZTogYDxMYWJlbCBbdGV4dF09J1wiSVRFTTogXCIgKyBkYXRhLm5hbWUnPjwvTGFiZWw+YFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBkYXRhOiBEYXRhSXRlbTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcbiAgICBwdWJsaWMgZ2V0SXRlbXMoKTogRGF0YUl0ZW1bXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBoZWFkZXJJbmRleCA9IDA7IGhlYWRlckluZGV4IDwgMTA7IGhlYWRlckluZGV4KyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBEYXRhSXRlbShcIkhlYWRlciBcIiArIGhlYWRlckluZGV4LCB0cnVlKSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBEYXRhSXRlbShgaXRlbSAke2hlYWRlckluZGV4fS4ke2l9YCwgZmFsc2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIG15SXRlbXM6IEFycmF5PERhdGFJdGVtPjtcblxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNlbGVjdG9yID0gKGl0ZW06IERhdGFJdGVtLCBpbmRleDogbnVtYmVyLCBpdGVtczogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLmlzSGVhZGVyID8gXCJoZWFkZXJcIiA6IFwiaXRlbVwiO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubXlJdGVtcyA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG4iXX0=