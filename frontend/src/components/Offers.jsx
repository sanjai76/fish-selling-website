import { useEffect, useState } from "react";
import axios from "axios";
// import "./Offers.css"; // optional CSS for styling

function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/offers/") // ✅ include /api if your products also use /api/
      .then((res) => {
        console.log("Fetched offers:", res.data);
        setOffers(res.data);
      })
      .catch((err) => console.error("Error fetching offers:", err));
  }, []);

  return (
    <div className="offers-container">
      <h2 className="text-center">🔥 Special Offers 🔥</h2>
      {offers.length > 0 ? (
        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-details">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <p>
                  <strong>Discount:</strong> {offer.discount}%
                </p>
                <p className="text-muted">
                  Valid till: {offer.valid_till}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No offers available</p>
      )}
    </div>
  );
}

export default Offers;

