import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact'

class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <MDBInput
                                hint="Search"
                                type="text"
                                containerClass="active-pink active-pink-2 mt-0 mb-3"
                                onChange={this.props.searchFieldChange}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        )
    }
}

export default Search