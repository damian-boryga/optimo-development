import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { UserPasses } from './user-passes';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  @Output() login = new EventEmitter<UserPasses>();

  user: UserPasses = {};

  submit(): void {
    this.login.emit(this.user);
  }

}
