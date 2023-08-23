import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';


const ContactsList = () => {
	const contacts = useSelector((state) => state.contacts);


	return (
		<ul className='list-group'>
			{contacts ? (
        contacts.map((contact) => (
          <ContactItem id={contact.id} name={contact.name} number={contact.number} />
			))
      ) : (
        <span>No contact available</span>
    )}
		</ul>
	);
};

export default ContactsList;




// import { nanoid } from 'nanoid'
// import css from './ContactsList.module.css'

// export default function ContactList({contacts, onDelete, filter}) {  
//   return( 
//     <ul className={css.list_contacts}>
//           {contacts ? (
//             contacts.map(contact => (
//               <li key={contact.id} className={css.item}>
//                 <p>{contact.name}: {contact.number}</p>
//                 <button
//                   className={css.btn_delete}
//                   onClick={() => onDelete(contact.id)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))
//           ) : (
//             <p>No contacts available</p>
//           )}
//       </ul>
//   )
// }

/* {contacts.map((contact) => (
            <li id={contact.id} key={nanoid()} className={css.item}>
                <p>{contact.name}: {contact.number}</p>
                <button className={css.btn_delete} onClick={
                  () => {
                    onDelete(contact.id)
                  }
                }>Delete</button>
            </li>
          ))} */