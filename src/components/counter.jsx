import { getByPlaceholderText } from '@testing-library/react';
import React, { Component } from 'react';

class Counter extends Component {
    /*
     *  I think the purpose of the state property is to declare and
     *      initialize variables and constant. Constants reserved word
     *      is const and variables reserved word is let.
     */
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    /*
     *  In this property you can define you personalized style. Later used
     *      by calling the attribute style={this.style}.
     */
    style = {
        fontSize: 12,
        fontWeight: "bold",
    };

    /**
     *  This property checks if there is at least one element in the
     *      array tags.
     */
    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
        
        return this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)
    };

    /*
     *  Action for clicking the Increment buttom. It uses an error
     *      function (or arrow function?) replacing the need for a
     *      for a constructor '= () =>'. All this is to use the 'this'
     *      function.
     */
    handleIncrement = product => {
        console.log(product);
        //console.log('Increment Clicked', this);
        this.setState({ count: this.state.count + 1});
        
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // };

    render() {
        return (
        <React.Fragment>
            <span style={ this.style } className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
            <button 
                onClick={ () => this.handleIncrement({ id: 1}) }
                className="btn btn-secundary btn-sm">
                    Incerment
            </button>
            <ul>
                { this.state.tags.length === 0 && 'Insert a tag'}
                { this.renderTags() }
            </ul>
        </React.Fragment>
        );
    };

    /*
     *  This property defines the value of the attribure className in
     *      <span> in the render() property. If count is 0 the output
     *      is inside a yellow box ("warning"), otherwise it is in blue,
     *      ("primary").
     */
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    };

    /*
     *  This property is a function that contains an if statement.
     *      If count = 0 it will return the string 'Zero', otherwise
     *      it will return the current value of count.
     *  This property is called in the render property by the <span>
     *      attribute.
     */
    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    };
}
 
export default Counter;