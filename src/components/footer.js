import styled from "styled-components"

export default function Footer() {
    const Link = styled.a `
    text-decoration: none;
    color: red;
    &:hover {
        opacity: .50;
        cursor: pointer;
    }
    `
    const Parent = styled.div `
    width: 100%;
    text-align: center;
    font-size: 15pt;
    margin-bottom: 10px;
    margin-top: 5px;
    `
    return (
        <Parent>
            Mod and Website by <Link href="https://hyperpup.pet" target="_blank">HYPERPUP</Link>
        </Parent>
    )
}