import React, { useState } from "react";

const Chackout = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    totalAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shipping_address = {
      first_name: formData.fname,
      last_name: formData.lname,
      address: formData.address,
      email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      postcode: formData.pincode,
      phone_number: formData.mobile,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    var options = {
      key: "rzp_test_vv1FCZvuDRF6lQ",
      key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
      amount: parseInt(formData.totalAmount) * 100,
      currency: "INR",
      name: "freshcart",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("paymant id", paymentId, shipping_address);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          address: "",
          country: "",
          city: "",
          state: "",
          pincode: "",
          totalAmount: "",
        });
      },
      theme: {
        color: "#07a291db",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
<div className="container mt-5">
  <div className="row justify-content-center">
    {/* LEFT SIDE – BILLING FORM */}
    <div className="col-lg-7 col-md-7 col-12">
      <div className="card shadow-sm p-4 mb-4" style={{ borderRadius: "12px" }}>
        <h3 className="mb-4" style={{ color: "#07a291db", fontWeight: "600" }}>
          Billing Details
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">First Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Last Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Mobile</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Mobile Number"
                name="mobile"
                maxLength={10}
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 mb-3">
              <label className="form-label fw-semibold">Address</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Complete Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Country</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">City</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">State</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Pincode</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 mb-3">
              <label className="form-label fw-semibold">Total Amount</label>
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Total Amount"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-lg w-100 text-white"
            style={{
              background: "#07a291db",
              borderRadius: "10px",
              padding: "12px 0",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Proceed To Checkout
          </button>
        </form>
      </div>
    </div>

    {/* RIGHT SIDE – ORDER SUMMARY */}
    <div className="col-lg-4 col-md-5 col-12">
      <div className="card shadow-sm p-4" style={{ borderRadius: "12px" }}>
        <h4 className="mb-3" style={{ color: "#07a291db" }}>Order Summary</h4>

        <div className="d-flex justify-content-between mb-2">
          <span>Subtotal</span>
          <strong>₹ {formData.totalAmount || "0"}</strong>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Delivery Charges</span>
          <strong>₹ 0</strong>
        </div>

        <hr />

        <div className="d-flex justify-content-between mb-3">
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            Total Payable
          </span>
          <span style={{ fontSize: "18px", fontWeight: "700", color: "#07a291db" }}>
            ₹ {formData.totalAmount || "0"}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Chackout;

