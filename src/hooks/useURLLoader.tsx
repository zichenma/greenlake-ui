import {useState, useEffect }from 'react';
import axios from 'axios';

// 两个参数： 第一个 url, 第二个 deps 是一个数组，默认为一个空数组
const useURLLoader = (url: string, deps: any[] = []) => {
    // 这里 useState 如果没有 <any> 则类型会被判定为 null 
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const result = await axios.get(url);
            setData(result.data);
            setLoading(false);
        }
        getData();
    }, deps)
   
    return [data, loading];
}

export default useURLLoader;


