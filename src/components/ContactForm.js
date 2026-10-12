
import React, { useState } from "react";

const initialForm = {
  fullName: "",
  jobTitle: "",
  company: "",
  phone: "",
  email: "",
  bio: "",
  avatarUrl: "",
};

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      ...formData,
      fullName: formData.fullName.trim(),
      jobTitle: formData.jobTitle.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      bio: formData.bio.trim(),
      avatarUrl: formData.avatarUrl.trim(),
    };

    onAddContact(newContact);
    setFormData(initialForm);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="fullName">Full name *</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="e.g. Priya Reddy"
            value={formData.fullName}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>

        <div className="form-field">
          <label htmlFor="jobTitle">Job title *</label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="e.g. Software Engineer"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>

        <div className="form-field">
          <label htmlFor="company">Company *</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="e.g. Google"
            value={formData.company}
            onChange={handleChange}
            required
            maxLength={100}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={30}
          />
        </div>

        <div className="form-field full-width">
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. priya@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={254}
          />
        </div>

        <div className="form-field full-width">
          <label htmlFor="bio">Short bio / description</label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Write a short introduction..."
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            maxLength={250}
          />
        </div>

        <div className="form-field full-width">
          <label htmlFor="avatarUrl">
            Avatar image URL <span className="optional">(optional)</span>
          </label>
          <input
            id="avatarUrl"
            name="avatarUrl"
            type="url"
            placeholder="https://example.com/photo.jpg"
            value={formData.avatarUrl}
            onChange={handleChange}
          />
          <small>
            Leave empty to use an automatically generated initials avatar.
          </small>
        </div>
      </div>

      <div className="form-actions">
        <span className="required-note">* Required fields</span>
        <button type="submit" className="primary-button">
          <span>＋</span> Add contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
