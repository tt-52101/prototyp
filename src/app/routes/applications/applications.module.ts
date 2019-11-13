import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ApplicationRoutingModule } from './application-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { CalendarBasicComponent } from './calendar/basic/basic.component';
import { CalendarListViewComponent } from './calendar/list-view/list-view.component';
import { CalendarEventsComponent } from './calendar/events/events.component';

@NgModule({
  declarations: [ArticlesComponent, CalendarBasicComponent, CalendarListViewComponent, CalendarEventsComponent],
  imports: [SharedModule, ApplicationRoutingModule],
})
export class ApplicationsModule {}
