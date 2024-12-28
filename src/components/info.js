import styled from "styled-components"

export default function Info(props) {
    const Parent = styled.div `
    background-image: url("ui_paper.png");
    width: 250px;
    height: 247px;
    position: relative;
    `

    const Inside = styled.div `
    position: absolute;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    font-size: 20px;
    transform: rotate(-2deg);
    width: 84%;
    font-smooth: never;
    -webkit-font-smoothing : none;
    `

    const Header = styled.div `
    left: 50%;
    padding-left: 20px;
    font-size: 5%;
    width: fit-content;
    padding-top: 5px;
    position: absolute;
    transform: translateX(-50%);
    `

    const Log = styled.ul `
    font-size: 4%;
    line-height: 15px;
    padding-top: 11px;
    `

    const Element = styled.li `
    padding-top: 5px;
    `

    return (
        <Parent>
            <Inside>
                <Header>{props.title}</Header>
                <Log>
                    {props.notes.map(e => <Element>{e}</Element>)}
                </Log>
            </Inside>  
        </Parent>
    )
}