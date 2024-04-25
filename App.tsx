import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import ContactListItem, { ContactInfo } from "./src/components/contactListItem";

function App(): React.JSX.Element {
  const [contacts, setContacts] = useState<ContactInfo[]>([]);

  const fetchContacts = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: ContactInfo[] = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, []);

  const renderItem = ({ item }: { item: ContactInfo }) => (
    <ContactListItem contact={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
  },
});
