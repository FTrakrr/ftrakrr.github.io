import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePage } from './pages/home/home.component';
import { GoBackComponent } from './components/buttons/go-back/go-back.component';
import { SettingsPage } from './pages/settings/settings.component';
import { RadioCardComponent } from './components/forms/radio-card/radio-card.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { LastWorkoutComponent } from './components/last-workout/last-workout.component';
import { HistoryPage } from './pages/history/history.component';
import { PlanListComponent } from './components/plan-list/plan-list.component';
import { MainButtonComponent } from './components/buttons/main-button/main-button.component';
import { GhostButtonComponent } from './components/buttons/ghost-button/ghost-button.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { HeaderComponent } from './components/header/header.component';
import { PlansPage } from './pages/plans/plans.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TransparentButtonComponent } from './components/buttons/transparent-button/transparent-button.component';
import { RadioBarComponent } from './components/forms/radio-bar/radio-bar.component';
import { WeightAdderComponent } from './components/forms/weight-adder/weight-adder.component';
import { WeightAdderItemComponent } from './components/forms/weight-adder/weight-adder-item/weight-adder-item.component';
import { NumberInputComponent } from './components/forms/inputs/number-input/number-input.component';
import { SettingsRowComponent } from './components/data-row/data-row.component';
import { SettingsUnitConversionsPage } from './pages/settings/settings-unit-conversions/settings-unit-conversions.component';
import { SettingsWeightsPage } from './pages/settings/settings-weights/settings-weights.component';
import { SettingsDownloadDataPage } from './pages/settings/settings-download-data/settings-download-data.component';
import { SettingsImportDataPage } from './pages/settings/settings-import-data/settings-import-data.component';
import { SettingsGeneralPage } from './pages/settings/settings-general/settings-general.component';
import { SettingsMainPagePage } from './pages/settings/settings-main-page/settings-main-page.component';
import { SettingsTimerPage } from './pages/settings/settings-timer/settings-timer.component';
import { SettingsThemePage } from './pages/settings/settings-theme/settings-theme.component';
import { AboutPage } from './pages/about/about.component';
import { SettingsSetsPage } from './pages/settings/settings-sets/settings-sets.component';
import { TimerComponent } from './components/timer/timer.component';
import { FaIconComponent } from './components/icons/fa-icon/fa-icon.component';
import { BiIconComponent } from './components/icons/bi-icon/bi-icon.component';
import { PersonalDataWeightComponent } from './pages/personal-data/personal-data-weight/personal-data-weight.component';
import { PersonalDataHeightComponent } from './pages/personal-data/personal-data-height/personal-data-height.component';
import { PersonalDataMainPageComponent } from './pages/personal-data/personal-data-main-page/personal-data-main-page.component';
import { WeightAdderFormComponent } from './components/forms/weight-adder/weight-adder-form/weight-adder-form.component';
import { InfoUpdateFormComponent } from './components/forms/info-update-form/info-update-form.component';
import { DateInputComponent } from './components/forms/inputs/date-input/date-input.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ModalComponent } from './components/modal/modal.component';
import { UpdatePersonalDataComponent } from './pages/personal-data/update-personal-data/update-personal-data.component';
import { WeightInputComponent } from './components/forms/inputs/weight-input/weight-input.component';
import { FullPageModalComponent } from './components/modal/full-page-modal/full-page-modal.component';
import { CheckmarkSpinnerComponent } from './components/spinners/checkmark-spinner/checkmark-spinner.component';
import { MultistepFormComponent } from './components/forms/multistep-form/multistep-form.component';
import { InitialDataFormComponent } from './components/forms/initial-data-form/initial-data-form.component';
import { HeightInputComponent } from './components/forms/inputs/height-input/height-input.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { SelectComponent } from './components/forms/select/select.component';
import { SimpleSpinnerComponent } from './components/spinners/simple-spinner/simple-spinner.component';
import { LogoComponent } from './components/logo/logo.component';
import { DataRowExpandableComponent } from './components/data-row-expandable/data-row-expandable.component';
import { BmiScaleComponent } from './components/bmi-scale/bmi-scale.component';
import { PlansMainPagePage } from './pages/plans/plans-main-page/plans-main-page.component';
import { PlansPlanPage } from './pages/plans/plans-plan/plans-plan.component';
import { PlansEditPage } from './pages/plans/plans-edit/plans-edit.component';
import { PlansCreatePage } from './pages/plans/plans-create/plans-create.component';
import { ExercisesMainPagePage } from './pages/exercises/exercises-main-page/exercises-main-page.component';
import { ExercisesPage } from './pages/exercises/exercises.component';
import { ExercisesCreatePage } from './pages/exercises/exercises-create/exercises-create.component';
import { ExercisesEditPage } from './pages/exercises/exercises-edit/exercises-edit.component';
import { ExercisesExercisePage } from './pages/exercises/exercises-exercise/exercises-exercise.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { BarScaleComponent } from './components/internal/bar-scale/bar-scale.component';
import { InputWithUnitComponent } from './components/internal/input-with-unit/input-with-unit.component';
import { LengthInputComponent } from './components/forms/inputs/length-input/length-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePage,
    GoBackComponent,
    SettingsPage,
    RadioCardComponent,
    PersonalDataComponent,
    LastWorkoutComponent,
    HistoryPage,
    PlanListComponent,
    MainButtonComponent,
    GhostButtonComponent,
    PlanCardComponent,
    HeaderComponent,
    PlansPage,
    PageHeaderComponent,
    TransparentButtonComponent,
    RadioBarComponent,
    WeightAdderComponent,
    WeightAdderItemComponent,
    NumberInputComponent,
    SettingsRowComponent,
    SettingsUnitConversionsPage,
    SettingsWeightsPage,
    SettingsDownloadDataPage,
    SettingsImportDataPage,
    SettingsGeneralPage,
    SettingsMainPagePage,
    SettingsTimerPage,
    SettingsThemePage,
    AboutPage,
    SettingsSetsPage,
    TimerComponent,
    FaIconComponent,
    BiIconComponent,
    PersonalDataWeightComponent,
    PersonalDataHeightComponent,
    PersonalDataMainPageComponent,
    WeightAdderFormComponent,
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
    PlansMainPagePage,
    PlansPlanPage,
    PlansEditPage,
    PlansCreatePage,
    ExercisesMainPagePage,
    ExercisesPage,
    ExercisesCreatePage,
    ExercisesEditPage,
    ExercisesExercisePage,
    CreateCardComponent,
    ExerciseCardComponent,
    BarScaleComponent,
    InputWithUnitComponent,
    LengthInputComponent,
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
