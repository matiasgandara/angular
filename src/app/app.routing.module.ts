import{ Routes, RouterModule} from '@angular/router';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaAboutComponent } from './pelicula-about/pelicula-about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path : '',
        redirectTo: 'peliculas',
        pathMatch: 'full'
    },
    { 
        path : 'peliculas',
        component: PeliculaListComponent
    },
    { 
        path : 'about', 
        component: PeliculaAboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule{ }