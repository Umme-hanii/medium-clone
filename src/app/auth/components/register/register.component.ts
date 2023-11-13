import { Component } from '@angular/core'
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  registerForm = this.fb.nonNullable.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.registerForm.getRawValue())
    console.log(this.registerForm.value)
  }
}
