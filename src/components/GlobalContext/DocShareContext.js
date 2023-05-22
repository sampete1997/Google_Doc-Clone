import React, { useState } from "react"
import { options } from "../ShareModalContent"


export const ShareDocContext = React.createContext(null)

const DocShareContext = (props) =>{

    const [docTitle, setDocTitle] = useState("Untitled document")
    const [accessValue, setAccessValue] = useState(options[0].text)

    const setTitle = (title) =>{setDocTitle(title)}
    const setAccessOption = (value) =>setAccessValue(value)

    return (
        <ShareDocContext.Provider value={
            {
                docTitle: docTitle ,
                accessValue: accessValue,
                setTitle: setTitle,
                setAccessOption:setAccessOption
            }
        }>
            {props.children}

        </ShareDocContext.Provider>
    )
}

export default DocShareContext;