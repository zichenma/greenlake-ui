import React from 'react';
import axios from 'axios';


interface ILoaderState {
    data: any;
    isLoading : boolean
}

interface ILoaderProps {
    data: any;
}
 // HOC 的弊端： 代码逻辑复杂   
const withLoader = <P extends ILoaderState> (WrappedComponent : React.ComponentType<P>, url : string) => {
    return class LoaderComponent extends React.Component<Partial<ILoaderProps>, ILoaderState> {
        constructor(props : any) {
            super(props);
            this.state = {
                data : null,
                isLoading : false
            }
        }

        getData = async () => {
            const result = await axios.get(url);
            this.setState({
                data : result.data,
                isLoading : false
            })
        }

        componentDidMount() {
            this.setState({
                isLoading : true,
            })
            this.getData();
        }

        render() {
            const {data, isLoading } = this.state;
            return (
                // HOC 的弊端： 需要添加新的节点 
                <>
                  {
                    isLoading || !data  ? <p>data is loading</p> : 
                    <WrappedComponent {...this.props as P} data={data} />
                  }
                </>
            )
        }
        
    }
}

export default withLoader;