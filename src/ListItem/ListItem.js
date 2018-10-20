import React, { Component } from 'react';
import ListJson from "../list";

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            items: ListJson.items
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
                                <p className="hidden text">
                                    {item.hiddenInformation}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ListItem;
