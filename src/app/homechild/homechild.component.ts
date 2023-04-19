import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homechild',
  templateUrl: './homechild.component.html',
  styleUrls: ['./homechild.component.css'],
})
export class HomechildComponent implements OnInit {
  // add the id property to the constructor
  constructor(private route: ActivatedRoute) {}

  //string interpolation
  title = 'Home Child';

  //property binding
  content = 'Home Child';

  // two way binding
  inputValue = 'input value';

  // template reference variable
  clickFuntion(val: any) {
    console.log(val);
  }

  // ngOnInit adalah lifecycle hook yang dipanggil setelah constructor dan dipanggil sekali saja
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
