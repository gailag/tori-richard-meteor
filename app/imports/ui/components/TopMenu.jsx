import React from 'react';
import { Menu, Container, Image, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="topmenu">
        <Container>
          <Menu.Item href='#'>MEN`S</Menu.Item>
          <Menu.Item href='#'>WOMEN`S</Menu.Item>
          <Menu.Item href='#'>KID`S</Menu.Item>
          <Image src="https://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/bwod-tori-richard-logo.svg" size={'small'}/>
          <Menu.Item href='#'>ABOUT</Menu.Item>
          <Menu.Item href='#'>STORES</Menu.Item>
          <Menu.Item href='#'>BLOGS</Menu.Item>
          <Menu.Item position="right" href='#'><Icon name="search" /></Menu.Item>
          <Menu.Item right href='#'><Icon name="user outline" /></Menu.Item>
          <Menu.Item right href='#'><Icon name="shopping bag" /></Menu.Item>
        </Container>
      </Menu>
    );
  }
}
