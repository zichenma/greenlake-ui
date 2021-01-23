import React, { useEffect, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';

const LikeButton: React.FC = () => {
    // 通过语法提示，可以看到， useSate 返回值是一个数组
    // 第一个元素是当前state的值，第二个元素是跟新state函数
    const [like, setLike] = useState(0);

    return (
        <button onClick={() => setLike(like + 1)}>
            like btn1 : { like } 👍 
        </button>
    )
}

const LikeButton2: React.FC = () => {
    // 用单个 state: 
    // const [obj, setObj] = useState({like : 0, on: true});

    // 和 setState 不同， 这里可以用多个 states: 
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    const {x , y} = useMousePosition();

    //  type EffectCallback = () => (void | (() => void | undefined));
    // 默认情况下在第一次渲染，和每一次渲染都会执行
    useEffect(() => {
        console.log(`document title effect is running`)
        document.title = `点击了 ${like}`;
        // [like]： 只有当 like 变化时候 useEffect 才会执行， 而 on 变量变化则 useEffect不会执行
    }, [like])
    
    // 实验：
    // 当点击 handleAlert 后， 继续点击 like button
    // 当 3 秒后 Alert 窗口显示 like 的数量 要小于 like button 上 like 数量
    // 结论：
    // 1. handleAlert 捕捉到的是，触发 click 事件时的 like 数量
    // 2. Like 仅是一个常量， 当 setLike 时候 React 会带着不同的 like 值， 再次调用组件， 
    // 然后 react 会根据 like 值，更新 dom， 以保持渲染输出一致。这里的关键在于，
    // 任意一次渲染中的 like 常量，都不会随之时间改变

    function handleAlertClick() {
        setTimeout(() => {
            alert(`you clicked on ${like}`)
        }, 3000)
    }

    return (
        <>
        {/* 和 setState 不同，useState 在更新状态的时候， 总是替换 state，所以这里需要把全部属性都添加上 */}
        {/* <button onClick={() => setObj({like : obj.like + 1, on: obj.on})}>
            like btn2 : { obj.like } 👍 
        </button> */}
         <h2> 
            自定义 hook : < br/>
            X : { x } < br/>
            Y : { y }
        </h2>
         <button onClick={() => setLike(like + 1)}>
            like btn2 : { like } 👍 
        </button>
        <button onClick={() => setOn(!on)}>
            { on ? 'ON' : 'OFF' } 
        </button>
        <button onClick={handleAlertClick}>Alert!</button>
        </>
    )
}

export { LikeButton, LikeButton2 };