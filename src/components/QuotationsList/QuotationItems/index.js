9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function QuotationItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logBitcoin}
            source={require("../../../img/logobitcoin.png")}
          />

          <Text style={styles.dayCotation}>07/05/2021</Text>
        </View>
      </View>
      <View style={styles.contextRigth}>
        <Text style={styles.price}>$ 53331.052</Text>
      </View>
    </View>
  );
}
