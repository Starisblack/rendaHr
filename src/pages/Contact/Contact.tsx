import React, { useEffect } from "react"
import { Grid } from "@mui/material";
import "./Contact.css";
import Form from "./Form/Form";
import { PlaceOutlined, MailOutline } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import PageTitle from "../../components/PageTitle";


const Contact = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactDetails: any = [
    {
      title: [
        {content: "Hydratech Software Solutions Limited, Lagos, Nigeria."}
      ],
      icon: PlaceOutlined,
    },

    {
      title: [
        { content: "+234 -7088-882-4511", url: "tel:+234 -7088-882-4511" },
      ],
      icon: PhoneIcon,
    },

    {
      title: [
        { content: "hello@joinrenda.com", url: "mailto:hello@joinrenda.com" },
        
      ],
      icon: MailOutline,
    },
  ];



  return (
    <div className="page contact-page">
      <PageTitle title="Contact - Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      
      <Grid container gap={{xs: 4, md: 0}} spacing={{ md: 4 }} className="contact-detail-container">
        <Grid item xs={12}>
          {" "}
          <h1 className="contact-title">Stay In Touch</h1>
        </Grid>

        <Grid item xs={12}>
          <p className="leave-msg">Leave us a message</p>
        </Grid>

        <Grid item md={6}>
          <Form />
        </Grid>
        <Grid item md={6}>
          {/* {contactDetails.map((detail: any) => {
            return (
              <div key={detail.title[0].content} className="contact-detail-box">
                <detail.icon sx={{ fontSize: 30 }} />
                <div>
                  {detail.title?.map((title: any) => {
                    return (
                      <a key={title.content} className="contact-detail-title" href={title?.url}>
                          {title.content} 
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })} */}
{contactDetails.map((detail: any) => {
  return (
    <div key={detail.title[0].content} className="contact-detail-box">
      <detail.icon sx={{ fontSize: 30 }} />
      <div>
        {/* {detail.title?.map((title: any) => {
          return (
            <a key={title.content} className="contact-detail-title" href={title?.url}>
                {title.content} 
            </a>
          );
        })} */}
        {detail.title?.map((title: any) => (
  <a
    key={title.content}
    className="contact-detail-title"
    href={title?.url}
  >
    {title.content}
  </a>
))}

      </div>
    </div>
  );
})}

          <div className="social-icons-contact">
            <a href="/">
              <i className="fab fa-instagram instagram"></i>
            </a>

            <a href="/">
              <i className="fab fa-facebook-f facebook"></i>
            </a>

            <a href="/">
              <i className="fab fa-twitter twitter"></i>
            </a>
          </div>

          <iframe style={{borderRadius:"5px", width: "100%", height: "250px", marginTop: "27px"}} title="location"  height="250" scrolling="no"  id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=250&amp;hl=en&amp;q=Victoria%20Island,%20Lagos,%20Nigeria.%20Lagos+(RendaHR)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
         
        </Grid>
      </Grid>

      
     
    </div>
  );
};

export default Contact;
