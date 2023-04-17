import React, { useState, useEffect } from 'react'

import {
    Modal, SafeAreaView, StyleSheet, Text, TextInput, View,
    ScrollView, Pressable, Alert
} from 'react-native'

import DatePicker from 'react-native-date-picker'

function Formulario({
    modalVisible, setModalVisible, pacientes, setPacientes, paciente: pacienteObj, setPaciente: setPacienteApp }) {
    const [paciente, setPaciente] = useState('')
    const [id, setId] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [date, setDate] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    useEffect(() => {
        if (Object.keys(pacienteObj).length > 0) {
            setId(pacienteObj.id)
            setPaciente(pacienteObj.paciente)
            setPropietario(pacienteObj.propietario)
            setEmail(pacienteObj.email)
            setTelefono(pacienteObj.telefono)
            setDate(pacienteObj.date)
            setSintomas(pacienteObj.sintomas)

        }

    }, [pacienteObj]) //si le pasas un arreglo vacio se va a ejecutar una sola vez, si le pongo paciente se ejecuta cada vez que cambia el paciente




    const handleCita = () => {
        if ([paciente, propietario, email, date, sintomas].includes('')) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios.',
                [{ text: 'Ok' }, { text: 'Me chupa un huevo', onPress: () => {
                    Alert.alert(
                        'A mi también!',
                        'Dale, hacé lo que te digo o no va a andar.',
                        [
                            {text: 'Bueno'}
                        ]
                    )
                } }]
            )

            return
        }

        //Revisar si es un registro nuevo o edicion
        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            date,
            sintomas
        }


        if (id) {
            //editando
            nuevoPaciente.id = id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente :
                pacienteState)

            setPacientes(pacientesActualizados)
            setPacienteApp({})
        } else {
            //nuevo registro
            nuevoPaciente.id = Date.now()
            setPacientes([...pacientes, nuevoPaciente])
        }

        setModalVisible(false)
        setId('')
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setDate(new Date())
        setSintomas('')
    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}>

            <SafeAreaView style={pacienteObj.id ? styles.contenido : styles.negrito}>
                <ScrollView>
                    <Text style={styles.titulo}>{pacienteObj.id ? 'Editar': 'Nueva'} {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable
                        style={styles.btnCancelar}
                        onPress={() => {
                            setModalVisible(false)
                            setPacienteApp({})
                            setId('')
                            setPaciente('')
                            setPropietario('')
                            setEmail('')
                            setTelefono('')
                            setDate(new Date())
                            setSintomas('')
                        }}
                    >
                        <Text
                            style={styles.btnCancelarTexto}

                        >
                            X Cancelar
                        </Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email Propietario'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Teléfono Propietario'
                            placeholderTextColor={'#666'}
                            value={telefono}
                            onChangeText={setTelefono} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha Alta</Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                                date={date}
                                locale='es'
                                mode='date'
                                textColor='#000000'
                                androidVariant='nativeAndroid'
                                onDateChange={(date) => setDate(date)} />
                        </View>

                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput
                            style={[styles.input, styles.sintomasInput]}
                            placeholder='Síntomas Paciente'
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4} />
                    </View>

                    <Pressable
                        style={styles.btnNuevaCita}
                        onPress={handleCita}
                    >
                        <Text
                            style={styles.btnNuevaCitaTexto}
                        >
                            {pacienteObj.id ? 'Editar': 'Agregar'} Cita
                        </Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>



        </Modal>
    )
}

const styles = StyleSheet.create({
    negrito:{
        backgroundColor: '#9264DB'
    },
    contenido: {
        backgroundColor: '#E6B662',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },
    tituloBold: {
        fontWeight: '900'

    },
    btnCancelar: {
        marginTop: 20,
        backgroundColor: '#5827a4',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: 'black'
    },
    campo: {
        marginTop: 5,
        marginHorizontal: 30,
        marginBottom: 5
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'

    },
    sintomasInput: {
        height: 100,
    },
    fechaContenedor: {
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#F59E0B',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16
    }
})

export default Formulario