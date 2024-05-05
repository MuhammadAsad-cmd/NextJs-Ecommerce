"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckOutPage = () => {
  const [selectedShippingOption, setSelectedShippingOption] = useState("free");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems ? cartItems.length : 0;

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      return acc + item.pricenow * item.quantity;
    }, 0);
  };

  const calculateTotal = () => {
    const Subtotal = calculateSubtotal();
    const shippingRate = selectedShippingOption === "flat" ? 10 : 0;
    return Subtotal + shippingRate;
  };

  const [errors, setErrors] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    city: "",
    phone: "",
    email: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    city: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    const requiredFields = ["email"];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      } else if (field === "email" && !isValidEmail(formData[field])) {
        newErrors[field] = "Please enter a valid email address";
      }
    });

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "CompanyName feild is required";
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "streetAddress feild is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City feild is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone feild is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email feild is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
      router.push("/pages/Order");
    }
  };

  return (
    <>
      <div className="Popppins container mx-auto my-20 max-w-[1170px] px-5 lg:px-10 xl:px-0">
        <p className="text-sm font-normal leading-5 text-[#000000] text-opacity-50">
          Account <span className="mx-3 text-[#00000080]">/ </span>{" "}
          <span className="text-[#000000] text-opacity-50">Product</span>
          <span className="mx-3 text-[#00000080]">/ </span>{" "}
          <span className="text-[#000000] text-opacity-50">View Cart</span>
          <span className="mx-3 text-[#00000080]">/ </span>{" "}
          <span className="text-[#000000]">CheckOut</span>
        </p>

        <div className="mt-20">
          <h2 className="Inter text-4xl font-medium leading-8">
            Billing Details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-5 md:gap-10 lg:flex-row lg:gap-20 xl:gap-[173px]">
              <div className="mt-12 w-full lg:min-w-[470px]">
                <div className="mb-8">
                  <label
                    for="first_name"
                    className="mb-2 block text-base font-normal leading-6 text-[#000000] text-opacity-40"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className={` block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div className="mb-8">
                  <label
                    for="company"
                    className="mb-2 block text-base font-normal leading-6 text-[#000000] text-opacity-40"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                  />
                  {errors.companyName && (
                    <p className="text-red-500">{errors.companyName}</p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="street_address"
                    className="mb-2 block text-base font-normal leading-6 text-[#000000] text-opacity-40"
                  >
                    Street Address*
                  </label>
                  <input
                    type="text"
                    id="street_address"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                  />
                  {errors.streetAddress && (
                    <p className="text-red-500">{errors.streetAddress}</p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="street_address"
                    className="mb-2 block text-base font-normal leading-6 text-[#000000] text-opacity-40"
                  >
                    Apartment, floor, etc. (optional)
                  </label>
                  <input
                    type="text"
                    id="street_address"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="Town"
                    className="mb-2 block text-base font-normal leading-6 text-[#000000] text-opacity-40"
                  >
                    Town/City*
                  </label>
                  <input
                    type="text"
                    id="Town"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                  />
                  {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>
                <div className="mb-8">
                  <label
                    for="phone"
                    className="mb-2 block text-base font-normal leading-6 text-[#000000] text-opacity-40"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    for="email"
                    className="mb-2 block text-base font-normal leading-6 text-[#000000] text-opacity-40"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block h-[50px] w-full rounded bg-[#F5F5F5] p-2.5 text-sm text-black text-opacity-50 outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>

                <div class="mb-4 flex items-center gap-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="h-6 w-6 rounded border bg-white text-[#DB4444]"
                  />
                  <label
                    for="default-checkbox"
                    className="Popppins text-base font-normal text-[#000000]"
                  >
                    Save this information for faster check-out next time
                  </label>
                </div>
              </div>
              <div className="w-full">
                {cartItems.map((item) => {
                  const { id, title, imageUrl, pricenow, quantity } = item;
                  const itemSubtotal = pricenow * quantity;
                  return (
                    <>
                      <div className="mb-8 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <Image
                            width={54}
                            height={54}
                            unoptimized
                            src={imageUrl}
                            alt="img"
                            className="h-[56px] w-[54px] object-cover"
                          />
                          <h3 className="text-sm font-normal leading-6">
                            {title}
                          </h3>
                        </div>
                        <p className="text-base font-normal leading-6">
                          ${itemSubtotal.toFixed(0)}
                        </p>
                      </div>
                    </>
                  );
                })}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h4>Subtotal:</h4>
                    <p>${calculateTotal().toFixed(2)}</p>
                  </div>
                  <div className="my-4 border-t border-[#000000]"></div>
                  <div className="flex items-center justify-between">
                    <h4>Shipping:</h4>
                    <p>Free</p>
                  </div>
                  <div className="my-4 border-t border-[#000000]"></div>

                  <div className="flex items-center justify-between">
                    <h4>Total:</h4>
                    <p>${calculateTotal().toFixed(2)}</p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <div class="mb-4 flex items-center gap-4">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="h-4 w-4 border-gray-300 bg-gray-100 text-[#DB4444]"
                      />
                      <label
                        for="default-radio-1"
                        className="text-base text-[#000000]"
                      >
                        Bank
                      </label>
                    </div>
                    <Image
                      width={192}
                      height={28}
                      unoptimized
                      src="/images/Frame 834.png"
                      alt="bank"
                    />
                  </div>
                  <div class="mb-4 mt-8 flex items-center gap-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-[#DB4444]"
                    />
                    <label
                      for="default-radio-1"
                      className="text-base text-[#000000]"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
                    <input
                      type="text"
                      className="block h-[50px] w-full max-w-[300px] rounded border border-[#000000] p-2.5 text-sm text-black opacity-50 outline-none"
                      placeholder="Coupon Code"
                    />
                    <button
                      type="submit"
                      className="h-[50px] rounded bg-[#DB4444] px-12 py-4 text-center text-sm font-medium text-white "
                    >
                      Apply Coupon
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 h-[50px] rounded bg-[#DB4444] px-12 py-4 text-center text-sm font-medium text-white "
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
