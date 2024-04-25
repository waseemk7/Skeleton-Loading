import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { ContactListItem, ContactInfo } from "./src/components/contactListItem";

function App(): React.JSX.Element {
  const [contacts, setContacts] = useState<ContactInfo[]>([]);

  const contactsPlaceholderList = useMemo(() => {
    return Array.from({ length: 15 }).map((_) => null);
  }, []);

  const fetchContacts = useCallback(async () => {
    setContacts(undefined);

    // fetch contacts from json placeholder
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // wait for 2000ms to simulate loading
    await new Promise((resolve) => setTimeout(resolve, 5000));

    setContacts(data);
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
        data={contacts ?? contactsPlaceholderList}
        renderItem={renderItem}
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
