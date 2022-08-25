import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //Not In CSS, For Android Only [Also Not For iOS]
    shadowColor: "black", //For iOS Only
    shadowOffset: { width: 0, height: 2 }, //For iOS Only
    shadowRadius: 6, //For iOS Only
    shadowOpacity: 0.25, //For iOS Only
  },
});
