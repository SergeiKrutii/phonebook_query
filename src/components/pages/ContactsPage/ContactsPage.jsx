import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactsList/ContactsList";
import { StyledContactPage } from "./StyledContactsPage";

const ContactsPage = () => {
  return (
    <StyledContactPage>
      <ContactForm />
      <ContactList />
    </StyledContactPage>
  );
};

export default ContactsPage;
