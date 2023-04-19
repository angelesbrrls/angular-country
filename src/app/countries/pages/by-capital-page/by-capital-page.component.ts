import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService){

  }

  searchByCapital( term: string): void {
    console.log('Desde Capital Page');
    this.countriesService.searchCapital( term ).subscribe( countries => {
      this.countries = countries;
    });
  }

}
