import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

export default function JimboLogo() {
    const img_ref = useRef(null);
    const parent_ref = useRef(1);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
          if (img_ref.current) {
            const newHeight = img_ref.current.getBoundingClientRect().height;
            if (newHeight !== height) {
              setHeight(newHeight);
            }
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial calculation
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        parent_ref.current.style.height = `${height+10}px`;
    }, [height]);

    const loaded = (e) => {
        setHeight(e.target.offsetHeight)
    }

    const logoAnimation = keyframes`
    0% { padding-top:0px; }
    25% { padding-top: 5px; }
    50% { padding-top: 10px; }
    75% { padding-top: 5px; }
    100% { padding-top: 0px;}
    `

    const Logo = styled.img `
    animation: ${logoAnimation} 4s steps(5) infinite;
    filter: drop-shadow(10px 10px 2px rgba(0,0,0,0.5));
    width: 1000px;
    max-width: 95%;
    height: auto;
    `

    const Child = styled.div `
    position: absolute;
    width: 100%;
    `

    const Parent = styled.div `
    width: 100%;
    text-align: center;
    position: relative;
    padding-top: 10px;
    `

    return (
        <Parent ref={parent_ref}>
            <Child>
                <Logo src="./assets/logo.png" alt="logo" ref={img_ref} onLoad={loaded}/>
            </Child>
        </Parent>
    )
}