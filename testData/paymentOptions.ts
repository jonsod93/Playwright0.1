export class ValidVisa {
  static readonly number = '4925000000000004';
  static readonly month = '12';
  static readonly year = '30';
  static readonly CVC = '123';
}

export class DiscountCodes {
  static readonly free = {
    code: 'FR',
    pagePriceAfterDiscount: '0.00 kr',
    mailPriceAfterDiscount: '0,00 kr',
  };

  static readonly invalid = {
    code: 'faresgrdsg',
    pagePriceAfterDiscount: 'N/A',
    mailPriceAfterDiscount: 'N/A',
  };
}
