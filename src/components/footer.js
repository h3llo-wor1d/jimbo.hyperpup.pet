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

    const Smaller = styled.div `
    font-size: 10pt;
    `
    return (
        <Parent>
            Mod and Website by <Link href="https://hyperpup.pet" target="_blank">HYPERPUP</Link>.<br/>
            <Smaller><Link target="_blank" href="https://github.com/h3llo-wor1d/jimbo.hyperpup.pet">This entire site</Link> as well as the <Link target="_blank" href="https://github.com/h3llo-wor1d/the-binding-of-jimbo">mod</Link> are open-source</Smaller>
        </Parent>
    )
}