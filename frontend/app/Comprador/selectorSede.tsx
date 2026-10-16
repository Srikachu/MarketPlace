// app/Comprador/selectorSede.tsx
import { View, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { styles as globalStyles } from '@/constants/Styles';
import { Palette, Radius, Spacing, Type} from '@/constants/theme';
import Header from '../../components/Header';
import {ActionButton} from '../../components/ActionButton';
const sedes = [
  { id: 1, nombre: 'Sede 1' },
  { id: 2, nombre: 'Sede 2' },
  { id: 3, nombre: 'Sede 3' },
  { id: 4, nombre: 'Sede 4' },
];

export default function SelectorSede() {
  return (
    <ScrollView style={globalStyles.container}>
      {/* Header */}
      <Header title="selector de sede" />

      {/* Botones de sede */}
      <View style={localStyles.lista}>
        {sedes.map((sede) => (
          <ActionButton
                key={sede.id}
                label={sede.nombre}
                icon="location"
                onPress={() => router.push('/Comprador/hubcomprador')}
            />
        ))}
      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  lista: {
    padding: 	Spacing[6],
    gap: 	Spacing[6],
  },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing[4],
    backgroundColor: Palette.lima,
    borderRadius: Radius.full,
    minHeight: 56,
    paddingHorizontal: Spacing[6],
  },
  botonTexto: {
    ...Type.bodyLg,
    fontFamily: Type.label.fontFamily,
    color:Palette.ink,
    fontSize: 16
  },
});