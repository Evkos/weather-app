import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { tokenPopupShowedAction } from '../../actions/actions'

class TokenPopup extends Component {

  handleClose = () => {
    const { tokenPopupShowedAction } = this.props
    tokenPopupShowedAction()
  }

  updateToken = (e) => {
    //e.preventDefault()
    const data = new FormData(e.target)

    const accessToken = data.get('token')
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken)
    }

  }

  render () {
    const { showTokenPopup } = this.props
    return (
      <Modal show={showTokenPopup} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Access Token</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.updateToken}>
          <Modal.Body>
            <Form.Text className="text-muted mb-2">
              Your current access token: {localStorage.getItem('accessToken')}
            </Form.Text>
            <Form.Control type="text" name="token" placeholder="Enter API token"/>
            <Form.Text className="text-muted mt-2">
              Please, enter API token from your AccuWeather aplication
            </Form.Text>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose} type="submit">
              Save API Token
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = ({ showTokenPopup }) => {
  return { showTokenPopup }
}

const mapDispatchToProps = {
  tokenPopupShowedAction
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(TokenPopup)