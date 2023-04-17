import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

import {formatearFecha} from '../helpers'

const Paciente = ({ 
    item,
    setModalVisible,
    setPaciente,
    pacienteEditar,
    pacienteEliminar,
    setModalPaciente
}) => {
    const { paciente, date, id } = item //Aca se aplico destructuring para no poner item.id por ejemplo

    
    return (
        <Pressable onPress={() => {
            setModalPaciente(true)
            setPaciente(item)
            }}>
            <View style={styles.contenedorReserva}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <Text style={styles.textPaciente}>{paciente}</Text>
                    <Text style={styles.textFecha}>{formatearFecha(date)}</Text>
                </View>
                <View style={styles.viewDerecho}>
                    <Pressable
                        style={[styles.btn, styles.btnEditar]}
                        onPress={() => {
                            setModalVisible(true)
                            pacienteEditar(id)
                        }}

                    >
                        <Text style={[styles.textFecha, styles.textoViewDerecho]}>Editar</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.btn, styles.btnEliminar]}
                        onPress={() => {
                            pacienteEliminar(id)
                        }}
                    >
                        <Text style={[styles.textFecha, styles.textoViewDerecho]}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

export default Paciente

const styles = StyleSheet.create({
    contenedorReserva: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#FFF',
        padding: 20,
        borderBottomColor: '#94a3bb',
        borderBottomWidth: 3,
        borderRightWidth: 3,
        borderRightColor: '#94a3bb',
        borderTopWidth: 3,
        borderTopColor: '#FFF',
        borderLeftWidth: 3,
        borderLeftColor: '#FFF',


        flexDirection: 'row',
        justifyContent: 'space-between'


    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700'
    },

    textPaciente: {
        color: '#6d28d9',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5,


    },
    textFecha: {
        fontSize: 15,
        color: '#374151',


    },
    viewDerecho: {

        justifyContent: 'space-between',


    },
    textoViewDerecho: {
        textAlign: 'center',
        fontWeight: '700',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12
    },

    btn: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5
    },

    btnEditar: {
        backgroundColor: '#F59E08'
    },

    btnEliminar: {
        backgroundColor: '#EF4444',

    }

})