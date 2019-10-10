import React from 'react';

import Video from "../../components/Video";

import { Scrollbars } from 'react-custom-scrollbars';
import api from '../../services/api';

import logo from '../../assets/logo_dark.png'
import './styles.css'

class Dashboard extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            videos: [],
            visible: 5,
            error: false,
        };

        this.loadMore = this.loadMore.bind(this);

        // this.handleClick = this.handleClick.bind(this);
    }
    

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }
    
    async componentDidMount() {
        
        const response = await api.get();
        
        this.setState({ videos: response.data.items });
    }
    
    logout = () => {
        this.props.history.push("/");
    };
    
    render() {
       
        return (
            <>
             
                
                <main className="main">
                    <article className="wrapper-1">
                        <div className="item-1">
                            <div className="logo__item" >
                                <div>
                                    <img src={logo} alt="The Witcher"/>
                                </div>
                            </div>
                            <div className="button__content" >
                                <ul>
                                    <li><button className="btn__default" onClick={this.handleClick}>Trailers</button></li>
                                    <li><button className="btn__default" onClick={this.logout}>Logout</button></li>
                                </ul>
                                
                            </div>
                        </div>
                    
                        <aside className="item-2">
                            <Scrollbars>
                          
                                <ul className="wrapper__video" aria-live="polite">
                                    {this.state.videos.slice(0, this.state.visible).map(item => (
                                        <Video key={item.id} video={item} />
                                    ))}
                                    <li className="loadMore" >
                                        {this.state.visible < this.state.videos.length &&
                                            <button onClick={this.loadMore} type="button" className="btn__default">Load more</button>
                                        }
                                    </li>
                                </ul>
                                
                            </Scrollbars>
                            
                        </aside>
                    </article>
                </main>     
                
            </>
        )
    }

}

export default Dashboard;