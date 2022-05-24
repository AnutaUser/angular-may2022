import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IEpisode} from "../../interfaces";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<IEpisode> {

  constructor(private episodeService: EpisodeService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisode> | Promise<IEpisode> | IEpisode {
    const episode = this.router.getCurrentNavigation()?.extras?.state?.['episode'] as IEpisode;
    if (episode) {
      return episode;
    }
      const {id} = route.params;
      return this.episodeService.getById(id);
  }

}
