import React, { useState } from 'react';
import '../style/Reservation.css'
const ReservationForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    guests: 2,
    date: '',
    time: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Details:', form);
    setSubmitted(true);
  };

  return (
    <div className="reservation-page">
      <h2>Book a Table</h2>

      {submitted ? (
        <div className="confirmation">
          <h3>Reservation Confirmed!</h3>
          <p>We’ve received your request. See you soon!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Number of Guests</label>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              required
              value={form.time}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">Reserve Now</button>
        </form>
      )}
    </div>
  );
};

export default ReservationForm;
