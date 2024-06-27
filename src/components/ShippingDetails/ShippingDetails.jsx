
import React, { useState } from 'react';
import './ShippingDetails.css';

const ShippingDetails = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            onClose(); // Close the modal after a short delay
            setIsSubmitted(false); // Reset submission state
            alert("Your order was placed successfully!"); // Alert the user
        }, 2000); // Delay for showing the modal closing effect
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Shipping Details</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" required />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" required />
                    </label>
                    <label>
                        Postal Code:
                        <input type="text" name="postalCode" required />
                    </label>
                    <label>
                        Country:
                        <input type="text" name="country" required />
                    </label>
                    <div>
                        <strong>Payment Method:</strong>
                        <p>Cash on Delivery</p>
                    </div>
                    <button type="submit" disabled={isSubmitted}>
                        {isSubmitted ? "Placing Order..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ShippingDetails;
