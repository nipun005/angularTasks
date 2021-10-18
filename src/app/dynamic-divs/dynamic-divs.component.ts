import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.css']
})
export class DynamicDivsComponent implements OnInit {
  
  elements = [1];
  count = 1;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.elements = [...this.elements, this.count++];
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.scrollHeight;
  }

  onButtonClick(val: number) {
   alert("Button " + val + " is clicked");
  }
  
}
