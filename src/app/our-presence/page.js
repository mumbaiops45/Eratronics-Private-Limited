"use client"
import TopHeading from '@/componentes/TopHeading'
import OurPresence from '@/componentes/OurPresence/OurPresence'
import PopupContact from '@/componentes/PopupContact'
import { useState, useEffect } from "react";

const OurPresencePage = () => {
    const [openPopup, setOpenPopup] =
        useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            setOpenPopup(true);

        }, 2000);

        return () =>
            clearTimeout(timer);

    }, []);
    return (
        <>
            <TopHeading title="Our Presence" />
            <OurPresence />
            <PopupContact
                open={openPopup}
                setOpen={setOpenPopup}
            />
        </>
    )
}

export default OurPresencePage
