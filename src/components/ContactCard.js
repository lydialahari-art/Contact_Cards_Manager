
import React, { useState } from "react";

function ContactCard({ contact }) {
  const [imageFailed, setImageFailed] = useState(false);

  const initials = contact.fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const showAvatar =
    contact.avatarUrl.trim() !== "" && !imageFailed;

  return (
    <article className="contact-card">
      <div className="card-top">
        <div className="avatar">
          {showAvatar ? (
            <img
              src={contact.avatarUrl}
              alt={`${contact.fullName}'s avatar`}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        <span className="contact-badge">CONTACT</span>
      </div>

      <div className="contact-info">
        <h3>{contact.fullName}</h3>
        <p className="job-title">{contact.jobTitle}</p>

        <div className="company-line">
          <span className="detail-icon">▦</span>
          <span>{contact.company}</span>
        </div>

        {contact.bio && (
          <p className="contact-bio">{contact.bio}</p>
        )}
      </div>

      <div className="contact-details">
        <a href={`tel:${contact.phone}`} className="detail-row">
          <span className="detail-icon">☎</span>
          <span>{contact.phone}</span>
        </a>

        <a href={`mailto:${contact.email}`} className="detail-row">
          <span className="detail-icon">✉</span>
          <span className="email-text">{contact.email}</span>
        </a>
      </div>

      <div className="card-footer">
        <span className="status-dot"></span>
        <span>Professional connection</span>
      </div>
    </article>
  );
}

export default ContactCard;
