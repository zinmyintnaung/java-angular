import { FormControl, ValidationErrors } from '@angular/forms';

export class Luv2ShopValidators {
  //white space validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors {
    if (control.value != null && control.value.trim().length === 0) {
      //invalid, return error object
      return { notOnlyWhitespace: true };
    } else {
      return {};
    }
  }
}
