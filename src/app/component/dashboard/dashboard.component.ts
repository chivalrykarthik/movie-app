import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
//import { RecommendationComponent } from './../recommendation/recommendation.component';
@Component({

	templateUrl: './dashboard.component.html',
	providers: [DataService]
})
export class DashboardComponent implements OnInit {
	//public pageTitle: string = 'Dashboard';
	public pageTitle: string;
	hideElement: number = 1;
	selectedIndex: number = 0;
	popularMovies = [];
	upcomingMovies = [];
	recommendations;
	constructor(private ds: DataService) {
		this.pageTitle = "DashBoard";

		//this.recommendations = new RecommendationComponent(ds);


	}

	getRecommendations() {
		this.recommendations.getRecommendation();
	}
	getTrendingMovies() {
		this.ds.getTrendingMovies().subscribe((res) => {

			if (!res || !res.results || !res.results.length) {
				return console.log('No records found');
			}


			var popularMovies = res;

			if (popularMovies && popularMovies.results && popularMovies.results.length) {
				this.popularMovies = popularMovies.results;
			}


		});
	}

	getUpcomingMovies() {
		this.ds.getUpcomingMovies().subscribe((res) => {

			if (!res || !res.results || !res.results.length) {
				return console.log('No records found');
			}


			var upcoming = res;

			if (upcoming && upcoming.results && upcoming.results.length) {
				this.upcomingMovies = upcoming.results;
			}


		});
	}

	clickMe(param) {

		this.hideElement = param;
		//if(param == 3) this.recommendations = recommend.recommendations;
		if (param == 1) {
			this.getTrendingMovies();
		}
		if (param == 2) {
			this.getUpcomingMovies();
		}

	}
	ngOnInit() {
		this.getTrendingMovies();
		/*this.ds.getTrendingMovies().subscribe((res) => {
			console.log(res);
			//return;
			if (!res || !res.results || !res.results.length) {
				return console.log('No records found');
			}*/
		/*try {
			var popularMovies = JSON.parse(res.resp.popularMovies);
			var upcoming = JSON.parse(res.resp.upcomingMovies);
		} catch (e) {
			console.log("Invalid JSON");
			return;
		}*/

		/*	var popularMovies = res;

			if (popularMovies && popularMovies.results && popularMovies.results.length) {
				this.popularMovies = popularMovies.results;
			}*/

		/*if (upcoming && upcoming.results && upcoming.results.length) {
			this.upcomingMovies = upcoming.results;
		}*/
		//this.getRecommendations();

		//})
	}

}
