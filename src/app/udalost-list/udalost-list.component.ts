import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoistnaUdalost } from '../core/models/poistna-udalost.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Observable } from 'rxjs';
import { ApiService } from '../core/api/api.service';

@Component({
  selector: 'app-udalost-list',
  templateUrl: './udalost-list.component.html',
  styleUrls: ['./udalost-list.component.css']
})
export class UdalostListComponent {

  poistnaUdalost: PoistnaUdalost[];

  constructor(private readonly http: HttpClient, private api: ApiService, private readonly dialog: MatDialog) {}

  ngOnInit() {
    // this.http
    //   .get<Observable<PoistnaUdalost[]>>('https://fierce-bayou-75726.herokuapp.com/udalosti/')
      this.api.getPoistneUdalosti().subscribe((pu: PoistnaUdalost[]) => { 
        //TODO: eliminovat subscribe
        this.poistnaUdalost = pu;
      });
  }

  deleteUdalost(id: Number) {
    this.dialog.open(CourseDialogComponent, { data: id, disableClose: true });
    console.log('cdcdcd');
    this.http
      .delete('https://fierce-bayou-75726.herokuapp.com/udalosti/' + id)
      .subscribe(() => {
        // this.http
        //   .get('https://fierce-bayou-75726.herokuapp.com/udalosti/')
        //   .subscribe((pu: PoistnaUdalost[]) => {
        //     this.poistnaUdalost = pu;
        //   });
      });
  }
}
