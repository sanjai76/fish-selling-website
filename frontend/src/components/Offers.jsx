// frontend/src/pages/Offers.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.117.187.209:8000/api/offers/") // 👈 Sanjai’s backend IP
      .then((res) => {
        console.log("Fetched offers:", res.data);
        setOffers(res.data);
      })
      .catch((err) => console.error("Error fetching offers:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🔥 Special Offers 🔥</h2>
      {offers.length === 0 ? (
        <p className="text-center">No active offers available.</p>
      ) : (
        <div className="row">
          {offers.map((offer) => (
            <div key={offer.id} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{offer.title}</h5>
                  <p className="card-text">{offer.description}</p>
                  <p className="card-text">
                    <strong>Discount:</strong> {offer.discount}%
                  </p>
                  <p className="card-text text-muted">
                    Valid till: {offer.valid_till}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
