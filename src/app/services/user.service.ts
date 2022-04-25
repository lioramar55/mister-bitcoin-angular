import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  cacheKey: string = 'USER_KEY';
  loggedInUser: User = {
    name: 'Satoshi N.',
    balance: 1000,
    moves: [],
  };

  addMove(contact: Contact, amount: number): Error | undefined {
    const user = this.loggedInUser;
    if (user.balance < amount) return new Error('insufficient funds');
    let move = {
      at: Date.now(),
      toId: contact._id,
      to: contact.name,
      amount,
    };
    user.balance -= amount;
    user.moves.push(move);
    // return saveUser(user);
    return;
  }

  saveToStorage(key: string, value: User) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadFromStorage(key: string) {
    let val = localStorage.getItem(key);
    if (!val) return null;
    return JSON.parse(val);
  }
}
