import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
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
