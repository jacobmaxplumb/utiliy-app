import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const getContacts = async () => {
    const {data} = await axios.get('http://localhost:9000/contacts');
    setContacts(data);
  }

  const addContact = async () => {
    const {data} = await axios.post('http://localhost:9000/contacts', {name, email})
    setContacts([...contacts, data]);
  }

  useEffect(() => {
    getContacts();
  }, [])

  return (
    <div>
      <h3>Contacts</h3>
      <input
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addContact} style={{marginBottom: '10px'}}>Add Contact</button>
      {contacts.map((contact) => (
        <div onClick={() => navigate(`/contacts/${contact.id}`)} style={{cursor: 'pointer'}} key={contact.id}>
          name: {contact.name}, email: {contact.email}
        </div>
      ))}
    </div>
  );
};
