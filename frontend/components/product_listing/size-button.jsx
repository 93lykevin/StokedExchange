import React from 'react';

class SizeButton extends React.Component{
    constructor(props){
        super(props)

        this.sendBackSize = this.sendBackSize.bind(this);
    }

    sendBackSize() {
        this.props.handleSelectSize(this.props.size)
    };

    render() {
        return(
            <div className="button-container" onClick={this.sendBackSize}>
                <div className="button-inner">
                    <div className="size-value">{this.props.size}</div>
                    {/* this is just text for sizes so this can be  */}
                    <div className="money-value">
                        {/* <span className="how-much">{this.props.lowest_ask}</span>  */} 
                        {/* Probably need to change this ^ */}
                        {/* add this back in when I can filter through all my product listings of an individual product and get their sizes. Maybe use a selector  */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SizeButton;