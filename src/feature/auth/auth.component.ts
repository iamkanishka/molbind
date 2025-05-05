import { Component } from '@angular/core'; 

import { HttpClient } from '@angular/common/http'
import { MetamaskAuthService } from 'src/service/auth/metamaskauth.service';
 

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {



  constructor(
    private metamaskAuth: MetamaskAuthService,
    private http: HttpClient
  ) {}

  async login() {
    try {
      const address = await this.metamaskAuth.connectWallet();

      // Get nonce from server
      const  nonce  = await this.http
        .post<{ nonce: string }>('/api/auth/nonce', { address })
        .toPromise();

      if (!nonce || !nonce.nonce) {
        throw new Error('Nonce is undefined or invalid');
      }
      const signature = await this.metamaskAuth.signMessage(nonce.nonce);

      // Send signature to backend for verification
      const result = await this.http
        .post('/api/auth/verify', { address, signature })
        .toPromise();

      console.log('Login success', result);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

}
