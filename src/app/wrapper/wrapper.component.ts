import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  name: string;
  constructor(private route: ActivatedRoute) {
    route.data.map(d => console.log(d)); //includes `data` and `resolve`
    console.log(route);
  }

  ngOnInit() {
  }

}
