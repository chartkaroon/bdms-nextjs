import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <ul>
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/patient-form"><a>ADD NEW PATIENT</a></Link></li>
            <li><Link href="/patient-list"><a>SEE PATIENT LIST</a></Link></li>
        </ul>
    );
};

export default Navbar;