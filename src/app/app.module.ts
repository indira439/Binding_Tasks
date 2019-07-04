import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './Scenario1/component1/component1.component';
import { Component2Component } from './Scenario2/component2/component2.component';
import { from } from 'rxjs';
import { ParentcompComponent } from './Scenario3/parentcomp/parentcomp.component';
import { ChildcompComponent } from './Scenario3/childcomp/childcomp.component';
import { ParntcompComponent } from './Scenario4/parntcomp/parntcomp.component';
import { ChildcompontComponent } from './Scenario4/childcompont/childcompont.component';
import { Comp1Component } from './Scenario5/comp1/comp1.component';
import { Comp2Component } from './Scenario5/comp2/comp2.component';
import { Comp3Component } from './Scenario5/comp3/comp3.component';
import { ParentComponent } from './Scenario6/parent/parent.component';
import { Sibling1Component } from './Scenario6/sibling1/sibling1.component';
import { Sibling2Component } from './Scenario6/sibling2/sibling2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    ParentcompComponent,
    ChildcompComponent,
    ParntcompComponent,
    ChildcompontComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ParentComponent,
    Sibling1Component,
    Sibling2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
