import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
});

export default styles;
