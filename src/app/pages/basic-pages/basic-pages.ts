import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

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
  
  localeService = inject(LocaleService);
  currentLocale = signal(inject( LOCALE_ID));

  nameLower = signal('ronaldo');
  nameUpper = signal('RONALDO');
  fullName = signal('RoNAldO TorREs cAceReS');

  customDate = signal( new Date() );

  tickingDateEffect = effect((onCleanup) => {

    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    })

  });

  changeLocale(locale: AvailableLocale) {
    console.log(locale);
    this.localeService.changeLocale(locale);
  }

}
