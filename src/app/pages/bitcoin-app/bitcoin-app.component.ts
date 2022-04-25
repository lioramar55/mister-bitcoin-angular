import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
@Component({
  selector: 'bitcoin-app',
  templateUrl: './bitcoin-app.component.html',
  styleUrls: ['./bitcoin-app.component.scss'],
})
export class BitcoinAppComponent implements OnInit {
  rate!: number;
  user!: User;
  constructor(
    private bitcoinService: BitcoinService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.loggedInUser;
    this.bitcoinService
      .getRate(this.user.balance)
      .subscribe((res): void => this.setRate(res));
  }

  setRate(rate: number) {
    if (rate) this.rate = rate;
  }
}
