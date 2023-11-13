import { Component } from '@angular/core'
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { Store } from '@ngrx/store'

import { register } from '../../store/actions'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
})
export class RegisterComponent {
  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit(): void {
    console.log(this.registerForm.getRawValue())
    console.log(this.registerForm.value)
    const request: RegisterRequestInterface = {
      user: this.registerForm.getRawValue(),
    }
    this.store.dispatch(register({ request }))
  }
}
