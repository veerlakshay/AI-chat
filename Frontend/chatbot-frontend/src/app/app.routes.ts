import { Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { SportComponent } from './pages/sport/sport.component';
import { ImageComponent } from './pages/image/image.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
    },
    {
        path: 'chat',
        component: ChatComponent,
    },
    {
        path: 'sport',
        component: SportComponent,
    }, {
        path: 'image',
        component: ImageComponent,
    }
];
