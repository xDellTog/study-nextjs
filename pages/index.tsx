import type {NextPage} from 'next';
import Panel from "../components/primitives/panel/Panel";
import {useEffect} from "react";
import useNavigation from "../hooks/useNavigation";

const Splash: NextPage = () => {
    const {goTo} = useNavigation();

    useEffect(() => {
        goTo('/home');
    });

    return (
        <Panel css={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            Loading...
        </Panel>
    );
};

export default Splash;
