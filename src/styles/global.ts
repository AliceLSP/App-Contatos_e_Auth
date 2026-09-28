import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
},
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 6 
},
  button: { 
    padding: 12, 
    backgroundColor: '#0d6efd', 
    borderRadius: 6, 
    alignItems: 'center', 
    marginVertical: 10,
},
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold' 
},
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10 
 },
 card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
 },
 card_info:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
 }
});