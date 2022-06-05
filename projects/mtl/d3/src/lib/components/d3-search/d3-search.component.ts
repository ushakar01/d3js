import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mtl-d3-search',
  templateUrl: './d3-search.component.html',
  styleUrls: ['./d3-search.component.scss']
})
export class D3SearchComponent implements ControlValueAccessor {

  @Input() title: string = 'Search';
  @ViewChild('input', { static: true }) input: ElementRef;
  @Output() change = new EventEmitter<any>();
  searchKey;

  isInputShown = false;
  value: string;

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef) {
  }

  showInput() {
    this.searchKey = this.value;
    this.isInputShown = true;
    this.input.nativeElement.focus();
  }

  hideInput() {
    this.isInputShown = false;
  }

  onInput(val: string) {
    if (val !== this.value) {
      this.value = val;
      this.onChange(val);
    }
  }

  onChange = (_value: any) => { this.change.emit(_value)};
  onTouched = () => { };
  writeValue(value: any): void {
    this.value = value;

    this.onChange(this.value);
    this.change.emit(this.value);
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }
}
