"use client"

import { useEffect } from "react"
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () =>{
    useEffect(()=>{
        Crisp.configure("ccedab48-87ca-49a8-addd-9a0ceba1eed2");
    },[]);

    return null;
}