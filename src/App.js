import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      fullName: "Ananya Sharma",
      jobTitle: "UI/UX Designer",
      company: "Creative Studio",
      phone: "+91 98765 43210",
      email: "ananya@example.com",
      bio: "Passionate about creating simple and user-friendly digital experiences.",
      avatarUrl: "",
    },
    {
      id: 2,
      fullName: "Rahul Verma",
      jobTitle: "Software Developer",
      company: "Tech Solutions",
      phone: "+91 91234 56780",
      email: "rahul@example.com",
      bio: "Building useful applications with modern web technologies.",
      avatarUrl: "",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Add a new contact without refreshing the page
  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: Date.now() + Math.random(),
    };

    setContacts((previousContacts) => [newContact, ...previousContacts]);
  };

  // Case-insensitive search by name or company
  const filteredContacts = contacts.filter((contact) => {
    const query = searchTerm.trim().toLowerCase();

    return (
      contact.fullName.toLowerCase().includes(query) ||
      contact.company.toLowerCase().includes(query)
    );
  });

  return (
    <div className="app">
      <header className="hero">
        <h1>Contact Cards Manager</h1>
      </header>

      <main className="main-content">
        <section className="stats-bar">
          <div>
            <span className="stat-number">{contacts.length}</span>
            <span className="stat-label">Total contacts</span>
          </div>

          <div>
            <span className="stat-number">{filteredContacts.length}</span>
            <span className="stat-label">Showing results</span>
          </div>
        </section>

        <section className="form-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">GET CONNECTED</span>
              <h2>Add a new contact</h2>
              <p>Enter the details to create a digital business card.</p>
            </div>
            <span className="heading-icon">＋</span>
          </div>

          <ContactForm onAddContact={addContact} />
        </section>

        <section className="contacts-section">
          <div className="section-heading contacts-heading">
            <div>
              <span className="eyebrow">YOUR DIRECTORY</span>
              <h2>All contacts</h2>
              <p>Browse and search your professional connections.</p>
            </div>
          </div>

          <div className="search-wrapper">
            <span className="search-icon">⌕</span>
            <input
              type="search"
              className="search-input"
              placeholder="Search by name or company..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search contacts by name or company"
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <ContactList contacts={filteredContacts} />
        </section>
      </main>

      <footer className="footer">
        <span>✦ Connectly</span>
        <p>Your connections, thoughtfully organized.</p>
      </footer>
    </div>
  );
}

export default App;
