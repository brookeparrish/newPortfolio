import React from 'react';

var cardStyle = {
    width: "18rem"
}

function Projects() {
    return (
        <div className="container">
            <div className="row">
                <div className="card-deck mx-auto pb-4">
                    <div className="card text-center" style={cardStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="# " className="card-link">Card link</a>
                            <a href="# " className="card-link">Another link</a>
                        </div>
                    </div>

                    <div className="card text-center" style={cardStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="# " className="card-link">Card link</a>
                            <a href="# " className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="card-deck mx-auto pb-2">
                    <div className="card text-center" style={cardStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="# " className="card-link">Card link</a>
                            <a href="# " className="card-link">Another link</a>
                        </div>
                    </div>

                    <div className="card text-center" style={cardStyle}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="# " className="card-link">Card link</a>
                            <a href="# " className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;