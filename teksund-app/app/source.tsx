import { useEffect } from 'react';
import { Linking } from 'react-native';

export default function GitHubRedirect() {
    useEffect(() => {
        // Redirect to GitHub repository
        const redirectToGitHub = async () => {
            const url = 'https://github.com/Poellebob/tek-sund-app';
            const supported = await Linking.canOpenURL(url);
            
            if (supported) {
                await Linking.openURL(url);
            } else {
                console.error('Cannot open URL:', url);
            }
        };

        redirectToGitHub();
    }, []);

    return null;
}