import React, { useState } from 'react';

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
    return (
        <>
        {/* 和 setState 不同，useState 在更新状态的时候， 总是替换 state，所以这里需要把全部属性都添加上 */}
        {/* <button onClick={() => setObj({like : obj.like + 1, on: obj.on})}>
            like btn2 : { obj.like } 👍 
        </button> */}
         <button onClick={() => setLike(like + 1)}>
            like btn2 : { like } 👍 
        </button>
        <button onClick={() => setOn(!on)}>
            { on ? 'ON' : 'OFF' } 
        </button>
        </>
    )
}

export { LikeButton, LikeButton2 };