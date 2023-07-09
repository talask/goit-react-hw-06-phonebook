
import { ContactItem } from './ContactItem';
import { Table } from './Contacts.styled';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from 'redux/contactsSlice';


export const Contacts = () => {
    const contacts = useSelector(getContacts);
   
    const dispatch = useDispatch();
    
    const fnDelete = (id) => {
        dispatch(deleteContact(id));
      }


    if(contacts)
    return ( 
        contacts && <Table>
            <tbody>
            {contacts.map(({name, number, id}, i) => {
                return (
                    <ContactItem 
                        key={i}
                        name={name} 
                        number={number} 
                        id={id}
                        fnDelete={fnDelete}
                    ></ContactItem>
                )

            }
            )}
        </tbody>
    </Table>
    )
}
