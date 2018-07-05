"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
An uncaught Exception occurred on "main" thread.
    java.lang.RuntimeException: Unable to create application com.tns.NativeScriptApplication: com.tns.NativeScriptException:

Error calling module function

Error calling module function

Error calling module function

Cannot compile /data/data/org.nativescript.MHAmobile/files/app/tns_modules/@angular/core/bundles/core.umd.js

SyntaxError: missing ) after argument list
File: "file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/@angular/core/bundles/core.umd.js, line: 16581, column: 1

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


SyntaxError: missing ) after argument list
File: "<unknown>, line: 1, column: 265

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


SyntaxError: missing ) after argument list
File: "<unknown>, line: 1, column: 265

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


SyntaxError: missing ) after argument list
File: "<unknown>, line: 1, column: 265

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


SyntaxError: missing ) after argument list
File: "<unknown>, line: 1, column: 265

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


at android.app.ActivityThread.handleBindApplication(ActivityThread.java:5406)
at android.app.ActivityThread.-wrap2(ActivityThread.java)
at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1545)
at android.os.Handler.dispatchMessage(Handler.java:102)
at android.os.Looper.loop(Looper.java:154)
at android.app.ActivityThread.main(ActivityThread.java:6119)
at java.lang.reflect.Method.invoke(Native Method)
at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:886)
at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:776)
Caused by: com.tns.NativeScriptException:

Error calling module function

Error calling module function

Error calling module function

Cannot compile /data/data/org.nativescript.MHAmobile/files/app/tns_modules/@angular/core/bundles/core.umd.js

SyntaxError: missing ) after argument list
File: "file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/@angular/core/bundles/core.umd.js, line: 16581, column: 1

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


SyntaxError: missing ) after argument list
File: "<unknown>, line: 1, column: 265

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


SyntaxError: missing ) after argument list
File: "<unknown>, line: 1, column: 265

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


SyntaxError: missing ) after argument list
File: "<unknown>, line: 1, column: 265

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


SyntaxError: missing ) after argument list
File: "<unknown>, line: 1, column: 265

StackTrace:
    Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform-common.js', line: 9, column: 14
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/tns_modules/nativescript-angular/platform.js', line: 2, column: 25
Frame: function:'require', file:'', line: 1, column: 266
Frame: function:'', file:'file:///data/data/org.nativescript.MHAmobile/files/app/main.js', line: 4, column: 18
Frame: function:'require', file:'', line: 1, column: 266


