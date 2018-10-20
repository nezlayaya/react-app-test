import React, { Component } from 'react';
import  ListJson from '../list.json';
import ListItem from '../ListItem/ListItem'
class Lists extends Component {
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            items: ListJson.items,
            liVal: ''
        };
    }

    componentDidMount() {
    }

    render() {
        let items = this.state.items;

        return (
            <div className="lists-wrapper">
                <ul>
                    {items.map(item => (
                        <li key={item.number} onClick={
                            (e) => {
                                this.props.updateData(e.target.innerText);
                                console.log(e.target.innerText);

                            }
                        }
                        >
                            {item.number}
                        </li>
                    ))}
                </ul>
                <ListItem/>
            </div>
        );
    }
}

export default Lists;
