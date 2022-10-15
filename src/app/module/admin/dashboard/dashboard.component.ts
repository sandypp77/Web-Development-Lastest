import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ObservableService } from 'src/app/services/observable/observable.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fruits: any = [];

  constructor(
    private readonly observableService: ObservableService
  ) { }

  ngOnInit(): void {
    // this.observableService.getFruits().subscribe(
    //   (next: string) => {
    //     this.fruits.push(next);
    //   },
    //   (error) => {
    //     this.fruits.push('error');
    //   },
    //   () => {
    //     this.fruits.push('complete');
    //   }
    // )

    this.observableService.customObservable().subscribe(
      (next: string) => {
        this.fruits.push(next);
      },
      (error) => {
        this.fruits.push('error');
      },
      () => {
        this.fruits.push('complete');
      }
    )
  }

}
