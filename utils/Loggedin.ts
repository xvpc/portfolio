import React from 'react'

// Cookies
import Cookies from "js-cookie";

export default async function isLoggedin() {
    return Cookies.get("userName") && Cookies.get("password") && Cookies.get("userName") == process.env.NEXT_PUBLIC_USERNAME && Cookies.get("password") == process.env.NEXT_PUBLIC_PASSWORD;
}
