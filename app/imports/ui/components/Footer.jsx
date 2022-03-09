import React from 'react';
import { Container, Grid, List, Input, Menu, Icon } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-background">

        <Container>
          <Grid columns={3}>

            <Grid.Column>
              <h4>
                <List.Item>HELP</List.Item>
              </h4>
              <List.Item>SHIPPING & HANDLING</List.Item>
              <List.Item>RETURNS</List.Item>
              <List.Item>ADA Accessibility</List.Item>
              <List.Item>PRIVACY POLICY</List.Item>
              <List.Item>FIND A STORE</List.Item>
              <List.Item>CONTACT US</List.Item>
            </Grid.Column>

            <Grid.Column>
              <h4>
                <List.Item>COMPANY</List.Item>
              </h4>
              <List.Item>GIFT CARDS</List.Item>
              <List.Item>SHOP OUR INSTAGRAM</List.Item>
              <List.Item>REVIEWS</List.Item>
              <List.Item>JOIN US</List.Item>
            </Grid.Column>

            <Grid.Column>
              <h4>
                <List.Item>LET`S STAY IN TOUCH</List.Item>
              </h4>
              <List.Item>Join our ohana and receive FREE SHIPPING off your first online order!</List.Item>
              <Input placeholder=' Email address ' Icon name="mail outline"/>
              <Menu.Item>
                <Icon name="facebook" size='big'/>
                <Icon name="instagram" size='big'/>
              </Menu.Item>
            </Grid.Column>

          </Grid></Container>
      </div>
    );
  }
}
