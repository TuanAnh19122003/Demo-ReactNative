import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Icon from '@react-native-vector-icons/ionicons';

const Data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-21d53abb28ba',
        title: 'Fourth Item',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-24d91aa97f63',
        title: 'Fifth Item',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
    {
        id: '58694a0f-3da1-471f-bd96-ee5571e29d72',
        title: 'Sixth Item',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function homeScreen() {
    return (
        <View style={{ padding: 10 }}>
            <View>
                <Icon style={styles.icon} name='search' size={24} />
                <TextInput
                    style={styles.search}
                    onChangeText={() => { }}
                    value=''
                    placeholder='search'
                />
            </View>
            <View style={styles.sty}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reading</Text>
                <TouchableOpacity>
                    <Text>View all <Icon name='arrow-forward-outline' size={20} /></Text>
                </TouchableOpacity>
            </View>
            <View style={{}}>
                <FlatList
                    data={Data}
                    renderItem={({ item }) =>
                        <View style={{ padding: 10 }}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.img}
                            />
                            <Text style={{ fontSize: 20, paddingTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
                        </View>}
                    horizontal={true}
                />
            </View>
            <View style={styles.sty}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bookself</Text>
                <TouchableOpacity>
                    <Text>View all <Icon name='arrow-forward-outline' size={20} /></Text>
                </TouchableOpacity>
            </View>
            <View style={{}}>
                <FlatList
                    data={Data}
                    renderItem={({ item }) =>
                        <View style={{ padding: 15, alignItems: 'center' }}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.img}
                            />
                            <Text style={{ fontSize: 20, paddingTop: 10, fontWeight: 'bold' }}>{item.title}</Text>
                        </View>}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 8,
        left: 10
    },
    search: {
        borderWidth: 1,
        paddingLeft: 30,
    },
    sty: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    img: {
        width: 100,
        height: 200
    }
})