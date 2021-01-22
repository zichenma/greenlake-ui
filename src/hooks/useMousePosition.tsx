import { useState, useEffect } from 'react';
 
// 自定义 Hook (以 use 开头)

const  useMousePosition = () => {
    // 该 state 只会在这个组件中使用，并不会与其他 hook 共享
    const [positions, setPositions] = useState({x : 0, y : 0});

    useEffect(() => {
        console.log('add effect', positions.x)
        const updateMouse = (e: MouseEvent) => {
            setPositions({x : e.clientX, y : e.clientY});
        }
        document.addEventListener('mousemove', updateMouse);
        return () => {
            console.log('remove effect', positions.x);
            document.removeEventListener('mousemove', updateMouse);
        }
    },[]);

    return positions;
}

export default useMousePosition;