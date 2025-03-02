import { contactData } from '@/data/contact-data'

const ContactDetails = () => {

  return (
    <div className="contact-elements-container flex flex-col gap-5">
      {contactData.map((contact,index) => (
        <div className='flex items-center gap-5' key={index}>
          <contact.icon className="text-blue-500 h-8 w-8"/>
          <div className=''>
            <h2 className=''>{contact.title}</h2>
            <p className='dark:text-slate-400 text-slate-600'> {contact.description} </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactDetails