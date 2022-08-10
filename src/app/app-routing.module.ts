import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { HistoryComponent } from './pages/history/history.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PlanComponent } from './pages/plan/plan.component';
import { ExerciseListComponent } from './pages/exercise-list/exercise-list.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
// settings components
import { SettingsComponent } from './pages/settings/settings.component';
import { SettingsMainPageComponent } from './pages/settings/settings-main-page/settings-main-page.component';
import { SettingsGeneralComponent } from './pages/settings/settings-general/settings-general.component';
import { SettingsTimerComponent } from './pages/settings/settings-timer/settings-timer.component';
import { SettingsThemeComponent } from './pages/settings/settings-theme/settings-theme.component';
import { SettingsUnitConversionsComponent } from './pages/settings/settings-unit-conversions/settings-unit-conversions.component';
import { SettingsWeightsComponent } from './pages/settings/settings-weights/settings-weights.component';
import { SettingsDownloadDataComponent } from './pages/settings/settings-download-data/settings-download-data.component';
import { SettingsImportDataComponent } from './pages/settings/settings-import-data/settings-import-data.component';
import { SettingsSetsComponent } from './pages/settings/settings-sets/settings-sets.component';
import { PersonalDataMainPageComponent } from './pages/personal-data/personal-data-main-page/personal-data-main-page.component';
import { PersonalDataWeightComponent } from './pages/personal-data/personal-data-weight/personal-data-weight.component';
import { PersonalDataHeightComponent } from './pages/personal-data/personal-data-height/personal-data-height.component';
import { PersonalDataGenderComponent } from './pages/personal-data/personal-data-gender/personal-data-gender.component';
import { PersonalDataBirthdayComponent } from './pages/personal-data/personal-data-birthday/personal-data-birthday.component';
import { UpdatePersonalDataComponent } from './pages/personal-data/update-personal-data/update-personal-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'information', component: PersonalDataComponent, children: [
      { path: '', component: PersonalDataMainPageComponent },
      { path: 'update', component: UpdatePersonalDataComponent },
      { path: 'weight', component: PersonalDataWeightComponent },
      { path: 'height', component: PersonalDataHeightComponent },
      { path: 'gender', component: PersonalDataGenderComponent },
      { path: 'birthday', component: PersonalDataBirthdayComponent },
    ]
  },
  { path: 'history', component: HistoryComponent },
  { path: 'history/workout', component: WorkoutComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'plans/plan', component: PlanComponent },
  { path: 'exercises', component: ExerciseListComponent },
  { path: 'exercises/exercise', component: ExerciseComponent },
  {
    path: 'settings', component: SettingsComponent, children: [
      { path: '', component: SettingsMainPageComponent },
      { path: 'general', component: SettingsGeneralComponent },
      { path: 'timer', component: SettingsTimerComponent },
      { path: 'weights', component: SettingsWeightsComponent },
      { path: 'set_information', component: SettingsSetsComponent },
      { path: 'theme', component: SettingsThemeComponent },
      { path: 'unit_conversions', component: SettingsUnitConversionsComponent },
      { path: 'download_data', component: SettingsDownloadDataComponent },
      { path: 'import_data', component: SettingsImportDataComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
