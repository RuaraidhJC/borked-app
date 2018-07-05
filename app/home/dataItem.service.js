"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_dataItems_1 = require("./mock-dataItems");
var DataItemService = /** @class */ (function () {
    function DataItemService() {
        this._words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    }
    DataItemService.prototype.getDataItems = function () {
        return mock_dataItems_1.DATAITEMS;
    };
    DataItemService = __decorate([
        core_1.Injectable()
    ], DataItemService);
    return DataItemService;
}());
exports.DataItemService = DataItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUl0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFJdGVtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsbURBQTZDO0FBSzdDO0lBREE7UUFFWSxXQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUtyRyxDQUFDO0lBSEcsc0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQywwQkFBUyxDQUFDO0lBQ3JCLENBQUM7SUFMUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7T0FDQSxlQUFlLENBTTNCO0lBQUQsc0JBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERBVEFJVEVNUyB9IGZyb20gXCIuL21vY2stZGF0YUl0ZW1zXCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFJdGVtU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfd29yZHMgPSBbXCJPbmVcIiwgXCJUd29cIiwgXCJUaHJlZVwiLCBcIkZvdXJcIiwgXCJGaXZlXCIsIFwiU2l4XCIsIFwiU2V2ZW5cIiwgXCJFaWdodFwiLCBcIk5pbmVcIiwgXCJUZW5cIl07XG5cbiAgICBnZXREYXRhSXRlbXMoKTogRGF0YUl0ZW1bXSB7XG4gICAgICAgIHJldHVybiBEQVRBSVRFTVM7XG4gICAgfVxufVxuIl19