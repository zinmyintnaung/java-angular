import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Luv2ShopFormService } from '../../services/luv2-shop-form.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0.0;
  totalQuantity: number = 0;

  creditCardMonths: number[] = [];
  creditCardYears: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private luv2ShopService: Luv2ShopFormService
  ) {}

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: [''],
      }),
    });

    //populate credit card months and year using service
    const startMonth: number = new Date().getMonth() + 1; //Javascript months are zero based
    this.luv2ShopService.getCreditCardMonths(startMonth).subscribe((data) => {
      console.log(JSON.stringify(data));
      this.creditCardMonths = data;
    });
    this.luv2ShopService.getCreditCardYears().subscribe((data) => {
      this.creditCardYears = data;
    });
  }

  copyShippingAddressToBillingAddress(event: any) {
    if (event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress'].setValue(
        this.checkoutFormGroup.controls['shippingAddress'].value
      );
    } else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
    }
  }

  handleMonthsAndYears() {
    let creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
    let currentYear = new Date().getFullYear();
    let selectedYear = Number(creditCardFormGroup?.value.expirationYear);

    let startMonth: number;

    //if current year is selected, then we should start the month from current month, to protect entering expired credit card
    if (selectedYear === currentYear) {
      startMonth = new Date().getMonth() + 1;
    } else {
      startMonth = 1;
    }

    this.luv2ShopService.getCreditCardMonths(startMonth).subscribe((data) => {
      console.log(JSON.stringify(data));
      this.creditCardMonths = data;
    });
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.get('customer')?.value);
  }
}
