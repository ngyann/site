import React, { useState } from 'react';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [error, setError] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setError(''); // Reset error message when changing payment method
  };

  const handleCreditCardSubmit = (event) => {
    event.preventDefault();
    if (!cardNumber || !expirationDate || !cvv) {
      setError('Please fill in all credit card fields.');
      return;
    }
    // Process credit card payment
    console.log('Credit card payment submitted:', {
      cardNumber,
      expirationDate,
      cvv,
    });
  };

  const handlePaypalSubmit = (event) => {
    event.preventDefault();
    if (!paypalEmail) {
      setError('Please enter your PayPal email.');
      return;
    }
    // Process PayPal payment
    console.log('PayPal payment submitted:', { paypalEmail });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100" id="Payment">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-md">
        <h1 className="text-[#050C9C] text-2xl font-bold mb-6 text-center">Our Payment Methods</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="payment-method">
              Payment Method:
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="payment-method"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          {paymentMethod === 'credit_card' && (
            <div>
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="card-number">
                  Card Number:
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="card-number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="mb-4 flex space-x-4">
                <div className="flex-1">
                  <label className="block font-medium mb-2" htmlFor="expiration-date">
                    Expiration Date (MM/YY):
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="expiration-date"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium mb-2" htmlFor="cvv">
                    CVV:
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCVV(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleCreditCardSubmit}
              >
                Pay with Credit Card
              </button>
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div>
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="paypal-email">
                  PayPal Email:
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="paypal-email"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)}
                  placeholder="youremail@example.com"
                  required
                />
              </div>
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handlePaypalSubmit}
              >
                Pay with PayPal
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;