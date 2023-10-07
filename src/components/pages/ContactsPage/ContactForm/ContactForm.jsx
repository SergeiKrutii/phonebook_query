import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Form from "components/common/Form/Form";
import "react-toastify/dist/ReactToastify.css";
import {
  useGetContactsQuery,
  useAddContactMutation,
} from "redux/contacts/contactsSlice";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = (e) => {
    setName("");
    setNumber("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    const isEqualName = contacts?.some((contact) =>
      contact.name.includes(name)
    );

    if (isEqualName) {
      toast.error("User with this name already exist!!");
      return;
    }

    addContact(newContact);
    reset();
  };

  const isEmptyInput = number.trim() === "" || name.trim() === "";

  return (
    <>
      <ToastContainer autoClose={1500} />
      <Form
        name={name}
        number={number}
        onInputChange={onInputChange}
        isEmptyInput={isEmptyInput}
        onSubmit={onSubmit}
        btnText={"Add contact"}
        btnAction={"add"}
      />
    </>
  );
};

export default ContactForm;
