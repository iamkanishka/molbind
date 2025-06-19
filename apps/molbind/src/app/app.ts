import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthUi } from '@molbind/auth-ui';

@Component({
  imports: [RouterModule, AuthUi],
  selector: 'app-auth-ui',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'molbind';
}
