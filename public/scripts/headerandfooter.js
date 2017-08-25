var rootElementHead =
    React.createElement('div', { className: "btn-group btn-group-justified" },
        React.createElement('a', {
            href: '/',
            className: "btn btn-primary"
        }, 'Home'),
        React.createElement('a', {
            href: '/white',
            className: "btn btn-primary"
        }, 'White'),
        React.createElement('a', {
            href: '/asian',
            className: "btn btn-primary"
        }, 'Asian'),
        React.createElement('a', {
            href: '/black',
            className: "btn btn-primary"
        }, 'Black'),
        React.createElement('a', {
            href: '/hispanic',
            className: "btn btn-primary"
        }, 'Hispanic'),
        React.createElement('a', {
            href: '/other',
            className: "btn btn-primary"
        }, 'Other/Mixed'),
        React.createElement('a', {
            href: '/unknown',
            className: "btn btn-primary"
        }, 'Unknown')
    )


var rootElementFoot =
    React.createElement('a', {
            href: "#top"
        },
        React.createElement('button', {
            className: "btn btn-primary btn-block",
            type: "button"
        }, "Back To Top")
    )



ReactDOM.render(rootElementHead, document.getElementsByClassName('navbar')[0])
ReactDOM.render(rootElementFoot, document.getElementsByClassName('myfooter')[0])