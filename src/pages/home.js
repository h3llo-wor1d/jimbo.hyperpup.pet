import Info from "../components/info";
import DownloadButton from "../components/download";
import Footer from "../components/footer";
import JimboLogo from "../components/jimbologo";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Home() {
    const [version, setVersion] = useState("")
    const [queue, setQueue] = useState([])

    const getversion = async () => {
        let f1 = await fetch("https://raw.githubusercontent.com/h3llo-wor1d/The-Binding-Of-Jimbo/refs/heads/main/wrenbind.json")
        let f2 = await f1.json()
        setVersion(f2.version)
    }

    const getinfoqueue = async () => {
        let f1 = await fetch("https://raw.githubusercontent.com/h3llo-wor1d/The-Binding-Of-Jimbo/refs/heads/main/infoqueue.json")
        let f2 = await f1.json()
        setQueue(f2)
    }
    useEffect(() => {
        getversion()
        getinfoqueue()
    }, [])

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

    const InfoQueue = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    `
    return (
        <Parent>
            <Children>
                    <JimboLogo />
                    <Content>
                        The Binding Of Jimbo is a feature-rich mod for the award-winning poker rogue-like <Link href="https://www.playbalatro.com/" target="_blank">Balatro</Link> that brings 50+ new jokers, 
                        cards, and mechanics directly inspired and based on the hit indie classic <Link href="https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/" target="_blank">The Binding of Isaac</Link>! 
                        The mod is in an early access state at the current moment, but gets updated frequently.<br/><br/>
                        Make sure to join our <Link href="https://discord.gg/uWBrEXKa4E" target="_blank">Discord</Link> to share your runs with us and get updates!<br/>
                        <br/>

                        <DownloadButton version={version}/>
                        <InfoQueue>
                            {queue.map(i => 
                                <Info 
                                title = {`${i.title} (v${version})`}
                                notes = {i.changes}
                            />
                            )}
                        </InfoQueue> 
                    </Content>
            </Children>
            <Footer />
        </Parent>
    )
}