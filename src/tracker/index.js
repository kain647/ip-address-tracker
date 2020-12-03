import React from "react";
import Map from "./MapBox";

import {
  GlobalStyle,
  Container,
  Header,
  FormContainer,
  Form,
  Input,
  Button,
  PanelContainer,
  PanelHeading,
  PanelTable,
  MapContainer
} from "./styles";

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "",
      city: "--",
      status: "--",
      country: "--",
      countryCode: "--",
      lat: 40.71427,
      lng: -74.00597,
      timezone: "--",
      isp: "--",
      country_phone: "--",
      country_neighbours: "--",
      continent: "--",
      continent_code: "--",
      country_flag: "--",
      timezone_gmt: "--",
      currency: "--",
      currency_code: "--",
      currency_rates: "--"
    };
  }

  componentDidMount() {
    this.ipAddress();
  }

  ipAddress = async () => {
    const ip = this.state.ip;
    const api_url = await fetch(`http://ipwhois.app/json/${ip}`);
    const data = await api_url.json();
    //console.log(data)
    this.setState({
      ...data,
      ip: data.ip,
      lat: data.latitude,
      lng: data.longitude
    });
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      ip: value
    });
  };

  render() {
    const {
      ip,
      city,
      country,
      country_code,
      lat,
      lng,
      timezone,
      isp,
      country_phone,
      country_neighbours,
      continent,
      continent_code,
      country_flag,
      timezone_gmt,
      currency,
      currency_code,
      currency_rates
    } = this.state;

    return (
      <Container>
        <GlobalStyle />
        <Header>IP Address Location</Header>
        <FormContainer>
          <Form onSubmit={this.ipAddress}>
            <Input
              value={ip}
              onChange={this.onChange}
              type="text"
              placeholder="IP address"
            />
            <Button>Submit</Button>
          </Form>
        </FormContainer>
        <PanelContainer>
          <PanelHeading>IP Address Location</PanelHeading>
          <PanelTable>
            <table>
              <tr className="bg">
                <td>City</td>
                <td>{city}</td>
              </tr>
              <tr className="hover">
                <td>Continent</td>
                <td>{continent}</td>
              </tr>
              <tr className="bg">
                <td>Continent code</td>
                <td>{continent_code}</td>
              </tr>
              <tr className="hover">
                <td>Country</td>
                <td>{country}</td>
              </tr>
              <tr className="bg">
                <td>Country Code</td>
                <td>{country_code}</td>
              </tr>
              <tr className="hover">
                <td>Country flag</td>
                <td className="flag">
                  <img
                    style={{ width: "30px", height: "auto" }}
                    src={country_flag}
                  />
                </td>
              </tr>
              <tr className="bg">
                <td>Latitude & Longitude</td>
                <td>
                  {lat} {lng}
                </td>
              </tr>
              <tr className="hover">
                <td>Time zone</td>
                <td>{timezone}</td>
              </tr>
              <tr className="bg">
                <td>ISP</td>
                <td>{isp}</td>
              </tr>
              <tr className="hover">
                <td>Country Phone</td>
                <td>{country_phone}</td>
              </tr>
              <tr className="bg">
                <td>Timezone GMT</td>
                <td>{timezone_gmt}</td>
              </tr>
              <tr className="hover">
                <td>Currency</td>
                <td>{currency}</td>
              </tr>
              <tr className="bg">
                <td>Currency code</td>
                <td>{currency_code}</td>
              </tr>
              <tr className="hover">
                <td>Currency rates</td>
                <td>{currency_rates}</td>
              </tr>
              <tr className="bg">
                <td>Country neighbours</td>
                <td>{country_neighbours}</td>
              </tr>
            </table>
          </PanelTable>
        </PanelContainer>
        <MapContainer>
          <PanelHeading>Location of IP Address: {ip}</PanelHeading>
          <Map center={[lng, lat]} />
        </MapContainer>
      </Container>
    );
  }
}

export default Tracker;
