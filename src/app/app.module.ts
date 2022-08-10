import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { GoBackComponent } from './components/go-back/go-back.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RadioCardComponent } from './components/forms/radio-card/radio-card.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { LastWorkoutComponent } from './components/last-workout/last-workout.component';
import { HistoryComponent } from './pages/history/history.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import { MainButtonComponent } from './components/buttons/main-button/main-button.component';
import { GhostButtonComponent } from './components/buttons/ghost-button/ghost-button.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { HeaderComponent } from './components/header/header.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TransparentButtonComponent } from './components/buttons/transparent-button/transparent-button.component';
import { RadioBarComponent } from './components/forms/radio-bar/radio-bar.component';
import { WeightAdderComponent } from './components/forms/weight-adder/weight-adder.component';
import { WeightAdderItemComponent } from './components/forms/weight-adder/weight-adder-item/weight-adder-item.component';
import { NumberInputComponent } from './components/forms/number-input/number-input.component';
import { SettingsRowComponent } from './components/data-row/data-row.component';
import { SettingsUnitConversionsComponent } from './pages/settings/settings-unit-conversions/settings-unit-conversions.component';
import { SettingsWeightsComponent } from './pages/settings/settings-weights/settings-weights.component';
import { SettingsDownloadDataComponent } from './pages/settings/settings-download-data/settings-download-data.component';
import { SettingsImportDataComponent } from './pages/settings/settings-import-data/settings-import-data.component';
import { SettingsGeneralComponent } from './pages/settings/settings-general/settings-general.component';
import { SettingsMainPageComponent } from './pages/settings/settings-main-page/settings-main-page.component';
import { SettingsTimerComponent } from './pages/settings/settings-timer/settings-timer.component';
import { SettingsThemeComponent } from './pages/settings/settings-theme/settings-theme.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsSetsComponent } from './pages/settings/settings-sets/settings-sets.component';
import { TimerComponent } from './components/timer/timer.component';
import { FaIconComponent } from './components/icons/fa-icon/fa-icon.component';
import { BiIconComponent } from './components/icons/bi-icon/bi-icon.component';
import { PersonalDataWeightComponent } from './pages/personal-data/personal-data-weight/personal-data-weight.component';
import { PersonalDataHeightComponent } from './pages/personal-data/personal-data-height/personal-data-height.component';
import { PersonalDataMainPageComponent } from './pages/personal-data/personal-data-main-page/personal-data-main-page.component';
import { WeightAdderFormComponent } from './components/forms/weight-adder/weight-adder-form/weight-adder-form.component';
import { PersonalDataDisplayComponent } from './components/personal-data-display/personal-data-display.component';
import { PersonalDataGenderComponent } from './pages/personal-data/personal-data-gender/personal-data-gender.component';
import { PersonalDataBirthdayComponent } from './pages/personal-data/personal-data-birthday/personal-data-birthday.component';
import { InfoUpdateFormComponent } from './components/forms/info-update-form/info-update-form.component';
import { DateInputComponent } from './components/forms/date-input/date-input.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ModalComponent } from './components/modal/modal.component';
import { UpdatePersonalDataComponent } from './pages/personal-data/update-personal-data/update-personal-data.component';
import { WeightInputComponent } from './components/forms/weight-input/weight-input.component';
import { FullPageModalComponent } from './components/modal/full-page-modal/full-page-modal.component';
import { CheckmarkSpinnerComponent } from './components/spinners/checkmark-spinner/checkmark-spinner.component';
import { MultistepFormComponent } from './components/forms/multistep-form/multistep-form.component';
import { InitialDataFormComponent } from './components/forms/initial-data-form/initial-data-form.component';
import { HeightInputComponent } from './components/forms/height-input/height-input.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { SelectComponent } from './components/forms/select/select.component';
import { SimpleSpinnerComponent } from './components/spinners/simple-spinner/simple-spinner.component';
import { LogoComponent } from './components/logo/logo.component';
import { DataRowExpandableComponent } from './components/data-row-expandable/data-row-expandable.component';
import { BmiScaleComponent } from './components/bmi-scale/bmi-scale.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GoBackComponent,
    SettingsComponent,
    RadioCardComponent,
    PersonalDataComponent,
    LastWorkoutComponent,
    HistoryComponent,
    PlanListComponent,
    MainButtonComponent,
    GhostButtonComponent,
    PlanCardComponent,
    HeaderComponent,
    PlansComponent,
    PageHeaderComponent,
    TransparentButtonComponent,
    RadioBarComponent,
    WeightAdderComponent,
    WeightAdderItemComponent,
    NumberInputComponent,
    SettingsRowComponent,
    SettingsUnitConversionsComponent,
    SettingsWeightsComponent,
    SettingsDownloadDataComponent,
    SettingsImportDataComponent,
    SettingsGeneralComponent,
    SettingsMainPageComponent,
    SettingsTimerComponent,
    SettingsThemeComponent,
    AboutComponent,
    SettingsSetsComponent,
    TimerComponent,
    FaIconComponent,
    BiIconComponent,
    PersonalDataWeightComponent,
    PersonalDataHeightComponent,
    PersonalDataMainPageComponent,
    WeightAdderFormComponent,
    PersonalDataDisplayComponent,
    PersonalDataGenderComponent,
    PersonalDataBirthdayComponent,
    InfoUpdateFormComponent,
    DateInputComponent,
    CalendarComponent,
    ModalComponent,
    UpdatePersonalDataComponent,
    WeightInputComponent,
    FullPageModalComponent,
    CheckmarkSpinnerComponent,
    MultistepFormComponent,
    InitialDataFormComponent,
    HeightInputComponent,
    InfoBoxComponent,
    SelectComponent,
    SimpleSpinnerComponent,
    LogoComponent,
    DataRowExpandableComponent,
    BmiScaleComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
