import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

const contactData: ContactItemData[] = [
    {
        title: "Visit Us",
        subtitle: "New Orleans, USA",
        icon: (
            <MapPin className="h-6 w-6 text-gray-50 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Call Us",
        subtitle: "+1 215-648-597",
        icon: (
            <Phone className="h-6 w-6 text-gray-50 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Working Hours",
        subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
        icon: (
            <Clock className="h-6 w-6 text-gray-50 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Email Us",
        subtitle: "Shopcart@gmail.com",
        icon: (
            <Mail className="h-6 w-6 text-gray-50 group-hover:text-primary transition-colors" />
        ),
    },
];

const FooterTop = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-b">
            {contactData?.map((data, index) => (
                <div key={index} className="flex gap-4 items-center group hover:bg-gray-50 transition-colors p-4 hoverEffect">
                    {data?.icon}
                    <div>
                        <p className="font-semibold text-shop-light group-hover:text-black hoverEffect">{data?.title}</p>
                        <p className="text-gray-50 text-sm group-hover:text-gray-900 hoverEffect">{data?.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FooterTop