import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if ( this.state.hasError ) {
            return (
                <React.Fragment>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <h1>Something went wrong!</h1>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </React.Fragment>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundry