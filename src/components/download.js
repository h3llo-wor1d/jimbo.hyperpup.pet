import { useEffect, useState } from "react";
import styled from "styled-components"

export default function DownloadButton(props) {
    const Base = styled.div `
    padding: 5px 20px 10px 20px;
    border-radius: 25px;
    border: 5px solid black;
    width: fit-content;
    transition: 0.15s all;
    margin-bottom: 10px;

    &:hover {
        background-color: rgba(81, 80, 82, 0.5);
        cursor: pointer;
    }
    `

    

    const handler = () => {
        window.open("https://github.com/h3llo-wor1d/The-Binding-Of-Jimbo/archive/refs/heads/main.zip", '_blank').focus();
    }
    return (
        <Base onClick={handler}>
            Download Mod (v{props.version})
        </Base>
    )
}