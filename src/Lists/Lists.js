import React, { Component } from 'react';
import  ListJson from '../list.json';
class Lists extends Component {
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            items: ListJson.items,
        };
    }

    render() {
        let items = this.state.items;

        return (
                <ul>
                    {items.map(item => (
                        <li key={item.number} onClick={
                            (e) => {
                                this.props.updateData(e.target.innerText);
                            }
                        }
                        >
                            {item.number}
                        </li>
                    ))}
                </ul>
        );
    }
}

export default Lists;
