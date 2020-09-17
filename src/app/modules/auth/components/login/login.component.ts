import { UserPasses } from './../../../../shared/components/login-form/user-passes';
import { ConfirmationDialogComponent } from './../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}


  onLogin(user: UserPasses): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res && user) {
        this.snackbar.open(`Zalogowano jako ${user.login}`, null, {
          panelClass: ['bg-success', 'text-white']
        });
      }
    });
  }

}
