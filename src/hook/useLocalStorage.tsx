'use client' //client side code

import { useState,useEffect } from "react"

type SetValue<T>=T | ((val:T)=>T);

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: SetValue<T>) => void] {
    const [storedValue, setStoredValue]=useState(()=>{
        try{
            if(typeof window!== 'undefined'){
                const item=window.localStorage.getItem(key);
                return item ? JSON.parse(item):initialValue;
            }
        }
        catch(error){
            console.log(error);
            return initialValue;
        }
    });

    useEffect(()=>{
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
              typeof storedValue === "function"
                ? storedValue(storedValue)
                : storedValue;
            // Save state
            if (typeof window !== "undefined") {
              // browser code
              window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
          } catch(error){
            console.log(error);
          }
    },[key, storedValue]);
    return [storedValue, setStoredValue];

}

export default useLocalStorage;