at com.tns.Runtime.runModule(Native Method)
at com.tns.Runtime.runModule(Runtime.java:542)
at com.tns.Runtime.run(Runtime.java:534)
at com.tns.NativeScriptApplication.onCreate(NativeScriptApplication.java:21)
at android.app.Instrumentation.callApplicationOnCreate(Instrumentation.java:1024)
at android.app.ActivityThread.handleBindApplication(ActivityThread.java:5403)
... 8 more
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUVwRiwyREFBd0Q7QUFDeEQsaURBQStDO0FBa0IvQztJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBaEJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCxxQ0FBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsd0NBQThCO2FBQ2pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUztBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBd0tFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuLypcbkFuIHVuY2F1Z2h0IEV4Y2VwdGlvbiBvY2N1cnJlZCBvbiBcIm1haW5cIiB0aHJlYWQuXG4gICAgamF2YS5sYW5nLlJ1bnRpbWVFeGNlcHRpb246IFVuYWJsZSB0byBjcmVhdGUgYXBwbGljYXRpb24gY29tLnRucy5OYXRpdmVTY3JpcHRBcHBsaWNhdGlvbjogY29tLnRucy5OYXRpdmVTY3JpcHRFeGNlcHRpb246XG5cbkVycm9yIGNhbGxpbmcgbW9kdWxlIGZ1bmN0aW9uXG5cbkVycm9yIGNhbGxpbmcgbW9kdWxlIGZ1bmN0aW9uXG5cbkVycm9yIGNhbGxpbmcgbW9kdWxlIGZ1bmN0aW9uXG5cbkNhbm5vdCBjb21waWxlIC9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qc1xuXG5TeW50YXhFcnJvcjogbWlzc2luZyApIGFmdGVyIGFyZ3VtZW50IGxpc3RcbkZpbGU6IFwiZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcywgbGluZTogMTY1ODEsIGNvbHVtbjogMVxuXG5TdGFja1RyYWNlOlxuICAgIEZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC90bnNfbW9kdWxlcy9uYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS1jb21tb24uanMnLCBsaW5lOiA5LCBjb2x1bW46IDE0XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvdG5zX21vZHVsZXMvbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0uanMnLCBsaW5lOiAyLCBjb2x1bW46IDI1XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvbWFpbi5qcycsIGxpbmU6IDQsIGNvbHVtbjogMThcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5cblxuU3ludGF4RXJyb3I6IG1pc3NpbmcgKSBhZnRlciBhcmd1bWVudCBsaXN0XG5GaWxlOiBcIjx1bmtub3duPiwgbGluZTogMSwgY29sdW1uOiAyNjVcblxuU3RhY2tUcmFjZTpcbiAgICBGcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvdG5zX21vZHVsZXMvbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0tY29tbW9uLmpzJywgbGluZTogOSwgY29sdW1uOiAxNFxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLmpzJywgbGluZTogMiwgY29sdW1uOiAyNVxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL21haW4uanMnLCBsaW5lOiA0LCBjb2x1bW46IDE4XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuXG5cblN5bnRheEVycm9yOiBtaXNzaW5nICkgYWZ0ZXIgYXJndW1lbnQgbGlzdFxuRmlsZTogXCI8dW5rbm93bj4sIGxpbmU6IDEsIGNvbHVtbjogMjY1XG5cblN0YWNrVHJhY2U6XG4gICAgRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLWNvbW1vbi5qcycsIGxpbmU6IDksIGNvbHVtbjogMTRcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC90bnNfbW9kdWxlcy9uYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS5qcycsIGxpbmU6IDIsIGNvbHVtbjogMjVcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC9tYWluLmpzJywgbGluZTogNCwgY29sdW1uOiAxOFxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcblxuXG5TeW50YXhFcnJvcjogbWlzc2luZyApIGFmdGVyIGFyZ3VtZW50IGxpc3RcbkZpbGU6IFwiPHVua25vd24+LCBsaW5lOiAxLCBjb2x1bW46IDI2NVxuXG5TdGFja1RyYWNlOlxuICAgIEZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC90bnNfbW9kdWxlcy9uYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS1jb21tb24uanMnLCBsaW5lOiA5LCBjb2x1bW46IDE0XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvdG5zX21vZHVsZXMvbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0uanMnLCBsaW5lOiAyLCBjb2x1bW46IDI1XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvbWFpbi5qcycsIGxpbmU6IDQsIGNvbHVtbjogMThcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5cblxuU3ludGF4RXJyb3I6IG1pc3NpbmcgKSBhZnRlciBhcmd1bWVudCBsaXN0XG5GaWxlOiBcIjx1bmtub3duPiwgbGluZTogMSwgY29sdW1uOiAyNjVcblxuU3RhY2tUcmFjZTpcbiAgICBGcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvdG5zX21vZHVsZXMvbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0tY29tbW9uLmpzJywgbGluZTogOSwgY29sdW1uOiAxNFxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLmpzJywgbGluZTogMiwgY29sdW1uOiAyNVxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL21haW4uanMnLCBsaW5lOiA0LCBjb2x1bW46IDE4XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuXG5cbmF0IGFuZHJvaWQuYXBwLkFjdGl2aXR5VGhyZWFkLmhhbmRsZUJpbmRBcHBsaWNhdGlvbihBY3Rpdml0eVRocmVhZC5qYXZhOjU0MDYpXG5hdCBhbmRyb2lkLmFwcC5BY3Rpdml0eVRocmVhZC4td3JhcDIoQWN0aXZpdHlUaHJlYWQuamF2YSlcbmF0IGFuZHJvaWQuYXBwLkFjdGl2aXR5VGhyZWFkJEguaGFuZGxlTWVzc2FnZShBY3Rpdml0eVRocmVhZC5qYXZhOjE1NDUpXG5hdCBhbmRyb2lkLm9zLkhhbmRsZXIuZGlzcGF0Y2hNZXNzYWdlKEhhbmRsZXIuamF2YToxMDIpXG5hdCBhbmRyb2lkLm9zLkxvb3Blci5sb29wKExvb3Blci5qYXZhOjE1NClcbmF0IGFuZHJvaWQuYXBwLkFjdGl2aXR5VGhyZWFkLm1haW4oQWN0aXZpdHlUaHJlYWQuamF2YTo2MTE5KVxuYXQgamF2YS5sYW5nLnJlZmxlY3QuTWV0aG9kLmludm9rZShOYXRpdmUgTWV0aG9kKVxuYXQgY29tLmFuZHJvaWQuaW50ZXJuYWwub3MuWnlnb3RlSW5pdCRNZXRob2RBbmRBcmdzQ2FsbGVyLnJ1bihaeWdvdGVJbml0LmphdmE6ODg2KVxuYXQgY29tLmFuZHJvaWQuaW50ZXJuYWwub3MuWnlnb3RlSW5pdC5tYWluKFp5Z290ZUluaXQuamF2YTo3NzYpXG5DYXVzZWQgYnk6IGNvbS50bnMuTmF0aXZlU2NyaXB0RXhjZXB0aW9uOlxuXG5FcnJvciBjYWxsaW5nIG1vZHVsZSBmdW5jdGlvblxuXG5FcnJvciBjYWxsaW5nIG1vZHVsZSBmdW5jdGlvblxuXG5FcnJvciBjYWxsaW5nIG1vZHVsZSBmdW5jdGlvblxuXG5DYW5ub3QgY29tcGlsZSAvZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC90bnNfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanNcblxuU3ludGF4RXJyb3I6IG1pc3NpbmcgKSBhZnRlciBhcmd1bWVudCBsaXN0XG5GaWxlOiBcImZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC90bnNfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2J1bmRsZXMvY29yZS51bWQuanMsIGxpbmU6IDE2NTgxLCBjb2x1bW46IDFcblxuU3RhY2tUcmFjZTpcbiAgICBGcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvdG5zX21vZHVsZXMvbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0tY29tbW9uLmpzJywgbGluZTogOSwgY29sdW1uOiAxNFxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLmpzJywgbGluZTogMiwgY29sdW1uOiAyNVxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL21haW4uanMnLCBsaW5lOiA0LCBjb2x1bW46IDE4XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuXG5cblN5bnRheEVycm9yOiBtaXNzaW5nICkgYWZ0ZXIgYXJndW1lbnQgbGlzdFxuRmlsZTogXCI8dW5rbm93bj4sIGxpbmU6IDEsIGNvbHVtbjogMjY1XG5cblN0YWNrVHJhY2U6XG4gICAgRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLWNvbW1vbi5qcycsIGxpbmU6IDksIGNvbHVtbjogMTRcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC90bnNfbW9kdWxlcy9uYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS5qcycsIGxpbmU6IDIsIGNvbHVtbjogMjVcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC9tYWluLmpzJywgbGluZTogNCwgY29sdW1uOiAxOFxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcblxuXG5TeW50YXhFcnJvcjogbWlzc2luZyApIGFmdGVyIGFyZ3VtZW50IGxpc3RcbkZpbGU6IFwiPHVua25vd24+LCBsaW5lOiAxLCBjb2x1bW46IDI2NVxuXG5TdGFja1RyYWNlOlxuICAgIEZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC90bnNfbW9kdWxlcy9uYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS1jb21tb24uanMnLCBsaW5lOiA5LCBjb2x1bW46IDE0XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvdG5zX21vZHVsZXMvbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0uanMnLCBsaW5lOiAyLCBjb2x1bW46IDI1XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvbWFpbi5qcycsIGxpbmU6IDQsIGNvbHVtbjogMThcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5cblxuU3ludGF4RXJyb3I6IG1pc3NpbmcgKSBhZnRlciBhcmd1bWVudCBsaXN0XG5GaWxlOiBcIjx1bmtub3duPiwgbGluZTogMSwgY29sdW1uOiAyNjVcblxuU3RhY2tUcmFjZTpcbiAgICBGcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuRnJhbWU6IGZ1bmN0aW9uOicnLCBmaWxlOidmaWxlOi8vL2RhdGEvZGF0YS9vcmcubmF0aXZlc2NyaXB0Lk1IQW1vYmlsZS9maWxlcy9hcHAvdG5zX21vZHVsZXMvbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0tY29tbW9uLmpzJywgbGluZTogOSwgY29sdW1uOiAxNFxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLmpzJywgbGluZTogMiwgY29sdW1uOiAyNVxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL21haW4uanMnLCBsaW5lOiA0LCBjb2x1bW46IDE4XG5GcmFtZTogZnVuY3Rpb246J3JlcXVpcmUnLCBmaWxlOicnLCBsaW5lOiAxLCBjb2x1bW46IDI2NlxuXG5cblN5bnRheEVycm9yOiBtaXNzaW5nICkgYWZ0ZXIgYXJndW1lbnQgbGlzdFxuRmlsZTogXCI8dW5rbm93bj4sIGxpbmU6IDEsIGNvbHVtbjogMjY1XG5cblN0YWNrVHJhY2U6XG4gICAgRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcbkZyYW1lOiBmdW5jdGlvbjonJywgZmlsZTonZmlsZTovLy9kYXRhL2RhdGEvb3JnLm5hdGl2ZXNjcmlwdC5NSEFtb2JpbGUvZmlsZXMvYXBwL3Ruc19tb2R1bGVzL25hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtLWNvbW1vbi5qcycsIGxpbmU6IDksIGNvbHVtbjogMTRcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC90bnNfbW9kdWxlcy9uYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS5qcycsIGxpbmU6IDIsIGNvbHVtbjogMjVcbkZyYW1lOiBmdW5jdGlvbjoncmVxdWlyZScsIGZpbGU6JycsIGxpbmU6IDEsIGNvbHVtbjogMjY2XG5GcmFtZTogZnVuY3Rpb246JycsIGZpbGU6J2ZpbGU6Ly8vZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuTUhBbW9iaWxlL2ZpbGVzL2FwcC9tYWluLmpzJywgbGluZTogNCwgY29sdW1uOiAxOFxuRnJhbWU6IGZ1bmN0aW9uOidyZXF1aXJlJywgZmlsZTonJywgbGluZTogMSwgY29sdW1uOiAyNjZcblxuXG5hdCBjb20udG5zLlJ1bnRpbWUucnVuTW9kdWxlKE5hdGl2ZSBNZXRob2QpXG5hdCBjb20udG5zLlJ1bnRpbWUucnVuTW9kdWxlKFJ1bnRpbWUuamF2YTo1NDIpXG5hdCBjb20udG5zLlJ1bnRpbWUucnVuKFJ1bnRpbWUuamF2YTo1MzQpXG5hdCBjb20udG5zLk5hdGl2ZVNjcmlwdEFwcGxpY2F0aW9uLm9uQ3JlYXRlKE5hdGl2ZVNjcmlwdEFwcGxpY2F0aW9uLmphdmE6MjEpXG5hdCBhbmRyb2lkLmFwcC5JbnN0cnVtZW50YXRpb24uY2FsbEFwcGxpY2F0aW9uT25DcmVhdGUoSW5zdHJ1bWVudGF0aW9uLmphdmE6MTAyNClcbmF0IGFuZHJvaWQuYXBwLkFjdGl2aXR5VGhyZWFkLmhhbmRsZUJpbmRBcHBsaWNhdGlvbihBY3Rpdml0eVRocmVhZC5qYXZhOjU0MDMpXG4uLi4gOCBtb3JlXG4qL1xuIl19