import React from 'react';
import { Container, Header, Grid, Image, Label } from 'semantic-ui-react';

export default class MainBody extends React.Component {
  render() {
    return (
      <Container className="main body">
        <Header as='h2'>SHOP BY</Header>
        <Grid columns={4}>

          <Grid.Column>
            <Image src="https://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/bwod-mens-collection.jpg" />
            <Label className="click" href='#'>MEN`S NEW ARRIVALS</Label>
          </Grid.Column>

          <Grid.Column>
            <Image src="https://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/bwod-womens-collection.jpg" />
            <Label className="click" href='#'>WOMEN`S NEW ARRIVALS</Label>
          </Grid.Column>

          <Grid.Column>
            <Image src="https://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/bwod-girls-collection.jpg" />
            <Label className="click" href='#'>GIRLS</Label>
          </Grid.Column>

          <Grid.Column>
            <Image src="https://courses.ics.hawaii.edu/ics314s22/morea/ui-frameworks/bwod-boys-collection.jpg" />
            <Label className="click" href="#">BOYS</Label>
          </Grid.Column>

        </Grid>
      </Container>
    );
  }
}
