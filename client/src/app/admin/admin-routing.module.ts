import { MatchTableComponent } from './match/match-table/match-table.component';
import { MatchViewComponent } from './match/match-view/match-view.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: MatchTableComponent,
    },
    {
        path: ':id',
        component: MatchViewComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
