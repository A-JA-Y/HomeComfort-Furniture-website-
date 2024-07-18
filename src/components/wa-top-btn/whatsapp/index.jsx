import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import dp from "../../images/profile1.jpg";

export default function WaMe() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="91-9260967689"
        accountName="Ajay"
        avatar={`${dp}`}
        notificationSound={true}
        notificationDelay={10}
        
      ></FloatingWhatsApp>
    </>
  );
}
