import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3)] ],
      family_name: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.minLength(3)],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      phone: ['', [Validators.required, Validators.maxLength(10)] ],
   
    });
  }

  get nameInvalid() {
    return this.form.get('name').invalid && this.form.get('name').touched;
  }

  get familyNameInvalid() {
    return this.form.get('family_name').invalid && this.form.get ('family_name').touched;
  }

  get emailInvalid() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get phoneInvalid() {
    return this.form.get('phone').invalid && this.form.get('phone').touched;
  }

  ngOnInit(): void {}

  guardar() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
  }
}
