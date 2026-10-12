import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">⌕</div>
        <h3>No contacts found</h3>
        <p>
          Try a different name or company, or add a new contact using the form
          above.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-grid">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
