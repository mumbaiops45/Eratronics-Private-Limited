import TopHeading from '@/componentes/TopHeading'
import ContactUs from '@/componentes/ContactUs/ContactUs'

const ContactUsPage = () => {
    return (
        <>
           <TopHeading
  title={
    <>
      <span className="text-[var(--secondary)]">Contact</span> Us
    </>
  }
/>
            <ContactUs />
        </>
    )
}

export default ContactUsPage
