import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinService } from '../../coin.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coin: any;
  angForm: FormGroup;
  title = 'Edit Coin';
  constructor(private route: ActivatedRoute, private router: Router, private service: CoinService, private fb: FormBuilder) {
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

  updateCoin(longitude, latitude, info, street, name) {
    this.route.params.subscribe(params => {
    this.service.updateCoin(longitude, latitude, info, street, name, params['id']);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service.editCoin(params['id']).subscribe(res => {
        this.coin = res;
      });
    });
  }
}
