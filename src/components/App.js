import React from 'react';
import Search from './Search'
import Card from './Card'
import ErrorBoundery from './ErrorBoundry'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            filterItems: [],
            serachField: ''
        }
    }

    componentDidMount() {
        this.getItems()
    }

    getItems = () => {
        fetch('./assets/json/data.json')
            .then(results => results.json())
            .then(json => {
                this.setState({
                    items: json,
                    filterItems: json               
                })
            })
    }

    onChangeSearchField = (event) => {
        // Filter items base on search
        const filter = this.state.items.filter(item => {
            return item.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        this.setState({
            filterItems: filter
        })
    }

    render() {

        return (
            <React.Fragment>
                <section className="py-4 cloudy-knoxville-gradient">
                    <Search searchFieldChange={this.onChangeSearchField.bind()}/>
                    <ErrorBoundery>
                        <Card items={this.state.filterItems} />
                    </ErrorBoundery>
                </section>
            </React.Fragment>
        )
    }
}

export default App;
