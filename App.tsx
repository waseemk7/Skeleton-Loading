import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

type ContactInfo = {
  id: number;
  name: string;
  email: string;
};

function App(): React.JSX.Element {
  const [contacts, setConatcts] = useState<ContactInfo[] | undefined>();

  const fetchContacts = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setConatcts(data);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>App.tsx</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
