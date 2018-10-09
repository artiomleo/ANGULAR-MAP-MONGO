import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Place';
  angForm: FormGroup;
  constructor(private coinservice: CoinService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      longitude: ['', Validators.required ],
      latitude: ['', Validators.required ],
      info: ['', Validators.required ],
      street: ['', Validators.required ],
      name: ['', Validators.required ]
   });
  }
  addCoin(longitude, latitude, info, street, name) {
      this.coinservice.addCoin(longitude, latitude, info, street, name);
      this.router.navigate(['index']);
  }
  ngOnInit() {
  }
}
