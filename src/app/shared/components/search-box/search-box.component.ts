import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue = '';
  @Output()
  public onValue = new EventEmitter<string>();
  @Output()
  public onDebounce = new EventEmitter<string>();
  @ViewChild('txtSearchInput')
  public txtSearchInput!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.debouncerSubscription =  this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      console.log('debouncer: ', value)
      this.onDebounce.emit(value);
    });
  }


  ngOnDestroy(): void {
   this.debouncerSubscription?.unsubscribe()
  }

  searchValue(value: string){
    this.onValue.emit(value);
  }

  onKeyPress( searchValue: string ){
    this.debouncer.next( searchValue );
  }

}
