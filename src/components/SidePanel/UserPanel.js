import React, { Component } from 'react';
import { Grid, Header, Icon, Dropdown, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import firebase from '../../firebase';

class UserPanel extends Component {
  state = {
    // user: this.props.currentUser
    displayName: this.props.currentUser.displayName,
    photoURL: this.props.currentUser.photoURL
  }

  dropdownOptions = () => [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>{this.state.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>,
    },
    {
      key: 'signout',
      text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out!'));
  }

  render() {
    const { displayName, photoURL } = this.state;
    const { primaryColor } = this.props;

    return (
      <Grid style={{ background: primaryColor }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>DevChat</Header.Content>
            </Header>

            {/* User Dropdown */}
            <Header style={{ padding: '0.25em' }} as="h4" inverted>
              <Dropdown
                trigger={
                  <span>
                    <Image src={photoURL} spaced="right" avatar />
                    {displayName}
                  </span>
                }
                options={this.dropdownOptions()} 
              />
            </Header>
          </Grid.Row>

        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(UserPanel);
