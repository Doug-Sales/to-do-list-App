import { View, Image } from "react-native"
import { styles } from "./style"

export function RocketLogo() {
    return (
        <View style={styles.container} >
            <Image
                source={require('../../../assets/rocket.png')}
                style={styles.imgResize}
            />
        </View>
    )
}