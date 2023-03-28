import React from "react";
import { Link } from "react-router-dom";

class SpotBookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkin_date: undefined,
      checkout_date: undefined,
      num_visitors: 0,
      total_cost: 0,
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const {
      spot,
      spots,
      errorsBooking,
      createBooking,
      deleteBooking,
      currentUserId,
    } = this.props;

    return (
      <form
        className="booking-widget"
        onSubmit={() => createBooking(this.state)}
      >
        <div className="price-container">
          <div className="price">${spot.price}</div>
          <span>per night</span>
        </div>

        <div className="row">
          <div className="check-container">
            <div className="check">Check in</div>
            <div className="check-in-date">
              <input type="date" placeholder="Select date" />
            </div>
          </div>

          <div className="check-container">
            <div className="check">Check out</div>
            <div className="check-out-date">
              <input placeholder="Select date" />
            </div>
          </div>

          <div className="guests-container">
            <div className="guests">Guests</div>
            <div className="guest-selection">- 2 +</div>
          </div>
        </div>
        <div className="button-container">
          <button>Instant book</button>
        </div>
      </form>
    );
  }
}

export default SpotBookingForm;
