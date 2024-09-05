import React, { useState } from 'react';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCreditCardSubmit = (event) => {
    event.preventDefault();
    // Process credit card payment
    console.log('Credit card payment submitted:', {
      cardNumber,
      expirationDate,
      cvv,
    });
  };

  const handlePaypalSubmit = (event) => {
    event.preventDefault();
    // Process PayPal payment
    console.log('PayPal payment submitted:', { paypalEmail });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100" id="Payment">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-[#050C9C] text-2xl font-bold mb-6">Our Payment methods</h1>
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
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="expiration-date">
                  Expiration Date:
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="expiration-date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="cvv">
                  CVV:
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCVV(e.target.value)}
                />
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