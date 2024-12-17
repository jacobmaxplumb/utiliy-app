import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ id: "", name: "", email: "" });

  const getContact = async () => {
    const { data } = await axios.get(`http://localhost:9000/contacts/${id}`);
    setContact(data);
  };

  const updateContact = async () => {
    await axios.put(`http://localhost:9000/contacts/${contact.id}`, contact)
    navigate('/contacts');
  }

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      <h3>Edit Contact</h3>
      <input
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      />
      <input
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      />
      <button onClick={updateContact}>Update</button>
    </div>
  );
};
