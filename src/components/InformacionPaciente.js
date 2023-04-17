import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { formatearFecha } from '../helpers'

const InformacionPaciente = ({ setModalPaciente, paciente, setPaciente }) => {
    console.log(paciente)
    return (
        <View style={styles.pantallaModal}>
            <Text style={styles.titulo}>Información <Text style={styles.tituloBold}>Paciente</Text></Text>
            <Pressable style={styles.btnAtras} onPress={() => {
                setModalPaciente(false)
                setPaciente({})
                }}>
                <Text style={styles.btnTextoModal}>Regresar</Text>
            </Pressable>

            <View style={styles.contenidoInfo}>
                <View>
                    <Text style={styles.labelPaciente}>NOMBRE:</Text>
                    <Text style={[styles.labelPaciente, styles.dataPaciente]}>
                        {paciente.paciente}
                    </Text>

                    <Text style={styles.labelPaciente}>PROPIETARIO:</Text>
                    <Text style={[styles.labelPaciente, styles.dataPaciente]}>
                        {paciente.propietario}
                    </Text>

                    <Text style={styles.labelPaciente}>EMAIL:</Text>
                    <Text style={[styles.labelPaciente, styles.dataPaciente]}>
                        {paciente.email}
                    </Text>

                    <Text style={styles.labelPaciente}>TELÉFONO:</Text>
                    <Text style={[styles.labelPaciente, styles.dataPaciente]}>
                        {paciente.telefono}
                    </Text>

                    <Text style={styles.labelPaciente}>FECHA ALTA:</Text>
                    <Text style={[styles.labelPaciente, styles.dataPaciente]}>
                        {formatearFecha(paciente.date)}
                    </Text>

                    <Text style={styles.labelPaciente}>SÍNTOMAS:</Text>
                    <Text style={[styles.labelPaciente, styles.dataPaciente]}>
                    {paciente.sintomas}
                    </Text>


                </View>
            </View>


        </View>
    )
}

export default InformacionPaciente

const styles = StyleSheet.create({
    btnTextoModal: {
        color: '#F2D116',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    btnAtras: {
        backgroundColor: '#4E00CE',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        borderRadius: 10
    },
    pantallaModal: {
        backgroundColor: '#D46DE5',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF',
        
    },
    tituloBold: {
        fontWeight: 900
    },
    contenidoInfo: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 10,


        //le pongo sombra con la app web de ayuda
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.84,

        elevation: 8,
    },
    labelPaciente: {
        color: '#334155',
        fontSize: 20,
        
    },
    dataPaciente: {
        fontWeight: 700,
        
        marginBottom: 8
    }

})