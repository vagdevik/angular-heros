import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-data';
import { HeroserviceService } from '../heroservice.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})


export class AddDetailsComponent implements OnInit {

  // heros = HEROES;
  // selectedHero: Hero;

  heroes: Hero[]


  constructor(private heroService:HeroserviceService) { }

  ngOnInit() {
    this.getHeroes()
  }


  getHeroes(): void {
    console.log("!!!!!")
    console.log(this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes));
    console.log("!!!!!")

    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);

    console.log("****")
    console.log(this.heroes)
    console.log("****")


  }

}
