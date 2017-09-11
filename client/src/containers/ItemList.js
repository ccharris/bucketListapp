import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';

class ItemList extends Component {
    renderList(){
        return this.props.items.map((items) => {
            return (
                <tr key={items.item}>
                    <td>{items.item}</td>
                    <td>{items.category}</td>
                    <td>{items.date}</td>
                </tr>
            );
        });
    }
    render(){
        return(
            <Table striped bordered className="col-sm-4">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Finish By</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderList()}
                </tbody>
            </Table>
        );
    }
}
function mapStateToProps(state){
    return{
        items: state.items
    };
}

export default connect(mapStateToProps)(ItemList);