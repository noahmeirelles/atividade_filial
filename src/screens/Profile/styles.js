import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    
    backgroundColor: "clear-gray"
   
  },
  button: {
    marginTop: 20,
    padding: 1,
    backgroundColor: "#C9D4FF",
    borderRadius: 6,

  },
  user: {
   
    padding: 10 ,
    backgroundColor: "gray",
    borderRadius: 7,
    height: 300,
    width:330,
    
  },
  but: {
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    
  },
  text: {
    fontSize: 16,
  },
  text2: {
    fontSize: 18,
    marginTop: -100
  },
  text1:{
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  bars:{
    fontSize: 25,
    marginTop: -60,
    marginBottom: 15,
    marginLeft: -100

  },
  perf:{
    height:160,
    width:160,
    borderRadius: 30,
   marginLeft:130,
   borderLeftWidth: 2.5,
   borderBottomWidth: 2.5,
   borderRightWidth: 2.5,
   borderTopWidth: 2.5,
   borderLeftWidth: 2.5,
   borderColor:'red',
   
  },
  perf2:{
    height:100,
    width:"100%",
    marginTop: 42
   
  }
});

export default styles;
