import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-commutator',
  templateUrl: './commutator.component.html',
  styleUrls: ['./commutator.component.scss']
})
export class CommutatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }

}
