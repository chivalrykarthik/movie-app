import { Component, Input } from '@angular/core';
import { DataService } from '../../service/data.service';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
//import { PopupComponent } from '../popup/popup.component';
/*
,
    animations: [
        trigger('slideInOut', [
            state('in', style({
                overflow: 'auto',
                height: 'auto'

            })),
            state('out', style({

                overflow: 'hidden',
                height: '150px',
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ])
    ]
*/
@Component({
    selector: "list-movies",
    templateUrl: './list.component.html',
    providers: [DataService]
})
export class ListComponent {
    @Input('movies') movies: any;
    @Input('updCol') updCol: any;
    @Input('updParCol') updParCol: any;
    @Input('getRecommendation') getRecommendation: any;
    @Input('recMovies') recMovies: any;
    visible = true;
    helpMenuOpen = {}; helpCass = {};
    constructor(private ds: DataService) { 

    }
    public pageTitle: string;
    public actualCol = 3;
    public actualParCol = 12;

    ngOnInit() {
        // this.helpMenuOpen = 'out';
    }

    /*openDialog(): void {
        let dialogRef = this.dialog.open(PopupComponent, {
          width: '250px',
          data: { name: "this.name", animal:" this.animal" }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          //this.animal = result;
        });
      }*/
    /*toggleHelpMenu(id): void {
        console.log(id);
        var self = this;
        if (this.helpMenuOpen[id]) {
            console.log("in");
            this.helpMenuOpen[id] = this.helpMenuOpen[id] === 'out' ? 'in' : 'out';
        } else {
            console.log(this.helpMenuOpen[id]);
            this.helpMenuOpen[id] = 'in';
        }

        if (this.helpCass[id]) {
            if(this.helpCass[id] === 'in'){
                setTimeout(function(){
                    self.helpCass[id] = "out";
                },400)
            }else{
                this.helpCass[id] = "in";
            }
            
        } else {
            console.log(this.helpCass[id]);
            this.helpCass[id] = 'in';
        }


    }*/

    public viewMore(id){
        let self = this;
        if (this.helpCass[id]) {
            this.helpCass[id] = false;            
        } else {
            this.helpCass[id] = true;
        }
    }
    public recommend(movie, event) {
        console.log(movie);
        let self = this;
        let target = event.target || event.srcElement || event.currentTarget;
        if (target.className === "btn btn-success") {
            this.ds.addRecommendation(movie).subscribe((res) => {
                if (self.getRecommendation) {
                    self.getRecommendation();
                }
                console.log(event);
                if (!res.err && res && res.resp && res.resp.id) {
                    target.className = "btn btn-danger";
                    target.innerHTML = "Unrecommend";
                    //target.id = res.resp.id;
                }
            });
        } else {
            this.ds.deleteRecommendation(movie).subscribe(res => {
                if (self.getRecommendation) {
                    self.getRecommendation();
                }

                console.log(event);
                if (!res.err) {
                    target.className = "btn btn-success";
                    target.innerHTML = "Recommend";
                }
            });
        }
    }

}
