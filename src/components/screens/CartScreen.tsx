import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Icon from '@react-native-vector-icons/ionicons'
import { RadioButton } from 'react-native-paper';

const Data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        author: 'By Mary Alice',
        price: '7.5',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        author: 'By Mary Alice',
        price: '7.5',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        author: 'By Mary Alice',
        price: '7.5',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-21d53abb28ba',
        title: 'Fourth Item',
        author: 'By Mary Alice',
        price: '7.5',
        image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820'
    },
];

const CartScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.head}>
                <Icon name='arrow-back-sharp' size={30} />
                <Text style={styles.text}>My Cart</Text>
            </View>
            <View style={styles.select}>
                <RadioButton
                    value='first'
                />
                <Text style={styles.textSelect}>Select All</Text>
            </View>
            <View>
                <FlatList
                    data={Data}
                    renderItem={({ item }) =>
                        <View style={styles.product}>
                            <RadioButton
                                value='first'
                            />
                            <Image
                                source={{ uri: item.image }}
                                style={styles.img}
                            />
                            <View style={styles.cart}>
                                <Text style={styles.textImg}>{item.title}</Text>
                                <Text style={styles.textAuthor}>{item.author}</Text>
                                <Text style={styles.textPrice}>$ {item.price}</Text>
                            </View>
                        </View>}
                />
            </View>
            <View style={styles.checkout}>
                <View style={{width:'100%',flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingBottom:10,}}>
                    <Text style={styles.totalText}>Sub total:</Text>
                    <Text style={[styles.totalText, {color:'cyan'}]}>$ 11,15</Text>
                </View>
                <TouchableOpacity style={styles.checkoutBtn}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text: {
        fontSize: 20,
        paddingLeft: 135
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    select: {
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textSelect: {
        fontSize: 15,
        paddingLeft: 15
    },
    img: {
        width: 100,
        height: 150
    },
    product: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
    cart: {
        paddingLeft: 20,
        paddingTop: 10,
    },
    textImg: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textAuthor: {
        paddingTop: 20,
        fontSize: 15,
        color: 'gray'
    },
    textPrice: {
        paddingTop: 20,
        fontSize: 15,
        color: 'cyan'
    },
    checkout: {
        alignItems: 'center',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingBottom:50
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    checkoutBtn: {
        backgroundColor: 'cyan',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width:'100%'
    },
    checkoutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
    },
})