import { MatchTableComponent } from './match/match-table/match-table.component';
import { EventGroupComponent } from './match/event-group/event-group.component';
import { MatchViewComponent } from './match/match-view/match-view.component';
import { TimelineComponent } from './match/timeline/timeline.component';
import { TemplateComponent } from './template/template.component';
import { EventComponent } from './match/event/event.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MatchService } from 'services/match.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TommssPipe } from '../pipes/tommss.pipe';

@NgModule({
    declarations: [
        MatchTableComponent,
        TemplateComponent,
        MatchViewComponent,
        TimelineComponent,
        EventComponent,
        EventGroupComponent,
        TommssPipe,
    ],
    imports: [CommonModule, AdminRoutingModule],
    providers: [MatchService],
})
export class AdminModule {}
