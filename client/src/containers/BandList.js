import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { selectBand } from '../actions/index';
import { bindActionCreators } from 'redux';
import Image from '../components/Image';

class BandList extends Component {
    renderList(){
        return this.props.bands.map((bands) => {
            return (
                <li key={bands.name} onClick={() => this.props.selectBand(bands)} className="list-group-item">{bands.name}</li>
            );
        });
    }
    render(){
        console.log(this.props.displayedImg);
        return(
            <div>
                
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
                <div className="col-sm-4"></div>
                <div className="col-sm-4 band-img">
                    { this.props.displayedImg && <Image source={this.props.displayedImg} />}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        bands: state.bands,
        displayedImg: state.displayedImg
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBand: selectBand}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList);