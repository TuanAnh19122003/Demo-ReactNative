import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons'
import Icon2 from '@react-native-vector-icons/fontawesome6'
import ReadMore from '@fawazahmed/react-native-read-more';

const DetailScreen = () => {
    const introText = `A gripping historical fiction novel that intertwines past and present, 'The Pieces We Keep' explores the mysterious connections between a young woman and a WWII-era story.`;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.navigation}>
                <Icon name='arrow-back' size={30} />
                <Icon2 name='share-from-square' size={30} />
            </View>
            <View style={styles.detail}>
                <Image
                    source={{ uri: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/ten-cua-doa-hong-560px-1.jpg?v=1712637799820' }}
                    style={styles.img}
                />
                <View style={styles.name}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>The pieces we keep</Text>
                    <Text style={{ fontSize: 14, color: 'gray', paddingTop: 15, }}>By Mary Alice</Text>
                    <View style={styles.category}>
                        <TouchableOpacity style={styles.cate}>
                            <Text>Historical Fiction</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 10, borderRadius: 10, padding: 10, backgroundColor: '#ebebeb', }}>
                            <Text>Sister</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rate}>
                        <View style={styles.star}>
                            <Icon name='star' style={{ color: '#ffe23b' }} size={25} />
                            <Icon name='star' style={{ color: '#ffe23b' }} size={25} />
                            <Icon name='star' style={{ color: '#ffe23b' }} size={25} />
                            <Icon name='star' style={{ color: '#ffe23b' }} size={25} />
                            <Icon name='star-half-outline' style={{ color: '#ffe23b' }} size={25} />
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#ffe23b', fontSize: 18 }}>4.5</Text>
                            <Text style={{ color: 'gray', fontSize: 18 }}> (268)</Text>
                        </View>

                    </View>
                    <Text style={{ fontSize: 18, color: 'cyan', marginTop: 20, }}>$ 7.50</Text>
                </View>
            </View>
            <View style={styles.intro}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Introduction</Text>
                <ReadMore
                    numberOfLines={3}
                    seeMoreText="Read More"
                    seeLessText="Read Less"
                    seeMoreStyle={styles.readMore}
                    seeLessStyle={styles.readMore}
                >
                    <Text style={{ fontSize: 16, color: 'gray', marginTop: 10 }}>
                        {introText}
                    </Text>
                </ReadMore>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>Catalog: The 235 chap</Text>
                <Icon name='menu' size={30}/>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>Add to bookshlf</Text>
                <Icon name='add-circle-outline' size={30}/>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>Comment</Text>
                <Text style={{fontSize:15, color:'cyan'}}>write a comment</Text>
            </View>
            <View style={styles.comment}>
                <Image 
                    source={{uri:'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'}}
                    style={{width:100, height:100, borderRadius:50}}
                />
                <Text style={styles.commentText}>
                   This book, right off the bat, has to off my, favourite things going for it. 
                   It's a historical fiction read(one of many...)
                </Text>
            </View>
            <View style={styles.comment}>
                <Image 
                    source={{uri:'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'}}
                    style={{width:100, height:100, borderRadius:50}}
                />
                <Text style={styles.commentText}>
                   This book, right off the bat, has to off my, favourite things going for it. 
                   It's a historical fiction read(one of many...)
                </Text>
            </View>
            <View style={styles.comment}>
                <Image 
                    source={{uri:'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'}}
                    style={{width:100, height:100, borderRadius:50}}
                />
                <Text style={styles.commentText}>
                   This book, right off the bat, has to off my, favourite things going for it. 
                   It's a historical fiction read(one of many...)
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={{
                    flex: 1,
                    padding: 12,
                    borderRadius: 10,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    marginHorizontal: 5,
                    borderWidth:1,
                    borderColor:'cyan'
                }}>
                    <Text style={[styles.btnText,{color:'cyan'}]}>Free trial</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    navigation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    detail: {
        marginTop: 30,
        flexDirection: 'row',
    },
    img: {
        height: 250,
        width: 150
    },
    name: {
        paddingTop: 20,
        padding: 20,
        paddingLeft: 20
    },
    category: {
        paddingTop: 10,
        flexDirection: 'row',
    },
    cate: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#ebebeb',
    },
    rate: {
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        flexDirection: 'row',
    },
    intro: {
        marginTop: 30
    },
    readMore: {
        fontSize: 16,
        color: 'blue',
        marginTop: 5
    },
    text:{
        paddingTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    comment:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:10,
        paddingTop:10
    },
    commentText:{
        flex: 1, 
        flexWrap: 'wrap', 
        marginLeft: 10, 
        fontSize: 16, 
    }, 
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 30,
    },
    btn: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        backgroundColor: 'cyan',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})