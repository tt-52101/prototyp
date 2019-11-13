import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { CalendarBasicComponent } from './calendar/basic/basic.component';
import { CalendarListViewComponent } from './calendar/list-view/list-view.component';
import { CalendarEventsComponent } from './calendar/events/events.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  {
    path: 'calendar',
    children: [
      { path: 'basic', component: CalendarBasicComponent },
      { path: 'list', component: CalendarListViewComponent },
      { path: 'events', component: CalendarEventsComponent },
    ],
  },
  // {
  //   path: 'calendar',
  //   children: [
  //     { path: 'basic', component: CalendarBasicComponent },
  //     { path: 'list', component: CalendarListViewComponent },
  //     { path: 'events', component: CalendarEventsComponent },
  //   ],
  // },
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
