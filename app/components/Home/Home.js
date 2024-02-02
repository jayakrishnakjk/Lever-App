import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { handleLogoutAsync } from '../../redux/authSlice';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import UserProfile from '../../components/UserProfile';

const Home = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const userDetails = {
        name: user ? user.firstName : 'Raza',
    };

    console.log('Dealer dashboard');

    const handleLogout = () => {
        dispatch(handleLogoutAsync());
    };

    return (
        <View style={styles.container}>
            <UserProfile userDetails={userDetails} />
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButton: {
        backgroundColor: '#243b7f',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});