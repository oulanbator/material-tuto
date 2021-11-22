import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {FormsModule} from "@angular/forms";
import { MenusComponent } from './menus/menus.component';
import { ListsComponent } from './lists/lists.component';
import { GridsComponent } from './grids/grids.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';
import { SteppersComponent } from './steppers/steppers.component';
import { InputsComponent } from './inputs/inputs.component';
import { SelectsComponent } from './selects/selects.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import {CustomSnackBarComponent, SnackbarComponent} from './snackbar/snackbar.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenusComponent,
    ListsComponent,
    GridsComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    SteppersComponent,
    InputsComponent,
    SelectsComponent,
    AutocompleteComponent,
    CheckboxRadioComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    CustomSnackBarComponent,
    DialogsComponent,
    DialogExampleComponent,
    DataTableComponent
  ],
  entryComponents: [CustomSnackBarComponent, DialogExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
