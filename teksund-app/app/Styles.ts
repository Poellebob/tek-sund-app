import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // Common styles
    container: {
        flex: 1,  
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 16,
    },
    list: {
        width: '100%',
    },
    
    // Activity styles
    activityItem: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    activityInfo: {
        flex: 1,
        marginLeft: 12,
    },
    activityName: {
        fontSize: 16,
        fontWeight: '500',
    },
    descriptionText: {
        fontSize: 14,
        marginTop: 4,
    },
    
    // Common button styles
    actionButton: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    actionButtonText: {
        color: '#fff',
        fontWeight: '500',
    },
    
    // Friend-specific styles
    friendItem: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    friendInfo: {
        flex: 1,
        marginLeft: 12,
    },
    friendName: {
        fontSize: 16,
        fontWeight: '500',
    },
    statusText: {
        fontSize: 14,
        marginTop: 4,
    },
    addFriendButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    addFriendText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    // Additional common styles
    text: {
        color: '#000'
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#00b',
    },
});

export default styles;
