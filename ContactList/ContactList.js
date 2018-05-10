
import React from "react";
import ContactListItem from "./ContactListItem";
import { View, ScrollView } from "react-native";

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20")
            .then(response => response.json())
            .then(data => {
                this.setState({ contacts: data.results });
            });
    }

    renderItems() {
        return this.state.contacts.map((e, index) => (
            // Pass position to set LTR or RTL alignment of data
            <ContactListItem key={index}
                name={`${e.name.title} ${e.name.first} ${e.name.last}`}
                profileImage={e.thumbnail}
                id={index % 2 == 0}
            />
        ));
    }

    render() {
        return <ScrollView>{this.renderItems()}</ScrollView>;
    }
}

