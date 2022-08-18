import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { HomePage } from './pages/home/home.component';
import { AboutPage } from './pages/about/about.component';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { HistoryPage } from './pages/history/history.component';
// settings components
import { SettingsPage } from './pages/settings/settings.component';
import { SettingsMainPagePage } from './pages/settings/settings-main-page/settings-main-page.component';
import { SettingsGeneralPage } from './pages/settings/settings-general/settings-general.component';
import { SettingsTimerPage } from './pages/settings/settings-timer/settings-timer.component';
import { SettingsThemePage } from './pages/settings/settings-theme/settings-theme.component';
import { SettingsUnitConversionsPage } from './pages/settings/settings-unit-conversions/settings-unit-conversions.component';
import { SettingsWeightsPage } from './pages/settings/settings-weights/settings-weights.component';
import { SettingsDownloadDataPage } from './pages/settings/settings-download-data/settings-download-data.component';
import { SettingsImportDataPage } from './pages/settings/settings-import-data/settings-import-data.component';
import { SettingsSetsPage } from './pages/settings/settings-sets/settings-sets.component';
// personal data components
import { PersonalDataMainPageComponent } from './pages/personal-data/personal-data-main-page/personal-data-main-page.component';
import { PersonalDataWeightComponent } from './pages/personal-data/personal-data-weight/personal-data-weight.component';
import { PersonalDataHeightComponent } from './pages/personal-data/personal-data-height/personal-data-height.component';
import { UpdatePersonalDataComponent } from './pages/personal-data/update-personal-data/update-personal-data.component';
// plans components
import { PlansPage } from './pages/plans/plans.component';
import { PlansMainPagePage } from './pages/plans/plans-main-page/plans-main-page.component';
import { PlansPlanPage } from './pages/plans/plans-plan/plans-plan.component';
import { PlansEditPage } from './pages/plans/plans-edit/plans-edit.component';
import { PlansCreatePage } from './pages/plans/plans-create/plans-create.component';
// exercise components
import { ExercisesPage } from './pages/exercises/exercises.component';
import { ExercisesMainPagePage } from './pages/exercises/exercises-main-page/exercises-main-page.component';
import { ExercisesExercisePage } from './pages/exercises/exercises-exercise/exercises-exercise.component';
import { ExercisesEditPage } from './pages/exercises/exercises-edit/exercises-edit.component';
import { ExercisesCreatePage } from './pages/exercises/exercises-create/exercises-create.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  {
    path: 'information', component: PersonalDataComponent, children: [
      { path: '', component: PersonalDataMainPageComponent },
      { path: 'update', component: UpdatePersonalDataComponent },
      { path: 'weight', component: PersonalDataWeightComponent },
      { path: 'height', component: PersonalDataHeightComponent },
    ]
  },
  { path: 'history', component: HistoryPage },
  {
    path: 'plans', component: PlansPage, children: [
      { path: '', component: PlansMainPagePage },
      { path: 'plan', component: PlansPlanPage },
      { path: 'edit', component: PlansEditPage },
      { path: 'create', component: PlansCreatePage },
    ]
  },
  {
    path: 'exercises', component: ExercisesPage, children: [
      { path: '', component: ExercisesMainPagePage },
      { path: 'exercise', component: ExercisesExercisePage },
      { path: 'edit', component: ExercisesEditPage },
      { path: 'create', component: ExercisesCreatePage },
    ]
  },
  {
    path: 'settings', component: SettingsPage, children: [
      { path: '', component: SettingsMainPagePage },
      { path: 'general', component: SettingsGeneralPage },
      { path: 'timer', component: SettingsTimerPage },
      { path: 'weights', component: SettingsWeightsPage },
      { path: 'set_information', component: SettingsSetsPage },
      { path: 'theme', component: SettingsThemePage },
      { path: 'unit_conversions', component: SettingsUnitConversionsPage },
      { path: 'download_data', component: SettingsDownloadDataPage },
      { path: 'import_data', component: SettingsImportDataPage },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
