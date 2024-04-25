import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type ContactInfo = {
  id: string;
  name: string;
  email: string;
};

type ContactListItemProps = {
  contact: ContactInfo;
};

const contactListItem: React.FC<ContactListItemProps> = ({ contact }) => {
  return (
    <View style={styles.item}>
      <View style={styles.avatar}>
        <Text style={styles.initialLetter}>{contact.name[0]}</Text>
      </View>
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.name}>{contact.name}</Text>
        <View style={{ height: 5 }} />
        <Text style={styles.email}>{contact.email}</Text>
      </View>
    </View>
  );
};

export default contactListItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "100%",
    height: 120,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  avatar: {
    height: 70,
    aspectRatio: 1,
    backgroundColor: "#005CB7",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  initialLetter: {
    fontSize: 25,
    color: "white",
  },
  name: {
    fontSize: 25,
  },
  email: {
    fontSize: 20,
  },
});
