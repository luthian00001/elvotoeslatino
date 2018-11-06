import { Route } from '@angular/router';
import { AboutEducadosComponent } from './about-educados/about-educados.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { sites } from './constants/sites';
import { IndexComponent } from './index/index.component';
import { ServicesComponent } from './services/services.component';

export let routes: Route[] = [
  { path: '', component: IndexComponent },
  { path: 'elvotoeslatino', data: { site: sites.elVoto }, children: [
    { path: 'candidates', component: CandidatesComponent },
    { path: 'services', component: ServicesComponent }
  ]},
  { path: 'educados', data: { site: sites.educados }, children: [
    { path: 'about', component: AboutEducadosComponent }
  ]}
];
