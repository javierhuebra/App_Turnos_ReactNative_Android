/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
  Modal,
  FlatList, 
  Alert
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';
const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const [modalPaciente, setModalPaciente] = useState(false)

  const pacienteEditar = (id) => {
    const pacienteEditar = pacientes.filter((paciente) => paciente.id === id)
    setPaciente(pacienteEditar[0])
  }

  const pacienteEliminar = (id) => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text:'Cancelar'},
        {text: 'Sí, eliminar', onPress: () =>{
          const pacientesActualizados = pacientes.filter(
            pacientesState => pacientesState.id !== id)

            setPacientes(pacientesActualizados)
        }}
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Image
            style={styles.imagenLogo}
            source={require('./src/images/logo_huebrajavier.png')} />
          <Text style={styles.textoHeader}>v 1.1</Text>
        </View>
        <Text style={styles.titulo}>
          Administrador de turnos {''}
          <Text style={styles.tituloBold}>Veterinaria</Text>
        </Text>
        <View style={styles.contenedorLogoPrincipal}>
        <Image
            style={styles.imagenLogoPrincipal}
            source={require('./src/images/fuji_logo.png')} />
        </View>
        

        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.btnNuevaCita}
        >
          <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
        </Pressable>

        
      </View>
      {pacientes.length === 0 ?
          <Text style={styles.noPacientes}>No hay pacientes aún</Text> :
          <FlatList
            data={pacientes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Paciente
                  item={item}
                  setModalVisible={setModalVisible}
                  setPaciente={setPaciente}
                  pacienteEditar={pacienteEditar}
                  pacienteEliminar={pacienteEliminar}
                  setModalPaciente={setModalPaciente}
                />
              )
            }}
          />}
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />

      <Modal
        visible={modalPaciente}
        animationType='slide'
      >
            <InformacionPaciente
              setModalPaciente={setModalPaciente}
              paciente={paciente}
              setPaciente={setPaciente}
            />
      </Modal>

      <View style={styles.header}>
        <Text style={styles.textoHeader}>+54 291 555555</Text>
        <Text style={styles.textoHeader}>javieremanuelhuebra@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
    justifyContent: 'space-between'

  },
  header: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40
  },
  imagenLogo: {
    height: 30,
    width: 200,
    resizeMode: 'contain',
    marginLeft: 5,


  },

  contenedorLogoPrincipal:{
    marginTop:10,
    height:300,
    justifyContent:'center',
    alignItems:'center'
  },
  imagenLogoPrincipal:{
    resizeMode:'contain',
    height:300
  },  

  textoHeader: {
    color: 'black',
    marginRight: 5,
    marginLeft: 5
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '700'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9'
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900'
  },
  noPacientes: {
    color: 'black',
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24

  },
  siPacientes: {
    color: 'black',
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24
  }

});

export default App;
