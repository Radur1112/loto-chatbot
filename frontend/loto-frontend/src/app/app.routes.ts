import { Routes } from '@angular/router';
import { ChatIndexComponent } from './chat/chat-index/chat-index.component';

export const routes: Routes = [
  { path: 'chat', component: ChatIndexComponent },

  { path:'', redirectTo:'chat', pathMatch:'full'},
  { path:'**', redirectTo:'chat', pathMatch:'full'},
];
