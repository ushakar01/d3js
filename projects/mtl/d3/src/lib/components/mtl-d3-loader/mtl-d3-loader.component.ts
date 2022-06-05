import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'mtl-d3-loader',
  template: `<div class="loading-icon">
  <svg version="1.1" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false">
  <circle fill="none" cx="18" cy="18" stroke-width="2" r="16" stroke="#fff"></circle>
  <path stroke="#2c74d7" fill="none" d="M 18 18 m 0,-16 a 16,16 0 1 1 0,32 a 16,16 0 1 1 0,-32" stroke-width="2" stroke-dasharray="100.53096491487338" stroke-dashoffset="70.37167544041137">
  <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1.2s"
          repeatCount="indefinite"/></path>
           <!-- <path fill="#0071CE" fill-rule="nonzero" d="M45,19.4133333 C45,16.4166667 42.5735294,14 39.5647059,14 L35.6823529,14 C32.6735294,14 30.2470588,16.4166667 30.2470588,19.4133333 L30.2470588,38.65 C30.2470588,38.65 30.2470588,40.39 28.5,40.4866667 C26.7529412,40.4866667 26.7529412,38.65 26.7529412,38.65 L26.7529412,19.4133333 C26.7529412,16.4166667 24.3264706,14 21.3176471,14 L17.4352941,14 C14.4264706,14 12,16.4166667 12,19.4133333 L12,37.5866667 C12,40.5833333 14.4264706,43 17.4352941,43 L17.6294118,43 L17.6294118,18.35 C17.6294118,18.35 17.6294118,16.5133333 19.4735294,16.5133333 C21.3176471,16.5133333 21.3176471,18.35 21.3176471,18.35 L21.3176471,37.5866667 C21.3176471,40.5833333 23.7441176,43 26.7529412,43 L30.4411765,43 C33.45,43 35.8764706,40.5833333 35.8764706,37.5866667 L35.8764706,18.35 C35.8764706,18.35 35.8764706,16.5133333 37.7205882,16.5133333 C39.5647059,16.5133333 39.5647059,18.35 39.5647059,18.35 L39.5647059,43 L39.7588235,43 C42.5735294,43 45,40.5833333 45,37.5866667 L45,19.4133333 Z"/> -->
</svg>
</div>`,
styleUrls: ['./mtl-d3-loader.component.scss']
})
export class  MtlD3LoaderComponent implements OnInit {
  constructor() {  }
  ngOnInit() {
  }

}
