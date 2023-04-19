import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();


  @ViewChild('txtSearchInput')
  public txtSearchInput!: ElementRef<HTMLInputElement>;

  searchValue(value: string){
    this.onValue.emit(value);
  }

}
