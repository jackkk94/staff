import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeasureService } from './services/measure.service';
import { LoggerService } from './services/logger.service';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';
import { ChartsModule } from 'ng2-charts';
import { LocalStorageService } from './services/local-storage.service';
import { UserPhotoComponent } from './components/user-photo/user-photo.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { MaterialModule } from './material-module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AppDatePipe } from './pipes/date.pipe';
import { ControlRequiredComponent } from './components/required/required.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

import { RouterModule } from '@angular/router';
import { TagComponent } from './components/tag/tag.component';
import { FilterByNameComponent } from './components/filters/filter-by-name/filter-by-name.component';
import { DateRangeComponent } from './components/date-range/date-range.component';
import {EditorModule} from 'primeng-lts/editor';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { SelectComponent } from './components/select/select.component';
import {MatTooltipModule} from '@angular/material/tooltip'
import { PaginatorModule } from 'primeng/paginator';

const COMPONENTS = [
  ProgressBarComponent,
  ScatterChartComponent,
  UserPhotoComponent,
  InputTextComponent,
  MultiselectComponent,
  PaginationComponent,
  WrapperComponent,
  ControlRequiredComponent,
  TextboxComponent,
  DatepickerComponent,
  TagComponent,
  FilterByNameComponent,
  DateRangeComponent,
  TextEditorComponent,
  SelectComponent
];

const PIPES = [AppDatePipe];

const DECLARATIONS = [...COMPONENTS, ...PIPES];

const PROVIDERS = [DatePipe, MeasureService, LoggerService, LocalStorageService];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    EditorModule,
    MatTooltipModule,
    PaginatorModule
  ],
  providers: [...PROVIDERS],
  exports: [
    ...DECLARATIONS,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
    EditorModule,
    MatTooltipModule
  ],
  declarations: DECLARATIONS,
})
export class SharedModule {}
