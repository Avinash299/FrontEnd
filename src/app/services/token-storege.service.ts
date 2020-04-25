import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const CRYPTO_KEY = 'auth-pass';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
  public encrypt(value){
    return CryptoJS.AES.encrypt(value,CRYPTO_KEY).toString();
  }
  public decrypt(value){
    let bytes  = CryptoJS.AES.decrypt(value, CRYPTO_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}