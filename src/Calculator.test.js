import Calculator from './Calculator';

test("Mortgage Payment Calculation", function() {

    const payment = Calculator(10000, 3.2, 12, 25, 0, 5);
    expect(payment).toBe(48.46789818466372);
    console.log( 'payment', payment);
});