import React, { useState, useEffect } from 'react';
 
// 刷新页面
// 1. render()
// 2. useEffect : add effect
// 点击页面
// 3. render()
// 4. useEffect: remove effect
// 5. useEffect: add effect (another one)
const MouseTracker: React.FC = () => {
    const [positions, setPositions] = useState({x : 0, y : 0});

    useEffect(() => {
        console.log('add effect')
        const updateMouse = (e: MouseEvent) => {
            setPositions({x : e.clientX, y : e.clientY});
        }
        document.addEventListener('click', updateMouse);
        return () => {
            console.log('remove effect')
            document.removeEventListener('click', updateMouse);
        }
    })
    console.log('before render ', positions.x);
   
    return (
        <p>
            X : { positions.x } < br/>
            Y : { positions.y }
        </p>
    )
}


export default MouseTracker;