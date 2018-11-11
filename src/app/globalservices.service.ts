import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalservicesService {

  constructor() { }
  icons : any = {
    "appLogo": '<svg viewBox="0 0 100 100"><use xlink:href="/src/assets/images/magic-logo-blue@3x.png"></use></svg>',
    "appLogoWithText": '<svg viewBox="0 0 100 100"><use xlink:href="/src/assets/images/magic-logo-blue@3x.png"></use></svg>'
};

}
