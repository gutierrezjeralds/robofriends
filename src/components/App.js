import React from 'react';
import { connect } from 'react-redux'
import Search from './Search'
import Card from './Card'
import ErrorBoundery from './ErrorBoundry'

import { setSearchField } from '../actions'
import { setRequestItems } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchItems.searchField,
        items: state.requestItems.items,
        isPending: state.requestItems.isPending,
        error: state.requestItems.error,
        randomNum: state.randomNum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSearchField: (event) => dispatch(setSearchField(event.target.value)),
        onRequestItems: () => dispatch(setRequestItems())
    }
}

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestItems()
    }

    render() {
        const { searchField, onChangeSearchField, items, isPending, error, randomNum } = this.props
        const filterItems = items.filter(item => {
            return item.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return (
            <React.Fragment>
                <section className="py-4 cloudy-knoxville-gradient">
                    <Search searchFieldChange={onChangeSearchField}/>
                    <ErrorBoundery>
                        <Card items={filterItems} isPending={isPending} error={error} randomNum={randomNum} />
                    </ErrorBoundery>
                </section>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
