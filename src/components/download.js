import { useEffect, useState } from "react";
import styled from "styled-components"

export default function DownloadButton() {
    const Base = styled.div `
    padding: 5px 20px 10px 20px;
    border-radius: 25px;
    border: 5px solid black;
    width: fit-content;
    transition: 0.15s all;

    &:hover {
        background-color: rgba(81, 80, 82, 0.5);
        cursor: pointer;
    }
    `

    const [version, setVersion] = useState("")

    const getversion = async () => {
        let f1 = await fetch("https://raw.githubusercontent.com/h3llo-wor1d/The-Binding-Of-Jimbo/refs/heads/main/wrenbind.json")
        let f2 = await f1.json()
        setVersion(f2.version)
    }
    useEffect(() => {
        getversion()
    }, [])

    const handler = () => {
        window.open("https://github.com/h3llo-wor1d/The-Binding-Of-Jimbo/archive/refs/heads/main.zip", '_blank').focus();
    }
    return (
        <Base onClick={handler}>
            Download Mod (v{version})
        </Base>
    )
}