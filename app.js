const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
};

const App = () => {
    return React.createElement('div', {}, [
    React.createElement('h1', {class: 'title'}, 'React IS rendered'),
    React.createElement(Person, {name : 'Marco', occupation: 'work'}, null),
    React.createElement(Person, {name : 'Simone', occupation: 'senior work'}, null),
    React.createElement(Person, {name : 'Alex', occupation: 'bomber'}, null)
    ]);
}

//ReactDOM.render(React.createElement(App), document.getElementById('root'));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));