import React, { Component } from 'react';

// Import components
import Progress from '../components/Progress';
import Moment from 'react-moment';

// Import styling
import '../styles/ListItem.css';

class ListItem extends Component {
    render() {
        return (
			<div>
            <li className="ListItem">
                <div className="value">{this.props.index}</div>
                <div className="label">
                    {this.props.label}
                    {/* Compare progress against others in the list */}
                    <Progress min={this.props.min} max={this.props.max} value={this.props.value} />
                </div>
            </li>

			<div className="item_date">
				<h4> <Moment date={this.props.tanggal} format="dddd, DD MMMM YYYY" /> </h4>
			</div>
			</div>
        )
    }
}

// Enforce the type of props to send to this component
ListItem.propTypes = {
    label: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,
    index: React.PropTypes.number
}

export default ListItem;