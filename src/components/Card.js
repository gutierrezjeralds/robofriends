import React, {Component} from 'react'
import {
    MDBContainer, MDBRow, MDBCol,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText
} from 'mdbreact';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    renderCol = (items) => {
        if ( Object.keys(items).length !== 0 ) {
            return (
                items.map(item => (
                    <MDBCol key={item.id} sm="6" md="4" lg="3" className="mb-3">
                        <MDBCard>
                            <img src={`https://robohash.org/${item.name}-${item.id}${Math.floor(Math.random() * 20)}`} alt={item.name} className="img-fluid heavy-rain-gradient waves" />
                            <MDBCardBody>
                                <MDBCardTitle>{item.name} {item.id}{Math.floor(Math.random() * 20)}</MDBCardTitle>
                                <MDBCardText>{item.description}</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                ))
            )
        } else {
            return (
                <MDBCol>
                    <h1>No data available!</h1>
                </MDBCol>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        {this.renderCol(this.props.items)}
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}

export default Card