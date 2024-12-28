import DownloadButton from "../components/download";
import Footer from "../components/footer";
import JimboLogo from "../components/jimbologo";
import styled from "styled-components";

export default function Home() {
    const Parent = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    `

    const Children = styled.div `
    width: 100%;
    height: 100%;
    z-index: 99;
    overflow-y: scroll;
    flex: 1;
    `

    const Content = styled.div `
    padding-top: 20px;
    width: 85%;
    margin: auto;
    `

    const Link = styled.a `
    text-decoration: none;
    color: red;
    &:hover {
        opacity: .50;
        cursor: pointer;
    }
    `

    return (
        <Parent>
            <Children>
                <JimboLogo />
                <Content>
                The Binding Of Jimbo is a feature-rich mod for the award-winning poker rogue-like <Link href="https://www.playbalatro.com/" target="_blank">Balatro</Link> that brings 50+ new jokers, 
                cards, and mechanics directly inspired and based on the hit indie classic <Link href="https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/" target="_blank">The Binding of Isaac</Link>! 
                The mod is in an early access state at the current moment, but gets updated frequently.<br/>
                <br/>
                <DownloadButton />
                </Content>
            </Children>
            <Footer />
        </Parent>
    )
}