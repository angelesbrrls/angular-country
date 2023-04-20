import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-country-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas','Asia','Europe','Oceania'];
  public regionSelected?: Region;

  constructor( private countriesService: CountriesService ){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.regionSelected = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region): void {
    console.log('Desde Región Page');
    this.regionSelected = region;
    this.isLoading = true;
    this.countriesService.searchRegion( region ).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

}
