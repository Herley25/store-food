import { Text, View } from "react-native";
import {IconMapPin, IconQrcode, IconTicket} from "@tabler/icons-react-native"
import { styles } from "./styles";
import Step from "../step";

const Steps = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Veja como funciona:</Text>

            <Step
                icon={IconMapPin} 
                title="Encontre estabelecimentos"
                description="Veja locais perto de você que são parceiros do Store Food."
            />

            <Step
                icon={IconQrcode} 
                title="Ative o cupom com QR Code"
                description="Escaneie o QR Code no estabelecimento para usar o benefício."
            />

            <Step 
                icon={IconTicket}
                title="Garanta vantagens perto de você"
                description="Ative os cupons onde estiver, em diferentes tipos de estabelecimentos."
            />
        </View>
    );
}

export default Steps;