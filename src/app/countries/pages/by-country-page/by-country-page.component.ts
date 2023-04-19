import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries: Country[] = [];


  constructor( private countriesService: CountriesService ){

  }

  searchByCountry( term: string): void {
    console.log('Desde Country Page');
    this.countriesService.searchCountry( term ).subscribe( countries => {
      this.countries = countries;
    });
  }

}
