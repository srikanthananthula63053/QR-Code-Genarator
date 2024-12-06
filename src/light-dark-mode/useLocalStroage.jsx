import { useEffect, useState } from "react";


export default function useLocalStroage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))

        } catch (e) {
            console.log(e)
            currentValue;

        }
        return currentValue;
    })

   useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
   },[key,setValue]);

   return [value,setValue];

}