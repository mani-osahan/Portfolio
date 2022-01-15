import React from 'react'
import Modal from "./Modal"

class Dashboard extends React.Component{

    constructor() {
        super();
        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)


    }


    showModal = () => {
        this.setState({show:true})
    }

    hideModal = () => {
        this.setState({show:false})
    }


    render() {

        return(
            <main>
                <h1>React Modal</h1>
                <Modal show={this.state.show} handleClose={this.hideModal()}>
                    <p>Modal</p>
                </Modal>
            </main>
        )
    }
}


export default Dashboard