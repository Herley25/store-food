import { Image, View, Text } from "react-native";
import { styles } from "./styles";

const Welcome = () => {
    return (
        <View>
            <Image style={styles.logo} />

            <Text style={styles.title}>Boas Vindas ao Store Food!</Text>

            <Text style={styles.subtitle}>Tenha cupons de vantagens para usar em seus estabelecimentos favoritos.</Text>
        </View>
    );
}

export default Welcome;