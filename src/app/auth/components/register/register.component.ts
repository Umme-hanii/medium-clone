import { Component } from '@angular/core'
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { Store } from '@ngrx/store'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { register } from '../../store/actions'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { selectIsSubmitting } from '../../store/reducers'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, HttpClientModule],
})
export class RegisterComponent {
  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  isSubmitting$ = this.store.select(selectIsSubmitting)
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    console.log(this.registerForm.getRawValue())
    console.log(this.registerForm.value)
    const request: RegisterRequestInterface = {
      user: this.registerForm.getRawValue(),
    }
    this.store.dispatch(register({ request }))
    this.authService.register(request).subscribe((res) => console.log(res))
  }
}
