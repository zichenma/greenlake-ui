import React, { useContext } from 'react';
import { ThemeContext } from '../App';

// 1.定义 props 接口使得组件在使用过程中有语意提示
interface IHelloProps {
    message?: string;
}



const Hello = (props: IHelloProps) => {
 
    return <h2 >{props.message}</h2>
}
// 2. React 定义了 FunctionComponent 如下，props follow 一个范型
// interface FunctionComponent<P = {}> {
//     (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
//     propTypes?: WeakValidationMap<P>;
//     contextTypes?: ValidationMap<any>;
//     defaultProps?: Partial<P>;
//     displayName?: string;
// }

// const Hello2: React.FunctionComponent<IHelloProps> = props => {
//     return <h2>{props.message}</h2>
// }

const Hello2: React.FC<IHelloProps> = props => {
    const theme = useContext(ThemeContext);

    const style = {
        color : theme.color,
        background: theme.background
    }
    return <h2 style={style}>{props.message}</h2>
}
// 增加了更多语意提示及静态功能：
Hello2.defaultProps = {
    message: "Hello World2"
};


export {
    Hello,
    Hello2
};