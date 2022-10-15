import { Component } from '@angular/core';
import { MobilOffRoad } from './class/mobil-off-road';
import { MobilSport } from './class/mobil-sport';
import { MobilSUV } from './class/mobil-suv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-sandy';

  constructor() {
    const offRoad = new MobilOffRoad;

    offRoad.SetMesin("V8 6.2 cc");
    offRoad.SetTenaga(805);

    console.log(offRoad.GetMesin());
    console.log(offRoad.GetTenaga() + " HP");

    const sport = new MobilSport;

    sport.SetMesin("V12 6.500 cc");
    sport.SetTenaga(769);

    console.log(sport.GetMesin());
    console.log(sport.GetTenaga() + " HP");

    const suv = new MobilSUV;

    suv .SetMesin("V8 3.996 cc");
    suv .SetTenaga(650);

    console.log(suv .GetMesin());
    console.log(suv .GetTenaga() + " HP");

  }
}
