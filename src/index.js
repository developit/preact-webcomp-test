// import 'es6-promise';
// import 'isomorphic-fetch';
import OnsenUI from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


/*
// Preact
import { h, render, Component } from 'preact';
window.h = h;
class App extends Component {
	componentDidMount() {
		setTimeout( () => this.setState({ foo:'bar' }), 5000);
	}
	render() {
		return (
			<div>
			  <ons-page>
			    <ons-toolbar>
			      <div class="center navigation-bar__center navigation-bar__title">Title</div>
			    </ons-toolbar>
			    <p>
			      <ons-button modifier="light">Push</ons-button>
			    </p>
			  </ons-page>
			</div>
		);
	}
}
render(<App />, document.body);
*/


// React
import { createElement, Component } from 'react';
import ReactDOM from 'react-dom';
window.h = createElement;
class App extends Component {
	state = {};

	componentDidMount() {
		setInterval( () => {
			this.setState({
				count: (this.state.count || 0) + 1
			});
		}, 1000);
	}

	render() {
		let { count } = this.state,
			alt = !count%2;
		return (
			<div>
				<ons-page>
					<ons-toolbar>
						{ alt ? (
							<div className="center">Title</div>
						) : (
							<p className="center">Title alt</p>
						) }
					</ons-toolbar>
					{ alt ? (
						<p>
							<ons-button modifier="light">Push</ons-button>
						</p>
					) : (
						<div>
							<ons-button modifier="light">Push Alt</ons-button>
						</div>
					) }
				</ons-page>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.body);
