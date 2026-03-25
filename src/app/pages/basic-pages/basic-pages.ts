import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-pages.html',
})
export default class BasicPages { 

  nameLower = signal('ronaldo');
  nameUpper = signal('RONALDO');
  fullName = signal('RoNAldO TorREs cAceReS');

  customDate = signal( new Date() );

}
