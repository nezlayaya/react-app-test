import React, { Component } from 'react';
import ListJson from "../list";
class ListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            items: ListJson.items,
            hideEl: false
        };

    }

    render() {
        let items = this.state.items;

        return (
            <div className="list-wrapper">
                <div className='right-side-lists'>
                    {
                        items.map(item => (
                            <div key={item.number} className='item-wrapper'>
                                <p>{item.title}</p>
                                <div><img src={item.img} alt=""/></div>
                                <p>{item.imgDescription}</p>
                                {this.props.numberOfLi == item.number && this.props.isLogin === true?
                                    <p className="hidden text">
                                        {item.hiddenInformation}
                                    </p> : ''
                                }
                                {this.state.hideEl === false && this.props.numberOfLi == item.number && this.props.isLogin === false  ||  this.props.numberOfLi == item.number && this.props.isLogin === false?
                                    <div className='hiddenPopap' ref='hiddenPopup'><p>You Should Login</p>
                                        <span onClick={
                                            ()=>{
                                                this.refs.hiddenPopup.style.display='none';
                                            }
                                        }>close</span>
                                    </div>
                                    :''
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ListItem;
