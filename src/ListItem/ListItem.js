import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state={

        };

    }

    render() {
        return (
            <div className="list-wrapper">
                <aside>
                    <div className='circle'>+</div>
                </aside>
            </div>
        );
    }
}

export default ListItem;
